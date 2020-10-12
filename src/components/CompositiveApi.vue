<template>
<div>
<input v-model="num1" @keyup="addnumber"/>
    <lable>+</lable>
  <input v-model="num2" @keyup="addnumber"/> 
  <lable>=</lable>
  <lable>{{result}}</lable>
    </div>
</template>
<script>
import { ref } from 'vue'

export default {
    setup() {
 let num1 = ref('0')
 let num2 = ref('0')
 let result = ref('0')
function addnumber(){
    result.value=parseInt(num1.value)+parseInt(num2.value)
}
        return{
           num1,num2, result, addnumber
            }
    }

}
</script>