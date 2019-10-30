<template>
  <b-modal id="modal-1" size="lg" hide-header-border hide-footer>
    <div class="inner">
      <b-col xl-3>
        <img class="img-fluid" :src="src" alt />
      </b-col>
      <b-col xl-3>
        <p v-html="text"></p>
      </b-col>
    </div>
    <a :href="url">
      <button class="model-url-button">{{url}}</button>
    </a>
  </b-modal>
</template>
<script>
export default {
  data() {
    return {
      src: String,
      text: String,
      url: ""
    };
  },
  mounted() {
    this.$root.$on("show-partner", partner => {
      this.$bvModal.show("modal-1");
      this.src = partner.img;
      this.text = partner.text;
      this.url = partner.website;
    });
  }
};
</script>

<style lang="scss">
@import "../../scss/MainPage/partnermodalcomponent.scss";
</style>