import { createFileRoute } from "@tanstack/react-router";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

function SwitchShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Basic">
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </SubSection>

      <SubSection title="With description">
        <Field orientation="horizontal" className="max-w-sm">
          <FieldContent>
            <FieldLabel htmlFor="switch-focus-mode">Share across devices</FieldLabel>
            <FieldDescription>
              Focus is shared across devices, and turns off when you leave the app.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-focus-mode" />
        </Field>
      </SubSection>

      <SubSection title="Choice cards">
        <FieldGroup className="w-full max-w-sm">
          <FieldLabel htmlFor="switch-share">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Share across devices</FieldTitle>
                <FieldDescription>
                  Focus is shared across devices, and turns off when you leave the app.
                </FieldDescription>
              </FieldContent>
              <Switch id="switch-share" />
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="switch-notifications">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Enable notifications</FieldTitle>
                <FieldDescription>
                  Receive notifications when focus mode is enabled or disabled.
                </FieldDescription>
              </FieldContent>
              <Switch id="switch-notifications" defaultChecked />
            </Field>
          </FieldLabel>
        </FieldGroup>
      </SubSection>

      <SubSection title="Sizes">
        <FieldGroup className="w-full max-w-[10rem]">
          <Field orientation="horizontal">
            <Switch id="switch-size-sm" size="sm" />
            <FieldLabel htmlFor="switch-size-sm">Small</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Switch id="switch-size-default" size="default" />
            <FieldLabel htmlFor="switch-size-default">Default</FieldLabel>
          </Field>
        </FieldGroup>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/switch")({
  component: SwitchShowcase,
});
