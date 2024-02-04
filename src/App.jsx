import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// ВВЕДЕНИЕ

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
//


// ЗАДАНИЕ 7.1 7.2 7.3
// function App() {
//   return <div>
//     <div className='text1'>Абзац 1</div>
//     <div className='text2'>Абзац 2</div>
//     <div className='text3'>Абзац 3</div>
//   </div>;
// }


// ЗАДАНИЕ 8
// function App() {
//   return <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//     <li>4</li>
//     <li>5</li>
//     <li>6</li>
//     <li>7</li>
//     <li>8</li>
//     <li>9</li>
//     <li>10</li>
//   </ul>;
// }


// ЗАДАНИЕ 9
// function App() {
//   return (
//     <ul>
//       <li>text1</li>
//       <li>text2</li>
//       <li>text3</li>
//     </ul>
//     );
// }


// ЗАДАНИЕ 10
// function App() {
//   return (
//   <>
//     <ul>
//       <li>text1</li>
//       <li>text2</li>
//       <li>text3</li>
//     </ul>
//     <ul>
//       <li>text1</li>
//       <li>text2</li>
//       <li>text3</li>
//     </ul>
//     </>
//     )
// }
// function App() {
//   return (
//   <div>
//     <ul>
//       <li>text1</li>
//       <li>text2</li>
//       <li>text3</li>
//     </ul>
//     <ul>
//       <li>text1</li>
//       <li>text2</li>
//       <li>text3</li>
//     </ul>
//     </div>
//     )
// }



// ЗАДАНИЕ 11
// function App() {
//   return <input />;
// }



// ЗАДАНИЕ 12
// function App() {
//   return ( <>
//   <input /><input /><input />
//   </>);
// }



// ЗАДАНИЕ 13
// function App() {
//   const str1 = 'text1';
//   const str2 = 'text1';
  
//   return <div>
//     <p>{str1}</p>
//     <p>{str2}</p>
//   </div>;
// }



// ЗАДАНИЕ 14
// function App() {
//   const name = 'user';
//   const age  = '30';
  
//   return <div>
//     name: {name}
//     <br></br>
//     age:  {age}
//   </div>;
// }



// ЗАДАНИЕ 15
// function App() {
//   const arr = [1, 2, 3, 4, 5];
//   return (
//     <ul>
//       <li>{arr[0]}</li>
//       <li>{arr[1]}</li>
//       <li>{arr[2]}</li>
//       <li>{arr[3]}</li>
//       <li>{arr[4]}</li>
//     </ul>
//   )
// }



// ЗАДАНИЕ 16
// function App() {
//   const obj = {name: 'john', surname: 'smit'};
//   return (<div>
//     <p>name: {obj.name}
//     <br></br>
//     surname: {obj.surname}</p>
//   </div>)
// }


// ЗАДАНИЕ 17
// function App() {
//   const attr = 'block';
  
//   return <div id={attr}>
//     text
//   </div>;
// }



// ЗАДАНИЕ 19
// function App() {
//   const li1 = <div><li>text1</li><li>text2</li><li>text3</li></div>;

//   return <main>
//   {li1}
//   </main>;
// }



// ЗАДАНИЕ 20
// function App() {
//   const items = <div><li>text1</li>
//   <li>text2</li>
//   <li>text3</li>
//   </div>
  
//   return <ul>
//     {items}
//   </ul>
// }



// ЗАДАНИЕ 22
// function App() {
//   return <div>
//     <input />
//     <br />
//     <input />
//     <br />
//     <input />
//     <br />
//     <input />
//   </div>;
// }




// ЗАДАНИЕ 23.1 23.2
// function App() {
//   return <div>
//     <ul>
//       <li>1</li>
//       <li>2</li>
//       <li>3</li>
//       <li>4</li>
//       <li>5</li>
//       <li>6</li>
//       <li>7</li>
//       <li>8</li>
//       <li>9</li>
//       <li>10</li>
//     </ul>
//   </div>;
// }

// function App() {
//   return <div>
//     <tbody>
//       <tr>
//         <td>1</td>
//         <td>2</td>
//         <td>3</td>
//       </tr>
//       <tr>
//         <td>4</td>
//         <td>5</td>
//         <td>6</td>
//       </tr>
//       <tr>
//         <td>7</td>
//         <td>8</td>
//         <td>9</td>
//       </tr>
//     </tbody>
//   </div>;
// }




// ЗАДАНИЕ 24.1 
// function App() {
//   const num1 = 3;
//   const num2 = 2;
  
//   return <div>
//     result: {num1 ** num2}
//   </div>;
// } 
// res: 9

// ЗАДАНИЕ 24.2
// function App() {
//   const name = 'john';
//   const surname = 'smit';
  
//   return <div>
//     result: {name + ' ' + surname}
//   </div>;
// }
// res: john smit



// ЗАДАНИЕ 24.3
// function App() {
//     const num = 4;
    
//     return <div>
//       result: {Math.sqrt(num)}
//     </div>;
//   }
//   res: 2



export default App
