"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h1>terjadi kesalahan</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>coba lagi</button>
    </div>
  );
}
