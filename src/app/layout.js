import { Inter } from 'next/font/google'
import './globals.css'
import Container from '@/Components/Container'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Palo Santo Web',
  description: 'Palo Santo Appartments',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Container>
        {children}
        </Container>
</body>
    </html>
  )
}
