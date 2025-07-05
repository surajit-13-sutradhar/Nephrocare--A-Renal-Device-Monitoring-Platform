# Nephrocare - Renal Health Monitoring Platform

<div align="center">

![Nephrocare Logo](https://img.shields.io/badge/Nephrocare-Renal%20Health%20Monitoring-blue?style=for-the-badge&logo=health)

*A comprehensive web-based platform for renal health monitoring and patient care management*

[![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0+-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.0+-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)

[Features](#features) • [Tech Stack](#tech-stack) • [Installation](#installation) • [Usage](#usage) • [Contributing](#contributing)

</div>

---

## 📋 Overview

**Nephrocare** is a modern, responsive web application designed to facilitate comprehensive renal health monitoring and patient care management. The platform serves three distinct user roles - **Doctors**, **Patients**, and **Technicians** - each with specialized dashboards and workflows tailored to their specific needs in the healthcare ecosystem.

### 🎯 Key Objectives

- **Real-time Health Monitoring**: Track vital signs and renal health metrics
- **Multi-role Access Control**: Secure, role-based user management
- **Responsive Design**: Seamless experience across all devices
- **Modern UI/UX**: Intuitive interface with smooth animations
- **Scalable Architecture**: Built for enterprise healthcare environments

---

## ✨ Features

### 🏥 **Doctor Dashboard**
- **Patient Analytics**: Real-time monitoring of patient vital signs
- **Health Metrics Tracking**: Heart rate, temperature, blood pressure, oxygen saturation
- **Alert System**: Critical value notifications and warnings
- **Patient Communication**: Integrated chat system for patient consultations
- **Medical Records Management**: Comprehensive patient data overview

### 👤 **Patient Dashboard**
- **Personal Health Monitoring**: View real-time health metrics
- **Doctor Communication**: Direct chat interface with healthcare providers
- **Health Alerts**: Personalized notifications for concerning values
- **Profile Management**: Update personal information and preferences
- **Device Integration**: Connect with renal monitoring devices

### 🔧 **Technician Dashboard**
- **Device Management**: Monitor and maintain renal health devices
- **Patient Device Assignment**: Link devices to specific patients
- **System Diagnostics**: Track device performance and health
- **Maintenance Scheduling**: Organize device maintenance and updates

### 🔐 **Security & Authentication**
- **Multi-factor Authentication**: OTP verification via phone/email
- **Role-based Access Control**: Secure user role management
- **Password Protection**: Encrypted credential storage
- **Session Management**: Secure user sessions and logout

---

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern UI framework with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - CSS vendor prefixing

### Key Libraries
- **React Router** - Client-side routing
- **Zustand** - Lightweight state management
- **React Hook Form** - Form handling and validation

---

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nephrocare-website.git
   cd nephrocare-website
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Using yarn
   yarn install
   ```

3. **Start development server**
   ```bash
   # Using npm
   npm run dev
   
   # Using yarn
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production
```bash
# Using npm
npm run build

# Using yarn
yarn build
```

---

## 📱 Usage

### User Registration Flow

1. **Access Landing Page**: Navigate to the application homepage
2. **Choose Role**: Select from Doctor, Patient, or Technician registration
3. **Fill Details**: Complete role-specific information forms
4. **OTP Verification**: Verify identity via phone/email OTP
5. **Set Password**: Create secure account credentials
6. **Access Dashboard**: Redirect to role-specific dashboard

### User Login Flow

1. **Enter Credentials**: Use phone/email and password
2. **Role Detection**: System automatically detects user role
3. **Dashboard Access**: Redirect to appropriate dashboard

### Dashboard Features

#### Patient Dashboard
- **Health Metrics**: View real-time vital signs with color-coded alerts
- **Chat Interface**: Communicate with assigned doctors
- **Profile Management**: Update personal information
- **Responsive Design**: Optimized for mobile and desktop

#### Doctor Dashboard
- **Patient Monitoring**: Track multiple patient health metrics
- **Communication Tools**: Chat with patients and colleagues
- **Medical Records**: Access comprehensive patient data
- **Alert Management**: Respond to critical health alerts

#### Technician Dashboard
- **Device Management**: Monitor renal health devices
- **Patient Assignment**: Link devices to patients
- **Maintenance Tracking**: Schedule and track device maintenance
- **System Health**: Monitor overall system performance

---

## 🏗 Project Structure

```
nephrocare-website/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── doctor/          # Doctor-specific components
│   │   │   ├── patients/        # Patient-specific components
│   │   │   ├── technician/      # Technician-specific components
│   │   │   └── shared/          # Shared UI components
│   │   ├── pages/               # Route components
│   │   ├── store/               # State management
│   │   ├── assets/              # Static assets
│   │   └── main.jsx             # Application entry point
│   ├── public/                  # Public assets
│   └── package.json
├── backend/                     # Backend API (if applicable)
└── README.md
```

---

## 🎨 Design System

### Color Palette
- **Primary**: Violet (`#7c3aed`) - Main brand color
- **Secondary**: Blue (`#1e40af`) - Supporting elements
- **Success**: Green (`#059669`) - Positive states
- **Warning**: Yellow (`#d97706`) - Caution states
- **Danger**: Red (`#dc2626`) - Critical alerts
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Inter font family
- **Body Text**: System font stack
- **Code**: Monospace font for technical content

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Consistent styling with hover states
- **Forms**: Clean, accessible input fields
- **Navigation**: Responsive menu system

---

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the frontend directory:

```env
VITE_API_URL=your_api_endpoint
VITE_APP_NAME=Nephrocare
VITE_APP_VERSION=1.0.0
```

### Tailwind Configuration
The project uses a custom Tailwind configuration for consistent styling:

```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom color palette
      },
      animation: {
        // Custom animations
      }
    }
  },
  plugins: []
}
```

---

## 🧪 Testing

### Running Tests
```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

### Testing Strategy
- **Unit Tests**: Component and utility function testing
- **Integration Tests**: API and state management testing
- **E2E Tests**: User workflow testing
- **Accessibility Tests**: WCAG compliance verification

---

## 📦 Deployment

### Production Build
```bash
npm run build
```

### Deployment Options
- **Vercel**: Zero-config deployment
- **Netlify**: Static site hosting
- **AWS S3**: Cloud storage hosting
- **Docker**: Containerized deployment

### Environment Setup
1. Configure environment variables
2. Set up CI/CD pipeline
3. Configure domain and SSL
4. Set up monitoring and analytics

---

## 🤝 Contributing

We welcome contributions from the community! Please follow these guidelines:

### Development Process
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages
- Include tests for new features
- Update documentation as needed

### Pull Request Guidelines
- Provide clear description of changes
- Include screenshots for UI changes
- Ensure all tests pass
- Update relevant documentation
- Follow the existing code style

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🆘 Support

### Getting Help
- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs via GitHub Issues
- **Discussions**: Join community discussions
- **Email**: Contact the development team

### Common Issues
- **Build Errors**: Ensure Node.js version compatibility
- **Styling Issues**: Check Tailwind CSS configuration
- **Authentication**: Verify environment variables
- **Performance**: Optimize bundle size and lazy loading

---

## 🙏 Acknowledgments

- **Healthcare Professionals**: For domain expertise and feedback
- **Open Source Community**: For the amazing tools and libraries
- **Design Team**: For the beautiful UI/UX design
- **Beta Testers**: For valuable feedback and bug reports

---

<div align="center">

**Made with ❤️ for better healthcare**

[Back to Top](#nephrocare---renal-health-monitoring-platform)

</div>

