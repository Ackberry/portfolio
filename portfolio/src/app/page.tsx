'use client'

import PortfolioFileTree from './components/PortfolioFileTree'

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1f2329]">
      <PortfolioFileTree initialSelectedId="readme-markdown" />
    </div>
  )
}
