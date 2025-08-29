# Canvas Editor - React Application

A modern, component-based canvas editor built with React, Konva.js, and Tailwind CSS.

## 🏗️ **Project Structure**

```
src/
├── components/           # React components
│   ├── Canvas.js        # Main canvas wrapper with Konva Stage
│   ├── CanvasElement.js # Individual canvas elements (text, image)
│   ├── Header.js        # Application header with title
│   ├── StatusBar.js     # Status information display
│   ├── Toolbar.js       # Tool controls and actions
│   ├── UrlImage.js      # Image element component
│   ├── URLVideo.js      # Video element component
│   └── index.js         # Component exports
├── hooks/               # Custom React hooks
│   └── useCanvasHistory.js # History management hook
├── helper/              # Helper components
│   └── ResizableElement.js # Resizable wrapper component
├── utils/               # Utility functions
│   └── canvasHelpers.js # Canvas operation utilities
├── App.js               # Main application component
└── index.js             # Application entry point
```

## 🚀 **Features**

### **Core Functionality**
- ✏️ **Text Elements**: Add, edit, and style text
- 🖼️ **Image Elements**: Add images from URLs
- 🔄 **History Management**: Undo/Redo operations
- 📐 **Resizing**: Resize elements with handles
- 🎯 **Selection**: Click to select elements
- ⌨️ **Keyboard Navigation**: Arrow keys for text positioning

### **Advanced Features**
- 📱 **Responsive Design**: Works on all screen sizes
- 🎨 **Modern UI**: Beautiful Tailwind CSS styling
- 💾 **Local Storage**: Save and load canvas states
- 🔀 **Layer Management**: Bring forward/backward
- 🎭 **Smooth Animations**: Hover effects and transitions

## 🛠️ **Technology Stack**

- **React 18** - Modern React with hooks
- **Konva.js** - 2D canvas library
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Hooks** - Reusable state logic
- **Component Architecture** - Modular, maintainable code

## 📦 **Installation & Setup**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd intellemo-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 **Usage**

### **Adding Elements**
- **Text**: Click "Add Text" button and enter text content
- **Image**: Click "Add Image" button and provide image URL

### **Editing Elements**
- **Select**: Click on any element to select it
- **Move**: Drag elements to reposition them
- **Resize**: Use resize handles to change dimensions
- **Delete**: Select element and click delete button

### **Canvas Operations**
- **Undo/Redo**: Use history controls to navigate changes
- **Layer Management**: Bring elements forward or backward
- **Save/Load**: Persist your work locally

### **Keyboard Shortcuts**
- **Arrow Keys**: Move selected text elements
- **Shift + Arrow**: Move in larger increments

## 🏛️ **Architecture Overview**

### **Component Hierarchy**
```
App
├── Header (Title & Description)
├── Toolbar (Tools & Controls)
├── Canvas (Konva Stage)
│   └── CanvasElement (Individual Elements)
└── StatusBar (Information Display)
```

### **State Management**
- **Local State**: Component-level state with useState
- **Custom Hooks**: Reusable logic (useCanvasHistory)
- **Props Drilling**: Clean data flow between components

### **Data Flow**
1. User interacts with Toolbar
2. App state updates
3. Changes propagate to Canvas
4. Canvas re-renders elements
5. History is automatically tracked

## 🔧 **Customization**

### **Adding New Element Types**
1. Create new component in `components/`
2. Add type handling in `CanvasElement.js`
3. Update utility functions in `canvasHelpers.js`
4. Add toolbar controls in `Toolbar.js`

### **Styling Changes**
- Modify Tailwind classes in component files
- Update `tailwind.config.js` for custom themes
- Add custom CSS in `index.css` if needed

## 📱 **Responsive Design**

The application is fully responsive with:
- **Mobile-first approach**
- **Flexible layouts**
- **Touch-friendly controls**
- **Adaptive spacing**

## 🚀 **Performance Features**

- **Efficient rendering** with React optimization
- **Minimal re-renders** through proper state management
- **Optimized canvas operations** with Konva.js
- **Lazy loading** for better initial load times

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 **License**

This project is licensed under the MIT License.

## 🙏 **Acknowledgments**

- **Konva.js** for powerful canvas capabilities
- **Tailwind CSS** for beautiful, responsive design
- **React Team** for the amazing framework
- **Heroicons** for beautiful SVG icons
