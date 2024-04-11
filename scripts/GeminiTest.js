require("dotenv").config();
const API_Key = process.env.API_Key;

const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

const genAI = new GoogleGenerativeAI(API_Key);

function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
  const prompt = `The tone and general demeanor of the responses should be that of a health coach and advisor to help make the user more conscience in their day to day eating habits.  You are the users calorie and nutrition coach and aim to provide a list of the ingredients and their approximate caloric content and macronutrient breadkdown (carbohydrates, fats, proteins).`;
  const imageParts = [
    fileToGenerativePart("assets/images/Chx.jpg", "image/png"),
  ];

  try {
    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  } catch (error) {
    console.error("Error:", error);
  }
}

run();
