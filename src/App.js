import React,{ Component } from 'react';
import './App.css';
import Car from './Car/Car';
import Button from './Button/Button';

class App extends Component {

  state = {
    cars:[
      {name: "swift",model:"LXI" ,color:"silver" ,price:645732 ,sold : false,show : true ,id:"asxh7xas"},
      {name: "Desire",model:"VXI" ,color:"silver" ,price:945652 ,sold : false,show : true, id:"scxh67as"},
      {name: "Alto",model:"LX" ,color:"Ocean Blue" ,price:412004 ,sold : false,show : true ,id:"gfdr5sdfsd"},
      {name: "Desire",model:"VDI" ,color:"black" ,price: 1145672 ,sold : false,show : true ,id:"vjhg67gd"},
      {name: "wagonR",model:"LXI" ,color:"Silky Silver" ,price:656000 ,sold : false,show : true ,id:"khgs62hgvds"},
      {name: "Ciaz",model:"VDI" ,color:"White" ,price:1476000 ,sold : false,show : true ,id:"dqkehwbd6787bd86d"},
      {name: "Ritz",model:"VX" ,color:"Maroon" ,price:692672 ,sold : false,show : true ,id:"dgf6gqj"},
    ],
    ShowAvailibility : false,
  }

  mainbtnHandler = () =>{
    this.setState({
      ShowAvailibility : !this.state.ShowAvailibility
    });
  }

  soldout = (carid) =>{
    // console.log(carid);
    var dummy = [...this.state.cars];
    dummy.map((d,index) => {
      if(d.id == carid)
      {
        dummy[index].sold = !dummy[index].sold;
      }
    });
    this.setState({
      cars : dummy
    });
  }

  remove = (carid) => {
    var dummy = [...this.state.cars];
    dummy.map((d,index) => {
      if(d.id == carid)
      {
        dummy.splice(index,1);
      }
    });
    this.setState({
      cars : dummy
    });
  }

  render(){
    return (
      <div className="App">
        <h1>Available Models</h1>
        <Button clickbtn={this.mainbtnHandler}></Button>
        {this.state.ShowAvailibility? 
        this.state.cars.map(car => { 
          return <Car name={car.name} model={car.model} color={car.color} price={car.price} sold={car.sold} key={car.id} myid={car.id} clicksold={(carid) => this.soldout(carid)} clickremove={(carid) => this.remove(carid)}></Car>
        }) : null}
      </div>
    );
  }
}

export default App;
