import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Ashraf from "../public/ashraf.svg";
import { useAuth } from "../Firebase/Context";
import { useRouter } from "next/router";

export default function Home({ setmodel }) {
  const { logout, currentUser } = useAuth();
  const ruoter = useRouter();
  useEffect(() => {
    currentUser ? ruoter.push(`/user`) : ruoter.push(`/`);
  }, []);

  return (
    <>
      <Head>
        <title>Welcome to Creative Chat</title>
      </Head>
      <header className="home_header">
        <Image src={Ashraf} alt="creative chat" />
        <h1>
          Hi, I’m Ashraf
          <br /> Chowury
        </h1>
        <h2>Welcome To My Chat App</h2>

        <div>
          {!currentUser ? (
            <>
              <button className="signup_btn" onClick={() => setmodel(true)}>
                Create Account
              </button>
              <button onClick={() => setmodel(true)}>Log In</button>
            </>
          ) : (
            <button className="signup_btn" onClick={() => ruoter.push("/user")}>
              Continue to Chat
            </button>
          )}
        </div>
      </header>
    </>
  );
}
