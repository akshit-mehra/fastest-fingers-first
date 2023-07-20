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
      <div id="firstrow" className="keyboard-row">
			<kbd className="shifter" id="192">`</kbd>
			<kbd className="shifter" id="49">1</kbd>
			<kbd className="shifter" id="50">2</kbd>
			<kbd className="shifter" id="51">3</kbd>
			<kbd className="shifter" id="52">4</kbd>
			<kbd className="shifter" id="53">5</kbd>
			<kbd className="shifter" id="54">6</kbd>
			<kbd className="shifter" id="55">7</kbd>
			<kbd className="shifter" id="56">8</kbd>
			<kbd className="shifter" id="57">9</kbd>
			<kbd className="shifter" id="48">0</kbd>
			<kbd className="shifter" id="189">-</kbd>
			<kbd className="shifter" id="187">=</kbd>
			<kbd className="long operationKey" id="8">del</kbd>
		</div>
		<div id="secondrow" className="keyboard-row">
			<kbd className="long operationKey" id="9">tab</kbd>
			<kbd id="81">q</kbd>
			<kbd id="87">w</kbd>
			<kbd id="69">e</kbd>
			<kbd id="82">r</kbd>
			<kbd id="84">t</kbd>
			<kbd id="89">y</kbd>
			<kbd id="85">u</kbd>
			<kbd id="73">i</kbd>
			<kbd id="79">o</kbd>
			<kbd id="80">p</kbd>
			<kbd className="shifter" id="219">[</kbd>
			<kbd className="shifter" id="221">]</kbd>
			<kbd className="shifter" id="220">\</kbd>
		</div>
		<div id="thirdrow" className="keyboard-row">
			<kbd className="long operationKey" id="20">caps</kbd>
			<kbd id="65">a</kbd>
			<kbd id="83">s</kbd>
			<kbd id="68">d</kbd>
			<kbd id="70">f</kbd>
			<kbd id="71">g</kbd>
			<kbd id="72">h</kbd>
			<kbd id="74">j</kbd>
			<kbd id="75">k</kbd>
			<kbd id="76">l</kbd>
			<kbd className="shifter" id="186">;</kbd>
			<kbd className="shifter" id="222">'</kbd>
			<kbd className="long operationKey" id="13">return</kbd>
		</div>
		<div id="fourthrow" className="keyboard-row">
			<kbd className="longer operationKey" id="16">shift</kbd>
			<kbd id="90">z</kbd>
			<kbd id="88">x</kbd>
			<kbd id="67">c</kbd>
			<kbd id="86">v</kbd>
			<kbd id="66">b</kbd>
			<kbd id="78">n</kbd>
			<kbd id="77">m</kbd>
			<kbd className="shifter" id="188">,</kbd>
			<kbd className="shifter" id="190">.</kbd>
			<kbd className="shifter" id="191">/</kbd>
			<kbd className="longer operationKey" id="16">shift</kbd>
		</div>
		<div id="fifthrow" className="keyboard-row">
			<kbd className="operationKey" id="188">fn</kbd>
			<kbd className="operationKey" id="17">ctrl</kbd>
			<kbd className="operationKey" id="18">opt</kbd>
			<kbd className="long operationKey" id="91">⌘</kbd>
			<kbd className="spacebar operationKey" id="32">&nbsp;</kbd>
			<kbd className="long operationKey" id="91">⌘</kbd>
			<kbd className="operationKey" id="18">opt</kbd>
			<kbd className="operationKey" id="17">ctrl</kbd>
			<kbd className="operationKey" id="188">fn</kbd>
		</div>
      </div>
      <br />
    
    </div>
  );
};

export default VirtualKeyboard;
