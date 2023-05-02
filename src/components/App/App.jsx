import { Component } from "react";
import { Container } from "./App.styled";
import { Form } from "../Form/Form";

export class App extends Component {


formSubmitHandler = data => {
  console.log(data);
}


render() {

    return (
      <Container>
        <Form onSubmit={this.formSubmitHandler} />
      </Container>


)

}

};




  

