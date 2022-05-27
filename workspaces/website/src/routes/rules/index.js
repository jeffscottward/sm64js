import { h } from "preact";

const Rules = () => (
  <div className="page">
    <div className="page-contents">
      <h1>Rules</h1>
      <p>
        Welcome to the multiplayer version of sm64js! To play you have to follow
        the listed rules below.
      </p>
      <hr />
      <p>Treat all users with respect.</p>
      <p>
        Keep chat messages appropriate and safe for school/work, swearing will
        be censored, do not evade the filter. Slurs and vulgar language are also
        disallowed.
      </p>
      <p>
        Don't share information on how to illegally obtain any copyrighted
        material such as ROMs or ROM assets.
      </p>
      <p>
        Inappropriate or offensive behavior may result in a temporary or
        permanent mute or ban.
      </p>
      <p>
        Failure to comply with these rules will result in punishment, including
        but not limited to a mute or ban of your account.
      </p>
      <button type="button" className="rulesButton" id="acceptRules">
        <div className="sm64button">
          I have read the rules and will follow them.
        </div>
      </button>
      <hr />
      <p>
        If you are looking for a more completed version of sm64js without our
        custom features, check out{" "}
        <a href="https://Agent-11.github.io/projects/sm64js">Vanilla</a>.
      </p>
    </div>
  </div>
);

export default Rules;
