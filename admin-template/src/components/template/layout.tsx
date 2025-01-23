import useAppData from "../../data/hook/useAppData"
import Cabecalho from "./cabecalho"
import Conteudo from "./conteudo"
import MenuLateral from "./menu-lateral"

interface LayoutProps {
  titulo: string,
  subtitulo: string,
  children?: any
}

export default function Layout(props: LayoutProps) {
  const ctx = useAppData()

  return (
    <div className={`${ctx.tema} flex h-screen w-screen`}>
      <MenuLateral/>
      <div className={`flex flex-col bg-gray-300 w-full p-7 dark:bg-gray-800`}>
        <Cabecalho
          titulo={props.titulo}
          subtitulo={props.subtitulo}
        />
        <Conteudo>
          {props.children}
        </Conteudo>
      </div>
    </div>
  )
}
