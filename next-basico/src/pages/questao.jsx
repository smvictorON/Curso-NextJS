import { useEffect, useState } from "react"

export default function questao() {
  const [questao, setQuestao] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3002/api/questao/123')
    .then(res => res.json())
    .then(res => setQuestao(res))
  },[])

  const renderRespostas = () => {
    return (
      questao?.respostas.map((resp, index) => (
        <li key={index}>{resp}</li>
      ))
    )
  }

  return(
    <div>
      <h1>Questão</h1>
      <span>{questao?.enunciado}</span>

      <ul>
        {renderRespostas()}
      </ul>
    </div>
  )
}