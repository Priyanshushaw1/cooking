import Link from "next/link"
import Image from "next/image"
import { Clock, Users, ChefHat, Printer, Share2, Bookmark, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

export default function RecipeDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the recipe data based on the ID
  const recipe = recipes.find((r) => r.id.toString() === params.id) || recipes[0]

  return (
    <div className="container px-4 py-8 md:px-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <Link href="/" className="text-orange-600 hover:text-orange-700">
          Home
        </Link>
        {" > "}
        <Link href="/recipes" className="text-orange-600 hover:text-orange-700">
          Recipes
        </Link>
        {" > "}
        <span className="text-gray-600">{recipe.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">{recipe.title}</h1>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-orange-500 mr-1" />
              <span className="text-gray-600">{recipe.time} mins</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-orange-500 mr-1" />
              <span className="text-gray-600">{recipe.servings} servings</span>
            </div>
            <div className="flex items-center">
              <ChefHat className="h-5 w-5 text-orange-500 mr-1" />
              <span className="text-gray-600">{recipe.difficulty}</span>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < recipe.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
              <span className="ml-1 text-gray-600">({recipe.reviews})</span>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
            <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" priority />
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Button variant="outline" size="sm" className="gap-1">
              <Printer className="h-4 w-4" />
              <span>Print</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Bookmark className="h-4 w-4" />
              <span>Save</span>
            </Button>
          </div>

          <p className="text-gray-700 mb-8">{recipe.description}</p>

          <Tabs defaultValue="ingredients">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="instructions">Instructions</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>
            <TabsContent value="ingredients" className="pt-4">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">Ingredients</h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full border border-orange-200 flex-shrink-0 mr-3 mt-0.5"></div>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="instructions" className="pt-4">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">Instructions</h3>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="bg-orange-100 text-orange-800 h-6 w-6 rounded-full flex items-center justify-center font-medium flex-shrink-0 mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </TabsContent>
            <TabsContent value="notes" className="pt-4">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">Chef's Notes</h3>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-gray-700">{recipe.notes}</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="mb-6">
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">Nutrition Facts</h3>
              <div className="space-y-2">
                {recipe.nutrition.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">{item.name}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <h3 className="text-xl font-semibold text-orange-800 mb-4">You Might Also Like</h3>
          <div className="space-y-4">
            {relatedRecipes.map((related) => (
              <Link key={related.id} href={`/recipe/${related.id}`} className="block">
                <div className="flex gap-3 group">
                  <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={related.image || "/placeholder.svg"}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 group-hover:text-orange-600">{related.title}</h4>
                    <p className="text-sm text-gray-500">{related.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-orange-800 mb-6">Comments (12)</h3>
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-4">
              <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                <Image src={comment.avatar || "/placeholder.svg"} alt={comment.name} fill className="object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-gray-800">{comment.name}</h4>
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-600">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const recipes = [
  {
    id: 1,
    title: "Butter Chicken",
    description:
      "Butter chicken, traditionally known as murgh makhani, is an Indian dish originating from Delhi. It is a type of curry made from chicken with a spiced tomato and butter sauce. Its sauce is known for its rich texture and tangy flavor.",
    image: "/placeholder.svg?height=400&width=800",
    category: "Main Course",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    rating: 4,
    reviews: 128,
    ingredients: [
      "800g boneless chicken, cut into bite-sized pieces",
      "2 tbsp lemon juice",
      "2 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "1 tsp garam masala",
      "1 tsp chili powder",
      "1 cup yogurt",
      "2 tbsp vegetable oil",
      "2 tbsp butter",
      "1 large onion, finely chopped",
      "2 tbsp tomato paste",
      "1 can (400g) tomato puree",
      "1 cup heavy cream",
      "1/4 cup fresh cilantro, chopped",
      "Salt to taste",
    ],
    instructions: [
      "In a bowl, mix chicken with lemon juice, garlic, ginger, garam masala, chili powder, and yogurt. Marinate for at least 1 hour, preferably overnight.",
      "Heat oil in a large pan over medium heat. Add marinated chicken and cook until browned on all sides, about 5 minutes. Remove chicken and set aside.",
      "In the same pan, add butter and onions. Cook until onions are soft and translucent, about 3-4 minutes.",
      "Add tomato paste and cook for 2 minutes, stirring frequently.",
      "Add tomato puree and bring to a simmer. Cook for 10-15 minutes until sauce thickens.",
      "Return chicken to the pan and simmer for another 10 minutes.",
      "Stir in heavy cream and cook for 5 more minutes.",
      "Season with salt to taste and garnish with fresh cilantro before serving.",
    ],
    notes:
      "For an authentic taste, you can add 1-2 tablespoons of kasuri methi (dried fenugreek leaves) along with the cream. Serve hot with naan or rice.",
    nutrition: [
      { name: "Calories", value: "520 kcal" },
      { name: "Protein", value: "35g" },
      { name: "Carbs", value: "12g" },
      { name: "Fat", value: "38g" },
      { name: "Fiber", value: "2g" },
    ],
  },
]

const relatedRecipes = [
  {
    id: 2,
    title: "Chicken Tikka Masala",
    image: "/placeholder.svg?height=80&width=80",
    category: "Main Course",
  },
  {
    id: 3,
    title: "Paneer Butter Masala",
    image: "/placeholder.svg?height=80&width=80",
    category: "Main Course",
  },
  {
    id: 4,
    title: "Malai Kofta",
    image: "/placeholder.svg?height=80&width=80",
    category: "Main Course",
  },
]

const comments = [
  {
    id: 1,
    name: "Priya Singh",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2 days ago",
    text: "I made this recipe last night and it was absolutely delicious! My family loved it. Will definitely make it again.",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "1 week ago",
    text: "Great recipe! I added a bit more chili for extra spice and it turned out perfect. Thanks for sharing!",
  },
]
