import React, {useEffect, useRef} from 'react';

interface IProps {
    text: string;
}

export default function (props: IProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            const parent = ref.current.parentElement;
            if (parent) {
                const size = parent.getBoundingClientRect();
                const style = window.getComputedStyle(parent, null).getPropertyValue('font-size');
                const fontSize = parseFloat(style) + 2;
                const count = Math.floor(size.height / fontSize);
                ref.current.style.webkitLineClamp = `${count}`;
            }
        }
    }, [props.text])

    return (
        <div ref={ref} className={'multilineCut'} title={props.text}>
            {props.text}
        </div>
    );
}
