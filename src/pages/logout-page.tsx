import { Login } from "@/components/navigation/login";
import { LogOut } from "lucide-react";

export function LogoutPage() {
  return (
    <main className="flex flex-col justify-center items-center min-h-[calc(100vh-8rem)] bg-gradient-to-b from-background to-muted">
      <div className="text-center p-8 rounded-lg shadow-lg bg-card">
        <LogOut className="w-16 h-16 mx-auto mb-4 text-primary" />
        <h1 className="text-3xl font-bold mb-4 text-foreground">
          Access Restricted
        </h1>
        <p className="text-xl mb-6 text-muted-foreground">
          You must be logged in to view this page
        </p>
        <Login />
      </div>
    </main>
  );
}
