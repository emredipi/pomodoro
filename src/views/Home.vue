<template>
  <Card>
    <div slot="header">Header</div>
    <div class="center">
      <Timer/>
    </div>
  </Card>
</template>

<script>
import Card from "@/components/Card";
import Timer from "@/components/Timer";
export default {
  name: 'Home',
  components: {
    Card,
    Timer
  },
}
</script>

<style scoped>
.center {
  display: flex;
  height: 100%;
}
</style>
