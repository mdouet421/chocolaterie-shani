import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/(prototype)/login/")({
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-svh items-center justify-center px-8">
      <div className="flex w-full max-w-xs flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold tracking-tight">Login or Sign Up</h1>
          <p className="text-sm text-muted-foreground text-pretty">Enter your email to login or create an account</p>
        </div>
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: "/login/verify" });
          }}
        >
          <Input type="email" placeholder="Email" autoComplete="email" size="lg" />
          <Button type="submit" size="lg" className="w-full">
            Continue with email
          </Button>
        </form>
      </div>
    </div>
  );
}
