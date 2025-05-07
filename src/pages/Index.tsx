
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "@/components/LoginForm";

const Index: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simple auth check - in a real app this would check JWT or session validity
    if (localStorage.getItem("isAuthenticated") === "true") {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Customer Portal</h1>
          <p className="text-gray-500">Secure login to manage your customer data</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Index;
