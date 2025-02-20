import { GoogleGenerativeAI } from "@google/generative-ai";

export const AI_Prompt = async (rawText) => {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `Extract and structure the following resume data into JSON format:
        \nResume Text: ${rawText}
        \nFormat:
        \n{
          "name": "<name>",
          "email": "<email>",
          "education": [
            {
              "degree": "<degree>",
              "branch": "<branch>",
              "institution": "<institution>",
              "year": <year>
            }
          ],
          "experience": [
            {
              "job_title": "<job_title>",
              "company": "<company>",
              "start_date": "<start_date>",
              "end_date": "<end_date>"
            }
          ],
          "skills": ["<skill_1>", "<skill_2>", "..."],
          "summary": "<short summary about the candidate profile>"
        }\n\n
        Return only JSON data, no code blocks.`;

        const result = await model.generateContent(prompt);
        let parsedData = result.response.text();

        // ✅ Remove code blocks if present
        parsedData = parsedData.replace(/```json|```/g, "").trim();

        return JSON.parse(parsedData); // ✅ Parse valid JSON
    } catch (error) {
        console.error("Error in AI_Prompt:", error);
        return null;
    }
};
