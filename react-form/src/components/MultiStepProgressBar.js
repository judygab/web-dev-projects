import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./MultiStepProgressBar.css";

export const MultiStepProgressBar = () => {
  return (
    <ProgressBar
        percent={75}
        filledBackground="indigo"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <div
              className={`step ${accomplished ? "completed" : null}`}
            >
              1
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div
              className={`step ${accomplished ? "completed" : null}`}
            >
              2
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div
              className={`step ${accomplished ? "completed" : null}`}
            >
              3
            </div>
          )}
        </Step>
      </ProgressBar>
  )
};
