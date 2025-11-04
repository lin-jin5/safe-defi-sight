import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Layers, 
  Search, 
  FileCode, 
  Bell, 
} from "lucide-react";
import { cn } from "@/lib/utils";

const footerItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Positions", url: "/positions", icon: Layers },
  { title: "Analyzer", url: "/token-analyzer", icon: Search },
  { title: "Scanner", url: "/contract-scanner", icon: FileCode },
  { title: "Alerts", url: "/alerts", icon: Bell },
];

export function MobileFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-2 md:hidden">
      <nav className="flex items-center justify-around">
        {footerItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            end
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center gap-1 rounded-md p-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary",
                isActive && "text-primary"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </footer>
  );
}