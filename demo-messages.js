// Demo messages to showcase the app
const demoMessages = [
  {
    author: "Anonymous Developer",
    type: "code",
    content: "// My last commit\nfunction goodbye() {\n  console.log('It was an honor');\n  return memories.save();\n}\ngoodbye();",
    timestamp: Date.now() - 300000
  },
  {
    author: "Digital Nomad",
    type: "confession",
    content: "I never actually read the terms and conditions. Not once. I'm sorry.",
    timestamp: Date.now() - 600000
  },
  {
    author: "Meme Archaeologist",
    type: "meme",
    content: "🔥 This is fine 🔥\n*dog sitting in burning room*\nBut the room is the entire internet",
    timestamp: Date.now() - 120000
  },
  {
    author: "Tech Philosopher",
    type: "wisdom",
    content: "We built the cloud, but forgot we still need the ground. Touch grass, friends. While you still can.",
    timestamp: Date.now() - 900000
  },
  {
    author: "Burned Out Engineer",
    type: "regret",
    content: "I should've taken more breaks. Should've said no to crunch. Should've spent less time in meetings. But here we are.",
    timestamp: Date.now() - 450000
  },
  {
    author: "Code Poet",
    type: "code",
    content: "SELECT * FROM memories\nWHERE regrets IS NULL\nAND love > 0\nORDER BY happiness DESC;",
    timestamp: Date.now() - 180000
  }
];

console.log("Copy these messages into the app for demo!");
console.log(JSON.stringify(demoMessages, null, 2));
