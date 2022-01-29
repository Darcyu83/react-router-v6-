import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goArticles = () => {
    navigate("/articles", { replace: true }); //현재페이지를 기록에 남기지 않음.
  };
  const goHome = () => {
    navigate("/"); //현재페이지를 기록에 남기지 않음.
  };

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        <button onClick={goHome}>홈</button>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
