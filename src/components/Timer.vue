<template>
  <div class="time">
    {{ minute }}:{{ second }}
    <PButton @click="resetTimer" v-if="this.time === 0">Reset</PButton>
    <PButton @click="toggleTimer" v-else>{{ this.timer ? 'Durdur' : 'Başlat' }}</PButton>
  </div>
</template>

<script>
import PButton from "@/components/PButton";

export default {
  name: "Timer",
  components: {
    PButton
  },
  data: () => ({
    INITIAL_TIME: 25 * 60,
    time: 0,
    timer: null
  }),
  methods: {
    decreaseTime() {
      this.time -= 1;
      if (this.time === 0) {
        this.stopTimer();
      }
    },
    toggleTimer() {
      if (this.timer) {
        this.stopTimer();
      } else {
        this.timer = setInterval(this.decreaseTime, 1000);
      }
    },
    resetTimer() {
      this.time = this.INITIAL_TIME;
    },
    stopTimer() {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
  computed: {
    minute() {
      return parseInt(this.time / 60);
    },
    second() {
      let second = this.time % 60;
      if (second < 10) {
        second = "0" + second;
      }
      return second;
    }
  },
  mounted() {
    this.resetTimer();
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
</style>
