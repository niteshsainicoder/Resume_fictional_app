import { Applicant } from "../modals/applicant.modal.js";

export const searchResume = async (req, res) => {
    try {

        const { name } = req.body;

        const regex = new RegExp(name, "i");
        const results = await Applicant.find({ name: { $regex: regex } });

        if (results.length === 0) return res.status(404).json({ error: "No matches found" });

        return res.status(200).json(results);
        
    } catch (error) {

        console.log("Search :", error);

    }
};
