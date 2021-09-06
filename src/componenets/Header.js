
const Header = () => {
    return (
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
            <div className="flex-none hidden lg:flex">

            </div>
            <div className="flex-1 hidden px-2 mx-2 lg:flex">
                <span className="text-lg font-bold">
                    SweepBook
                </span>
            </div>
            <div className="flex-1 lg:flex-none ">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-ghost" />
                </div>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </div>


            <div className="flex-none">

                <div className=" btn btn-square btn-ghost dropdown dropdown-end">

                    <div tabIndex="0" className="rounded-full w-10 h-10 m-1 ">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">

                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                        </svg>                    <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                            <li className="menu-title">
                                <span>
                                    Notifications
                                </span>
                            </li>

                            <li>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 mr-2 stroke-current">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                    Item with icon

                                </a>
                            </li>
                            <li>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 mr-2 stroke-current">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                    </svg>
                                    Item with icon

                                    <div className="badge ml-2 success">3</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex-none">
                <div className="avatar cursor-pointer dropdown dropdown-end">
                    <div tabIndex="0" className="rounded-full w-10 h-10 m-1 ">
                        <img src="https://i.pravatar.cc/500?img=32"></img>
                        <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                            <li className="menu-title">
                                <span>
                                    My Profile
                                </span>
                            </li>

                            <li>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 mr-2 stroke-current">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                    Feeds

                                </a>
                            </li>
                            <li>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 mr-2 stroke-current">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                    </svg>
                                    Profile Page

                                    <div className="badge ml-2 success">3</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
