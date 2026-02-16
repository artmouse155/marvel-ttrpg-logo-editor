import { Dropdown } from "react-bootstrap";
import { Logo, type LogoColors } from "../Logo";
import { useRef } from "react";

interface Props {
    colors: LogoColors;
    index: number;
    deleteThis: () => void;
    loadThis: () => void;
}

export const GalleryItem = (props: Props) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const downloadAsImage = () => {
        const svg = svgRef.current!;
        const canvas = document.createElement("canvas");
        canvas.width = svg.clientWidth;
        canvas.height = svg.clientHeight;
        const img = new Image();
        const serializer = new XMLSerializer();
        const svgXml = serializer.serializeToString(svg);

        const svg64 = btoa(svgXml);
        const image64 = "data:image/svg+xml;base64," + svg64;

        img.src = image64;

        img.onload = function () {
            canvas.getContext("2d")?.drawImage(img, 0, 0);
            const a = document.createElement("a");
            a.download = "logo.png";
            a.href = canvas.toDataURL();
            a.click();
        };
    };

    return (
        <div className="border rounded p-3">
            <Logo
                colors={props.colors}
                id={`my-gallery-${props.index}`}
                ref={svgRef}
            />
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Actions
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={props.loadThis}>
                        ✏️ Edit this
                    </Dropdown.Item>
                    <Dropdown.Item onClick={downloadAsImage}>
                        ⬇️ Download as PNG
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={props.deleteThis}>
                        🗑️ Delete
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};
