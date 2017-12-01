
<template>
  <Dynamic :comps="comps" :emptyView="emptyView"/>
</template>
<script>
  import Dynamic from 'vue-dynamic/dynamic'
  import NoItem from './BlankBlock'

  export default {
    props: ['data'],
    data() {
      return {
        comps: this.data,
        emptyView: NoItem
      }
    },
    components: {
      Dynamic
    }
  }
</script>
