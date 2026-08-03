import { createFileRoute } from "@tanstack/react-router";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function MessageShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Incoming with avatar and header">
        <MessageGroup className="max-w-md">
          <Message align="start">
            <MessageAvatar>
              <Avatar size="sm">
                <AvatarFallback variant="initials" name="Alice Martin" />
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <MessageHeader>Alice Martin</MessageHeader>
              <Bubble align="start" variant="muted">
                <BubbleContent>
                  Can you take a look at the latest prototype when you get a chance?
                </BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
        </MessageGroup>
      </SubSection>

      <SubSection title="Outgoing with footer">
        <MessageGroup className="max-w-md">
          <Message align="end">
            <MessageContent>
              <Bubble align="end" variant="default">
                <BubbleContent>On it — I&apos;ll send feedback shortly.</BubbleContent>
              </Bubble>
              <MessageFooter>Delivered · 2:14 PM</MessageFooter>
            </MessageContent>
          </Message>
        </MessageGroup>
      </SubSection>

      <SubSection title="Conversation">
        <MessageGroup className="max-w-md">
          <Message align="start">
            <MessageAvatar>
              <Avatar size="sm">
                <AvatarFallback variant="initials" name="Bob Smith" />
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble align="start" variant="muted">
                <BubbleContent>Standup in 5 minutes?</BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
          <Message align="end">
            <MessageContent>
              <Bubble align="end" variant="default">
                <BubbleContent>Joining now.</BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
        </MessageGroup>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/message")({
  component: MessageShowcase,
});
