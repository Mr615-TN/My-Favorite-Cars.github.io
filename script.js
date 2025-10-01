document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('.tabs');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const contentBoxes = document.querySelectorAll('.content-box');

    tabs.addEventListener('click', (e) => {
        const clickedButton = e.target;
        
        // Only proceed if a tab button was clicked
        if (clickedButton.classList.contains('tab-btn')) {
            // Remove 'active' class from all buttons and content boxes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            contentBoxes.forEach(box => box.classList.remove('active'));

            // Add 'active' class to the clicked button
            clickedButton.classList.add('active');

            // Get the data-tab attribute to identify the corresponding content
            const tabId = clickedButton.dataset.tab;
            
            // Find and show the correct content box
            const activeContent = document.getElementById(tabId);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        }
    });
});
