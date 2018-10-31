<template>
  <nav class="main-nav">
    <ul>
      <li><router-link :to="{name: 'Home'}">Home</router-link></li>
      <li><router-link :to="{name: 'About'}">About</router-link></li>
    </ul>
    <h2>User Profiles</h2>
    <ul>
        <li v-for="(user, index) in users" :key="index">
            <router-link :to="{name: 'ViewProfile', params: {user_id: user.user_id}}">
                <span>Profile {{ user.user_id }}</span>
            </router-link>
        </li>
    </ul>
  </nav>    
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      users: [{ user_id: 1 }, { user_id: 2 }, { user_id: 3 }, { user_id: 4 }]
    };
  }
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>