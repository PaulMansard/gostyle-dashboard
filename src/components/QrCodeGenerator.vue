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
    },
    
  make (callback) {
    var version = this.findWorkingVersion(this.version)

    var qr = QRCode(version, 'H')
    qr.addData(this.value)
    qr.make()
    QRCode.stringToBytes = QRCode.stringToBytesFuncs['UTF-8']
    var qrImage = qr.createImgObject(3)

    var imageSize = 75 + (version * 12)
    var padding = 12
    var scaledPadding = (padding * this.size) / imageSize

    var self = this
    qrImage.onload = function () {
      var coverImage = new Image()
      coverImage.src = self.imagePath

      // handle image by fillType
      var imageCanvas = Util.createCanvas(imageSize - padding * 2, coverImage, self.fillType)
      coverImage.src = imageCanvas.toDataURL()

      var resultCanvas = Util.createCanvas(imageSize, qrImage)
      var qrCanvas = Util.createCanvas(imageSize, qrImage)

      if (typeof self.background !== 'undefined') {
        var bgCanvas = Util.createCanvas(self.size, new Image())
        var bgCtx = bgCanvas.getContext('2d')
        bgCtx.fillStyle = self.background
        bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height)
      }

      coverImage.onload = function () {
        if (coverImage.width < coverImage.height) {
          coverImage.height = (imageSize - padding * 2) * (1.0 * coverImage.height / coverImage.width)
          coverImage.width = imageSize - padding * 2
        } else {
          coverImage.width = (imageSize - padding * 2) * (1.0 * coverImage.width / coverImage.height)
          coverImage.height = imageSize - padding * 2
        }

        var coverCanvas = Util.createCanvas(imageSize)
        coverCanvas.width = imageSize
        coverCanvas.height = imageSize

        coverCanvas.getContext('2d').drawImage(coverImage, padding, padding, imageSize - 2 * padding, imageSize - 2 * padding)
        var coverImageData = coverCanvas.getContext('2d').getImageData(0, 0, imageSize, imageSize)
        var coverImageBinary = coverImageData.data
        var resultImageData = resultCanvas.getContext('2d').getImageData(0, 0, imageSize, imageSize)
        var resultImageBinary = resultImageData.data

        for (var i = 0; i < coverImageBinary.length; i += 4) {
          var x = Math.floor(i / 4) % imageSize
          var y = Math.floor(Math.floor(i / 4) / imageSize)

          if (x < padding || y < padding || x >= imageSize - padding || y >= imageSize - padding) {
            resultImageBinary[i + 3] = 0
            continue
          }
          if (x % 3 === 1 && y % 3 === 1) {
            continue
          }
          if (x < 36 && (y < 36 || y >= imageSize - 36)) {
            continue
          }
          if (x >= imageSize - 36 && y < 36) {
            continue
          }

          if (self.filter === 'threshold') {
            var factor = Util.threshold(coverImageBinary[i], coverImageBinary[i + 1], coverImageBinary[i + 2], 127)
            resultImageBinary[i] = factor
            resultImageBinary[i + 1] = factor
            resultImageBinary[i + 2] = factor
          } else if (self.filter === 'color') {
            resultImageBinary[i] = coverImageBinary[i]
            resultImageBinary[i + 1] = coverImageBinary[i + 1]
            resultImageBinary[i + 2] = coverImageBinary[i + 2]
          }
          resultImageBinary[i + 3] = coverImageBinary[i + 3]
        }

        resultCanvas.getContext('2d').putImageData(resultImageData, 0, 0)

        var patternPostion = QRUtil.getPatternPosition(version)
        for (var i = 0; i < patternPostion.length; i += 1) {
          for (var j = 0; j < patternPostion.length; j += 1) {
            var x = patternPostion[i]
            var y = patternPostion[j]
            if (!((x === 6 && y === 50) || (y === 6 && x === 50) || (x === 6 && y === 6))) {
              var rectX = 3 * (x - 2) + 12
              var rectY = 3 * (y - 2) + 12
              var rectWidth = (3 * (x + 3) + 12) - rectX
              var rectHeight = (3 * (y + 3) + 12) - rectY

              var rectData = qrCanvas.getContext('2d').getImageData(rectX, rectY, rectWidth, rectHeight)
              resultCanvas.getContext('2d').putImageData(rectData, rectX, rectY)
            }
          }
        }

        var scaledCanvas = Util.createCanvas(self.size, new Image())
        if (typeof self.background !== 'undefined') {
          scaledCanvas.getContext('2d').drawImage(bgCanvas, scaledPadding, scaledPadding, self.size - scaledPadding * 2, self.size - scaledPadding * 2)
        }
        scaledCanvas.getContext('2d').drawImage(coverImage, scaledPadding, scaledPadding, self.size - scaledPadding * 2, self.size - scaledPadding * 2)
        scaledCanvas.getContext('2d').drawImage(resultCanvas, 0, 0, self.size, self.size)
        if (callback instanceof Function) {
          callback(scaledCanvas)
        } else if (callback instanceof Element) {
          callback.innerHTML = ''
          callback.appendChild(scaledCanvas)
        } else {
          throw new TypeError('Parameter type of `make()` must be Function or Element.')
        }
      }
    }
  },
}}
</script>