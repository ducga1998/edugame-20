import React, { useEffect, useState } from "react";
import { useVideo } from "react-use";
import IconButton from "@material-ui/core/IconButton";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import Inspector from './Inspector'
import PrettoSlider from "../components/UI/Slider";
import styled from "styled-components";
const data = {
  id: "1",
  video_url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
  questions: [
    {
      id: "1",
      time: 5,
      type: "quiz",
      question: "Chọn đáp án thể hiện đúng cách dùng mạo từ a, an?",
      answers: ["A: a pen", "B: a hour", "C: an car", "D: a eraser"],
      correct: 0,
      note:
        'Giải thích: a, an đứng trước danh từ số ít, đếm được, an đứng trước nguyên âm phiên âm "ueoai".',
    },
  ],
};

const StudentView: React.FC<{}> = () => {
  const [timePer, setTimePer] = useState(0);
  const [marks , setMarks] = React.useState([]) as any
  const [video, state, controls , ref]  = useVideo(
    <video
      width="840"
      src={data.video_url}
      // controls
      style={{
        borderRadius: "4px",
        boxShadow: `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`,
      }}
    />
  ) as any
  React.useEffect(() => {
    console.log("controls",controls , state)
  },[])
  const handleChange = (event: any, value: any) => {
    const timeNext = (value / 100) * state.duration
    setTimePer(value)
    controls.seek(timeNext)
    console.log("timeNext",timeNext , value , state.duration , state.time ,  timeNext === state.time)
};
const  handleMark =  () => {
    setMarks([...marks , ...[{value : timePer  , label : state.time + '' }]])
}

//   useEffect(() => {
//     // eslint-disable-next-line array-callback-return
// data.questions.map((item) => {
//       if (item.time === Math.floor(state.time)) {
//         controls.pause();
//         setShowQuestion(true);
//       } else {
//         // controls.play();
//         setShowQuestion(false);
//       }
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [Math.floor(state.time)]);
  // const [marks , setMarks] = React.useState([]) as any
  // const handleMark = () => {
  //   // setMarks([...marks , ...[{value : perVideo  , label : state.time + '' }]])
  // };
  return (
    <div style={{ paddingTop: "56px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
        }}
      >
        <div style={{}}>
          <div
            style={{
              backgroundColor: "#050c16",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "840px",
                margin: "0 auto",
              }}
            >
              {/* video */}
              <div>{video}</div>

              {/* render question */}
              <div>
            
              </div>
            </div>
          </div>

          {/* control video */}
          <div style={{ backgroundColor: "#13263b" }}>
            <div
              style={{
                width: "840px",
                margin: "0 auto",
                padding: "20px 0px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {state.paused ? (
                <IconButton
                  color="primary"
                  aria-label="play"
                  style={{ marginRight: "16px" }}
                  onClick={controls.play}
                >
                  <PlayArrow fontSize="large" />
                </IconButton>
              ) : (
                <IconButton
                  color="primary"
                  aria-label="play"
                  style={{ marginRight: "16px" }}
                  onClick={controls.pause}
                >
                  <Pause fontSize="large" />
                </IconButton>
              )}
              <PrettoSlider
                // max={state.duration}
                step={0.5}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                value={timePer}
                marks={marks}
                style={{ marginRight: "32px"  }}
              />
            </div>
          </div>
        </div>

        <Inspector handleMark={handleMark} />
      
      </div>
    </div>
  );
};

export default StudentView;
