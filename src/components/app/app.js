import React, { Component } from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import './app.css';

export default class App extends Component {

    maxId = 100

    state = {
        todoData: [
            this.createTodoItem('Eat a pie'),
            this.createTodoItem('Eat a soup'),
            this.createTodoItem('Eat more food'),
            this.createTodoItem('Have a lunch'),
            this.createTodoItem('Drink banana shake'),
            this.createTodoItem('Свободу Навальному'),
            this.createTodoItem('Шо происходит')
        ],
        term: '',
        filterButton: '' // active, all, done
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++

        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const newArray = todoData.filter( item => item.id !== id )

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

    onToggleImportant = (id) => {
        this.setState( ({todoData}) => {

            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    search = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    filterTodos(items, filterButton) {
        switch(filterButton) {
            case 'all':
                return items;
            case 'active':
                return items.filter(item => !item.done)
            case 'done':
                return items.filter(item => item.done)
            default:
                return items
        }
    }

    onSearchChange = (term) => {
        this.setState({ term })
    }

    onFilterChange = (filterButton) => {
        this.setState({ filterButton })
    }

    render () {

        const { todoData, term, filterButton } = this.state

        const visibleItems = this.filterTodos(this.search(todoData, term), filterButton)

        const doneCount = todoData
                                .filter(el => el.done === true)
                                .length
        const todoCount = todoData.length - doneCount
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter
                        filterButton={filterButton}
                        onFilterChange={this.onFilterChange}/>
                </div>

                <TodoList
                    todos={visibleItems}
                    onDeleted={ this.deleteItem }
                    onToggleImportant = { this.onToggleImportant}
                    onToggleDone = { this.onToggleDone }/>

                    <ItemAddForm onItemAdded={ this.addItem }
                                 blablup={3}/>
            </div>
        )

    }
}