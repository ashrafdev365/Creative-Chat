import { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

import "../styles/globals.css";
import "../styles/pages/home/home.css";
import "../styles/pages/forms/form.css";
import "../styles/pages/users/user.css";
import "../styles/pages/chat/chat.css";
import { Model } from "../Components/Model/Model";
import AuthContextProvider from "../Firebase/Context";
import UserDataProvider from "../Firebase/UserContext";

function MyApp({ Component, pageProps, router }) {
  const [model, setmodel] = useState(false);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Head>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
              transition: { duration: 0.8, delay: 0.8 },
            },
            exit: {
              x: "-100vw",
              transition: { ease: "easeInOut" },
            },
          }}
        >
          <AuthContextProvider>
            <UserDataProvider>
              <Model setmodel={setmodel} model={model} />
              <Component {...pageProps} setmodel={setmodel} />
            </UserDataProvider>
          </AuthContextProvider>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
