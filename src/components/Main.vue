<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link to="Login">Login</router-link></li>
    </ul>
    <block-list v-bind:pageBlocks="pageBlocks"></block-list>
  </div>
</template>

<script>
import sweetalert from 'sweetalert';
import BlockList from './BlockList';
// import CreateTodo from './components/CreateTodo';

export default {
  name: 'Main',
  components: {
    BlockList,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pageBlocks: [{
        id: 0,
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        id: 1,
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        id: 2,
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        id: 3,
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }],
    };
  }
  // methods: {
  //   createBlock(newBlock) {
  //     this.pageBlocks.push(newBlock);
  //     sweetalert('Success!', 'Block created!', 'success');
  //   },
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
