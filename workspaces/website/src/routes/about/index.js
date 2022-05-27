import { h } from "preact";

const About = () => (
  <div className="page">
    <div className="page-contents">
      <h1>About</h1>
      <h4>What is this?</h4>
      <p>
        This is an ongoing work-in-progress port of the{" "}
        <a href="https://github.com/n64decomp/sm64">decompilation</a> of
        original Nintendo game, Super Mario 64, to native Javascript (No
        Emulation) (No WebAssembly). This project required creating a Javascript
        WebGL port of{" "}
        <a href="https://github.com/Emill/n64-fast3d-engine">
          N64 Fast 3D Renderer
        </a>{" "}
        originally implemented with OpenGL in C. This project also includes the
        development of online mass multiplayer versions of sm64js and other
        custom multiplayer game modes.
      </p>
      <a name="Purpose"></a>
      <h4>What is the purpose of this port?</h4>
      <ul className="listCredits">
        <li>
          <b>Extensibility:</b> More access to more developers to add custom
          content
          <ul className="listPadding">
            <li>Rapid Prototyping</li>
            <li>More friendly to importing other software modules/packages</li>
            <li>More friendly to prototyping multiplayer custom games/mods</li>
          </ul>
        </li>
        <li>
          <b>Portablity:</b> Sm64 projects can run on any device with a web
          browser anywhere without needing to download or install anything
        </li>
        <li>
          Opportunity to refactor / rewrite with modern coding style and cleanup
        </li>
      </ul>
      <a name="WASM"></a>
      <h4>What's wrong with WebAssembly / Emscripten</h4>
      <p>
        Nothing. However, I believe access to this game's source code in a
        higher level programming language opens it up to a wider pool of
        potentially capable developers / modders. And seems to me like a natural
        next step following in the amazing work done by the decomp team and pc
        port.
      </p>
      <a name="Credits"></a>
      <h4>Credits</h4>
      <div>
        <h5>
          <a href="https://github.com/sm64js/sm64js/graphs/contributors">
            Developers / Contributors
          </a>
        </h5>
      </div>
      <div>
        <ul>
          <li>
            <a href="https://sm64js.com">Snuffy</a>,
          </li>
          <li>
            <a href="https://github.com/ScottDikowitz">ScottDikowitz</a>,
          </li>
          <li>
            <a href="https://github.com/luphoria">luphoria</a>,
          </li>
          <li>
            <a href="https://github.com/TERRAERROR">0x2480</a>,
          </li>
          <li>
            <a href="https://github.com/agent-11">Agent-11</a>,
          </li>
          <li>
            <a href="https://github.com/Tarnadas">Mario Reder</a>,
          </li>
          <li>
            <a href="https://github.com/GlitchyPSIX">GlitchyPSI</a>,
          </li>
          <li>
            <a href="https://github.com/AlbertoCentonze">Alberto</a>,
          </li>
          <li>
            <a href="https://github.com/djoslin0">djoslin0</a>,
          </li>
          <li>
            <a href="https://github.com/joe07734">joe07734</a>,
          </li>
          <li>
            <a href="https://github.com/eros71-dev">eros71</a>.
          </li>
        </ul>
      </div>
      <div>
        <p>
          <b>
            <a href="https://github.com/n64decomp/sm64">
              Super Mario 64 Decomp
            </a>
          </b>
          <div>
            Team that decompiled the original Super Mario 64 ROMs into C source
            code
          </div>
        </p>
        <p>
          <b>
            <a href="https://github.com/sm64-port/sm64-port">
              Super Mario 64 PC Port
            </a>
          </b>
          <div>Team that ported the decompiled project to PC</div>
        </p>
      </div>
      <p>
        <div>
          <b>
            <a href="https://github.com/Emill/n64-fast3d-engine">
              N64 Fast 3D Renderer
            </a>
          </b>
          <div>
            OpenGL Implementation of a 3D renderer for the Nintendo 64's
            graphics
          </div>
          <div>(Snuffy had to reimplement this in Javascript and WebGL)</div>
        </div>
      </p>
      <p>
        <div>
          <b>
            <a href="https://github.com/djoslin0/sm64ex-coop">
              Super Mario 64 Coop
            </a>
          </b>
          <div>
            Online cooperative multiplayer mod for SM64, aiming to synchronize
            all entities and every level for two players.
          </div>
          <div>
            (Special thanks to
            <a href="https://github.com/djoslin0">djoslin0</a>, the developer of
            this project, for consultation and advice on the implementation of
            multiplayer for sm64js. I also ported some code from this project
            directly)
          </div>
        </div>
      </p>
      <div>
        <h4>Other Libraries</h4>
      </div>
      <div>
        <p>
          <a href="https://jeremyckahn.github.io/keydrown/">Keydrown</a>
        </p>
      </div>
      <div>
        <h4>Special Thanks to</h4>
      </div>
      <div>
        <ul>
          <li>
            <a href="https://github.com/djoslin0">djoslin0</a>,
          </li>
          <li>
            <a href="https://github.com/yandeu">Yannick</a>,
          </li>
          <li>
            <a href="https://github.com/josegonzalez">Jose Diaz-Gonzalez</a>,
          </li>
          <li>
            <a href="https://github.com/Emill">Emill</a>,
          </li>
          <li>
            <a href="https://linktr.ee/Render96">Render96</a>,
          </li>
          <li>
            <a href="https://www.deviantart.com/fsuarez913/art/Super-Mario-256-FONT-312162535">
              fsuarez913
            </a>
          </li>
          <li>
            <a href="https://fontstruct.com/fontstructions/show/866471/mario_64_textbox">
              TheMH
            </a>
          </li>
          <li>
            <a href="https://maly.io/@Troll/733515">Troll</a>,
          </li>
          <li>
            <a href="https://twitter.com/YinyangGio14">YinyangGio</a>.
          </li>
        </ul>
      </div>
      <a name="Contact"></a>
      <h4>Contact</h4>
      <p>
        Questions? Suggestions? Want to help with this project? =) We have a
        discord server dedicated to sm64js. Click the link up top.
      </p>
    </div>
  </div>
);

export default About;
