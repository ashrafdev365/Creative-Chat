import React, { useState } from "react";
import Head from "next/head";

import "../styles/globals.css";
import "../styles/pages/home/home.css";
import "../styles/pages/forms/form.css";
import "../styles/pages/users/user.css";
import "../styles/pages/chat/chat.css";
import { Model } from "../Components/Model/Model";
import AuthContextProvider from "../Firebase/Context";
import UserDataProvider from '../Firebase/UserContext'

function MyApp({ Component, pageProps }) {
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
      <AuthContextProvider>
      <UserDataProvider>
        <Model setmodel={setmodel} model={model} />
        <Component {...pageProps} setmodel={setmodel} />
        </UserDataProvider>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
