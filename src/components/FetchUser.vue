<template>
<div>
      <div v-for="user in users1.data" :key="user.id">
          <div>{{user.name}}</div>
      </div>
      <span>ss</span>
</div>
</template>
<script>
import {ref} from 'vue'
export default {
         setup() {
            const users1=ref(null)
        //   const usersResponse = await fetch(
        //   "https://reqres.in/api/users?delay=2"
        // );
        //  users1.value= await usersResponse.json();
        users1.value={data:[{id:'1',name:'karthi'}]}
        console.log(users1.value.data)
        return {
 users1
        }
    }
}
</script>