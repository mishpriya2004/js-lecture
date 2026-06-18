import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {
  console.log("🚀 ~ ProtectedRoute ~ ProtectedRoute:")
    const navigate = useNavigate();


  useEffect(() => {
    const jsonData = localStorage.getItem("isLogin");
    const normalData = JSON.parse(jsonData);
    console.log("🚀 ~ Profile ~ normalData:", normalData);
    if (!normalData) {
      // null, undefined, false, 0, ""
      alert("You are not login");
      navigate("/");
    }
  }, []);

  return (
    <div>{children}</div>
  )
}
