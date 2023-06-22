import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'

export const metadata = {
    title: 'Carz finder',
    description: 'Car finder application',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className='relative'>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
