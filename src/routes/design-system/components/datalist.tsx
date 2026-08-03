import { createFileRoute } from "@tanstack/react-router";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import {
  DataList,
  DataListCell,
  DataListEmptyState,
  DataListLoadingState,
  DataListRow,
  DataListText,
  DataListTextHeader,
} from "@/components/ui/datalist";

function DatalistShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default">
        <DataList>
          <DataListRow>
            <DataListCell>
              <DataListTextHeader>Name</DataListTextHeader>
              <DataListText>John Doe</DataListText>
            </DataListCell>
            <DataListCell>
              <DataListTextHeader>Email</DataListTextHeader>
              <DataListText>john@example.com</DataListText>
            </DataListCell>
            <DataListCell>
              <DataListTextHeader>Role</DataListTextHeader>
              <DataListText>Admin</DataListText>
            </DataListCell>
          </DataListRow>
          <DataListRow>
            <DataListCell>
              <DataListTextHeader>Name</DataListTextHeader>
              <DataListText>Jane Smith</DataListText>
            </DataListCell>
            <DataListCell>
              <DataListTextHeader>Email</DataListTextHeader>
              <DataListText>jane@example.com</DataListText>
            </DataListCell>
            <DataListCell>
              <DataListTextHeader>Role</DataListTextHeader>
              <DataListText>Editor</DataListText>
            </DataListCell>
          </DataListRow>
          <DataListRow>
            <DataListCell>
              <DataListTextHeader>Name</DataListTextHeader>
              <DataListText>Bob Wilson</DataListText>
            </DataListCell>
            <DataListCell>
              <DataListTextHeader>Email</DataListTextHeader>
              <DataListText>bob@example.com</DataListText>
            </DataListCell>
            <DataListCell>
              <DataListTextHeader>Role</DataListTextHeader>
              <DataListText>Viewer</DataListText>
            </DataListCell>
          </DataListRow>
        </DataList>
      </SubSection>

      <SubSection title="With hover">
        <DataList>
          <DataListRow withHover>
            <DataListCell>
              <DataListTextHeader>Product</DataListTextHeader>
              <DataListText>Widget A</DataListText>
            </DataListCell>
            <DataListCell>
              <DataListTextHeader>Price</DataListTextHeader>
              <DataListText>$29.99</DataListText>
            </DataListCell>
          </DataListRow>
          <DataListRow withHover>
            <DataListCell>
              <DataListTextHeader>Product</DataListTextHeader>
              <DataListText>Widget B</DataListText>
            </DataListCell>
            <DataListCell>
              <DataListTextHeader>Price</DataListTextHeader>
              <DataListText>$49.99</DataListText>
            </DataListCell>
          </DataListRow>
        </DataList>
      </SubSection>

      <SubSection title="Loading state">
        <DataList>
          <DataListLoadingState />
        </DataList>
      </SubSection>

      <SubSection title="Empty state">
        <DataList>
          <DataListEmptyState />
        </DataList>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/datalist")({
  component: DatalistShowcase,
});
