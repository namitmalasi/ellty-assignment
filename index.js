 // Get all elements
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const allPages = document.getElementById('all-pages');
        const button = document.getElementById('done-btn');

        // Add click event to all checkboxes
        checkboxes.forEach(checkbox => {
            checkbox.onclick = () => {
                // If "All pages" is clicked
                if(checkbox.id === 'all-pages') {
                    checkboxes.forEach(box => box.checked = checkbox.checked);
                }
                
                // Enable/disable button
                button.disabled = !document.querySelector('input[type="checkbox"]:checked');
            }
        });

        // Add click event to button
        button.onclick = () => {
            let selected = [];
            checkboxes.forEach(box => {
                if(box.checked) selected.push(box.dataset.page);
            });
            alert('Selected: ' + selected.join(', '));
        }