// SEO helpers for dynamic title and meta description
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOData {
  title: string;
  description: string;
}

// SEO data for each route
const seoData: Record<string, SEOData> = {
  '/': {
    title: 'BuildMediaStrategies · AI Systems for SMEs',
    description: 'We build ROI-driven systems that generate leads, close sales, and save time.'
  },
  '/systems/ai-lead-generation': {
    title: 'AI Lead Generation System · BuildMediaStrategies',
    description: 'Identify, qualify, and engage prospects automatically. Increase qualified leads by 200% while saving 20+ hours per week.'
  },
  '/systems/conversion': {
    title: 'Conversion System · BuildMediaStrategies',
    description: 'Turn website visitors into customers with intelligent capture and nurturing workflows. Boost conversion rates by 150%.'
  },
  '/systems/call-automation': {
    title: 'Call Automation System · BuildMediaStrategies',
    description: 'Automate appointment booking and customer calls. Save 20+ hours weekly while improving customer experience.'
  },
  '/systems/support': {
    title: 'Support System · BuildMediaStrategies',
    description: '24/7 AI-powered customer support that resolves 70% of tickets automatically. Reduce response time by 90%.'
  },
  '/systems/recruitment': {
    title: 'Recruitment System · BuildMediaStrategies',
    description: 'Find and hire top talent 5x faster with AI-powered candidate sourcing and automated screening processes.'
  },
  '/systems/ai-sales': {
    title: 'AI Sales System · BuildMediaStrategies',
    description: 'Automate your entire sales process from lead qualification to deal closing. Increase productivity by 45%.'
  },
  '/systems/project-management': {
    title: 'Project Management System · BuildMediaStrategies',
    description: 'Ensure on-time project delivery with AI-powered planning and tracking. 95% on-time completion rate.'
  },
  '/systems/social-media-automation': {
    title: 'Social Media Automation System · BuildMediaStrategies',
    description: 'Maintain consistent social presence with AI content creation and automated posting across all platforms.'
  },
  '/systems/lead-capture': {
    title: 'Lead Capture System · BuildMediaStrategies',
    description: 'Capture every website visitor with intelligent forms and popups. Increase lead capture rate by 400%.'
  },
  '/case-studies': {
    title: 'Case Studies · BuildMediaStrategies',
    description: 'Real results from our AI systems. See how we\'ve helped SMEs increase revenue and save time.'
  },
  '/book': {
    title: 'Book a Call · BuildMediaStrategies',
    description: 'Schedule a call to plan the highest-ROI system for your business. Free consultation available.'
  },
  '/about': {
    title: 'About · BuildMediaStrategies',
    description: 'We specialize in AI-powered systems for SMEs. Learn about our mission to help businesses grow efficiently.'
  },
  '/contact': {
    title: 'Contact · BuildMediaStrategies',
    description: 'Get in touch to discuss how our AI systems can transform your business. Free consultation available.'
  }
};

// Update document title and meta description
export const updateSEO = (pathname: string) => {
  const data = seoData[pathname] || seoData['/'];
  
  // Update title
  document.title = data.title;
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', data.description);
};

// Hook to automatically update SEO on route changes
export const useSEO = () => {
  const location = useLocation();
  
  useEffect(() => {
    updateSEO(location.pathname);
  }, [location.pathname]);
};