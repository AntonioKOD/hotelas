"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { EmailTemplateProps } from "./email-template"
import { useToast } from "@/hooks/use-toast"



export function ContactForm() {
    const {toast} = useToast()
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState<EmailTemplateProps>({
    firstName: "",
    email: "",
    message: "",
    })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if(response.ok){
          setStatus("success")
          setMessage("Message sent successfully")
          setFormData({
              firstName: "",
              email: "",
              message: "",
          })
          toast({ description: "Message sent successfully" })
        }
    } catch (error) {
        console.error(error)
      setStatus("error")
      setMessage("An error occurred. Please try again.")
      toast({ description: "An error occurred. Please try again." })
    }
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
        className="max-w-2xl mx-auto relative"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Get in Touch</h2>
          <p className="text-gray-400 text-lg">
            We would love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                placeholder="Your name"
                value={formData.firstName}onChange={(e)=> setFormData({...formData, firstName: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                placeholder="your@email.com"
                value={formData.email}onChange={(e)=> setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              className="min-h-[150px] bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              placeholder="Your message..."
              value={formData.message}onChange={(e)=> setFormData({...formData, message: e.target.value})}
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              className="bg-white text-black hover:bg-gray-200 min-w-[200px]"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>

        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-center text-green-400"
          >
            {message}
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-center text-red-400"
          >
            {message}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

