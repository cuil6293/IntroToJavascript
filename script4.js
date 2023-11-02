function fortuneTeller(num){
	if (num < 50) {
		console.log("I see in your future...an apple falling on your head?");
	}
	else if (num == 50){
		console.log("I see in your future...a delicious meal? Hm, seems like you're having something special tonight.");
	}
	else if (num > 50){
		console.log("I see in your future...a shiny coin? A single shiny coin? What does that even mean -_-");
	} else{
		console.log("(that's not a number but I still want my money!) Mm yes, I see that you are a human and that you exist, and that uh your future is awesome!")
	}
}

fortuneTeller(1);
fortuneTeller(50);
fortuneTeller(899);
fortuneTeller("fish");