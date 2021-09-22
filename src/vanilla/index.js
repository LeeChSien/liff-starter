import './index.css';
import liff from '@line/liff'

document.addEventListener("DOMContentLoaded", function() {
  const panel = document.getElementById('panel');
  
  // Launch the panel
  setTimeout(() => {
    panel.classList.add('active');
  }, 500);

  liff
    .init({ liffId: process.env.LIFF_ID || '' })
    .then(() => {
        console.log("Success! you can do something with LIFF API here.")
    })
    .catch((error) => {
        console.log(error)
    })
});
