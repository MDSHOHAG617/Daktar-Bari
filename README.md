# 🏥 Daktar Bari – Telemedicine Web Application with FastAid AI assistent

**Daktar Bari** is a comprehensive and user-centric telemedicine web platform designed to provide 24/7 access to essential healthcare services with a **FastAid AI assistent**. The application facilitates virtual healthcare consultations, digital prescription management, e-pharmacy services, and the subscription of healthcare and protection plans. It caters to patients, doctors, and administrators through a robust, role-based dashboard management system.

---

## 🔍 Core Features and Functional Modules

### 1. Live Video Consultation
- Enables registered users to book and conduct real-time video consultations with qualified healthcare professionals.
- Offers options to schedule future appointments based on doctor availability.

### 2. Digital Health Plans & Protection Packages
Users can subscribe to affordable family and individual healthcare packages that include:
- Unlimited virtual consultations with experienced general practitioners and gynecologists.
- Substantial discounts on diagnostic tests.
- Cashback offers and insurance coverage (select plans).
  
**Examples of available plans:**
- WhizeeHealth Family Care
- WhizeeHealth Special Care
- WhizeeHealth Premium Care
- WhizeeHealth Care Plus

### 3. Online Medicine Ordering
- Allows patients to browse through a curated pharmaceutical catalog and place orders from the platform.
- Medicines are delivered promptly, with expected delivery times as low as **1 hour**.

### 4. Diagnostic Services at Home
- Patients can request home diagnostic tests with sample collection and report delivery within 24 hours.

### 5. Secure Authentication via Firebase
- User authentication and login functionality is powered by **Google Firebase**, supporting:
  - Email/Password login
  - Google single sign-on (SSO)

### 6. Doctor Registration & Prescription Upload
- Verified physicians can register on the platform by submitting credentials, specialties, and availability.
- Doctors can upload digital prescriptions directly to the patient's profile.
- Patients can conveniently **download prescriptions** in real time after their consultations.

### 7. Stripe Payment Integration (Demo)
- A fully functional **Stripe-powered** demo payment system is integrated to process:
  - Medicine purchases
  - Subscription plan payments
  - Appointment fees

### 8. Role-Based Dashboard System
The platform offers dynamic dashboards tailored to specific user roles:

| User Type     | Dashboard Options                                                                 |
|---------------|------------------------------------------------------------------------------------|
| **Patients**  | View/manage their appointments, orders, subscriptions, and download prescriptions |
| **Doctors**   | Upload prescriptions, manage patient appointments, and set availability           |
| **Administrators** | Manage users (view/make admin), add/update medicines, monitor system-wide activity |

---

## 🌐 Technology Stack Overview

- **Front-End Framework**: React.js  
- **Authentication**: Google Firebase 
- **Authentication**: JWT   
- **Payment Gateway (Demo)**: Stripe  
- **Role-Based Access Control**: Implemented via interface logic  
- **Backend APIs / Storage**: (Not shown, but can be assumed to support REST/Firestore/Firebase Functions)

---

## 🎯 Objective

The goal of Daktar Bari is to bring accessible, affordable, and scalable healthcare services to users anytime, anywhere, while also empowering medical practitioners with user-friendly digital tools to serve patients efficiently.

It is particularly useful for:
- Urban and rural populations needing remote healthcare access.
- Doctors looking to extend their services through teleconsultation.
- Patients looking for convenience in managing medicines and health plans from home.

---