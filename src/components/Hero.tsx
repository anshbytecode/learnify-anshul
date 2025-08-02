
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search, BookOpen, Users } from 'lucide-react';


const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Learn Smarter, Not Harder
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-fade-in">
            AI-powered personalized learning that adapts to your pace, interests, and goals
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
              Start Learning Today
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
              Explore Courses
            </Button>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <Search className="h-6 w-6 text-blue-200" />
                <input 
                  type="text" 
                  placeholder="What would you like to learn today?"
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-blue-200 text-lg"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'Web Development', 'Data Science', 'UI/UX Design'].map((topic) => (
                  <span key={topic} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm hover:bg-white/30 cursor-pointer transition-colors">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-8 mt-12 text-blue-200">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <span>10,000+ Courses</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>500K+ Students</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
