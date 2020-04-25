import React from "react";

import DeleteIcon from "@material-ui/icons/Delete";

import Radio from "@material-ui/core/Radio";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
const Button = styled.div`
  width: auto;

  background-color: #e15a00;

  color: #f6dbbb;
  border-radius: 6px;
  padding: 6px;
  text-align: center;
  cursor: pointer;
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
`;
const Label = styled.label`
  color: #4a586f;
`;
const FormControl: any = styled.div`
  display: flex;
  flex-direction: ${(e: any) => (e.row ? "row" : "column")};
    margin: ${(e : any) => e.notSpacing ?  '0px' : '10px 0px'};
`;

const Inspector = ({handleMark} : any) => {
  return (
    <div
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
            <Input />
          </FormControl>
          <FormControl>
            <Label>Time Line</Label>
            <Input />
          </FormControl>
          <FormControl>
            <Label>Question?</Label>
            <Input />
          </FormControl>
          <FormControl>
            <Label>Result</Label>
          {[1,2,3,4].map(item =>   <FormControl row notSpacing>
              <Radio
                checked={true}
                onChange={(e) => console.log(e)}
                value="b"
                name="radio-button-demo"
                inputProps={{ "aria-label": "B" }}
              />
              <FormControl style={{ display: "block" , width : '100%' }}>
                <Input style={{ width: "100%" }} />
                <DeleteIcon
                  style={{
                    position: "absolute",
                    transform: "translate(-122% , 19%)",
                  }}
                />
              </FormControl>
            </FormControl>)}
          </FormControl>
        <div>
        <Button onClick={handleMark}>Finish</Button>
        </div>
        </Typography>
      </div>
      
    </div>
  );
};
export default Inspector