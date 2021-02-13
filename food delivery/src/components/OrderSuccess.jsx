import React from "react";

const OrderSuccess = (props)=>{
    return(
        <div className="conatiner-fluid border">
        <h3 className="text-success">Mr/Mrs {props.n}, We got your Order</h3>
        <h5 className="text-primary">It will be delivered to you on your given address after verifying {props.addr}</h5>
        </div>
    );
}
export default OrderSuccess;