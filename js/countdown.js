(function(){
  // 21/08/2026 às 12:30 (hora local de quem visita)
  const target = new Date('2026-08-21T12:30:00');

  const daysEl    = document.getElementById('days');
  const hoursEl   = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  const pad = n => String(n).padStart(2,'0');

  function update(){
    const now = new Date();
    const diff = target - now;

    if (diff <= 0){
      daysEl.textContent = hoursEl.textContent = minutesEl.textContent = secondsEl.textContent = '00';
      document.querySelector('.subtitle').textContent = 'Chegou o grande dia! 💕';
      clearInterval(timer);
      return;
    }

    const s  = Math.floor(diff/1000);
    const d  = Math.floor(s/86400);
    const h  = Math.floor((s%86400)/3600);
    const m  = Math.floor((s%3600)/60);
    const ss = s%60;

    daysEl.textContent    = d;
    hoursEl.textContent   = pad(h);
    minutesEl.textContent = pad(m);
    secondsEl.textContent = pad(ss);
  }

  update();
  const timer = setInterval(update, 1000);
})();
