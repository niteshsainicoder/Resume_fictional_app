import { model, Schema } from "mongoose";

const ApplicantSchema = new Schema(
    {
        name: { type: String, required: true },
        email: [{ type: String, required: true }],
        education: [
            {
                degree: { type: String, required: false },
                branch: { type: String, required: false },
                institution: { type: String, required: false },
                year: { type: String, required: false }
            }
        ],
        experience: [
            {
                job_title: { type: String, required: false },
                company: { type: String, required: false },
                start_date: { type: String, required: false },
                end_date: { type: String, required: false }
            }
        ],
        summary: { type: String, required: false },
        skills: [{ type: String, required: false }]
    },
    { timestamps: true }
);

export const Applicant = model("Applicant", ApplicantSchema);
