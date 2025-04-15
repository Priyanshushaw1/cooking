import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 max-w-5xl mx-auto">
      {/* About Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-800 mb-4">About CookEasy</h1>
          <p className="text-xl text-orange-700 max-w-2xl mx-auto">Jo banana nahi aata, yahan se seekho!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-orange-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              CookEasy was born out of a simple idea: cooking should be accessible to everyone. Founded in 2020 by Chef
              Anjali Patel, our platform aims to demystify Indian cooking and make it approachable for beginners and
              experienced cooks alike.
            </p>
            <p className="text-gray-700 mb-4">
              We believe that good food brings people together, and that anyone can learn to cook delicious meals with
              the right guidance. Our step-by-step recipes and video tutorials are designed to build your confidence in
              the kitchen, one dish at a time.
            </p>
            <p className="text-gray-700">
              Whether you're looking to connect with your cultural roots through food, expand your culinary horizons, or
              simply feed yourself and your loved ones better meals, CookEasy is here to guide you on your cooking
              journey.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=600" alt="CookEasy Team" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-orange-800 text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800">{member.name}</h3>
              <p className="text-orange-600 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      {/* Contact Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-orange-800 text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-orange-800 mb-4">Get in Touch</h3>
            <p className="text-gray-700 mb-6">
              Have a question, suggestion, or just want to say hello? We'd love to hear from you! Fill out the form or
              reach out to us directly using the contact information below.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">hello@cookeasy.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-gray-600">
                    123 Spice Lane, Flavor District
                    <br />
                    Mumbai, Maharashtra 400001
                    <br />
                    India
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-orange-600 hover:text-orange-700">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-orange-600 hover:text-orange-700">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-orange-600 hover:text-orange-700">
                  <Twitter className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4 bg-orange-50 p-6 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input
                    id="first-name"
                    placeholder="John"
                    className="bg-white border-orange-200 focus-visible:ring-orange-400"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input
                    id="last-name"
                    placeholder="Doe"
                    className="bg-white border-orange-200 focus-visible:ring-orange-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-white border-orange-200 focus-visible:ring-orange-400"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help you?"
                  className="bg-white border-orange-200 focus-visible:ring-orange-400"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  className="bg-white border-orange-200 focus-visible:ring-orange-400"
                />
              </div>
              <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-3xl font-bold text-orange-800 text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-orange-800 mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const teamMembers = [
  {
    id: 1,
    name: "Anjali Patel",
    role: "Founder & Head Chef",
    image: "/placeholder.svg?height=256&width=256",
    bio: "Anjali has been teaching Indian cooking for over 15 years. She founded CookEasy to make authentic Indian cooking accessible to everyone.",
  },
  {
    id: 2,
    name: "Vikram Singh",
    role: "Executive Chef",
    image: "/placeholder.svg?height=256&width=256",
    bio: "With experience in 5-star hotels across India, Vikram brings professional expertise to our recipes and ensures they're restaurant quality.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Content Director",
    image: "/placeholder.svg?height=256&width=256",
    bio: "Priya oversees all our tutorials and recipes, ensuring they're easy to follow and accessible for cooks of all skill levels.",
  },
]

const faqs = [
  {
    id: 1,
    question: "Are your recipes suitable for beginners?",
    answer:
      "Our recipes are designed with beginners in mind. We provide detailed step-by-step instructions, video tutorials, and tips to help you succeed in the kitchen, no matter your experience level.",
  },
  {
    id: 2,
    question: "Do I need special equipment for your recipes?",
    answer:
      "Most of our recipes can be made with basic kitchen equipment. When specialized tools are needed, we always suggest alternatives or workarounds. We believe good cooking should be accessible to everyone.",
  },
  {
    id: 3,
    question: "Are ingredient substitutions possible?",
    answer:
      "Yes! We understand that not all ingredients are available everywhere. Our recipes often include suggestions for substitutions, and our team is always happy to help with specific questions about alternatives.",
  },
  {
    id: 4,
    question: "How can I contribute a recipe?",
    answer:
      "We love community contributions! You can submit your recipe through our 'Submit a Recipe' form on the website. Our team will review it, and if selected, we'll feature it on our platform with full credit to you.",
  },
]
