# AI Mock Interview Platform

A modern web application that provides AI-powered mock interviews to help users prepare for real job interviews. The platform uses Google's Generative AI to simulate realistic interview scenarios and provide detailed feedback.

## Features

- 🔐 **Authentication**: Secure user authentication using Clerk
- 🤖 **AI-Powered Interviews**: Realistic interview simulations using Google's Generative AI
- 🎥 **Video Recording**: Record and review your interview responses
- 📊 **Detailed Feedback**: Get comprehensive feedback on your performance
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🌙 **Dark Mode**: Supports both light and dark themes
- 📝 **Customizable Interviews**: Create and edit interview scenarios

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI Components
- **Authentication**: Clerk
- **AI Integration**: Google Generative AI
- **Database**: Firebase
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: React Router DOM
- **UI Components**: Radix UI, Lucide Icons
- **Development Tools**: ESLint, TypeScript, PostCSS

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase account
- Google Cloud account (for Generative AI)
- Clerk account

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd ai_mock_interview
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_GOOGLE_AI_API_KEY=your_google_ai_api_key
```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── assets/         # Static assets
├── components/     # Reusable UI components
├── config/         # Configuration files
├── handlers/       # API and event handlers
├── layouts/        # Page layouts
├── lib/           # Utility functions
├── provider/      # Context providers
├── routes/        # Page components
├── scripts/       # Helper scripts
├── types/         # TypeScript type definitions
├── App.tsx        # Main application component
└── main.tsx       # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Generative AI for providing the interview simulation capabilities
- Clerk for authentication services
- Firebase for backend services
- All the open-source libraries and tools used in this project
