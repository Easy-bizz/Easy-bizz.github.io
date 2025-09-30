import { Sidebar } from "@/components/Sidebar";
import { CourseCard } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import htmlCssIcon from "@/assets/html-css-icon.jpg";
import jsIcon from "@/assets/javascript-icon.jpg";
import reactIcon from "@/assets/react-icon.jpg";
import nodeIcon from "@/assets/nodejs-icon.jpg";

const Courses = () => {
  const inProgressCourses = [
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
  ];

  const completedCourses = [
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

  const availableCourses = [
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
      title: "TypeScript Mastery",
      description: "Add type safety to your JavaScript applications",
      progress: 0,
      duration: "9 hours",
      lessons: 28,
      image: jsIcon,
      status: "not-started" as const,
      courseId: "typescript",
    },
    {
      title: "Advanced CSS & Animations",
      description: "Create stunning designs with advanced CSS techniques",
      progress: 0,
      duration: "7 hours",
      lessons: 22,
      image: htmlCssIcon,
      status: "not-started" as const,
      courseId: "advanced-css",
    },
  ];

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">My Courses</h1>
          <p className="text-muted-foreground text-lg">
            Track your learning journey and explore new courses
          </p>
        </div>

        <Tabs defaultValue="in-progress" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="in-progress">In Progress ({inProgressCourses.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedCourses.length})</TabsTrigger>
            <TabsTrigger value="available">Available ({availableCourses.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="in-progress">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {inProgressCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="completed">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {completedCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="available">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {availableCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Courses;
