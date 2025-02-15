// Handle Video Upload
document.getElementById('upload-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Video subido exitosamente.');
  });
  
  // Handle Payment Form
  const paymentMethod = document.getElementById('payment-method');
  const voucherUpload = document.getElementById('voucher-upload');
  
  paymentMethod.addEventListener('change', (e) => {
    voucherUpload.style.display = e.target.value !== 'card' ? 'block' : 'none';
  });
  
  document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Pago confirmado.');
  });
  
  // Handle Scheduling
  document.getElementById('schedule-button').addEventListener('click', () => {
    const scheduleTime = document.getElementById('schedule-time').value;
    if (scheduleTime) {
      alert(`Video programado para el ${new Date(scheduleTime).toLocaleString()}.`);
    } else {
      alert('Selecciona un horario.');
    }
  });
  