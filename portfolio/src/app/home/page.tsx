'use client'

import { useEffect, useState, useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import PageLayout from '../components/PageLayout'
import { AISummaryFooter } from 'ai-summary-footer'
import 'ai-summary-footer/styles.css'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
  const [clickedPhotoRect, setClickedPhotoRect] = useState<DOMRect | null>(null)
  const photoContainerRef = useRef<HTMLDivElement>(null)
  const modalBackdropRef = useRef<HTMLDivElement>(null)
  const modalImageRef = useRef<HTMLImageElement>(null)
  const photoRefs = useRef<(HTMLDivElement | null)[]>([])

  const photos = useMemo(() => [
    '/photos/1.jpeg',
    '/photos/2.jpeg',
    '/photos/3.jpeg',
    '/photos/4.jpeg'
  ], [])

  const photoStyles = useMemo(() => [
    { rotation: -6, x: -50, y: -50, zIndex: 1 },
    { rotation: 4, x: -15, y: -15, zIndex: 2 },
    { rotation: -5, x: 15, y: 15, zIndex: 3 },
    { rotation: 7, x: 50, y: 50, zIndex: 4 }
  ], [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (photoContainerRef.current && mounted) {
      const photoElements = photoContainerRef.current.children
      gsap.fromTo(
        photoElements,
        {
          opacity: 0,
          scale: 0.5,
          rotation: 0
        },
        {
          opacity: 1,
          scale: 1,
          rotation: (index) => photoStyles[index].rotation,
          x: (index) => photoStyles[index].x,
          y: (index) => photoStyles[index].y,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)"
        }
      )
    }
  }, [mounted, photoStyles])

  const handlePhotoClick = (photo: string, index: number, event: React.MouseEvent<HTMLDivElement>) => {
    const clickedElement = event.currentTarget
    const rect = clickedElement.getBoundingClientRect()
    setClickedPhotoRect(rect)
    setSelectedPhoto(photo)
  }

  const closePhotoModal = () => {
    if (modalBackdropRef.current && modalImageRef.current && clickedPhotoRect) {
      const photoIndex = photos.indexOf(selectedPhoto!)
      const originalPhoto = photoRefs.current[photoIndex]
      
      if (originalPhoto) {
        const rect = originalPhoto.getBoundingClientRect()
        const finalRect = modalImageRef.current.getBoundingClientRect()
        
        const startX = rect.left + rect.width / 2
        const startY = rect.top + rect.height / 2
        const endX = finalRect.left + finalRect.width / 2
        const endY = finalRect.top + finalRect.height / 2
        
        const scaleX = rect.width / finalRect.width
        const scaleY = rect.height / finalRect.height
        
        gsap.to(modalImageRef.current, {
          x: startX - endX,
          y: startY - endY,
          scaleX: scaleX,
          scaleY: scaleY,
          rotation: photoStyles[photoIndex].rotation,
          duration: 0.4,
          ease: "power2.inOut"
        })
      }
      
      gsap.to([modalBackdropRef.current, modalImageRef.current], {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          if (modalImageRef.current) {
            gsap.set(modalImageRef.current, { x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0 })
          }
          setSelectedPhoto(null)
          setClickedPhotoRect(null)
        }
      })
    } else {
      setSelectedPhoto(null)
      setClickedPhotoRect(null)
    }
  }

  useEffect(() => {
    if (selectedPhoto && clickedPhotoRect && modalBackdropRef.current && modalImageRef.current) {
      const photoIndex = photos.indexOf(selectedPhoto)
      
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const finalX = windowWidth / 2
      const finalY = windowHeight / 2
      
      const startX = clickedPhotoRect.left + clickedPhotoRect.width / 2
      const startY = clickedPhotoRect.top + clickedPhotoRect.height / 2
      
      const deltaX = finalX - startX
      const deltaY = finalY - startY
      
      const finalRect = modalImageRef.current.getBoundingClientRect()
      const scaleX = clickedPhotoRect.width / finalRect.width
      const scaleY = clickedPhotoRect.height / finalRect.height
      
      gsap.set(modalBackdropRef.current, { opacity: 0 })
      gsap.set(modalImageRef.current, {
        opacity: 0,
        x: -deltaX,
        y: -deltaY,
        scaleX: scaleX,
        scaleY: scaleY,
        rotation: photoStyles[photoIndex].rotation,
        transformOrigin: "center center"
      })

      gsap.to(modalBackdropRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      })
      
      gsap.to(modalImageRef.current, {
        opacity: 1,
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        duration: 0.6,
        ease: "power3.out"
      })
    }
  }, [selectedPhoto, clickedPhotoRect, photos, photoStyles])

  return (
    <PageLayout>
      <section className="min-h-[80vh] flex flex-row justify-center items-center px-4 sm:px-8 relative gap-12">
        {/* Photos Section - Left Side - Overlapping Cards */}
        <div 
          ref={photoContainerRef}
          className="hidden lg:flex relative items-center justify-center"
          style={{ width: '420px', height: '420px' }}
        >
          {photos.map((src, index) => (
            <div
              key={src}
              ref={(el) => {
                photoRefs.current[index] = el
              }}
              onClick={(e) => handlePhotoClick(src, index, e)}
              className="absolute cursor-pointer rounded-lg overflow-hidden shadow-2xl transition-transform hover:scale-110 hover:z-50"
              style={{
                width: '200px',
                height: '250px',
                transform: `rotate(${photoStyles[index].rotation}deg) translate(${photoStyles[index].x}px, ${photoStyles[index].y}px)`,
                zIndex: photoStyles[index].zIndex,
              }}
            >
              <img
                src={src}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Text Content - Right Side */}
        <div className="flex flex-col justify-center items-center text-center bg-transparent text-black dark:text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Deep Akbari.</span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6">
            Aspiring Software Engineer
          </h2>

          <p className="max-w-2xl text-md sm:text-lg text-gray-600 dark:text-gray-400 mb-8 font-mono">
            I&apos;m passionate about building cool projects with AI, or any new technology that interests
            me. Currently, I am working on <a className="text-blue-600">a reddit query api</a>
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-mono mb-8 text-black dark:text-white">About Me</h2>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="font-mono">
                19 yo, computer science sophomore, going to university of south florida (on a presidential scholarship yay). i&apos;ve been getting more into programming recently and i do so by creating side projects to solve my daily problems :)
              </p>
            </div>
          </div>

          {/* AI Summary Section */}
          <div className="mt-16">
            <div className="max-w-lg mx-auto w-full backdrop-blur-md rounded-2xl p-8 bg-transparent border border-white/20 dark:border-white/10">
              <AISummaryFooter
                companyName="Ackberry"
                companyUrl="https://ackberry.club"
                prompt="Tell me about {companyName} at {companyUrl}. What are their skills and projects?"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div
          ref={modalBackdropRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closePhotoModal}
        >
          <div className="relative max-w-5xl max-h-[90vh] p-4">
            <button
              onClick={closePhotoModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl font-bold z-10 transition-opacity hover:opacity-70"
              aria-label="Close"
            >
              ×
            </button>
            <img
              ref={modalImageRef}
              src={selectedPhoto}
              alt="Full size photo"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </PageLayout>
  )
}
