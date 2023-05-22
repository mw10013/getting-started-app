import {
  BrowserRouter,
  Outlet,
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // children: [{ path: "*", Component: Root }],
    children: [
      { path: "fi", element: <div>Fi</div>},
      { path: "fo", element: <div>Fo</div>},
      { path: "*", Component: OldRoutes }],
  },
]);

function Root() {
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
            {
              label: "Fi",
              destination: "/fi",
            },
            {
              label: "Fo",
              destination: "/fo",
            },
          ]}
        />
        <div>Yowsa</div>
        <Outlet />
      </QueryProvider>
    </AppBridgeProvider>
  );
}

function OldRoutes() {
  const pages = import.meta.glob<Route>(
    "./pages/**/!(*.test.[jt]sx)*.([jt]sx)",
    {
      eager: true,
    }
  );
  return <Routes pages={pages} />;
}

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  // const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");
  // const pages = import.meta.glob<Route>(
  //   "./pages/**/!(*.test.[jt]sx)*.([jt]sx)",
  //   {
  //     eager: true,
  //   }
  // );

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
