import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-foreground">404</h1>
            <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
            <p className="text-foreground/70">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 font-medium hover:bg-muted transition-colors focus:outline-none focus:outline-1 focus:outline-background focus:outline-offset-2"
            >
              <Home size={20} />
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 border border-foreground text-foreground px-6 py-3 font-medium hover:bg-foreground hover:text-background transition-colors focus:outline-none focus:outline-1 focus:outline-white focus:outline-offset-2"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}