import { useState } from "react";
import { ColorPicker } from "./ColorPicker";
import { DEFAULT_COLORS, Logo } from "./Logo";
import { Button } from "react-bootstrap";
import { useColors } from "./colors/useColors";

export const Editor = () => {
    const [flameBaseColor, setFlameBaseColor] = useState(
        DEFAULT_COLORS.flameBaseColor,
    );
    const [flameTipColor, setFlameTipColor] = useState(
        DEFAULT_COLORS.flameTipColor,
    );
    const [letterColor, setLetterColor] = useState(DEFAULT_COLORS.letterColor);
    const [backgroundColor, setBackgroundColor] = useState(
        DEFAULT_COLORS.backgroundColor,
    );

    const { addColors } = useColors();

    return (
        <div className="Editor">
            <div className="d-flex justify-content-center">
                <Logo
                    colors={{
                        flameBaseColor,
                        flameTipColor,
                        letterColor,
                        backgroundColor,
                    }}
                    id="editor"
                />
                <div>
                    <ColorPicker
                        getColor={() => flameBaseColor}
                        setColor={setFlameBaseColor}
                        defaultColor={DEFAULT_COLORS.flameBaseColor}
                        description="Flame Base Color"
                    />
                    <ColorPicker
                        getColor={() => flameTipColor}
                        setColor={setFlameTipColor}
                        defaultColor={DEFAULT_COLORS.flameTipColor}
                        description="Flame Tip Color"
                    />
                    <ColorPicker
                        getColor={() => letterColor}
                        setColor={setLetterColor}
                        defaultColor={DEFAULT_COLORS.letterColor}
                        description="Letter Color"
                    />
                    <ColorPicker
                        getColor={() => backgroundColor}
                        setColor={setBackgroundColor}
                        defaultColor={DEFAULT_COLORS.backgroundColor}
                        description="Background Color"
                    />
                </div>
            </div>
            <Button
                onClick={() =>
                    addColors({
                        flameBaseColor,
                        flameTipColor,
                        letterColor,
                        backgroundColor,
                    })
                }
            >
                Save
            </Button>
        </div>
    );
};
