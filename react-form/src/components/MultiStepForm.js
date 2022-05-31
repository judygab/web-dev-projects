import { useState } from "react";
import { FormItem } from "./FormItem";

export const MultiStepForm = (props) => {
  const [answers, setAnswers] = useState({});

  const updateAnswers = (value, category) => {
    setAnswers({...answers, [category]: value});
  }

  return (
    <div className="text-left">
      {
        props.list[props.step - 1].items?.map((item, index) => {
          return (
            <FormItem key={index} item={item} onChange={updateAnswers} />
          )
        })
      }
    </div>
  )
}
