  <template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      login: false
    }
  },
  updated() {



  },
  created() {

  }
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  min-width: 1200px;
  overflow-x: hidden;

}
</style>
