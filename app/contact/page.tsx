import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-light mb-8">Contact Us</h1>
              <div className="space-y-6 text-gray-600">
                <p>
                  For reservations or inquiries, please don&apos;t hesitate to contact us. Our team is available 24/7 to
                  assist you.
                </p>
                <div>
                  <h3 className="font-medium mb-2">Address</h3>
                  <p>
                    123 Luxury Avenue
                    <br />
                    1234 City, Country
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Phone</h3>
                  <p>+1 234 567 890</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Email</h3>
                  <p>info@hotelasbak.com</p>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Name</label>
                <Input required />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Email</label>
                <Input type="email" required />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Message</label>
                <Textarea required className="min-h-[150px]" />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

