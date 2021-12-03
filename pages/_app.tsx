import Script from 'next/script'
import Head from 'next/head'

import 'tailwindcss/tailwind.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'vazir-font/dist/font-face.css'

import '@/styles/globals.scss'
import '@/styles/style.scss'

import type { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'

type NextPageWithLayout = NextPage & {
  layout?: (page: ReactElement) => ReactNode
}

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.layout ?? ((page) => page)
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      />
      
      <Head>
        {/* Primary Meta Tags */}
        <title>چرم گردو - تولید انواع محسولات چرمی</title>
        <meta name="title" content="چرم گردو - تولید انواع محسولات چرمی"/>
        <meta name="description" content="دستسازه های چرمی با بهترین متریال به سلیقه شما"/>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://charmegerdoo.ir/"/>
        <meta property="og:title" content="چرم گردو - تولید انواع محسولات چرمی"/>
        <meta property="og:description" content="دستسازه های چرمی با بهترین متریال به سلیقه شما"/>
        <meta property="og:image" content="/images/logo.png"/>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://charmegerdoo.ir/"/>
        <meta property="twitter:title" content="چرم گردو - تولید انواع محسولات چرمی"/>
        <meta property="twitter:description" content="دستسازه های چرمی با بهترین متریال به سلیقه شما"/>
        <meta property="twitter:image" content="/images/logo.png"/>
      </Head>

      {Layout(<Component {...pageProps} />)}
    </>
  )
}
