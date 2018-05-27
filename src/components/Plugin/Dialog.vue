<template>
  <div vue-dialog v-if="active">
    <h2>{{title}}</h2>
    <div>{{content}}</div>
    <button @click="close">close</button>
  </div>
</template>

<script>
import { events } from '@/components/Plugin/Events.js'
export default {
  data() {
    return {
      title: null,
      content: null,
      active: false,
    }
  },
  async created() {
    events.$on('dialog', this.open)
  },
  methods: {
    open(options) {
      this.active = true
      this.title = options.title || 'Title'
      this.content = options.content || null
    },
    close() {
      this.active = false
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
div[vue-dialog]
  position: fixed
  z-index: 5000
  top: 100px
  left: calc(100vw/2 - 400px/2)
  border: 2px gray solid
  width: 400px
  height: 300px
  padding: 15px
</style>