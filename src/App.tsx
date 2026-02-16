import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Editor } from "./components/editor/Editor";
import { useGalleryColors } from "./components/gallery/useGalleryColors";
import { useEffect, useState } from "react";
import { GalleryItem } from "./components/gallery/GalleryItem";
import { useEditorColors } from "./components/editor/useEditorColors";
import { Button, Dropdown, Modal } from "react-bootstrap";

export const App = () => {
    const { colorsList, deleteColorsAtIndex, deleteAllColors } =
        useGalleryColors();
    const { setColors } = useEditorColors();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        console.log("colorsList equals:", colorsList);
    }, [colorsList]);

    return (
        <div className="App d-md-flex flex-column align-items-center">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Whoa there! Are you sure you want to delete your{" "}
                    <b>entire</b> gallery? There is no undoing this.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            deleteAllColors();
                            handleClose();
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
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Gallery Actions
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => {}}>
                                ↗️ Copy share Link
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handleShow}>
                                🗑️ Delete gallery
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                        {colorsList.map((colors, index) => (
                            <GalleryItem
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
            :   <p>No Logos in Gallery yet. Press "Save" to add one!</p>}
        </div>
    );
};
