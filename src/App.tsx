import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Editor } from "./components/editor/Editor";
import { useGalleryColors } from "./components/gallery/useGalleryColors";
import { useEffect } from "react";
import { GalleryItem } from "./components/GalleryItem";

export const App = () => {
    const { colorsList, deleteColorsAtIndex } = useGalleryColors();

    useEffect(() => {
        console.log("colorsList equals:", colorsList);
    }, [colorsList]);

    return (
        <div className="App d-md-flex flex-column align-items-center">
            <h1 className="Title text-center">Marvel TTRPG Logo Editor</h1>
            <Editor />
            <h1 className="Title text-center">My Gallery</h1>
            {colorsList.length > 0 ?
                <div className="d-flex flex-wrap justify-content-center gap-2">
                    {colorsList.map((colors, index) => (
                        <GalleryItem
                            colors={colors}
                            index={index}
                            deleteThis={() => deleteColorsAtIndex(index)}
                        />
                    ))}
                </div>
            :   <p>No Logos in Gallery yet. Press "Save" to add one!</p>}
        </div>
    );
};
