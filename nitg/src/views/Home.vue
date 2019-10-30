<template>
  <div>
    <Paradise />
    <Services />
    <Servicedetails />
    <Clients />
    <Partners />
    <ContactUs />
  </div>
</template>

<script>
import Paradise from "@/components/MainPage/Paradise.vue";
import Services from "@/components/MainPage/Services.vue";
import Servicedetails from "@/components/MainPage/Servicedetails.vue";
import ContactUs from "@/components/MainPage/ContactUs.vue";
import Partners from "@/components/MainPage/Partners.vue";
import Clients from "@/components/MainPage/Clients.vue";

export default {
  components: {
    Paradise,
    Services,
    Servicedetails,
    ContactUs,
    Clients,
    Partners
  }
};
</script>