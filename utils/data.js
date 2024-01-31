const names = [
"Olivia",
"Ethan",
"Isabella",
"Liam",
"Sophia",
"Noah",
"Ava",
"Jackson",
];

const thoughtData = [
"thought_1",
"thought_2",
"thought_3",
"thought_4",
"thought_5",
"thought_6",
"thought_7",
"thought_8",
"thought_9",
"thought_10",
];

const reactionData = [
"reaction_1",
"reaction_2",
"reaction_3",
"reaction_4",
"reaction_5",
"reaction_6",
"reaction_7",
"reaction_8",
"reaction_9",
"reaction_10",
];

const users = [];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUserName = () =>
  `${getRandomArrItem(names)}${getRandomArrItem(names)}`;

const getRandomThought = () => `${getRandomArrItem(thoughtData)}`;

const getRandomReaction = () => `${getRandomArrItem(reactionData)}`;

module.exports = {
    getRandomUserName,
    getRandomThought,
    getRandomReaction,
  };

