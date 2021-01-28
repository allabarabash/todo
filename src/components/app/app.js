import React, { Component } from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import './app.css';

export default class App extends Component {
    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Make Awesome App', important: false, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 },
            { label: 'Свободу Навальному', important: false, id: 4 },
            { label: 'Парам пам пам', important: false, id: 5 },
            { label: 'Ещё что-то, забылъ', important: false, id: 6 }
        ]
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = this.state.todoData.findIndex( (el) => el.id === id )

            // [a, b, c, d, e]
            // [a, b,    d, e]
            const before = todoData.slice(0, idx)
            console.log(before)
            const after = todoData.slice(idx + 1)
            console.log(after)
            const newArray = [
                ...before,
                ...after]

            return {
                todoData: newArray
            }
        })
    }

    render () {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem }/>
            </div>
        )

    }
}