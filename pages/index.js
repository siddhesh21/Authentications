import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  {
    /**
  const [user] = useAuthState(auth);

  const signIn = () => {
    auth
      .signInWithRedirect(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(user);
   */
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1>Next.js Authentication</h1>
    </div>
  );
}

{
  /**
      {user ? (
        <h2>You are Logged In as {user.displayName}</h2>
      ) : (
        <h2>You are Not Logged In</h2>
      )}
      {user ? (
        <button onClick={() => auth.signOut()}>Sign Out</button>
      ) : (
        <button onClick={signIn}>Sign In</button>
      )}
*/
}
