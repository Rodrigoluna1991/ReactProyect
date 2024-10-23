// src/components/ItemListContainer.jsx

import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) => {
    return <h1>{greeting}</h1>;
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,  
};

export default ItemListContainer;
