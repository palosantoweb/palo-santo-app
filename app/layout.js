import './globals.css'
import Container from './components/Container'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import localFont from "next/font/local"
import { FormProvider } from './context/FormContext';


export const metadata = {
  title: 'Palo Santo Web',
  description: 'Palo Santo Appartments',
}

const bozon = localFont({
  src: [
    {
      path: '../public/fonts/Bozon-Black-Italic.otf',
      weight: '600'
    },
    {
      path: '../public/fonts/Bozon-Black.otf',
      weight: '600'
    },
    {
      path: '../public/fonts/Bozon-Bold-Italic.otf',
      weight: '600'
    },
    {
      path: '../public/fonts/Bozon-Bold.otf',
      weight: '600'
    },
    {
      path: '../public/fonts/Bozon-Book-Italic.otf',
      weight: '400'
    },
    {
      path: '../public/fonts/Bozon-Book.otf',
      weight: '300'
    },
    {
      path: '../public/fonts/Bozon-Demi-Bold-Italic.otf',
      weight: '400'

    },
    {
      path: '../public/fonts/Bozon-Demi-Bold.otf',
      weight: '400'

    },
    {
      path: '../public/fonts/Bozon-Extra-Bold.otf',
      weight: '800'

    },
    {
      path: '../public/fonts/Bozon-Hairline-Italic.otf',
      weight: '200'

    },
    {
      path: '../public/fonts/Bozon-Hairline.otf',
      weight: '200'

    },
    {
      path: '../public/fonts/Bozon-Light-Italic.otf',
      weight: '200'

    },
    {
      path: '../public/fonts/Bozon-Light.otf',
      weight: '200'

    },
    {
      path: '../public/fonts/Bozon-Regular-Italic.otf',
      weight: '200'

    },
    {
      path: '../public/fonts/Bozon-Regular.otf',
      weight: '400'

    },
    {
      path: '../public/fonts/Bozon-Thin-Italic.otf',
      weight: '200'

    },
    {
      path: '../public/fonts/Bozon-Thin.otf',
      weight: '200'

    },
    {
      path: '../public/fonts/Bozon-Ultra-Thin.otf',
      weight: '100'

    },
    {
      path: '../public/fonts/Bozon-Ultra-Thin-Italic.otf',
      weight: '100'

    }
  ],
  variable: '--font-bozon'
});


export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${bozon.variable} font-sans`}>
      <UserProvider>
        <FormProvider>
        <body >
          <Container>
            {children}
          </Container>
        </body>
        </FormProvider>
      </UserProvider>
    </html>
  )
}