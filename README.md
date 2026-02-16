# 🛒 Authentication-Based E-Commerce Dashboard

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

A modern, fully responsive Single Page Application (SPA) built with React and Vite. This application features a complete mock-authentication flow, robust state management using the Context API, and a beautiful UI designed with Tailwind CSS v4.

---

## ✨ Key Features

### 🔐 Security & Authentication (No Backend Required)
* **User Registration & Login:** Form validation and persistent mock-auth using browser `localStorage`.
* **Protected Routes:** Unauthorized users are instantly redirected to the login page.
* **Strict Session Management:** Users are granted a **5-minute secure session**. A live countdown timer is displayed in the navigation bar. Upon expiry, the user is automatically logged out.
* **Profile Management:** Users can view and edit their profile details (Name, Password).

### 🛍️ E-Commerce Capabilities
* **Dynamic Product Listing:** Fetches real-time mock data from the [Fake Store API](https://fakestoreapi.com/).
* **Global Cart State:** Add items to the cart, prevent duplicate entries, increase/decrease quantities, and remove items.
* **Live Calculation:** Instantly calculates line-item subtotals and the grand total.

### 🎨 UI & UX Design
* **Premium "White Theme":** Sleek, Apple-inspired modern interface with soft shadows and clean typography.
* **Absolute Centering:** Pixel-perfect centered authentication forms.
* **Fully Responsive:** Adapts seamlessly to Mobile, Tablet, and Desktop screens.
* **Interactive Elements:** Buttons feature active scaling, hover states, and inputs feature soft-focus glow rings.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | UI Library & Component Architecture |
| **Vite** | Blazing fast build tool and development server |
| **Tailwind CSS v4** | Utility-first CSS framework for rapid styling |
| **React Router v6** | Client-side routing and protected route logic |
| **Context API** | Global state management (Auth and Cart) |
| **Lucide React** | Clean, customizable SVG icons |

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine (v16 or higher is recommended).

### 1. Clone or Download the Repository
Navigate to your desired folder in the terminal:

git clone <your-repository-url>
cd ecommerce-dashboard




# 🚀 How to Run This Project

Follow these simple steps to get the E-Commerce Dashboard running on your local machine.

## 📋 Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer. 

---

## 💻 Step-by-Step Guide

### Step 1: Open your Terminal
Open your command prompt or VS Code terminal. Make sure you are inside the exact project folder. Your terminal path should end with the project name, like this:
`...\ecommerce-dashboard>`

*(If you are not in the folder, type `cd ecommerce-dashboard` and hit Enter).*

### Step 2: Install Dependencies
Before running the app for the first time, you need to download all the required packages (React, Tailwind CSS, Lucide Icons, etc.). Type this command and press Enter:
```bash
npm install


