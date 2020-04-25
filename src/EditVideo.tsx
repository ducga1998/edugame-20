import { useVideo } from 'react-use';
import React from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from "@material-ui/core";
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});
const EditVideo = (props : any) => {
    const classes = useStyles();
    const [video, state, controls] = useVideo(<video src={props.src} />)
    const [perVideo, setPerVideo] = React.useState(0);
    const endTimeVideo = state.duration

    React.useEffect(() => {
        if (typeof perVideo === 'number' && perVideo > 0 && perVideo < 100) {
            controls.seek((perVideo / 100) * endTimeVideo)
        }
    }, [])
    const convertValueTimeToPer = (value: number) => {
        return parseFloat((endTimeVideo * (value / 100)).toFixed(2))
    }
    const handleChange = (event: any, value: any) => {
        setPerVideo(value);
        const finalValue = convertValueTimeToPer(value)
        controls.seek(finalValue)
    };
const [marks , setMarks] = React.useState([]) as any
const  handleMark =  () => {
    setMarks([...marks , ...[{value : perVideo  , label : state.time + '' }]])
}

    return <div className={classes.root}>
        <Grid item xs={12}>
            <Grid container justify="center" spacing={6}>
                <div>
                    {video}
                    <Slider
                    track="normal"
                        marks={marks}
                        step={0.5}
                        valueLabelDisplay="on"
                        value={perVideo}
                        onChange={handleChange}
                        aria-labelledby="continuous-slider"
                        valueLabelFormat={convertValueTimeToPer(state.time) + ''}
                    />
                </div>
                <div>
                {/* <AddQuestion /> */}
                    <button onClick={handleMark}>
                        mark 
                    </button>
                  
                </div>
            </Grid>
        </Grid>

        {/* <ControlVideo  /> */}
        {/*<pre>{JSON.stringify(state, null, 2)}</pre>*/}
        {/*<button onClick={controls.pause}>Pause</button>*/}
        {/*<button onClick={controls.play}>Play</button>*/}
        {/*<br />*/}
        {/*<button onClick={controls.mute}>Mute</button>*/}
        {/*<button onClick={controls.unmute}>Un-mute</button>*/}
        {/*<br />*/}
        {/*<button onClick={() => controls.volume(.1)}>Volume: 10%</button>*/}
        {/*<button onClick={() => controls.volume(.5)}>Volume: 50%</button>*/}
        {/*<button onClick={() => controls.volume(1)}>Volume: 100%</button>*/}
        {/*<br />*/}
        {/*<button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>*/}
        {/*<button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>*/}

    </div>

};
export default EditVideo