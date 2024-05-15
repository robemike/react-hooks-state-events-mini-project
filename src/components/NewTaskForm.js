import React, { useState } from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [newTask,setNewTask] = useState({
    text:"",
    category:"Code"
  })

  const newCategory = categories.filter((category)=> category!=="All")
  const categoryOptions = newCategory.map((category)=>{
    return <option key={category} value={category}>{category}</option>
  })

  function handleChange(e){
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value
    })
  }
  function handleSubmit(e){
    e.preventDefault()
    onTaskFormSubmit(newTask)
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/>
      </label>
      <label>
        Category:
        <select name="category" onChange={handleChange}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;