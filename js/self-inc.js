	var mixin = {
	    methods: {
	        mounted: function() {
	            this.$refs.videoRef.src = this.programs[this.currentChannel].src;
	            this.$refs.videoRef.play();
	            }
	        }
	    }
	var tv = new Vue({
	    el: '#whole-setup',
	    mixins: [mixin],
	    data: {
	        show: true,
	        showChannel: false,
	        counter: 16,
	        ok: false,
	        notok: false,
	        showSettings: false,
	        currentChannel: 0,
	        programs: [{
	            counter: 16,
	            name: "Star Movies",
	            src: "videos/naruto.mp4"
	        }, {
	            counter: 17,
	            name: "National Geo",
	            src: "videos/nat.mp4"
	        }, {
	            counter: 18,
	            name: "Animax",
	            src: "videos/naruto.mp4"
	        }, {
	            counter: 19,
	            name: "Romedy Now",
	            src: "videos/nat.mp4"
	        }, {
	            counter: 20,
	            name: "Movies Now",
	            src: "videos/naruto.mp4"
	        }, {
	            counter: 21,
	            name: "POGO",
	            src: "videos/nat.mp4"
	        }, {
	            counter: 22,
	            name: "Disney",
	            src: "videos/naruto.mp4"
	        }, {
	            counter: 23,
	            name: "HBO",
	            src: "videos/nat.mp4"
	        }, {
	            counter: 24,
	            name: "Star Movies Action",
	            src: "videos/naruto.mp4"
	        }]
	    },

	    methods: {
	        switchOn: function() {
	            this.show = !this.show;
	            this.showChannel = !this.showChannel;
	            tv.mounted();

	        },
	        progChangeUp: function() {
	            this.counter += 1;
	            this.currentChannel += 1;
	            tv.mounted();

	        },
	        progChangeDown: function() {
	            this.counter -= 1;
	            this.currentChannel -= 1;
	            tv.mounted();
	        },
	        allProg: function(a, index) {
	            this.counter = a;
	            this.currentChannel = index;
	            tv.mounted();
	        }
	    }
	})
	new Slider('#bright-slide');
	new Slider('#contrast-slide');
	new Slider('#color-slide');
	$('.vol-up').click(function() {
	    $('.volume').fadeIn().animate({ width: '+=10px' }, 'fast', function() {
	        setTimeout(function() {
	            $('.volume').fadeOut(100);
	        }, 1000);
	    });
	});
	$('.vol-down').click(function() {
	    $('.volume').fadeIn().animate({ width: '-=10px' }, 'fast', function() {
	        setTimeout(function() {
	            $('.volume').fadeOut(100);
	        }, 1000);
	    });
	});
