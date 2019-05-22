import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: {value}
    } = event;
    let willUpdate = true;
    if(typeof validator === "function"){
      willUpdate = validator(value);
    }
    if(willUpdate){
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  // const maxLen = (value) => value.length <= 10;
  const maxLen = (value) => !value.includes("@");
  // 위 코드는 @ 를 포함하지 않게 만들수있다.
  // const [item, setItem] = useState(1);
  // const incrementItem = () => setItem(item + 1);
  // const decrementItem = () => setItem(item - 1);
  const name = useInput("Mr.", maxLen);
  const email = useInput("@");
  return (
    // <div className="App">
    //   <h1>Hello React Hook! {item}</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    //   <button onClick={incrementItem}>incrementItem</button>
    //   <button onClick={decrementItem}>decrementItem</button>
    // </div>
    <div className="App">
      <h1>Hello</h1>
      {/* ...name === value={name.value} onChange={name.onChange} */}
      <input placeholder="Name" {...name} />
      <input placeholder="Email" {...email} />
    </div>
  );
};

// class Ugly extends React.Component {
//   state = {
//     name: "",
//     email: ""
//   };
//   render() {
//     const { name, email } = this.state;
//     return (
//       <div className="App">
//         <input 
//           onChange={this.onChange}
//           placeholder="Name"
//           value={name}
//           name="name" 
//         />
//         <input 
//           onChange={this.onChange}
//           placeholder="Email" 
//           value={email} 
//           name="email" 
//         />
//       </div>
//     );
//   }
//   onChange = (event) => {
//     const {
//        target: { value, name }
//       } = event;
//     this.setState({
//       [name] : value
//     });
//   };
// }

//  위의 코드는 hook을 이용한 코드 hook으로 만든다면 didmount , render 등을 하지 않아도 된다.
// functional programming
// 아래 코드는 hook이 없던때에 state를 이용한 코드

// class App extends React.Component {
//   state = {
//     item: 1
//   }
  
//   render() {
//     const { item } = this.state;
//     return (
//       <div className="App">
//         <h1>Hello React Hook! {item}</h1>
//         <h2>Start editing to see some magic happen!</h2>
//         <button onClick={this.incrementItem}>incrementItem</button>
//         <button onClick={this.decrementItem}>decrementItem</button>
//       </div>
//     )
//   }

//   incrementItem = () => {
//     this.setState(state => {
//       return {
//         item: state.item + 1
//       };
//     });
//   };

//   decrementItem = () => {
//     this.setState(state => {
//       return {
//         item: state.item - 1
//       };
//     });
//   };
// }

export default App;
