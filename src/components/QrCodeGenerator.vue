<template>
    <div>
        <div ref="qart"></div>
        <a  @click="convertToImage" v-if="download.visible">Télécharger votre QRCode en png</a>
    </div>
</template>


<script type="application/ecmascript">
import QArt from 'qartjs'
export default {
  props: {
    download: {
      type: Object,
      default: function() {
        return {
          visible: true,
        }
      },
    },
  },
  name: 'VueQart',
  data() {
    return {
        msg: 'Welcome to Your Vue.js App',
        config: {
            value: 'https://www.baidu.com',
            imagePath: './logo.png',
            filter: 'color'
        }
    }
  },
  watch: {
    'config.value': function(val) {
      this.config.value = val
      this.renderQrcode(this.config)
    },
  },
  mounted() {
    this.renderQrcode(this.config)
  },
  methods: {
    renderQrcode(config) {
      this.qart = new QArt(config)
      this.qart.make(this.$refs.qart)
      // this.$refs.qart.appendChild(this.qart.make())
    },
    convertToImage(e) {
      const { type = 'image/png', filename = 'download.png' } = this.download
      const myCanvas = this.$refs.qart.children[0];
      e.target.href = myCanvas.toDataURL(type)
      e.target.download = filename
    },
  },
}
</script>