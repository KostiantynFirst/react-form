import { Component } from "react";
import { nanoid } from 'nanoid'


export class Form extends Component {

    state = {
        name: '',
        tag: '',
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
      

    render() {

        return (
          
           <form onSubmit={this.hanleSubmit}>
      
          <label htmlFor={this.nameInputId}> 
            Имя <input 
                  type="text" 
                  name="name"
                  value={this.state.name} 
                  onChange={this.handleChange}
                  id={this.nameInputId}
                />
          </label>
      
          <label htmlFor={this.tagInputId} >
            Фамилия <input 
                      type="text" 
                      name="tag"
                      value={this.state.tag} 
                      onChange={this.handleChange}
                      id={this.tagInputId}
                  />
          </label>
      
      
          <button type="submit">Отправить</button>
           
           </form>
      
      
      
        );
      
      }
    }
