<template>
<div>
<div class='arithmatic'>
    <div>ADD using ref      </div>
<input class='input' v-model="num1" @keyup="addNumber"/>
    <lable>+</lable>
  <input class='input' v-model="num2" @keyup="addNumber"/> 
  <lable>=</lable>
  <lable>{{resultSum}}</lable>
    </div>

<div class='arithmatic'>
    <div>SUB using reactive </div>
<input class='input' v-model="numSub1.value" @keyup="subNumber"/>
    <lable>-</lable>
  <input class='input' v-model="numSub2.value" @keyup="subNumber"/> 
  <lable>=</lable>
  <lable>{{resultSub.value}}</lable>
    </div>

</div>
</template>
<script>
import { reactive, ref } from 'vue'

export default {
    setup() {
//ref 
 let num1 = ref('0')
 let num2 = ref('0')
 let resultSum = ref('0')
 //rect 
 let numSub1 = reactive({ value: 0 })
 let numSub2 = reactive({ value: 0 })
 let resultSub = reactive({ value: 0 })
function addNumber(){
    resultSum.value=parseInt(num1.value)+parseInt(num2.value)
}
function subNumber(){
    resultSub.value=parseInt(numSub1.value)-parseInt(numSub2.value)
}
        return{
           num1,num2, resultSum, addNumber,numSub1,numSub2,resultSub,subNumber
            }
    }

}
</script>

<style>
.arithmatic{
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6);
transition: 0.4s;
height:50px;
background:rgb(5, 244, 215);
margin: 4px;
padding: 20px 20px;
width: 500px;
    font-weight: bold;
}
.input{
    height: 20px
}
</style>