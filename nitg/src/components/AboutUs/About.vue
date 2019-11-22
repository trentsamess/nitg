<template>
  <b-row class="about-head-container">
    <b-col xl-3 class="about-us-left">
      <p class="about-main-title">About Us</p>
      <p>NORTH IT GROUP was founded by us, 3 businessmen from Germany, with the aim to bring together the western european market and demand for digitalization, the vast expertise and creativity of the eastern european IT sector. We want to support the digitalization of small and midsize enterprises across Europe. Besides the IT expertise of our company, we bring together decades of experience in banking, consulting and real industry sectors, thereby enabling us to have a full-scope view on the clients needs regardless of industry and adjust our offer individually.</p>
      <p>NORTH IT	 prepares its clients for the digital age.</p>
      <p>NORTH IT	 speaks German, English, Russian and Armenian.</p>
      <p>NORTH IT	 works cross-border across Europe</p>
    </b-col>
    <b-col xl-3 class="about-us-right">
      <div role="tablist">
        <b-card no-body class="mb-1"  v-for="(item, i) in about" :key="i">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block class="accordion-button" href="#" v-b-toggle="`${item.id}`" >
              <span>
                {{ item.title}}
              </span>
              <span class="when-opened">
                <font-awesome-icon color="#fff" :icon="['fas', 'minus']"></font-awesome-icon>
              </span>
              <span class="when-closed">
                <font-awesome-icon color="#fff" :icon="['fas', 'plus']"></font-awesome-icon>
              </span>
            </b-button>
          </b-card-header>
          <b-collapse :id="item.id" :visible="i === 0" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ item.text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </b-col>
  </b-row>
</template >


<script>
  import AboutUs from "../JsonPackages/AboutUs.json";
export default {
  data() {
    return {
      id: 3,
      about: AboutUs.about
    }
  },
  methods: {
    emitCollapse(id) {
      this.$root.$emit('bv::toggle::collapse', id)
    }
  }
};
</script>

<style lang="scss">
@import "../../scss/AboutUs/about.scss";
</style>