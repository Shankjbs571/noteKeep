import Forms from "../components/Forms";
import { getAuth, getRedirectResult,signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useEffect } from "react";
import app from "../firebase";
// import {auth, provider} from "../firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export default function Login() {

    const handleLogin = () => {
            signInWithRedirect(auth, provider);
            // getRedirectResult(auth)
    //         .then((result) => {
    //             // This gives you a Google Access Token. You can use it to access the Google API.
    //             const credential = GoogleAuthProvider.credentialFromResult(result);
    //             const token = credential.accessToken;
    //             const refreshToken = credential.refreshToken;
    //             localStorage.setItem(ACCESS_TOKEN, token);
    //             localStorage.setItem(REFRESH_TOKEN, refreshToken);
    //             navigate("/")
    //             // The signed-in user info.
    //             const user = result.user;
    //             console.log("this is user",user);
    //             // IdP data available using getAdditionalUserInfo(result)
    //             // ...
    //         }).catch((error) => {
    //             // Handle Errors here.
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             // The email of the user's account used.
    //             // const email = error.customData.email;
    //             // The AuthCredential type that was used.
    //             const credential = GoogleAuthProvider.credentialFromError(error);
    //             // ...
    //         });
    };
    




    return (
        // <div className="max-w-full">
        //     <Forms route="/api/token/" method="login" />
        // </div>
        <div>
        <button onClick={handleLogin}>Login with Google</button>
        </div>

    );
}