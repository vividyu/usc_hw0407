import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

const TaskCreator = () => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [timeField, setTimeField] = useState(0);
  const [timer, setTimer] = useState(null);

  const timeFieldRef = useRef();

  const startTimer = () => {
    if (!timer) {
      setTimer(setInterval(() => setTimeField((prevTime) => prevTime + 1), 1000));
    }
  };

  const stopTimer = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
      if (timeField > 0) {
        dispatch({
          type: "ADD_TASK",
          task: { id: Date.now(), name: taskName, time: timeField },
        });
        setTimeField(0);
      }
    }
  };

  const pauseTimer = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  };

  return (
    <div className="taskCreator">
      <span>Task Name</span>
      <input id="taskName" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      <span>Time Elapsed</span>
      <input
        id="timeField"
        type="number"
        ref={timeFieldRef}
        value={timeField}
        onFocus={pauseTimer}
        onBlur={startTimer}
        onChange={(e) => setTimeField(Number(e.target.value))}
      />
      <button id="start" onClick={startTimer}>
        Start
      </button>
      <button id="stop" onClick={stopTimer}>
        Stop
      </button>
    </div>
  );
};

export default TaskCreator;
