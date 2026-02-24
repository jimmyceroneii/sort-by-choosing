import { cloneDeep } from 'lodash';
import React, { useState } from 'react';
import { Card } from './Card';
import { styles } from './styles';

type Score = Record<string, number>;
type Pair = [string, string];

type ComparisonProps = {
  pairs: Pair[];
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

  if (currentPair[index] in scores) {
    clonedScores[currentPair[index]] += 1;
  } else {
    clonedScores[currentPair[index]] = 1;
  }

  return clonedScores;
};

const sortScores = ({
  scores,
}: {
  scores: Score;
}): Array<{ name: string; score: number }> => {
  const unsortedScores = [];

  const ideas = Object.keys(scores);

  for (const idea of ideas) {
    unsortedScores.push({ name: idea, score: scores[idea] });
  }

  const sortedScores = unsortedScores.sort((a, b) => a.score - b.score);

  return sortedScores;
};

export const Comparison: React.FC<ComparisonProps> = ({ pairs }) => {
  const [scores, setScores] = useState<Score>({});
  const [currentEntry, setCurrentEntry] = useState(0);

  const updateComparison = ({
    index,
    scores,
  }: {
    index: number;
    scores: Score;
  }) => {
    setScores(updateScore({ scores, index, currentPair: pairs[currentEntry] }));
    setCurrentEntry(currentEntry + 1);
  };

  return currentEntry < pairs.length ? (
    <div style={styles.cardContainer}>
      <Card
        onClick={() => {
          updateComparison({ index: 0, scores });
        }}
        item={pairs[currentEntry][0]}
      />
      <Card
        onClick={() => {
          setScores(updateScore({ scores, index: 1, currentPair: pairs[currentEntry] }));
          setCurrentEntry(currentEntry + 1);
        }}
        item={pairs[currentEntry][1]}
      />
    </div>
  ) : (
    <div style={styles.inputContainer}>
      <h2>Top & Bottom Score:</h2>
      {[
        sortScores({ scores })[0],
        sortScores({ scores })[sortScores({ scores }).length - 1],
      ].map((score, i) => {
        return (
          <div key={i}>
            <p style={styles.choiceText}>{score.name}: {score.score}</p>
          </div>
        );
      })}
      <h2>All Scores</h2>
      {sortScores({ scores }).map((score, i) => {
        return (
          <div key={i}>
            <p style={styles.choiceText}>{score.name}: {score.score}</p>
          </div>
        );
      })}
    </div>
  );
};
