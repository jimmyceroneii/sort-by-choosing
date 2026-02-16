import React, { useState } from 'react';
import { parseInputList, generateRandomPairs } from '../utils/pairGenerator';
import { styles } from './styles';

type ListInputProps = {
  onSubmit: (pairs: Array<[string, string]>) => void;
};

type Pair = [string, string];

export const ListInput: React.FC<ListInputProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const items = parseInputList(input);

    if (items.length < 2) {
      setError('Please enter at least 2 items separated by commas');
      return;
    }

    const pairs = generateRandomPairs(input);
    onSubmit(pairs);
  };

  return (
    <div style={styles.inputContainer}>
      <h2>Enter items to compare</h2>
      <p>Separate items with commas</p>
      <textarea
        style={styles.textarea}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setError('');
        }}
        placeholder="Item A, Item B, Item C"
      />
      {error && <p style={styles.error}>{error}</p>}
      <button style={styles.submitButton} onClick={handleSubmit}>
        Start Comparing
      </button>
    </div>
  );
};
