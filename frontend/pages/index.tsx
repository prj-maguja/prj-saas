import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/hello`)
      .then(res => res.text())
      .then(setMessage)
      .catch(() => setMessage('Error connecting to backend'));
  }, []);

  return (
    <div>
      <h1>SaaS Frontend</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}