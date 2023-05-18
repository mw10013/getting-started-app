import { useState } from "react";
import { Page, Layout, LegacyCard, List } from "@shopify/polaris";
import { TitleBar, Toast } from "@shopify/app-bridge-react";
import { stringify } from "querystring";

export default function Fee() {
  const emptyToastProps = { content: "" };
  const [toastProps, setToastProps] = useState<{
    content: string;
    error?: boolean;
  }>(emptyToastProps);

  const toastMarkup = toastProps.content && (
    <Toast {...toastProps} onDismiss={() => setToastProps(emptyToastProps)} />
  );

  return (
    <Page>
      <TitleBar
        title="Fee"
        primaryAction={{
          content: "Click Me",
          onAction: () => console.log("Primary action"),
        }}
      />
      {toastMarkup}
      <Layout sectioned>
        <LegacyCard
          title="Fee"
          secondaryFooterActions={[{ content: "Edit shipment" }]}
          primaryFooterAction={{
            content: "Generate",
            onAction: () => setToastProps({ content: "Yowsa!" }),
          }}
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
