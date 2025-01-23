import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { AppProvider } from '../data/context/appContext'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps}/>
    </AppProvider>
  )
}

export default MyApp
