import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export function RiskScoreCard() {
  const riskScore = 85;
  
  return (
    <Card className="shadow-card bg-gradient-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-success" />
          Portfolio Risk Score
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-32 h-32">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="hsl(var(--muted))"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="hsl(var(--success))"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${(riskScore / 100) * 352} 352`}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-success">{riskScore}</span>
            </div>
          </div>
          <p className="text-center text-muted-foreground">
            Your portfolio is currently at <span className="text-success font-semibold">low risk</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
