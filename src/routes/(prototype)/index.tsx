import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/(prototype)/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 p-4 text-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl break-all">Prototype</h1>
        <p>
          <Link to="/login" className="underline">
            Login example
          </Link>
        </p>
      </div>
    </div>
  );
}
