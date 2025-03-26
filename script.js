document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById("name").value;
    const attending = document.getElementById("attending").value;

    if (name && attending) {
        alert(`${name}, your RSVP has been recorded. We'll see you at the wedding!`);
        document.getElementById("rsvp-form").reset(); // Clear form after submission
    } else {
        alert("Please fill in all fields.");
    }
});
