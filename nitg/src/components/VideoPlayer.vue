<template>
  <div class="video-wrapper" :style="`height: ${height}; width: ${width}`">
    <video ref="video" class="video-about" autoplay="1">
      <source src="https://northitgroup.com/wp-content/uploads/2019/10/Company-video.mp4?_=2" />
    </video>
    <button class="video-button" @click="emitVideo">
      <font-awesome-icon v-if="!isPlayed" style="color: #F3F0F0" :icon="['fas', 'play']" size="2x" />
      <font-awesome-icon v-else style="color: #F3F0F0" :icon="['fas', 'pause-circle']" size="2x" />
    </button>
  </div>
</template>
<script>
export default {
  props: {
    height: null,
    width: null
  },
  data() {
    return {
      isPlayed: false
    };
  },
  methods: {
    emitVideo() {
      if (this.isPlayed) {
        this.$refs.video.pause();
        this.isPlayed = false;
      } else {
        this.$refs.video.play();
        this.isPlayed = true;
      }
    }
  },
  mounted() {
    this.$refs.video.play();
    this.isPlayed = true;
  }
};
</script>


<style lang="scss">
@import "../scss/videoplayer.scss";
</style>