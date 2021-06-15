<template>
  <div class="container">
      
    <div class="row">
      <div class="col-md-6 col-md-offset-4 mx-auto">
        <div class="box">
          <b-card class="text-center">
            <div class="bg-secondary text-light">
              Manage your account name
            </div>
          </b-card>
          <ValidationObserver ref="form" v-slot="{ passes }">
            <form id="login-form" role="form" @submit.prevent="submit">
              <div class="divider-form"></div>

              

              <b-form-group id="new-username-group" label="New Username:" label-for="new_username">
                <ValidationProvider vid="new_username" name="new_username" v-slot="validationContext" rules="required">
                  <b-form-input id="new_username" :state="getValidationState(validationContext)"
                    placeholder="Enter username" v-model="form.new_username">
                  </b-form-input>
                  <b-form-invalid-feedback>
                    <div v-for="error in validationContext.errors">
                      {{error}}
                    </div>
                  </b-form-invalid-feedback>
                </ValidationProvider>
              </b-form-group>
              
              <b-form-group id="renew-username-group" label="Re New Username:" label-for="re_new_username">
                <ValidationProvider vid="re_new_username" name="re_new_username" v-slot="validationContext" rules="required">
                  <b-form-input id="re_new_username" :state="getValidationState(validationContext)"
                    placeholder="Enter Re New UserName" v-model="form.re_new_username">
                  </b-form-input>
                  <b-form-invalid-feedback>
                    <div v-for="error in validationContext.errors">
                      {{error}}
                    </div>
                  </b-form-invalid-feedback>
                </ValidationProvider>
              </b-form-group>

              <b-form-group id="current-password-group" label="Current Password:" label-for="current_password">
                <ValidationProvider vid="current_password" name="current_password" v-slot="validationContext" rules="required">
                  <b-form-input id="current_password" :state="getValidationState(validationContext)"
                    placeholder="Enter Current Password" v-model="form.current_password" type="password">
                  </b-form-input>
                  <b-form-invalid-feedback>
                    <div v-for="error in validationContext.errors">
                      {{error}}
                    </div>
                  </b-form-invalid-feedback>
                </ValidationProvider>
              </b-form-group>
         
              <div class="divider-form"></div>

              <button type="submit" class="btn-block btn btn-lg btn-primary" :disabled="working">
                Confirm
              </button>

            </form>
          </ValidationObserver>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { mapMutations } from "vuex";
  import { ValidationProvider, ValidationObserver } from "vee-validate";

  export default {
    name: "account",
    layout: "default",
    middleware: 'auth',
    components: {
      ValidationProvider,
      ValidationObserver
    },
    async fetch({ store, params }) { },
    data() {
      return {
        form: {},
        working: false
      };
    },
    mounted() { },
    beforeDestroy() { },
    created() { },
    updated() { },
    computed: {},
    methods: {
      getValidationState({ dirty, validated, valid = null }) {
        return dirty || validated ? valid : null;
      },
      async submit() {
        this.working = true;
        this.USERNAME_RESET_SHOW_EMAIL_NOT_FOUND = true;
        console.log(this.form);
        this.$axios
          .$post("/api/auth/users/set_username/", this.form)
          .then(data => {
            this.$router.push("/login/?redirect=/");
            this.working = false;
          })
          .catch(data => {
            this.$refs.form.setErrors(data.response.data);
            console.log(data.response.data);
            this.working = false;
          });
      }
    }
  };
</script>

<style lang="scss">
  .btn .fa-icon {
    vertical-align: middle;
    margin-right: 0.5rem;
  }

  .btn .fa-icon:last-child {
    margin-right: 0;
  }

  .box {
    background-color: #fff;
    padding: 25px 40px;
    margin-top: 30px;
    /*Remove, its example*/
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .input-group {
    margin: 5px 0px;
  }

  .addon-facebook {
    vertical-align: middle;
    border: none;
    border-radius: 2px 0px 0px 2px;
    color: #fff;
  }

  .btn-facebook,
  .btn-facebook:hover {
    background-color: #4b6ea9;
    color: #fff;
    border-radius: 0px 2px 2px 0px;
    font-size: 15px;
  }

  .addon-twitter {
    vertical-align: middle;
    border: none;
    border-radius: 2px 0px 0px 2px;
    color: #fff;
  }

  .btn-twitter,
  .btn-twitter:hover {
    background-color: #00d7fa;
    color: #fff;
    border-radius: 0px;
    font-size: 15px;
  }

  p {
    color: #aebbcb;
  }

  a {
    color: #23a9f6;
  }

  .divider-form {
    border: 1px solid #ebeff1;
    margin: 15px -40px 10px;
  }

  label {
    text-transform: uppercase;
    color: #656565;
  }

  strong {
    color: #95a5bb;
  }

  .form-control:focus {
    box-shadow: none;
  }
</style>