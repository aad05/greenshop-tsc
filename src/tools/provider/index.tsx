import type { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import store from "../../redux";

interface ProviderType {
  children?: React.ReactNode;
}

const ProviderConf: FC<ProviderType> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <ConfigProvider>
            <BrowserRouter>{children}</BrowserRouter>
          </ConfigProvider>
        </QueryClientProvider>
      </Provider>
    </AuthProvider>
  );
};

export default ProviderConf;
