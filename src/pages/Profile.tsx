import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Calendar, Edit } from "lucide-react";

const Profile = () => {
  const userSkills = [
    { name: "HTML/CSS", level: 75 },
    { name: "JavaScript", level: 65 },
    { name: "React", level: 40 },
    { name: "Node.js", level: 80 },
  ];

  const interests = ["Frontend", "Backend", "UI/UX", "Mobile Dev", "DevOps"];

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">My Profile</h1>
          <p className="text-muted-foreground text-lg">
            Manage your account and track your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="shadow-card lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-32 w-32 mb-4">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-3xl gradient-primary text-primary-foreground">
                    AK
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold mb-2">Alex Kim</h2>
                <p className="text-muted-foreground mb-4">Web Developer</p>
                
                <div className="w-full space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>alex.kim@email.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Jakarta, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Joined March 2024</span>
                  </div>
                </div>

                <Button className="w-full gradient-primary">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Details Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Alex" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Kim" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="alex.kim@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="+62 812 3456 7890" />
                  </div>
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            {/* Skills Progress */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Skill Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {userSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full gradient-primary transition-all"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Learning Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="px-4 py-2 text-sm"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
