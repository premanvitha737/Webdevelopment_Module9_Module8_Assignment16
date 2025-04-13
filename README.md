# Webdevelopment_Module9_Module8_Assignment16
# IELTS Speaking Test - Modal Integration 

## 📌 Objective
To enhance the UI/UX of the IELTS Speaking Test platform by implementing a **reusable modal component** for displaying dynamic content such as **test instructions** and **test results**.

---

## 🧩 Features

### ✅ Reusable Modal Component
- Accepts dynamic content via `props`
- Configurable size: `small`, `medium`, `large`
- Includes header, body, and close button
- Smooth fade/slide-in transitions
- Accessible via keyboard (`role="dialog"` and `aria-modal="true"`)

### ✅ Modal Functionalities
- **Overlay** to highlight focus
- **Open/Close** with click and ESC key
- Blocks click outside content
- Styled using pure CSS (no Tailwind)

### ✅ Dashboard Integration
- “View Instructions” button opens instruction modal
- “View Results” button opens result modal
- Modals appear **centered** on the screen

---

## 📁 Folder Structure

/src 
├── /components 
└── Modal.tsx # Reusable modal component 
└── Modal.css # Modal styling 
├── /pages 
└── Dashboard.tsx # Test dashboard with modal triggers 
└── Dashboard.css # Dashboard styling 
├── App.tsx # Main app entry with routing 
├── index.tsx # ReactDOM rendering 
├── index.css # Global styles

## 🚀 How to Run

1. Clone the repo or copy the code into your React app.
2. Ensure all `.tsx` and `.css` files are in their correct folders.
3. Start the development server:
   npm install
   npm run dev
📷 Screenshots
![Screenshot 2025-04-13 141029](https://github.com/user-attachments/assets/8a5e6e0b-8b18-48d1-880b-072bb18899e6)
![Screenshot (157)](https://github.com/user-attachments/assets/e29815b0-39f8-433f-a69e-60593170c626)
![Screenshot (158)](https://github.com/user-attachments/assets/1ad102b1-0670-40dc-8965-794b084fb25c)

🧪 Testing
✅ Functionality Test
Click "View Instructions" → Modal appears with instructions

Click "View Results" → Modal shows result placeholder

✅ Dynamic Content
Each modal receives different children content via props

✅ Accessibility
Close modal via ❌ button or clicking outside

Modal uses semantic roles for accessibility

