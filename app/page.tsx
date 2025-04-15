import Link from "next/link"
import Image from "next/image"
import { Search, ChevronRight, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-orange-50">
        <div className="container relative z-10 h-full flex flex-col justify-center items-start px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-800 mb-4">CookEasy</h1>
          <p className="text-xl md:text-2xl text-orange-700 mb-8">Jo banana nahi aata, yahan se seekho!</p>
          <div className="w-full max-w-md relative">
            <Input
              type="text"
              placeholder="Search for recipes..."
              className="pr-10 bg-white/90 border-orange-200 focus-visible:ring-orange-400"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-400 h-5 w-5" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/80 to-transparent" />
        <Image
          src="/placeholder.svg?height=500&width=1920"
          alt="Delicious food background"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-orange-800 mb-8">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="group relative h-40 rounded-lg overflow-hidden"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-medium text-lg">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-12 bg-orange-50">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-orange-800">Featured Recipes</h2>
            <Link href="/recipes" className="text-orange-600 hover:text-orange-700 flex items-center">
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <Card key={recipe.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-orange-500 hover:bg-orange-600">{recipe.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-orange-800">{recipe.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{recipe.time} mins</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{recipe.servings} servings</span>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                    <Link href={`/recipe/${recipe.id}`}>View Recipe</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Tutorials */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-orange-800">Latest Tutorials</h2>
            <Link href="/tutorials" className="text-orange-600 hover:text-orange-700 flex items-center">
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestTutorials.map((tutorial) => (
              <Card
                key={tutorial.id}
                className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={tutorial.image || "/placeholder.svg"}
                    alt={tutorial.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-orange-600/90 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-orange-800">{tutorial.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{tutorial.description}</p>
                  <Button asChild className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                    <Link href={`/tutorial/${tutorial.id}`}>Watch Tutorial</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-orange-100">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-orange-700 mb-6">Get weekly recipes and cooking tips delivered to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white border-orange-200 focus-visible:ring-orange-400"
              />
              <Button className="bg-orange-600 hover:bg-orange-700">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const categories = [
  { id: 1, name: "Breakfast", image: "/placeholder.svg?height=160&width=300" },
  { id: 2, name: "Main Course", image: "/placeholder.svg?height=160&width=300" },
  { id: 3, name: "Desserts", image: "/placeholder.svg?height=160&width=300" },
  { id: 4, name: "Snacks", image: "/placeholder.svg?height=160&width=300" },
]

const featuredRecipes = [
  {
    id: 1,
    title: "Butter Chicken",
    description: "Creamy, spicy and delicious butter chicken that's easy to make at home.",
    image: "/placeholder.svg?height=192&width=384",
    category: "Main Course",
    time: 45,
    servings: 4,
  },
  {
    id: 2,
    title: "Masala Dosa",
    description: "Crispy fermented crepes filled with spiced potato filling.",
    image: "/placeholder.svg?height=192&width=384",
    category: "Breakfast",
    time: 30,
    servings: 2,
  },
  {
    id: 3,
    title: "Gulab Jamun",
    description: "Soft milk-solid-based sweet dumplings soaked in sugar syrup.",
    image: "/placeholder.svg?height=192&width=384",
    category: "Desserts",
    time: 40,
    servings: 6,
  },
]

const latestTutorials = [
  {
    id: 1,
    title: "How to Make Perfect Roti",
    description: "Learn the technique to make soft, fluffy rotis every time.",
    image: "/placeholder.svg?height=192&width=384",
  },
  {
    id: 2,
    title: "Mastering Indian Spices",
    description: "A beginner's guide to understanding and using Indian spices.",
    image: "/placeholder.svg?height=192&width=384",
  },
  {
    id: 3,
    title: "Quick Breakfast Ideas",
    description: "5 healthy Indian breakfast recipes ready in under 15 minutes.",
    image: "/placeholder.svg?height=192&width=384",
  },
]
