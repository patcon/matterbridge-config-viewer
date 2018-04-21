import toml from 'toml';

String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
}

Vue.prototype.$http = axios
var app = new Vue({
  el: '#app',
  data: {
    config: {},
    gateways: [],
    samechannelgateways: [],
    filter: '',
  },
  created: function () {
    this.parseTOML()
    this.getFilter()
  },
  methods: {
    parseTOML: function() {
      this.$http.get(process.env.CONFIG_URL)
        .then(response => {
          this.config = toml.parse(response.data)
          this.gateways = this.config.gateway
          this.samechannelgateway = this.config.samechannelgateway
          console.log(JSON.stringify(this.gateways))
        })
    },
    getFilter: function() {
      this.filter = window.location.hash.substring(1)
    }
  }
})
