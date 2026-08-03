import { Mail, Search, Eye } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import {
  ShowcasePage,
  SubSection,
} from "@/features/design-system/showcase-page";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupButton,
} from "@/components/ui/input-group";

function InputGroupShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="With Prefix Text">
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="example.com" />
        </InputGroup>
      </SubSection>

      <SubSection title="With Suffix Text">
        <InputGroup>
          <InputGroupInput placeholder="Username" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>@domain.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </SubSection>

      <SubSection title="With Prefix and Suffix Text">
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="0.00" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </SubSection>

      <SubSection title="With Icon Addons">
        <div className="flex flex-col gap-3">
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <Search />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search..." />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <Mail />
            </InputGroupAddon>
            <InputGroupInput placeholder="Email address" />
          </InputGroup>
        </div>
      </SubSection>

      <SubSection title="With Button Addon">
        <InputGroup>
          <InputGroupInput placeholder="Password" type="password" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton>
              <Eye />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </SubSection>

      <SubSection title="Sizes">
        <div className="flex flex-col gap-3">
          <InputGroup size="sm">
            <InputGroupAddon align="inline-start">
              <InputGroupText>sm</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="Small input" />
          </InputGroup>
          <InputGroup size="default">
            <InputGroupAddon align="inline-start">
              <InputGroupText>md</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="Default input" />
          </InputGroup>
          <InputGroup size="lg">
            <InputGroupAddon align="inline-start">
              <InputGroupText>lg</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="Large input" />
          </InputGroup>
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute(
  "/design-system/components/input-group",
)({
  component: InputGroupShowcase,
});
