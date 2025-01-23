import Image from 'next/image'
import loading from '../../public/images/loading.gif'
import useAuth from '../data/hook/useAuth'
import router from 'next/router'
import Head from 'next/head'

export default function ForcarAuthFunc(jsx) {
  const { usuario, carregando } = useAuth()

  const renderizarConteudo = () => {
    return (
      <>
        <Head>
          <script dangerouslySetInnerHTML={{
            __html: `
              if(!document.cookie?.includes("admin-template-auth")){
                window.location.href = "/autenticacao"
              }
            `
          }}/>
        </Head>
        {jsx}
      </>
    )
  }

  const renderizarCarregando = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image src={loading} alt='loading'/>
      </div>
    )
  }

  if(!carregando && usuario?.email)
    return renderizarConteudo()
  else if(carregando)
    return renderizarCarregando()
  else{
    router.push('/autenticacao')
    return null
  }
}