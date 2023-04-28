import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
        </ul>
        <button className="btn">로그인</button>
      </div>
    </>
  );
}
