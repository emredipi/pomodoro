<template>
  <div class="time">
    {{ minute }}:{{ second }}
    <PButton @click="resetTimer" v-if="this.time === 0">Reset</PButton>
    <PButton @click="$emit('updatedTimer', false);" v-else-if="isRunning">Durdur</PButton>
    <PButton @click="$emit('updatedTimer', true);" v-else>Başlat</PButton>
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
    time: 0,
    timer: null,
  }),
  methods: {
    decreaseTime() {
      if (this.time === 0) {
        return this.stopTimer();
      }
      this.time -= 1;
    },
    resetTimer() {
      const time = this?.settings?.times?.study;
      this.time = (time ? time : 0) * 60;
    },
    startTimer() {
      this.timer = setInterval(this.decreaseTime, 1000);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
    syncTimer() {
      if (this.isRunning) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
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
    },
    isRunning() {
      return this.settings.isRunning;
    }
  },
  props: ['settings'],
  watch: {
    isRunning: {
      immediate: true,
      handler: function () {
        this.syncTimer();
      }
    }
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
