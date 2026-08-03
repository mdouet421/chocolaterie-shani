import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
} from "@/components/ui/combobox";

const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Grape",
  "Lemon",
  "Mango",
  "Orange",
  "Peach",
  "Strawberry",
  "Watermelon",
];

const groupedFoods = [
  { value: "fruits", label: "Fruits", items: ["Apple", "Banana", "Cherry"] },
  { value: "vegetables", label: "Vegetables", items: ["Carrot", "Broccoli", "Spinach"] },
];

function ComboboxShowcase() {
  const [value, setValue] = useState<string | null>(null);
  const [groupValue, setGroupValue] = useState<string | null>(null);
  const [clearValue, setClearValue] = useState<string | null>(null);

  return (
    <ShowcasePage>
      <SubSection title="Default">
        <div className="max-w-xs">
          <Combobox
            value={value}
            onValueChange={setValue}
            items={fruits}
          >
            <ComboboxInput placeholder="Select a fruit..." />
            <ComboboxContent>
              <ComboboxList>
                {(item: string) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
              <ComboboxEmpty>No results found.</ComboboxEmpty>
            </ComboboxContent>
          </Combobox>
        </div>
      </SubSection>

      <SubSection title="With groups">
        <div className="max-w-xs">
          <Combobox
            value={groupValue}
            onValueChange={setGroupValue}
            items={groupedFoods}
          >
            <ComboboxInput placeholder="Select a food..." />
            <ComboboxContent>
              <ComboboxList>
                {(group: typeof groupedFoods[number]) => (
                  <ComboboxGroup key={group.value} items={group.items}>
                    <ComboboxLabel>{group.label}</ComboboxLabel>
                    <ComboboxCollection>
                      {(item: string) => (
                        <ComboboxItem key={item} value={item}>
                          {item}
                        </ComboboxItem>
                      )}
                    </ComboboxCollection>
                  </ComboboxGroup>
                )}
              </ComboboxList>
              <ComboboxEmpty>No results found.</ComboboxEmpty>
            </ComboboxContent>
          </Combobox>
        </div>
      </SubSection>

      <SubSection title="With clear button">
        <div className="max-w-xs">
          <Combobox
            value={clearValue}
            onValueChange={setClearValue}
            items={fruits}
          >
            <ComboboxInput
              placeholder="Select a fruit..."
              showClear
            />
            <ComboboxContent>
              <ComboboxList>
                {(item: string) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
              <ComboboxEmpty>No results found.</ComboboxEmpty>
            </ComboboxContent>
          </Combobox>
        </div>
      </SubSection>

      <SubSection title="Disabled">
        <div className="max-w-xs">
          <Combobox value={null} items={fruits}>
            <ComboboxInput placeholder="Disabled..." disabled />
            <ComboboxContent>
              <ComboboxList>
                {(item: string) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/combobox")({
  component: ComboboxShowcase,
});
