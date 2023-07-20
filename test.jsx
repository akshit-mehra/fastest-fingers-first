import React, { useState } from 'react';
import './VirtualKeyboard.scss';

const VirtualKeyboard = () => {
  const [enteredText, setEnteredText] = useState('Click here, then start typing!');
  const [pressedKeys, setPressedKeys] = useState(new Set());

  const handleKeyPress = (e) => {
    const charPressed = e.key;
    const keyId = e.keyCode;

    if (charPressed.length <= 1) {
      if (enteredText.endsWith('\n')) {
        setEnteredText((prevText) => prevText.slice(0, -1));
      }
      setEnteredText((prevText) => prevText + charPressed);
    } else if (charPressed === 'Backspace') {
      if (e.shiftKey) {
        setEnteredText('Click here, then start typing!');
      } else {
        setEnteredText((prevText) => prevText.slice(0, -1));
      }
    } else if (charPressed === 'Enter') {
      setEnteredText((prevText) => prevText + '\n');
    }

    // Add the pressed key's id to the Set of pressed keys
    setPressedKeys((prevKeys) => new Set(prevKeys).add(keyId));
  };

  const handleKeyRelease = (e) => {
    const keyId = e.keyCode;
    // Remove the released key's id from the Set of pressed keys
    setPressedKeys((prevKeys) => {
      const updatedKeys = new Set(prevKeys);
      updatedKeys.delete(keyId);
      return updatedKeys;
    });
  };

  const clearText = () => {
    setEnteredText('Click here, then start typing!');
  };

  React.useEffect(() => {
    // Add event listeners for keydown and keyup events
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyRelease);

    return () => {
      // Clean up the event listeners on component unmount
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyRelease);
    };
  }, []);

  return (
    <div>
      <div id="text">
        <div id="enteredText" onClick={clearText}>
          {enteredText}
        </div>
      </div>
      <div className="container" id="keyboard">
        {/* Your JSX code here (converted from the provided HTML) */}
      </div>
      <br />
      <pre style={{ width: '100%', textAlign: 'center' }}>
        Click the screen or type Shift + Delete to clear all text.
      </pre>
    </div>
  );
};

export default VirtualKeyboard;
