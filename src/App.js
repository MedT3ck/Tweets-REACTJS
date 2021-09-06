
import { useState, useEffect } from "react"
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import AddTweet from "./componenets/AddTweet";
import Tweets from "./componenets/Tweets";
function App() {

  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const getTasks = async () => {

      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }
    getTasks()
  }, [])

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  //Add task
  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)

    })
    const data = await res.json()
    setTasks([...tasks, data])
  }

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className="App">

      <Header />
      <AddTweet onAdd={addTask} />
      <Tweets tasks={tasks} onDelete={deleteTask} />
      <Footer />
    </div>
  );
}

export default App;
