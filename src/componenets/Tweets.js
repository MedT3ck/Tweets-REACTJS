import Tweet from "./Tweet"
const Tweets = ({ tasks, onDelete }) => {
    return (
        <>
            {tasks.map((task) => (
                <Tweet key={task.id} task={task} onDelete={onDelete} />
            ))}
        </>
    )
}

export default Tweets
