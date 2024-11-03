import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
      <div>
        {user && (
          <>
            <p> {user?.displayName} </p>
            <img src={user?.photoURL || ""} width={100} /> <br />
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </div>
    </>
  );
};