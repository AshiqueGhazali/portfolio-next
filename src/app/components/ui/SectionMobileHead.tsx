import React, { useEffect, useRef, useState } from 'react'

const SectionMobileHead = ({className, title}: {className?: string, title: string}) => {
  const [isVisible, setIsVisible] = useState(false)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (lineRef.current) {
      observer.observe(lineRef.current)
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current)
      }
    }
  }, [])

  return (
    <div className={`flex w-full lg:hidden items-center pointer-events-none gap-2 ${className}`}>
      <div 
        ref={lineRef}
        className="w-full h-1 bg-[#FFFFFF]/60 overflow-hidden relative"
      >
        <div 
          className={`absolute inset-0 bg-white transition-transform duration-700 ease-out ${
            isVisible ? 'translate-x-0' : '-translate-x-full'
          }`}
        />
      </div>
      <p className="flex-shrink-0 font-medium text-[16px] capitalize">{title}</p>
    </div>
  )
}

export default SectionMobileHead