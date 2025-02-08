import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"

const rooms = [
  {
    id: 1,
    name: "Deluxe Suite",
    description: "Spacious suite with panoramic city views",
    price: "€450",
    size: "55m²",
    amenities: ["King bed", "City view", "Rainfall shower", "Mini bar"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    name: "Presidential Suite",
    description: "Ultimate luxury with separate living areas",
    price: "€850",
    size: "120m²",
    amenities: ["King bed", "Ocean view", "Private terrace", "Butler service"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    name: "Garden Villa",
    description: "Private villa with direct garden access",
    price: "€650",
    size: "85m²",
    amenities: ["King bed", "Private garden", "Plunge pool", "Outdoor dining"],
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light mb-8">Rooms & Suites</h1>
          <div className="grid gap-16">
            {rooms.map((room) => (
              <div key={room.id} className="grid md:grid-cols-2 gap-8">
                <div className="relative h-[400px] group overflow-hidden">
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-3xl font-light">{room.name}</h2>
                  <p className="text-gray-600">{room.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{room.size}</span>
                    <span>•</span>
                    <span>From {room.price} per night</span>
                  </div>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    {room.amenities.map((amenity) => (
                      <li key={amenity}>• {amenity}</li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button>Book Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

