<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <partner-modal-component />
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import PartnerModalComponent from "@/components/MainPage/PartnerModalComponent";
export default {
  name: "app",
  components: {
    Header,
    Footer,
    PartnerModalComponent
  }
};
</script>

