// an array of objects
var zodiac = [
	{
		sign: "aries",
		traits: "Courageous, determined, confident, enthusiastic, optimistic, honest, passionate, impatient, moody, short-tempered, impulsive, aggressive",
		image: "img/aries1.jpg",
	},
	{
		sign: "taurus",
		traits: "Reliable, patient, practical, devoted, responsible, stable, stubborn, possessive, uncompromising",
		image: "img/taurus1.jpg",
	},
	{
		sign: "gemini",
		traits: "Gentle, affectionate, curious, adaptable, ability to learn quickly, nervous, inconsistent, indecisive",
		image: "img/gemini1.jpg",
	},
	{
		sign: "cancer",
		traits: "Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive, moody, pessimistic, suspicious, manipulative, insecure",
		image: "img/cancer1.jpg"
	},
	{
		sign: "leo",
		traits: "Creative, passionate, generous, warm-hearted, cheerful, humorous, arrogant, stubborn, self-centered, lazy, inflexible",
		image: "img/leo1.jpg"
	},
	{
		sign: "virgo",
		traits: "Analytical, loyal, kind, hardworking, practical, shyness, worry, overly critical of self and others",
		image: "img/virgo1.jpg"
	},
	{
		sign: "libra",
		traits: "Cooperative, diplomatic, gracious, fair-minded, social, indecisive, avoids confrontations, holds a grudge, self-pity",
		image: "img/libra1.jpg"
	},
	{
		sign: "scorpio",
		traits: "Resourceful, brave, passionate, stubborn, a true friend, distrusting, jealous, secretive, violent",
		image: "img/scorpio1.jpg"
	},
	{
		sign: "sagittarius",
		traits: "Generous, idealistic, optimistic, great sense of humor, courage, frank, tactless, very impatient",
		image: "img/sag1.jpg"
	},
	{
		sign: "capricorn",
		traits: "Responsible, disciplined, self-control, good managers, know-it-all, unforgiving, condescending, expects the worst",
		image: "img/capri1.jpg"
	},
	{
		sign: "aquarius",
		traits: "Progressive, original, independent, humanitarian, detached, temperamental, uncompromising, aloof",
		image: "img/aqua1.jpg"
	},
	{
		sign: "pisces",
		traits: "Compassionate, artistic, intuitive, gentle, wise, musical, fearful, overly trusting, sad, desire to escape reality",
		image: "img/pisces1.jpg"
	}
]

function horoscope() {
	// store the tag with id="sign" in var userdata
	var userdata = document.getElementById("userdata")
	// confirms the element exists and value the user submits
	console.log(userdata)
	console.log("users value is: " + userdata.value)

	for(i = 0; i < zodiac.length; i++) {
		console.log("users value lowercase is: " + userdata.value.toLowerCase())
		// check the current sign in the array
		console.log("current zodiac sign in loop is: " + zodiac[i].sign)

		if(userdata.value.toLowerCase() === zodiac[i].sign) {
			console.log("if statement ran")
			console.log("user typed in: " + userdata.value)
			console.log("image value is: " + zodiac[i].image)
			console.log("traits value is: " + zodiac[i].traits)

			// get element with id="yourZodiac"
			document.getElementById("yourZodiac").textContent = userdata.value
			document.getElementById("symbol").src = zodiac[i].image
			document.getElementById("yourHoroscope").textContent = "Your attributes are: " + zodiac[i].traits
			return
		} 
			console.log("no matches found")
			document.getElementById("yourZodiac").innerHTML = "That's not a zodiac sign! Try again."
			document.getElementById("yourHoroscope").innerHTML = " "
			document.getElementById("symbol").src = ""
		
	}
}
