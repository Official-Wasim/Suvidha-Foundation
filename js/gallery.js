document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('#gallery-filters li');
    const items = document.querySelectorAll('.gallery-item');

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Remove active class from all filter buttons
            filters.forEach(filter => filter.classList.remove('active'));
            // Add active class to the clicked filter button
            filter.classList.add('active');

            // Get the filter category
            const filterValue = filter.getAttribute('data-filter');

            // Show/Hide items based on the filter
            items.forEach(item => {
                if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
