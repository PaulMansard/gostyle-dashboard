<template>
  <div>
    <h1>Ajouter une nouvelle réduction</h1>
    <QrCodeGenerator msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script>
import QrCodeGenerator from '@/components/QrCodeGenerator.vue'

export default {
  name: 'home',
  components: {
    QrCodeGenerator
  }
}
</script>
