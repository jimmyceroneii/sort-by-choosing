import React, { useState, useCallback } from 'react';
import { parseInputList, generateRandomPairs } from '../utils/pairGenerator';
import { styles } from './styles';

type ListInputProps = {
  onSubmit: (pairs: Array<[string, string]>) => void;
};

export const ListInput: React.FC<ListInputProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);

  const handleSubmit = useCallback(() => {
    const items = parseInputList(input);

    if (items.length < 2) {
      setError('Please enter at least 2 items separated by commas');
      return;
    }

    const pairs = generateRandomPairs(input);
    onSubmit(pairs);
  }, [input, onSubmit]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.metaKey) {
      handleSubmit();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputSection} className="fade-in-up">
        <h1 style={styles.title}>Rank What Matters</h1>
        <p style={styles.subtitle}>
          Enter your items below, then compare pairs to discover your true ranking
        </p>

        <div style={styles.textareaWrapper}>
          <textarea
            style={{
              ...styles.textarea,
              ...(isFocused ? styles.textareaFocus : {}),
            }}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError('');
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            placeholder="Enter items separated by commas&#10;e.g., Coffee, Tea, Juice, Water, Soda"
          />
        </div>

        {error && (
          <p style={styles.error} className="fade-in">
            {error}
          </p>
        )}

        <button
          style={{
            ...styles.submitButton,
            ...(isHoveringButton ? styles.submitButtonHover : {}),
          }}
          onClick={handleSubmit}
          onMouseEnter={() => setIsHoveringButton(true)}
          onMouseLeave={() => setIsHoveringButton(false)}
        >
          Begin Comparing
        </button>
      </div>
    </div>
  );
};
