import React, { useState } from 'react';
import { styles } from './styles';

type CardProps = {
  onClick: () => void;
  item: string;
  rotation?: number;
};

export const Card: React.FC<CardProps> = ({ onClick, item, rotation = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={styles.cardWrapper} className="scale-in">
      <div
        style={{
          ...styles.card,
          ...(isHovered ? styles.cardHover : {}),
          transform: isHovered 
            ? `translateY(-8px) rotate(${rotation}deg)` 
            : `rotate(${rotation}deg)`,
        }}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p style={styles.cardText}>{item}</p>
        <span style={{
          ...styles.cardHint,
          opacity: isHovered ? 1 : 0,
        }}>
          Click to choose
        </span>
      </div>
    </div>
  );
};
