
const Tweet = ({ task, onDelete }) => {
    return (

        <div className="card shadow-lg mt-10  compact side bg-base-100 w-25">
            <div className="flex-row items-center space-x-4 card-body">
                <div>

                </div>
                <div className="flex-1">

                    <h2 className="card-title text-sm">{task.reminder}</h2>
                    <p className="text-base-content text-opacity-40 justify-items-center">{task.day}</p>
                    <p className="text-base-content text-opacity-70 text-lg">{task.text}</p>



                </div>
                <div className="flex space-x-2 flex-0">
                    <button className="btn btn-sm btn-square" onClick={() => onDelete(task.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Tweet
