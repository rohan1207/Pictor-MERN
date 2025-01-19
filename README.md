# Full Stack AI SaaS Application

## Overview
This project is a Full Stack AI SaaS Application built using the MERN stack (**MongoDB, Express, React, Node.js**). The application is a **Text-to-Image Generator** that enables users to create AI-generated images based on their input. It features a credit-based system, payment gateway integration, and user authentication.

## Features
- **Text-to-Image Generation**: Users can generate images using the **Clipdrop API**.
- **Credit System**: Users receive credits to generate images and can purchase additional credits via an integrated payment gateway.
- **User Authentication**: Secure login and registration system with account details stored in MongoDB.
- **Responsive UI**: Built with React and Tailwind CSS for an interactive and user-friendly interface.

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **API Integration**: Clipdrop API
- **Payment Gateway**: Integrated online payment gateway for credit purchases

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- MongoDB (local or cloud-based)
- A Clipdrop API key

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   cd client
   npm install
   cd ..
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=<your-mongodb-uri>
   PORT=5000
   CLIPDROP_API_KEY=<your-clipdrop-api-key>
   PAYMENT_GATEWAY_KEY=<your-payment-gateway-key>
   ```

4. Start the development servers:
   ```bash
   npm run dev
   ```
   This will run both the frontend and backend concurrently.

5. Access the app:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure
```
project-root/
├── client/                 # Frontend code
│   ├── public/             # Static files
│   ├── src/                # React components, pages, and assets
│   └── ...
├── server/                 # Backend code
│   ├── routes/             # API routes
│   ├── controllers/        # Route handlers
│   ├── models/             # MongoDB models
│   └── ...
├── .env                    # Environment variables
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

## APIs Used
- **Clipdrop API**: For generating images from text prompts.

## Future Enhancements
- Add image galleries for users to save generated images.
- Enable custom styles or themes for the generated images.
- Include social media sharing options for generated content.

## Contributing
Feel free to fork the repository and make improvements. Contributions are welcome!

## License
This project is licensed under the MIT License.

## Acknowledgments
- Special thanks to the creators of the [Clipdrop API](https://clipdrop.co/) for providing the AI generation capabilities.

## Contact
For any questions or feedback, feel free to reach out to me on https://www.linkedin.com/in/rohan-ambhore/
