import React, { useEffect, useState } from "react";
import { useVideo } from "react-use";
import IconButton from "@material-ui/core/IconButton";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import Inspector from "./Inspector";
import PrettoSlider from "../components/UI/Slider";
import styled from "styled-components";
import uuid from "uuid";
// const Mockdata = ;
const Video  = ({src}:{src : string}) =>   <video
    width="840"
    src={src}
    // controls
    style={{
        borderRadius: "4px",
        boxShadow: `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`,
    }}
/>
const EditView: React.FC<{}> = () => {
    const [data, setData] = React.useState({
        id: "1",
        name_video : "Học tiếng",
        time_line : "alo alo ",
        video_url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        questions : [
            {
                id: "1",
                time: 5,
                type: "quiz",
                question: "Chọn đáp án thể hiện đúng cách dùng mạo từ a, an?",
                answers: ["A: a pen", "B: a hour", "C: an car", "D: a eraser"],
                correct: 0,
                note:
                    'Giải thích: a, an đứng trước danh từ số ít, đếm được, an đứng trước nguyên âm phiên âm "ueoai".',
            }
        ]

    }) as any
    const [video, state, controls, ref] = useVideo(<Video src={data.video_url} />) as any;
  const [timePer, setTimePer] = useState(0);

    const [answers , setAnswer] = React.useState(["A: a pen", "B: a hour", "C: an car", "D: a eraser"])
    const [questions , setQuestions ] = React.useState( [
        {
            id: "1",
            time: 5,
            type: "quiz",
            time_line : "time line",

            question: "Chọn đáp án thể hiện đúng cách dùng mạo từ a, an?",
            answers: ["A: a pen", "B: a hour", "C: an car", "D: a eraser"],
            correct: 0,
            note:
                'Giải thích: a, an đứng trước danh từ số ít, đếm được, an đứng trước nguyên âm phiên âm "ueoai".',
        }
    ]) as any
    const [question , setQuestion ] = React.useState(null) as any

  const handleChange = (event: any, value: any) => {
    const timeNext = (value / 100) * state.duration;
    setTimePer(value);
    controls.seek(timeNext);
    console.log(
      "timeNext",
      timeNext,
      value,
      state.duration,
      state.time,
      timeNext === state.time
    );
  };

  const handleQuestions = () => {
    let newData = [...questions];
    const newQuestion = {
      id: newData.length + 1 + '',
      time: timePer,
      type: "quiz",
      question: "Chọn đáp án thể hiện đúng cách dùng mạo từ a, an?",
      answers: answers,
      correct: 0,
      note:
        'Giải thích: a, an đứng trước danh từ số ít, đếm được, an đứng trước nguyên âm phiên âm "ueoai".',
    };
    newData = [...newData, ...[newQuestion]];
    setQuestions(newData);
  };
    useEffect(() => {
        console.log("casnkjcnaskjc",data)
        // eslint-disable-next-line array-callback-return
       if(questions && questions.length > 0) {
           questions.map((item : any) => {
               if (item.time === Math.floor(timePer)) {
                   setQuestion(item)
               }
               else {
                   setQuestion(null)
               }
           })
       }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Math.floor(timePer)])
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

              <div></div>
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
                marks={ questions.map((item:any) => ({ value: item.time , label : item.item }))}
                style={{ marginRight: "32px" }}
              />
            </div>
          </div>
        </div>

          <Inspector data={data} setQuestions={handleQuestions} answers={answers} changeAnswer = {setAnswer} question={question} />
      </div>
    </div>
  );
};

export default EditView;
