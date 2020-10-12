<template>
<div>
      <div>
          <h1 id="head">Welcome to Register Form</h1>
        <label>First name</label>
        <input placeholder="First Name" v-model="inputVal1"/><br />
         <label>Last name</label>
        <input placeholder="Last Name" v-model="inputVal2"/><br />
         <label>Email ID</label>&nbsp;
         <input placeholder="Email ID" v-model="inputEmail"/><br />
          <label>Phone No</label>&nbsp;
         <input placeholder="Phone No" v-model="inputPhoneno"/><br />
          <label>Gender</label>&nbsp;&nbsp;
         <input type="radio" id="f" value="Female" v-model="picked" />
         <label for="Female">Female</label>
         <input type="radio" id="m" value="Male" v-model="picked" />
         <label for="Male">Male</label>
         <br />
      </div>
  <UserForm :first-name="inputVal1" :last-name="inputVal2" :email-id="inputEmail" :phone-no="inputPhoneno" v-on:clicked="onChildClick"/>
<div v-if=isShowing id="model">
  <div id="condent">
  <h1 id="dialogue">Verify Register </h1>
  <label >Full Name: {{fullName}}</label><br>
  <label >Email ID: {{inputEmail}}</label><br>
  <label >Phone No: {{inputPhoneno}}</label><br>
  <button id="close" @click="isShowing = !isShowing">Close</button>
  </div>
</div>
</div>
</template>

<script>
import { ref } from 'vue'
import UserForm from './UserForm'
export default {
    components: {UserForm},
      setup() {
        let inputVal1 = ref('')
        let inputVal2 = ref('')
        let fullName = ref('')
        let inputEmail = ref('')
        let inputPhoneno = ref('')
        let isShowing=ref(false)
        function onChildClick(value) {
            fullName.value = value.name
            inputEmail.value=value.email
            inputPhoneno.value=value.phoneno
            isShowing.value=true
        }
        return { 
            inputVal1, inputVal2, fullName, onChildClick,isShowing,inputPhoneno,inputEmail
         }
      }
}
</script>

<style>
h1,#head{
  color: #05f4d7;
}
h1,#dialogue{
 color: #feffff;
}
button,#submit{
       margin-left: 67px;
    width: 192px;
    height: 50px;
    color: #feffff;
    background-color: #05f4d7;
    border: none;
}
button,#close{
    margin-left: 67px;
    width: 86px;
    height: 39px;
    color: #05f4d7;
    background-color: #feffff;
    border: none;
    margin-top: 10px;

}
#model{
      height: 100%;
    justify-content: center;
    left: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    transition: .2s cubic-bezier(.25,.8,.25,1),z-index 1ms;
    width: 100%;
    z-index: 201;
    outline: none;
}
#condent{
  padding-left: 26px;
  padding-bottom: 26px;
  color: #feffff;
  background-color: #1bf2d8;
    width: 206px;
    transform-origin: center center;
    max-width: 290px;
    border-radius: 4px;
    margin: 248px;
    overflow-y: auto;
    pointer-events: auto;
    transition: .3s cubic-bezier(.25,.8,.25,1);
    width: 100%;
    z-index: inherit;
    box-shadow: 0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12);
}
</style>