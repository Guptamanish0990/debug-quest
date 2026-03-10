// src/utils/security.js

// Disable right-click
export const disableRightClick = () => {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('⚠️ Right-click is disabled on this website!');
    return false;
  });
};

// Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
export const disableDevTools = () => {
  document.addEventListener('keydown', (e) => {
    // F12
    if (e.keyCode === 123) {
      e.preventDefault();
      alert('⚠️ Developer tools are disabled!');
      return false;
    }
    
    // Ctrl+Shift+I (Inspector)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
      e.preventDefault();
      alert('⚠️ Inspector is disabled!');
      return false;
    }
    
    // Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
      e.preventDefault();
      alert('⚠️ Console is disabled!');
      return false;
    }
    
    // Ctrl+Shift+C (Element Selector)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
      e.preventDefault();
      alert('⚠️ Element selector is disabled!');
      return false;
    }
    
    // Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode === 85) {
      e.preventDefault();
      alert('⚠️ View source is disabled!');
      return false;
    }
    
    // Ctrl+S (Save)
    if (e.ctrlKey && e.keyCode === 83) {
      e.preventDefault();
      alert('⚠️ Save is disabled!');
      return false;
    }

    // Ctrl+Shift+K (Console in Firefox)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 75) {
      e.preventDefault();
      alert('⚠️ Console is disabled!');
      return false;
    }
  });
};

// Detect if DevTools is open
export const detectDevTools = () => {
  const threshold = 160;
  let devtoolsOpen = false;
  
  const detectDevToolsInterval = setInterval(() => {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    
    if (widthThreshold || heightThreshold) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        
        // Clear the page content
        document.body.innerHTML = `
          <div style="
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            text-align: center;
            padding: 20px;
          ">
            <div>
              <div style="font-size: 80px; margin-bottom: 20px;">🚫</div>
              <h1 style="font-size: 3rem; margin-bottom: 1rem; color: #ef4444;">Access Denied</h1>
              <p style="font-size: 1.5rem; color: #94a3b8; margin-bottom: 1rem;">
                Developer Tools Detected!
              </p>
              <p style="font-size: 1rem; color: #64748b;">
                Please close DevTools and refresh the page.
              </p>
              <div style="margin-top: 30px;">
                <button onclick="window.location.reload()" style="
                  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
                  color: white;
                  border: none;
                  padding: 15px 40px;
                  font-size: 1.1rem;
                  border-radius: 12px;
                  cursor: pointer;
                  font-weight: bold;
                  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
                ">
                  🔄 Refresh Page
                </button>
              </div>
            </div>
          </div>
        `;
      }
    } else {
      devtoolsOpen = false;
    }
  }, 500);

  return () => clearInterval(detectDevToolsInterval);
};

// Disable text selection
export const disableTextSelection = () => {
  document.body.style.userSelect = 'none';
  document.body.style.webkitUserSelect = 'none';
  document.body.style.mozUserSelect = 'none';
  document.body.style.msUserSelect = 'none';
  
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
  });
};

// Disable copy
export const disableCopy = () => {
  document.addEventListener('copy', (e) => {
    e.preventDefault();
    alert('⚠️ Copy is disabled on this website!');
    return false;
  });
};

// Disable cut
export const disableCut = () => {
  document.addEventListener('cut', (e) => {
    e.preventDefault();
    alert('⚠️ Cut is disabled on this website!');
    return false;
  });
};

// Disable drag
export const disableDrag = () => {
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  });
};

// Clear console
export const clearConsole = () => {
  const clearConsoleInterval = setInterval(() => {
    console.clear();
  }, 1000);
  
  return () => clearInterval(clearConsoleInterval);
};

// Disable Print Screen
export const disablePrintScreen = () => {
  document.addEventListener('keyup', (e) => {
    if (e.key === 'PrintScreen') {
      navigator.clipboard.writeText('');
      alert('⚠️ Screenshots are disabled on this website!');
    }
  });
  
  // Also detect PrtScn key
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 44) {
      e.preventDefault();
      alert('⚠️ Screenshots are disabled on this website!');
      return false;
    }
  });
};

// Block common DevTools shortcuts
export const blockDevToolShortcuts = () => {
  // Disable F1-F12 keys
  document.addEventListener('keydown', (e) => {
    if (e.keyCode >= 112 && e.keyCode <= 123) {
      e.preventDefault();
      return false;
    }
  });
};

// Initialize all security measures
export const initSecurity = (options = {}) => {
  const {
    disableRightClickEnabled = true,
    disableDevToolsEnabled = true,
    detectDevToolsEnabled = true,
    disableTextSelectionEnabled = true,
    disableCopyEnabled = true,
    disableCutEnabled = true,
    disableDragEnabled = true,
    clearConsoleEnabled = true,
    disablePrintScreenEnabled = true,
    blockDevToolShortcutsEnabled = true,
  } = options;

  const cleanupFunctions = [];

  if (disableRightClickEnabled) disableRightClick();
  if (disableDevToolsEnabled) disableDevTools();
  if (detectDevToolsEnabled) {
    const cleanup = detectDevTools();
    cleanupFunctions.push(cleanup);
  }
  if (disableTextSelectionEnabled) disableTextSelection();
  if (disableCopyEnabled) disableCopy();
  if (disableCutEnabled) disableCut();
  if (disableDragEnabled) disableDrag();
  if (clearConsoleEnabled) {
    const cleanup = clearConsole();
    cleanupFunctions.push(cleanup);
  }
  if (disablePrintScreenEnabled) disablePrintScreen();
  if (blockDevToolShortcutsEnabled) blockDevToolShortcuts();

  // Return cleanup function
  return () => {
    cleanupFunctions.forEach(cleanup => cleanup && cleanup());
  };
};