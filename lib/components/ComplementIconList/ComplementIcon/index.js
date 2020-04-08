import React from 'react';
import PropTypes from 'prop-types';

const ComplementIcon = ({onComplementClick, classIcon}) => (
        <li className="btn-complements" onClick={onComplementClick}>
            <a><span className={`icon-item ${classIcon}`}></span></a>
        </li>
    );

ComplementIcon.propTypes = {
    classIcon: PropTypes.string,
    onComplementClick: PropTypes.func,
};

export default ComplementIcon;