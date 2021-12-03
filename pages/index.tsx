import DefaultLayout from '@/components/defaultLayout'
import HeroSection from '@/components/home/HeroSection'
import CardsSection from '@/components/home/CardsSection'
import AboutUsSection from '@/components/home/AboutUsSection'
import TopProductsSection from '@/components/home/TopProductsSection'

Home.layout = (page: React.ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default function Home() {
  return (
    <>
      <HeroSection />
      <CardsSection />
      <AboutUsSection />
      <TopProductsSection />
    </>
  )
}
