import React, {useState} from 'react';
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
    const typingTimeoutRef = useRef(null)

    function handleSearchTermChange(e) {
        const value = e.target.value;
        setSearchTerm(e.target.value)

        if(!onSubmit) return;

        const formValues = {
            searchTerm: e.target.value,
        }

        onSubmit(formValues)
    }

    return (
        <form>
           <input type="text" value={searchTerm} onChange={handleSearchTermChange} /> 
        </form>
    );
}

export default PostFilterForm;