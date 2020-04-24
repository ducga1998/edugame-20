import {useVideo} from 'react-use';
import React from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from "@material-ui/core";
const useStyles = makeStyles({
    root: {
        width: '50%',
    },
});
const EditVideo = () => {
    const classes = useStyles();
    const [video, state, controls, ref] = useVideo(<video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" />)

    const [perVideo, setPerVideo] = React.useState(30);
    const endTimeVideo = state.duration
    const handleChange = (event: any, value: any) => {
        setPerVideo(value);
        console.log("value",value,endTimeVideo * (value/ 100))
        const finalValue = parseFloat( (endTimeVideo * (value / 100)).toFixed())
        controls.seek(finalValue)
    };

    return <div className={classes.root}>

        <Grid item xs={12}>
            <Grid container justify="center" spacing={6}>
              <div>
                  {video}
                  <Slider step={0.5}
                          valueLabelDisplay="on"
                          value={perVideo}
                          onChange={handleChange}
                          aria-labelledby="continuous-slider"
                          valueLabelFormat ={state.time.toFixed()} 
                  />
              </div>
                <div>
                    them cau hoi
                </div>
            </Grid>
        </Grid>

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