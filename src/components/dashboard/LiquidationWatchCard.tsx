import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, TrendingUp } from "lucide-react";

const mockPositions = [
  {
    protocol: "Aave",
    asset: "ETH",
    healthFactor: 1.85,
    status: "safe",
  },
  {
    protocol: "Compound",
    asset: "WBTC",
    healthFactor: 1.42,
    status: "caution",
  },
];

export function LiquidationWatchCard() {
  const overallHealthFactor = 1.65;
  
  return (
    <Card className="shadow-card bg-gradient-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-warning" />
          Liquidation Watch
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Overall Health Factor</span>
            <span className="text-lg font-bold text-success">{overallHealthFactor}</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-success h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min((overallHealthFactor / 2) * 100, 100)}%` }}
            />
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-medium">At-Risk Positions</h4>
          {mockPositions.map((position, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-secondary border border-border hover:border-primary transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">{position.protocol}</p>
                  <p className="text-sm text-muted-foreground">{position.asset}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono">{position.healthFactor}</span>
                <Badge 
                  variant={position.status === "safe" ? "default" : "secondary"}
                  className={
                    position.status === "safe" 
                      ? "bg-success/20 text-success border-success/50" 
                      : "bg-warning/20 text-warning border-warning/50"
                  }
                >
                  {position.status === "safe" ? "Safe" : "Watch"}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
