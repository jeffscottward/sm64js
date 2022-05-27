import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Header = () => (
  <header class={style.header}>
    <a href="/">
      <img
        src="../../../assets/logo_colored.png"
        style={{ height: "3rem", marginLeft: "20px" }}
      />
    </a>
    <nav>
      <div>
        <a target="_BLANK" href="https://vanilla.sm64js.com">Vanilla</a>
        <a target="_BLANK" href="https://60fps.sm64js.com">60 FPS</a>
        <Link href="/about">About</Link>
        <Link href="/privacy">Privacy</Link>
        <a target="_BLANK" href="https://github.com/sm64js/sm64js">Source Code</a>
        <a target="_BLANK" href="https://github.com/sm64js/sm64js/issues">
          Report Bug/Issue
        </a>
        <a target="_BLANK" href="https://discord.gg/7UaDnJt">Discord Server</a>
        <Link href="/rules">Rules</Link>
      </div>
    </nav>
  </header>
);

export default Header;
