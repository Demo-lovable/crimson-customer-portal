
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Function to sanitize inputs for XSS prevention
  const sanitizeInput = (input: string): string => {
    return input.replace(/[<>"'&]/g, (char) => {
      switch (char) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '"': return '&quot;';
        case "'": return '&#39;';
        case '&': return '&amp;';
        default: return char;
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Sanitize inputs
    const sanitizedEmail = sanitizeInput(email);
    
    // Validate input
    if (!sanitizedEmail || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // In a real application, you would:
      // 1. Send credentials to a secure backend
      // 2. Use HTTPS
      // 3. Implement proper authentication (OAuth, JWT, etc.)
      // 4. Never store passwords in plain text
      
      // For demo, we'll simulate a successful login
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (sanitizedEmail === "admin@example.com" && password === "password") {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/dashboard");
      } else {
        toast({
          title: "Authentication failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during login",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Login to Admin Portal</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-accent hover:bg-accent/90"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Demo credentials: admin@example.com / password</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
