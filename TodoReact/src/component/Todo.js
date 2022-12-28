import { useState, useEffect } from "react";
import todoImage from '../Images/todoIcon.png'
const Todo = (props) => {
    const [text, setText] = useState('');
    const [todo, setTodo] = useState([]);
    const [isEdit, setisEdit] = useState(null);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [searchInput, setSearchInput] = useState("");
    
    const handleChange = (event) => {
        setText(event.target.value);
    }
    useEffect(() => {
        if (text.length === 0) {
            setToggleSubmit(true);
        }
    })

    //Add todo
    const addData = () => {
        if (!text) {
            alert("Please Enter Something")
        }
        else if (text.length) {
            let newTodo = { todo: text, id: text, completed: false }
            console.log(todo, "VVVVVVVVVv");
            setTodo([...todo, newTodo]);
            setText('');
            setToggleSubmit(true);
            if (!toggleSubmit) {
                setTodo(todo.map((elem) => {
                    if (elem.id === isEdit) {
                        return { ...elem, todo: text }
                    }
                    return elem;
                }))
            }

        }
    }

    //Remove todo
    const removeElement = (index) => {
        const newFilter = todo.filter((_, i) => i !== index);
        setTodo(newFilter)
    }

    //Edit todo
    const editTodo = (id) => {
        setToggleSubmit(false);
        let newEditItem = todo.find((elem) => elem.id === id)
        console.log("Edit", newEditItem);
        setText(newEditItem.todo);
        setisEdit(id);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    //Complete Todo
    const handleComplete = (id) => {
        let completeItem = todo.map(items => {
            console.log("Hey!");
            if(items.id === id){
                return ( {"todo": items.todo, 
                "id": items.id, 
                "completed": true})

            } else {
                return {...items}
            }
        })
        setTodo(completeItem)
    };


    return (
        <div>
            <div className="searchBar">
                <input onChange={handleSearch}
                    value={searchInput} type="text" placeholder="Search.." />
            </div>
            <div className="imageBox">
                <img src={todoImage} />
            </div>
            <input onChange={handleChange} value={text} type="text" id="fname" placeholder="enter todo.." />
            {toggleSubmit ? <button className="addBtn" onClick={addData} >Add</button> : <button onClick={addData} >Update</button>}
            <ul>{todo.length ? todo.filter((data) => { return data.todo.includes(searchInput) })
                .map((item, i) => <li  className={item.completed ? 'completedTodo': null} id={item.id} key={i}>{item.todo} 
                <button onClick={() => removeElement(i)} className="smallBtn">Remove</button> 
                <button onClick={() => handleComplete(item.id)} className="smallBtn">completed</button> 
                {!item.completed ?<button onClick={() => editTodo(item.id)} className="smallBtn">Edit</button>:null}</li>) : null}</ul>
        </div>
    );
}

export default Todo;