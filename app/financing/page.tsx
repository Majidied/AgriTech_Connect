'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Financing() {
  const [loanAmount, setLoanAmount] = useState(10000)

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Access to Financing</h1>
      
      <Tabs defaultValue="microcredit">
        <TabsList className="mb-4">
          <TabsTrigger value="microcredit">Microcredit</TabsTrigger>
          <TabsTrigger value="crowdfunding">Crowdfunding</TabsTrigger>
          <TabsTrigger value="investments">Investments</TabsTrigger>
        </TabsList>
        
        <TabsContent value="microcredit">
          <Card>
            <CardHeader>
              <CardTitle>Microcredit Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Label htmlFor="loan-amount">Loan Amount (MAD)</Label>
                <Input 
                  id="loan-amount" 
                  type="range" 
                  min="1000" 
                  max="50000" 
                  step="1000" 
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                />
                <p className="text-center text-2xl font-bold">{loanAmount} MAD</p>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Agricultural Development Bank</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Interest Rate: 5%</p>
                    <p>Term: 12 months</p>
                    <Button className="mt-2">Apply Now</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>MicroAgri Finance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Interest Rate: 6%</p>
                    <p>Term: 18 months</p>
                    <Button className="mt-2">Apply Now</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="crowdfunding">
          <Card>
            <CardHeader>
              <CardTitle>Agricultural Projects Seeking Funding</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Sustainable Olive Grove Expansion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">Goal: 100,000 MAD</p>
                    <Progress value={65} className="mb-2" />
                    <p className="mb-2">65,000 MAD raised</p>
                    <Button>Contribute</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Modern Beekeeping Initiative</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">Goal: 50,000 MAD</p>
                    <Progress value={30} className="mb-2" />
                    <p className="mb-2">15,000 MAD raised</p>
                    <Button>Contribute</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="investments">
          <Card>
            <CardHeader>
              <CardTitle>Investment Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Explore agricultural investment opportunities or list your project for investors.</p>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Argan Oil Production Facility</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Seeking 500,000 MAD for 20% equity</p>
                    <p>Expected ROI: 15% annually</p>
                    <Button className="mt-2">Learn More</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Vertical Farming Technology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Seeking 750,000 MAD for 25% equity</p>
                    <p>Expected ROI: 20% annually</p>
                    <Button className="mt-2">Learn More</Button>
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

