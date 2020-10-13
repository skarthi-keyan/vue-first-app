<template>
<div >
    <div class="wrap">
      <div class="card" v-for="user in users.data" :key="user.id">
          <img src="../assets/user.jpg" v-bind:alt="user.name"/>
          <input class='check' type="checkbox" id="checkbox" v-model="checked" />
          <div class='name'>Name : {{user.name}}</div>
         <div class='name'>Email : {{user.email}}</div>
         <div class='name'>City  : {{user.city}}</div>
      </div>
    </div>
</div>
</template>
<script>
import {ref} from 'vue'
import useUsers from "../modules/users";
export default {
         setup() {
            const checked=ref(true)
        const { users}=useUsers();
        return {
 users,checked
        }
    }
}
</script>
<style>
.name{
    font-weight: bold;
    margin: 0 0 2px 2px;
}
.wrap{
    width: 1000px;
    margin: auto;
    margin-top: 100px;
}
img{
     width: 80px;
    height: 75px;
}
.check{
    float: left;
}
.card{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6);
    transition: 0.4s;
width : 300px;
background:rgb(5, 244, 215);
text-align: center;
font-size: 16px;
font-family: sans-serif;
margin-bottom: 4PX;
margin: 5px;
float: left;
height: 160px;
}
.card:hover{
    box-shadow: 0 0 8px 4px  rgba(0,0,0,0.6);
}
</style>