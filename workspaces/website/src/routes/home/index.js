import { h } from "preact";
import "joypad.js"; // ES6

const Home = () => {
  joypad.on("connect", (e) => {
    const { id } = e.gamepad;
    alert("Controller connected");
  });
  return (
    <div className="page">
      <div className="page-contents">
        <img
          id="title"
          src="assets/title.png"
          style={{ maxWidth: "100%", marginBottom: "1rem" }}
        />
        <canvas id="fullCanvas" width="1280" height="720"></canvas>
        <main id="mainContent">
          <div className="siteMargins">
            <details>
              <summary>
                This project is currently still being developed.
              </summary>
              <p>
                This project is currently still being developed. This page may
                be live from time to time for testing, but there may be glitches
                and performance issues. The server will go down and restart at
                random times without warning. If you would like to help with the
                project or have feedback please{" "}
                <a className="descriptionContact" href="/credits.html">
                  contact me
                </a>{" "}
                or report a problem on{" "}
                <a
                  className="descriptionContact"
                  href="https://github.com/sm64js/sm64js/issues"
                >
                  Github
                </a>
                .
              </p>
            </details>

            {/* <!-- Submit ROM form --> */}
            <form id="romSelect">
              <h4 className="romSelectText">
                Select US sm64 (z64) ROM File from your computer
              </h4>
              <input id="romFile" className="romFileText" type="file" />
              <input
                className="ROMinput loadRomButton"
                type="submit"
                value="Load ROM"
              />
            </form>
            <h6 id="romMessage" className="romMessageText">
              This project uses the textures and other game assets from the
              original game. Due to copyright issues, I cannot host those assets
              on this site. Please select a sm64 ROM to extract those assets
              before you can play.
            </h6>
            {/* <!-- Start of signboxBackground --> */}
            <div id="signboxBorder" className="shunned">
              <div id="signboxBackground">
                <div id="signboxMargin">
                  {/* <!-- Main buttons & settings --> */}
                  {/* <!-- Divs are used as rows here --> */}
                  <div>
                    {/* <!-- This is row 1 for example --> */}
                    <button
                      id="startbutton"
                      type="button"
                      className="green-button"
                      disabled
                    >
                      <div className="sm64button">Start Game</div>
                    </button>
                    <button
                      id="hudButton"
                      className="pink-button"
                      onclick={() => {
                        window.hideHUD(this);
                      }}
                    >
                      <div className="sm64button">Hide HUD</div>
                    </button>
                    <button
                      id="freezeButton"
                      className="blue-button"
                      onclick={() => {
                        window.freezeCamera(this);
                      }}
                    >
                      <div className="sm64button">Freeze Camera (OFF)</div>
                    </button>
                  </div>
                  {/* <!-- Sign in / sign out section, Map select--> */}
                  <div id="signinSection">
                    {/* <!-- Sign in buttons --> */}
                    <div id="signinButtons">
                      <img
                        id="discordSigninButton"
                        src="assets/discord_signin.png"
                      />
                      <img
                        id="googleSigninButton"
                        src="assets/google_signin.png"
                      />
                    </div>
                    {/* <!-- Player name section --> */}
                    <div id="playerNameRow">
                      {/* <!-- Sign out button --> */}
                      <button
                        id="logoutButton"
                        type="submit"
                        className="red-button"
                      >
                        <div className="sm64button">Sign out</div>
                      </button>
                      <form id="playerNameForm">
                        {/* <!-- Discord name --> */}
                        <div id="discordNameRow">
                          <label type="text">Discord Name: </label>
                          <input
                            className="textInput nameInput"
                            readonly
                            id="discordNameBox"
                            type="text"
                            minlength="3"
                            maxlength="20"
                          />
                          <button
                            id="switchCustom"
                            type="button"
                            className="yellow-button"
                          >
                            <div className="sm64button">Use Custom Name</div>
                          </button>
                        </div>
                        {/* <!-- End discord name --> */}
                        {/* <!-- Custom name --> */}
                        <div id="customNameRow">
                          <label type="text">Custom Name: </label>
                          <input
                            className="textInput nameInput"
                            id="playerNameInput"
                            type="text"
                            minlength="3"
                            maxlength="14"
                            placeholder="Enter name here"
                            onchange={() => {
                              window.updatePlayerName(this.value);
                            }}
                          />
                          <button
                            id="switchDiscord"
                            type="button"
                            className="blue-button"
                          >
                            <div className="sm64button">Use Discord Name</div>
                          </button>
                        </div>
                        {/* <!-- End custom name --> */}
                        {/* <!-- Map select --> */}
                        <div className="mapSelectDiv">
                          <label type="text" readonly>
                            Select Map:{" "}
                          </label>
                          {/* <!-- Map selection list, add newer custom levels in here --> */}
                          <div>
                            <select id="mapSelect">
                              <optgroup label="Vanilla maps">
                                <option value="16">Castle Grounds</option>
                                <option value="6">
                                  Castle Inside First Level
                                </option>
                                <option value="602">
                                  Castle Inside Second Level
                                </option>
                                <option value="26">Castle Courtyard</option>
                                <option value="9">Bob-omb Battlefield</option>
                                <option value="24">Whomp's Fortress</option>
                                <option value="5">Cool, Cool Mountain</option>
                                <option value="56">
                                  Cool, Cool Mountain Slide
                                </option>
                                <option value="27">
                                  Princess's Secret Slide
                                </option>
                                <option value="29">
                                  Tower of the Wing Cap
                                </option>
                                <option value="4">Big Boo's Haunt</option>
                                <option value="7">Hazy Maze Cave</option>
                                <option value="8">Shifting Sand Land</option>
                                <option value="36">Tall, Tall Mountain</option>
                                <option value="10">Snowman's Land</option>
                              </optgroup>
                              <optgroup label="Custom maps">
                                <option value="1000">
                                  Mushroom Battlefield
                                </option>
                                <option value="1004">Mushroom Raceway</option>
                                <option value="1006">Dolphin Town</option>
                                <option value="1001">CTF/Race Map</option>
                                <option value="1002">Starman Fortress</option>
                                <option value="1003">Glider Jungle</option>
                                <option value="999">Clouded Ruins</option>
                              </optgroup>
                            </select>
                            <button
                              id="playerNameButton"
                              type="submit"
                              className="green-button"
                            >
                              <div className="sm64button">Submit</div>
                            </button>
                          </div>
                          <div>
                            <label id="playerNameResult" type="text" readonly>
                              Waiting for selection
                            </label>
                          </div>
                        </div>
                        {/* <!-- End map select --> */}
                      </form>
                    </div>
                    {/* <!-- End player name section --> */}
                    {/* <!-- Authentification failed message --> */}
                    <h6 id="authFailMsg"></h6>
                    {/* <!-- This is row 2 and so on --> */}
                  </div>
                  {/* <!-- In-game options --> */}
                  <div>
                    <button
                      type="button"
                      id="pvpButton"
                      className="pink-button"
                      onclick={() => {
                        window.togglePvp();
                      }}
                    >
                      <div className="sm64button">PvP: On</div>
                    </button>
                    <button
                      type="button"
                      id="respawnButton"
                      className="respawnButton"
                      onclick={() => {
                        window.sm64js.reset = true;
                      }}
                    >
                      Respawn
                    </button>
                  </div>
                  {/* <!-- Controls and customization --> */}
                  <div id="yellowControls">
                    <button
                      type="button"
                      className="green-button"
                      data-placement="bottom"
                      onclick={() => {
                        window.switchbox("controlsbox");
                      }}
                    >
                      <div className="sm64button">Customize Controls</div>
                    </button>
                    <button
                      type="button"
                      className="blue-button"
                      onclick={() => {
                        window.switchbox("optionsbox");
                      }}
                    >
                      <div className="sm64button">Options & Misc</div>
                    </button>
                    <button
                      type="button"
                      className="pink-button"
                      onclick={() => {
                        window.switchbox("customizebox");
                        window.updateWheel();
                      }}
                    >
                      <div className="sm64button">
                        Customize Character / Skin
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End of signboxBackground --> */}
            {/* <!-- Start of options box--> */}
            <div id="optionsBorder">
              <div id="optionsBackground">
                <h1>Options & Misc</h1>
                {/* <!-- Miscellaneous --> */}
                {/* <!-- Divs are used as rows here --> */}
                <div className="deleteDiv">
                  {/* <!-- This is row 1 for example --> */}
                  <button
                    id="deleteRom"
                    onclick={() => {
                      window.deleteRom();
                    }}
                    type="button"
                    className="red-button"
                  >
                    <div className="sm64button">Delete Rom</div>
                  </button>
                  <h2 id="fpsMeter">FPS: 0</h2>
                  <h2 id="pingMeter">Ping 0ms</h2>
                </div>
                <div className="settings-flex settings-options">
                  {/* <!-- This is row 2 and so on --> */}
                  <button
                    type="button"
                    className="blue-button"
                    onclick={() => {
                      window.fullWindowMode = true;
                    }}
                  >
                    <div className="sm64button">Full Window Mode</div>
                  </button>
                  <button
                    type="button"
                    className="blue-button"
                    onclick={() => {
                      window.toggleWidescreen();
                    }}
                  >
                    <div className="sm64button">Widescreen Mode</div>
                  </button>
                  <label>Super Mario Sunshine Redive</label>
                  <input
                    type="checkbox"
                    checked
                    onchange={() => {
                      window.sm64js.redive = this.checked;
                    }}
                  />
                  <select
                    onchange={() => {
                      window.sm64js.filter = this.value;
                    }}
                  >
                    <option value="2">Linear Texture Filtering</option>
                    <option value="0">Point / Nearest Texture Filtering</option>
                  </select>
                </div>
                <div className="settings-flex">
                  {/* <!-- Color code pop up --> */}
                  <div id="colorCodePasteWindow">
                    <label>Gameshark Color Code Importer:</label>
                    <div>
                      <textarea
                        id="ccPasteArea"
                        placeholder="Enter your Color Code here..."
                        rows="6"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        className="blue-button"
                        onclick={() => {
                          window.myMario.skinData = window.parseColorCode(
                            document.getElementById("ccPasteArea").value
                          );
                          document.getElementById("ccPasteArea").value = "";
                          window.myMario.saveSkin();
                        }}
                      >
                        <div className="sm64button">Import Color Code</div>
                      </button>
                    </div>
                  </div>
                  {/* <!-- Emote menu --> */}
                  <div className="emoteMenu">
                    <h1>Emote menu</h1>
                    <div>
                      <img
                        onclick={() => {
                          document.getElementById("chatbox").value += ":blj:";
                        }}
                        src="assets/emotes/blj.gif"
                        alt="BLJ"
                      />
                      <img
                        onclick={() => {
                          document.getElementById("chatbox").value += ":bup:";
                        }}
                        src="assets/emotes/bup.jpg"
                        alt="Bup"
                      />
                      <img
                        onclick={() => {
                          document.getElementById("chatbox").value +=
                            ":discord:";
                        }}
                        src="assets/emotes/discord.png"
                        alt="Discord logo"
                      />
                      <img
                        onclick={() => {
                          document.getElementById("chatbox").value +=
                            ":facepalm:";
                        }}
                        src="assets/emotes/facepalm.png"
                        alt="Facepalm"
                      />
                      <img
                        onclick={() => {
                          document.getElementById("chatbox").value += ":kappa:";
                        }}
                        src="assets/emotes/kappa.png"
                        alt="Kappa"
                      />
                      <img
                        onclick={() => {
                          document.getElementById("chatbox").value += ":kick:";
                        }}
                        src="assets/emotes/kick.gif"
                        alt="Kick"
                      />
                      <img
                        onclick={() => {
                          document.getElementById("chatbox").value +=
                            ":mariostyle:";
                        }}
                        src="assets/emotes/mariostyle.gif"
                        alt="Mario Gangnam Style"
                      />
                      <img
                        onclick={() => {
                          document.getElementById("chatbox").value +=
                            ":pogchamp:";
                        }}
                        src="assets/emotes/pogchamp.png"
                        alt="Mario Poggard"
                      />
                      <img
                        onclick={() => {
                          document.getElementById("chatbox").value += ":shock:";
                        }}
                        src="assets/emotes/shock.gif"
                        alt="Shock"
                      />
                      <img
                        onclick={() => {
                          document.getElementById("chatbox").value +=
                            ":strange:";
                        }}
                        src="assets/emotes/strange.png"
                        alt="Strange"
                      />
                      <img
                        onclick={() => {
                          document.getElementById("chatbox").value += ":tpose:";
                        }}
                        src="assets/emotes/tpose.png"
                        alt="T-Pose"
                      />
                      <img
                        onclick={() => {
                          document.getElementById("chatbox").value += ":troll:";
                        }}
                        src="assets/emotes/trollio.png"
                        alt="Troll"
                      />
                    </div>
                  </div>
                </div>
                {/* <!-- Controls and customization --> */}
                <div id="blueControls">
                  <button
                    type="button"
                    className="green-button"
                    onclick={() => {
                      window.switchbox("controlsbox");
                    }}
                  >
                    <div className="sm64button">Customize Controls</div>
                  </button>
                  <button
                    type="button"
                    className="yellow-button"
                    onclick={() => {
                      window.switchbox();
                    }}
                  >
                    <div className="sm64button">Return</div>
                  </button>
                  <button
                    type="button"
                    className="pink-button"
                    onclick={() => {
                      window.switchbox("customizebox");
                      window.updateWheel();
                    }}
                  >
                    <div className="sm64button">Customize Character / Skin</div>
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- End of options --> */}
            {/* <!-- Start of customize skin menu --> */}
            <div id="customizeBorder">
              <div id="customizeBackground">
                <div id="skinCustomizerWindow">
                  {/* <!-- Skin presets --> */}
                  <div>
                    <label>Select Skin Preset & Character:</label>
                    <select
                      className="form-control"
                      id="presetBox"
                      onchange={() => {
                        window.updateSkinID(this.value);
                        localStorage.setItem("presetBox", this.value);
                      }}
                    >
                      <optgroup label="Main Color Codes">
                        <option value="0">Mario Colors</option>
                        <option value="1">Luigi Colors</option>
                        <option value="2">Wario Colors</option>
                      </optgroup>
                      <optgroup label="Other Color Codes">
                        <option value="3">SMB3 Mario</option>
                        <option value="4">SMB3 Luigi</option>
                        <option value="5">Waluigi</option>
                        <option value="6">7 GRAND DAD</option>
                        <option value="7">Super Show Mario</option>
                        <option value="8">Super Show Luigi</option>
                        <option value="9">Rainbow Mario</option>
                        <option value="10">Rainbow Luigi</option>
                        <option value="11">Rainbow Wario</option>
                      </optgroup>
                    </select>
                    <select
                      id="characterType"
                      onchange={() => {
                        window.setCharacter(this.value);
                      }}
                    >
                      <option value="0">Mario</option>
                      <option value="1">Luigi</option>
                      <option value="2">Wario</option>
                    </select>
                    {/* <!-- Player part selector --> */}
                    <select
                      id="skinTypes"
                      onchange={() => {
                        window.updateWheel();
                      }}
                    >
                      <option value="overalls">Overalls</option>
                      <option value="hat">Hat</option>
                      <option value="shirt">Shirt</option>
                      <option value="gloves">Gloves</option>
                      <option value="boots">Boots</option>
                      <option value="skin">Skin</option>
                      <option value="hair">Hair</option>
                      <option value="parachute">Glider & Kart</option>
                    </select>
                  </div>
                  {/* <!-- Options --> */}
                  {/* <!-- Ambient color checkbox --> */}
                  <div>
                    <input type="checkbox" id="updateAmb" checked />
                    <label>
                      Update ambient color accordingly to main color?{" "}
                    </label>
                  </div>
                  {/* <!-- Hat toggle --> */}
                  <button
                    className="green-button"
                    onclick={() => {
                      window.toggleCapState();
                    }}
                  >
                    <div className="sm64button">Toggle Hat</div>
                  </button>
                  {/* <!-- Color pickers --> */}
                  <div className="colorPickersContainer">
                    <div id="picker"></div>
                    <div id="ambpicker"></div>
                  </div>
                  {/* <!-- RGB input --> */}
                  <div className="direct-color-input-div">
                    <h2>Direct color input:</h2>
                    <label>Color:</label>
                    <input
                      type="color"
                      id="colorInput"
                      onchange={() => {
                        window.colorPicker.color.hexString = this.value;
                        if (document.getElementById("updateAmb").checked) {
                          document.getElementById("ambientInput").value =
                            window.hex2ambient(this.value);
                          window.ambientPicker.color.hexString =
                            document.getElementById("ambientInput").value;
                          window.updateAmbientColors(
                            window.ambientPicker.color
                          );
                        }
                        window.updateColors(window.colorPicker.color);
                        window.myMario.saveSkin();
                      }}
                    />
                    <label> Ambient color:</label>
                    <input
                      type="color"
                      id="ambientInput"
                      onchange={() => {
                        window.ambientPicker.color.hexString = this.value;
                        window.updateAmbientColors(window.ambientPicker.color);
                        window.myMario.saveSkin();
                      }}
                    />
                  </div>
                  {/* <!-- Controls and customization --> */}
                  <div id="pinkControls">
                    <button
                      type="button"
                      className="green-button"
                      onclick={() => {
                        window.switchbox("controlsbox");
                      }}
                    >
                      <div className="sm64button">Customize Controls</div>
                    </button>
                    <button
                      type="button"
                      className="blue-button"
                      onclick={() => {
                        window.switchbox("optionsbox");
                      }}
                    >
                      <div className="sm64button">Options & Misc</div>
                    </button>
                    <button
                      type="button"
                      className="yellow-button"
                      onclick={() => {
                        window.switchbox();
                      }}
                    >
                      <div className="sm64button">Return</div>
                    </button>
                  </div>
                </div>
                {/* <!-- End of skin customizer pop up --> */}
              </div>
            </div>
            {/* <!-- End of customizer box --> */}
            {/* <!-- Start of controls box --> */}
            <div id="controlsBorder">
              <div id="controlsBackground">
                <div id="controlsMargin">
                  {/* <!-- Save & reset controls button --> */}
                  <div className="controlButtons">
                    <button
                      className="green-button"
                      onclick={() => {
                        window.saveControls();
                      }}
                    >
                      <div className="sm64button">Save Controls</div>
                    </button>
                    <button
                      className="red-button"
                      onclick={() => {
                        window.loadDefaultControls();
                      }}
                    >
                      <div className="sm64button">Load Default Controls</div>
                    </button>
                  </div>
                  <h6 id="noGamepadMessage">
                    No Gamepad Detected Yet, Try Pressing a Button
                  </h6>
                  <div id="controlsFlex">
                    <div id="keyboardControlsWindow">
                      {/* <!-- Keyboard control list --> */}
                      <div>
                        <div>
                          <label>Start:</label>
                          <select
                            keyboardButton
                            name="start"
                            onchange={() => {
                              window.updateKeyboardMapping(
                                this.value,
                                this.name
                              );
                            }}
                          ></select>
                        </div>
                        <div>
                          <label>A:</label>
                          <select
                            keyboardButton
                            name="a"
                            onchange={() => {
                              window.updateKeyboardMapping(
                                this.value,
                                this.name
                              );
                            }}
                          ></select>
                        </div>
                        <div>
                          <label>B:</label>
                          <select
                            keyboardButton
                            name="b"
                            onchange={() => {
                              window.updateKeyboardMapping(
                                this.value,
                                this.name
                              );
                            }}
                          ></select>
                        </div>
                        <div>
                          <label>Z:</label>
                          <select
                            keyboardButton
                            name="z"
                            onchange={() => {
                              window.updateKeyboardMapping(
                                this.value,
                                this.name
                              );
                            }}
                          ></select>
                        </div>
                      </div>
                      <div>
                        <div>
                          <label>Up:</label>
                          <select
                            keyboardButton
                            name="up"
                            onchange={() => {
                              window.updateKeyboardMapping(
                                this.value,
                                this.name
                              );
                            }}
                          ></select>
                        </div>
                        <div>
                          <label>Down:</label>
                          <select
                            keyboardButton
                            name="down"
                            onchange={() => {
                              window.updateKeyboardMapping(
                                this.value,
                                this.name
                              );
                            }}
                          ></select>
                        </div>
                        <div>
                          <label>Left:</label>
                          <select
                            keyboardButton
                            name="left"
                            onchange={() => {
                              window.updateKeyboardMapping(
                                this.value,
                                this.name
                              );
                            }}
                          ></select>
                        </div>
                        <div>
                          <label>Right:</label>
                          <select
                            keyboardButton
                            name="right"
                            onchange={() => {
                              window.updateKeyboardMapping(
                                this.value,
                                this.name
                              );
                            }}
                          ></select>
                        </div>
                      </div>
                      <div>
                        <div>
                          <label>C-Up:</label>
                          <select
                            keyboardButton
                            name="cu"
                            onchange={() => {
                              window.updateKeyboardMapping(
                                this.value,
                                this.name
                              );
                            }}
                          ></select>
                        </div>
                        <div>
                          <label>C-Down:</label>
                          <select
                            keyboardButton
                            name="cd"
                            onchange={() => {
                              window.updateKeyboardMapping(
                                this.value,
                                this.name
                              );
                            }}
                          ></select>
                        </div>
                        <div>
                          <label>C-Left:</label>
                          <select
                            keyboardButton
                            name="cl"
                            onchange={() => {
                              window.updateKeyboardMapping(
                                this.value,
                                this.name
                              );
                            }}
                          ></select>
                        </div>
                        <div>
                          <label>C-Right:</label>
                          <select
                            keyboardButton
                            name="cr"
                            onchange={() => {
                              window.updateKeyboardMapping(
                                this.value,
                                this.name
                              );
                            }}
                          ></select>
                        </div>
                      </div>
                      <div>
                        <div>
                          <label>Minimap:</label>
                          <select
                            keyboardButton
                            name="map"
                            onchange={() => {
                              window.updateKeyboardMapping(
                                this.value,
                                this.name
                              );
                            }}
                          ></select>
                        </div>
                        <div>
                          <label>Taunts:</label>
                          <select
                            keyboardButton
                            name="taunt"
                            onchange={() => {
                              window.updateKeyboardMapping(
                                this.value,
                                this.name
                              );
                            }}
                          ></select>
                        </div>
                        <div>
                          <label>Glider:</label>
                          <select
                            keyboardButton
                            name="parachute"
                            onchange={() => {
                              window.updateKeyboardMapping(
                                this.value,
                                this.name
                              );
                            }}
                          ></select>
                        </div>
                        <div>
                          <label>Chat:</label>
                          <select
                            keyboardButton
                            name="chat"
                            onchange={() => {
                              window.updateKeyboardMapping(
                                this.value,
                                this.name
                              );
                            }}
                          ></select>
                        </div>
                        <div>
                          <label>Freeze Camera:</label>
                          <select
                            keyboardButton
                            name="freezeCam"
                            onchange={() => {
                              window.updateKeyboardMapping(
                                this.value,
                                this.name
                              );
                            }}
                          ></select>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Gamepad controls pop up --> */}
                    <div id="gamepadControlsWindow">
                      {/* <!-- Gamepad message --> */}
                      <div>
                        <div id="gamepadMessageDiv">
                          <h6 id="gamepadMessage"></h6>
                          <h6 id="gamepadMessage">
                            Is your gamepad not working correctly? Contact me so
                            I can support more gamepads. Discord:
                            snuffysasa#2779 /
                            <a href="https://github.com/sm64js/sm64js/issues">
                              Github
                            </a>
                          </h6>
                        </div>
                      </div>
                      {/* <!-- Gamepad controls list --> */}
                      <div id="gamepadFlex">
                        <div>
                          <div>
                            <label>Start:</label>
                            <select
                              gamepadButton
                              name="start"
                              onchange={() => {
                                window.updateGamepadMapping(
                                  this.value,
                                  this.name
                                );
                              }}
                            ></select>
                          </div>
                          <div>
                            <label>A:</label>
                            <select
                              gamepadButton
                              name="a"
                              onchange={() => {
                                window.updateGamepadMapping(
                                  this.value,
                                  this.name
                                );
                              }}
                            ></select>
                          </div>
                          <div>
                            <label>B:</label>
                            <select
                              gamepadButton
                              name="b"
                              onchange={() => {
                                window.updateGamepadMapping(
                                  this.value,
                                  this.name
                                );
                              }}
                            ></select>
                          </div>
                          <div>
                            <label>Z:</label>
                            <select
                              gamepadButton
                              name="z"
                              onchange={() => {
                                window.updateGamepadMapping(
                                  this.value,
                                  this.name
                                );
                              }}
                            ></select>
                          </div>
                          <div>
                            <label>axisX:</label>
                            <select
                              gamepadAxes
                              name="stickX"
                              onchange={() => {
                                window.updateGamepadMapping(
                                  this.value,
                                  this.name
                                );
                              }}
                            ></select>
                          </div>
                          <div>
                            <label>axisY:</label>
                            <select
                              gamepadAxes
                              name="stickY"
                              onchange={() => {
                                window.updateGamepadMapping(
                                  this.value,
                                  this.name
                                );
                              }}
                            ></select>
                          </div>
                        </div>
                        <div>
                          <div>
                            <label>C-axisX:</label>
                            <select
                              gamepadAxes
                              name="cStickX"
                              onchange={() => {
                                window.updateGamepadMapping(
                                  this.value,
                                  this.name
                                );
                              }}
                            ></select>
                          </div>
                          <div>
                            <label>C-axisY:</label>
                            <select
                              gamepadAxes
                              name="cStickY"
                              onchange={() => {
                                window.updateGamepadMapping(
                                  this.value,
                                  this.name
                                );
                              }}
                            ></select>
                          </div>
                          <div>
                            <label>deadZone:</label>
                            <input
                              type="number"
                              value="0.3"
                              min="0"
                              max="1"
                              step="0.01"
                              className="form-control"
                              onchange={() => {
                                window.updateDeadZone(this.value);
                              }}
                            />
                          </div>
                          <div>
                            <label>Minimap:</label>
                            <select
                              gamepadButton
                              name="map"
                              onchange={() => {
                                window.updateGamepadMapping(
                                  this.value,
                                  this.name
                                );
                              }}
                            ></select>
                          </div>
                          <div>
                            <label>Taunts:</label>
                            <select
                              gamepadButton
                              name="taunt"
                              onchange={() => {
                                window.updateGamepadMapping(
                                  this.value,
                                  this.name
                                );
                              }}
                            ></select>
                          </div>
                          <div>
                            <label>Glider:</label>
                            <select
                              gamepadButton
                              name="parachute"
                              onchange={() => {
                                window.updateGamepadMapping(
                                  this.value,
                                  this.name
                                );
                              }}
                            ></select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Controls and customization --> */}
                  <div id="greenControls">
                    <button
                      type="button"
                      className="yellow-button"
                      data-placement="bottom"
                      onclick={() => {
                        window.switchbox();
                      }}
                    >
                      <div className="sm64button">Return</div>
                    </button>
                    <button
                      type="button"
                      className="blue-button"
                      onclick={() => {
                        window.switchbox("optionsbox");
                      }}
                    >
                      <div className="sm64button">Options & Misc</div>
                    </button>
                    <button
                      type="button"
                      className="pink-button"
                      onclick={() => {
                        window.switchbox("customizebox");
                        window.updateWheel();
                      }}
                    >
                      <div className="sm64button">
                        Customize Character / Skin
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Game canvas container --> */}
            <div id="gameContainer">
              <div id="relativePositioner">
                <div id="moveLeft">
                  <canvas id="textCanvas"></canvas>
                  {/* ><!-- HUD, NOT CHAT --> */}
                  <canvas id="fxCanvas"></canvas>
                  {/* ><!-- Snow --> */}
                  <div id="canvasContainer"></div>
                  <canvas id="gameCanvas" width="1280" height="720"></canvas>
                </div>
              </div>
              {/* <!-- Chat container --> */}
              <div id="chatContainer">
                <ul id="chatlog"></ul>
                <input
                  id="chatbox"
                  className="chatbox"
                  type="text"
                  autocomplete="off"
                  maxlength="120"
                  placeholder="Chat box, to block someone type '/block username'"
                />
              </div>
            </div>
            {/* <!-- End of game canvas --> */}
            <div className="siteMargins">
              {/* <!-- Disconnected from the game/server message --> */}
              <h6 id="connectedMsg">
                Not connected to server - Refresh the page
              </h6>
              {/* <!-- Music section --> */}
              <div id="musicDiv">
                <h4>Music</h4>
                <div className="row">
                  <div className="col-6">
                    <h5>Bob-omb Battlefield Anniversary by eros71</h5>
                  </div>
                  <div className="col-6">
                    <audio controls="" loop="" id="anniversary">
                      <source
                        src="assets/audio/anniversary.mp3"
                        type="audio/mp3"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <h5>Snow Mountain DX by eros71</h5>
                  </div>
                  <div className="col-6">
                    <audio controls="" loop="" id="snow">
                      <source
                        src="https://sm64js.nyc3.cdn.digitaloceanspaces.com/sm64js-music/Snow%20Mountain%20DX.wav"
                        type="audio/wav"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <h5>Bob-omb Peaceful-Field by eros71</h5>
                  </div>
                  <div className="col-6">
                    <audio controls="" loop="">
                      <source
                        src="https://sm64js.nyc3.cdn.digitaloceanspaces.com/sm64js-music/Bob-omb%20Peaceful-Field.wav"
                        type="audio/wav"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <h5>Mario Filled Field by Belgium</h5>
                  </div>
                  <div className="col-6">
                    <audio controls="" loop="" id="grass">
                      <source
                        src="https://sm64js.nyc3.cdn.digitaloceanspaces.com/sm64js-music/Mario%20Filled%20Field.mp3"
                        type="audio/mp3"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <h5>ASRA '95 by kiwen Sapi</h5>
                  </div>
                  <div className="col-6">
                    <audio controls="" loop="" id="clouded">
                      <source src="assets/audio/clouded.mp3" type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <h5>SM64JS File Select Remix by Subject to Change</h5>
                  </div>
                  <div className="col-6">
                    <audio controls="" loop="">
                      <source
                        src="https://sm64js.nyc3.cdn.digitaloceanspaces.com/sm64js-music/SM64JS%20File%20Select%20Remix.wav"
                        type="audio/wav"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <h5>Beware the Forest Mushrooms SM64 Remix by NH1507</h5>
                  </div>
                  <div className="col-6">
                    <audio controls="" loop="" id="jungle">
                      <source src="assets/audio/forest.mp3" type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </div>
              {/* <!-- End of Music section--> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
