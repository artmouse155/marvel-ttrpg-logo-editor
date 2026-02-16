import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Editor } from "./components/editor/Editor";
import { useGalleryColors } from "./components/gallery/useGalleryColors";
import { useEffect } from "react";
import { GalleryItem } from "./components/gallery/GalleryItem";
import { useEditorColors } from "./components/editor/useEditorColors";
import { Dropdown } from "react-bootstrap";

export const App = () => {
    const { colorsList, deleteColorsAtIndex } = useGalleryColors();
    const { setColors } = useEditorColors();

    useEffect(() => {
        console.log("colorsList equals:", colorsList);
    }, [colorsList]);

    return (
        <div className="App d-md-flex flex-column align-items-center">
            <h1 className="Title text-center">Marvel TTRPG Logo Editor</h1>
            <Editor />
            <h1 className="Title text-center">My Gallery</h1>
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
                            <Dropdown.Item onClick={() => {}}>
                                🗑️ Delete All (NO UNDO)
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
