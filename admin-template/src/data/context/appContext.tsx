import { createContext, useEffect, useState } from "react";

// type Tema = "dark" | ""

interface AppContextProps {
  tema?: string,
  alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props){
  const [tema, setTema] = useState("dark")

  const alternarTema = () => {
    const novoTema = tema === "" ? "dark" : ""
    setTema(novoTema)
    localStorage.setItem('admin-template-tema', novoTema)
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem('admin-template-tema')
    setTema(temaSalvo)
  }, [])

  return(
    <AppContext.Provider value={{
      tema: tema,
      alternarTema
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext