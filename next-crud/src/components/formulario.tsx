import { useState } from "react";
import Entrada from "./entrada";
import Cliente from "../core/cliente";
import Botao from "./botao";

interface FormularioProps {
  cliente: Cliente
  cancelado?: () => void
  clienteMudou?: (cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id ?? null
  const [nome, setNome] = useState(props.cliente?.nome ?? "")
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

  return (
    <div>
        {id && <Entrada texto="Id" valor={id} somenteLeitura className="mb-7"/>}
        <Entrada texto="Nome" valor={nome} valorMudou={setNome} className="mb-7"/>
        <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade}/>

        <div className="flex justify-end mt-7">
          <Botao cor="blue" className="mr-2"
            onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
          >
            {id ? "Alterar" : "Salvar"}
          </Botao>
          <Botao onClick={props.cancelado}>
            Cancelar
          </Botao>
        </div>
    </div>
  )
}
