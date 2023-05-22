import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
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
    children: [
      { path: "fi", element: <div>Fi</div> },
      { path: "fo", element: <div>Fo</div> },
      { path: "*", Component: OldRoutes },
    ],
  },
]);

function Root() {
  return (
    <PolarisProvider>
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
    </PolarisProvider>
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
  return <RouterProvider router={router} /> ;
}
