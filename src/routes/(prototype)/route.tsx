import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(prototype)")({
  component: PrototypeLayout,
});

function PrototypeLayout() {
  return <Outlet />;
}
