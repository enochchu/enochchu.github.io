import React, {ReactElement} from "react";

export interface CalloutProps {
    header: string,
    content: string
}

export function Callout(props: CalloutProps): ReactElement {
    return (
        <div style={{
            backgroundColor: "#1B0D22",
            borderBottomWidth: "0.25em",
            borderColor: "#8844AA",
            borderLeftWidth: "1em",
            borderRightWidth: "0.25em",
            borderStyle: "solid",
            borderTopWidth: "0.25em",
            borderWidth: "0.25em 0.25em 0.25em 1em",
            color: "#A38ADA",
            lineHeight: "1.5em",
            margin: "2em"
        }}>
            <div style={{padding: "1em"}}>
                <h2>{ props.header }</h2>
                <div>
                    { props.content }
                </div>
            </div>
        </div>
    )
}