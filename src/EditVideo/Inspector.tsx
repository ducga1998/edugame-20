import React from "react";

import DeleteIcon from "@material-ui/icons/Delete";

import Radio from "@material-ui/core/Radio";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { useToasts } from 'react-toast-notifications'
import {Subscribe} from "unstated-x";
import {dataContainer} from '../container/baseContainer'
export const Button = styled.div`
  width: auto;
  background-color: #e15a00;
  color: #f6dbbb;
  border-radius: 6px;
  padding: 6px;
  text-align: center;
  cursor: pointer;
  a {
  color: #f6dbbb;
  text-decoration: dotted;
  }
  
`;
const Input = styled.input`
  width: auto;
  padding: 10px;
  background-color: #253950;
  color: #6b7b8c;
  border: none;
  outline: none;
  border-radius: 6px;
  margin-top: 2px;
  &::placeholder{
    color : #797979;
  }
`;
const Label = styled.label`
  color: #4a586f;
`;
const FormControl: any = styled.div`
  display: flex;
  flex-direction: ${(e: any) => (e.row ? "row" : "column")};
    margin: ${(e : any) => e.notSpacing ?  '0px' : '10px 0px'};
`;
const emptyValue  = {
    type: "quiz",
    question: "",
    answers: ["","","",""],
    correct: 0,
    note:
        '',
}

const Inspector = ({handleQuestions , answers, questions , indexQuestion } : any) => {
    // @ts-ignore
    const data = dataContainer.state
    console.log("questions",questions)
    const [questionsUncontroll , setQuestion] : any  = React.useState(emptyValue) as any
    const { addToast } = useToasts()
    const handleSetQuestionKey =(key :string , value : any  )  => {
            setQuestion({...questionsUncontroll , ...{[key] : value}})
    }
    // React.useEffect(() => {
    //     addToast('Saved Video Successfully', { appearance: 'success' })
    // },[])
    React.useEffect(() => {

            if(indexQuestion >= 0) {
                const questionView =  questions.find((item : any) => item.id == indexQuestion)
                setQuestion(questionView)
            }else {
                setQuestion(emptyValue)
            }
    },[indexQuestion])
  return  <Subscribe to={[dataContainer] }>
      {
          (container : any ) => {
              return   <div
                  style={{
                      // height: `calc(100vh - 56px)`,
                      backgroundColor: "#08172a",
                      // boxShadow: `0 10px 0px 0px rgba(0, 0, 0, 0.05)`,
                      boxShadow: `0px 2px 2px -1px rgba(0,0,0,0.1), 0px 2px 5px 0px rgba(0,0,0,0.1), 0px 1px 10px 0px rgba(0,0,0,0.1)`,
                  }}
              >
                  <div style={{ padding: "16px 32px" }}>
                      <Typography
                          variant="subtitle1"
                          style={{
                              fontSize: "14px",
                              paddingBottom: "8px",
                              textAlign: "left",
                              fontWeight: 700,
                          }}
                      >

                          <FormControl>
                              <Label>Name Video</Label>
                              <Input value={data.name_video} />
                          </FormControl>
                          <FormControl>
                              <Label>Time Line</Label>
                              <Input  value={questionsUncontroll.time_line  || "" }
                                      onChange={(e) => handleSetQuestionKey('time_line', e.target.value) }
                                      placeholder="Time Line"
                              />

                          </FormControl>
                          <FormControl>
                              <Label>Question?</Label>
                              <Input value={questionsUncontroll.question || ""}
                                     onChange={(e) => handleSetQuestionKey('question', e.target.value) }
                                     placeholder="question"
                              />
                          </FormControl>
                          <FormControl>
                              <Label>Result</Label>
                              {(questionsUncontroll && questionsUncontroll.answers).map((item : any, key : number ) =>   <FormControl row notSpacing>
                                  <Radio
                                      checked={key === questionsUncontroll.correct}
                                      onChange={(e) => handleSetQuestionKey('correct',key)  }
                                      value="b"
                                      name="radio-button-demo"
                                      inputProps={{ "aria-label": "B" }}
                                  />
                                  <FormControl style={{ display: "block" , width : '100%' }}>
                                      <Input style={{ width: "100%" }} value={questionsUncontroll.answers[key]} onChange ={(e: any) => {
                                          let newAnswers  =  [...questionsUncontroll.answers]
                                          newAnswers[key] = e.target.value
                                          handleSetQuestionKey('answers',newAnswers)
                                      }}
                                             placeholder={`Answer  ${key+1}`}
                                      />
                                      <DeleteIcon
                                          onClick={() => {
                                              let newAnswers  =  questionsUncontroll.answers.filter(( item_: string  , keyAn: number ) =>   keyAn !== key )
                                              handleSetQuestionKey('answers',newAnswers)
                                          }}
                                          style={{
                                              position: "absolute",
                                              transform: "translate(-122% , 19%)",
                                              cursor: 'pointer'
                                          }}
                                      />
                                  </FormControl>
                              </FormControl>)}
                          </FormControl>
                          <div>
                              <Button onClick={() =>{
                                  addToast('Saved Video Successfully', { appearance: 'success' })
                                  handleQuestions(questionsUncontroll)
                                  setQuestion(emptyValue)
                                  
                                  
                              }}>Finish</Button>
                          </div>
                      </Typography>
                  </div>

              </div>
          }
      }
  </Subscribe>
};
export default Inspector