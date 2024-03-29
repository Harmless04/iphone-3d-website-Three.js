import react from "react";
function SoundSection() {
  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section content content">
          <h2 className="title">New sound system</h2>
          <p className="text"> Feel the base.</p>
          <span className="description ">
            <ul className="links">
              <li>
                <button className="button"> Buy</button>
              </li>
              <a className="link">Learn more</a>
            </ul>
            From $41.62/mo for 24 mo. or $999 before trade-in
          </span>
        </div>
      </div>
    </div>
  );
}

export default SoundSection;
