import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Award, Star, Zap, Target, BookOpen } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "First Course Completed",
      description: "Complete your first course",
      progress: 100,
      unlocked: true,
      color: "text-yellow-500",
    },
    {
      icon: Zap,
      title: "7-Day Streak",
      description: "Learn for 7 consecutive days",
      progress: 100,
      unlocked: true,
      color: "text-orange-500",
    },
    {
      icon: BookOpen,
      title: "Knowledge Seeker",
      description: "Complete 50 lessons",
      progress: 60,
      unlocked: false,
      color: "text-blue-500",
    },
    {
      icon: Target,
      title: "On Target",
      description: "Complete all daily goals for a week",
      progress: 85,
      unlocked: false,
      color: "text-green-500",
    },
    {
      icon: Star,
      title: "Rising Star",
      description: "Earn 1000 experience points",
      progress: 45,
      unlocked: false,
      color: "text-purple-500",
    },
    {
      icon: Award,
      title: "Master Developer",
      description: "Complete all advanced courses",
      progress: 10,
      unlocked: false,
      color: "text-red-500",
    },
  ];

  const stats = [
    { label: "Total XP", value: "2,450", icon: Zap },
    { label: "Achievements Unlocked", value: "2/6", icon: Trophy },
    { label: "Current Streak", value: "7 days", icon: Target },
    { label: "Level", value: "12", icon: Star },
  ];

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Achievements</h1>
          <p className="text-muted-foreground text-lg">
            Track your progress and unlock amazing badges
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className="p-3 rounded-full bg-primary/10">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className={`shadow-card transition-smooth ${
                achievement.unlocked ? "shadow-glow" : "opacity-75"
              }`}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${
                    achievement.unlocked ? "gradient-primary" : "bg-secondary"
                  }`}>
                    <achievement.icon className={`h-6 w-6 ${
                      achievement.unlocked ? "text-primary-foreground" : achievement.color
                    }`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{achievement.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {achievement.unlocked ? (
                  <div className="flex items-center gap-2 text-success font-semibold">
                    <Trophy className="h-4 w-4" />
                    <span>Unlocked!</span>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold">{achievement.progress}%</span>
                    </div>
                    <Progress value={achievement.progress} className="h-2" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Achievements;
