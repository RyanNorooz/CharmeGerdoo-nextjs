import Head from 'next/head'

import Header from '@/components/header'
import Footer from '@/components/footer'

interface LayoutProps /* extends AppProps */ {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Charme Gerdoo</title>
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
