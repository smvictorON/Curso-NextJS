export async function getStaticProps () {
  console.log('___________________[SERVER]')
  const resp = await fetch('http://localhost:3000/api/produtos')
  const produtos = await resp.json()

  return {
    props: {
      produtos
    }
  }
}

export default function Estatico4(props) {
  console.log('___________________[CLIENT]')
  return(
    <>
      <h1>Estatico 4</h1>
      <ul>
        {props.produtos.map(prod => (
          <li key={prod.id}>{prod.nome} - R$:{prod.preco}</li>
        ))}
      </ul>
    </>
  )
}