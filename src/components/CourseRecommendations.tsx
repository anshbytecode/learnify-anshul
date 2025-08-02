
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, User } from 'lucide-react';


const CourseRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      title: 'Advanced JavaScript Patterns',
      description: 'Master complex JavaScript concepts and design patterns',
      level: 'Advanced',
      duration: '8 weeks',
      students: 1250,
      rating: 4.8,
      matchScore: 95,
      tags: ['JavaScript', 'Patterns', 'Advanced'],
      instructor: 'Sarah Chen'
    },
    {
      id: 2,
      title: 'Python for Data Science',
      description: 'Learn data analysis and visualization with Python',
      level: 'Intermediate',
      duration: '10 weeks',
      students: 2340,
      rating: 4.9,
      matchScore: 88,
      tags: ['Python', 'Data Science', 'Analytics'],
      instructor: 'Dr. Michael Rodriguez'
    },
    {
      id: 3,
      title: 'Mobile App Design Workshop',
      description: 'Create stunning mobile interfaces with modern design principles',
      level: 'Beginner',
      duration: '6 weeks',
      students: 890,
      rating: 4.7,
      matchScore: 82,
      tags: ['Design', 'Mobile', 'UI/UX'],
      instructor: 'Emma Thompson'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Recommended for You</h2>
          <p className="text-gray-600">Personalized course suggestions based on your learning history</p>
        </div>
        <Button variant="outline" className="hidden md:flex">
          View All Recommendations
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((course) => (
          <Card key={course.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute top-4 right-4 z-10">
              <Badge variant="secondary" className="bg-emerald-500 text-white font-semibold">
                {course.matchScore}% Match
              </Badge>
            </div>
            
            <CardHeader className="pb-4">
              <div className="space-y-2">
                <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-gray-600 line-clamp-2">
                  {course.description}
                </CardDescription>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
                <User className="h-4 w-4" />
                <span>{course.instructor}</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-1">
                {course.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Level:</span>
                  <p className="font-medium text-gray-900">{course.level}</p>
                </div>
                <div>
                  <span className="text-gray-500">Duration:</span>
                  <p className="font-medium text-gray-900">{course.duration}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⭐</span>
                    <span>{course.rating}</span>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-all duration-300">
                Start Learning
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseRecommendations;
