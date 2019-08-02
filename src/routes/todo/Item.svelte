<style>
  .todo-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    /* height: 30px; */
    padding: 5px 10px;
    border-bottom: 1px solid greenyellow;
    align-items: center;
    justify-content: space-between;
  }
  .text {
    height: 28px;
  }
  .btn {
    background-color: antiquewhite;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
</style>
<script>
  export let todo;
  export let remove;
  export let add;
  export let modify;
  let tempText = todo.text;
  console.log(todo)
</script>
<div class="todo-item">
  <input type="text" class="text" bind:value={tempText} />
  {#if !!tempText}
    <span class="btn" on:click={() => remove({
      id: todo.id,
      text: tempText
    })}>
      删除
    </span>
    <span class="btn" on:click={() => modify({
      id: todo.id,
      text: tempText
    })}>
      确认
    </span>
  {/if}
</div>