import React from "react";
import { Main } from "./components/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StorageProvider } from "./components/StorageProvider";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StorageProvider>
        <Main />
      </StorageProvider>
    </QueryClientProvider>
  );
}
