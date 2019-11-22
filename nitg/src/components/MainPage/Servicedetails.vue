<template>
  <div class="service-container">
    <div class="service-image-container">
      <div class="service-title">OUR BUSINESS LINES IN DETAIL:</div>
      <div class="service-item" v-for="(item, i) in items" :key="i">
        <div class="service-left">
          <p class="service-item-title">{{item.title}}</p>
          <p class="service-item-subtitle">{{item.subtitle}}</p>
          <p class="service-item-text">{{item.text}}</p>
          <button class="contact-button">Read more</button>
        </div>
        <div class="service-right" :style="`height: 400px; width: 400px; background-size: cover; background: url(${item.img}) top center no-repeat`">
          <!-- <img :src="item.img" class="service-details-image" /> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import services from "../JsonPackages/ServiceMock.json";
export default {
  data() {
    return {
      items: services.services
    };
  }
};
</script>

<style lang="scss">
@import "../../scss/MainPage/service-details.scss";
</style>