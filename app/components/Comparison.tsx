import { cloneDeep } from 'lodash';
import React, { useState } from 'react';
import { formattedList } from '../pages/api/problems';
import { Card } from './Card';
import { styles } from './styles';

type Score = Record<string, number>;

const updateScore = ({
  scores,
  index,
  currentEntry,
}: {
  scores: Score;
  index: number;
  currentEntry: number;
}): Score => {
  const clonedScores = cloneDeep(scores);

  if (formattedList[currentEntry][index] in scores) {
    clonedScores[formattedList[currentEntry][index]] += 1;
  } else {
    clonedScores[formattedList[currentEntry][index]] = 1;
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

export const Comparison: React.FC = () => {
  const [scores, setScores] = useState<Score>({});
  const [currentEntry, setCurrentEntry] = useState(0);

  const updateComparison = ({
    index,
    scores,
  }: {
    index: number;
    scores: Score;
  }) => {
    // update the "score"
    setScores(updateScore({ scores, index, currentEntry }));

    // update current entry
    setCurrentEntry(currentEntry + 1);
  };

  return currentEntry < formattedList.length ? (
    <div style={styles.cardContainer}>
      <Card
        onClick={() => {
          updateComparison({ index: 0, scores });
        }}
        item={formattedList[currentEntry][0]}
      />
      <Card
        onClick={() => {
          // update the "score"
          setScores(updateScore({ scores, index: 1, currentEntry }));

          // update current entry
          setCurrentEntry(currentEntry + 1);
        }}
        item={formattedList[currentEntry][1]}
      />
    </div>
  ) : (
    <div>
      <h1>Top & Bottom Score:</h1>
      {[
        sortScores({ scores })[0],
        sortScores({ scores })[sortScores({ scores }).length - 1],
      ].map((score, i) => {
        return (
          <div key={i}>
            <p>{JSON.stringify(score)}</p>
          </div>
        );
      })}
      <h2>All Scores</h2>
      {sortScores({ scores }).map((score, i) => {
        return (
          <div key={i}>
            <p>{JSON.stringify(score)}</p>
          </div>
        );
      })}
    </div>
  );
};
