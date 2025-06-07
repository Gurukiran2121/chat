import React, { useEffect } from "react";
import style from "./LoginPage.module.scss";
import LoginImage from "../../../public/Login.png";
import { Button, Card, Flex, Typography } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "motion/react";
import { ArrowRightOutlined } from "@ant-design/icons";
import Logo from "../../components/Logo";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={style.loginPageContainer}>
      <Flex
        vertical
        justify="center"
        align="center"
        className={style.loginContent}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 1000,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Flex
            className={style.LoginCard}
            vertical
            justify="center"
            align="center"
          >
            <Logo height={150} width={150} />
            <Typography.Title level={1}>
              Your New Chat Space Awaits
            </Typography.Title>
            <Typography.Title level={3}>
              Let’s get you signed up.
            </Typography.Title>

            <Button
              type="primary"
              size="large"
              onClick={() => loginWithRedirect()}
            >
              Sign Up <ArrowRightOutlined />
            </Button>
          </Flex>
        </motion.div>
      </Flex>
    </div>
  );
};

export default LoginPage;
