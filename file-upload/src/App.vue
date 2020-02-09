<template>
  <div id="app">
    <file-upload v-model="file"/>

    {{file.name}}
  </div>
</template>

<script>
import FileUpload from './components/FileUpload.vue'

export default {
  components: {
    FileUpload
  },
  data() {
    return {
      file: {}
    }
  }
}
</script>

<style>

</style>
