# React + Vite

# 📦 Draggable Card UI with React + Tailwind + Motion

🎉 Welcome to the **Draggable Card Interface**! This project showcases an interactive UI built using **React**, **TailwindCSS**, and **Motion Framer**. Each card is draggable, responsive, and comes with dynamic content — perfect for displaying downloadable items or files with visual feedback.

---

## 🚀 Tech Stack

| Tech                | Emoji | Description                     |
| ------------------- | ----- | ------------------------------- |
| React ⚛️            | ⚛️    | Core library for building UI    |
| TailwindCSS 🌬      | 🎨    | Utility-first CSS for styling   |
| Framer Motion 🏃‍♂️ | 🎥    | Smooth drag & motion animations |

---

## 📁 Components

### 🔹 `Foreground.jsx`

* Contains the layout and maps over the card data.
* Applies a translucent sky-blue background.
* Uses `useRef` to constrain card dragging within the visible area.

### 🔹 `Card.jsx`

* Displays an icon 📄, description, file size, and a footer.
* Shows either a ❌ close icon or ⬇️ download icon.
* Conditional tag with dynamic background color (💙 or 💚).
* Fully draggable using `motion.div` with elastic bounce.

---

## 🎯 Features

* 🖱️ **Drag & Drop**: Smooth, constraint-based dragging experience.
* 🌓 **Glassmorphism UI**: Modern frosted-glass design.
* 📱 **Responsive**: Adapts well across screen sizes.
* 🎯 **Dynamic Content**: Easily extendable with more card items.
* 🎨 **Conditional Styling**: Tags change color based on props.

---

## 🔧 How to Run

```bash
# Clone the repo
git clone https://github.com/Niti60/Tasks.git

# Install dependencies
npm install

# Start the development server
npm run dev
```

---
## 🔮Future Goals
Soon I will make it dyanmic get data from users and make card using that data for now it is a static page showcasing my understanding of react,tailwind and framer motion.
## 🧠 Inspiration

This project is great as a UI playground to explore:

* Framer Motion animations
* Tailwind styling tricks
* Component composition in React
---
