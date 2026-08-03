import { createFileRoute } from "@tanstack/react-router";

import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxGroup } from "@/components/ui/checkbox-group";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function CheckboxGroupShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default group">
        <CheckboxGroup defaultValue={["apple", "banana"]}>
          <Checkbox name="apple" value="apple">Apple</Checkbox>
          <Checkbox name="banana" value="banana">Banana</Checkbox>
          <Checkbox name="cherry" value="cherry">Cherry</Checkbox>
          <Checkbox name="dragonfruit" value="dragonfruit">Dragonfruit</Checkbox>
        </CheckboxGroup>
      </SubSection>

      <SubSection title="With disabled items">
        <CheckboxGroup defaultValue={["read"]}>
          <Checkbox name="read" value="read">Read</Checkbox>
          <Checkbox name="write" value="write">Write</Checkbox>
          <Checkbox name="admin" value="admin" disabled>Admin (restricted)</Checkbox>
        </CheckboxGroup>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute(
  "/design-system/components/checkbox-group",
)({
  component: CheckboxGroupShowcase,
});
