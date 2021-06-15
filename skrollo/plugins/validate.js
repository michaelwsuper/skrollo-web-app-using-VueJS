import Vue from "vue";
import {
  ValidationObserver,
  ValidationProvider,
  extend  
} from "vee-validate";


Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

extend('positive', value => {
  return value >= 0;
});

extend('required', {
  validate (value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1,
      
    };
  },
  message: 'This field is required',
  computesRequired: true
});