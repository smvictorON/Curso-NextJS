export async function getServerSideProps() {
  console.log('___________________[SERVER]')
  const resp = await fetch('http://localhost:3000/api/produtos')
  const produtos = await resp.json()

  return {
    props: {
      produtos
    }
  }
}

export default function Dinamico2(props) {
  console.log('___________________[CLIENT]')
  return (
    <>
      <h1>Dinamcio 2</h1>
      <ul>
        {props.produtos.map(prod => (
          <li key={prod.id}>
            {prod.id}: {prod.nome} - R$:{prod.preco}
          </li>
        ))}
      </ul>
    </>
  )
}