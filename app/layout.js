import './globals.css'
import Container from './components/Container'
import { UserProvider } from '@auth0/nextjs-auth0/client',
import localFont from '@next/font/local'


export const metadata = {
  title: 'Palo Santo Web',
  description: 'Palo Santo Appartments',
}

const bozon = localFont({
  src: [
    {
      path: '../../public/fonts/Bozon-Black-Italic.otf',
    },
    {
      path: '../../public/fonts/Bozon-Black.otf',
    },
    {
      path: '../../public/fonts/Bozon-Bold-Italic.otf',
    },
    {
      path: '../../public/fonts/Bozon-Bold.otf',
    },
    {
      path: '../../public/fonts/Bozon-Book-Italic.otf',
    },
    {
      path: '../../public/fonts/Bozon-Book.otf',
    },
    {
      path: '../../public/fonts/Bozon-Demi-Bold-Italic.otf',
    },
    {
      path: '../../public/fonts/Bozon-Demi-Bold.otf',
    },
    {
      path: '../../public/fonts/Bozon-Extra-Bold.otf',
    },
    {
      path: '../../public/fonts/Bozon-Hairline-Italic.otf',
    },
    {
      path: '../../public/fonts/Bozon-Hairline.otf',
    },
    {
      path: '../../public/fonts/Bozon-Ligth-Italic.otf',
    },
    {
      path: '../../public/fonts/Bozon-Light.otf',
    },
    {
      path: '../../public/fonts/Bozon-Regular-Italic.otf',
    },
    {
      path: '../../public/fonts/Bozon-Regular.otf',
    },
    {
      path: '../../public/fonts/Bozon-Thin-Italic.otf',
    },
    {
      path: '../../public/fonts/Bozon-Thin.otf',
    },
    {
      path: '../../public/fonts/Bozon-Ultra-Thin.otf',
    },
    {
      path: '../../public/fonts/Bozon-Ultra-Thin-Italic.otf',
    }
  ],
  variable: '--font-bozon'
})


export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${bozon.variable} font-sans`}>
      <UserProvider>
        <body >
          <Container>
            {children}
          </Container>
        </body>
      </UserProvider>
    </html>
  )
}