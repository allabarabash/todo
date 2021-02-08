import React, { Component } from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import './app.css';

export default class App extends Component {

    maxId = 100

    createTodoItem = (label) => {
        return {
            label: label,
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
            // 1. update object
            const idx = todoData.findIndex((el) => {
                el.id === id
                console.log(el.id)
                console.log(el.label)
                console.log('------------')
            })
            console.log('Found index: ', idx)
            // idx = -1,
            // то есть индекс элемента на который кликаем, не находится в todoData

            // 2. construct new array
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
        console.log(newItem)
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


    onToggleDone = (id) => {
        console.log('onToggleDone', id)
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
                    onDeleted={ this.deleteItem }
                    onToggleImportant = { this.onToggleImportant}
                    onToggleDone = { this.onToggleDone }/>

                    <ItemAddForm onItemAdded={ this.addItem }/>
            </div>
        )

    }
}