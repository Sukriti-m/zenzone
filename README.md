# ZenZone

A modern, immersive focus and productivity application that helps you create the perfect digital workspace. ZenZone combines ambient backgrounds, soothing sounds, and productivity tools to help you stay focused and connected with your team.

## ✨ Features

### 🎨 Immersive Spaces
- **Ambient Backgrounds**: Choose from a collection of beautiful 4K video backgrounds and static images
- **Customizable Environments**: Create personalized digital spaces for different moods and activities
- **Smooth Transitions**: Seamless switching between different space themes

### 🎵 Audio Experience
- **Ambient Sounds**: Library of focus-enhancing sounds including:
  - Cafe ambience
  - Ocean waves
  - Rain sounds
  - Fireplace crackling
  - Delta and Theta waves for deep focus
- **Audio Controls**: Adjust volume and mix different soundscapes

<!-- ### ⏱️ Productivity Tools
- **Built-in Timer**: Pomodoro-style timer to manage your work sessions
- **Task Management**: Quick access to tasks and calendar without leaving your flow
- **Focus Tracking**: Monitor your productivity and focus time

### 👥 Collaboration
- **Team Spaces**: Share digital spaces with your team or friends
- **Chat Integration**: Built-in chat functionality for team communication
- **Invite System**: Easily invite others to join your workspace -->

### 🎯 Additional Features
- **Explore**: Discover new spaces and collections
- **Showcase**: Browse featured spaces and categories
- **Help Center**: Comprehensive documentation and FAQs
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zenzone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🛠️ Tech Stack

- **React 18.2.0** - UI library
- **React Router 6.6.1** - Routing
- **Redux 4.2.0** - State management
- **Tailwind CSS 3.2.4** - Styling
- **Axios 1.3.4** - HTTP client
- **React Icons 4.7.1** - Icon library
- **Swiper 8.4.5** - Touch slider
- **Animate.css 4.1.1** - Animation library
- **WOW.js 1.2.2** - Scroll animations

## 📁 Project Structure

```
zenzone/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, sounds, videos, fonts
│   ├── components/  # Reusable components
│   ├── layout/      # Layout components
│   ├── pages/       # Page components
│   │   ├── Career/
│   │   ├── Explore/
│   │   ├── Help/
│   │   ├── Home/
│   │   ├── HowWork/
│   │   ├── Showcase/
│   │   └── Space/    # Main workspace page
│   ├── App.js       # Main app component
│   └── index.js     # Entry point
├── package.json
└── README.md
```

## 🎮 Usage

1. **Navigate to Home**: Browse featured spaces and collections
2. **Explore**: Discover new spaces and categories
3. **Create a Space**: Click on any space to enter your digital workspace
4. **Customize**: Adjust background, sounds, and settings to your preference
5. **Start Working**: Use the timer and task management features to stay productive
6. **Invite Others**: Share your space with team members or friends

## 🌐 Routes

- `/` - Home page
- `/explore` - Explore spaces and collections
- `/showcase` - Featured showcases
- `/careers` - Career opportunities
- `/howzenzonework` - How ZenZone works
- `/help/*` - Help center and documentation
- `/zenzonespace` - Main workspace (with optional `?space=<id>` parameter)

## 🎨 Customization

ZenZone supports extensive customization:
- Multiple space themes (aquarium, cityscapes, nature, cozy rooms, etc.)
- Various ambient sound options
- Adjustable media controls
- Customizable timer settings