import { Page, Layout, Text, LegacyCard, VerticalStack, Box, HorizontalGrid, AlphaCard, SkeletonDisplayText, Bleed, Divider, SkeletonBodyText, BoxProps } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { ArchiveMinor, DeleteMinor, DuplicateMinor } from "@shopify/polaris-icons";

export default function Fee() {
    const SkeletonLabel = (props: BoxProps) => {
        return (
          <Box
            background="surface-neutral"
            minHeight="1rem"
            maxWidth="5rem"
            borderRadius="base"
            {...props}
          />
        );
      };
      return (
        <Page
          breadcrumbs={[{ content: "Products", url: "/products" }]}
          title="Product"
          secondaryActions={[
            {
              content: "Duplicate",
              icon: DuplicateMinor,
              accessibilityLabel: "Secondary action label",
              onAction: () => alert("Duplicate action"),
            },
            {
              content: "Archive",
              icon: ArchiveMinor,
              accessibilityLabel: "Secondary action label",
              onAction: () => alert("Archive action"),
            },
            {
              content: "Delete",
              icon: DeleteMinor,
              destructive: true,
              accessibilityLabel: "Secondary action label",
              onAction: () => alert("Delete action"),
            },
          ]}
          pagination={{
            hasPrevious: true,
            hasNext: true,
          }}
        >
          <HorizontalGrid columns={{ xs: 1, md: "2fr 1fr" }} gap="4">
            <VerticalStack gap="4">
              <AlphaCard roundedAbove="sm">
                <VerticalStack gap="4">
                  <SkeletonLabel />
                  <Box border="divider" borderRadius="base" minHeight="2rem" />
                  <SkeletonLabel maxWidth="8rem" />
                  <Box border="divider" borderRadius="base" minHeight="20rem" />
                </VerticalStack>
              </AlphaCard>
              <AlphaCard roundedAbove="sm">
                <VerticalStack gap="4">
                  <SkeletonDisplayText size="small" />
                  <HorizontalGrid columns={{ xs: 1, md: 2 }}>
                    <Box border="divider" borderRadius="base" minHeight="10rem" />
                    <Box border="divider" borderRadius="base" minHeight="10rem" />
                  </HorizontalGrid>
                </VerticalStack>
              </AlphaCard>
            </VerticalStack>
            <VerticalStack gap={{ xs: "4", md: "2" }}>
              <AlphaCard roundedAbove="sm">
                <VerticalStack gap="4">
                  <SkeletonDisplayText size="small" />
                  <Box border="divider" borderRadius="base" minHeight="2rem" />
                  <Box>
                    <Bleed marginInline={{ xs: 4, sm: 5 }}>
                      <Divider />
                    </Bleed>
                  </Box>
                  <SkeletonLabel />
                  <Divider />
                  <SkeletonBodyText />
                </VerticalStack>
              </AlphaCard>
              <AlphaCard roundedAbove="sm">
                <VerticalStack gap="4">
                  <SkeletonLabel />
                  <Box border="divider" borderRadius="base" minHeight="2rem" />
                  <SkeletonLabel maxWidth="4rem" />
                  <Box border="divider" borderRadius="base" minHeight="2rem" />
                  <SkeletonLabel />
                  <SkeletonBodyText />
                </VerticalStack>
              </AlphaCard>
            </VerticalStack>
          </HorizontalGrid>
        </Page>
      );}
