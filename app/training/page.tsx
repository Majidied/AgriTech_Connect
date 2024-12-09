'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Training() {
  const [chatMessages, setChatMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setChatMessages([...chatMessages, { sender: 'User', text: inputMessage }])
      // In a real application, you would send this message to a backend service
      // and receive a response from an AI or human expert
      setTimeout(() => {
        setChatMessages(prev => [...prev, { sender: 'Expert', text: 'Thank you for your question. How can I assist you further?' }])
      }, 1000)
      setInputMessage('')
    }
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Training & Virtual Assistance</h1>
      
      <Tabs defaultValue="knowledge-base">
        <TabsList className="mb-4">
          <TabsTrigger value="knowledge-base">Knowledge Base</TabsTrigger>
          <TabsTrigger value="virtual-assistance">Virtual Assistance</TabsTrigger>
          <TabsTrigger value="expert-consultation">Expert Consultation</TabsTrigger>
        </TabsList>
        
        <TabsContent value="knowledge-base">
          <Card>
            <CardHeader>
              <CardTitle>Agricultural Knowledge Base</CardTitle>
            </CardHeader>
            <CardContent>
              <Input type="search" placeholder="Search articles, guides, and tutorials..." className="mb-4" />
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Best Practices for Tomato Cultivation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Learn about soil preparation, watering techniques, and pest control for tomatoes.</p>
                    <Button className="mt-2">Read More</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Introduction to Drip Irrigation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Discover how to set up and maintain an efficient drip irrigation system.</p>
                    <Button className="mt-2">Read More</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="virtual-assistance">
          <Card>
            <CardHeader>
              <CardTitle>Live Chat with AI Assistant</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 overflow-y-auto mb-4 p-4 border rounded-md">
                {chatMessages.map((message, index) => (
                  <div key={index} className={`mb-2 ${message.sender === 'User' ? 'text-right' : 'text-left'}`}>
                    <span className={`inline-block p-2 rounded-md ${message.sender === 'User' ? 'bg-green-100' : 'bg-gray-100'}`}>
                      {message.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input 
                  value={inputMessage} 
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your question here..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage}>Send</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="expert-consultation">
          <Card>
            <CardHeader>
              <CardTitle>Schedule an Expert Consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div>
                  <Label htmlFor="topic">Consultation Topic</Label>
                  <Input id="topic" placeholder="What would you like to discuss?" />
                </div>
                <div>
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" type="date" />
                </div>
                <Button type="submit">Request Consultation</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

