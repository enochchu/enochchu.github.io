import React, {ReactElement} from "react";
import {Terminal} from "../components/Terminal/Terminal";
import {Callout} from "../components/ui/Callout/Callout";

export function UIPage(): ReactElement {
    return (
        <div>
            UI Page

            <div>
                <Callout
                    header={"Hello"}
                    content={"Hello World World!"} />
            </div>

            <div>
                <Terminal />
            </div>
        </div>
    )
}