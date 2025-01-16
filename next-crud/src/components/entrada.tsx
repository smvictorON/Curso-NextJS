interface EntradaProps {
  texto: string
  tipo?: 'text' | 'number'
  valor: any
  somenteLeitura?: boolean
  valorMudou?: (valor: any) => void;
  className?: string
}

export default function Entrada(props: EntradaProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.texto}</label>
      <input
        type={props.tipo ?? 'text'}
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        readOnly={props.somenteLeitura}
        className={`border border-purple-500 rounded-lg bg-gray-100 focus:outline-none px-4 py-2
        ${props.somenteLeitura ? '' : 'focus:bg-white' }`}
      />
    </div>
  )
}
