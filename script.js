(() => {
    // Check if swap has already happened in this session
    if (sessionStorage.getItem('menuSwapped') === 'true') {
        console.log('Menu items already swapped in this session.');
        return;
    }

    try {
        // Find the parent element
        const parent = document.getElementsByClassName('mx-2.5 gap-1.5 hidden lg:flex')[0];
        if (!parent || !parent.children) {
            console.error('Invalid parent element');
            return;
        }

        // Get the children
        const children = parent.children;
        const reference = children[1]; // "Reference" at index 1
        const community = children[2]; // "Community" at index 2

        // Validate children
        if (!reference || !community) {
            console.error('Children not found');
            return;
        }

        // Verify if they are the correct items (optional safety check)
        if (reference.textContent.trim() !== 'Reference' || community.textContent.trim() !== 'Community') {
            console.error('Expected Reference and Community items not found at the specified indices.');
            return;
        }

        // Swap the elements using a temporary placeholder
        const temp = document.createElement('div');
        parent.replaceChild(temp, reference);
        parent.replaceChild(reference, community);
        parent.replaceChild(community, temp);

        // Mark as swapped in sessionStorage
        sessionStorage.setItem('menuSwapped', 'true');
        console.log('Successfully swapped Reference and Community menu items.');
    } catch (error) {
        console.error('Error during swap operation:', error.message);
    }
})();