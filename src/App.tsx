import {RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import router from "./router";
import {AppContextProvider} from "./providers";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 24 * 60 * 60 * 1000,
      staleTime: 1,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    }
  }
})

export function App() {
  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <div className="container">
          <RouterProvider router={router}/>
        </div>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </AppContextProvider>
  );
}
