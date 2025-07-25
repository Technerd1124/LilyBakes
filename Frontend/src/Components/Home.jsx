import { assets } from "../assets/assest";
import "../Styles/home.scss";

export default function Home() {
  return (
    <div>
      <div className="homebody">
        <img src={assets.banner1} alt="IMG1" id="banner1" />
        <img src={assets.banner2} alt="IMG2" id="banner2" />
      </div>
    </div>
  );
}
