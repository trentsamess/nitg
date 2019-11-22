<template>
  <div id="app">
    <router-view></router-view>
    <partner-modal-component />
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import PartnerModalComponent from "@/components/MainPage/PartnerModalComponent";
export default {
  name: "app",
  components: {
    Footer,
    PartnerModalComponent
  }
};
</script>

