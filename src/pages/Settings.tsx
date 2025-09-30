import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Bell, Mail, Lock, Globe, Moon } from "lucide-react";

const Settings = () => {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Settings</h1>
          <p className="text-muted-foreground text-lg">
            Manage your account preferences and settings
          </p>
        </div>

        <div className="max-w-3xl space-y-6">
          {/* Notifications */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
              <CardDescription>
                Choose what notifications you want to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notif">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive email updates about your courses
                  </p>
                </div>
                <Switch id="email-notif" defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="course-updates">Course Updates</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified when new lessons are added
                  </p>
                </div>
                <Switch id="course-updates" defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="achievement">Achievement Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Notifications when you unlock achievements
                  </p>
                </div>
                <Switch id="achievement" defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Appearance */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Moon className="h-5 w-5" />
                Appearance
              </CardTitle>
              <CardDescription>
                Customize how the platform looks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable dark theme for better visibility
                  </p>
                </div>
                <Switch id="dark-mode" />
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Privacy & Security
              </CardTitle>
              <CardDescription>
                Manage your account security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Button className="gradient-primary">Update Password</Button>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security
                  </p>
                </div>
                <Switch id="two-factor" />
              </div>
            </CardContent>
          </Card>

          {/* Language & Region */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Language & Region
              </CardTitle>
              <CardDescription>
                Set your preferred language and timezone
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <select 
                  id="language"
                  className="w-full h-10 px-3 rounded-md border border-input bg-background"
                >
                  <option>English</option>
                  <option>Bahasa Indonesia</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <select 
                  id="timezone"
                  className="w-full h-10 px-3 rounded-md border border-input bg-background"
                >
                  <option>GMT+7 Jakarta</option>
                  <option>GMT+0 London</option>
                  <option>GMT-5 New York</option>
                  <option>GMT+9 Tokyo</option>
                </select>
              </div>
              <Button>Save Preferences</Button>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="shadow-card border-destructive">
            <CardHeader>
              <CardTitle className="text-destructive">Danger Zone</CardTitle>
              <CardDescription>
                Irreversible actions for your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="destructive" className="w-full">
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Settings;
