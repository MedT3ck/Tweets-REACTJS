
import { useState } from "react"

const AddTweet = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {

        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder('')
    }
    return (
        <form onSubmit={onSubmit}>

            <div className="form-control ">
                <label className="label">
                    <span className="label-text">Express yourself</span>
                </label>
                <textarea className="textarea h-24 textarea-bordered" placeholder="What are you thinking about ?" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => setReminder('Med Ramouz')} onKeyUp={(e) => setDay('Feb 5th at 2:30pm')}></textarea>
                <label className="label">
                    <a href="#" className="label-text-alt"></a>
                    <button className="btn btn-info btn-sm ">Post</button>
                </label>
            </div>
        </form>
    )
}

export default AddTweet
