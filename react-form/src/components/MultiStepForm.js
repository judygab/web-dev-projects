import { Form } from "react-bootstrap";

export const MultiStepForm = (props) => {
  console.log(props);

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
      default:

    }
  }

  return (
    <div className="text-left">
      {
        props.list[0].items?.map((item, index) => {
          return (
            <DisplayFormItem key={index} item={item} />
          )
        })
      }
    </div>
  )
}
