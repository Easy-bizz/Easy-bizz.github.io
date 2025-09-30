import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  description: string;
  progress: number;
  duration: string;
  lessons: number;
  image: string;
  status: "in-progress" | "completed" | "not-started";
  courseId?: string;
}

export const CourseCard = ({
  title,
  description,
  progress,
  duration,
  lessons,
  image,
  status,
  courseId,
}: CourseCardProps) => {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-glow transition-smooth group">
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        {status === "completed" && (
          <div className="absolute top-3 right-3 bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-semibold">
            Completed
          </div>
        )}
        {status === "in-progress" && (
          <div className="absolute top-3 right-3 gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            In Progress
          </div>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-muted-foreground text-sm mt-2">{description}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>{lessons} lessons</span>
          </div>
        </div>
        
        {status !== "not-started" && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-semibold text-primary">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
        
        <Link to={courseId ? `/course/${courseId}` : "#"} className="block">
          <Button 
            className="w-full gradient-primary hover:opacity-90 transition-smooth"
            size="lg"
          >
            {status === "not-started" ? "Start Course" : "Continue Learning"}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
