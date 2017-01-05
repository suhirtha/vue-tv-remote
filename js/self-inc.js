	var tv = new Vue({
	    el: '#whole-setup',
	    data: {
	        show: true,
	        showChannel: false,
	        counter: 15,
	        ok: false,
	        notok: false,
	        showSettings: false,
	        programs: [{
	            "counter": 16,
	            "name": "Star Movies",
	            "src":"videos/naruto.mp4",
	            "image": "img/channel1.png"
	        }, {
	            "counter": 17,
	            "name": "National Geo",
	            "src":"videos/nat.mp4",
	            "image": "img/channel2.png"
	        }, {
	            "counter": 18,
	            "name": "Animax",
	            "src":"videos/naruto.mp4",
	            "image": "img/channel3.png"
	        }, {
	            "counter": 19,
	            "name": "Romedy Now",
	            "src":"videos/naruto.mp4",
	            "image": "img/channel4.png"
	        }, {
	            "counter": 20,
	            "name": "Movies Now",
	            "src":"videos/naruto.mp4",
	            "image": "img/channel5.png"
	        }, {
	            "counter": 21,
	            "name": "POGO",
	            "src":"videos/naruto.mp4",
	            "image": "img/channel6.png"
	        }, {
	            "counter": 22,
	            "name": "Disney",
	            "src":"videos/naruto.mp4",
	            "image": "img/channel7.png"
	        }, {
	            "counter": 23,
	            "name": "HBO",
	            "src":"videos/naruto.mp4",
	            "image": "img/channel8.png"
	        }, {
	            "counter": 24,
	            "name": "Star Movies Action",
	            "src":"videos/naruto.mp4",
	            "image": "img/channel9.png"
	        }],
	        
	    },
	    methods: {
	        switchOn: function() {
	            if (this.show) {
	                this.show = false;
	                this.showChannel = true;
	            } else {
	                this.show = true;
	                this.showChannel = false;
	            }
	        }

	    }
	})
	var slider = new Slider('#bright-slide');
	var slider = new Slider('#contrast-slide');
	var slider = new Slider('#color-slide');
	var myVideo = document.getElementById("video"); 

	function playPause() { 
		myVideo.width = 380; 
	    if (myVideo.paused) 
	        myVideo.play(); 
	    else 
	        myVideo.pause(); 

	} 
	

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
    