import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MobileNav } from './MobileNav'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-600">
            AgriTech Connect
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/marketplace" className="text-gray-700 hover:text-green-600">Marketplace</Link>
            <Link href="/optimization" className="text-gray-700 hover:text-green-600">AI & IoT</Link>
            <Link href="/training" className="text-gray-700 hover:text-green-600">Training</Link>
            <Link href="/financing" className="text-gray-700 hover:text-green-600">Financing</Link>
            <Link href="/sustainability" className="text-gray-700 hover:text-green-600">Sustainability</Link>
          </div>
          <div className="flex items-center space-x-2">
            <MobileNav />
            <Link href="/login">
              <Button variant="outline" className="hidden md:inline-flex">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button className="hidden md:inline-flex">Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

