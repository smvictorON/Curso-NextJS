import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { AppProvider } from '../data/context/appContext'
import { AuthProvider } from '../data/context/authContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps}/>
      </AppProvider>
    </AuthProvider>
  )
}

export default MyApp
