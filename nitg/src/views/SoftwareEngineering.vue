<template>
    <div>
        <HeaderBlack/>
        <SoftwareEng/>
        <ServicesContacts/>
    </div>
</template>

<script>
import HeaderBlack from "@/components/HeaderBlack.vue";
import SoftwareEng from "@/components/Products & Services/SoftwareEng.vue";
import ServicesContacts from "@/components/ServicesContacts.vue";

export default {
  components: {
    HeaderBlack,
    SoftwareEng,
    ServicesContacts
  }
};
</script>