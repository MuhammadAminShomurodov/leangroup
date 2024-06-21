import "./Information.scss";
import vector from "../../assets/images/Vector.svg";
import phone from "../../assets/images/phone.svg";

const Information = () => {
  return (
    <div className="Information">
      <div className="container">
        <div className="information-all">
          <div className="information-text">
            <h2>
              Получить подробную <span>информацию</span>
            </h2>
            <p>
              Просто заполните форму, наш менеджер свяжется с вами в ближайшее
              время
            </p>
          </div>
          <div className="information-inputs">
            <div className="input">
              <img src={vector} alt="Vector Icon" />
              <input type="text" placeholder="Ваше имя" />
            </div>
            <div className="input">
              <img src={phone} alt="Vector Icon" />
              <input type="tel" placeholder="+375 (29) 0000000" />
            </div>
          </div>
          <div className="input-text">
            <input type="text" placeholder="Комментарий" />
          </div>
          <div className="input-btn">
            <button>Получить информацию</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;