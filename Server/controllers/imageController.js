import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from "form-data";

export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body;

        // Validate user and prompt
        const user = await userModel.findById(userId);
        if (!user || !prompt) {
            return res.status(400).json({ success: false, message: "Missing Details" });
        }

        // Check user credit balance
        if (user.creditBalance <= 0) {
            return res.status(400).json({
                success: false,
                message: "No Credit Balance",
                creditBalance: user.creditBalance,
            });
        }

        // Prepare FormData
        const formData = new FormData();
        formData.append("prompt", prompt);

        // Call the external API
        const { data } = await axios.post(
            "https://clipdrop-api.co/text-to-image/v1",
            formData,
            {
                headers: {
                    "x-api-key": process.env.CLIPDROP_API,
                    ...formData.getHeaders(),
                },
                responseType: "arraybuffer",
            }
        );

        // Convert binary data to Base64
        const base64Image = Buffer.from(data, "binary").toString("base64");
        const resultImage = `data:image/png;base64,${base64Image}`;

        // Deduct credit balance
        await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });

        // Respond with the generated image and updated credit balance
        res.json({
            success: true,
            message: "Image generated",
            creditBalance: user.creditBalance - 1,
            resultImage,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};
