import { HeroBanner } from '@/components/home/HeroBanner'
import { CategoryGrid } from '@/components/home/CategoryGrid'
import { PromoRail } from '@/components/home/PromoRail'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { StoreLocatorBanner } from '@/components/home/StoreLocatorBanner'

export default function HomePage() {
  return (
    <div>
      <section className="container mx-auto px-4 py-6">
        <HeroBanner />
      </section>

      <section className="container mx-auto px-4">
        <CategoryGrid />
      </section>

      <PromoRail />

      <FeaturedProducts />

      <StoreLocatorBanner />
    </div>
  )
}

