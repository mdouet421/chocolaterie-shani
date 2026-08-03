import { createFileRoute } from "@tanstack/react-router";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function FieldShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="With input">
        <FieldSet className="w-full max-w-xs">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input id="username" type="text" placeholder="Max Leiter" />
              <FieldDescription>Choose a unique username for your account.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <FieldDescription>Must be at least 8 characters long.</FieldDescription>
              <Input id="password" type="password" placeholder="••••••••" />
            </Field>
          </FieldGroup>
        </FieldSet>
      </SubSection>

      <SubSection title="Checkbox">
        <FieldSet className="w-full max-w-xs">
          <FieldLegend variant="label">Show these items on the desktop</FieldLegend>
          <FieldDescription>Select the items you want to show on the desktop.</FieldDescription>
          <Field orientation="horizontal">
            <Checkbox id="finder-pref-hard-disks" noLabel />
            <FieldLabel htmlFor="finder-pref-hard-disks" className="font-normal">
              Hard disks
            </FieldLabel>
          </Field>
        </FieldSet>
      </SubSection>

      <SubSection title="Validation error">
        <Field data-invalid className="max-w-xs">
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" aria-invalid defaultValue="not-an-email" />
          <FieldError>Enter a valid email address.</FieldError>
        </Field>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/field")({
  component: FieldShowcase,
});
