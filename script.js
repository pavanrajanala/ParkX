const slots = [
  {id:1,status:'Available'},
  {id:2,status:'Available'},
  {id:3,status:'Booked'},
  {id:4,status:'Available'},
  {id:5,status:'Booked'}
];

function renderSlots(){
  const container = document.getElementById('slots');
  container.innerHTML = '';

  slots.forEach(slot=>{
    const div = document.createElement('div');

    div.classList.add('slot');

    if(slot.status === 'Available'){
      div.classList.add('available');
    }else{
      div.classList.add('booked');
    }

    div.innerHTML = `
      <h3>Slot ${slot.id}</h3>
      <p>${slot.status}</p>
    `;

    container.appendChild(div);
  });
}

function bookSlot(){
  const availableSlots = slots.filter(s=>s.status==='Available');

  if(availableSlots.length === 0){
    document.getElementById('message').innerText = 'No slots available';
    return;
  }

  const randomSlot = availableSlots[Math.floor(Math.random()*availableSlots.length)];

  randomSlot.status = 'Booked';

  document.getElementById('message').innerText =
    `Slot ${randomSlot.id} booked successfully!`;

  renderSlots();
}

renderSlots();
