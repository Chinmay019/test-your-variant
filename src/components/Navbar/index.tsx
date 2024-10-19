export const Navbar = () => {
    return (
        <div className="navbar bg-zinc-300">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl" href="/home">Test Your Variant</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="/home">All Cars</a></li>
                    <li>
                        <details className="dropdown dropdown-end">
                            <summary>Services</summary>
                            <ul tabIndex={0} className="p-2 menu menu-sm dropdown-content bg-base-100 text-slate-400 z-[1] rounded-box lg:min-w-max">
                                <div >
                                    <li className="dropdown-item"><a>Sign Up</a></li>
                                    <li className="dropdown-item"><a href="/about-us">About Us</a></li>
                                </div>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={ 0 } role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={ 0 }
                            className="menu menu-sm dropdown-content text-slate-400 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between" href="/profile">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
} 