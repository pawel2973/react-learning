import React from 'react';

//Normal JS function NOT component function(we don't receive props as arg)
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent/>
        </div>
    );
};

export default withClass;