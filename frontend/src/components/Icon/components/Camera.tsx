import { FC } from 'react';

export const Camera: FC = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M8.5 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4.5l-1.5-2h-4L8.5 4Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="6" cy="8" r="1" fill="null" />
    <line
      x1="18.5"
      y1="8"
      x2="20.5"
      y2="8"
      stroke="fill"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default Camera;
