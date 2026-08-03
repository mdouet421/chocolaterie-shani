import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export const Route = createFileRoute("/(prototype)/login/verify")({
  component: VerifyPage,
});

function VerifyPage() {
  const navigate = useNavigate();

  const handleVerified = () => {
    navigate({ to: "/" });
  };

  return (
    <div className="flex min-h-svh items-center justify-center px-8">
      <div className="flex w-full max-w-xs flex-col gap-6">
        <div>
          <Link
            to="/login"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back
          </Link>
        </div>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleVerified();
          }}
        >
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold tracking-tight">Verification</h1>
            <p className="text-sm text-muted-foreground text-pretty">
              We have sent a code to <span className="font-medium text-foreground">admin@admin.com</span>. Enter it
              below.
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">Verification code</label>
            <InputOTP maxLength={6} size="lg" onComplete={handleVerified}>
              <InputOTPGroup className="w-full">
                <InputOTPSlot index={0} className="flex-1" />
                <InputOTPSlot index={1} className="flex-1" />
                <InputOTPSlot index={2} className="flex-1" />
                <InputOTPSlot index={3} className="flex-1" />
                <InputOTPSlot index={4} className="flex-1" />
                <InputOTPSlot index={5} className="flex-1" />
              </InputOTPGroup>
            </InputOTP>
            <p className="text-xs text-muted-foreground">The code expires shortly (5 minutes)</p>
          </div>
          <Button type="submit" size="lg" className="min-w-48">
            Confirm
          </Button>
        </form>
      </div>
    </div>
  );
}
