
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const LearningStats = () => {
  const stats = [
    { label: 'Courses Completed', value: 12, total: 15, color: 'bg-emerald-500' },
    { label: 'Hours Learned', value: 147, total: 200, color: 'bg-blue-500' },
    { label: 'Certificates Earned', value: 8, total: 10, color: 'bg-purple-500' },
    { label: 'Streak Days', value: 23, total: 30, color: 'bg-orange-500' }
  ];

  const weeklyProgress = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 1.8 },
    { day: 'Wed', hours: 3.2 },
    { day: 'Thu', hours: 2.1 },
    { day: 'Fri', hours: 2.8 },
    { day: 'Sat', hours: 4.1 },
    { day: 'Sun', hours: 1.5 }
  ];

  const maxHours = Math.max(...weeklyProgress.map(d => d.hours));

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Learning Analytics</h2>
        <p className="text-gray-600">Track your progress and celebrate your achievements</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-3 h-3 rounded-full ${stat.color}`}></div>
                <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">{stat.label}</h3>
              <Progress value={(stat.value / stat.total) * 100} className="h-2" />
              <p className="text-xs text-gray-500 mt-2">{stat.value} of {stat.total}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Learning Activity</CardTitle>
          <CardDescription>Your learning hours this week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between h-40 gap-4">
            {weeklyProgress.map((day) => (
              <div key={day.day} className="flex flex-col items-center flex-1">
                <div className="flex-1 flex items-end mb-2">
                  <div 
                    className="w-full bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-md min-h-4 transition-all duration-500"
                    style={{ height: `${(day.hours / maxHours) * 120}px` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-600">{day.day}</span>
                <span className="text-xs text-gray-500">{day.hours}h</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LearningStats;
