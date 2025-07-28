# Nephrocare - Backend Technical Specification

## Table of Contents
1. [System Overview](#system-overview)
2. [User Roles & Authentication](#user-roles--authentication)
3. [Data Models](#data-models)
4. [API Endpoints](#api-endpoints)
5. [Real-time Features](#real-time-features)
6. [Database Schema](#database-schema)
7. [System Architecture](#system-architecture)
8. [Security Considerations](#security-considerations)
9. [Deployment & Infrastructure](#deployment--infrastructure)

---

## System Overview

**Nephrocare** is a comprehensive renal health monitoring platform that enables real-time monitoring of dialysis machines and patient health metrics. The system supports three primary user roles with distinct access levels and functionalities.

### Key Features
- Real-time dialysis machine monitoring
- Patient health analytics and trend analysis
- Multi-role chat system (Doctor ↔ Patient, Doctor ↔ Technician)
- Device management and assignment
- Historical data tracking and analytics
- Alert system for critical health parameters

---

## User Roles & Authentication

### 1. Doctor
**Access Level:** Hospital-wide device monitoring
- **Device Access:** Multiple machines across hospital
- **Patient Access:** All patients connected to assigned devices
- **Capabilities:**
  - Monitor real-time patient data
  - View historical trends and analytics
  - Chat with patients and technicians
  - Receive alerts for critical values
  - Analyze patient health patterns

### 2. Patient
**Access Level:** Personal health monitoring
- **Device Access:** Only their connected device
- **Data Access:** Personal health metrics only
- **Capabilities:**
  - View real-time health data
  - Chat with assigned doctor
  - Book dialysis sessions
  - View historical health trends

### 3. Technician
**Access Level:** Single device management
- **Device Access:** One assigned device (with temporary transfer capability)
- **Patient Access:** Patients connected to assigned device
- **Capabilities:**
  - Monitor device status and performance
  - Update patient medical information
  - Chat with doctors
  - Manage device maintenance
  - Temporary access transfer to other technicians

### Authentication System
- **JWT-based authentication**
- **Role-based access control (RBAC)**
- **Session management with refresh tokens**
- **Hospital-based access restrictions**

---

## Data Models

### User Management
```javascript
// User Model
{
  id: "UUID",
  email: "string",
  phone: "string",
  password: "hashed_string",
  role: "doctor|patient|technician",
  name: "string",
  hospital: "string",
  ward: "string",
  isActive: "boolean",
  createdAt: "timestamp",
  updatedAt: "timestamp"
}

// Doctor-Device Assignment
{
  id: "UUID",
  doctorId: "UUID",
  deviceId: "UUID",
  assignedAt: "timestamp",
  isActive: "boolean"
}

// Technician-Device Assignment
{
  id: "UUID",
  technicianId: "UUID",
  deviceId: "UUID",
  assignedAt: "timestamp",
  isActive: "boolean",
  temporaryAccess: {
    grantedTo: "UUID",
    grantedAt: "timestamp",
    expiresAt: "timestamp"
  }
}
```

### Device Management
```javascript
// Device Model
{
  id: "UUID",
  deviceId: "string", // Physical device identifier
  name: "string",
  model: "string",
  hospital: "string",
  location: "string",
  status: "active|inactive|maintenance",
  lastSeen: "timestamp",
  assignedTechnician: "UUID",
  createdAt: "timestamp",
  updatedAt: "timestamp"
}

// Device Session
{
  id: "UUID",
  deviceId: "UUID",
  patientId: "UUID",
  sessionStart: "timestamp",
  sessionEnd: "timestamp",
  status: "active|completed|interrupted"
}
```

### Patient Health Data
```javascript
// Patient Profile
{
  id: "UUID",
  patientId: "string",
  name: "string",
  age: "number",
  gender: "string",
  bloodGroup: "string",
  assignedDoctor: "UUID",
  assignedDevice: "UUID",
  dialysisSchedule: "string",
  lastDialysis: "timestamp",
  createdAt: "timestamp",
  updatedAt: "timestamp"
}

// Health Metrics (Real-time)
{
  id: "UUID",
  patientId: "UUID",
  deviceId: "UUID",
  sessionId: "UUID",
  timestamp: "timestamp",
  heartRate: "number", // bpm
  temperature: "number", // °F
  bloodPressure: "number", // mmHg (systolic)
  oxygenSaturation: "number", // %
  flowRate: "number", // ml/min
  totalVolume: "number", // L
  systemStatus: "normal|warning|danger",
  createdAt: "timestamp"
}

// Medical Information (Updated by Technician)
{
  id: "UUID",
  patientId: "UUID",
  updatedBy: "UUID", // technician ID
  field: "string", // field name
  oldValue: "string",
  newValue: "string",
  updatedAt: "timestamp"
}
```

### Chat System
```javascript
// Chat Room
{
  id: "UUID",
  type: "doctor-patient|doctor-technician",
  participants: ["UUID"],
  deviceId: "UUID", // for device-specific chats
  createdAt: "timestamp",
  updatedAt: "timestamp"
}

// Chat Message
{
  id: "UUID",
  chatRoomId: "UUID",
  senderId: "UUID",
  senderRole: "doctor|patient|technician",
  message: "string",
  timestamp: "timestamp",
  isRead: "boolean",
  readAt: "timestamp"
}
```

### Booking System
```javascript
// Session Booking
{
  id: "UUID",
  patientId: "UUID",
  deviceId: "UUID",
  scheduledDate: "timestamp",
  duration: "number", // minutes
  status: "scheduled|confirmed|completed|cancelled",
  bookedAt: "timestamp",
  updatedAt: "timestamp"
}
```

---

## Real-time Features

1. **Health Metrics Stream**
   - Real-time patient health data
   - Device status updates
   - Critical value alerts

2. **Chat System**
   - Endpoint: `/ws/chat/{roomId}`
   - Real-time messaging
   - Typing indicators
   - Read receipts

3. **Device Status**
   - Device online/offline status
   - Maintenance alerts
   - Performance metrics

### Data Flow
```
Dialysis Machine → Backend → Database
                                    ↓
                                 Frontend (Real-time updates)
```

---

## Database Schema

### Primary Tables
1. **users** - User accounts and authentication
2. **devices** - Dialysis machine information
3. **patients** - Patient profiles and medical info
4. **health_metrics** - Real-time health data
5. **device_sessions** - Patient-device session tracking
6. **chat_rooms** - Chat room management
7. **chat_messages** - Message storage
8. **session_bookings** - Appointment scheduling
9. **user_device_assignments** - Role-device relationships
10. **medical_updates** - Technician updates audit trail

### Indexes
- `health_metrics(patientId, timestamp)` - Patient history queries
- `health_metrics(deviceId, timestamp)` - Device data queries
- `chat_messages(roomId, timestamp)` - Chat history
- `users(email, role)` - Authentication and role queries

---


