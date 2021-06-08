import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getSession, signIn, signOut, useSession } from "next-auth/client";
import Image from "next/image";

export default function Home() {
  const [session, loading] = useSession();
  console.log(session);
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
      {session ? (
        <>
          <h2>Welcome {session.user.name}</h2>
          <Image width={30} height={30} src={session.user.image} alt="" />
        </>
      ) : (
        <h2>You are Not Logged In</h2>
      )}

      {session ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </div>
  );
}

// SSR
export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

/** COMMENT
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
