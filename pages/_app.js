import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading] = useAuthState(auth);

  // if (loading) return <h1>Loading...</h1>;

  return <Component {...pageProps} />;
}

export default MyApp;
