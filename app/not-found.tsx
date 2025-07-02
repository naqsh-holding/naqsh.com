import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <Link href="/" className="inline-block" aria-label="Naqsh Home">
            <Image
              src="https://hel1.your-objectstorage.com/naqsh-pord/images/naqsh-logo.png"
              alt="Naqsh Logo"
              width={135}
              height={45}
              className="h-9 w-auto mx-auto"
            />
          </Link>
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 