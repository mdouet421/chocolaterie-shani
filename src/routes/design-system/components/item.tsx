import { createFileRoute } from "@tanstack/react-router";
import {
  ChevronRightIcon,
  ExternalLinkIcon,
  InboxIcon,
  PlusIcon,
} from "lucide-react";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

const people = [
  {
    username: "shadcn",
    avatar: "https://github.com/shadcn.png",
    email: "shadcn@vercel.com",
  },
  {
    username: "maxleiter",
    avatar: "https://github.com/maxleiter.png",
    email: "maxleiter@vercel.com",
  },
  {
    username: "evilrabbit",
    avatar: "https://github.com/evilrabbit.png",
    email: "evilrabbit@vercel.com",
  },
];

function ItemShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Variants">
        <div className="flex w-full max-w-md flex-col gap-6">
          <Item>
            <ItemMedia variant="icon">
              <InboxIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Default Variant</ItemTitle>
              <ItemDescription>
                Transparent background with no border.
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline">
            <ItemMedia variant="icon">
              <InboxIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Outline Variant</ItemTitle>
              <ItemDescription>
                Outlined style with a visible border.
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="muted">
            <ItemMedia variant="icon">
              <InboxIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Muted Variant</ItemTitle>
              <ItemDescription>
                Muted background for secondary content.
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </SubSection>

      <SubSection title="With avatar and actions">
        <ItemGroup className="max-w-sm">
          {people.map((person) => (
            <Item key={person.username} variant="outline">
              <ItemMedia>
                <Avatar>
                  <AvatarImage src={person.avatar} className="grayscale" />
                  <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent className="gap-1">
                <ItemTitle>{person.username}</ItemTitle>
                <ItemDescription>{person.email}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <PlusIcon />
                </Button>
              </ItemActions>
            </Item>
          ))}
        </ItemGroup>
      </SubSection>

      <SubSection title="As links">
        <div className="flex w-full max-w-md flex-col gap-4">
          <Item render={<a href="#" />}>
            <ItemContent>
              <ItemTitle>Visit our documentation</ItemTitle>
              <ItemDescription>
                Learn how to get started with our components.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <ChevronRightIcon className="size-4" />
            </ItemActions>
          </Item>
          <Item
            variant="outline"
            render={<a href="#" target="_blank" rel="noopener noreferrer" />}
          >
            <ItemContent>
              <ItemTitle>External resource</ItemTitle>
              <ItemDescription>
                Opens in a new tab with security attributes.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <ExternalLinkIcon className="size-4" />
            </ItemActions>
          </Item>
        </div>
      </SubSection>

      <SubSection title="Sizes">
        <div className="flex w-full max-w-md flex-col gap-6">
          <Item variant="outline">
            <ItemMedia variant="icon">
              <InboxIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Default Size</ItemTitle>
              <ItemDescription>
                The standard size for most use cases.
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline" size="sm">
            <ItemMedia variant="icon">
              <InboxIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Small Size</ItemTitle>
              <ItemDescription>A compact size for dense layouts.</ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline" size="xs">
            <ItemMedia variant="icon">
              <InboxIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Extra Small Size</ItemTitle>
              <ItemDescription>The most compact size available.</ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/item")({
  component: ItemShowcase,
});
