<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-4 mx-auto">
        <div class="box">
          <b-card class="text-center">
            <div class="bg-secondary text-light">
              Request a password reset
            </div>
          </b-card>

          <ValidationObserver ref="form" v-slot="{ passes, errors }">
            <form id="login-form" role="form" @submit.prevent="onSubmit">
              <div class="divider-form"></div>

              <b-form-group id="Password-Group" label="New Password:" label-for="password">
                <ValidationProvider
                  vid="password"
                  name="password"
                  v-slot="validationContext"
                  rules="required"
                >
                  <b-form-input
                    id="password"
                    :state="getValidationState(validationContext)"
                    placeholder="Enter password"
                    v-model="form.new_password"
                    type="password"
                  >
                  </b-form-input>
                  <b-form-invalid-feedback>
                    <div v-for="error in validationContext.errors">
                      {{ error }}
                    </div>
                  </b-form-invalid-feedback>
                </ValidationProvider>
              </b-form-group>

              <b-form-group id="Password-Re-Group" label="Password Confirm:" label-for="re_new_password">
                <ValidationProvider
                  vid="re_new_password"
                  name="re_new_password"
                  v-slot="validationContext"
                  rules="required"
                >
                  <b-form-input
                    id="re_new_password"
                    :state="getValidationState(validationContext)"
                    placeholder="ReEnter Password"
                    v-model="form.re_new_password"
                    type="password"
                  >
                  </b-form-input>
                  <b-form-invalid-feedback>
                    <div v-for="error in validationContext.errors">
                      {{ error }}
                    </div>
                  </b-form-invalid-feedback>
                </ValidationProvider>
              </b-form-group>

              <div class="divider-form"></div>
              <ValidationProvider
                vid="error"
                name="error"
                v-slot="validationContext"
              >
                <div
                  class="text-center text-danger my-2"
                  v-if="validationContext.errors[1]"
                >
                  {{ validationContext.errors }}
                </div>
              </ValidationProvider>

              <!-- <p class="text-center">
              You agree to the <strong>Terms & Conditions</strong>.
            </p> -->

              <button type="submit" class="btn-block btn btn-lg btn-primary">
                Request Reset
              </button>

              <p class="text-center">
                Know your password? <nuxt-link to="/login">Login</nuxt-link>
              </p>
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
  name: "login",
  layout: "default",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  async fetch({ store, params }) {},
  data() {
    return {
      form: {}
    };
  },
  mounted() {},
  beforeDestroy() {},
  created() {},
  updated() {},
  computed: {},

  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    async onSubmit() {
      let params = this.$route.params.pathMatch.split("/")
      try {
        this.form.uid = params[0]
        this.form.token = params[1]
        await this.$axios
          .post("api/auth/users/reset_password_confirm/", this.form)
          .then(data => {            
            this.$bvToast.toast(`Password has been reset`, {
              title: "Success",
              autoHideDelay: 5000,
              appendToast: true,
              variant: "success",
            });
            this.form = {}
            this.$router.push("/login");
          })
          .catch(data => {
            this.$refs.form.setErrors(data.response.data);
          });
      } catch (e) {
        console.log(e);
      }
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
