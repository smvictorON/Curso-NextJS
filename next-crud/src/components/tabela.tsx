import Cliente from "../core/cliente"
import { IconeEdicao, IconeLixo } from "./icones"

interface TabelaProps {
  clientes: Cliente[]
  clienteSelecionado?: (cliente: Cliente) => void
  clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {
  const exibirAcoes = (props.clienteExcluido || props.clienteSelecionado)

  const renderizarCabecalho = () => {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {exibirAcoes && <th className="p-4">Ações</th>}
      </tr>
    )
  }

  const renderizarDados = () => {
    return props.clientes?.map((cliente, index) => {
      return (
        <tr key={cliente.id} className={`${index%2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.nome}</td>
          <td className="text-left p-4">{cliente.idade}</td>
          {exibirAcoes && renderizarAcoes(cliente)}
        </tr>
      )
    })
  }

  const renderizarAcoes = (cliente: Cliente) => {
    return (
      <td className="flex justify-center">
        {props.clienteSelecionado &&
          <button className="flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1" onClick={() => props.clienteSelecionado?.(cliente)}>
            {IconeEdicao}
          </button>
        }
        {props.clienteExcluido &&
          <button className="flex justify-center items-center text-red-600 rounded-full hover:bg-purple-50 p-2 m-1" onClick={() => props.clienteExcluido?.(cliente)}>
            {IconeLixo}
          </button>
        }
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100">
        {renderizarCabecalho()}
      </thead>
      <tbody>
        {renderizarDados()}
      </tbody>
    </table>
  )
}