import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

const mockTokens = [
  {
    name: "SafeMoon2.0",
    symbol: "SAFE2",
    risk: "High",
    reason: "90% of liquidity is unlocked",
  },
  {
    name: "MemeToken",
    symbol: "MEME",
    risk: "Medium",
    reason: "High developer token concentration",
  },
];

export function HighRiskTokensCard() {
  return (
    <Card className="shadow-card bg-gradient-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-danger" />
          Potential Red Flags
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockTokens.map((token, index) => (
            <div
              key={index}
              className="p-3 rounded-lg bg-secondary border border-border hover:border-danger transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-medium">{token.name}</p>
                  <p className="text-sm text-muted-foreground">{token.symbol}</p>
                </div>
                <Badge 
                  variant="destructive"
                  className={
                    token.risk === "High"
                      ? "bg-danger/20 text-danger border-danger/50"
                      : "bg-warning/20 text-warning border-warning/50"
                  }
                >
                  {token.risk}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{token.reason}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
