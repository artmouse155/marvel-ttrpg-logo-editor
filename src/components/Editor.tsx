import { useState } from "react";
import { ColorPicker } from "./ColorPicker";
import { DEFAULT_COLORS, Logo, type LogoColors } from "./Logo";
import { Button } from "react-bootstrap";

interface Props {
    addSave: (save: LogoColors) => unknown;
}

export const Editor = (props: Props) => {
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

    return (
        <div className="Editor">
            <div className="d-flex justify-content-center">
                <Logo
                    flameBaseColor={flameBaseColor}
                    flameTipColor={flameTipColor}
                    letterColor={letterColor}
                    backgroundColor={backgroundColor}
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
                    props.addSave({
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
