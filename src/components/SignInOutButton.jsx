import { useAuth, useSigninCheck } from "reactfire";
import { signInWithGoogle, signOut } from "../utils/firebase/auth";
import { Button } from "@mui/material";

export default function SignInOutButton() {
  const { data: signInCheckResult } = useSigninCheck();
  const auth = useAuth();

  return signInCheckResult.signedIn ? (
    <Button variant="contained" onClick={() => signOut(auth)}>Sign out</Button>
  ) : (
    <button className="rounded-full" onClick={() => signInWithGoogle(auth)}>Sign in with Google</button>
  );
}

