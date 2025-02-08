"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import logo from '@/public/logo-inverse-246x110.png'
import { ContactForm } from "@/components/contact-form"
import bgImage from '@/public/background.jpeg'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <main className="relative">
      <Navigation />

      <section ref={containerRef} className="h-screen relative overflow-hidden">
        <motion.div style={{ scale, opacity }} className="absolute inset-0">
          <Image
            src={bgImage}
            alt="Luxury hotel exterior"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        <div className="relative h-full flex items-center justify-center text-white px-4">
          <div className="text-center space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="hero-text font-light tracking-wider"
            >
              <Image src={logo} alt="Hotel Asbak" width={123} height={55} className="w-64 md:w-96 h-auto mx-auto mb-8"  />
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center gap-8"
            >
              <p className="text-xl font-light tracking-widest uppercase">Discover Comfort and Adventure at As Hotel Baks-Rrjoll - Where Every Stay is Unforgettable!</p>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white transition-colors"
              >
                Book Your Stay
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#ffffff33_0%,#00000033_100%)]" />
        </div>
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-8">
              <h2 className="text-5xl font-light">A World of Refinement</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
              Welcome to As Hotel Baks-Rrjoll, your perfect retreat in the heart of Rrjoll, Albania. With our modern, well-appointed rooms and prime location, we offer a serene escape that blends comfort with the allure of adventure. Our hotel serves as your ideal base to explore the natural beauty and local attractions of Rrjoll.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-light mb-2">12</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Suites</div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] group">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Luxury suite interior"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light mb-4">Experiences</h2>
            <p className="text-gray-600">Discover our world of exceptional offerings</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Rooms & Suites", image: "/placeholder.svg?height=800&width=600", link: "/rooms" },
              { title: "Fine Dining", image: "/placeholder.svg?height=800&width=600", link: "/dining" },
              { title: "Wellness", image: "/placeholder.svg?height=800&width=600", link: "/spa" },
            ].map((item, index) => (
              <Link href={item.link} key={item.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative h-[600px] overflow-hidden mb-6">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700" />
                  </div>
                  <h3 className="text-2xl font-light group-hover:text-gray-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-4 bg-neutral-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-8">
              <h2 className="text-5xl font-light">Your Journey Begins Here</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Book your stay directly with us to enjoy exclusive benefits and preferential rates.
              </p>
              <div className="space-y-4">
                <Button size="lg" className="w-full sm:w-auto">
                  Book Now
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Special Offers
                </Button>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Hotel amenities"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>
        <ContactForm/>
    </main>
  )
}

