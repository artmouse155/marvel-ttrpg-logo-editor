import { ColorPicker } from "./ColorPicker";
import { DEFAULT_COLORS, Logo } from "../Logo";
import { Button } from "react-bootstrap";
import { useGalleryColors } from "../gallery/useGalleryColors";
import { useEditorColors } from "./useEditorColors";

export const Editor = () => {
    const { colors, setColors } = useEditorColors();
    const { addColors } = useGalleryColors();

    return (
        <div className="Editor d-flex justify-content-center align-items-center">
            <Logo colors={colors} id="editor" />
            <div className="p-3 d-flex flex-column align-items-stretch gap-2">
                <ColorPicker
                    color={colors.flameBaseColor}
                    setColor={flameBaseColor => {
                        setColors({ ...colors, flameBaseColor });
                    }}
                    defaultColor={DEFAULT_COLORS.flameBaseColor}
                    description="Flame Base Color"
                />
                <ColorPicker
                    color={colors.flameTipColor}
                    setColor={flameTipColor => {
                        setColors({ ...colors, flameTipColor });
                    }}
                    defaultColor={DEFAULT_COLORS.flameTipColor}
                    description="Flame Tip Color"
                />
                <ColorPicker
                    color={colors.letterColor}
                    setColor={letterColor => {
                        setColors({ ...colors, letterColor });
                    }}
                    defaultColor={DEFAULT_COLORS.letterColor}
                    description="Letter Color"
                />
                <ColorPicker
                    color={colors.backgroundColor}
                    setColor={backgroundColor => {
                        setColors({ ...colors, backgroundColor });
                    }}
                    defaultColor={DEFAULT_COLORS.backgroundColor}
                    description="Background Color"
                />
                <Button onClick={() => addColors(colors)}>Save</Button>
            </div>
        </div>
    );
};
