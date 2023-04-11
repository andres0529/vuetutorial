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
  methods: {
    async doSearch() {
      this.result = this.error = null;
      try {
        const response = await fetch(API + this.search);
        if (!response.ok) throw new Error("User not found");
        const data = await response.json();
        this.result = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.search = null;
      }
    },

  },
});
const mountedApp = app.mount("#app");
