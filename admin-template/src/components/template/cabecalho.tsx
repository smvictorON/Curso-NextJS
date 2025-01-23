import useAppData from "../../data/hook/useAppData"
import AvatarUsuario from "./avatar-usuario"
import BotaoAlternarTema from "./botao-alternar-tema"
import Titulo from "./titulo"

interface CabecalhoProps {
  titulo: string,
  subtitulo: string,
  children?: any
}

export default function Cabecalho(props: CabecalhoProps) {
  const ctx = useAppData()

  return (
    <div className="flex">
      <Titulo
        titulo={props.titulo}
        subtitulo={props.subtitulo}
      />
      <div className="flex flex-grow justify-end items-center">
        <BotaoAlternarTema tema={ctx.tema} alternarTema={ctx.alternarTema}/>
        <AvatarUsuario className="ml-3"/>
      </div>
    </div>
  )
}
