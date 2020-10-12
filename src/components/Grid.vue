<template>
<div id="grid">
    <h3> Users info using axios:</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border_bottom" v-for="user in users" v-bind:key="user.id">
          <th scope="row">{{user.id}}</th>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.address.city}}</td>
        </tr>
      </tbody>
    </table>
    <Suspense>
      <template #default>
        <FetchUser/>
      </template>
       <template #fallback>
         <span>Loading...</span>
       </template>
    </Suspense>
</div>
</template>

<script>
import axios from 'axios'
import FetchUser from './FetchUser'
export default {
  name: 'Grid',
  components:[FetchUser],
  data () {
    return {
      users: null
    }
  },
  created: function () {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.users = res.data
      })
  }
}
</script>

<style>
tr.border_bottom td {
      border-bottom: 2pt solid #41b3b7;
}
</style>