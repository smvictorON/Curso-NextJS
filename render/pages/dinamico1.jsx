export function getServerSideProps() {
  console.log('Server')
  return {
    props: {
      numero: Math.random()
    }
  }
}

export default function Dinamico1(props) {
  console.log('Client')
  return (
    <>
      <h1>Dinamico1</h1>
      <h2>{props.numero}</h2>
    </>
  )
}