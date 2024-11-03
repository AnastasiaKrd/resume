const copyIcon = document.querySelector('#copyIcon');
console.log(copyIcon)
copyIcon.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('anaskyriakidou@gmail.com');
      alert('Coppied to clipboard!');
    } catch (err) {
      console.error(err.name, err.message);
      alert('Copy failed');
    }
  });