import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
const AuthComponent = (props) => {
const router = useNavigate();
const [loading, setLoading] = useState(true);


useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token || token === "undefined") {
    router("/auth");
  } else {
    setLoading(false); // Allow rendering
  }
}, [router]);

if (loading) return null;

return <WrappedComponent {...props} />;


};

return AuthComponent;
};

export default withAuth;