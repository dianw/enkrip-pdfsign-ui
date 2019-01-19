<template>
  <div style="padding-top: 70px;">
    <b-navbar type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="">
        PDFSign
      </b-navbar-brand>
    </b-navbar>
    <b-row class="mx-0">
      <b-col md="4" lg="5">
        <h5>Recently uploaded PDF</h5>
        <p v-if="pdfs.length < 1" class="text-muted">
          Your recently uploaded PDF will be showed here
        </p>
        <div v-for="(pd, index) in pdfs" :key="pd.uid" body-class="p-1" class="my-1" style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">
          <a href="" :title="'Remove ' + pd.name" class="text-danger" @click.prevent="removePdf(index)">
            x
          </a>
          <a href="" :title="pd.name" @click.prevent>
            <span v-text="pd.name" />
          </a>
        </div>
      </b-col>
      <b-col md="8" lg="7">
        <div class="mb-1">
          <b-form-file accept="application/pdf" @input="uploadPdf" />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      pdfs: state => state.file.pdfs
    })
  },
  methods: {
    removePdf(index) {
      this.$store.commit('file/removePdf', index)
    },
    uploadPdf(file) {
      this.$store.commit('file/addPdf', file)
    }
  }
}
</script>

<style scoped>

</style>
