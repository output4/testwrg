import React, {useState} from 'react';
import MultilineCut from '../components/MultilineCut';
import useNumber from '../components/useNumber';

const TEXT = 'Война — это место, где молодые люди, которые не знают друг друга и не ненавидят друг друга, убивают друг друга по решению стариков, которые знают и ненавидят друг друга, но не убивают друг друга. / Эрих Хартманн / ';

function SecondTask() {
    const [text, setText] = useState(TEXT);
    const [width, setWidth] = useNumber(350, 1, 1000);
    const [height, setHeight] = useNumber(75, 19, 500);

    return (
        <div className={'app-firstTask'}>
            <div className="app-firstTask-config">
                <h4>Settings</h4>
                <label htmlFor="text">
                    <textarea className={'app-firstTask-config-textarea'} placeholder={'Enter the text'} onChange={(e) => setText(e.target.value)}>{TEXT}</textarea>
                </label><br/>
                <label htmlFor="width">
                    Width: <input type={'number'} value={width} onChange={(e) => setWidth(e)}/>
                </label><br/>
                <label htmlFor="height">
                    Height: <input type={'number'} value={height} onChange={(e) => setHeight(e)}/>
                </label>
            </div>
            <div className="app-firstTask-workspace2" style={{height: `${height}px`, width: `${width}px`}}>
                <MultilineCut text={text} key={`${height}-${width}`} />
            </div>
        </div>
    )
}

export default SecondTask;
