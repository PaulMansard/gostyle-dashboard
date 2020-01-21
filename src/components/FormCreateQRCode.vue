/* eslint-disable no-console */
<template>
  <div>
    <div class="p-grid p-fluid">
      <div class="p-col-12 p-md-4">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-user"></i>
          </span>
          <InputText placeholder="Titre" v-model="configPromotion.name" />
        </div>
      </div>

      <div class="p-col-12 p-md-4">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">I</span>
          <InputText placeholder="Information" v-model="configPromotion.info" />
        </div>
      </div>

      <div class="p-col-12 p-md-4">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">$</span>
          <InputText placeholder="Réduction" v-model="configPromotion.number" />
        </div>
      </div>

      <div class="p-col-12 p-md-4">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">type</span>
          <Listbox
            v-model="configPromotion.type"
            :options="options"
            optionLabel="text"
          />
        </div>
      </div>

      <div class="p-col-12 p-md-4">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">startDate</span>
          <datepicker
            placeholder="Select Date"
            v-model="configPromotion.startDate"
          ></datepicker>
        </div>
      </div>

      <div class="p-col-12 p-md-4">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">endDate</span>
          <datepicker
            placeholder="Select Date"
            v-model="configPromotion.sendDate"
          ></datepicker>
        </div>
      </div>

      <div class="p-col-12 p-md-4">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">W</span>
          <InputText
            placeholder="Lien vers le site web"
            v-model="configPromotion.link"
          />
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
<ToastDoc />
<script>
import Datepicker from "vuejs-datepicker";
import QrCodeGenerator from "@/components/QrCodeGenerator.vue";

export default {
  name: "VueQart",
  components: {
    QrCodeGenerator,
    Datepicker
  },
  data() {
    return {
      configPromotion: {
        name: null,
        info: null,
        startDate: Date(),
        endDate: Date(),
        userId: 1,
        type: [],
        number: null,
        link: null
      },
      options: [
        { text: "%", value: "1" },
        { text: "2 acheté 1 offert et plus", value: "2" },
        { text: "A partir de ...", value: "3" }
      ],
      display: false,
      messages: []
    };
  },
  methods: {
    open() {
      // eslint-disable-next-line no-console
      console.log(this.configPromotion);
      if (
        this.configPromotion.name &&
        this.configPromotion.startDate &&
        this.configPromotion.endDate &&
        this.configPromotion.number &&
        this.configPromotion.link &&
        this.configPromotion.type
      ) {
        // eslint-disable-next-line no-console
        console.log("OK");

        this.display = true;
      } else {
        this.$toast.add({
          severity: "error",
          summary: "Error Message",
          detail: "Champs manquant",
          life: 3000
        });
      }
    },
    close() {
      this.display = false;
    }
  }
};
</script>
