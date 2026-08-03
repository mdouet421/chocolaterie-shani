import { createFileRoute } from "@tanstack/react-router";

import {
  ShowcasePage,
  SubSection,
} from "@/features/design-system/showcase-page";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

function SelectShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default">
        <Select>
          <SelectTrigger className="w-64">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Apple">Apple</SelectItem>
              <SelectItem value="Banana">Banana</SelectItem>
              <SelectItem value="Cherry">Cherry</SelectItem>
              <SelectItem value="Grape">Grape</SelectItem>
              <SelectItem value="Orange">Orange</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </SubSection>

      <SubSection title="With Groups">
        <Select>
          <SelectTrigger className="w-64">
            <SelectValue placeholder="Select a food" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="Apple">Apple</SelectItem>
              <SelectItem value="Banana">Banana</SelectItem>
              <SelectItem value="Cherry">Cherry</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Vegetables</SelectLabel>
              <SelectItem value="Carrot">Carrot</SelectItem>
              <SelectItem value="Broccoli">Broccoli</SelectItem>
              <SelectItem value="Spinach">Spinach</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </SubSection>

      <SubSection title="Disabled Item">
        <Select>
          <SelectTrigger className="w-64">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Available">Available</SelectItem>
              <SelectItem value="Unavailable" disabled>
                Unavailable
              </SelectItem>
              <SelectItem value="Also available">Also available</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </SubSection>

      <SubSection title="Sizes">
        <div className="flex flex-col gap-3">
          <Select>
            <SelectTrigger className="w-64" size="sm">
              <SelectValue placeholder="Small" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Option A">Option A</SelectItem>
                <SelectItem value="Option B">Option B</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-64" size="default">
              <SelectValue placeholder="Default" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Option A">Option A</SelectItem>
                <SelectItem value="Option B">Option B</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-64" size="lg">
              <SelectValue placeholder="Large" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Option A">Option A</SelectItem>
                <SelectItem value="Option B">Option B</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/select")({
  component: SelectShowcase,
});
