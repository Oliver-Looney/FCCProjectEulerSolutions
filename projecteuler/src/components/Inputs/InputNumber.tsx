import * as React from "react";
import {ChangeEvent, FC, memo} from "react";

const sectionStyle = {
    border: 'thin solid black',
    width: '50%', padding: '1em'
};

export interface InnerProps {
    onClick(): void;

    onChange(e: ChangeEvent<HTMLInputElement>): void;

    text: string;
    values: Set<string>;
}

export const InputNumber: FC<InnerProps> = (props) => {
    return (<div>
        <section style={sectionStyle}>
            <h4>Type in new text:</h4>
            <div>
                <input type="text"
                       onChange={props.onChange}
                       value={props.text}/>
                <button onClick={props.onClick}>Push To Update</button>
            </div>
        </section>
    </div>);
}
