<template>
  <div class="about-us-video-container">
    <p class="about-video-title">Video presentation</p>
    <video-player :width="'640px'" :height="'480px'"/>
  </div>
</template>

<script>
import VideoPlayer from "../VideoPlayer.vue"
    export default {
        components: {
            VideoPlayer
        }
    }
</script>

<style lang="scss">
@import "../../scss/AboutUs/aboutvideo.scss";
</style>

