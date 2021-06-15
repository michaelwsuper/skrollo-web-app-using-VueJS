<template>
  <div class="sms-page">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="Message:"
        label-for="input-3"
      >
        <b-form-textarea
            id="input-group-3"
            v-model="text"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
            ></b-form-textarea>
        <pre class="mt-3 mb-0">{{ text }}</pre>
      </b-form-group>  

      <b-button type="submit" variant="primary">Submit</b-button>
      <div class="my-4">
        <b-button to="/" :variant="btnColor">
            Back to feed?
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          text: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.text = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style lang="scss">
    .sms-page {
        padding: 30px 15% 0px 15%;

        label {
            color: white;
        }
    }    
</style>