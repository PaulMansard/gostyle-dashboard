<template>
<div>
    <div class="p-grid p-fluid">
        <div class="p-col-12 p-md-4">
            <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
                <i class="pi pi-user"></i>
            </span>
                <InputText placeholder="Titre" />
            </div>
        </div>

        <div class="p-col-12 p-md-4">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">$</span>
                <InputText placeholder="Réduction" />
            </div>
        </div>

        <div class="p-col-12 p-md-4">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">W</span>
                <InputText placeholder="Lien vers le site web" />
            </div>
        </div>
        <div> 
            <Button label="Show" icon="pi pi-external-link" @click="open" />
        </div>
        {{display}}
    </div>
    <Dialog header="Le QR Code" :visible.sync="display" :modal="true">
         <template #footer>
        <div>
            <div ref="qart"></div>
            <a  @click="convertToImage" v-if="download.visible">Télécharger votre QRCode en png</a>
    </div>
        <Button label="Close" icon="pi pi-times" @click="close" class="p-button-secondary"/>
    </template>
    </Dialog>
    </div>
</template>
<script src="//cdnjs.cloudflare.com/ajax/libs/qartjs/1.0.2/qart.min.js"></script>

<script type="application/ecmascript">
import QArt from 'qartjs'
export default {
  props: {
    download: {
      type: Object,
      default: function() {
        return {
          visible: true        
        }
      },
    },
  },
  name: 'VueQart',
  data() {  
    return {
        display: false,
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
    open() {
			this.display = true;
		},
	close() {
			this.display = false;
		}
  },
}
</script>