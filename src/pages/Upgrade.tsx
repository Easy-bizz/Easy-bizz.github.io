import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown } from "lucide-react";

const Upgrade = () => {
  const handlePayPalPayment = () => {
    const paypalEmail = "ridafunkysst@gmail.com";
    const amount = "49.99";
    const itemName = "Premium Learning Plan - Annual";
    const currency = "USD";
    
    const paypalUrl = `https://www.paypal.com/paypalme/${paypalEmail.split('@')[0]}/${amount}`;
    
    window.open(paypalUrl, '_blank');
  };

  const premiumFeatures = [
    "Unlimited access to all courses",
    "Download course materials for offline learning",
    "Priority support from instructors",
    "Exclusive premium-only courses",
    "Advanced coding challenges",
    "1-on-1 mentoring sessions (2 per month)",
    "Certificate of completion for all courses",
    "Ad-free learning experience",
    "Early access to new courses",
    "Community forum access with experts"
  ];

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Crown className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-3">Upgrade to Premium</h1>
            <p className="text-muted-foreground text-lg">
              Unlock unlimited learning and accelerate your career
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Free Plan</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    <span>Access to 3 free courses</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    <span>Basic course materials</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    <span>Community forum access</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="w-4 h-4 mr-2" />
                    <span>Limited practice exercises</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" disabled data-testid="button-current-plan">
                  Current Plan
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-primary shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <div className="flex items-center justify-between">
                  <CardTitle>Premium Plan</CardTitle>
                  <Crown className="w-6 h-6 text-primary" />
                </div>
                <CardDescription>Unlock all features</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold">$49.99</span>
                  <span className="text-muted-foreground">/year</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    That's only $4.17/month - Save 65%!
                  </p>
                </div>
                <ul className="space-y-2">
                  {premiumFeatures.slice(0, 5).map((feature, index) => (
                    <li key={index} className="flex items-center" data-testid={`feature-${index}`}>
                      <Check className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  <li className="text-sm text-muted-foreground pt-2">
                    + {premiumFeatures.length - 5} more premium features
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handlePayPalPayment}
                  data-testid="button-upgrade-now"
                >
                  Upgrade Now with PayPal
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Premium Features</CardTitle>
              <CardDescription>Everything you get with Premium</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {premiumFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start" data-testid={`all-feature-${index}`}>
                    <Check className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Secure payment powered by PayPal</p>
            <p className="mt-2">Cancel anytime. 30-day money-back guarantee.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Upgrade;
