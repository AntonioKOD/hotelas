import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import room1 from '@/public/room_1.jpg'
import room2 from '@/public/room.jpg'
import room3 from '@/public/one.jpg'
import Link from "next/link"

const rooms = [
  {
    id: 1,
    name: "1 Bedroom Suite",
    description: "Perfect for families and groups, our 1-Bedroom Suite comfortably accommodates up to 6 guests and offers everything you need for a relaxing stay.",
    amenities: ["Queen Bed", "2 Bunk Beds", "2 Sofa Beds", "Wi-Fi", "Private Laundry", "Private Bathroom"],
    image: room1,
  },
  {
    id: 2,
    name: "Family Suite",
    description: "Designed for families and groups up to 4, our Family Suite offers a cozy and functional space to relax and unwind.",
    amenities: ["Queen Bed", "Essential Kitchenette", "Dining Space", "Wi-Fi", "2 Bunk Beds", "Private Bathroom"],
    image: room2,
  },
  {
    id: 3,
    name: "Family Suite with Kitchen – Cozy & Fully Equipped",
    description: "Perfect for small families or groups, our inviting Family Suite comfortably accommodates up to three guests. Enjoy a bright, airy space complete with cozy bedding, modern amenities, and thoughtful touches designed to ensure a relaxing, memorable stay.",
    amenities: ["2 Twin Beds", "Sofa Bed", "Dining Area", "Air Conditioning", "Wi-Fi", "Private Bathroom"],
    image: room3,
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
                  </div>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    {room.amenities.map((amenity) => (
                      <li key={amenity}>• {amenity}</li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link href='/#contact'><Button>Book Now</Button></Link>
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

