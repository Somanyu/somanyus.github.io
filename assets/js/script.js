/*
*----------------------------------------
* Animation on Scroll for WORK section
*----------------------------------------
*/

const square = document.querySelector('.intro');
square.classList.remove('swing-in-top-bck');

// Create the observer
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible    
        if (entry.isIntersecting) {
            // Add the animation class  
            square.classList.add('swing-in-top-bck');
            return; // If we added the class exit the function
        }

        // Remove the class after animation
        square.classList.remove('swing-in-top-bck');
    });
});

// Tell the observer which elements to track
observer.observe(document.querySelector('.myworkclass'));


/*
*---------------------------------------
* Animation on Scroll for project work
*---------------------------------------
*/
const project = document.querySelector('.myproject');
project.classList.remove('fade-in-project');

// Create the observer
const observer1 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible    
        if (entry.isIntersecting) {
            // Add the animation class  
            project.classList.add('fade-in-project');
            return; // If we added the class exit the function
        }

        // Remove the class after animation
        project.classList.remove('fade-in-project');
    });
});

// Tell the observer which elements to track
observer1.observe(document.querySelector('.myworkclass'));
