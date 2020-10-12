<template>
<div>
    <div id="code_main" class="row">
         <div id="code_labe" class="column">
        <h1 id="head">Code</h1>
         </div>
         <div id="code" class="column">
        <textarea id="code_input" v-model="code"/>
        </div>
    </div>
     <div id="out" >
       Output Element  <span v-html="code"></span>
    </div>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    setup() {
        let code = ref('')
    return{
        code
        }
    }
}
</script>
<style>


.column {
  float: left;
  width: 50%;
  padding: 10px;
}


.row:after {
  content: "";
  display: table;
  clear: both;
}
textarea{
    width: 546px;
    height: 350px;
}
</style>