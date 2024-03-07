import React from 'react'

const Form = ({inputText,setInputText,todos,setTodos}) => {

  const inputHandler = (e) => {
      // console.log(e.target.value);
       setInputText(e.target.value);
  }

  const handleSubmit =(event)=>{
    event.preventDefault();

  setTodos([...todos, { text : inputText, completed : false, id : Math.random*1000 }]);
    // setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);

    setInputText('');
  }

  return (
    <>
      <form >
         <input 
         value={inputText}
         onChange={(event)=>{inputHandler(event)}}
         >
         </input>
          <button onClick={(event) => {handleSubmit(event)}}>+</button>
          <div className='Filter'>
          <select name="Filter_todo">
            <option value="all">All</option>
            <option value="complete">complete</option>
            <option value="uncomplete">uncomplete</option>
          </select>
          </div>
      </form>
    </>
  )
}

export default Form;