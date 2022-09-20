import '../styles/globals.css'
import { CartProvider } from '../context/cart-context'
import { Header } from '../components/navigation/Header'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
