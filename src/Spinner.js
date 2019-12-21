import React from 'react';

const Spinner = (props) => {
    return (
        <div class="ui active dimmer">
            <div class="ui loader massive text">{props.msg}</div>
        </div>
    );
}

Spinner.defaultProps = {
    msg: 'Loading...'
}

export default Spinner;