import React from "react";
import { Button } from "react-bootstrap";

function Btn(props) {
    return (
    <>
    <Button variant="info" onClick= {() => alert(`${props.children}`)}>Info</Button>
    </>
    )
}


export default Btn;