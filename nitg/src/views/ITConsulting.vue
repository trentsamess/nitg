<template>
    <div>
        <HeaderBlack/>
        <ITConsult/>
        <ServicesContacts/>
    </div>
</template>


<script>
import HeaderBlack from "@/components/HeaderBlack.vue";
import ITConsult from "@/components/Products & Services/ITConsult.vue";
import ServicesContacts from "@/components/ServicesContacts.vue";

export default {
  components: {
    HeaderBlack,
    ITConsult,
    ServicesContacts
  }
};
</script>