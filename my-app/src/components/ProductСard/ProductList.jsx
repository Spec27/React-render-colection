import Product from "./Product";
import PropTypes from "prop-types";
import s from "./ProductCard.module.css"


function ProductList({ items }) {
    return (
        
          <ul className={s.Product} >
            {items.map(item =>
                <li key={item.id} className={s.ItemContainer}>
                    <Product
                        url={item.url}
                        title={item.title}
                        price={item.price}
                    />
                </li>
            )}
        </ul>
        
    );
};

ProductList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
    }))
}


export default ProductList;