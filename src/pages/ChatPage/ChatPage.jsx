import React, { useEffect } from "react";
import style from "./ChatPage.module.scss";
import { Layout } from "antd";
import ChatPageHeader from "../../components/ChatPageHeader/ChatPageHeader";
import useLoggedInUserDetails from "../../zustand/useLoggedInUserDetails";
import { useAuth0 } from "@auth0/auth0-react";

const { Header, Sider, Content } = Layout;

const ChatPage = () => {
  const { user } = useAuth0();
  const { setDetails, details } = useLoggedInUserDetails();

  useEffect(() => {
    setDetails(user);
  }, [user, setDetails]);

  return (
    <Layout>
      <Header>
        <ChatPageHeader details={details} />
      </Header>
      <Layout>
        <Sider></Sider>
        <Content></Content>
      </Layout>
    </Layout>
  );
};

export default ChatPage;
