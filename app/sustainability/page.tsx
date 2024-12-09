'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Sustainability() {
  const [treeCount, setTreeCount] = useState(0)

  const handlePlantTree = () => {
    setTreeCount(prevCount => prevCount + 1)
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Ecology & Sustainability</h1>
      
      <Tabs defaultValue="sustainable-practices">
        <TabsList className="mb-4">
          <TabsTrigger value="sustainable-practices">Sustainable Practices</TabsTrigger>
          <TabsTrigger value="tree-planting">Tree Planting Initiative</TabsTrigger>
          <TabsTrigger value="resources">Educational Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sustainable-practices">
          <Card>
            <CardHeader>
              <CardTitle>Sustainable Farming Techniques</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Drip Irrigation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Learn how to implement water-efficient drip irrigation systems in your farm.</p>
                    <Button className="mt-2">Learn More</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Crop Rotation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Discover the benefits of crop rotation for soil health and pest management.</p>
                    <Button className="mt-2">Learn More</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Organic Farming</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Explore techniques for organic farming and pesticide-free agriculture.</p>
                    <Button className="mt-2">Learn More</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tree-planting">
          <Card>
            <CardHeader>
              <CardTitle>Tree Planting Initiative</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Join our effort to combat desertification and promote biodiversity in Morocco.</p>
              <div className="text-center mb-4">
                <p className="text-2xl font-bold">Trees Planted: {treeCount}</p>
                <Button onClick={handlePlantTree} className="mt-2">Plant a Tree</Button>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Tree Planting Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Community Planting Day - June 5th</li>
                    <li>School Reforestation Project - September 15th</li>
                    <li>Corporate Sustainability Initiative - October 10th</li>
                  </ul>
                  <Button className="mt-4">Register for an Event</Button>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Educational Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Sustainable Agriculture Guide</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>A comprehensive guide to implementing sustainable practices in your farm.</p>
                    <Button className="mt-2">Download PDF</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Water Conservation Techniques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Learn about efficient water management strategies for agriculture.</p>
                    <Button className="mt-2">Watch Video</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Biodiversity and Agriculture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Understand the importance of biodiversity in sustainable farming.</p>
                    <Button className="mt-2">Read Article</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

