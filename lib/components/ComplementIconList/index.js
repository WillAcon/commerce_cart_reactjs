import React from 'react';
import PropTypes from 'prop-types';
import ComplementIcon from './ComplementIcon';

const ComplementIconList = ({complements, onSelectedComplement}) => {
    const handleComplementClick = type => {
        onSelectedComplement(type);
    }
    const strToComponents = complements =>(
        complements.map( complement => (
            <ComplementIcon
            key={complement.type}
            classIcon = {complement.classIcon}
            onComplementClick={() => handleComplementClick(complement.type)} />
        ))
    );

    return (
        <div className="ctn-product-detaills">
            <div className="ctn-product-detaills-text">Complemento:</div> 
            <ul className="ctn-product-detaills-icon">
                {strToComponents(complements)}
            </ul>
        </div>
    );
};

ComplementIconList.propTypes = {
    complements: PropTypes.array.isRequired,
    onSelectedComplement: PropTypes.func,
};

export default ComplementIconList;