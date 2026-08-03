import { createFileRoute } from "@tanstack/react-router";
import { AppWindowIcon, CodeIcon } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function TabsShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Basic">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="p-3 text-muted-foreground">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password" className="p-3 text-muted-foreground">
            Change your password here.
          </TabsContent>
        </Tabs>
      </SubSection>

      <SubSection title="Line variant">
        <Tabs defaultValue="overview">
          <TabsList variant="line">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
        </Tabs>
      </SubSection>

      <SubSection title="Vertical orientation">
        <Tabs defaultValue="account" orientation="vertical">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
        </Tabs>
      </SubSection>

      <SubSection title="With icons">
        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">
              <AppWindowIcon />
              Preview
            </TabsTrigger>
            <TabsTrigger value="code">
              <CodeIcon />
              Code
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/tabs")({
  component: TabsShowcase,
});
