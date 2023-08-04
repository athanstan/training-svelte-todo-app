<script>
    import { addTodo }  from "../stores/todoStore.js";

    let newTask = "";

    const handleSubmit = () => {
        addTodo(newTask);
        // Do something with the newTask value, like add it to the task list
        console.log("Submitting...");
        newTask = ""; // Reset the input field after submitting
    }
</script>

<div class="flex mb-4">
    <form on:submit|preventDefault={handleSubmit} class="flex-grow flex">
        <input
            type="text"
            bind:value={newTask}
            class="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg"
            placeholder="Add a new task"
        />
        <button
            type="submit"
            class="px-4 py-2 bg-blue-500 text-white rounded-r-lg"
        >
            Add
        </button>
    </form>
</div>


