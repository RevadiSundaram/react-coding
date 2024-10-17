// import React, { useState } from 'react';

// const style = {
//   container: {
//     padding: '20px',
//     border: '1px solid #E0E0E0',
//     borderRadius: '15px',
//     width: 'max-content',
//     marginBottom: '40px',
//   },
//   question: {
//     fontWeight: 'bold',
//     marginBottom: '10px',
//   },
//   options: {
//     marginBottom: '5px',
//   },
//   button: {
//     marginTop: '10px',
//     padding: '10px 15px',
//     border: 'none',
//     backgroundColor: '#007BFF',
//     color: '#FFF',
//     fontSize: '14px',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
//   feedback: {
//     marginTop: '10px',
//     fontSize: '14px',
//   },
// };

// export default function InterviewQues() {
//   // do not modify the questions or answers below
  
//   const [answer, setAnswer] = useState(null);
//   return (
//     <div style={style.container}>
//     {
//       questions.map((each) =>  {
//         return <div key={each.id}>
//          <div  id="question" style={style.question}>{each.question}</div>
//         <div style={style.options}>
          
//          {each.options.map((item,index) => {
//          return <div key={index}>
//                     <input type='radio' value={item} id={item} />
//                     <label htmlFor={item}>{item}</label>
//               </div>
//          }
//         )}
//         </div>
//         </div>
//       })
//       }
//       <div style={style.options}></div>
//       <button style={style.button} id="submitBtn">
//         Submit
//       </button>
//       <div id="feedback" style={style.feedback}></div>
//     </div>
//   );
// }

// // const container = document.getElementById('root');
// // const root = createRoot(container);
// // root.render(<QuizApp />);