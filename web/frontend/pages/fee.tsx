import {
  Page,
  Layout,
  Text,
  LegacyCard,
  VerticalStack,
  Box,
  HorizontalGrid,
  AlphaCard,
  SkeletonDisplayText,
  Bleed,
  Divider,
  SkeletonBodyText,
  BoxProps,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import {
  ArchiveMinor,
  DeleteMinor,
  DuplicateMinor,
} from "@shopify/polaris-icons";

export default function Fee() {
  return (
    <Page>
      <TitleBar
        title="TitleBar"
        primaryAction={{
          content: "Click Me",
          onAction: () => console.log("Primary action"),
        }}
      />
      <div>W'sup</div>
    </Page>
  );
}
