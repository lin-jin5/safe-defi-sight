import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Settings as SettingsIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your preferences and account settings
        </p>
      </div>

      {/* Appearance Settings Card */}
      <Card className="shadow-card bg-gradient-card border-border">
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>
            Customize the look and feel of the application.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Label htmlFor="theme">Theme</Label>
            <RadioGroup
              id="theme"
              value={theme}
              onValueChange={setTheme}
              className="grid max-w-md grid-cols-3 gap-8 pt-2"
            >
              <Label className="[&:has([data-state=checked])>div]:border-primary">
                <RadioGroupItem value="light" className="sr-only" />
                <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                  <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                    <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                      <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                      <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                    </div>
                    <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                      <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                      <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                    </div>
                  </div>
                </div>
                <span className="block w-full p-2 text-center font-normal">
                  Light
                </span>
              </Label>
              <Label className="[&:has([data-state=checked])>div]:border-primary">
                <RadioGroupItem value="dark" className="sr-only" />
                <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:border-accent">
                  <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                    <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                      <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
                      <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                    </div>
                    <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                      <div className="h-4 w-4 rounded-full bg-slate-400" />
                      <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                    </div>
                  </div>
                </div>
                <span className="block w-full p-2 text-center font-normal">
                  Dark
                </span>
              </Label>
               <Label className="[&:has([data-state=checked])>div]:border-primary">
                <RadioGroupItem value="system" className="sr-only" />
                <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                   <SettingsIcon className="h-14 w-full text-muted-foreground p-2" />
                </div>
                <span className="block w-full p-2 text-center font-normal">
                  System
                </span>
              </Label>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings Card */}
      <Card className="shadow-card bg-gradient-card border-border">
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>
            Manage how you receive alerts about your portfolio.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="health-factor-alerts" className="flex flex-col space-y-1">
              <span>Health Factor Alerts</span>
              <span className="font-normal leading-snug text-muted-foreground">
                Receive a notification when your health factor drops below 2.0.
              </span>
            </Label>
            <Switch id="health-factor-alerts" defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="new-proposals-alerts" className="flex flex-col space-y-1">
              <span>New Governance Proposals</span>
              <span className="font-normal leading-snug text-muted-foreground">
                Get notified when a new proposal is created for a protocol you use.
              </span>
            </Label>
            <Switch id="new-proposals-alerts" />
          </div>
        </CardContent>
      </Card>
      
      {/* Transaction Settings Card */}
      <Card className="shadow-card bg-gradient-card border-border">
        <CardHeader>
          <CardTitle>Transaction Settings</CardTitle>
          <CardDescription>
            Set your default preferences for transactions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="standard" className="grid grid-cols-3 gap-4">
            <div>
              <RadioGroupItem value="slow" id="slow" className="peer sr-only" />
              <Label
                htmlFor="slow"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                🐢 Slow
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="standard"
                id="standard"
                className="peer sr-only"
              />
              <Label
                htmlFor="standard"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                🔥 Standard
              </Label>
            </div>
            <div>
              <RadioGroupItem value="fast" id="fast" className="peer sr-only" />
              <Label
                htmlFor="fast"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                🚀 Fast
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  );
}
