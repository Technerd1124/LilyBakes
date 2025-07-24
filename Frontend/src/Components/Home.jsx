import { assets } from "../assets/assest";
import "../Styles/home.scss";

export default function Home() {
  return (
    <div>
      <div className="homebody">
        <img src={assets.bakerybg2} alt="IMG1" />
        <img src={assets.bakerybg} alt="IMG2" />
      </div>
    </div>
  );
}
