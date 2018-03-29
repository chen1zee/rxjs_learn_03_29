<template>
  <div class="home__index">
    <div>Index</div>
    <div @click="login">login</div>
    <div @click="createRoom">createRoom</div>
    <div @click="getRooms">getRooms</div>
    <input type="text" v-model="msg"><button @click="sendMsg">send</button>
    <div>room list</div>
    <div v-for="room in rooms" :key="room.id"
         @click="joinRoom(room.id)">
      id: {{room.id}} || 人数: {{room.num}}
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      rooms: [], // 房间列表
      room: { // 进入的房间
        id: '',
        num: 0
      },
      msg: '' // 消息
    }
  }
}
</script>

<style scoped>

</style>
