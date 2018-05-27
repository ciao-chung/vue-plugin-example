<template>
  <div>
    <h1>Demo Page</h1>

    <button @click="open">open</button>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$dialog({
        title: 'foo',
        content: 'bar',
      })
    },
  },
}
</script>