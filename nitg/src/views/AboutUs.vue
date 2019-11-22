<template>
  <div>
    <Header/>
    <About />
    <AboutVideo />
    <ChooseUs/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import About from "@/components/AboutUs/About.vue";
import AboutVideo from "@/components/AboutUs/AboutVideo.vue";
import ChooseUs from "@/components/AboutUs/ChooseUs.vue";

export default {
  components: {
    Header,
    About,
    AboutVideo,
    ChooseUs
  }
};
</script>