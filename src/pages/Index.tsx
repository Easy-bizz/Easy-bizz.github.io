import { Sidebar } from "@/components/Sidebar";
import { CourseCard } from "@/components/CourseCard";
import { StatsCard } from "@/components/StatsCard";
import { BookOpen, Clock, Trophy, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-learning.jpg";
import htmlCssIcon from "@/assets/html-css-icon.jpg";
import jsIcon from "@/assets/javascript-icon.jpg";
import reactIcon from "@/assets/react-icon.jpg";
import nodeIcon from "@/assets/nodejs-icon.jpg";

const Index = () => {
  const courses = [
    {
      title: "HTML & CSS Fundamentals",
      description: "Master the building blocks of web development with HTML5 and CSS3",
      progress: 75,
      duration: "8 hours",
      lessons: 24,
      image: htmlCssIcon,
      status: "in-progress" as const,
      courseId: "html-css",
    },
    {
      title: "JavaScript Essentials",
      description: "Learn modern JavaScript ES6+ features and core concepts",
      progress: 45,
      duration: "12 hours",
      lessons: 36,
      image: jsIcon,
      status: "in-progress" as const,
      courseId: "javascript",
    },
    {
      title: "React Development",
      description: "Build dynamic user interfaces with React and modern hooks",
      progress: 0,
      duration: "15 hours",
      lessons: 42,
      image: reactIcon,
      status: "not-started" as const,
      courseId: "react",
    },
    {
      title: "Node.js Backend",
      description: "Create powerful server-side applications with Node.js and Express",
      progress: 100,
      duration: "10 hours",
      lessons: 30,
      image: nodeIcon,
      status: "completed" as const,
      courseId: "nodejs",
    },
  ];

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      
      <main className="flex-1 p-8">
        {/* Hero Section */}
        <div className="relative h-64 rounded-2xl overflow-hidden mb-8 shadow-glow">
          <img
            src={heroImage}
            alt="Learning Dashboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 flex items-center">
            <div className="px-12">
              <h1 className="text-4xl font-bold text-primary-foreground mb-3">
                Welcome back, Alex! 👋
              </h1>
              <p className="text-primary-foreground/90 text-lg mb-6">
                You're making great progress. Keep learning!
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
              >
                Continue Where You Left Off
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Courses in Progress"
            value="2"
            icon={BookOpen}
            trend="+1 this week"
            gradient
          />
          <StatsCard
            title="Hours Learned"
            value="24"
            icon={Clock}
            trend="+5 this week"
          />
          <StatsCard
            title="Courses Completed"
            value="1"
            icon={Trophy}
            trend="Node.js Backend"
          />
          <StatsCard
            title="Current Streak"
            value="7 days"
            icon={Target}
            trend="Keep it up!"
          />
        </div>

        {/* Courses Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Learning Path</h2>
            <Button variant="outline">View All Courses</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
