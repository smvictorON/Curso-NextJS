import { useRouter } from 'next/router'
import router from 'next/router'
import Link from 'next/link'

export default function index() {
  const router1 = useRouter()

  const navParam = () => {
    router1.push({
      pathname: '/rotas/params',
      query:{
        codigo: '1',
        nome: 'victor'
      }
    })
  }

  return(
    <div>
      <h1>index</h1>

      <ul>
        <Link href="/rotas/params?codigo=1&nome=victor">
          <l1>Params</l1>
        </Link>
        <Link href="/rotas/1/buscar">
          <l1>Buscar</l1>
        </Link>
        <Link href="/rotas/1/victor">
          <l1>Victor</l1>
        </Link>
      </ul>

      <button onClick={() => router1.push('rotas/params?codigo=1&nome=victor')}>
        Params
      </button>
      <button onClick={() => router.push('rotas/1/buscar')}>
        Buscar
      </button>
      <button onClick={() => router1.push('rotas/1/victor')}>
        Victor
      </button>

      <br/>

      <button onClick={() => navParam()}>
        Params2
      </button>
    </div>
  )
}