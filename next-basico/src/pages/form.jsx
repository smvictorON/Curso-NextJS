import { useState } from "react"

export default function form(){
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState(0)
  const [usuarios, setUsuarios] = useState([])

  const salvar = async () => {
    await fetch('/api/form', {
      method: "POST",
      body: JSON.stringify({
        nome,
        idade
      })
    })

    setNome('')
    setIdade(0)

    obter()
  }

  const obter = () => {
    fetch('/api/form')
    .then(res => res.json())
    .then(res => setUsuarios(res))

  }

  const renderUsers = () => {
    return (
      usuarios.map((user, index) => (
        <li key={index}>
          {user.nome} - {user.idade}
        </li>
      ))
    )
  }

  return(
    <div>
      <h1>Integrando com API</h1>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input><br/>
      <input type="number" value={idade} onChange={(e) => setIdade(+e.target.value)}></input><br/>

      <button onClick={salvar}>Salvar</button><br/>
      <button onClick={obter}>Obter Usuarios</button><br/>

      <ul>
        {renderUsers()}
      </ul>
    </div>
  )

}