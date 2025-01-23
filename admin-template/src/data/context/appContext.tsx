import { createContext, useState } from "react";

type Tema = "dark" | ""

interface AppContextProps {
  tema?: Tema,
  alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props){
  const [tema, setTema] = useState<Tema>("")

  const alternarTema = () => {
    setTema(tema === "" ? "dark" : "")
  }

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