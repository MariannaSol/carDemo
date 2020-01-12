$(document).ready(function () {
	/* disk_icon_names - global variablename */
	
	var blocks = new Array();

	/* ai_block - not modify parameter. Amount icons in block */
	var ai_block = 12;
	
	/* amount backgrounds. Modify parameter */
	var amountBG = 7;
	
	var tempBlocks = new Array();
	function createBlok() {
		blocks[0] = $("#page0");
		tempBlocks = blocks[0];
		blocks_counter = rims_icon_names.length / ai_block;

		for (var i=1; i < blocks_counter; i++) {
			blocks[i] = $("<div></div>").attr("id", "page"+i).appendTo(disk_bar).hide();
			tempBlocks[i] = blocks[i];
		}
	}
	
	function changePosition() {
		start = amount_icon;
		amount_icon = amount_icon + column;	
	}

	var start = 0, amount_icon = 6;	
	icon = [];
	/* column - not modify parameter */
	var column = 6;
	function loadIconDisk() {
		createBlok();
		block_number = 0;
		sign_transfer = ai_block;
		end = rims_icon_names.length / column;

		for (var i = 0; i < end; i++) {
			if (i === (end-1)) {
				amount_icon + (rims_icon_names.length - column * amount_icon);
			}

			for (var j = start; j < amount_icon; j++) {
				if (j === rims_icon_names.length) break;
				
				if (j === sign_transfer) {
					block_number++; sign_transfer += ai_block;
				}
				
				icon[j] = $("<img></img>").attr("src", rims_icon_names[j]).attr("width", "150").attr("height", "150").attr("id", j).
				addClass("ui-glowing ui-active").on("click", setDisk).on("mouseup", selectRim).appendTo(blocks[block_number]);
			}
			changePosition();
			$("<br><br><br>").appendTo(blocks[block_number]);
		}
	}	
	loadIconDisk();	
	
	function getId() {
		$("#disk_bar > div > img").mouseover(function() {
			id = $(this).attr("id");
		});
	}
	getId();
	
	var temp = -1;
	function selectRim() {
		var current_id = id;
		icon[current_id].addClass("ui-glowing-click");
		
		current_id = current_id ^ temp;
		temp = current_id ^ temp;
		current_id = current_id ^ temp;
		
		if(current_id != -1) {
			icon[current_id].removeClass("ui-glowing-click");
		}
	};

	var block_counter = 0;
	var effect_ms = 200;
	var length = tempBlocks.length;
	function nextRimsCollection() {
		document.getElementById('up').disabled = true;
		document.getElementById('down').disabled = true;
		setTimeout(function() {blocks[block_counter].fadeOut(effect_ms, function() {
			block_counter++;
			if (block_counter > blocks.length-1) block_counter = 0;
			blocks[block_counter].fadeIn(effect_ms);
			document.getElementById('up').disabled = false;
			document.getElementById('down').disabled = false;
		})}, 800);	

		getId();
	}
	
	var	btn_right = document.getElementById("up");
	btn_right.onclick = nextRimsCollection;		
	
	//function pause
	
	// var block_counter = 0;
	// var effect_ms = 200;
	// btn_right.onclick = function() {
		// blocks[block_counter].fadeOut(effect_ms, function() {
			// block_counter++;
			// if (block_counter > blocks.length-1) block_counter = 0;
			// blocks[block_counter].fadeIn(effect_ms);
		// });
		// getId();
	// };

	var btn_left = document.getElementById("down");
	btn_left.onclick = nextRimsCollection;
	// btn_left.onclick = function() {
		// blocks[block_counter].fadeOut(effect_ms, function () {
			// block_counter--;
			// if(block_counter === -1) block_counter = blocks.length-1;
			// blocks[block_counter].fadeIn(effect_ms);		
		// });	
		// getId();
	// };
	
	var backgrounds = new Array();
	function loadBackground() {
		var i = 0;
		for(i=0; i<amountBG; i++) {
			backgrounds[i] = $("<img></img>").attr("src","backgrounds/"+"car_bg_"+i+".png").attr("width", "1280").
									attr("height", "520").attr("id", i);
		}
	}	
	loadBackground();

	var btn_change_bg = document.getElementById("change_bg");
	var car_bg = $("#car_bg");
	var bg_length = backgrounds.length;
	var k = 0;
	btn_change_bg.onclick = function() {
		if(k === bg_length) {
			k = 0;
		}
		car_bg.attr("src",backgrounds[k].attr("src"));	
		k++;
	};	
});

//--------------------- javascript -------------------------	

		/*rims - global variablename */
	    var count = 0;
		
		var id=0;
		
        var img_rims = new Array ();			
       
        for (var i=0; i < rims.length; i++) {
            img_rims[i] = new Image ();
            img_rims[i].src = rims[i];			
            img_rims[i].onload = countRimsImages;
        }
		
		function countRimsImages () {
            count++;
		}
		
		function setDisk() {
			document.images.p00.src = img_rims[id].src;
		}
		
		
		
		
		
		
		
		