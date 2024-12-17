import { useRouter } from 'next/router'
import Link from 'next/link'

export default function buscar() {
  const router = useRouter()

  return(
    <div>
      <h1>rotas / {router.query.codigo} / buscar</h1>

      <Link href="/rotas">
        <button>
          voltar
        </button>
      </Link>
    </div>
  )
}