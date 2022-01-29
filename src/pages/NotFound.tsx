import React, { CSSProperties } from "react";
const style: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 64,
  position: "absolute",
  width: "100%",
  height: "100%",
};

export default function NotFound() {
  return <div style={style}>404 : Not found</div>;
}
