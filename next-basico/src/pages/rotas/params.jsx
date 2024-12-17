import { useRouter } from 'next/router'
import Link from 'next/link'

export default function params() {
  const router = useRouter()

  return(
    <div>
      <h1>params / {router.query.codigo} & {router.query.nome}</h1>

      <Link href="/rotas">
        <button>
          voltar
        </button>
      </Link>
    </div>
  )
}