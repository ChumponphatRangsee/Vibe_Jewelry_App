# Vibe Jewelry App

A modern body jewelry e-commerce application built with React and Vite, featuring AR try-on capabilities and a beautiful, responsive design.

## Prerequisites

- **Node.js**: Version 20.19+ or 22.12+ (currently using 20.16.0, upgrade recommended)
- **npm**: Comes with Node.js

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ChumponphatRangsee/Vibe_Jewelry_App.git
   cd Vibe_Jewelry_App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Getting Started

### Running Locally

Start the development server:

```bash
npm run dev
```

The app will be available at:
- **Local**: http://localhost:5173/
- **Network**: http://192.168.1.35:5173/

### Accessing from Mobile Devices (Using ngrok)

To test the app on your mobile device or share it with others:

1. **Start the development server** (if not already running):
   ```bash
   npm run dev
   ```

2. **In a new terminal**, start ngrok:
   ```bash
   npx ngrok http 5173
   ```

3. **Get your public URL**:
   - Check the terminal output for a URL like: `https://xxxx-xxx-xxx-xxx.ngrok-free.app`
   - Or visit http://localhost:4040 to see the ngrok web interface

4. **Access your app**:
   - Open the ngrok URL on any device
   - Share the URL with others for testing

> **Note**: Make sure the dev server is running BEFORE starting ngrok, otherwise you'll get a connection error.

## Project Structure

```
src/
├── components/
│   ├── Home/          # Home page components
│   ├── Layout/        # Layout components (AppLayout, BottomNav)
│   └── Camera/        # Camera and AR try-on components
├── pages/             # Page components
├── hooks/             # Custom React hooks
├── data/              # Static data and configurations
└── App.jsx            # Main application component
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Navigation
- **ngrok** - Secure tunneling for mobile testing

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.
