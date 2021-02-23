import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

//basic function of react----------------------
function App() {
  const favouriteFood = ['Kacchi', 'Tehari', 'Polaw', 'Beef', 'Kichuri' ]
  const products=[
    {name: 'Photoshop', price: '$99.9'},
    {name: 'Illustrator', price: '$98.9'},
    {name: 'Windows', price: '$100.5'},
    {name: 'PDF Reader', price: '$100.5'},
    {name: 'Elementor', price: '$100.5'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            favouriteFood.map(fFood => <li>{fFood}</li>)
          }
        </ul>
        <h4>My data:</h4>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        
        <Person name="Dr. AKM Karim" title="Professor"></Person>
        <Person name="Md. Moniruz Zaman" title="Din of the Department"></Person>
        <Person name="AKM Hamidur Rahman" title="Junior Developer"></Person>
        <Person name="DG Harun Ijhar" title="Senior Engineer"></Person>
      </header>
    </div>
  );
}
//counter function
function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h2>Count: {count} </h2>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onMouseMove={handleIncrease}>Increase</button>
    </div>
  )
}
//data load by fetch.................
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h2>Dynamic Users: {users.length} </h2>
      {
        users.map(user => <li>{user.name}. {user.email}</li>)
      }
    </div>
  )
}

//styling function--------------------
function Product(props){
  const productStyle={
    backgroundColor: 'lightBlue',
    color: 'navy',
    borderRadius: '10px',
    width: '400px',
    float: 'left',
    margin: '10px'
  }
  const btnStyle={
    margin: '5px', 
    padding: '10px 20px', 
    backgroundColor: 'tomato', 
    color: 'white', 
    borderRadius: '5px'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button style={btnStyle}>Buy Now</button>
    </div>
  )
}
//div dynamic design.............................
function Person(props){
  var divStyle ={
    width: '50%',
    backgroundColor: 'gray',
    color: 'white',
    border: '1px solid yellow',
    margin: '10px'
  }
  return(
    <div style={divStyle}>
      <h2>Name: {props.name}</h2>
      <p>Designation: {props.title}</p>
    </div>
  )
}

export default App;
