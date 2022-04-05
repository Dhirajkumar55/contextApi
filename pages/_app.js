import '../styles/globals.css'
import {UserAuthProvider} from "../context/UserAuthProvider"
function MyApp({ Component, pageProps }) {

  return <UserAuthProvider>
      <Component {...pageProps} />
    </UserAuthProvider>
}

export default MyApp
