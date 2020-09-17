import React from "react"; 

function Log(props) {
    const { user, password} = props.item;

    const logStyle = {
        'user' :  props.item.user,
        'password' : props.item.password
      }

    return (
    <div style={logStyle}>
    </div>
    )
}
export default Log;