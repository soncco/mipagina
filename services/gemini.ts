
import { GoogleGenAI } from "@google/genai";

// Initialize the API client
// Note: process.env.API_KEY is pre-configured
export const getGeminiAI = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export async function editPhotoWithAI(base64Image: string, prompt: string): Promise<string | undefined> {
  const ai = getGeminiAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: 'image/jpeg',
            },
          },
          {
            text: `You are an artistic photo editor for the artist Braulio Soncco. Transform this photo of a fan or scenery according to the user request: "${prompt}". Apply a sophisticated, elegant, Latin American and Andean aesthetic (warm tones, golden highlights, artistic filters). Return only the edited image.`,
          },
        ],
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  } catch (error) {
    console.error("Gemini AI Image Error:", error);
    throw error;
  }
}
