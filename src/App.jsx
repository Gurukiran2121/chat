import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import Router from "./components/Router";
import Logo from "./components/Logo";
import { Flex, Typography } from "antd";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Flex vertical align="center" justify="center" className="main-loader">
        <Logo height={100} width={100} />
        <Typography.Title level={3}>Loading...</Typography.Title>
      </Flex>
    );
  }

  return (
    <div className="noto-sans-app h-100vh">
      <Router />
    </div>
  );
}
export default App;
