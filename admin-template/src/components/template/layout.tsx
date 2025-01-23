import useAppData from "../../data/hook/useAppData"
// import ForcarAuthFunc from "../../functions/forcar-auth"
import ForcarAuth from "../auth/forcar-auth"
import Cabecalho from "./cabecalho"
import Conteudo from "./conteudo"
import MenuLateral from "./menu-lateral"

interface LayoutProps {
  titulo: string,
  subtitulo: string,
  children?: any
}

//tem 2 metodos para proteger as rotas, o componente e a função
//eles tem o mesmoe feito porém deixei o componente implementado
//e comentei a função

export default function Layout(props: LayoutProps) {
  const ctx = useAppData()

  // return ForcarAuthFunc(
  return (
    <ForcarAuth>
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
    </ForcarAuth>
  )
}
