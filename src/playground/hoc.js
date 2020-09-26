import React from 'react';
import ReactDOM from 'react-dom';

const info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Balablablaa</p>}
            <WrappedComponent {...props }/>
        </div>
    );
};

const adminInfo = withAdminWarning(Info);

ReactDOM.render(<adminInfo isAdmin={false} info="There are the details" />, document.getElementById('app'));