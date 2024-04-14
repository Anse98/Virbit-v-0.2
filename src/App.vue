<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isLoading: true,
    }
  },
  methods: {

  },

  watch: {


  },

  mounted() {
    setTimeout(() => {
      // Dopo il ritardo, imposta isLoading a falso per nascondere il loader
      this.isLoading = false;
    }, 2000); // Ritardo di 2 secondi (2000 millisecondi)
  }
}
</script>

<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style>
.title-gradient {
  background: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.title-modal-gradient {
  background: radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);
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
  padding: 0 12px;
  background-color: #dddddd;
  color: #1D1D1F;
  opacity: 0.9;
  backdrop-filter: blur(3px);
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

.page-current-title {
  font-size: 15px;
  font-style: italic;
}

/*general style*/

.color-black {
  color: #1D1D1F;
}

.color-gray {
  color: #a7a7a8;
}
</style>
