<template>
  <Card>
    <div slot="header" class="break">MOLA</div>
    <div class="center">
      <Timer
          v-if="room && room.hasOwnProperty('settings')"
          :settings="room.settings"
          @updatedTimer="isRunning => updateTimer(isRunning)"
      />
    </div>
  </Card>
</template>

<script>
import Card from "@/components/Card";
import Timer from "@/components/Timer";
import {rtdb} from "@/db/firebase";

export default {
  name: 'Home',
  components: {
    Card,
    Timer
  },
  data: () => ({
    room: null
  }),
  firebase: {
    room: rtdb.ref('rooms').child("1")
  },
  methods: {
    updateTimer(isRunning) {
      rtdb.ref('rooms').child("1").child("settings").child("isRunning").set(isRunning);
    }
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
