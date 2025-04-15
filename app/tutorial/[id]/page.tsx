import Link from "next/link"
import Image from "next/image"
import { Clock, ThumbsUp, MessageSquare, Share2, Bookmark, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TutorialPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the tutorial data based on the ID
  const tutorial = tutorials.find((t) => t.id.toString() === params.id) || tutorials[0]

  return (
    <div className="container px-4 py-8 md:px-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <Link href="/" className="text-orange-600 hover:text-orange-700">
          Home
        </Link>
        {" > "}
        <Link href="/tutorials" className="text-orange-600 hover:text-orange-700">
          Tutorials
        </Link>
        {" > "}
        <span className="text-gray-600">{tutorial.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">{tutorial.title}</h1>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-orange-500 mr-1" />
              <span className="text-gray-600">{tutorial.duration}</span>
            </div>
            <div className="flex items-center">
              <ThumbsUp className="h-5 w-5 text-orange-500 mr-1" />
              <span className="text-gray-600">{tutorial.likes} likes</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 text-orange-500 mr-1" />
              <span className="text-gray-600">{tutorial.comments} comments</span>
            </div>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden mb-8 bg-black">
            {/* In a real app, this would be a video player */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-orange-600/90 flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
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
            <Image
              src={tutorial.thumbnail || "/placeholder.svg"}
              alt={tutorial.title}
              fill
              className="object-cover opacity-80"
              priority
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Button variant="outline" size="sm" className="gap-1">
              <ThumbsUp className="h-4 w-4" />
              <span>Like</span>
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

          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="transcript">Transcript</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">{tutorial.description}</p>

                <h3 className="text-xl font-semibold text-orange-800 mt-6 mb-4">What You'll Learn</h3>
                <ul className="space-y-2">
                  {tutorial.learningPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-orange-800 mt-6 mb-4">Ingredients & Tools</h3>
                <div className="bg-orange-50 p-4 rounded-lg mb-6">
                  <h4 className="font-medium mb-2">Ingredients:</h4>
                  <ul className="space-y-1 mb-4">
                    {tutorial.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full border border-orange-200 flex-shrink-0 mr-2 mt-0.5"></div>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                  <h4 className="font-medium mb-2">Tools:</h4>
                  <ul className="space-y-1">
                    {tutorial.tools.map((tool, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full border border-orange-200 flex-shrink-0 mr-2 mt-0.5"></div>
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="transcript" className="pt-4">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">Full transcript of the tutorial:</p>
                <div className="space-y-4">
                  {tutorial.transcript.map((segment, index) => (
                    <div key={index} className="border-l-4 border-orange-200 pl-4">
                      <p className="text-gray-700">{segment}</p>
                      <span className="text-sm text-gray-500">
                        {index * 2}:00 - {(index + 1) * 2}:00
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="mb-6">
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">About the Chef</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={tutorial.chef.avatar || "/placeholder.svg"}
                    alt={tutorial.chef.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{tutorial.chef.name}</h4>
                  <p className="text-sm text-gray-500">{tutorial.chef.title}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{tutorial.chef.bio}</p>
              <Button variant="outline" className="w-full mt-4">
                View All Tutorials
              </Button>
            </CardContent>
          </Card>

          <h3 className="text-xl font-semibold text-orange-800 mb-4">Related Tutorials</h3>
          <div className="space-y-4">
            {relatedTutorials.map((related) => (
              <Link key={related.id} href={`/tutorial/${related.id}`} className="block">
                <div className="flex gap-3 group">
                  <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={related.thumbnail || "/placeholder.svg"}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 group-hover:text-orange-600">{related.title}</h4>
                    <p className="text-sm text-gray-500">{related.duration}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-orange-800 mb-6">Comments (8)</h3>
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

const tutorials = [
  {
    id: 1,
    title: "How to Make Perfect Roti",
    description:
      "In this tutorial, you'll learn how to make soft, fluffy rotis every time. We'll cover the basics of dough preparation, resting time, and the perfect cooking technique to get that ideal puff.",
    thumbnail: "/placeholder.svg?height=400&width=800",
    duration: "15 minutes",
    likes: 245,
    comments: 32,
    learningPoints: [
      "How to measure flour and water for the perfect dough consistency",
      "The importance of resting time for soft rotis",
      "Rolling technique for round, even rotis",
      "How to cook rotis on a tawa (griddle) for the perfect puff",
      "Storing techniques to keep rotis soft for longer",
    ],
    ingredients: [
      "2 cups whole wheat flour (atta)",
      "Water (approximately 3/4 cup)",
      "1/2 tsp salt (optional)",
      "1 tsp oil or ghee (optional)",
    ],
    tools: [
      "Mixing bowl",
      "Rolling pin (belan)",
      "Rolling board (chakla)",
      "Tawa (flat griddle)",
      "Tongs or cloth for flipping",
    ],
    transcript: [
      "Hello and welcome to CookEasy! Today we're going to learn how to make perfect rotis every time. Roti is a staple in Indian cuisine and mastering it is essential for any home cook.",
      "Let's start with the ingredients. You'll need 2 cups of whole wheat flour, also known as atta. Make sure you're using fine atta specifically meant for rotis, not regular whole wheat flour.",
      "Begin by adding the flour to a mixing bowl. You can add a pinch of salt for flavor and a teaspoon of oil or ghee for softer rotis, but these are optional.",
      "Now gradually add water while mixing with your hands. The key is to add water little by little until you get a soft, pliable dough. It should not be sticky or too dry.",
      "Once the dough comes together, knead it for about 5 minutes until smooth. This activates the gluten and makes your rotis soft.",
      "Now cover the dough with a damp cloth and let it rest for at least 15-30 minutes. This resting period is crucial for soft rotis.",
    ],
    chef: {
      name: "Anjali Patel",
      title: "Head Chef & Founder",
      avatar: "/placeholder.svg?height=48&width=48",
      bio: "Anjali has been teaching Indian cooking for over 15 years. She specializes in traditional techniques with modern simplifications to make cooking accessible to everyone.",
    },
  },
]

const relatedTutorials = [
  {
    id: 2,
    title: "Mastering Indian Spices",
    thumbnail: "/placeholder.svg?height=80&width=80",
    duration: "20 minutes",
  },
  {
    id: 3,
    title: "How to Make Naan Bread",
    thumbnail: "/placeholder.svg?height=80&width=80",
    duration: "18 minutes",
  },
  {
    id: 4,
    title: "Perfect Dal Every Time",
    thumbnail: "/placeholder.svg?height=80&width=80",
    duration: "12 minutes",
  },
]

const comments = [
  {
    id: 1,
    name: "Meera Joshi",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "3 days ago",
    text: "This tutorial was so helpful! I've been struggling with making rotis for years, but following these steps finally gave me perfectly puffed rotis. Thank you!",
  },
  {
    id: 2,
    name: "Arjun Kapoor",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "1 week ago",
    text: "Great explanation of the kneading technique. I never knew the resting time was so important. My rotis have improved dramatically!",
  },
]
