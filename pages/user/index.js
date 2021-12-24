import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useAuth } from "../../Firebase/Context";
import Link from "next/link";
import { userDatas } from "../../Firebase/UserContext";
import { useRouter } from "next/router";

const user = () => {
  const { currentUser } = useAuth();
  const { data } = userDatas();
  const ruoter = useRouter();
  return (
    <>
      <nav className="user_nav">
        <h1>Chat</h1>
        <img src={currentUser.photoURL} alt="crea" width="55px" height="55px" />
      </nav>
      <input type="search" placeholder="Search" className="search" />

      <section className="users_section">
        {data
          .filter((value) => {
            return currentUser.displayName == "ashraf chy"
              ? value.id != currentUser.email
              : value.id == "ashrafchy338@gmail.com";
          })
          .map((val) => {
            return (
              <Link
                key={val.id}
                href={{ pathname: `user/${val.userData.name}` }}
              >
                <div className="user_box">
                  <img
                    src={val.userData.photo}
                    alt="creative chat"
                    className="user_img"
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
