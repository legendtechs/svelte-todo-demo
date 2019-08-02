<style>
  .todo-list {
    display: flex;
    flex-direction: column;
    max-height: 300px;
    min-height: 30px;
    overflow: hidden;
    overflow-y: auto;
    justify-content: center;
    align-items: center;
  }
  .btn {
    background-color: antiquewhite;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    max-width: 100px;
  }
</style>
<script>
  import Todo from '../../stores/todo.js';
  import Item from './Item.svelte';
  const todos = new Todo();
  let cachedList = []
  todos.todoList.subscribe(list => {
    console.log('subscribe ', list)
    cachedList = [...list];
  })
  $: temList = cachedList;
  console.log(todos)
  const actions = {
    add: todos.add,
    remove: todos.remove,
    modify: todos.modify
  }
</script>
<div class="todo-list">
  <span class="btn" on:click={actions.add}>
    新增
  </span>
  {#if temList && temList.length > 0}
    {#each temList as todo}
      {#if !!todo}
        <Item todo={todo} {...actions}/>
      {/if}
    {/each}
  {/if}
</div>