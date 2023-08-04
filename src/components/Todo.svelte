<script>
    import { removeTodo, toggleTodoComplete } from "../stores/todoStore";

    export let todo;
    
</script>

<div
  class="flex items-center justify-between p-4 border-b border-gray-300 {todo.done ? 'line-through' : ''}"
>
  <span>{todo.text}</span>
  <div class="flex space-x-2">
    <button on:click={toggleTodoComplete(todo.id)} class="text-green-500">
      {#if todo.done}
        <svg
          class="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      {:else}
        <svg
          class="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      {/if}
    </button>
    <button on:click={removeTodo(todo.id)} class="text-red-500">
      <svg
        class="w-6 h-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</div>