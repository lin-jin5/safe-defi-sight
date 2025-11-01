import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldAlert } from "lucide-react";

const mockContracts = [
  {
    protocol: "DeFiYield",
    issue: "No audit found",
    severity: "High",
  },
  {
    protocol: "LiquidityPool",
    issue: "Known reentrancy vulnerability",
    severity: "Critical",
  },
];

export function VulnerableContractsCard() {
  return (
    <Card className="shadow-card bg-gradient-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldAlert className="h-5 w-5 text-warning" />
          Smart Contract Security
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockContracts.map((contract, index) => (
            <div
              key={index}
              className="p-3 rounded-lg bg-secondary border border-border hover:border-warning transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">{contract.protocol}</p>
                <Badge 
                  variant="destructive"
                  className={
                    contract.severity === "Critical"
                      ? "bg-danger/20 text-danger border-danger/50"
                      : "bg-warning/20 text-warning border-warning/50"
                  }
                >
                  {contract.severity}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{contract.issue}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
