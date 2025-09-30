import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useParams, Link } from "react-router-dom";
import { 
  Clock, 
  BookOpen, 
  Play, 
  CheckCircle2, 
  Lock, 
  Star,
  Award,
  Users,
  BarChart
} from "lucide-react";

const CourseDetail = () => {
  const { courseId } = useParams();
  
  const courseData: Record<string, any> = {
    "html-css": {
      title: "HTML & CSS Fundamentals",
      description: "Master the building blocks of web development with HTML5 and CSS3. Learn to create beautiful, responsive websites from scratch.",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 12450,
      duration: "8 hours",
      level: "Beginner",
      progress: 75,
      image: "/placeholder.svg",
      overview: "This comprehensive course covers everything you need to know about HTML and CSS. You'll start with the basics of HTML structure, move through semantic HTML5 elements, and then dive deep into modern CSS techniques including Flexbox, Grid, animations, and responsive design.",
      whatYouLearn: [
        "Build semantic HTML structures",
        "Style websites with modern CSS3",
        "Create responsive layouts with Flexbox and Grid",
        "Implement smooth animations and transitions",
        "Apply best practices for accessibility",
        "Optimize websites for performance"
      ],
      modules: [
        {
          title: "Introduction to HTML",
          lessons: 6,
          duration: "45 min",
          completed: 6,
          items: [
            { title: "What is HTML?", duration: "8 min", completed: true },
            { title: "HTML Document Structure", duration: "10 min", completed: true },
            { title: "Common HTML Tags", duration: "12 min", completed: true },
            { title: "Semantic HTML5", duration: "8 min", completed: true },
            { title: "Forms and Inputs", duration: "10 min", completed: true },
            { title: "HTML Best Practices", duration: "7 min", completed: true },
          ]
        },
        {
          title: "CSS Fundamentals",
          lessons: 8,
          duration: "1h 20min",
          completed: 8,
          items: [
            { title: "Introduction to CSS", duration: "10 min", completed: true },
            { title: "CSS Selectors", duration: "12 min", completed: true },
            { title: "Box Model", duration: "15 min", completed: true },
            { title: "Colors and Typography", duration: "10 min", completed: true },
            { title: "CSS Units and Values", duration: "8 min", completed: true },
            { title: "Display and Position", duration: "12 min", completed: true },
            { title: "Float and Clear", duration: "8 min", completed: true },
            { title: "CSS Variables", duration: "5 min", completed: true },
          ]
        },
        {
          title: "Flexbox Layout",
          lessons: 5,
          duration: "50 min",
          completed: 3,
          items: [
            { title: "Introduction to Flexbox", duration: "10 min", completed: true },
            { title: "Flex Container Properties", duration: "12 min", completed: true },
            { title: "Flex Item Properties", duration: "10 min", completed: true },
            { title: "Building Layouts with Flexbox", duration: "15 min", completed: false },
            { title: "Flexbox Practice Project", duration: "13 min", completed: false },
          ]
        },
        {
          title: "CSS Grid Layout",
          lessons: 6,
          duration: "1h 10min",
          completed: 0,
          items: [
            { title: "Introduction to Grid", duration: "10 min", completed: false },
            { title: "Grid Container & Items", duration: "12 min", completed: false },
            { title: "Grid Template Areas", duration: "15 min", completed: false },
            { title: "Responsive Grid Layouts", duration: "12 min", completed: false },
            { title: "Grid vs Flexbox", duration: "8 min", completed: false },
            { title: "Grid Practice Project", duration: "13 min", completed: false },
          ]
        },
        {
          title: "Responsive Design",
          lessons: 7,
          duration: "1h 15min",
          completed: 0,
          items: [
            { title: "Mobile-First Design", duration: "10 min", completed: false },
            { title: "Media Queries", duration: "12 min", completed: false },
            { title: "Responsive Images", duration: "10 min", completed: false },
            { title: "Viewport Units", duration: "8 min", completed: false },
            { title: "CSS Functions (clamp, min, max)", duration: "10 min", completed: false },
            { title: "Container Queries", duration: "12 min", completed: false },
            { title: "Responsive Project", duration: "13 min", completed: false },
          ]
        },
        {
          title: "Animations & Transitions",
          lessons: 5,
          duration: "55 min",
          completed: 0,
          items: [
            { title: "CSS Transitions", duration: "10 min", completed: false },
            { title: "CSS Animations", duration: "12 min", completed: false },
            { title: "Keyframes", duration: "10 min", completed: false },
            { title: "Transform Properties", duration: "12 min", completed: false },
            { title: "Animation Project", duration: "11 min", completed: false },
          ]
        },
      ]
    },
    "javascript": {
      title: "JavaScript Essentials",
      description: "Learn modern JavaScript ES6+ features and core concepts to build interactive web applications.",
      instructor: "Michael Chen",
      rating: 4.9,
      students: 18320,
      duration: "12 hours",
      level: "Intermediate",
      progress: 45,
      image: "/placeholder.svg",
      overview: "Dive deep into JavaScript programming with this comprehensive course. Master ES6+ syntax, asynchronous programming, DOM manipulation, and modern JavaScript patterns used in real-world applications.",
      whatYouLearn: [
        "Understand JavaScript fundamentals",
        "Work with ES6+ features",
        "Master asynchronous JavaScript",
        "Manipulate the DOM effectively",
        "Handle events and user interactions",
        "Build interactive web applications"
      ],
      modules: [
        {
          title: "JavaScript Basics",
          lessons: 8,
          duration: "1h 30min",
          completed: 8,
          items: [
            { title: "Variables and Data Types", duration: "12 min", completed: true },
            { title: "Operators", duration: "10 min", completed: true },
            { title: "Conditionals", duration: "12 min", completed: true },
            { title: "Loops", duration: "15 min", completed: true },
            { title: "Functions", duration: "15 min", completed: true },
            { title: "Arrays", duration: "12 min", completed: true },
            { title: "Objects", duration: "12 min", completed: true },
            { title: "Scope and Hoisting", duration: "12 min", completed: true },
          ]
        },
        {
          title: "ES6+ Features",
          lessons: 10,
          duration: "2h",
          completed: 6,
          items: [
            { title: "Let, Const, and Block Scope", duration: "10 min", completed: true },
            { title: "Arrow Functions", duration: "12 min", completed: true },
            { title: "Template Literals", duration: "8 min", completed: true },
            { title: "Destructuring", duration: "15 min", completed: true },
            { title: "Spread and Rest Operators", duration: "12 min", completed: true },
            { title: "Default Parameters", duration: "8 min", completed: true },
            { title: "Classes", duration: "15 min", completed: false },
            { title: "Modules", duration: "12 min", completed: false },
            { title: "Promises", duration: "15 min", completed: false },
            { title: "Async/Await", duration: "13 min", completed: false },
          ]
        },
        {
          title: "DOM Manipulation",
          lessons: 8,
          duration: "1h 40min",
          completed: 0,
          items: [
            { title: "Document Object Model", duration: "12 min", completed: false },
            { title: "Selecting Elements", duration: "10 min", completed: false },
            { title: "Modifying Elements", duration: "12 min", completed: false },
            { title: "Creating and Removing Elements", duration: "15 min", completed: false },
            { title: "Event Listeners", duration: "15 min", completed: false },
            { title: "Event Delegation", duration: "12 min", completed: false },
            { title: "Form Handling", duration: "12 min", completed: false },
            { title: "DOM Project", duration: "12 min", completed: false },
          ]
        },
      ]
    }
  };

  const course = courseData[courseId || "html-css"] || courseData["html-css"];
  const totalLessons = course.modules.reduce((acc: number, mod: any) => acc + mod.lessons, 0);
  const completedLessons = course.modules.reduce((acc: number, mod: any) => acc + mod.completed, 0);

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      
      <main className="flex-1 p-8">
        {/* Back Button */}
        <Link to="/courses">
          <Button variant="ghost" className="mb-6">
            ← Back to Courses
          </Button>
        </Link>

        {/* Course Header */}
        <div className="gradient-primary rounded-2xl p-8 mb-8 shadow-glow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-primary-foreground">
            <div className="lg:col-span-2">
              <Badge className="bg-white/20 text-primary-foreground mb-3">
                {course.level}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg mb-6 text-primary-foreground/90">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="font-semibold">{course.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <span>{totalLessons} lessons</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Your Progress</span>
                  <span className="font-semibold">{completedLessons}/{totalLessons} lessons completed</span>
                </div>
                <Progress value={course.progress} className="h-3" />
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg px-8">
                <Play className="h-5 w-5 mr-2" />
                Continue Learning
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Overview */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Course Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {course.overview}
                </p>
              </CardContent>
            </Card>

            {/* What You'll Learn */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.whatYouLearn.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Content */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Course Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {course.modules.map((module: any, moduleIndex: number) => (
                  <div key={moduleIndex} className="border rounded-lg overflow-hidden">
                    <div className="bg-secondary p-4 flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{module.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{module.lessons} lessons</span>
                          <span>•</span>
                          <span>{module.duration}</span>
                          <span>•</span>
                          <span>{module.completed}/{module.lessons} completed</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-primary">
                          {Math.round((module.completed / module.lessons) * 100)}%
                        </div>
                      </div>
                    </div>
                    
                    <div className="divide-y">
                      {module.items.map((lesson: any, lessonIndex: number) => (
                        <div 
                          key={lessonIndex}
                          className={`p-4 flex items-center justify-between transition-smooth ${
                            lesson.completed 
                              ? 'bg-background hover:bg-secondary/50' 
                              : 'bg-background hover:bg-secondary/50'
                          }`}
                        >
                          <div className="flex items-center gap-3 flex-1">
                            {lesson.completed ? (
                              <CheckCircle2 className="h-5 w-5 text-success" />
                            ) : (
                              <div className="h-5 w-5 rounded-full border-2 border-muted" />
                            )}
                            <span className={lesson.completed ? 'text-muted-foreground' : ''}>
                              {lesson.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">
                              {lesson.duration}
                            </span>
                            {lesson.completed ? (
                              <Button size="sm" variant="outline">
                                <Play className="h-4 w-4 mr-2" />
                                Replay
                              </Button>
                            ) : lessonIndex === 0 || module.items[lessonIndex - 1]?.completed ? (
                              <Button size="sm" className="gradient-primary">
                                <Play className="h-4 w-4 mr-2" />
                                Start
                              </Button>
                            ) : (
                              <Button size="sm" variant="ghost" disabled>
                                <Lock className="h-4 w-4 mr-2" />
                                Locked
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Instructor */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                    {course.instructor.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold">{course.instructor}</p>
                    <p className="text-sm text-muted-foreground">Senior Developer</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Expert web developer with 10+ years of experience teaching and building web applications.
                </p>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-primary" />
                    <span className="text-sm">Completion</span>
                  </div>
                  <span className="font-bold">{course.progress}%</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span className="text-sm">Lessons Done</span>
                  </div>
                  <span className="font-bold">{completedLessons}/{totalLessons}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm">Certificates</span>
                  </div>
                  <span className="font-bold">0/1</span>
                </div>
              </CardContent>
            </Card>

            {/* Certificate */}
            <Card className="shadow-card gradient-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Complete to earn certificate</h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Finish all lessons to get your completion certificate
                </p>
                <div className="text-2xl font-bold">{course.progress}%</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;
