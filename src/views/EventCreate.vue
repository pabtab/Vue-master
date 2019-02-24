<template>
  <div>
    <h1>Create Event {{ user.name }}</h1>
    <p>This evente was created by {{ user.id }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
    <p>There are {{ catLength }}</p>
    <p>event by id {{ getEventById(2) }}</p>
  </div>
</template>


<script>
  import { mapState, mapGetters } from 'vuex';

  export default {
    computed: {
      catLength() {
        return this.$store.getters.catLength
      },
      ...mapGetters(['getEventById']),
      ...mapState(['user', 'categories']
      /*{
      user: 'user', // userName: state => state.user.name
      categories: 'categories'
    }*/)
    }
  }
</script>

<style scoped>

</style>