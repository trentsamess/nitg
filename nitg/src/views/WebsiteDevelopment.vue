<template>
    <div>
        <HeaderBlack/>
        <WebsiteDev/>
        <ServicesContacts/>
    </div>
</template>

<script>
import HeaderBlack from "@/components/HeaderBlack.vue";
import WebsiteDev from "@/components/Products & Services/WebsiteDev.vue";
import ServicesContacts from "@/components/ServicesContacts.vue";

export default {
  components: {
    HeaderBlack,
    ServicesContacts,
    WebsiteDev
  }
};
</script>