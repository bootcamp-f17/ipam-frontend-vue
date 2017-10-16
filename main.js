new Vue ({
	
	el: "#root",

	data: {
		sites: [],
	},

	mounted: function() {

		var apiURL = "http://ipam-backend.herokuapp.com/api/sites";
		var self = this;

	    axios.get("http://ipam-backend.herokuapp.com/api/sites")
	      .then(response => self.sites = response.data);

	}
	

})