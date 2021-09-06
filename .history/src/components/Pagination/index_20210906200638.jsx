import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange = null,
}

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { _page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _)

    function handlePageChange(newPage) {
        if(onPageChange) {
            onPageChange(newPage)
        }
    }

    return (
        <div>
            
        </div>
    );
}

export default Pagination;