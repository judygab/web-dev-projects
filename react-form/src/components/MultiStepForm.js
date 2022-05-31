import { Form } from "react-bootstrap";

export const MultiStepForm = (props) => {

  const DisplayFormItem = ({ item }) => {
    switch (item.type) {
      case 'text':
        return (
          <>
            <Form.Label>{item.label}</Form.Label>
            <Form.Control
              type="text"
              id={item.label}
            />
          </>
        )
        break;
      case 'password':
        return (
          <>
            <Form.Label htmlFor="inputPassword5">{item.label}</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </>
        )
        break;
      case 'information':
        return (
          <p>
            {item.label}
          </p>
        )
      case 'select':
        return (
          <div className="mt-2">
            <Form.Select aria-label={item.label}>
              <option>{item.label}</option>
              {
                item.options.map((opt, index) => {
                  return (
                    <option value={opt}>{opt}</option>
                  )
                })
              }
            </Form.Select>
          </div>
        )
      default:

    }
  }

  return (
    <div className="text-left">
      {
        props.list[props.step - 1].items?.map((item, index) => {
          return (
            <DisplayFormItem key={index} item={item} />
          )
        })
      }
    </div>
  )
}
