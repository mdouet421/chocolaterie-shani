import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function CardShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Complete card">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>
              Card description with supporting text that provides more context.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              This is the card content area. You can place any content here
              including forms, lists, or other components.
            </p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button variant="secondary" size="sm">Cancel</Button>
            <Button size="sm">Save</Button>
          </CardFooter>
        </Card>
      </SubSection>

      <SubSection title="Simple card">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Check your inbox for the latest updates.
            </p>
          </CardContent>
        </Card>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/card")({
  component: CardShowcase,
});
