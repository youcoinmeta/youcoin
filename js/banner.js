window.onload = function(){
	var closeBtn = document.getElementById("closeBanner");
	var topBanner = document.getElementById("top");
	var Body = document.getElementById("body");
	var Navbar = document.getElementById("navbar");	
	var Ecosystem = document.getElementById("ecosystem_head");	
	var Tokenomics = document.getElementById("tokenomics_head");	
	var Roadmap = document.getElementById("roadmap_head");	
	closeBtn.onclick = function(){
		var timer = setInterval(function(){
			Ecosystem.classList.remove("head_open");
			Tokenomics.classList.remove("head_open");
			Roadmap.classList.remove("head_open");
			topBanner.style.opacity -=0.1;
			if(topBanner.style.opacity<=0)
			{topBanner.className = "top-banner hide";
			 Body.className = "body_close"; 
			 Navbar.classList.add("navbar_close");
			 Navbar.classList.remove("navbar_open");
			 clearInterval(timer);
			}
			
			},50);
			
		}
	
	}

