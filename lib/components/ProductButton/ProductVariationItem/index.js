import React from 'react';
import PropTypes from 'prop-types';


const ProductVariationItem = ({
    id_variation,
    onBuyProductClick}) =>(
        <div className="ctn-product-data">
            <div className="ctn-product-value">
                <input onClick={()=>onBuyProductClick(id_variation,1)} class="button is-custom is-uppercase" value="Añadir al carrito" />
            </div>
        </div>
    );
ProductVariationItem.propTypes = {
    variation: PropTypes.shape({
        id_variation: PropTypes.number.isRequired,
    }),

};

export default ProductVariationItem;