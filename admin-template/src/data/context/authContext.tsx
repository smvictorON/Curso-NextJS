import firebase from '../../firebase/config'
import { createContext, useEffect, useState } from "react";
import Usuario from '../../models/usuario';
import router from 'next/router'
import Cookies from 'js-cookie'

interface AuthContextProps {
  usuario?: Usuario,
  carregando?: boolean,
  loginGoogle?: () => Promise<void>
  logout?: () => Promise<void>
  login?: (email, senha) => Promise<void>
  cadastrar?: (email, senha) => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario>{
  const token = await usuarioFirebase.getIdToken()
  return {
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName,
    email: usuarioFirebase.email,
    token,
    provedor: usuarioFirebase.providerData[0].providerId,
    imagemUrl: usuarioFirebase.photoURL
  }
}

function gerenciarCookie(logado: boolean) {
  if(logado)
    Cookies.set('admin-template-auth', logado, {
      expires: 7
    })
  else
    Cookies.remove('admin-template-auth')
}

export function AuthProvider(props){
  const [usuario, setUsuario] = useState<Usuario>(null)
  const [carregando, setCarregando] = useState(true)

  const configurarSessao = async (usuarioFirebase: firebase.User) => {
    if(usuarioFirebase?.email){
      const usuario = await usuarioNormalizado(usuarioFirebase)
      setUsuario(usuario)
      gerenciarCookie(true)
      setCarregando(false)
      return usuario.email
    } else {
      setUsuario(null)
      gerenciarCookie(false)
      setCarregando(false)
      return false
    }
  }

  const cadastrar = async (email, senha) => {
    try {
      setCarregando(true)
      const resp = await firebase.auth().createUserWithEmailAndPassword(email, senha)

      await configurarSessao(resp.user)
      router.push('/')
    } finally {
      setCarregando(false)
    }
  }

  const loginGoogle = async () => {
    try {
      setCarregando(true)
      const resp = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )

      await configurarSessao(resp.user)
      router.push('/')
    } finally {
      setCarregando(false)
    }
  }

  const login = async (email, senha) => {
    try {
      setCarregando(true)
      const resp = await firebase.auth().signInWithEmailAndPassword(email, senha)

      await configurarSessao(resp.user)
      router.push('/')
    } finally {
      setCarregando(false)
    }
  }

  const logout = async () => {
    try{
      setCarregando(true)
      await firebase.auth().signOut()
      await configurarSessao(null)
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    if(Cookies.get('admin-template-auth')){
      const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
      return () => cancelar()
    }else{
      setCarregando(false)
    }
  }, [])

  return(
    <AuthContext.Provider value={{
      usuario: usuario,
      carregando: carregando,
      loginGoogle,
      logout,
      login,
      cadastrar
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext