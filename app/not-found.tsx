import Link from 'next/link'
import { GlassButton } from '@/components/ui/glass-button'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <div className="space-y-2">
          <h1 className="text-8xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-semibold text-foreground">Page Not Found</h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <GlassButton variant="primary" size="lg" className="gap-2 px-8 py-4">
            <Home className="w-5 h-5" />
            Back to Home
          </GlassButton>
        </Link>
      </div>
    </div>
  )
}