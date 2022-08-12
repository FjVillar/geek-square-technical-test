import { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Categories } from "../Categories";

const queryClient = new QueryClient();

const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <Categories />
  </QueryClientProvider>
);

export default App;
