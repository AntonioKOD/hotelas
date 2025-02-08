import Image from "next/image"
import { Navigation } from "@/components/navigation"

const restaurants = [
  {
    name: "Le Jardin",
    type: "Fine Dining",
    description: "Contemporary French cuisine in an elegant garden setting",
    hours: "18:30 - 22:30",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    name: "Azure",
    type: "Mediterranean",
    description: "Fresh seafood and coastal flavors with ocean views",
    hours: "12:00 - 23:00",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    name: "The Lounge",
    type: "Bar & Light Bites",
    description: "Sophisticated bar serving craft cocktails and gourmet snacks",
    hours: "16:00 - 01:00",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function DiningPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light mb-12">Dining</h1>

          <div className="grid gap-16">
            {restaurants.map((restaurant, index) => (
              <div key={restaurant.name} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`relative h-[500px] ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-light mb-2">{restaurant.name}</h2>
                    <p className="text-gray-600">{restaurant.type}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{restaurant.description}</p>
                  <div className="text-sm text-gray-500">Opening Hours: {restaurant.hours}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

