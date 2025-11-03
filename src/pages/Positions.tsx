import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, CheckCircle, AlertCircle, Wallet } from "lucide-react";
import { useWallet } from "@/contexts/WalletContext";
import { usePositions } from "@/hooks/useBlockchainData"; // <-- 1. IMPORT THE CORRECT HOOK
import { useAppKit } from "@reown/appkit/react";

export default function Positions() {
  const { isConnected } = useWallet();
  const { open } = useAppKit();
  
  // --- 2. USE THE NEW HOOK AND DESTRUCTURE ITS STATE ---
  const { 
    data: positions, // `data` is the successful response, aliased to `positions`
    isLoading,      // The new loading state
    isError,        // The new error state
  } = usePositions();

  if (!isConnected) {
    return (
      <div className="container mx-auto p-6">
        <Card className="shadow-card bg-gradient-card border-border">
          <CardContent className="flex flex-col items-center justify-center py-16 space-y-4">
            <Wallet className="h-16 w-16 text-muted-foreground" />
            <h2 className="text-2xl font-bold">Connect Your Wallet</h2>
            <p className="text-muted-foreground text-center max-w-md">
              Connect your wallet to view your DeFi positions and monitor liquidation risks.
            </p>
            <Button 
              onClick={() => open()}
              className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
              size="lg"
            >
              <Wallet className="h-5 w-5 mr-2" />
              Connect Wallet
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Your Positions</h1>
        <p className="text-muted-foreground">
          Detailed breakdown of all your DeFi positions
        </p>
      </div>

      {isLoading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
          <p className="mt-4 text-muted-foreground">Loading positions...</p>
        </div>
      )}

      {isError && (
         <Card className="border-danger/50 bg-danger/10">
          <CardContent className="flex items-center gap-3 py-4">
            <AlertCircle className="h-5 w-5 text-danger" />
            <p className="text-sm text-danger">Could not fetch your positions. Please try again later.</p>
          </CardContent>
        </Card>
      )}

      {/* 3. CHECK IF POSITIONS DATA EXISTS BEFORE MAPPING */}
      {positions && !isLoading && !isError && (
        <div className="space-y-4">
          {positions.map((position, index) => (
            <Card key={index} className="shadow-card bg-gradient-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    {position.protocol}
                  </CardTitle>
                  <Badge variant="outline" className="border-primary/50 text-primary">
                    {position.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">
                        Collateral
                      </h4>
                      <p className="text-lg font-bold">{position.collateral?.amount}</p>
                      <p className="text-sm text-muted-foreground">
                        {position.collateral?.usd}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">
                        Borrowed
                      </h4>
                      <p className="text-lg font-bold">{position.borrowed?.amount}</p>
                      <p className="text-sm text-muted-foreground">
                        {position.borrowed?.usd}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium text-muted-foreground">
                          Health Factor
                        </h4>
                        <span className="text-lg font-bold text-success">
                          {position.healthFactor}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-success h-2 rounded-full"
                          style={{
                            width: `${Math.min(((position.healthFactor || 0) / 2) * 100, 100)}%`,
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">
                        Liquidation Price
                      </h4>
                      <p className="text-lg font-bold">{position.liquidationPrice}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium">Risk Analysis</h4>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        {position.audited ? (
                          <>
                            <CheckCircle className="h-4 w-4 text-success" />
                            <span className="text-sm text-success">Audited</span>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="h-4 w-4 text-warning" />
                            <span className="text-sm text-warning">No Audit Found</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          Security Score:
                        </span>
                        <span className="text-sm font-bold text-success">
                          {position.securityScore}/100
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 border-primary/50 hover:bg-primary/10">
                      Add Collateral
                    </Button>
                    <Button variant="outline" className="flex-1 border-primary/50 hover:bg-primary/10">
                      Repay Loan
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
