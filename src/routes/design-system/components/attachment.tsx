import { createFileRoute } from "@tanstack/react-router";
import { FileTextIcon, ImageIcon, XIcon } from "lucide-react";

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function AttachmentShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="File with remove action">
        <Attachment className="max-w-xs">
          <AttachmentMedia variant="icon">
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>design-brief.pdf</AttachmentTitle>
            <AttachmentDescription>248 KB · PDF</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Remove attachment">
              <XIcon />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
      </SubSection>

      <SubSection title="States">
        <div className="flex flex-col gap-3">
          <Attachment state="uploading" className="max-w-xs">
            <AttachmentMedia variant="icon">
              <FileTextIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>report.csv</AttachmentTitle>
              <AttachmentDescription>Uploading…</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
          <Attachment state="error" className="max-w-xs">
            <AttachmentMedia variant="icon">
              <FileTextIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>archive.zip</AttachmentTitle>
              <AttachmentDescription>Upload failed</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </div>
      </SubSection>

      <SubSection title="Image preview (vertical)">
        <AttachmentGroup>
          <Attachment orientation="vertical">
            <AttachmentMedia variant="image">
              <img src="https://picsum.photos/seed/moodboard/200" alt="Moodboard" />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>moodboard.png</AttachmentTitle>
              <AttachmentDescription>1.2 MB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
          <Attachment orientation="vertical">
            <AttachmentMedia variant="icon">
              <ImageIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>hero.jpg</AttachmentTitle>
              <AttachmentDescription>860 KB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </AttachmentGroup>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/attachment")({
  component: AttachmentShowcase,
});
