import { getProviders, getSession, signIn } from "next-auth/client";
import { useEffect } from "react";
import { useRouter } from "next/router";

function SignIn({ providers, session }) {
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.replace("/");
    }
  }, [session]);

  return (
    <div>
      <h1>Sign In</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default SignIn;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);
  return {
    props: { providers, session },
  };
}
