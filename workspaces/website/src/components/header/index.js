import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";
import githubicon from "../../assets/github-icon.svg";
import discordicon from "../../assets/discord-icon.svg";

const Header = () => (
  <header class={style.header}>
    <a href="/">
      <img
        src="../../../assets/logo_colored.png"
        style={{ height: "3rem", marginLeft: "20px" }}
      />
    </a>
    <nav>
      
        <a target="_BLANK" href="https://vanilla.sm64js.com">Vanilla</a>
        <a target="_BLANK" href="https://60fps.sm64js.com">60 FPS</a>
        <Link href="/about">About</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/rules">Rules</Link>
        <a target="_BLANK" href="https://github.com/sm64js/sm64js">
          <div style={{display: 'grid', placeItems:'center'}}>
            <img src={githubicon} style={{height: '20px', display: "block"}}/>  
          </div>
        </a>
        <a target="_BLANK" href="https://discord.gg/7UaDnJt">
        <div style={{display: 'grid', placeItems:'center'}}>
            <img src={discordicon} style={{height: '20px', display: "block"}}/>  
          </div>
        </a>
        
      
    </nav>
  </header>
);

export default Header;
