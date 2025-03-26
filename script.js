// Basic RSVP form submission handling
const rsvpForm = document.getElementById("rsvp-form");
if (rsvpForm) {
  rsvpForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const attendance = document.getElementById("attendance").value;
    if (name && attendance) {
      alert(`${name}, thank you for your RSVP!`);
      rsvpForm.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
}
