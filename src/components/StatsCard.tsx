import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  gradient?: boolean;
}

export const StatsCard = ({ title, value, icon: Icon, trend, gradient }: StatsCardProps) => {
  return (
    <Card className={`shadow-card hover:shadow-glow transition-smooth ${gradient ? 'gradient-primary text-primary-foreground' : ''}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className={`text-sm font-medium ${gradient ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
              {title}
            </p>
            <p className="text-3xl font-bold">{value}</p>
            {trend && (
              <p className={`text-xs ${gradient ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                {trend}
              </p>
            )}
          </div>
          <div className={`p-3 rounded-full ${gradient ? 'bg-white/20' : 'bg-primary/10'}`}>
            <Icon className={`h-6 w-6 ${gradient ? 'text-primary-foreground' : 'text-primary'}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
