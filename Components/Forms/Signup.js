import Image from "next/image";
import gog from "../../public/google.svg";
import fb from "../../public/fb.svg";
import twitter from "../../public/twitter.svg";
import github from "../../public/github.svg";
import { useAuth } from "../../Firebase/Context";
import { useRouter } from "next/router";
import {
  onSnapshot,
  doc,
  collection,
  query,
  addDoc,
  setDoc,
  serverTimestamp
} from "firebase/firestore";
import { db } from "../../Firebase/firebase";
export const Signup = ({ setmodel }) => {
  const { google, currentUser } = useAuth();
  const router = useRouter();
  const handleGoogle = () => {
    google();
  };

  const handleSigninUser = async () => {
    if (currentUser) {
      await setDoc(doc(db, "test", currentUser.email), {
        userData: {
          uid: currentUser.uid,
          name: currentUser.displayName,
          photo: currentUser.photoURL,
        },
      });

      setTimeout(async () => {
        await addDoc(
          collection(
            db,
            `/test/ashrafchy338@gmail.com/ashraf chy & ${currentUser.displayName}`
          ),
          {
            timestemp: serverTimestamp(),
            msg: "Hello Ahraf",
            uid: currentUser.uid,
          }
        );
      }, 1000);
    } else {
      return alert("pleace change the state");
    }

    setTimeout(() => {
      router.push("/user");
      setmodel(false);
    }, 4000);
  };
  return (
    <div className="form">
      <button onClick={() => setmodel(false)} className="close_form">
        <i className="fal fa-times"></i>
      </button>
      <h1>Sign Up</h1>
      <section>
        <button onClick={handleGoogle}>
          <span>
            <Image
              src={gog}
              alt="creative chat"
              title="creative chat sign up"
              width="40px"
              height="40px"
            />
          </span>
          Continue With Google
        </button>
        <button>
          <span>
            <Image
              src={fb}
              alt="creative chat"
              width="40px"
              height="40px"
              title="creative chat sign up"
            />
          </span>
          Continue With Facebook
        </button>
        <button>
          <span>
            <Image
              src={twitter}
              alt="creative chat"
              title="creative chat sign up"
              width="40px"
              height="40px"
            />
          </span>
          Continue With Twitter
        </button>
        <button>
          <span>
            <Image
              src={github}
              alt="creative chat"
              title="creative chat sign up"
              width="40px"
              height="40px"
            />
          </span>
          Continue With Github
        </button>
        {currentUser && (
          <button className="continue" onClick={handleSigninUser} f>
            Continue Chat
          </button>
        )}
      </section>
    </div>
  );
};
