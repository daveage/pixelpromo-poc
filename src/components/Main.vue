<template>
  <div class="hello">
    <h1>{{ content.msg }}</h1>
    <ul>
      <li><router-link to="Login">Login</router-link></li>
    </ul>
    <page-content v-bind:content="content"></page-content>
  </div>
</template>

<script>
import sweetalert from 'sweetalert';
import PageContent from './PageContent';
// import CreateTodo from './components/CreateTodo';

export default {
  name: 'Main',
  components: {
    PageContent,
  },
  data () {
    return {
      content: {
        msg: 'Welcome to Your Vue.js App',
        pageBlocks: [{
          id: 0,
          title: 'Todo A',
          project: 'Project A',
          templateId : 0,
          data: {header: 'Electric Park', article: 'Lorem ipsum'},
          done: false,
        }, {
          id: 1,
          title: 'Todo B',
          project: 'Project B',
          templateId : 0,
          data: {header: 'Electric Park', article: 'Lorem ipsum B'},
          done: true,
        }, {
          id: 2,
          title: 'Todo C',
          project: 'Project C',
          templateId : 0,
          data: {header: 'Electric Park', article: 'Lorem ipsum C'},
          done: false,
        }, {
          id: 3,
          title: 'Todo D',
          project: 'Project D',
          templateId : 0,
          data: {header: 'Electric Park', article: 'Lorem ipsum D'},
          done: false,
        }],
        blockTemplates: [{
            id: 0,
            body: '<div class=\"row\">\n<div class=\"m-hide col-2\">\n&nbsp;\n</div>\n<div class=\"m-col-1 col-2\">\n<h3>{{header}}</h3>\n<p>{{article}}</p>\n      </div>\n    </div>'
          }
        ]
      }
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
.checkbox-wrapper {
  border: 1px #345 solid;
}
</style>
