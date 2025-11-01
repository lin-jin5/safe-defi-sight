import { RiskScoreCard } from "@/components/dashboard/RiskScoreCard";
import { LiquidationWatchCard } from "@/components/dashboard/LiquidationWatchCard";
import { HighRiskTokensCard } from "@/components/dashboard/HighRiskTokensCard";
import { VulnerableContractsCard } from "@/components/dashboard/VulnerableContractsCard";

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Risk Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor your DeFi positions and potential risks in real-time
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RiskScoreCard />
        <LiquidationWatchCard />
        <HighRiskTokensCard />
        <VulnerableContractsCard />
      </div>
    </div>
  );
}
