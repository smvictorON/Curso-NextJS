import Botao from "../components/botao";
import Layout from "../components/layout";
import Tabela from "../components/tabela";
import Formulario from "../components/formulario";
import Cliente from "../core/cliente";
import { useState } from "react";

export default function Home() {
  const [visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela')

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 25, '2'),
    new Cliente('Carlos', 46, '3'),
    new Cliente('Pedro', 51, '4')
  ]

  const clienteSelecionado = (cliente: Cliente) => {
    console.log("🚀 ~ clienteSelecionado ~ cliente:", cliente.nome)
  }

  const clienteExcluido = (cliente: Cliente) => {
    console.log("🚀 ~ clienteExcluido ~ cliente:", cliente.nome)
  }

  const salvarCliente = (cliente: Cliente) => {
    console.log("🚀 ~ salvarCliente ~ cliente:", cliente)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white`}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ?
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="green"
              onClick={() => setVisivel('formulario')}>Novo Cliente</Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        :
          <Formulario
            cliente={clientes[0]}
            cancelado={() => setVisivel('tabela')}
            clienteMudou={salvarCliente}
          />
        }
      </Layout>
    </div>
  )
}
