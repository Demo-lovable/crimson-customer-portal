
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
        "fixed right-0 top-0 z-30 flex h-screen w-16 flex-col items-center justify-between bg-sidebar py-4",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-accent/10 hover:text-accent"
          title="Customer List"
        >
          <List className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleSignOut}
          className="hover:bg-accent/10 hover:text-accent"
          title="Sign Out"
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </aside>
  );
};

export default Navbar;
