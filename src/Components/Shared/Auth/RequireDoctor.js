// import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Navigate, useLocation } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import auth from "../../../firebase.init";
// import Loading from "../../Loading/Loading";
// import useAdmin from "../../../hooks/useAdmin";
// import useDoctor from "../../../hooks/useDoctor";

// const RequireDoctor = ({ children }) => {
//   const [user, loading] = useAuthState(auth);
//   const [doctor, doctorLoading] = useDoctor(user);
//   const location = useLocation();

//   if (loading || doctorLoading) {
//     return <Loading></Loading>;
//   }

//   if (!user || !doctor) {
//     signOut(auth);
//     return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
//   }
//   return children;
// };

// export default RequireDoctor;
