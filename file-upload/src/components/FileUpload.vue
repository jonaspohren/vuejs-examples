<template>
  <label for="file-upload">
    <span>File</span>
    <input id="file-upload" type="file" @change="handleFileChange">
  </label>
</template>

<script>
export default {
  methods: {
    handleFileChange(event) {
      const fileList = event.target.files

      if (fileList.length) {
        this.$emit('input', fileList[0])
      }
    }
  }
}
</script>

<style scoped>
  label {
    display: inline-block;
  }

  input[type="file"] {
    display: none;
  }
</style>