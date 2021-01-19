<template>
  <Card>
    <div slot="header">Header</div>
    <div class="center">
      <div class="time">
        10:00
        <PButton>Başlat</PButton>
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "@/components/Card";
import PButton from "@/components/PButton"

export default {
  name: 'Home',
  components: {
    Card,
    PButton
  }
}
</script>

<style scoped>
.time {
  font-size: 5rem;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.center {
  display: flex;
  height: 100%;
}
</style>
