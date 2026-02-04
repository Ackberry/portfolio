'use client'

import PageLayout from '../components/PageLayout'
import SkillsCarousels from '../components/SkillsCarousel'

export default function SkillsPage() {
  return (
    <PageLayout title="Skills">
      <div className="w-full">
        <SkillsCarousels />
      </div>
    </PageLayout>
  )
}
