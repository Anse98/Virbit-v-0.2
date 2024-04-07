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

  },

  watch: {

    // controllo per reimpostare la variabile current Page negli HeaderComponents
    '$route'() {
      // Ottieni l'URL corrente
      const currentRoute = this.$route.path;

      // Verifica se la parola "service" è presente nell'URL
      const isServicePage = currentRoute.match(/services\/.*/);

      // Verifica se la parola "product" è presente nell'URL
      const isProductPage = currentRoute.match(/products\/.*/);

      // Verifica se la parola "about" è presente nell'URL
      const isAboutPage = currentRoute.match(/about\/.*/);

      // Se la pagina corrente non è una pagina di servizio, prodotti o about, imposta currentPage... a una stringa vuota
      if (!isServicePage) {
        localStorage.setItem('currentPageService', '');
      }

      if (!isProductPage) {
        localStorage.setItem('currentPageProduct', '');
      }

      if (!isAboutPage) {
        localStorage.setItem('currentPageAbout', '');
      }
    }
  },

  mounted() {

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

.fade-opacity {
  transition: opacity 0.3s ease;
}

/* HeaderComponents */
.scrolled-sticky-header {
  padding: 12px 12px;
  background-color: #F5F5F7;
  color: #1D1D1F;
  opacity: 0.9;
  backdrop-filter: blur(6px);
  border-bottom: gray solid 0.5px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  font-size: 18px;
  transition: all 0.6s ease;
}

.restore-sticky-header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.6s ease;
}

.color-black {
  color: #1D1D1F;
}

.page-current-title {
  font-size: 16px;
}
</style>
