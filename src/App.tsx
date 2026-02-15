import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { Logo, type LogoColors } from "./components/Logo";
import { Editor } from "./components/Editor";

export const App = () => {
    const [saves, setSaves] = useState<LogoColors[]>([]);

    return (
        <div className="App d-md-flex flex-column align-items-center">
            <h1 className="Title text-center">Marvel TTRPG Logo Editor</h1>
            <Editor addSave={save => setSaves([save])} />
            {saves.map(colors => (
                <Logo {...colors} />
            ))}
        </div>
    );
};
