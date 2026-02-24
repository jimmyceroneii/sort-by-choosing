import type { NextPage } from 'next';
import { useState } from 'react';
import { Comparison } from '../components/Comparison';
import { ListInput } from '../components/ListInput';

type Pair = [string, string];

const Home: NextPage = () => {
  const [pairs, setPairs] = useState<Pair[] | null>(null);

  if (!pairs) {
    return <ListInput onSubmit={setPairs} />;
  }

  return <Comparison pairs={pairs} />;
};

export default Home;
