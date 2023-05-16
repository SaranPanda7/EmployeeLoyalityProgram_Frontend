import { useMsal } from "@azure/msal-react";
import { Link } from "react-router-dom"

function handleLogout(instance) {
  instance.logoutRedirect().catch((e) => {
    console.error(e);
    window.location.replace("http:localhost:3000");
  });
}

export const SignOutButton = () => {
  const { instance } = useMsal();

  return (
    <Link
   
      className="w-100 text-left"
      onClick={() => handleLogout(instance)}
    >
      <i className="la la-sign-out"></i> <span>Sign Out</span>
    </Link>
  );
};
