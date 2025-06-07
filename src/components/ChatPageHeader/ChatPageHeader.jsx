import { Avatar, Dropdown, Flex, Menu, Typography } from "antd";
import React from "react";
import Logo from "../Logo";
import style from "./ChatPageHeader.module.scss";
import { useAuth0 } from "@auth0/auth0-react";

const ChatPageHeader = ({ details }) => {
  const { logout } = useAuth0();

  const items = [
    {
      label: (
        <Flex align="center" gap={24}>
          <Flex vertical>
            <Typography.Text>{details.name}</Typography.Text>
            <span style={{ fontSize: "12px" }}>Profile</span>
          </Flex>
          <Avatar src={details.picture} />
        </Flex>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Flex
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logout
        </Flex>
      ),
      key: "2",
    },
  ];

  return (
    <Flex
      align="center"
      justify="space-between"
      className={style.headerContainer}
    >
      <Logo />
      <Dropdown trigger={["click"]} menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Avatar src={details.picture} size={"large"} />
        </a>
      </Dropdown>
    </Flex>
  );
};

export default ChatPageHeader;
