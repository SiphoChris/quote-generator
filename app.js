let btn = document.querySelector(".btn");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

const famousQuotes = [
  {
    Nelson_Mandela:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
  },
  { Walt_Disney: "The way to get started is to quit talking and begin doing" },
  {
    Steve_Jobs:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
  },
  {
    name: "The future belongs to those who believe in the beauty of their dreams",
  },
  {
    Oprah_Winfrey:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
  },
  {
    James_Cameron:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
  },
  {
    John_Lennon:
      "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one",
  },
  { Mahatma_Gandhi: "You must be the change you wish to see in the world" },
  {
    Mother_Teresa:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier",
  },
  { Franklin_D_Roosevelt: "The only thing we have to fear is fear itself" },
  {
    Martin_Luther_King_Jr:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that",
  },
  { Eleanor_Roosevelt: "Do one thing every day that scares you." },

  { Benjamin_Franklin: "Well done is better than well said" },

  {
    Helen_Keller:
      "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
  },

  {
    Aristotle:
      "It is during our darkest moments that we must focus to see the light.",
  },

  {
    Ralph_Waldo_Emerson:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  },

  { Oscar_Wilde: "Be yourself; everyone else is already taken." },

  {
    Maya_Angelou:
      "You will face many defeats in life, but never let yourself be defeated.",
  },
  {
    Henry_David_Thoreau:
      "Go confidently in the direction of your dreams! Live the life you've imagined.",
  },
  {
    Abraham_Lincoln:
      "In the end, it's not the years in your life that count. It's the life in your years.",
  },
  {
    Babe_Ruth:
      "Never let the fear of striking out keep you from playing the game.",
  },
];

btn.addEventListener("click", () => {
  const randomQuote =
    famousQuotes[Math.floor(Math.random() * famousQuotes.length)];

  // console.log(randomQuote)

  const authorName = Object.keys(randomQuote).toString();
  const quoteContent = Object.values(randomQuote).toString();

  quote.textContent = quoteContent;
  author.textContent = authorName;
});
