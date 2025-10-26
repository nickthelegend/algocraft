import type { Platform } from '@/types/platform';

export const platforms: Platform[] = [
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&auto=format&q=75",
    icon: "Play",
    title: "Playground",
    description: "Dive into our interactive coding environment where you can experiment with algorithms, test your code in real-time, and prototype innovative solutions without any setup. Perfect for developers, students, and enthusiasts looking to build and iterate quickly.",
    href: "/playground"
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&auto=format&q=75",
    icon: "GitBranch",
    title: "AlgoFlow",
    description: "Design visual workflows and automate algorithmic processes with an intuitive drag-and-drop interface. Streamline your development pipeline, connect tools seamlessly, and visualize data flows to create efficient, scalable applications effortlessly.",
    href: "/algoflow"
  },
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&auto=format&q=75",
    icon: "Brain",
    title: "Algo AI",
    description: "Harness the power of artificial intelligence to generate, optimize, and debug algorithms automatically. Input your requirements, and let our AI suggest improvements, predict performance, and evolve your code into efficient, intelligent solutions.",
    href: "/ai"
  },
  {
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop&auto=format&q=75",
    icon: "Layers",
    title: "IDE",
    description: "Experience a professional-grade development environment tailored for Algorand smart contracts. Write TEAL and PyTeal with intelligent code completion, real-time error detection, and seamless deployment to testnet or mainnet. Build production-ready blockchain applications with confidence.",
    href: "/ide"
  }
];
