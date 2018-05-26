import Dialog from '@/components/Plugin/Dialog.vue'
import { events } from '@/components/Plugin/Events.js'

class Installer {
  constructor() {
    this.isInstalled = false
  }
  install(Vue, options) {
    if(this.isInstalled) return
    this.isInstalled = true

    Vue.component('VueDialogPlugin', Dialog)

    Vue.prototype.$dialog = (options) => {
      events.$emit('dialog', options)
    }
  }
}

export default new Installer()