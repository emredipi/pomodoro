<template>
  <div class="card">
    <div class="header" v-if="!!$slots['header']">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <slot/>
    </div>
    <div class="footer" v-if="!!$slots['footer']">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style scoped>
.card {
  background-color: #111111;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  max-height: 500px;
  max-width: 500px;
  color: #c6c6c6;
  display: flex;
  flex-direction: column;
}

.header, .footer {
  padding: 10px;
  font-weight: 600;
  background-color: black;
  opacity: 1;
}

.header {
  border-radius: 5px 5px 0 0;
}

.footer {
  border-radius: 0 0 5px 5px;
}

.body {
  flex: 1;
}
</style>
