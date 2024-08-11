import React from "react"
import { Link } from "react-router-dom"

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white py-4 w-full">
            <div className="flex justify-between px-3 md:px-6">
       <Link to={"/"}>{`${process.env.TODO_AUTHOR_NAME}'s Todo List`}</Link>
       <div className="flex gap-2 md:gap-6">
       <Link to={"/"}>View List </Link>
       <Link to={"/add"}>Add Todo </Link>
       </div>
       </div>
      </header>
    )
}

export default Header