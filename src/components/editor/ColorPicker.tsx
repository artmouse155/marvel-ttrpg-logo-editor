import { Button, Form } from "react-bootstrap";

interface Props {
    color: string;
    defaultColor: string;
    readonly description: string;
    setColor: (color: string) => unknown;
}

export const ColorPicker = (props: Props) => {
    const reset = () => {
        props.setColor(props.defaultColor);
    };

    const getButtonDisabled = () => {
        return props.color === props.defaultColor;
    };

    return (
        <div className="ColorPicker d-flex align-items-center justify-content-end bg-light m-3 border rounded">
            <Form.Label htmlFor={`color`} className="m-2">
                {props.description}
            </Form.Label>
            <Form.Control
                type="color"
                id={"exampleColorInput"}
                value={props.color}
                // title="Choose your color"
                onChange={event => props.setColor(event.target.value)}
                className="m-2 p-0"
            />
            <Button
                onClick={reset}
                disabled={getButtonDisabled()}
                className="m-2"
            >
                Reset
            </Button>{" "}
        </div>
    );
};
