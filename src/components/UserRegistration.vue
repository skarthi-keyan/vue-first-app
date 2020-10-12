<template>
      <div>
        <input placeholder="First Name" v-model="inputVal1"/>
        <input placeholder="Last Name" v-model="inputVal2"/>
      </div>
  <UserForm :first-name="inputVal1" :last-name="inputVal2" v-on:clicked="onChildClick"/>
<div>
  <label>Full Name: {{fullName}}</label>
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
        function onChildClick(value) {
            fullName.value = value
        }
        return { 
            inputVal1, inputVal2, fullName, onChildClick
         }
      }
}
</script>