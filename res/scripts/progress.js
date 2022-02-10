progress_field = document.getElementById("progress-field");
rep_input = document.getElementById("rep-input");


rep_input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) setDone();
});

function setDone() {
    var reps = rep_input.value;
    var total_reps = progress_field.innerHTML;
    rep_input.value = null;
    console.log(total_reps);
    console.log(reps);
    //verify input is number
    if (isNaN(reps) || reps == '') {
        alert("Not a Nummber")
        return false
    }
    if (isNaN(total_reps)) {
        console.log("something wrong")
        return false
    }
    reps = parseInt(reps);
    total_reps = parseInt(total_reps);
    //verify input is reasonable - skipping

    //add to total sets
    total_reps += reps;
    progress_field.innerHTML = total_reps
}
