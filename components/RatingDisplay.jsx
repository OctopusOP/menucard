// components/RatingDisplay.jsx
export default function RatingDisplay({ rating = 0, size = 5 }) {
  // rating: number between 0 and 5 (can be fractional)
  const stars = Array.from({ length: size }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-1" aria-label={`Rating ${rating} out of ${size}`}>
      {stars.map((s) => {
        const fill = Math.max(0, Math.min(1, rating - (s - 1))); // between 0 and 1
        return (
          <svg
            key={s}
            viewBox="0 0 24 24"
            className="w-5 h-5"
            aria-hidden
          >
            <defs>
              <linearGradient id={`g-${s}`}>
                <stop offset={`${fill * 100}%`} stopColor="currentColor" />
                <stop offset={`${fill * 100}%`} stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#g-${s})`}
              stroke="currentColor"
              strokeWidth="0.5"
              d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.789 1.402 8.173L12 18.896l-7.336 3.876 1.402-8.173L.132 9.21l8.2-1.192z"
            />
          </svg>
        );
      })}
      <span className="text-sm text-gray-600 ml-2">{rating.toFixed(1)}</span>
    </div>
  );
}
