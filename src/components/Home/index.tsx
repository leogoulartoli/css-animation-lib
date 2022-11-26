import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <ul>
      <li>
        <Link to={"/effects/transition-timing"}>Transition Timing</Link>
      </li>
      <li>
        <Link to={"/effects/tranforms-2D"}>2D Transforms</Link>
      </li>
      <li>
        <Link to={"/effects/tranforms-3D"}>3D Transforms</Link>
      </li>
      <li>
        <Link to={"/effects/button-effects"}>Button Effects</Link>
      </li>
      <li>
        <Link to={"/effects/image-effects"}>Image Effects</Link>
      </li>
    </ul>
  );
};
