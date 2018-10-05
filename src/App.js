import React from 'react'
import Home  from './Home'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            value : '',
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        }

        handleChange(event) {
            this.setState({value: event.target.value});
        }

        handleSubmit(event) {
            console.log('From Value' + this.state.value);
            event.preventDefault();
        }
    

render () {
return (
    <div className="App">
        <form onSubmit={this.handleSubmit.bind(this)}>
             <lable>Name:</lable>
            <input name= "na" type="text" onChange={this.handleChange}/>
            </form>
            <br />
            <form onSubmit={this.handleSubmit.bind(this)}>
            <lable>Email:</lable>
            <input name= "em" type="email" onChange={this.handleChange}/>
            </form>
            <br />
            <form onSubmit={this.handleSubmit.bind(this)}>
            <lable>Phone Number:</lable>
            <input name= "pn" type="phone"  onChange={this.handleChange}/>
            </form>
            <br />
            <form onSubmit={this.handleSubmit.bind(this)}>
            <lable>Password:</lable>
            <input name= "pw" type="password"  onChange={this.handleChange}/>
            <input type= "submit" value="Submit"/>
            </form> 
    </div>          
   );
} 
} 

export default App;