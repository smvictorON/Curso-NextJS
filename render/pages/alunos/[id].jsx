export async function getStaticPaths() {
  const resp = await fetch(`http://localhost:3000/api/alunos/tutores`)
  const ids = await resp.json()

  const paths = ids.map(id => {
    return { params: { id } }
  })

  return {
    fallback: true, // 404
    paths
  }
}

export async function getStaticProps(context) {
  const resp = await fetch(`http://localhost:3000/api/alunos/${context.params.id}`)
  const aluno = await resp.json()
  return {
    props: {
      aluno
    }
  }
}

export default function AlunoPorId(props) {
  const { aluno } = props
  return (
    <>
      <h1>Detalhes do Aluno</h1>
      {aluno &&
        <>
          <h2>{aluno.id}</h2>
          <h2>{aluno.nome}</h2>
          <h2>{aluno.email}</h2>
        </>
      }
    </>
  )
}