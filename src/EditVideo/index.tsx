import React, { useEffect, useState } from "react";
import { useVideo } from "react-use";
import IconButton from "@material-ui/core/IconButton";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import Inspector from "./Inspector";
import PrettoSlider from "../components/UI/Slider";
import { useToasts } from 'react-toast-notifications'
import styled from "styled-components";
import uuid from "uuid";
import {Subscribe} from "unstated-x";
import {dataContainer} from "../container/baseContainer";
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
    const [video, state, controls, ref] = useVideo( <video
        width="840"
        src="a.mp4"
        // controls
        style={{
            borderRadius: "4px",
            boxShadow: `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`,
        }}
    />) as any;
  const [timePer, setTimePer] = useState(0);

    const [answers , setAnswer] = React.useState(["A: a pen", "B: a hour", "C: an car", "D: a eraser"])
    // const [questions , setQuestions ] = React.useState( [
    //     {
    //         id: "1",
    //         time: 5,
    //         type: "quiz",
    //         time_line : "time line",
    //         question: "Chọn đáp án thể hiện đúng cách dùng mạo từ a, an?",
    //         answers: ["A: a pen", "B: a hour", "C: an car", "D: a eraser"],
    //         correct: 0,
    //         note:
    //             'Giải thích: a, an đứng trước danh từ số ít, đếm được, an đứng trước nguyên âm phiên âm "ueoai".',
    //     }
    // ]) as any
    const [indexQuestion , setIndexQuestion ] = React.useState(-1) as any

  const handleChange = (event: any, value: any) => {
    const timeNext = (value / 100) * state.duration;
    setTimePer(value);
    controls.seek(timeNext);
  };

  const handleQuestions = (question :any ) => {
    // let newData = [...questions];
      const {questions} = dataContainer.state
    const  newQuestion  =  {...question ,...{ id: (questions.length + 1 + ''),  time: Math.floor(timePer) } }
      // console.log("newQuestion",newQuestion)
    // newData = [...newData, ...[newQuestion]];
    dataContainer.addQuestion(newQuestion);
      // setIndexQuestion(-1)
  };
    useEffect(() => {
        const {questions} = dataContainer.state
        // eslint-disable-next-line array-callback-return
       if(questions && questions.length > 0) {
          const isQuestion =  questions.find((item : any) =>   Math.floor(item.time)=== Math.floor(state.time) ) as any
           if(isQuestion) {
               setIndexQuestion(isQuestion.id)
           }
       else {
               setIndexQuestion(-1)
           }

       }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    })
  return <Subscribe to={[dataContainer]}>
      {container => {
          const {questions} = container.state
          return   <div style={{ paddingTop: "56px" }}>
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

                  <Inspector handleQuestions={handleQuestions} answers={answers} questions={questions} changeAnswer = {setAnswer} indexQuestion={indexQuestion} />
              </div>
          </div>
      }}
  </Subscribe>
};

export default EditView;
