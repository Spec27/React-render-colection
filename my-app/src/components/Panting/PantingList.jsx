import Panting from "./Panting";
import PropTypes from "prop-types"


function PantingList({ items }) {
    return (
        <ul >
            {items.map(item => 
                <li key={item.id}>
                    <Panting
                        imgUrl={item.url}
                        title={item.title}
                        authorName={item.author.tag}
                        profileUrl={item.author.url}
                        price={item.price}
                        quantity={item.quantity}
                    />
                </li>
            )}
        </ul>
    );
}

PantingList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
};
export default PantingList;