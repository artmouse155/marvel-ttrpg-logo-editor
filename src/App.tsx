import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Logo, DEFAULT_COLORS } from "./Logo";

export const App = () => {
    const [color, setColor] = useState("#563d7c");

    return (
        <>
            <Logo {...DEFAULT_COLORS} />
            <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
            <Form.Control
                type="color"
                id="exampleColorInput"
                value={color}
                title="Choose your color"
                onChange={event => setColor(event.target.value)}
            />
        </>
    );
};
