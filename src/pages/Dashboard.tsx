
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CustomerTable from "@/components/CustomerTable";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Auth check - redirect to login if not authenticated
    if (localStorage.getItem("isAuthenticated") !== "true") {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Navbar />
      <main className="flex-1 p-8 ml-16">
        <CustomerTable />
      </main>
    </div>
  );
};

export default Dashboard;
