import "./Quality.scss";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import controls from "../../assets/images/controls.svg";

const Quality = () => {
  return (
    <div className="Quality">
      <div className="container">
        <div className="quality-text">
          <span className="first">Качество продукции подтверждают</span>
          <span className="second">сертификаты</span>
        </div>
        <div className="carousel">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
        </div>
        <div className="controls">
          <img src={controls} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Quality;
