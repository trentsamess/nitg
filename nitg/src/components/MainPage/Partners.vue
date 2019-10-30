<template>
  <div class="partners-container">
    <h2 class="partners-title">Our Partners</h2>
    <div class="partners-list">
      <div v-for="(partner, i) in partners" :key="i" class="partners-item">
          <img :src="partner.img" class="partners-image" @click="showPartner(partner)"/>
      </div>
    </div>
  </div>
</template>


<script>
import partners from "../JsonPackages/PartnersMock.json";
export default {
  data() {
    return {
      partners: partners.partners
    };
  },
  methods: {
      showPartner(partner) {
          this.$root.$emit('show-partner', partner);
      }
  }
};
</script>
<style lang="scss">
@import "../../scss/MainPage/partners.scss";
</style>