import Link from 'next/link'
import type { GetStaticProps } from 'next'

export default function Home() {
  return <div></div>
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      // ...
    },
  }
}
