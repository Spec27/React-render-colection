import PropTypes from "prop-types"
import defaultImg from './default.jpg';
import s from './Panting.module.css'

const Panting = props => {
  const {
    imgUrl = defaultImg,
    title,
    authorName = "невідомо",
    profileUrl,
    price,
    quantity } = props;
  
    return (
      <div className={s.Container}>
        <img src={imgUrl} alt={title} width="480" />
        <h2>{title}</h2>
        <p>
          Avthor: <a href={profileUrl}>{authorName}</a>
        </p>
        <p>Price:{price} usd</p>
        <p>Залишок: {quantity <10 ? "Закінчується" : "Ще багато на складі"}</p>
        <button type="button">Add to cart</button>

      </div>
    );
};
  
Panting.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity :PropTypes.number.isRequired
}
  
  export default Panting;


  



