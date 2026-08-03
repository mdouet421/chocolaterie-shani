import { createFileRoute } from "@tanstack/react-router";

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function AvatarShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="With image">
        <div className="flex items-center gap-3">
          <Avatar size="sm">
            <AvatarImage src="https://i.pravatar.cc/64?u=alice" alt="Alice" />
            <AvatarFallback variant="initials" name="Alice Martin" />
          </Avatar>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/64?u=bob" alt="Bob" />
            <AvatarFallback variant="initials" name="Bob Smith" />
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://i.pravatar.cc/64?u=carol" alt="Carol" />
            <AvatarFallback variant="initials" name="Carol Jones" />
          </Avatar>
        </div>
      </SubSection>

      <SubSection title="Initials fallback">
        <div className="flex items-center gap-3">
          <Avatar size="sm">
            <AvatarFallback variant="initials" name="Alice Martin" />
          </Avatar>
          <Avatar>
            <AvatarFallback variant="initials" name="Bob Smith" />
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback variant="initials" name="Carol Jones" />
          </Avatar>
        </div>
      </SubSection>

      <SubSection title="Boring avatar fallback">
        <div className="flex items-center gap-3">
          <Avatar size="sm">
            <AvatarFallback variant="boring" name="Alice Martin" />
          </Avatar>
          <Avatar>
            <AvatarFallback variant="boring" name="Bob Smith" />
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback variant="boring" name="Carol Jones" />
          </Avatar>
        </div>
      </SubSection>

      <SubSection title="Group">
        <AvatarGroup>
          <Avatar>
            <AvatarFallback variant="initials" name="Alice Martin" />
          </Avatar>
          <Avatar>
            <AvatarFallback variant="initials" name="Bob Smith" />
          </Avatar>
          <Avatar>
            <AvatarFallback variant="initials" name="Carol Jones" />
          </Avatar>
          <AvatarGroupCount>+3</AvatarGroupCount>
        </AvatarGroup>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/avatar")({
  component: AvatarShowcase,
});
