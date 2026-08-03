import { createFileRoute, Outlet } from "@tanstack/react-router";

function DesignSystemLayout() {
  return <Outlet />;
}

export const Route = createFileRoute("/design-system")({
  component: DesignSystemLayout,
});
