import React, { CSSProperties } from "react";
import { NavLink } from "react-router-dom";

const activeStyle: CSSProperties = {
  color: "green",
  fontSize: 21,
};
export default function ArticleLink({ id }: { id: number }) {
  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={(props) => (props.isActive ? activeStyle : {})}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
}
