import './globals.css'
import Container from './Container'
import { UserProvider } from '@auth0/nextjs-auth0/client'

export const metadata = {
  title: 'Palo Santo Web',
  description: 'Palo Santo Appartments',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
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