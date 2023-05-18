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
  List,
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
        <LegacyCard
          title="Fee"
          secondaryFooterActions={[{ content: "Edit shipment" }]}
          primaryFooterAction={{ content: "Generate" }}
        >
          <LegacyCard.Section title="Items">
            <List>
              <List.Item>1 × Oasis Glass, 4-Pack</List.Item>
              <List.Item>1 × Anubis Cup, 2-Pack</List.Item>
            </List>
          </LegacyCard.Section>
        </LegacyCard>
      </Layout>
    </Page>
  );
}
