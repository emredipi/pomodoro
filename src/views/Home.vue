<template>
  <Card>
    <div slot="header" class="break">MOLA</div>
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
  flex-direction: column;
  height: 100%;
}

.break, .study {
  border-radius: 5px 5px 0 0;
  padding: 5px;
  font-size: 2rem;
  margin: -10px;
  text-align: center;
}

.break {
  background-color: #cdcd00;
  color: black;
}

.study {
  background-color: #00cd52;
  color: black;
}
</style>
