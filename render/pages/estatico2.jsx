export function getStaticProps () {
  return {
    props: {
      numero: Math.random()
    }
  }
}

export default function Estatico2(props) {
  return(
    <>
      <h1>Estatico 2</h1>
      <div>{props.numero}</div>
    </>
  )
}