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
    Eleanor_Roosevelt:
      "The future belongs to those who believe in the beauty of their dreams",
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
  { Eleanor_Roosevelt: "Do one thing every day that scares you" },
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
