import { Component } from "react";
import { Container } from "./App.styled";
import { Form } from "./Form";

export class App extends Component {

state = {

}

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




  

