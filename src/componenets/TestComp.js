import { useState } from "react"
const TestComp = (props) => {

    const [textVal, settextVal] = useState('ToBeHidden')
    const func = () => { settextVal('') }
    const sunc = () => { settextVal('ToBeHidden') }

    return (
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">

            <p id="tod" className="text-lg font-semibold">
                {textVal}
            </p>



            <ul className="grid grid-cols-2 gap-4 ">
                <li className=" col-span-1 rounded-md cursor-pointer	">
                    <div className="shadow-sm bg-white rounded-lg h-18 bg-green-500" onClick={sunc} >Show</div>
                </li>
                <li className=" col-span-1 rounded-md cursor-pointer " onClick={func} >
                    <div className="shadow bg-white rounded-lg h-18 bg-blue-500" >Hide</div>
                </li>

            </ul>
        </div>
    )
}

export default TestComp
