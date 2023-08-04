import { writable } from 'svelte/store';

export const TodoListStore = writable([]);

export const addTodo = (text) => {
    TodoListStore.update((list) => {
        return [...list, { text, done: false, id: Date.now() }];
    });
}

export const removeTodo = (id) => {
    TodoListStore.update((list) => {
        return list.filter((todo) => todo.id !== id);
    });
}

export const toggleTodoComplete = (id) => { 
    TodoListStore.update((list) => {
        return list.map((todo) => {
            if (todo.id === id) {
                return { ...todo, done: !todo.done
                };
            }
            return todo;
        });
    });
}