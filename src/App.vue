<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<style>
.title-gradient {
  background: linear-gradient(to right, #95a4b9, #dce4eb);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.text-gradient {
  background: linear-gradient(to right, #49515c, #929da7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
