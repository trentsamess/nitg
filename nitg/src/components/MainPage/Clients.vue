<template>
  <div class="clients">
    <h2 class="clients-title">Our Сlients</h2>
    <carousel
      :autoplay="true"
      :nav="false"
      :items="2"
      :dots="false"
      class="carousel-car"
      :loop="true"
      :margin="50"
      :autoplaySpeed="3000"
    >
      <div class="carousel-container">
        <img src="../../assets/morenergy.png" class="home-carousel-image" />
      </div>
      <div class="carousel-container">
        <img src="../../assets/amundas.png" class="home-carousel-image" />
      </div>
      <div class="carousel-container">
        <img src="../../assets/krohn.png" class="home-carousel-image" />
      </div>
      <div class="carousel-container">
        <img src="../../assets/zeppelin.png" class="home-carousel-image" />
      </div>
      <div class="carousel-container">
        <img src="../../assets/philip.png" class="home-carousel-image" />
      </div>
      <div class="carousel-container">
        <img src="../../assets/eagle.png" class="home-carousel-image" />
      </div>
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel }
};
</script>

<style lang="scss">
@import "../../scss/MainPage/clients.scss";
</style>