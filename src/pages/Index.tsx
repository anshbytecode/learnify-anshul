
import React from 'react';
import Hero from '../components/Hero';
import CourseRecommendations from '../components/CourseRecommendations';
import ProgressDashboard from '../components/ProgressDashboard';
import FeaturedCourses from '../components/FeaturedCourses';
import LearningStats from '../components/LearningStats';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <ProgressDashboard />
        <CourseRecommendations />
        <LearningStats />
        <FeaturedCourses />
      </div>
    </div>
  );
};

export default Index;
