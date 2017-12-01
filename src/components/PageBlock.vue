<template>
  <div class='block-container'>
    <div class="content" v-show="!isEditing">
      <div class='header'>
          {{ pageBlock.title }} <my-checkbox></my-checkbox>
      </div>
      <div class='meta'>
          {{ pageBlock.project }} - {{ pageBlock.templateId }} - {{ blockId }}
      </div>
      <div class='extra content'>
          <span class='right floated edit icon' v-on:click="showForm">
          <i class='edit icon'></i>
        </span>
        <span class='right floated trash icon' v-on:click="deleteTodo(pageBlock)">
          <i class='trash icon'></i>
        </span>
      </div>
    </div>
    <div class="content" v-show="isEditing">
      <div class='ui form'>
        <div class='field'>
          <label>Title</label>
          <input type='text' v-model="pageBlock.title" >
        </div>
        <div class='field'>
          <label>Project</label>
          <input type='text' v-model="pageBlock.project" >
        </div>
        <div class='ui two button attached buttons'>
          <button class='ui basic blue button' v-on:click="hideForm">
            Close X
          </button>
        </div>
      </div>
    </div>
    <div class='ui bottom attached green basic button' v-show="!isEditing &&pageBlock.done" disabled>
        Completed
    </div>
    <div class='ui bottom attached red basic button' v-on:click="completeTodo(pageBlock)" v-show="!isEditing && !pageBlock.done">
        Pending
    </div>
    <block v-bind:data="pageBlock"></block>
  </div>

</template>

<script type="text/javascript">
  import Block from './DynamicBlock';

  export default {
    props: ['pageBlock'],
    components: {
      Block,
    },
    data() {
      return {
        isEditing: false,
        comps: [{
          template: this.pageBlock.template,
            data: {
              article: `It's the first dynamic template!`,
              header: 'aaa'
            }
        }],
        blockId: this.pageBlock.id
      };
    },
    methods: {
      completeTodo(todo) {
        this.$emit('complete-todo', todo);
      },
      deleteTodo(todo) {
        this.$emit('delete-todo', todo);
      },
      showForm() {
        this.isEditing = true;
      },
      hideForm() {
        this.isEditing = false;
      },
    },
  };
</script>

<style>
	p.tasks {
	  text-align: center;
	}
  .block-container {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin: 20px;
  }

	.header {

  }

  .content {

  }

  .field {

  }
</style>
