import { ClassNames } from "@emotion/react";
import { useSigninCheck } from "reactfire";
import ButtonAppBar from "./components/ButtonAppBar";
import Channel from "./components/Channel";
import SignInOutButton from "./components/SignInOutButton";

export default function App() {
  const { status, data: signInCheckResult } = useSigninCheck();

  if (status === "loading") {
    return <span>loading...</span>;
  }

  return (
    <>
      <ButtonAppBar></ButtonAppBar>
      <SignInOutButton />
      {signInCheckResult.signedIn && <Channel />}
    </>
  );
}
