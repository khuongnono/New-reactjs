import React from "react";
import { toast } from "react-toastify";
import "./ListTodo.scss";

class AddTodo extends React.Component{

    state = {
        title: '',
    }

    
    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = () => {
        if(!this.state.title){
            toast.error(`missing title Todo!`)
            return;
        }
        let Todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
        this.props.AddNewTodo(Todo);

        this.setState({
            title: '',
        })

    }


    render(){
        let {title} = this.state
        return(
            
            <div className="add-todo">
                    <input type="text" value={title} 
                        onChange = {(event) => this.handleChangeTitle(event)}
                    />
                    <button type="button" className="add"
                        onClick={() => this.handleAddTodo()}
                    >Add</button>
            </div>
        )
    }
}

export default AddTodo;