const uuid4 = require("uuid4");

const posts = [
  {
    id: uuid4(),
    title: "Exploring the Wonders of JavaScript!",
    description:
      "JavaScript is everywhere! From making websites interactive to handling server logic, it has revolutionized modern development. Let's dive into its fascinating world and share what you love most about JavaScript.",
    comments: [
      {
        id: uuid4(),
        username: "codeMaster",
        comment:
          "JavaScript was my first programming language. I love how versatile it is!",
      },
      {
        id: uuid4(),
        username: "devQueen",
        comment:
          "Async/await in JavaScript was a game-changer for me. It makes code so much cleaner!",
      },
    ],
  },
  {
    id: uuid4(),
    title: "Tips for Staying Productive While Coding",
    description:
      "Coding is fun, but it can be easy to lose track of time or get distracted. What are some tips and tricks you use to stay productive and motivated?",
    comments: [
      {
        id: uuid4(),
        username: "focusedCoder",
        comment:
          "I use the Pomodoro technique. 25 minutes of work, 5 minutes break. It keeps me sharp and focused!",
      },
      {
        id: uuid4(),
        username: "nightOwl",
        comment:
          "I like to code at night when it’s quiet. I can focus better and get into a flow state.",
      },
    ],
  },
  {
    id: uuid4(),
    title: "Your Favorite Tech Stack in 2024",
    description:
      "There are so many amazing tools and technologies today. What does your ideal tech stack look like this year?",
    comments: [],
  },
];

module.exports = posts;
