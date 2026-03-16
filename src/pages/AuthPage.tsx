import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    // Simple mock authentication
    if (email === "admin@fissie.org" && password === "admin123") {
      localStorage.setItem("isAuthenticated", "true");
      toast.success("Successfully logged in!");
      navigate("/dashboard");
    } else {
      toast.error("Invalid credentials. Use admin@fissie.org / admin123");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24 flex items-center justify-center">
      <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-gray-100 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#172554] mb-2">
            Admin Login
          </h1>
          <p className="text-gray-500">
            Enter your credentials to access the CMS
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-xs font-bold text-[#172554] uppercase tracking-widest opacity-60"
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@fissie.org"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-none border-0 border-b-2 border-border bg-transparent focus-visible:ring-0 focus-visible:border-gold h-12 px-0 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-xs font-bold text-[#172554] uppercase tracking-widest opacity-60"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-none border-0 border-b-2 border-border bg-transparent focus-visible:ring-0 focus-visible:border-gold h-12 px-0 transition-colors"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#172554] text-white py-6 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all shadow-md mt-4"
          >
            Log In
          </Button>
        </form>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg text-xs text-blue-700">
          <p className="font-bold mb-1">Demo Credentials:</p>
          <p>Email: admin@fissie.org</p>
          <p>Password: admin123</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
