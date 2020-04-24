import {useVideo} from 'react-use';
import React from 'react';
import Slider from '@material-ui/core/Slider';

const EditVideo = () => {
    const [value, setValue] = React.useState(30);
    const handleChange = (event : any , newValue : any) => {
        setValue(newValue);
    };
    const [video, state, controls, ref] = useVideo(
        <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" autoPlay />)
    return <div>
        {video}
        <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        <pre>{JSON.stringify(state, null, 2)}</pre>
        <button onClick={controls.pause}>Pause</button>
        <button onClick={controls.play}>Play</button>
        <br/>
        <button onClick={controls.mute}>Mute</button>
        <button onClick={controls.unmute}>Un-mute</button>
        <br/>
        <button onClick={() => controls.volume(.1)}>Volume: 10%</button>
        <button onClick={() => controls.volume(.5)}>Volume: 50%</button>
        <button onClick={() => controls.volume(1)}>Volume: 100%</button>
        <br/>
        <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
        <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>

    </div>

};
export default EditVideo