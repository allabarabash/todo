import React, { Component } from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import './app.css';

export default class App extends Component {

    maxId = 100

    createTodoItem(label)  {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++

        }
    }

    state = {
        todoData: [
            this.createTodoItem('Drink cofee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
            this.createTodoItem('Свободу Навальному'),
            this.createTodoItem('Шо происходит')
        ]
    }

    onToggleImportant = (id) => {
        console.log('id passed: ', id)
        this.setState( ({todoData}) => {

            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const newArray = todoData.filter( item => item.id !== id )

            // [a, b, c, d, e]
            // [a, b,    d, e]
            // const before = todoData.slice(0, idx)
            // console.log(before)
            // const after = todoData.slice(idx + 1)
            // console.log(after)
            // const newArray = [
            //     ...before,
            //     ...after]

            return {
                todoData: newArray
            }
        })
    }

    addItem = (text) => {
        // generate id
        const newItem = this.createTodoItem(text)
        // add element to the array
        this.setState(({todoData}) => {
            // new state;
            // dont change the state (class variable todoData itself)
            // not return todoData.push(newItem)
            const newArray = [
                ...todoData,
                newItem]

            return {
                todoData: newArray
            }
        })
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex(el => el.id === id) // lambda function

        // 1. update object
        const oldItem = arr[idx]
        const newItem = {... oldItem, [propName]: !oldItem[propName]}

        // 2. construct new array
        return [
            ... arr.slice(0, idx),
            newItem,
            ... arr.slice(idx + 1)
        ]
    }

    onToggleDone = (id) => {
        console.log('id passed: ', id)
        this.setState( ({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    render () {

        const { todoData } = this.state

        const doneCount = todoData
                                .filter(el => el.done === true)
                                .length
        const todoCount = todoData.length - doneCount
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem }
                    onToggleImportant = { this.onToggleImportant}
                    onToggleDone = { this.onToggleDone }/>

                    <ItemAddForm onItemAdded={ this.addItem }
                                 blablup={3}/>
            </div>
        )

    }
}