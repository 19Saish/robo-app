import React from "react";

const Scroll = (props) => {
return (
    <div style={{overflow: 'scroll', border: '2px solid purple', height: '900px'}}>
        {props.children}
    </div>
);
}

export default Scroll;