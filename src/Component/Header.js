import React, { useState } from 'react'
import notes from "../Assists/Image/notes.png";
import doubleTick from "../Assists/Image/double-tick.png"
import { useDispatch } from 'react-redux';
import { added, allcompleted, clearcompleted } from '../Redux/Todos/actions';
import plus from '../Assists/Image/plus.png'
const Header = () => {

    const [input , setInput] = useState('');
    const dispatch = useDispatch()
    const handleInput = (e) => {
          setInput(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(added(input))
        setInput('')
    }

    const completeAll = () => {
        dispatch(allcompleted())
    }

    const clearComplete = () => {
        dispatch(clearcompleted())
    }

  return (
    <div>
    <form
        onSubmit={submitHandler}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
    >
        <img
            src={notes}
            className="w-6 h-6"
            alt="Add todo"
        />
        <input
            type="text"
            placeholder="Type your todo"
            value={input}
            onChange={handleInput}
            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
            type="submit"
            className={`appearance-none w-8 h-8 bg-[url('${plus}')] bg-no-repeat bg-contain`}
        >
          
        </button>
    </form>

    <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
            <img
                className="w-4 h-4"
                src={doubleTick}
                alt="Complete"
            />
            <span onClick={()=> completeAll()}>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={() => clearComplete()}>Clear completed</li>
    </ul>
</div>

  )
}

export default Header