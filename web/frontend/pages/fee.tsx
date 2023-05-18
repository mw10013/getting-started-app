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
        title="Fee"
        primaryAction={{
          content: "Click Me",
          onAction: () => console.log("Primary action"),
        }}
      />
      <Layout sectioned>
        <LegacyCard title="Online store dashboard" sectioned>
          <p>View a summary of your online store’s performance.</p>
        </LegacyCard>
        <LegacyCard title="Online store dashboard 2" sectioned>
          <p>View a summary of your online store’s performance.</p>
        </LegacyCard>
      </Layout>
    </Page>
  );
}
