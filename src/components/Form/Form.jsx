import { Component } from "react";
import { nanoid } from 'nanoid';
import { FormLabel, FormLabelInput, FormInput, FormParagraph, FormBtn } from "./Form.styled";


export class Form extends Component {

    state = {
        name: '',
        tag: '',
        experience: 'junior',
        licence: false,
    }

    nameInputId = nanoid();
    tagInputId = nanoid();

    handleChange = e => {
        const { name, value} = e.currentTarget;
        this.setState({
          [name]: value
        })
      }

    hanleSubmit = e => {
        e.preventDefault();
        // console.log(this.state)
        this.props.onSubmit(this.state);
        this.resetForm();
      }

    resetForm = () => {
        this.setState({
            name: '',
            tag: '',
        })
    }   

    handleLicenceChange = e => {
      console.log(e.currentTarget.checked);

      this.setState({licence: e.currentTarget.checked})
    }
      

    render() {

        return (
          
          <FormLabel onSubmit={this.hanleSubmit}>
      
          <FormLabelInput htmlFor={this.nameInputId}> 
            Имя <FormInput 
                  type="text" 
                  name="name"
                  value={this.state.name} 
                  onChange={this.handleChange}
                  id={this.nameInputId}
                />
          </FormLabelInput>
      
          <FormLabelInput htmlFor={this.tagInputId} >
            Фамилия <FormInput 
                      type="text" 
                      name="tag"
                      value={this.state.tag} 
                      onChange={this.handleChange}
                      id={this.tagInputId}
                  />
          </FormLabelInput>

          <FormParagraph>Ваш уровень разработчика:</FormParagraph>
      
          <FormLabelInput>
          <FormInput 
              type="radio" 
              name='experience' 
              value='junior' 
              onChange={this.handleChange}
              checked={this.state.experience === 'junior'} /> 
              Junior
          </FormLabelInput>

          <FormLabelInput>
          <FormInput 
              type="radio" 
              name='experience' 
              value='middle' 
              onChange={this.handleChange}
              checked={this.state.experience === 'middle'} /> 
              Middle
          </FormLabelInput>

          <FormLabelInput>
          <FormInput 
              type="radio" 
              name='experience' 
              value='senior' 
              onChange={this.handleChange}
              checked={this.state.experience === 'senior'} /> 
              Senior
          </FormLabelInput>

          <FormLabelInput>
          <FormInput 
              type="checkbox" 
              name="licence" 
              checked={this.state.licence}
              onChange={this.handleLicenceChange}
           /> 
           Согласен с условиями
          </FormLabelInput>
      
          <FormBtn type="submit" disabled={!this.state.licence}>Отправить</FormBtn>
           
           </FormLabel>
      
      
      
        );
      
      }
    }
