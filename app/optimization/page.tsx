'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const mockSensorData = [
  { time: '00:00', moisture: 45, temperature: 22 },
  { time: '04:00', moisture: 42, temperature: 20 },
  { time: '08:00', moisture: 38, temperature: 23 },
  { time: '12:00', moisture: 35, temperature: 28 },
  { time: '16:00', moisture: 40, temperature: 26 },
  { time: '20:00', moisture: 43, temperature: 24 },
]

export default function Optimization() {
  const [recommendation, setRecommendation] = useState('')

  const handleGetRecommendation = () => {
    // In a real application, this would call an AI service
    setRecommendation("Based on current soil moisture levels and weather forecast, we recommend irrigating your crops tomorrow morning for 30 minutes.")
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8">AI & IoT Optimization</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Soil Moisture & Temperature</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockSensorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="moisture" stroke="#8884d8" name="Moisture (%)" />
                <Line yAxisId="right" type="monotone" dataKey="temperature" stroke="#82ca9d" name="Temperature (°C)" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>AI Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Label htmlFor="crop">Crop Type</Label>
              <Input id="crop" placeholder="Enter your crop type" />
            </div>
            <Button onClick={handleGetRecommendation}>Get Recommendation</Button>
            {recommendation && (
              <p className="mt-4 p-4 bg-green-100 rounded-md">{recommendation}</p>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>IoT Device Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Manage your connected IoT devices and sensors here.</p>
          <Button>Add New Device</Button>
        </CardContent>
      </Card>
    </div>
  )
}

