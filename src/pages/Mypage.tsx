import React from "react";
import { Navigate } from "react-router-dom";

export default function Mypage() {
  const isLoggedIn = false;
  //   if (!isLoggedIn) {
  //     return <Navigate to="/login" replace={true} />;
  //   }
  return <Navigate to="/login" replace={true} />;

  //   <div>마이페이지</div>;
}
