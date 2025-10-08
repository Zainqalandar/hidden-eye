// components/UnderDevelopment.jsx

import { Wrench } from "lucide-react"; // optional icon (lucide-react library)

export default function UnderDevelopment() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-black text-white text-center py-6 mt-20 shadow-lg">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 px-4">
        <Wrench className="w-8 h-8 animate-spin-slow text-white" />
        <div>
          <h2 className="text-2xl font-bold tracking-wide">
            Website Under Development
          </h2>
          <p className="text-sm text-gray-200 mt-1">
            We’re working hard to bring you an amazing experience. Please check back soon!
          </p>
        </div>
      </div>
    </div>
  );
}
