import axios from "axios";
import { Applicant } from "../modals/applicant.modal.js";
import { AI_Prompt } from "../utils/AI_Prompt.js";
import pdf from "pdf-parse/lib/pdf-parse.js";

export const ResumeEnrich = async (req, res) => {
    try {
        const { url } = req.body;
        const structuredData = await fetch_PDf_DATA(url);

        if (!structuredData) {
            return res.status(500).json({ error: "Failed to extract or process resume data" });
        }
// creating and saving new document in  applicant collection
        const applicant = new Applicant(structuredData);
        await applicant.save();

        return res.status(200).json({ message: "Resume analyzed and saved into DB" });
    } catch (err) {
        console.error("Error in ResumeEnrich:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const fetch_PDf_DATA = async (url) => {
    try {
// if user doesn't give url then use dummy pdf

        let pdfUrl = url || "https://www.dhli.in/uploaded_files/resumes/resume_3404.pdf";

// convertring gdrive link in to downloadable pdf link
        const googleDriveMatch = pdfUrl.match(/drive\.google\.com\/file\/d\/([^/]+)/);
        if (googleDriveMatch) {
            const fileId = googleDriveMatch[1];
            pdfUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        }

// downloading pdf
        const response = await axios({ url: pdfUrl, responseType: "arraybuffer" });

        const pdfBuffer = Buffer.from(response.data, "binary");

// Extracting  text from pdf
        const extractedData = await pdf(pdfBuffer);
        const rawText = extractedData.text.trim();

        if (!rawText) throw new Error("Failed to extract text from PDF");

//send raw text to AI for structuring
        const parsedData = await AI_Prompt(rawText);

        if (!parsedData) throw new Error("Failed to process resume");

        return parsedData;
    } catch (error) {
        console.error("Error in fetch_PDf_DATA:", error);
        return null;
    }
};
