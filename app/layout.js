import './globals.css'
import Container from './ui/components/Container'
import localFont from "next/font/local"
import { FormProvider } from './context/FormContext';
import { ToastContainer } from 'react-toastify';
import { ImagesProvider } from './context/ImagesContext';
import SessionWrapper from './ui/components/SesssionWrapper';


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
    <SessionWrapper>
    <html lang="es" className={`${bozon.variable} font-sans`}>
        <FormProvider>
          <ImagesProvider>
              <body suppressHydrationWarning={true}>
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light" />
                <Container>
                  {children}
                </Container>
              </body>
          </ImagesProvider>
        </FormProvider>
    </html>
    </SessionWrapper>

  )
}