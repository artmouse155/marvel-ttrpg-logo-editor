import { Dropdown } from "react-bootstrap";
import { Logo, type LogoColors } from "./Logo";

interface Props {
    colors: LogoColors;
    index: number;
    deleteThis: () => void;
}

export const GalleryItem = (props: Props) => {
    return (
        <div className="border rounded p-3">
            <Logo colors={props.colors} id={`my-gallery-${props.index}`} />
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Actions
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={props.deleteThis}>
                        🗑️ Delete
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="#/action-2">
                        Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                        Something else
                    </Dropdown.Item> */}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};
