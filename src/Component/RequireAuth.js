import { Navigate, useLocation } from "react-router-dom";
import auth from "./firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from "./Spinner";

function RequireAuth({ children }) {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <Spinner></Spinner>
  }
  if (user) {

    return children;
  }
  else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
}
export default RequireAuth