<svelte:options tag="my-thing"/>
<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment}>
  count is {count}
  <slot name="stuff">eyo</slot>
</button>
