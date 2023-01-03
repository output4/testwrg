import React, {useState} from 'react';
import useNumber from '../components/useNumber';
import BoatProgressBar from '../components/BoatProgressBar';

// boat
function FirstTask() {
    const [value, setValue] = useNumber(50, 0, 100);
    return (
        <div className={'app-firstTask'}>
            <div className="app-firstTask-config">
                <h4>Settings</h4>
                <label htmlFor="percent">
                    Current value:
                    <input placeholder={'Enter percent of progress'}
                           className={'app-firstTask-config-input'}
                           type={'number'}
                           value={value}
                           id={'percent'}
                           onChange={(e) => setValue(e)}
                    />
                </label>
            </div>
            <div className="app-firstTask-workspace">
                <BoatProgressBar value={value}/>
            </div>
        </div>
    )
}

export default FirstTask;
