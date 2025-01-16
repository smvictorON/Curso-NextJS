import { useEffect, useState } from "react"
import Cliente from "../core/cliente"
import ColecaoCliente from "../backend/db/colecaoCliente"
import ClienteRepositorio from "../core/clienteRepositorio"
import useTabelaOuForm from "./use-tabela-ou-form"

export default function useClientes(){
  const {
    tabelaVisivel,
    exibirFormulario,
    exibirTabela
  } = useTabelaOuForm()
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  const repo: ClienteRepositorio = new ColecaoCliente()

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  const selecionarCliente = (cliente: Cliente) => {
    setCliente(cliente)
    exibirFormulario()
  }

  const excluirCliente = async (cliente: Cliente) => {
    await repo.excluir(cliente)
    obterTodos()
  }

  const salvarCliente = async (cliente: Cliente) => {
    await repo.salvar(cliente)
    obterTodos()
  }

  const novoCliente = () => {
    setCliente(Cliente.vazio())
    exibirFormulario()
  }

  return {
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    clientes,
    cliente,
    exibirTabela
  }
}