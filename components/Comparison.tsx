import { cloneDeep } from 'lodash';
import React, { useState, useMemo } from 'react';
import { Card } from './Card';
import { styles } from './styles';

type Score = Record<string, number>;
type Pair = [string, string];

type ComparisonProps = {
  pairs: Pair[];
  onRestart?: () => void;
};

type RankedItem = {
  name: string;
  score: number;
};

const updateScore = ({
  scores,
  index,
  currentPair,
}: {
  scores: Score;
  index: number;
  currentPair: Pair;
}): Score => {
  const clonedScores = cloneDeep(scores);
  const selectedItem = currentPair[index];

  if (selectedItem in clonedScores) {
    clonedScores[selectedItem] += 1;
  } else {
    clonedScores[selectedItem] = 1;
  }

  return clonedScores;
};

const sortScores = ({ scores }: { scores: Score }): RankedItem[] => {
  const unsortedScores: RankedItem[] = Object.entries(scores).map(
    ([name, score]) => ({ name, score })
  );

  return unsortedScores.sort((a, b) => b.score - a.score);
};

export const Comparison: React.FC<ComparisonProps> = ({ pairs, onRestart }) => {
  const [scores, setScores] = useState<Score>({});
  const [currentEntry, setCurrentEntry] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const updateComparison = ({ index }: { index: number }) => {
    setScores(updateScore({ scores, index, currentPair: pairs[currentEntry] }));
    
    if (currentEntry + 1 >= pairs.length) {
      setIsComplete(true);
    } else {
      setCurrentEntry(currentEntry + 1);
    }
  };

  const progress = useMemo(() => {
    return ((currentEntry) / pairs.length) * 100;
  }, [currentEntry, pairs.length]);

  const rankedResults = useMemo(() => {
    return sortScores({ scores });
  }, [scores]);

  const maxScore = useMemo(() => {
    return Math.max(...rankedResults.map((r) => r.score), 1);
  }, [rankedResults]);

  if (isComplete) {
    return (
      <div style={styles.comparisonContainer}>
        <div style={styles.resultsContainer} className="fade-in-up">
          <div style={styles.resultsHeader}>
            <h2 style={styles.resultsTitle}>Your Ranking</h2>
            <p style={styles.resultsSubtitle}>
              {rankedResults.length} items sorted
            </p>
          </div>

          <ul style={styles.rankList}>
            {rankedResults.map((item, index) => (
              <li
                key={item.name}
                style={{
                  ...styles.rankItem,
                  animationDelay: `${index * 0.08}s`,
                }}
                className="fade-in-up"
              >
                <span
                  style={{
                    ...styles.rankNumber,
                    backgroundColor: index === 0 ? 'var(--color-accent)' : 'var(--color-bg)',
                    color: index === 0 ? 'white' : 'var(--color-text)',
                  }}
                >
                  {index + 1}
                </span>
                <span style={styles.rankName}>
                  {item.name}
                  <span style={styles.rankVotes}>({item.score} votes)</span>
                </span>
                <div
                  style={{
                    ...styles.rankBar,
                    width: `${(item.score / maxScore) * 100}px`,
                  }}
                />
              </li>
            ))}
          </ul>

          {onRestart && (
            <button
              style={styles.restartButton}
              onClick={onRestart}
              className="fade-in"
            >
              Start Over
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={styles.comparisonContainer}>
      <div style={styles.progressWrapper} className="fade-in">
        <p style={styles.progressLabel}>
          {currentEntry + 1} of {pairs.length}
        </p>
        <div style={styles.progressBar}>
          <div
            style={{
              ...styles.progressFill,
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      <div style={styles.cardsContainer}>
        <div style={{ position: 'relative' }}>
          <Card
            onClick={() => updateComparison({ index: 0 })}
            item={pairs[currentEntry][0]}
            rotation={-2}
          />
        </div>

        <div style={styles.vsBadge}>vs</div>

        <div style={{ position: 'relative' }}>
          <Card
            onClick={() => updateComparison({ index: 1 })}
            item={pairs[currentEntry][1]}
            rotation={2}
          />
        </div>
      </div>
    </div>
  );
};
