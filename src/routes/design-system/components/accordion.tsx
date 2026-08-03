import { createFileRoute } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

const items = [
  {
    value: "shipping",
    trigger: "What are your shipping options?",
    content:
      "We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on international orders.",
  },
  {
    value: "returns",
    trigger: "What is your return policy?",
    content:
      "Returns accepted within 30 days. Items must be unused and in original packaging. Refunds processed within 5-7 business days.",
  },
  {
    value: "support",
    trigger: "How can I contact customer support?",
    content:
      "Reach us via email, live chat, or phone. We respond within 24 hours during business days.",
  },
];

const settingsItems = [
  {
    value: "notifications",
    trigger: "Notification Settings",
    content:
      "Manage how you receive notifications. You can enable email alerts for updates or push notifications for mobile devices.",
  },
  {
    value: "privacy",
    trigger: "Privacy & Security",
    content:
      "Control your privacy settings and security preferences. Enable two-factor authentication, manage connected devices, and review active sessions.",
  },
  {
    value: "billing",
    trigger: "Billing & Subscription",
    content:
      "View your current plan, payment history, and upcoming invoices. Update your payment method or change your subscription tier.",
  },
];

function AccordionShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default">
        <Accordion defaultValue={["shipping"]} className="max-w-lg">
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SubSection>

      <SubSection title="Multiple">
        <Accordion multiple className="max-w-lg" defaultValue={["notifications"]}>
          {settingsItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SubSection>

      <SubSection title="Disabled item">
        <Accordion className="max-w-lg">
          <AccordionItem value="item-1">
            <AccordionTrigger>Can I access my account history?</AccordionTrigger>
            <AccordionContent>
              Yes, you can view your complete account history including all
              transactions, plan changes, and support tickets in the Account
              History section of your dashboard.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" disabled>
            <AccordionTrigger>Premium feature information</AccordionTrigger>
            <AccordionContent>
              This section contains information about premium features. Upgrade
              your plan to access this content.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do I update my email address?</AccordionTrigger>
            <AccordionContent>
              You can update your email address in your account settings. You'll
              receive a verification email at your new address to confirm the
              change.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SubSection>

      <SubSection title="Borders">
        <Accordion className="max-w-lg rounded-lg border" defaultValue={["shipping"]}>
          {items.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b px-4 last:border-b-0"
            >
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/accordion")({
  component: AccordionShowcase,
});
