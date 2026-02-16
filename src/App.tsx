import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Editor } from "./components/editor/Editor";
import { useGalleryColors } from "./components/gallery/useGalleryColors";
import { useEffect, useState } from "react";
import { GalleryItem } from "./components/gallery/GalleryItem";
import { useEditorColors } from "./components/editor/useEditorColors";
import { Button, Dropdown, Form, InputGroup, Modal } from "react-bootstrap";

export const App = () => {
    const { colorsList, deleteColorsAtIndex, deleteAllColors } =
        useGalleryColors();
    const { setColors } = useEditorColors();

    const [showDeleteAllModal, setShowDeleteAllModal] = useState(false);
    const [showShareLinkModal, setShowShareLinkModal] = useState(false);

    useEffect(() => {
        console.log("colorsList equals:", colorsList);
    }, [colorsList]);

    return (
        <div className="App d-md-flex flex-column align-items-center">
            <Modal
                show={showShareLinkModal}
                onHide={() => setShowShareLinkModal(false)}
                id="modal-share-link"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Share Gallery</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Share this link with a friend to share your logo
                        designs!
                    </p>
                    <InputGroup className="mb-3">
                        <Form.Control
                            type="text"
                            value="https://beans"
                            aria-label="Disabled input example"
                            className="user-select-all"
                            readOnly
                        />
                        <Button
                            variant="outline-secondary"
                            id="button-addon2"
                            onClick={() =>
                                navigator.clipboard.writeText("beans")
                            }
                        >
                            Copy
                        </Button>
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        onClick={() => setShowShareLinkModal(false)}
                    >
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal
                show={showDeleteAllModal}
                onHide={() => setShowDeleteAllModal(true)}
                id="modal-delete-all"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Whoa there! Are you sure you want to delete your{" "}
                    <b>entire</b> gallery? There is no undoing this.
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setShowDeleteAllModal(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            deleteAllColors();
                            setShowDeleteAllModal(false);
                        }}
                    >
                        Delete all
                    </Button>
                </Modal.Footer>
            </Modal>
            <h1 className="Title text-center m-2">Marvel TTRPG Logo Editor</h1>
            <Editor />
            <h1 className="Title text-center m-2">My Gallery</h1>
            {colorsList.length > 0 ?
                <>
                    <Dropdown className="m-2">
                        <Dropdown.Toggle
                            variant="secondary"
                            id="dropdown-basic"
                        >
                            Gallery Actions
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item
                                hidden
                                onClick={() => setShowShareLinkModal(true)}
                            >
                                ↗️ Copy share Link
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => setShowDeleteAllModal(true)}
                            >
                                🗑️ Delete gallery
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                        {colorsList.map((colors, index) => (
                            <GalleryItem
                                key={index}
                                colors={colors}
                                index={index}
                                deleteThis={() => deleteColorsAtIndex(index)}
                                loadThis={() => {
                                    setColors(colorsList[index]);
                                }}
                            />
                        ))}
                    </div>
                </>
            :   <p className="text-center">
                    No Logos in Gallery yet. Press "Save" to add one!
                </p>
            }
        </div>
    );
};
