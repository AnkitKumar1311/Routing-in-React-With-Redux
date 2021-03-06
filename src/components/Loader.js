import React from 'react';

const Loader = () => {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center" style={{padding : "50px"}}>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Loader;