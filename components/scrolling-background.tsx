"use client"

import { useEffect, useRef } from "react"

export default function ScrollingBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create multiple rows of scrolling text for seamless effect
    const createScrollingRow = (delay = 0) => {
      const row = document.createElement("div")
      row.className = "scrolling-row"
      row.style.animationDelay = `${delay}s`

      // Create multiple instances of "Artshaft" for seamless scrolling
      for (let i = 0; i < 20; i++) {
        const textElement = document.createElement("span")
        textElement.textContent = "Artshaft"
        textElement.className = "artshaft-text"
        row.appendChild(textElement)
      }

      return row
    }

    // Clear existing content and add multiple rows
    container.innerHTML = ""
    for (let i = 0; i < 8; i++) {
      container.appendChild(createScrollingRow(i * -2))
    }
  }, [])

  return (
    <div id="home" className="min-h-screen bg-black overflow-hidden relative pt-16">
      {/* Scrolling Background */}
      <div ref={containerRef} className="absolute inset-0 flex flex-col justify-center items-center space-y-8" />

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-balance">Welcome to Artshaft</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 text-balance">Dynamic. Creative. Futuristic.</p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all text-lg">
            Explore More
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrolling-row {
          display: flex;
          white-space: nowrap;
          animation: scroll-left 20s linear infinite;
          margin: 1rem 0;
        }

        .artshaft-text {
          font-family: var(--font-sans);
          font-size: clamp(3rem, 8vw, 8rem);
          font-weight: 900;
          color: rgba(255, 255, 255, 0.1);
          margin-right: 4rem;
          transition: all 0.3s ease;
          cursor: pointer;
          user-select: none;
          letter-spacing: -0.02em;
        }

        .artshaft-text:hover {
          background: linear-gradient(
            45deg,
            #3b82f6,
            #ec4899,
            #8b5cf6,
            #f97316
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 2s ease infinite;
          transform: scale(1.05);
          text-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .artshaft-text {
            font-size: clamp(2rem, 12vw, 4rem);
            margin-right: 2rem;
          }

          .scrolling-row {
            margin: 0.5rem 0;
          }
        }

        /* Performance optimizations */
        .scrolling-row {
          will-change: transform;
        }

        .artshaft-text {
          will-change: transform, color;
        }
      `}</style>
    </div>
  )
}
