import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { NavigationMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";
import type { Route } from "./Routes";
import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function Root() {
  const pages = import.meta.glob<Route>(
    "./pages/**/!(*.test.[jt]sx)*.([jt]sx)",
    {
      eager: true,
    }
  );
  return (
    <AppBridgeProvider>
      <QueryProvider>
        <NavigationMenu
          navigationLinks={[
            {
              label: "Page name",
              destination: "/pagename",
            },
            {
              label: "Sandbox",
              destination: "/sandbox",
            },
            {
              label: "Fee",
              destination: "/fee",
            },
          ]}
        />
        <Routes pages={pages} />
      </QueryProvider>
    </AppBridgeProvider>
  );
}

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  // const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");
  const pages = import.meta.glob<Route>(
    "./pages/**/!(*.test.[jt]sx)*.([jt]sx)",
    {
      eager: true,
    }
  );

  return (
    <PolarisProvider>
      {/* <BrowserRouter> */}
      <RouterProvider router={router} />
        {/* <AppBridgeProvider>
          <QueryProvider>
            <NavigationMenu
              navigationLinks={[
                {
                  label: "Page name",
                  destination: "/pagename",
                },
                {
                  label: "Sandbox",
                  destination: "/sandbox",
                },
                {
                  label: "Fee",
                  destination: "/fee",
                },
              ]}
            />
            <Routes pages={pages} />
          </QueryProvider>
        </AppBridgeProvider> */}
        {/* </BrowserRouter> */}
    </PolarisProvider>
  );
}
