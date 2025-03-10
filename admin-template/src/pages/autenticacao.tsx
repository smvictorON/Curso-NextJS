import { useState } from "react";
import AuthInput from "../components/auth/auth-input";
import { IconeAtencao } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Autenticacao(){
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState(null)
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  const { loginGoogle, login, cadastrar } = useAuth()

  const submeter = async () => {
    try{
      if (modo === 'login') {
        await login(email, senha)
      } else {
        await cadastrar(email, senha)
      }
    }catch(e){
      console.log(e)
      exibirErro("Erro inesperado!")
    }
  }

  const exibirErro = (msg, tempoEmSegundos = 5) => {
    setErro(msg)
    setTimeout(() => {
      setErro(null)
    }, 1000 * tempoEmSegundos);
  }

  return(
    <div className="flex h-screen items-center justify-center bg-white text-black">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="https://picsum.photos/800/600"
          alt="Image Auth"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold mb-5">
          {modo === 'login' ? 'Entre com a sua conta!' : 'Cadastre-se na plataforma!'}
        </h1>

        {erro &&
          <div className="flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg">
            {IconeAtencao()}
            <span className="ml-3">{erro}</span>
          </div>
        }

        <AuthInput label="Email" valor={email} valorMudou={setEmail} tipo="email" obrigatorio/>
        <AuthInput label="Senha" valor={senha} valorMudou={setSenha} tipo="password" obrigatorio/>

        <button onClick={submeter} className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}>
          {modo === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        <hr className="my-6 border-gray-300 w-full"/>

        <button onClick={loginGoogle} className={`w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3`}>
          Entrar com Google
        </button>

        {
          modo === 'login' ? (
            <p className="mt-8">
              Novo por aqui?
              <a onClick={() => setModo('cadastro')}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
              > Criar uma conta!</a>
            </p>
          ):(
            <p className="mt-8">
              Ja faz parte?
              <a onClick={() => setModo('login')}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
              > Entre com suas credenciais!</a>
            </p>
          )
        }
      </div>
    </div>
  )
}