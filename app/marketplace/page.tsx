import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Marketplace() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8">MarketPlace Agricole</h1>
      
      <div className="mb-8">
        <Input type="search" placeholder="Search products..." className="max-w-md" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard
          name="Fresh Tomatoes"
          price={20}
          unit="kg"
          image="/placeholder.svg?height=200&width=200"
        />
        <ProductCard
          name="Organic Apples"
          price={30}
          unit="kg"
          image="/placeholder.svg?height=200&width=200"
        />
        <ProductCard
          name="Local Honey"
          price={100}
          unit="jar"
          image="/placeholder.svg?height=200&width=200"
        />
        {/* Add more ProductCards as needed */}
      </div>
    </div>
  )
}

function ProductCard({ name, price, unit, image }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />
        <p className="text-2xl font-bold">{price} MAD / {unit}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}

