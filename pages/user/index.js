import { useState, useEffect } from "react";
import Image from "next/image";
import { useAuth } from "../../Firebase/Context";
import Link from "next/link";
import { userDatas } from "../../Firebase/UserContext";
import { useRouter } from "next/router";

const user = () => {
  const { currentUser, logout } = useAuth();
  const { data } = userDatas();
  const router = useRouter();
  // useEffect(() => {
  //   if (currentUser) {
  //     return "";
  //   } else {
  //     return router.push("/");
  //   }
  // }, []);
  console.log(currentUser);
  const handleLogout = () => {
    logout();
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <>
      <nav className="user_nav">
        <h1>Chat</h1>
        <button onClick={handleLogout}>Log Out</button>
      </nav>
      <input type="search" placeholder="Search" className="search" />

      <section className="users_section">
        {data
          .filter((value) => {
            return !currentUser
              ? router.push("/")
              : currentUser.displayName == "ashraf chy"
              ? value.id != currentUser.email
              : value.id == "ashrafchy338@gmail.com";
          })
          .map((val) => {
            return (
              <Link
                key={val.id}
                href={{
                  pathname: `user/${
                    val.userData.name == "ashraf chy"
                      ? currentUser.displayName
                      : val.userData.name
                  }`,
                }}
              >
                <div className="user_box">
                  <Image
                    src={val.userData.photo}
                    alt="creative chat"
                    className="user_img"
                    width="50px"
                    height="50px"
                  />
                  <div>
                    <h2>{val.userData.name}</h2>
                    <p>Me : this is the new message</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </section>
    </>
  );
};

export default user;
