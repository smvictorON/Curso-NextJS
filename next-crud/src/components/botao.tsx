interface BotaoProps {
  children: any
  cor?: 'green' | 'blue' | 'gray'
  className?: string
  onClick?: () => void
}

export default function Botao(props: BotaoProps) {
  const cor = props.cor ?? 'gray'
  return (
    <button className={`bg-gradient-to-r from-${cor}-400 to-${cor}-700 text-white
    rounded-md px-4 py-2 ${props.className}`}
    onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
