import { FC } from 'react';

export const TrendingDown: FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="red"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    {/* Trending line going down */}
    <path d="M3 7l4 4l4 -3l4 5l4 3" />
    {/* Arrow head bottom right */}
    <path d="M14 17h5v-5" />
  </svg>
);

export default TrendingDown;
