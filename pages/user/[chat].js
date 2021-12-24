import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { db } from "../../Firebase/firebase";
import {
  onSnapshot,
  doc,
  collection,
  query,
  addDoc,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import { userDatas } from "../../Firebase/UserContext";
import { useAuth } from "../../Firebase/Context";
import Link from "next/link";

const chat = () => {
  const [users, setusers] = useState([]);
  const [currentUserData, setcurrentUserData] = useState("");

  const router = useRouter();
  const { data } = userDatas();
  const { currentUser } = useAuth();
  const scroll = useRef();

  const getUserData = () => {
    const q = query(
      collection(
        db,
        `/test/${"ashrafchy338@gmail.com"}/ashraf chy & ${
          router.query.chat == "ashraf chy"
            ? currentUser.displayName
            : router.query.chat
        }`
      ),
      orderBy("timestemp", "asc")
    );
    const userData = onSnapshot(q, (snapshot) => {
      setusers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return userData;
  };

  useEffect(() => {
    getUserData();
    // setTimeout(() => {
    //   getUserData();
    // }, 2000);
  }, []);

  const handleUser = async (e) => {
    e.preventDefault();

    if (!currentUserData) {
      return console.log("pleace write something");
    } else {
      const value = await addDoc(
        collection(
          db,
          `/test/ashrafchy338@gmail.com/ashraf chy & ${
            router.query.chat == "ashraf chy"
              ? currentUser.displayName
              : router.query.chat
          }`
        ),
        {
          timestemp: serverTimestamp(),
          msg: currentUserData,
          uid: currentUser.uid,
        }
      );
      setcurrentUserData("");
      scroll.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="chat_nav">
        <div>
          <Link href="/user">
            <i className="fas fa-chevron-left"></i>
          </Link>

          <div className="chat_user_info_div">
            {data
              .filter((val) => {
                return val.userData.name == router.query.chat;
              })
              .map((value) => {
                return (
                  <div key={value.id}>
                    <img src={value.userData.photo} alt="creative chat" />
                    <h2> {value.userData.name}</h2>
                  </div>
                );
              })}
          </div>
        </div>
        <i className="far fa-cog"></i>
      </nav>

      <section className="chat_section">
        {users.map((val) => {
          return (
            <div
              className={
                val.uid == currentUser.uid ? "right_user" : "left_user"
              }
              key={val.id}
            >
              <p>{val.msg}</p>
            </div>
          );
        })}
        <div ref={scroll}> </div>
      </section>

      <form action="" className="forms_chat" onSubmit={handleUser}>
        <input
          type="text"
          placeholder="Write a Message"
          onChange={(e) => setcurrentUserData(e.target.value)}
          value={currentUserData}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default chat;