<style>
</style>
<script>
  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
  import { writable, readable, derived, get} from 'svelte/store';
  const observerCount = writable(0);
  let count = 0;
  onMount(() => {
    console.log('onMount ')
  })
  onDestroy(() => {
    console.log('onDestroy ')
  })
  beforeUpdate(() => {
    console.log('beforeUpdate ', count)
  })
  afterUpdate(() => {
    console.log('afterUpdate ', count)
  })
 observerCount.subscribe(value => {
   console.log('====================================');
   console.log('value ', value);
   console.log('====================================');
 })
  const add = (num) => {
    observerCount.update(n => n + 2);
    count = get(observerCount)
  }
  const decrease = (num) => {
    observerCount.update(n => n - 1 >=0? n -1 : 0);
    count = get(observerCount)
  }
  const reset = () => {
    observerCount.set(1)
    count = get(observerCount)
  }
  
</script>
<div>
  <div>
    <button on:click="{add}">+</button>
    <button on:click="{decrease}">-</button>
    <button on:click="{reset}">reset</button>
  </div>
  <div>
    <span>{count}</span>
  </div>
</div>
