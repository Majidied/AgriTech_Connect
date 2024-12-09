import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">AgriTech Connect</h3>
            <p className="text-sm">Modernizing agriculture in Morocco</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><Link href="/marketplace">Marketplace</Link></li>
              <li><Link href="/optimization">AI & IoT Optimization</Link></li>
              <li><Link href="/training">Training & Assistance</Link></li>
              <li><Link href="/financing">Financing</Link></li>
              <li><Link href="/sustainability">Sustainability</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <p className="text-sm">Email: info@agritechconnect.ma</p>
            <p className="text-sm">Phone: +212 5XX-XXXXXX</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2024 AgriTech Connect. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

