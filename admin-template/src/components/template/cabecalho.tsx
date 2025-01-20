import Titulo from "./titulo"

interface CabecalhoProps {
  titulo: string,
  subtitulo: string,
  children?: any
}

export default function Cabecalho(props: CabecalhoProps) {
  return (
    <div>
      <Titulo
        titulo={props.titulo}
        subtitulo={props.subtitulo}
      />
    </div>
  )
}
