import React from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
    onSubmit: null,
}

function PostFilterForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('')

    function handleSearchTermChange(e) {
        setSearchTerm(e.target.value)

        if(!onSubmit) return;

        const formValues = {
            searchTerm,
        }

        onSubmit(formValues)
    }

    return (
        <form>
           <input type="text" va /> 
        </form>
    );
}

export default PostFilterForm;