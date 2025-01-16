import Botao from "../components/botao";
import Layout from "../components/layout";
import Tabela from "../components/tabela";
import Formulario from "../components/formulario";
import useClientes from "../hooks/use-clientes";

export default function Home() {
  const {
    tabelaVisivel,
    clientes,
    cliente,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    exibirTabela
  } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white`}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ?
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="green"
              onClick={() => novoCliente()}>Novo Cliente</Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        :
          <Formulario
            cliente={cliente}
            cancelado={() => exibirTabela()}
            clienteMudou={salvarCliente}
          />
        }
      </Layout>
    </div>
  )
}
