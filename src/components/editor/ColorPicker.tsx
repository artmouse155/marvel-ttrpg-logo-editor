import { Button, Form, Modal } from "react-bootstrap";
import { Sketch } from "@uiw/react-color";
import { useState } from "react";

interface Props {
    color: string;
    defaultColor: string;
    readonly description: string;
    setColor: (color: string) => unknown;
}

export const ColorPicker = (props: Props) => {
    const [show, setShow] = useState(false);

    const reset = () => {
        props.setColor(props.defaultColor);
    };

    const getButtonDisabled = () => {
        return props.color === props.defaultColor;
    };

    return (
        <>
            <Modal
                size="sm"
                show={show}
                onHide={() => setShow(false)}
                id="modal-delete-all"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Color</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Sketch
                        style={{ marginLeft: 20 }}
                        color={props.color}
                        onChange={color => {
                            props.setColor(color.hex);
                        }}
                        disableAlpha
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        onClick={() => {
                            setShow(false);
                        }}
                    >
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="ColorPicker d-flex align-items-center justify-content-end bg-light border rounded gap-2 p-2">
                <Form.Label htmlFor={`color`}>{props.description}</Form.Label>
                <Button onClick={() => setShow(true)}>Edit Color</Button>
                <Button onClick={reset} disabled={getButtonDisabled()}>
                    Reset
                </Button>{" "}
            </div>
        </>
    );
};
