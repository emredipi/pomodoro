<template>
  <Button>
    <slot/>
  </Button>
</template>

<script>
export default {
  name: "PButton"
}
</script>

<style scoped>
button{
  border: 0;
  padding: 10px 15px;
  background-color: #0c0c0c;
  color: #bebebe;
  border-radius: 5px;
  font-size: 2rem;
  transition: all 100ms;
}
button:hover{
  cursor: pointer;
  background: black;
  color:white;
}
</style>
