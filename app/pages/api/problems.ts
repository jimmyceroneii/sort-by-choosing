// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' });
}

export const formattedList = [
  [
    'Problem: Fantasy football is not fractionalized',
    'Problem: Dog poop at night is hard to see (leash light)'
  ],
  [
    'Problem: Websites are analogous to physical locations yet lack context switches to give us cues',
    'Problem: Robot weapons are probably bad for humanity'
  ],
  [
    'Problem: Customer support is asynchronous',
    'Problem: Websites are analogous to physical locations yet lack context switches to give us cues'
  ],
  [
    'Problem: Retirement is a far off risk(In Obsidian)',
    'Problem: Robot weapons are probably bad for humanity'
  ],
  [
    'Problem: Retirement is a far off risk(In Obsidian)',
    'Problem: Friend groups are insular and make it hard to make friends in a new place'
  ],
  [
    'Problem: There are tiered monetary rewards via government payouts',
    'Problem: Websites are analogous to physical locations yet lack context switches to give us cues'
  ],
  [
    'Problem: There are tiered monetary rewards via government payouts',
    'Problem: Retirement is a far off risk(In Obsidian)'
  ],
  [
    'Problem: Customer support is asynchronous',
    'Problem: Friend groups are insular and make it hard to make friends in a new place'
  ],
  [
    'Problem: Dog poop at night is hard to see (leash light)',
    'Problem: Friend groups are insular and make it hard to make friends in a new place'
  ],
  [
    'Problem: There are tiered monetary rewards via government payouts',
    'Problem: Robot weapons are probably bad for humanity'
  ],
  [
    'Problem: Fitted sheets are hard to put in',
    'Problem: Fantasy football is not fractionalized'
  ],
  [
    'Problem: cloud services promote the false idea you don’t need backups',
    'Problem: Friend groups are insular and make it hard to make friends in a new place'
  ],
  [
    'Problem: Fitted sheets are hard to put in',
    'Problem: Retirement is a far off risk(In Obsidian)'
  ],
  [
    'Problem: cloud services promote the false idea you don’t need backups',
    'Problem: Robot weapons are probably bad for humanity'
  ],
  [
    'Problem: There are tiered monetary rewards via government payouts',
    'Problem: Fantasy football is not fractionalized'
  ],
  [
    'Problem: Customer support is asynchronous',
    'Problem: Fitted sheets are hard to put in'
  ],
  [
    'Problem: cloud services promote the false idea you don’t need backups',
    'Problem: Websites are analogous to physical locations yet lack context switches to give us cues'
  ],
  [
    'Problem: Fantasy football is not fractionalized',
    'Problem: Websites are analogous to physical locations yet lack context switches to give us cues'
  ],
  [
    'Problem: Websites are analogous to physical locations yet lack context switches to give us cues',
    'Problem: Dog poop at night is hard to see (leash light)'
  ],
  [
    'Problem: Customer support is asynchronous',
    'Problem: Fantasy football is not fractionalized'
  ],
  [
    'Problem: Friend groups are insular and make it hard to make friends in a new place',
    'Problem: Robot weapons are probably bad for humanity'
  ],
  [
    'Problem: Customer support is asynchronous',
    'Problem: Dog poop at night is hard to see (leash light)'
  ],
  [
    'Problem: Websites are analogous to physical locations yet lack context switches to give us cues',
    'Problem: Retirement is a far off risk(In Obsidian)'
  ],
  [
    'Problem: Websites are analogous to physical locations yet lack context switches to give us cues',
    'Problem: Friend groups are insular and make it hard to make friends in a new place'
  ],
  [
    'Problem: Fitted sheets are hard to put in',
    'Problem: Friend groups are insular and make it hard to make friends in a new place'
  ],
  [
    'Problem: There are tiered monetary rewards via government payouts',
    'Problem: Fitted sheets are hard to put in'
  ],
  [
    'Problem: cloud services promote the false idea you don’t need backups',
    'Problem: Retirement is a far off risk(In Obsidian)'
  ],
  [
    'Problem: Customer support is asynchronous',
    'Problem: cloud services promote the false idea you don’t need backups'
  ],
  [
    'Problem: Dog poop at night is hard to see (leash light)',
    'Problem: Robot weapons are probably bad for humanity'
  ],
  [
    'Problem: Fantasy football is not fractionalized',
    'Problem: Retirement is a far off risk(In Obsidian)'
  ],
  [
    'Problem: Fitted sheets are hard to put in',
    'Problem: Robot weapons are probably bad for humanity'
  ],
  [
    'Problem: There are tiered monetary rewards via government payouts',
    'Problem: Friend groups are insular and make it hard to make friends in a new place'
  ],
  [
    'Problem: Dog poop at night is hard to see (leash light)',
    'Problem: Retirement is a far off risk(In Obsidian)'
  ],
  [
    'Problem: cloud services promote the false idea you don’t need backups',
    'Problem: Dog poop at night is hard to see (leash light)'
  ],
  [
    'Problem: Fitted sheets are hard to put in',
    'Problem: Websites are analogous to physical locations yet lack context switches to give us cues'
  ],
  [
    'Problem: There are tiered monetary rewards via government payouts',
    'Problem: cloud services promote the false idea you don’t need backups'
  ],
  [
    'Problem: Fitted sheets are hard to put in',
    'Problem: cloud services promote the false idea you don’t need backups'
  ],
  [
    'Problem: Customer support is asynchronous',
    'Problem: Robot weapons are probably bad for humanity'
  ],
  [
    'Problem: Customer support is asynchronous',
    'Problem: Retirement is a far off risk(In Obsidian)'
  ],
  [
    'Problem: Fantasy football is not fractionalized',
    'Problem: Friend groups are insular and make it hard to make friends in a new place'
  ],
  [
    'Problem: Fantasy football is not fractionalized',
    'Problem: cloud services promote the false idea you don’t need backups'
  ],
  [
    'Problem: Fantasy football is not fractionalized',
    'Problem: Robot weapons are probably bad for humanity'
  ],
  [
    'Problem: There are tiered monetary rewards via government payouts',
    'Problem: Dog poop at night is hard to see (leash light)'
  ],
  [
    'Problem: Fitted sheets are hard to put in',
    'Problem: Dog poop at night is hard to see (leash light)'
  ],
  [
    'Problem: Customer support is asynchronous',
    'Problem: There are tiered monetary rewards via government payouts'
  ]
]