import React from "react";
import "../../resource/main.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="pages/login">로그인</Link>
        </li>
        <li>
          <Link to="/">펫리스트</Link>
        </li>
        <li>
          <Link to="pages/register">회원가입</Link>
        </li>
        <li>
          <Link to="pages/petregister">펫등록</Link>
        </li>

        <li>
          <Link>서비스매칭</Link>
        </li>
      </ul>
    </nav>
  );
}