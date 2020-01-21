<template>
  <div>
    <div class="p-grid p-fluid">
      <div class="p-col-12 p-md-4">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-user"></i>
          </span>
          <InputText placeholder="Titre" v-model="title" />
        </div>
      </div>

      <div class="p-col-12 p-md-4">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">info</span>
          <InputText placeholder="Réduction" v-model="info" />
        </div>
      </div>

      <div class="p-col-12 p-md-4">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">number</span>
          <InputText placeholder="Réduction" v-model="number" />
        </div>
      </div>

      <div class="p-col-12 p-md-4">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">link</span>
          <InputText placeholder="Lien vers le site web" v-model="link" />
        </div>
      </div>

      <div class="p-col-12 p-md-4">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">type</span>
          <InputText placeholder="Lien vers le site web" v-model="type" />
        </div>
      </div>

      <div class="p-col-12 p-md-4">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">startDate</span>
          <InputText placeholder="Lien vers le site web" v-model="startDate" />
        </div>
      </div>

      <div class="p-col-12 p-md-4">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">endDate</span>
          <InputText placeholder="Lien vers le site web" v-model="endDate" />
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
      {{ display }}
    </div>
    <div>
      <Dialog header="Le QR Code" :visible.sync="display" :modal="true">
        <template #footer>
          <div>
            <QrCodeGenerator></QrCodeGenerator>
          </div>
          <Button
            label="Close"
            icon="pi pi-times"
            @click="close"
            class="p-button-secondary"
          />
        </template>
      </Dialog>
    </div>
  </div>
</template>

<script>
import QrCodeGenerator from "@/components/QrCodeGenerator.vue";

export default {
  name: "VueQart",
  components: {
    QrCodeGenerator
  },
  data() {
    // configPromotion : {
    //   id: Number,
    //     name: String,
    //     info: string,
    //   startDate: Date(),
    //   endDate: Date(),
    //   userId: Date(),
    //     type: Date(),
    //   number: Date(),
    //   link:"htpp;/dsf.com"
    //  }
    //  options: [
    //   { text: 'Un', value: 'A' },
    //   { text: 'Deux', value: 'B' },
    //   { text: 'Trois', value: 'C' }
    // ]
    return {
      display: false
    };
  },
  methods: {
    open() {
      this.display = true;
    },
    close() {
      this.display = false;
    }
  }
};
</script>
