import React, { useEffect, useState } from 'react'
import { useVideo } from 'react-use'
import { Slider, withStyles, Typography, Avatar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import PlayArrow from '@material-ui/icons/PlayArrow'
import Pause from '@material-ui/icons/Pause'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const data = {
  id: '1',
  video_url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
  questions: [
    {
      id: '1',
      time: 5,
      type: 'quiz',
      question: 'Chọn đáp án thể hiện đúng cách dùng mạo từ a, an?',
      answers: ['A: a pen', 'B: a hour', 'C: an car', 'D: a eraser'],
      correct: 0,
      note:
        'Giải thích: a, an đứng trước danh từ số ít, đếm được, an đứng trước nguyên âm phiên âm "ueoai".',
    },
  ],
}

const PrettoSlider = withStyles({
  root: {
    color: '#0b8cbc',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    display: 'none',
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 6,
    borderRadius: 4,
  },
  rail: {
    height: 6,
    // borderRadius: 4,
  },
  mark: {
    backgroundColor: '#e15a00',
    borderRadius: 2,
    height: 10,
    width: 20,
    marginTop: -2,
    marginLeft: -8,
  },
  markActive: {
    opacity: 1,
    backgroundColor: '#e15a00',
  },
})(Slider)

const StudentView: React.FC<{}> = () => {
  const [showQuestion, setShowQuestion] = useState<Boolean>(false)
  const [video, state, controls] = useVideo(
    <video
      width="840"
      src={data.video_url}
      // controls
      style={{
        borderRadius: '4px',
        boxShadow: `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`,
      }}
    />
  )

  const handleRadioChange = (e: any) => {
    e.preventDefault()
    console.log(e.target.value)
  }
  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    data.questions.map((item) => {
      if (item.time === Math.floor(state.time)) {
        controls.pause()
        setShowQuestion(true)
      } else {
        controls.play()
        setShowQuestion(false)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Math.floor(state.time)])

  return (
    <div style={{ paddingTop: '59px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '3fr 1fr',
        }}
      >
        <div style={{}}>
          <div
            style={{
              backgroundColor: '#fafafa',
              paddingTop: '30px',
              paddingBottom: '30px',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '840px',
                margin: '0 auto',
              }}
            >
              {/* video */}
              <div>{video}</div>

              {/* render question */}
              <div>
                {showQuestion && (
                  <div
                    style={{
                      height: '200px',
                      position: 'absolute',
                      bottom: 0,
                      width: '840px',
                      backgroundColor: 'black',
                      opacity: '.8',
                      color: 'white',
                      padding: '16px 32px',
                    }}
                  >
                    {data.questions.map((item) => (
                      <div key={item.id}>
                        {item.time === Math.floor(state.time) && (
                          <>
                            <Typography variant="h5">
                              {item.question}
                            </Typography>
                            <div>
                              <RadioGroup
                                aria-label="quiz"
                                name="quiz"
                                // value={value}
                                onChange={handleRadioChange}
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                }}
                              >
                                <div>
                                  <FormControlLabel
                                    value="0"
                                    control={<Radio />}
                                    label={item.answers[0]}
                                    style={{
                                      backgroundColor: '#e15a00',
                                      color: 'white',
                                      width: '200px',
                                      borderRadius: '8px',
                                      margin: '10px',
                                    }}
                                  />
                                  <FormControlLabel
                                    value="1"
                                    control={<Radio />}
                                    label={item.answers[1]}
                                    style={{
                                      backgroundColor: '#e15a00',
                                      color: 'white',
                                      width: '200px',
                                      borderRadius: '8px',
                                      margin: '10px',
                                    }}
                                  />
                                </div>
                                <div>
                                  <FormControlLabel
                                    value="2"
                                    control={<Radio />}
                                    label={item.answers[2]}
                                    style={{
                                      backgroundColor: '#e15a00',
                                      color: 'white',
                                      width: '200px',
                                      borderRadius: '8px',
                                      margin: '10px',
                                    }}
                                  />
                                  <FormControlLabel
                                    value="3"
                                    control={<Radio />}
                                    label={item.answers[3]}
                                    style={{
                                      backgroundColor: '#e15a00',
                                      color: 'white',
                                      width: '200px',
                                      borderRadius: '8px',
                                      margin: '10px',
                                    }}
                                  />
                                </div>
                              </RadioGroup>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* control video */}
          <div style={{ backgroundColor: '#ececec' }}>
            <div
              style={{
                width: '840px',
                margin: '0 auto',
                padding: '20px 0px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {state.paused ? (
                <IconButton
                  color="primary"
                  aria-label="play"
                  style={{ marginRight: '16px' }}
                  onClick={controls.play}
                >
                  <PlayArrow fontSize="large" />
                </IconButton>
              ) : (
                <IconButton
                  color="primary"
                  aria-label="play"
                  style={{ marginRight: '16px' }}
                  onClick={controls.pause}
                >
                  <Pause fontSize="large" />
                </IconButton>
              )}
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                value={state.time}
                marks={data.questions.map((item) => ({ value: item.time }))}
                style={{ marginRight: '32px' }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            // height: `calc(100vh - 56px)`,
            backgroundColor: 'white',
            // boxShadow: `0 10px 0px 0px rgba(0, 0, 0, 0.05)`,
            boxShadow: `0px 2px 2px -1px rgba(0,0,0,0.1), 0px 2px 5px 0px rgba(0,0,0,0.1), 0px 1px 10px 0px rgba(0,0,0,0.1)`,
          }}
        >
          <div style={{ padding: '16px 32px' }}>
            <Typography
              variant="subtitle1"
              style={{
                fontSize: '14px',
                paddingBottom: '8px',
                textAlign: 'left',
                fontWeight: 700,
              }}
            >
              VIEWS
            </Typography>
            <div style={{ display: 'flex' }}>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
                style={{
                  width: '48px',
                  height: '48px ',
                  marginRight: '16px',
                }}
              />
              <Avatar
                style={{
                  width: '48px',
                  height: '48px ',
                  marginRight: '16px',
                }}
                alt="Travis Howard"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
              <Avatar
                style={{
                  width: '48px',
                  height: '48px ',
                  marginRight: '16px',
                }}
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
              <Avatar
                style={{
                  width: '48px',
                  height: '48px ',
                  marginRight: '16px',
                }}
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </div>
          </div>

          {/* view */}
          {/* list lesson */}
          {/* tracking video */}
          {/* modal tracking */}
        </div>
      </div>
    </div>
  )
}

export default StudentView
