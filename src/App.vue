<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ScrollToTop from './components/ScrollToTop.vue';

export default {
  components: {
    Header,
    Footer,
    ScrollToTop
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
  <ScrollToTop />
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

/* comparsa delle card */
.slide-item {
  opacity: 0;
  transition: opacity 2s ease;
}

.scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
