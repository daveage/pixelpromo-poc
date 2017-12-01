<template>
  <div>
    <page-block v-on:delete-block="deleteBlock" v-on:change-block="changeBlock" v-for="block in content.pageBlocks" v-bind:pageBlock="getBlockData(block)" :key="block.id" ></page-block>
    <a href=""></a>
  </div>
</template>

<script type = "text/javascript" >
import sweetalert from 'sweetalert';
import PageBlock from './PageBlock';

export default {
  props: ['content'],
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
        const blockIndex = this.content.indexOf(block);
        this.content.splice(blockIndex, 1);
        sweetalert('Deleted!', 'Your block has been deleted.', 'success');
      });
    },
    changeBlock(block) {
      const blockIndex = this.content.indexOf(block);
      // this.todos[todoIndex].done = true;
      sweetalert('Success!', 'To-Do completed!', 'success');
    },
    getBlockData(block) {
      block.template = '';
      for(var i = 0; i < this.content.blockTemplates.length;i++) {
        if (this.content.blockTemplates[i].id == block.templateId) {
          block.template = this.content.blockTemplates[i].body;
        }
      }
      return [{data: block.data, template: block.template}];
    }
  },
  created: function() {
      this.fetchItems();
  },

  methods: {
      fetchItems()
      {
        let uri = 'http://localhost:4000/page';
        this.axios.get(uri).then((response) => {
            this.items = response.data;
        });
      }
  }
};
</script>

<style scoped>
p.tasks {
  text-align: center;
}
</style>
