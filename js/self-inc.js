	var tv = new Vue({
	    el: '#whole-setup',
	    data: {
	        show: true,
	        showChannel: false,
	        counter: 16,
	        ok: false,
	        notok: false,
	        showSettings: false,
	        obj16: {
	            "counter": 16,
	            "src": "videos/naruto.mp4",
	            
	        },
	        obj17: {
	            "counter": 17,
	            "src": "videos/nat.mp4",
	            
	        },
	        obj18: {
	            "counter": 18,
	            "src": "videos/naruto.mp4",
	            
	        },
	        obj19: {
	            "counter": 19,
	            "src": "videos/naruto.mp4",
	            
	        },
	        obj20: {
	            "counter": 20,
	            "src": "videos/naruto.mp4",
	            
	        },
	        obj21: {
	            "counter": 21,
	            "src": "videos/naruto.mp4",
	            
	        },
	        obj22: {
	            "counter": 22,
	            "src": "videos/naruto.mp4",
	           
	        },
	        obj23: {
	            "counter": 23,
	            "src": "videos/naruto.mp4",
	            
	        },
	        obj24: {
	            "counter": 24,
	            "src": "videos/naruto.mp4",
	        },
	        programs:[{
	        	"counter": 16,
	        	"name": "Star Movies"
	        },
	        {
	        	"counter": 17,
	            "name": "National Geo"
	        },
	        {
	        	"counter": 18,
	            "name": "Animax"
	        },
	        {
	        	"counter": 19,
	            "name": "Romedy Now"	
	        },{
	        	"counter": 20,
	            "name": "Movies Now"
	        },
	        {
	        	"counter": 21,
	            "name": "POGO"
	        },
	        {
	        	"counter": 22,
	            "name": "Disney"
	        },{
	        	"counter": 23,
	            "name": "HBO"
	        },{
	        	"counter": 24,
	            "name": "Star Movies Action"
	        }
	        ]


	    },
	    methods: {
	        switchOn: function() {
	            this.show = !this.show;
	            this.showChannel = !this.showChannel;
	        }
	    }
	})
	new Slider('#bright-slide');
	new Slider('#contrast-slide');
	new Slider('#color-slide');
	var myVideo = document.getElementById("video");
	function playPause() {
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
