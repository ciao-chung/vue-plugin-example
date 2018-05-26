<template>
  <div vue-dialog v-if="open">
    <h2>Dialog Title</h2>
    <div>{{content}}</div>
  </div>
</template>

<script>
import { events } from '@/components/Plugin/Events.js'
export default {
  data() {
    return {
      content: null,
      open: false,
    }
  },
  created() {
    events.$on('dialog', this.toggle)
  },
  methods: {
    toggle(options) {
      this.open = !this.open
      this.content = options
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
div[vue-dialog]
  position: fixed
  top: 100px
  left: calc(100vw/2 - 400px/2)
  border: 2px gray solid
  width: 400px
  height: 300px
  padding: 15px
</style>