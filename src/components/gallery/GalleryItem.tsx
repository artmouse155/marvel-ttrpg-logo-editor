import { Dropdown } from "react-bootstrap";
import { Logo, type LogoColors } from "../Logo";

interface Props {
    colors: LogoColors;
    index: number;
    deleteThis: () => void;
    loadThis: () => void;
}

export const GalleryItem = (props: Props) => {
    return (
        <div className="border rounded p-3">
            <Logo colors={props.colors} id={`my-gallery-${props.index}`} />
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Actions
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={props.loadThis}>
                        ↗️ Load This
                    </Dropdown.Item>
                    <Dropdown.Item onClick={props.deleteThis}>
                        🗑️ Delete
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};
