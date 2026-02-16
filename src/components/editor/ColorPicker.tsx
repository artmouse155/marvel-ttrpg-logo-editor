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
                show={show}
                onHide={() => setShow(false)}
                id="modal-delete-all"
                dialogClassName="small-modal"
                centered
                // style={{
                //     position: "fixed",
                //     maxWidth: "fit-content",
                // }}
            >
                {/* <Modal.Header closeButton>
                    <Modal.Title>Edit Color</Modal.Title>
                </Modal.Header> */}
                {/* <Modal.Body> */}
                <Sketch
                    color={props.color}
                    onChange={color => {
                        props.setColor(color.hex);
                    }}
                    disableAlpha
                />
                {/* </Modal.Body> */}
                <Modal.Footer>
                    <Button
                        variant="primary"
                        style={{ width: "200%" }}
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
                <Button
                    onClick={() => setShow(true)}
                    style={{
                        backgroundColor: props.color,
                        borderColor: "black",
                    }}
                    className="p-3"
                ></Button>
                <Button onClick={reset} disabled={getButtonDisabled()}>
                    Reset
                </Button>{" "}
            </div>
        </>
    );
};
