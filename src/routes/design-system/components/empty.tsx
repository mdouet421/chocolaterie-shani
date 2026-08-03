import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRightIcon,
  BellIcon,
  CloudIcon,
  FolderCodeIcon,
  RefreshCcwIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function EmptyShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FolderCodeIcon />
            </EmptyMedia>
            <EmptyTitle>No Projects Yet</EmptyTitle>
            <EmptyDescription>
              You haven't created any projects yet. Get started by creating your
              first project.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent className="flex-row justify-center gap-2">
            <Button>Create Project</Button>
            <Button variant="secondary">Import Project</Button>
          </EmptyContent>
          <Button
            variant="link"
            render={<a href="#" />}
            className="text-muted-foreground"
            size="sm"
            nativeButton={false}
          >
            Learn More <ArrowUpRightIcon />
          </Button>
        </Empty>
      </SubSection>

      <SubSection title="Outline">
        <Empty className="border border-dashed">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <CloudIcon />
            </EmptyMedia>
            <EmptyTitle>Cloud Storage Empty</EmptyTitle>
            <EmptyDescription>
              Upload files to your cloud storage to access them anywhere.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="secondary" size="sm">
              Upload Files
            </Button>
          </EmptyContent>
        </Empty>
      </SubSection>

      <SubSection title="Muted">
        <Empty className="bg-muted/30">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <BellIcon />
            </EmptyMedia>
            <EmptyTitle>No Notifications</EmptyTitle>
            <EmptyDescription className="max-w-xs text-pretty">
              You're all caught up. New notifications will appear here.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="secondary">
              <RefreshCcwIcon data-icon="inline-start" />
              Refresh
            </Button>
          </EmptyContent>
        </Empty>
      </SubSection>

      <SubSection title="With avatar">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="default">
              <Avatar size="lg">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="grayscale"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
            </EmptyMedia>
            <EmptyTitle>User Offline</EmptyTitle>
            <EmptyDescription>
              This user is currently offline. You can leave a message to notify
              them or try again later.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm">Leave Message</Button>
          </EmptyContent>
        </Empty>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/empty")({
  component: EmptyShowcase,
});
