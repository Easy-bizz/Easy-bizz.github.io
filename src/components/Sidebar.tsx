import { Home, BookOpen, Trophy, Settings, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: BookOpen, label: "My Courses", path: "/courses" },
  { icon: Trophy, label: "Achievements", path: "/achievements" },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-card border-r border-border p-6 sticky top-0">
      <div className="mb-8">
        <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
          WebDev Academy
        </h1>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth",
                isActive
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="mt-8 p-4 gradient-primary rounded-lg">
        <h3 className="font-semibold text-primary-foreground mb-2">
          Premium Plan
        </h3>
        <p className="text-sm text-primary-foreground/80 mb-3">
          Unlock all courses and features
        </p>
        <button className="w-full bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-white/90 transition-smooth">
          Upgrade Now
        </button>
      </div>
    </aside>
  );
};
