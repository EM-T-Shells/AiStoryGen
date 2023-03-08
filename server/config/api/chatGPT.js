// server.js
require("dotenv").config();
const apiKey = process.env.REACT_APP_BUILD_ENV;


// chatGPT.js
async function initializeChatGPT() {
  let options = {
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    instructions: `You are ChatGPT, a large language model trained by OpenAI.`,
    model: "text-davinci-003",
    stop: "",
  };
  const { default: ChatGPT } = await import("chatgpt-official");
  let bot = new ChatGPT(apiKey, options);
  let response = await bot.ask(
    "think of 5 funny and clever names about generative AI and storys. the AI will be fed prompts by the user and create custom stories. make it edgar allan poe themed. thanks "
  );
  console.log(response);
  let conversationId2 = "another conversation name";
  let response2 = await bot.ask("Hello?", conversationId2);
  console.log(response2);
}

module.exports = initializeChatGPT;
