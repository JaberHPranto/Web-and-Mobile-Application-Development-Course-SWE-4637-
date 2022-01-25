import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

function Timer() {
  const [totalTime, setTotalTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const hour = Math.floor(totalTime / 3600);
  const minute = Math.floor((totalTime - 3600 * hour) / 60);
  const seconds = totalTime - 3600 * hour - minute * 60;

  const handleTimer = (state) => {
    setTimerOn(state);
  };

  useEffect(() => {
    if (timerOn) {
      var interval = setInterval(() => {
        setTotalTime((prevState) => prevState + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerOn]);

  return (
    <>
      <div className="time">
        <div>{hour} :</div>
        <div>{minute} :</div>
        <div>{seconds}</div>
      </div>
      {timerOn ? (
        <Button
          className="timer_btn"
          variant="outlined"
          color="error"
          onClick={() => handleTimer(false)}
        >
          Stop
        </Button>
      ) : (
        <Button
          className="timer_btn"
          variant="outlined"
          onClick={() => handleTimer(true)}
        >
          Start
        </Button>
      )}
    </>
  );
}

export default Timer;
