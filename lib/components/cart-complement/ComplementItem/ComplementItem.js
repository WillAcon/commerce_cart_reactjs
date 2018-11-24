import React from 'react';
import PropTypes from 'prop-types';

const ComplementItem = ({data,classes, onComplementItemClick}) => {
    return (
        <div className="column is-one-quarter compl-col">
            <div className={classes} onClick={() => onComplementItemClick(data)}>
                <div className="complement__item__content">
                <div  className="image-co"><img src={data.image} /></div>
                <div className="complement__item__textarea">
                    <div  className="title-co">{data.producto}</div>
                    <div className="price-co">{data.price__number}</div>
                </div>
                </div>
            </div>
       </div>
    );
};

ComplementItem.propTypes = {
    data: PropTypes.shape({
        
    }),
};

export default ComplementItem;