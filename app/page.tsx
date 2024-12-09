import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Leaf, Tractor, Users, Coins, Sprout } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
          Welcome to AgriTech Connect
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connecting Moroccan farmers to modern technologies, markets, and financing
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg">
            Sign Up as Farmer
          </Button>
          <Button size="lg" variant="outline">
            Sign Up as Consumer
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          icon={<Tractor className="h-10 w-10 text-green-600" />}
          title="MarketPlace Agricole"
          description="Connect directly with consumers and businesses. List your products or find fresh, local produce."
          link="/marketplace"
        />
        <FeatureCard
          icon={<Leaf className="h-10 w-10 text-green-600" />}
          title="AI & IoT Optimization"
          description="Leverage cutting-edge technology to optimize your farm's performance and yield."
          link="/optimization"
        />
        <FeatureCard
          icon={<Users className="h-10 w-10 text-green-600" />}
          title="Training & Virtual Assistance"
          description="Access a wealth of knowledge and get expert help when you need it most."
          link="/training"
        />
        <FeatureCard
          icon={<Coins className="h-10 w-10 text-green-600" />}
          title="Access to Financing"
          description="Explore financing options and investment opportunities to grow your agricultural business."
          link="/financing"
        />
        <FeatureCard
          icon={<Sprout className="h-10 w-10 text-green-600" />}
          title="Ecology & Sustainability"
          description="Learn about and implement sustainable farming practices for a better future."
          link="/sustainability"
        />
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Join the Agricultural Revolution in Morocco
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Whether you're a farmer looking to modernize your operations or a consumer seeking fresh, local produce, 
          AgriTech Connect is here to bridge the gap and create a sustainable future for Moroccan agriculture.
        </p>
        <Button size="lg">
          Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description, link }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <Link href={link} className="text-green-600 hover:text-green-800 mt-4 inline-block">
          Learn more <ArrowRight className="inline-block ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

