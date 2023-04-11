const API = "https://api.github.com/users/";
const app = Vue.createApp({
  data() {
    return {
      name: "Andres",
      url:"myportfolio.com.co",
      search: null,
      result: null,
      error: null,
      favorites: new Map(),
    };
  },
  computed: {},
  methods: {},
});
const mountedApp = app.mount("#app");
