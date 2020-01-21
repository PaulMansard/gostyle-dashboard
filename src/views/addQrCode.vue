<template>
  <div>
    <h1>Ajouter une nouvelle réduction</h1>
    <FormCreateQRCode />
  </div>
</template>
<script>
import FormCreateQRCode from "@/components/FormCreateQRCode.vue";
export default {
  name: "home",
  components: {
    FormCreateQRCode
  }
};
</script>
