import React, {useEffect, useRef} from 'react';

interface IProps {
    value: number;
}

const BOAT_WIDTH = 40;
export default (props: IProps) => {
    const activeBar = useRef<HTMLDivElement>(null);
    const boat = useRef<HTMLDivElement>(null);
    const text = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (activeBar.current && boat.current && text.current) {
            const size = activeBar.current.getBoundingClientRect();
            const parent = activeBar.current.parentNode as HTMLDivElement;
            const parentSize = parent.getBoundingClientRect();
            const diff = parentSize.width - size.width;
            let mrg;
            if (diff <= BOAT_WIDTH) {
                mrg = -(BOAT_WIDTH + (BOAT_WIDTH - diff));
            } else if (size.width <= BOAT_WIDTH) {
                mrg = -(BOAT_WIDTH - (BOAT_WIDTH - size.width));
            } else {
                mrg = -BOAT_WIDTH;
            }
            boat.current.style.left = `${props.value}%`;
            boat.current.style.marginLeft = `${mrg}px`;
            text.current.style.left = `${props.value}%`;
            text.current.style.marginLeft = `${mrg}px`;
        }
    }, [props.value])


    return (
        <div className={'boatProgressBar'}>
            <div className="boatProgressBar-values">
                <div ref={text} className="boatProgressBar-values-number">
                    {formatNumber(props.value * 100)}
                </div>
            </div>
            <div className="boatProgressBar-boat">
                <div ref={boat} className="boatProgressBar-boat-block"/>
            </div>
            <div className="boatProgressBar-waves">
                <div className="boatProgressBar-waves-effect" style={{left: `${props.value}%`}}/>
            </div>
            <div className="boatProgressBar-bar">
                <div ref={activeBar} className="boatProgressBar-bar-active" style={{width: `${props.value}%`}}>
                    <div className="boatProgressBar-bar-active-gradient">
                        <div className="boatProgressBar-bar-active-gradient-marker" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function formatNumber(v: number): string {
    return `${new Intl.NumberFormat().format(v)}`;
}
