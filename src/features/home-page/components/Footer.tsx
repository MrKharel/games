const facts = [
	"Tetris was created in 1984. Made with ☕ and procrastination.",
	"Wombat poop is cube-shaped. 💩 Helps mark territory without rolling away.",
	"Bananas are actually berries. 🍌 Strawberries are not.",
	"Honey never spoils. 🍯 You could eat 3,000-year-old Egyptian tomb honey.",
	"Otters hold hands while sleeping. 🦦 It keeps them from drifting apart.",
	"Cows have best friends. 🐄 They get stressed when separated.",
	"The total weight of all ants equals all humans. 🐜 Nature's tiny army.",
	"Flamingos bend their legs at the ankle. 🦩 Their knees are higher up.",
	"Octopuses have three hearts. 🐙 Two pump blood to the gills, one to the body.",
	"Sloths can hold their breath longer than dolphins. 🦥 Up to 40 minutes!",
	"Pineapples take nearly three years to grow. 🍍 Just for one single fruit.",
	"Sharks existed before trees. 🦈 By at least a few million years.",
	"A day on Venus is longer than a year on Venus. 🪐 Slow spinning planet.",
	"Water makes a different sound depending on temperature. 💧 Hot and cold sound distinct.",
	"Nutmeg is a hallucinogen if consumed in large quantities. 🫚 Stay safe in the kitchen.",
	"The moon has moonquakes. 🌙 Caused by tidal stresses from Earth.",
	"Human teeth are as strong as shark teeth. 🦈 Made of the same mineral.",
	"Clouds can weigh over a million pounds. ☁️ Floating heavy water.",
	"Scotland has 421 words for snow. ❄️ Truly a winter wonderland.",
	"The first orange jack-o'-lanterns were made from turnips. 🎃 Roots of Halloween.",
	"A jiffy is an actual unit of time. ⏱️ It is 1/100th of a second.",
	"An avocado is a single-seeded berry. 🥑 Perfect for toast.",
	"The Eiffel Tower can grow taller in the summer. 🗼 Thermal expansion at work.",
	"Human bone is five times stronger than steel. 🦴 Ounce for ounce comparison.",
	"Venus is the hottest planet in our solar system. ☀️ Not Mercury, thanks to atmosphere.",
	"Group of porcupines is called a prickle. 🦔 Very fitting name.",
	"Apple trees are part of the rose family. 🍎 Smells sweet, tastes sweeter.",
	"A shrimp's heart is located in its head. 🦐 High-headed emotions.",
	"Most wasabi is just dyed horseradish. 🍣 True wasabi is rare and expensive.",
	"Dead skin cells make up most house dust. 💨 Clean your rooms regularly.",
	"Pigeons can do math at a basic level. 🐦 Smarter than they look.",
	"High heels were originally invented for men. 👠 For Persian horse riders.",
	"Butterflies taste with their feet. 🦋 Landing on flowers to sample.",
	"The heart of a blue whale is the size of a car. 🐋 Massive ocean dwellers.",
	"Fruit flies were the first living creatures in space. 🪰 Launched in 1947.",
	"Ketchup was once sold as medicine. 🍅 Good for treating indigestion.",
	"Polar bear skin is actually pitch black. 🐻‍❄️ Their fur is translucent clear.",
	"Chewing gum is banned in Singapore. 🇸🇬 Keeps the transit clean.",
	"A group of flamingos is called a flamboyance. 🦩 Perfectly fabulous.",
	"The longest scientific word takes 3.5 hours to read. 🧪 Name of the protein Titin.",
	"Matchsticks were invented after the lighter. 🔥 A spark of historical irony.",
	"A standard deck of cards has 52 cards for 52 weeks. 🃏 Four suits for four seasons.",
	"Sea otters have a pouch to store their favorite rock. 🦦 Used for cracking shells.",
	"The Twitter bird has an official name: Larry. 🐦 Named after Larry Bird.",
	"The dot over the lowercase 'i' and 'j' is called a tittle. ℹ️ Tiny punctuation names.",
	"Snail can sleep for up to three years. 🐌 Ultimate afternoon nap.",
	"Horses cannot breathe through their mouths. 🐎 Only through their nostrils.",
	"There are more public libraries than McDonald's in the US. 📚 Feeding minds over bodies.",
];

export const Footer = () => {
	return (
		<footer className="absolute bottom-0 pb-2 px-25 text-black/80 text-lg gap-2 text-right">
			<b className="inline bg-gradient-to-r from-indigo-600 to-cyan-500 text-transparent bg-clip-text">⚡ Fun fact</b> :{" "}
			<p className="inline">{facts[Math.floor(Math.random() * facts.length)]}</p>
		</footer>
	);
};
