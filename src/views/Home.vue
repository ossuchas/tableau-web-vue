<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="openWindow()" class="btn btn-primary">Open Window</button>
    <button @click="sendMessage()" class="btn btn-secondary">Send Message</button>
    <button @click="getProfile()" class="btn btn-danger">Get Profile</button>
    <div>
      <p>{{ profile.userId || '-' }}</p>
      <p>{{ profile.displayName || '-' }}</p>
      <p>{{ profile.pictureUrl|| '-' }}</p>
      <p>{{ profile.statusMessage|| '-' }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data: () => ({
    profile: {
      userId: '',
      displayName: '',
      pictureUrl: '',
      statusMessage: ''
    }
  }),
  methods: {
    openWindow () {
      this.$liff.openWindow({
        url: 'https://developers.line.me/en/docs/liff/overview/'
      })
    },
    closeWindow () {
      this.$liff.closeWindow()
    },
    async getProfile () {
      let _this = this
      await this.$liff.getProfile().then(function (profile) {
        _this.profile = profile
      }).catch(function (error) {
        alert('Error getting profile: ' + error)
      })
    },
    async sendMessage () {
      // this.$liff.sendMessages([ {
      //     type: 'text',
      //     text: 'You/\'ve successfully sent a message! Hooray!'
      //   }
      // ]).then(function () {
      //   window.alert('Message sent')
      // }).catch(function (error) {
      //   window.alert('Error sending message: ' + error)
      // })
      await this.$liff.sendMessages([{
          type: 'text',
          text: 'test'
        }
      ]);
      
      this.$liff.closeWindow()
    }
  }
}
</script>
