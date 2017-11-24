<template>
  <div>
    <page-block v-on:delete-block="deleteBlock" v-on:change-block="changeBlock" v-for="block in pageBlocks" v-bind:pageBlock="block" :key="block.id"></page-block>
    <a href=""></a>
  </div>
</template>

<script type = "text/javascript" >
import sweetalert from 'sweetalert';
import PageBlock from './PageBlock';

export default {
  props: ['pageBlocks'],
  components: {
    PageBlock,
  },
  methods: {
    deleteBlock(block) {
      sweetalert({
        title: 'Are you sure?',
        text: 'This block will be permanently deleted!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        closeOnConfirm: false,
      },
      () => {
        const blockIndex = this.pageBlocks.indexOf(block);
        this.pageBlocks.splice(blockIndex, 1);
        sweetalert('Deleted!', 'Your block has been deleted.', 'success');
      });
    },
    changeBlock(block) {
      const blockIndex = this.pageBlocks.indexOf(block);
      // this.todos[todoIndex].done = true;
      sweetalert('Success!', 'To-Do completed!', 'success');
    },
  },
};
</script>

<style scoped>
p.tasks {
  text-align: center;
}
</style>
