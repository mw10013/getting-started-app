import { useState } from "react";
import { Page, Layout, LegacyCard, List } from "@shopify/polaris";
import { TitleBar, Toast } from "@shopify/app-bridge-react";
import { stringify } from "querystring";
import { ProductsCard } from "../components";
import { useAuthenticatedFetch } from "../hooks";

export default function Fee() {
  const fetch = useAuthenticatedFetch();
  const emptyToastProps = { content: "" };
  const [toastProps, setToastProps] = useState<{
    content: string;
    error?: boolean;
  }>(emptyToastProps);

  const toastMarkup = toastProps.content && (
    <Toast {...toastProps} onDismiss={() => setToastProps(emptyToastProps)} />
  );

  const handleGenerate = async () => {
    const response = await fetch("/api/products/count");
    if (response.ok) {
      setToastProps({ content: await response.text() });
    } else {
      console.log({ response });
      setToastProps({ content: "Generate error", error: true });
    }

    // setIsLoading(true);
    // const response = await fetch("/api/products/create");

    // if (response.ok) {
    //   await refetchProductCount();
    //   setToastProps({ content: "5 products created!", error: false });
    // } else {
    //   setIsLoading(false);
    //   setToastProps({
    //     content: "There was an error creating products",
    //     error: true,
    //   });
    // }
  };

  return (
    <Page>
      <TitleBar
        title="Fee"
        primaryAction={{
          content: "Click Me",
          onAction: () => setToastProps({ content: "Clicked!" }),
        }}
      />
      {toastMarkup}
      <Layout sectioned>
        <LegacyCard
          title="Fee"
          secondaryFooterActions={[{ content: "Edit shipment" }]}
          primaryFooterAction={{
            content: "Generate",
            onAction: handleGenerate,
          }}
        >
          <LegacyCard.Section title="Items">
            <List>
              <List.Item>1 × Oasis Glass, 4-Pack</List.Item>
              <List.Item>1 × Anubis Cup, 2-Pack</List.Item>
            </List>
          </LegacyCard.Section>
        </LegacyCard>
        <ProductsCard />
      </Layout>
    </Page>
  );
}
