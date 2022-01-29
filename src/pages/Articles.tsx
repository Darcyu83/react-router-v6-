import React, { CSSProperties } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ArticleLink from "../components/ArticleLink";

export default function Articles() {
  return (
    <>
      <Outlet />
      <ul>
        <ArticleLink id={1} />
        <ArticleLink id={2} />
        <ArticleLink id={3} />
      </ul>
    </>
  );
}
