<template>
   <div class="container">
    <div style="font-weight: bold;font-size: 30px;"> Demo Page</div>
    <div class="component">
          <span>Text Input </span>
        <input :class=input type="text"/>
        <span>width</span>
         <input type="radio" id="s" value="text-input-s" v-model="picked" />
  <label for="s">S</label>
  <input type="radio" id="m" value="text-input-m" v-model="picked" />
  <label for="m">M</label>
  <input type="radio" id="l" value="text-input-l" v-model="picked" />
  <label for="l">L</label>
    </div>
     <div class="component">
             <span>Date Input </span>
          <input type="date" pattern=""/>
    </div>
     <div class="component">
             <span>Pop Hover</span>
        <div class="arrow right">
        <div class="frame">
            Header
        </div>
        </div>
    </div>
   </div>
</template>
<script>
import {ref,watch} from 'vue'
export default {
    setup(){
        let input=ref(null)
        let picked=ref('text-input-s')
        input.value=picked.value
        watch(picked, (picked) => {
  input.value=picked
})
        return{
          input,picked
        }
    }
}
</script>
<style>
.text-input-s{
    width: 50px;
}
.text-input-m{
    width: 100px;
}
.text-input-l{
    width: 150px;
}
.component{
    background:rgb(5, 244, 215);
    margin-bottom: 5px;
    padding-left: 5px;
    height: 50px;
    padding-top: 5px;
}
.arrow{
     background:rgb(5, 244, 215);
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    top: 190px;
    left: 88px;
}
.arrow.right{
    right: -20px;
    border-right:10px solid #ffffff;
    }
.frame{
    padding: 5px;
    margin-left: 10px;
    margin-top: -17px;
    position: relative;
    background: #fdfdfa;
    float: left;
    height: 35px;
    width: 141px;

}
</style>