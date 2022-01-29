import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export default function About() {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    if (!(detail && mode)) return;
    setSearchParams({ mode, detail: detail === "true" ? "false" : "true" });
  };

  const onIncreaseMode = () => {
    if (!(detail && mode)) return;
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode + "", detail });
  };

  console.log(detail, mode);
  return (
    <div style={{ color: "blue" }}>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>쿼리스트링: location.search : {location.search}</p>

      <hr />
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
}
