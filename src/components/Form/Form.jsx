import { Component } from "react";
import { nanoid } from 'nanoid'


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

          <p>Ваш уровень разработчика:</p>
      
          <label>
          <input 
              type="radio" 
              name='experience' 
              value='junior' 
              onChange={this.handleChange}
              checked={this.state.experience === 'junior'} /> 
              Junior
          </label>

          <label>
          <input 
              type="radio" 
              name='experience' 
              value='middle' 
              onChange={this.handleChange}
              checked={this.state.experience === 'middle'} /> 
              Middle
          </label>

          <label>
          <input 
              type="radio" 
              name='experience' 
              value='senior' 
              onChange={this.handleChange}
              checked={this.state.experience === 'senior'} /> 
              Senior
          </label>

          <label>
          <input 
              type="checkbox" 
              name="licence" 
              checked={this.state.licence}
              onChange={this.handleLicenceChange}
           /> 
           Согласен с условиями
          </label>
      
          <button type="submit" disabled={!this.state.licence}>Отправить</button>
           
           </form>
      
      
      
        );
      
      }
    }
