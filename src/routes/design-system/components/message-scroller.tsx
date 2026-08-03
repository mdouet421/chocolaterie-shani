import { createFileRoute } from "@tanstack/react-router";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Card } from "@/components/ui/card";
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/ui/message";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

const CONVERSATION = [
  { id: 1, from: "start", name: "Alice Martin", text: "Morning! Ready to kick off the sprint?" },
  { id: 2, from: "end", name: "You", text: "Ready. Pulling up the board now." },
  { id: 3, from: "start", name: "Alice Martin", text: "Great, I added three new tickets overnight." },
  { id: 4, from: "end", name: "You", text: "Saw them — the onboarding one looks big." },
  { id: 5, from: "start", name: "Alice Martin", text: "Yeah, we should split it into smaller tasks." },
  { id: 6, from: "end", name: "You", text: "Agreed. I'll draft the breakdown." },
  { id: 7, from: "start", name: "Alice Martin", text: "Perfect. Anything blocking you right now?" },
  { id: 8, from: "end", name: "You", text: "Nope, all clear. Let's ship it." },
] as const;

function MessageScrollerShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Scrollable conversation">
        <Card className="h-96 w-full max-w-md overflow-hidden p-0">
          <MessageScrollerProvider>
            <MessageScroller>
              <MessageScrollerViewport>
                <MessageScrollerContent className="gap-3 p-4">
                  {CONVERSATION.map((item) => (
                    <MessageScrollerItem key={item.id}>
                      <Message align={item.from}>
                        {item.from === "start" ? (
                          <MessageAvatar>
                            <Avatar size="sm">
                              <AvatarFallback variant="initials" name={item.name} />
                            </Avatar>
                          </MessageAvatar>
                        ) : null}
                        <MessageContent>
                          <Bubble
                            align={item.from}
                            variant={item.from === "start" ? "muted" : "default"}
                          >
                            <BubbleContent>{item.text}</BubbleContent>
                          </Bubble>
                        </MessageContent>
                      </Message>
                    </MessageScrollerItem>
                  ))}
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton direction="end" />
            </MessageScroller>
          </MessageScrollerProvider>
        </Card>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/message-scroller")({
  component: MessageScrollerShowcase,
});
