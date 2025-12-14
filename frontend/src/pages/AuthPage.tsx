import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import api from "../lib/api";
import { useNavigate } from "react-router-dom";

console.log("AUTH PAGE LOADED");

export function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [regUsername, setRegUsername] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");

  const navigate = useNavigate();

  // ---------------- LOGIN ----------------
  const handleLogin = async (e: any) => {
    e.preventDefault();
    console.log("LOGIN CLICKED");

    try {
      const res = await api.post("/auth/login/", {
        email: loginEmail,
        password: loginPassword,
      });

      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Invalid email or password.");
    }
  };

  // ---------------- REGISTER ----------------
  const handleRegister = async (e: any) => {
    e.preventDefault();
    console.log("REGISTER CLICKED");
    if (regPassword !== regConfirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await api.post("/auth/register/", {
        username: regUsername,
        email: regEmail,
        password: regPassword,
      });

      alert("Account created!");
      setActiveTab("login");
    } catch (err) {
      console.error(err);
      alert("Registration failed.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="mb-2">Welcome Back</h1>
          <p className="text-neutral-600">Sign in or create an account</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-2 mb-8">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          {/* LOGIN */}
          <TabsContent value="login">
            <div className="border border-neutral-200 p-8 bg-white">
              <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                  <Label>Email</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <Input
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label>Password</Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <Input
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••"
                      className="pl-10"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" onClick={handleLogin}>Sign In</Button>
              </form>
            </div>
          </TabsContent>

          {/* REGISTER */}
          <TabsContent value="register">
            <div className="border border-neutral-200 p-8 bg-white">
              <form className="space-y-6" onSubmit={handleRegister}>
                <div>
                  <Label>Username</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <Input
                      type="text"
                      value={regUsername}
                      onChange={(e) => setRegUsername(e.target.value)}
                      placeholder="john123"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label>Email</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <Input
                      type="email"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label>Password</Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <Input
                      type="password"
                      value={regPassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                      placeholder="••••••••"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label>Confirm Password</Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <Input
                      type="password"
                      value={regConfirmPassword}
                      onChange={(e) => setRegConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="pl-10"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" onClick={handleRegister}>
                  Create Account
                </Button>

              </form>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
