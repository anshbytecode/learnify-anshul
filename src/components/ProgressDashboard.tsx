
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Users, User } from 'lucide-react';

const ProgressDashboard = () => {
  const currentCourses = [
    { id: 1, title: 'Advanced React Development', progress: 75, nextLesson: 'Hooks Deep Dive', timeLeft: '2h 30m' },
    { id: 2, title: 'Machine Learning Fundamentals', progress: 45, nextLesson: 'Neural Networks', timeLeft: '4h 15m' },
    { id: 3, title: 'UX Design Principles', progress: 90, nextLesson: 'Final Project', timeLeft: '1h 00m' },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Learning Journey</h2>
        <p className="text-gray-600">Continue where you left off and track your progress</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCourses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-emerald-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
                {course.title}
              </CardTitle>
              <CardDescription className="text-sm text-gray-600">
                Next: {course.nextLesson}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-bold text-emerald-600">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
                
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{course.timeLeft} remaining</span>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline">
                    Continue
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProgressDashboard;
