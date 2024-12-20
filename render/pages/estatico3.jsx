export function getStaticProps () {
  return {
    revalidate: 5,
    props: {
      numero: Math.random()
    }
  }
}

export default function Estatico3(props) {
  return(
    <>
      <h1>Estatico 3</h1>
      <div>{props.numero}</div>
    </>
  )
}