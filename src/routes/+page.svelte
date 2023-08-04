<script>
    import TodoForm from "../components/TodoForm.svelte";
    import Todo from "../components/Todo.svelte";
    import { TodoListStore } from "../stores/todoStore.js";
</script>

<div class="max-w-md mx-auto mt-8 p-4">
    <h2 class="text-xl font-bold mb-4">Todo List</h2>
    <TodoForm />
    {#each $TodoListStore as todo}
         <!-- content here -->
         <Todo todo={todo} index={todo.id}/>
    {/each}
</div>

  
<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>