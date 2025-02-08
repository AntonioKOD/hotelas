"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import logo from '@/public/logo-inverse-246x110.png'
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-4 bg-black/90 backdrop-blur-sm" : "py-8"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-light tracking-wider">
            <Image src={logo} alt="Hotel Asbak" width={123} height={55} />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {["Rooms"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-white/80 hover:text-white transition-colors text-sm tracking-wider"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="text-white border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition-colors text-sm tracking-wider"
            >
              Book Now
            </Link>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white md:hidden" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black"
          >
            <div className="h-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <ul className="space-y-8">
                  {["Rooms"].map((item) => (
                    <li key={item}>
                      <Link
                        href={`/${item.toLowerCase().replace(" ", "-")}`}
                        className="text-white text-3xl font-light tracking-wider hover:text-gray-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/#contact"
                      className="text-white text-3xl font-light tracking-wider hover:text-gray-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Book Now
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

