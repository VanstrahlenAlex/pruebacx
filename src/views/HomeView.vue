<template>
  <div class="home">
    <h1>Proyecto</h1>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'



export default {
    name: 'App',
  components: {
    
  },
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
