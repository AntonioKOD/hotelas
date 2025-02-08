"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setStatus("success")
    setEmail("")
  }

  return (
    <section className="relative py-32 px-4 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#ffffff33_0%,#00000033_100%)]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center relative"
      >
        <h2 className="text-4xl md:text-5xl font-light mb-6">Stay Connected</h2>
        <p className="text-gray-400 mb-12 max-w-md mx-auto text-lg">
          Subscribe to our newsletter for exclusive offers and updates
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              required
            />
            <Button type="submit" disabled={status === "loading"} className="bg-white text-black hover:bg-gray-200">
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
        </form>
        {status === "success" && (
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-400 mt-4">
            Thank you for subscribing!
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}

