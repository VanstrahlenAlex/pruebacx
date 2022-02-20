<template>
  <div class="hello">
    <h1>Contactos Imagine CX</h1>
    <p></p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  props: {
    msg: String
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch(){
      axios.get('http://localhost:8081/imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/').then(response =>{
        console.log('+++++ SuUCCESS +++++');
        console.log(response.data);
      }).catch(() =>{
        console.log('+++++ ERROR +++++')
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
