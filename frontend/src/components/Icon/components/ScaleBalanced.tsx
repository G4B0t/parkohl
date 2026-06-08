import { FC } from 'react';

export const ScaleBalanced: FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 3v18" />
    <path d="M8 21h8" />
    <path d="M5 8l-2 5h4l-2 -5" />
    <path d="M19 8l-2 5h4l-2 -5" />
    <path d="M3 8h18" />
  </svg>
);

export default ScaleBalanced;