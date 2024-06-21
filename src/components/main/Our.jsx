import "./Our.scss";
import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.png";
import product5 from "../../assets/images/product5.png";

const Our = () => {
  return (
    <div className="Our">
      <div className="container">
        <div className="our-text">
          <h1>
            Наша <span>продукция</span>
          </h1>
        </div>
        <div className="our-btns">
          <button>Ламинатные тубы</button>
          <button>Экструзионные тубы</button>
          <button>Другая упаковка</button>
        </div>
        <div className="our-images">
          <img src={product1} alt="" />
          <img src={product2} alt="" />
          <img src={product3} alt="" />
          <img src={product4} alt="" />
          <img src={product5} alt="" />
        </div>
        <div className="catalog-btn">
          <button>Перейти в каталог</button>
        </div>
      </div>
    </div>
  );
};

export default Our;
