import Image from "next/image";
import gog from "../../public/google.svg";
import fb from "../../public/fb.svg";
import twitter from "../../public/twitter.svg";
import github from "../../public/github.svg";
import { useAuth } from "../../Firebase/Context";
import { useRouter } from "next/router";

export const Login = ({ setmodel, form, setform }) => {
  const { google, currentUser } = useAuth();
  const router = useRouter();
  const handleGoogle = () => {
    google();
  };

  const handleSigninUser = () => {
    setTimeout(() => {
      router.push("/user");
      setmodel(false);
    }, 1000);
  };
  return (
    <>
      {form  && (
        <div className="form">
          <button onClick={() => setmodel(false)} className="close_form">
            <i className="fal fa-times"></i>
          </button>
          <h1>Log in</h1>
          <section>
          <button onClick={() => setform(false)}>Create Account</button>
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
      )}
    </>
  );
};
