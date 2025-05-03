import { useEffect, useState } from "react";

export function CountdownTimer() {
  const weddingDate = new Date("2026-02-15T15:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date();
    const diff = weddingDate.getTime() - now.getTime();

    const total = Math.max(diff, 0);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / (1000 * 60)) % 60);

    return { days, hours, minutes };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 60000); // atualiza a cada minuto

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mb-4">
      <h2 className="text-xl font-semibold">Faltam:</h2>
      <p className="text-3xl font-bold">
        {timeLeft.days} dias, {timeLeft.hours} horas, {timeLeft.minutes} minutos
      </p>
    </div>
  );
}
