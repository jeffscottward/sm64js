import { h } from "preact";

const About = () => (
  <div>
    <h1>About</h1>
    <h4>What is this?</h4>
    <p>
      This is an ongoing work-in-progress port of the
      <a href="https://github.com/n64decomp/sm64">decompilation</a> of original
      Nintendo game, Super Mario 64, to native Javascript (No Emulation) (No
      WebAssembly). This project required creating a Javascript WebGL port of
      <a href="https://github.com/Emill/n64-fast3d-engine">
        N64 Fast 3D Renderer
      </a>
      originally implemented with OpenGL in C. This project also includes the
      development of online mass multiplayer versions of sm64js and other custom
      multiplayer game modes.
    </p>
    <a name="Purpose"></a>
    <h4>What is the purpose of this port?</h4>
    <ul class="listCredits">
      <li>
        <b>Extensibility:</b> More access to more developers to add custom
        content
        <ul class="listPadding">
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
      Nothing. However, I believe access to this game's source code in a higher
      level programming language opens it up to a wider pool of potentially
      capable developers / modders. And seems to me like a natural next step
      following in the amazing work done by the decomp team and pc port.
    </p>
    <a name="Credits"></a>
    <h4>Credits</h4>
    <div class="creditsCenter">
      <h5>
        <a href="https://github.com/sm64js/sm64js/graphs/contributors">
          Developers / Contributors
        </a>
      </h5>
    </div>
    <div class="creditsCenter">
      <p>
        <a href="https://sm64js.com">Snuffy</a>,
        <a href="https://github.com/ScottDikowitz">ScottDikowitz</a>,
        <a href="https://github.com/luphoria">luphoria</a>,
        <a href="https://github.com/TERRAERROR">0x2480</a>,
        <a href="https://github.com/agent-11">Agent-11</a>,
        <a href="https://github.com/Tarnadas">Mario Reder</a>,
        <a href="https://github.com/GlitchyPSIX">GlitchyPSI</a>,
        <a href="https://github.com/AlbertoCentonze">Alberto</a>,
        <a href="https://github.com/djoslin0">djoslin0</a>,
        <a href="https://github.com/joe07734">joe07734</a>,
        <a href="https://github.com/eros71-dev">eros71</a>.
      </p>
    </div>
    <div>
      <div>
        <h6>
          <a href="https://github.com/n64decomp/sm64">Super Mario 64 Decomp</a>
        </h6>
        <p>
          Team that decompiled the original Super Mario 64 ROMs into C source
          code
        </p>
      </div>
      <div>
        <h6>
          <a href="https://github.com/sm64-port/sm64-port">
            Super Mario 64 PC Port
          </a>
        </h6>
        <p>Team that ported the decompiled project to PC</p>
      </div>
    </div>
    <div>
      <div>
        <h6>
          <a href="https://github.com/Emill/n64-fast3d-engine">
            N64 Fast 3D Renderer
          </a>
        </h6>
        <p>
          OpenGL Implementation of a 3D renderer for the Nintendo 64's graphics
        </p>
        <p>(Snuffy had to reimplement this in Javascript and WebGL)</p>
      </div>
    </div>
    <div>
      <div>
        <h6>
          <a href="https://github.com/djoslin0/sm64ex-coop">
            Super Mario 64 Coop
          </a>
        </h6>
        <p>
          Online cooperative multiplayer mod for SM64, aiming to synchronize all
          entities and every level for two players.
        </p>
        <p>
          (Special thanks to
          <a href="https://github.com/djoslin0">djoslin0</a>, the developer of
          this project, for consultation and advice on the implementation of
          multiplayer for sm64js. I also ported some code from this project
          directly)
        </p>
      </div>
    </div>
    <div class="creditsCenter">
      <h6>Other Libraries</h6>
    </div>
    <div class="creditsCenter">
      <p>
        <a href="https://jeremyckahn.github.io/keydrown/">Keydrown</a>
      </p>
    </div>
    <div class="creditsCenter">
      <h6>Special Thanks to</h6>
    </div>
    <div class="creditsCenter">
      <p>
        <a href="https://github.com/djoslin0">djoslin0</a>,
        <a href="https://github.com/yandeu">Yannick</a>,
        <a href="https://github.com/josegonzalez">Jose Diaz-Gonzalez</a>,
        <a href="https://github.com/Emill">Emill</a>,
        <a href="https://linktr.ee/Render96">Render96</a>,
        {/* <!-- Game canvas border using one of their hd painting textures--> */}
        {/* <!-- Logo font --> */}
        <a href="https://www.deviantart.com/fsuarez913/art/Super-Mario-256-FONT-312162535">
          fsuarez913
        </a>
        ,{/* <!-- Rest of the page font --> */}
        <a href="https://fontstruct.com/fontstructions/show/866471/mario_64_textbox">
          TheMH
        </a>
        ,{/* <!-- Mario troll emoji --> */}
        <a href="https://maly.io/@Troll/733515">Troll</a>,
        {/* <!-- TmljZSBvZiB0aGUgcHJpbmNlc3MgdG8gaW52aXRlIHVzIG92ZXIgZm9yIGEgcGljbmljLCBlaCBMdWlnaT8= --> */}
        <a href="https://twitter.com/YinyangGio14">YinyangGio</a>.
      </p>
    </div>
    <a name="Contact"></a>
    <h4>Contact</h4>
    <p>
      Questions? Suggestions? Want to help with this project? =) I have a
      discord server dedicated to sm64js:
      <a href="https://discord.gg/7UaDnJt"> Join Here </a>
      Discord: snuffysasa#2779
    </p>
  </div>
);

export default About;
