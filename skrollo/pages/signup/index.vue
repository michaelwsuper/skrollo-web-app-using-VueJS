<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-4 mx-auto">
        <div class="box">
          <div class="col-12">
            <!-- <div class="row">
              <a class="btn btn-lg btn-block btn-facebook" href="#">
                <span class=" addon-facebook">
                  <i class="fab fa-fw fa-2x fa-facebook fa-fw"></i> </span>Signup with Facebook</a>
            </div> -->

             <div class="row mt-2">
              <a
                class="btn btn-lg btn-block btn-twitter"
                href="#"
                @click="loginGoogle"
              >
                <span class="addon-twitter">
                  <i class="fab fa-fw fa-2x fa-google fa-fw"></i>
                </span>
                Login with Google</a
              >
            </div>
          </div>
          <ValidationObserver ref="form" v-slot="{ passes }">
            <form id="login-form" role="form" @submit.prevent="submit">
              <div class="divider-form"></div>

              <b-form-group id="email-group" label="Email:" label-for="email">
                <ValidationProvider
                  vid="email"
                  name="email"
                  v-slot="validationContext"
                  rules="required"
                >
                  <b-form-input
                    id="email"
                    :state="getValidationState(validationContext)"
                    placeholder="Enter email"
                    v-model="form.email"
                    type="email"
                  >
                  </b-form-input>
                  <b-form-invalid-feedback>
                    <div v-for="error in validationContext.errors">
                      {{ error }}
                    </div>
                  </b-form-invalid-feedback>
                </ValidationProvider>
              </b-form-group>

              <b-form-group
                id="username-group"
                label="Username:"
                label-for="username"
              >
                <ValidationProvider
                  vid="username"
                  name="username"
                  v-slot="validationContext"
                  rules="required"
                >
                  <b-form-input
                    id="username"
                    :state="getValidationState(validationContext)"
                    placeholder="Enter username"
                    v-model="form.username"
                  >
                  </b-form-input>
                  <b-form-invalid-feedback>
                    <div v-for="error in validationContext.errors">
                      {{ error }}
                    </div>
                  </b-form-invalid-feedback>
                </ValidationProvider>
              </b-form-group>

              <b-form-group
                id="password-group"
                label="Password:"
                label-for="password"
              >
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
                    v-model="form.password"
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

              <!-- <p class="text-center">
              You agree to the <strong>Terms & Conditions</strong>.
            </p> -->

              <button
                type="submit"
                class="btn-block btn btn-lg btn-primary"
                :disabled="working"
              >
                Signup
              </button>

              <p class="text-center">
                Already have an account?
                <nuxt-link to="/login">Sign in here</nuxt-link>
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
  name: "signup",
  layout: "default",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  async fetch({ store, params }) {},
  data() {
    return {
      form: {},
      working: false
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
    async submit() {
      this.working = true;
      this.$axios
        .post("/api/auth/users/", this.form)
        .then(data => {
          this.$store.commit(
            "SET_MESSAGE",
            "An email has been sent, please confirm your email before logging in"
          );
          this.$router.push("/login/?redirect=/");
          this.working = false;
        })
        .catch(data => {
          this.$refs.form.setErrors(data.response.data);
          console.log(data.response.data);
          this.working = false;
        });
    },
    loginGoogle() {
      console.log("Google");
      this.$gAuth.getAuthCode().then(async authCode => {
        await this.$axios
          .$post("/auth/login/google", { auth: authCode })
          .then(async resp => {
            const user_details = await this.$axios.$get("/api/auth/users/me/");
            await this.$store.dispatch("login", user_details);
            let nextUrl = "/";
            if (this.$route.query.next) {
              nextUrl = decodeURIComponent(this.$route.query.next);
            }
            if (!nextUrl.startsWith("/")) {
              nextUrl = "/";
            }
            this.$router.push(nextUrl);
          })
          .catch(data => {
            this.$refs.form.setErrors(data.response.data);
          });
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
