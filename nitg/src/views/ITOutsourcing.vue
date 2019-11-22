<template>
    <div>
        <HeaderBlack/>
        <ITOutsource/>
        <ServicesContacts/>
    </div>
</template>

<script>
import HeaderBlack from "@/components/HeaderBlack.vue";
import ITOutsource from "@/components/Products & Services/ITOutsource.vue";
import ServicesContacts from "@/components/ServicesContacts.vue";

export default {
  components: {
    HeaderBlack,
    ITOutsource,
    ServicesContacts
  }
};
</script>