// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Main from "./components/main";
import React from "react";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
            item: ''
        }
    }
    handleChange = (e) => {
        this.setState({item: e.target.value})
    }
    handleClick = () => {
        this.setState({list: [...this.state.list , this.state.item]})
    }


    render() {
        return(
            <div>
                <input type="text" onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>Add</button>
                <ul>
                    {
                        this.state.list.map((item) => {
                            return <li>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList;