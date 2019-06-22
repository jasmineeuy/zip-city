import React from 'react';
import axios from 'axios';
import './App.css';
import ReactDOM from 'react-dom';
import CityResult from './CityResult';




class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      zipC:[],
      found: false
      
    }
  }
  searchCity = (event) =>{
    event.preventDefault();

    let userInput = event.target.value;
    userInput = userInput.toUpperCase();
    console.log(userInput);
    axios.get('http://ctp-zip-api.herokuapp.com/city/' + userInput)
    .then((res) => {
        //console.log(res)
        this.setState({zipC: res.data, found:true});
      })
    .catch((err) => //console.log("Did not work :( ==>" + err));
      this.setState({found:false}));

  }


render(){
  let comp =[];
  if(this.state.found)
    comp = <CityResult key='index' zipcodes={(this.state.zipC)}/>
   
  return(
    <div className = "App">
      
      <header>City Zip Code Search</header>
      <h1>Enter a City:</h1>
      
      <input type = "text" onChange= {this.searchCity}/>
      <br></br>
      <h2>Result:</h2>
      <div className ="cityZip">
       
      {comp}
      </div>
      
    </div>

    );
  }
}






export default App;