import PropTypes from "prop-types"
import s from "./ProductCard.module.css";

const Product = props => {
    const { url, title, price } = props;

    
    return (
        <div >
            <img className={s.CardImg} src={url} alt={title}  />
            <h2>{title}</h2>
            <p>Price:{price} usd</p>
            <button className={s.Btn} type="button">Замовити Тур</button>
        </div>
    );
};

Product.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired

}

export default Product;