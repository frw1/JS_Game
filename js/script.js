let clicks = 0;

function shift(old_position){
	let new_position, num_position;
	for (let i = 0; i < document.images.length; ++i){
		if (document.images[i].name == "16"){
			new_position = i;
			num_position = i+1;
		}
	}
		if ((old_position - new_position == 4) || 
			(new_position - old_position == 4) || 
			((old_position - new_position == 1) && (Math.floor(old_position/4) == Math.floor(new_position/4))) || 
			((new_position - old_position == 1) && (Math.floor(old_position/4) == Math.floor(new_position/4))) ){
				document.images[new_position].src = "jpg/"+document.images[old_position].name+".jpg";
				document.images[old_position].src = "jpg/16.jpg";
				document.images[new_position].name = document.images[old_position].name;
				document.images[old_position].name = "16";
				
				move = "Фишка "+document.images[new_position].name+
					" заняла пустую ячейку ("+num_position+")."
				console.log(move);
				document.getElementById("move").innerHTML = move;
				clicks++;
				document.getElementById("count").innerHTML = clicks;
		}
		new_position = 0;
		
	for (let i = 0; i < 14; ++i){
		if (document.images[i].name == i + 1){
			new_position = ++new_position;
		}
	}
		if ((new_position == 14) && (document.images[15].name == 16)) {
			if (clicks < 3) {
				alert("Вы выиграли! \n" + "Вам понадобился всего 1 ход.");
			} else {
				alert("Вы выиграли! \n" + "Вам понадобилось " + clicks + " ходов.");
			}
			refresh();
		}
}
		
function refresh(){
	let index1,
		index2,
		img_src,
		atr_name;
		
	for (let i = 0; i < 48; ++i){
		index1 = Math.floor(Math.random()*16);
		index2 = Math.floor(Math.random()*16);
		
		img_src = document.images[index1].src;
		document.images[index1].src = document.images[index2].src;
		document.images[index2].src = img_src;
		
		atr_name = document.images[index1].name;
		document.images[index1].name = document.images[index2].name;
		document.images[index2].name = atr_name;
	}
	clicks = 0;
	console.log("Цифры в ячейках перемешаны!");
}

