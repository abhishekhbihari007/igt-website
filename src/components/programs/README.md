# Program Components Directory

This directory contains all individual program page components for the IGT website.

## 📁 Current Programs

- **AgricultureDroneTechnology.tsx** - MASTER PROGRAM in Agriculture Drones
- **PrecisionAgriculture.tsx** - MASTER PROGRAM in Precision Agriculture

## ➕ How to Add New Program Components

### 1. Create New Program File
Create a new `.tsx` file in this directory following the naming convention:
```
ProgramName.tsx
```

### 2. File Structure Template
```tsx
import React from 'react';
import '../ProgramDetails.css'; // Import the main CSS file

const ProgramName = () => {
    return (
        <div className="program-page">
            {/* Your program content here */}
        </div>
    );
};

export default ProgramName;
```

### 3. Update ProgramDetailsPage.tsx
Add your new program to the routing logic in `../ProgramDetailsPage.tsx`:

```tsx
// Add import
import ProgramName from './programs/ProgramName';

// Add routing logic
if (programData.title === "MASTER PROGRAM in Program Name") {
    return <ProgramName />;
}
```

## 🔧 Integration Process

1. **Add your program file** to this directory
2. **Update ProgramDetailsPage.tsx** with routing logic
3. **Test the integration** by navigating to the program
4. **Notify the developer** to work on styling and optimization

## 📝 Notes

- Keep program components focused on content only
- Use consistent CSS classes from `ProgramDetails.css`
- Follow the existing naming conventions
- Each program should be self-contained

## 🚀 Next Steps

After adding your program files, the developer will:
- Optimize the styling and layout
- Ensure responsive design
- Integrate with the main navigation
- Test cross-browser compatibility
