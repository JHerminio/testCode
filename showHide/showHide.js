document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".rank-math-question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      // Hide all answers before showing the current one
      questions.forEach((q) => {
        if (q !== this) {
          q.classList.remove("active"); // Remove active class from other questions
          const answer = q.nextElementSibling;
          answer.style.maxHeight = 0; // Collapse the answer
          answer.style.opacity = 0; // Fade out
          answer.style.display = "none"; // Ensure it is not visible
        }
      });

      // Toggle the clicked answer
      this.classList.toggle("active");
      const answer = this.nextElementSibling;

      if (this.classList.contains("active")) {
        answer.style.display = "block";
        answer.style.maxHeight = answer.scrollHeight + "px"; // Set max-height to the full height
        answer.style.opacity = 1; // Fade in
      } else {
        answer.style.maxHeight = 0; // Collapse the answer
        answer.style.opacity = 0; // Fade out
        setTimeout(() => {
          answer.style.display = "none"; // Ensure it is not visible after animation
        }, 500); // Matches the duration of the transition
      }
    });
  });
});


//<-- hide the currently open answer when a new question is clicked -->
// document.addEventListener("DOMContentLoaded", function () {
//   const questions = document.querySelectorAll(".rank-math-question");

//   questions.forEach((question) => {
//     question.addEventListener("click", function () {
//       // Hide all answers before showing the current one
//       questions.forEach((q) => {
//         if (q !== this) {
//           q.classList.remove("active"); // Remove active class from other questions
//           q.nextElementSibling.style.display = "none"; // Hide other answers
//         }
//       });

//       // Toggle the clicked answer
//       this.classList.toggle("active");
//       const answer = this.nextElementSibling;
//       if (answer.style.display === "block") {
//         answer.style.display = "none";
//       } else {
//         answer.style.display = "block";
//       }
//     });
//   });
// });
