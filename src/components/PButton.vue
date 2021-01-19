<template>
  <Button :class="{small:small!==undefined,round:round!==undefined}">
    <slot/>
  </Button>
</template>

<script>
export default {
  name: "PButton",
  props: ['small', 'round']
}
</script>

<style scoped>
button {
  border: 0;
  padding: 10px 15px;
  background-color: #0c0c0c;
  color: #bebebe;
  border-radius: 5px;
  font-size: 2rem;
  transition: all 100ms;
  outline: none;
}

button:hover {
  cursor: pointer;
  background: black;
  color: white;
}

.small {
  font-size: 1rem;
  padding: 5px 10px;
}

.round {
  border-radius: 50%;
}
</style>
