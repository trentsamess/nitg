<template>
  <b-row>
    <b-col xl-3 class="about-us-left">
      <p>About Us</p>
      <p>NORTH IT GROUP was founded by us, 3 businessmen from Germany, with the aim to bring together the western european market and demand for digitalization, the vast expertise and creativity of the eastern european IT sector. We want to support the digitalization of small and midsize enterprises across Europe. Besides the IT expertise of our company, we bring together decades of experience in banking, consulting and real industry sectors, thereby enabling us to have a full-scope view on the clients needs regardless of industry and adjust our offer individually.</p>
      <p>NORTH IT	 prepares its clients for the digital age.</p>
      <p>NORTH IT	 speaks German, English, Russian and Armenian.</p>
      <p>NORTH IT	 works cross-border across Europe</p>
    </b-col>
    <b-col xl-3 class="about-us-right">
      <div role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>
          </b-card-header>
          <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>NORTH IT GROUP provides its international clients with IT services and solutions they need to expand or maintain their business in the digital age.
Our services include Website Development, IT Outsourcing, Software Engineering and IT Consulting. We are based in Minsk, Belarus and in Berlin, Germany.</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </b-col>
  </b-row>
</template >


<script>
export default {
  data() {
    return {
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
    };
  }
};
</script>