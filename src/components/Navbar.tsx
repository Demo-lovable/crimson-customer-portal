
import React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { List, LogOut } from "lucide-react";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // In a real app, you would clear authentication
    localStorage.removeItem("isAuthenticated");
    navigate("/", { replace: true });
  };

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-30 flex h-screen w-16 flex-col items-center justify-between bg-sidebar py-4",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="relative hover:bg-accent/10 hover:text-accent group"
          title="Customer List"
        >
          <List className="h-5 w-5" />
          <span className="absolute left-full ml-2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
            Customer List
          </span>
        </Button>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleSignOut}
          className="relative hover:bg-accent/10 hover:text-accent group"
          title="Sign Out"
        >
          <LogOut className="h-5 w-5" />
          <span className="absolute left-full ml-2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
            Sign Out
          </span>
        </Button>
      </div>
    </aside>
  );
};

export default Navbar;
