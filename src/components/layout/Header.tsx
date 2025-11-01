import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Wallet } from "lucide-react";

export function Header() {
  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
      </div>
      
      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
        <Wallet className="h-4 w-4 mr-2" />
        Connect Wallet
      </Button>
    </header>
  );
}
