<template>
  <div id="app">
    <router-view/>

    <VueDialogPlugin/>
  </div>
</template>

<script>
import Vue from 'vue'
import Dialog from '@/components/Plugin/Installer.js'
Vue.use(Dialog)

export default {
  name: 'App'
}
</script>

<style lang="sass" type="text/sass" scoped></style>