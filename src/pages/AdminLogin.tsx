import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import logo from "@/assets/logo.png";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder auth - will be replaced with Lovable Cloud auth
    if (email && password) {
      localStorage.setItem("admin_session", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Please enter your credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center px-4">
      <div className="bg-background rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <img src={logo} alt="Logo" className="h-12 w-auto mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground">Admin Login</h1>
          <p className="text-sm text-muted-foreground mt-1">Sign in to manage your website</p>
        </div>

        {error && (
          <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md mb-4">{error}</div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
              placeholder="admin@fissieehelping.org"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-md font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <Lock size={16} />
            Sign In
          </button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Secure admin access. Contact the administrator for credentials.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
