import { useRouter } from 'next/router'
import Link from 'next/link'

export default function nome() {
  const router = useRouter()

  return(
    <div>
      <h1>rotas / {router.query.codigo} / {router.query.nome} </h1>

      <Link href="/rotas">
        <button>
          voltar
        </button>
      </Link>
    </div>
  )
}