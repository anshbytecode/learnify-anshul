
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users } from 'lucide-react';

const FeaturedCourses = () => {
  const featuredCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      description: 'From zero to full-stack developer in 12 weeks',
      category: 'Development',
      level: 'Beginner to Advanced',
      students: 15420,
      rating: 4.9,
      price: 149,
      originalPrice: 299,
      featured: true,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'AI & Machine Learning Masterclass',
      description: 'Build intelligent systems with Python and TensorFlow',
      category: 'AI/ML',
      level: 'Intermediate',
      students: 8930,
      rating: 4.8,
      price: 199,
      originalPrice: 399,
      featured: true,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Digital Marketing Strategy',
      description: 'Master modern marketing techniques and analytics',
      category: 'Marketing',
      level: 'Beginner',
      students: 12100,
      rating: 4.7,
      price: 99,
      originalPrice: 199,
      featured: false,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Courses</h2>
        <p className="text-gray-600">Hand-picked courses from industry experts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
              
              {course.featured && (
                <Badge className="absolute top-3 left-3 bg-orange-500 text-white">
                  Featured
                </Badge>
              )}
              
              <div className="absolute top-3 right-3">
                <Badge variant="secondary" className="bg-black/50 text-white">
                  {course.category}
                </Badge>
              </div>
            </div>
            
            <CardHeader className="pb-3">
              <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                {course.title}
              </CardTitle>
              <CardDescription className="text-gray-600 line-clamp-2">
                {course.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Level: <span className="text-gray-900 font-medium">{course.level}</span></span>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>⭐</span>
                  <span>{course.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-emerald-600">${course.price}</span>
                  <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                </div>
                <Badge variant="outline" className="text-emerald-600 border-emerald-200">
                  {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                </Badge>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold">
                Enroll Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
