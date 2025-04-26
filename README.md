# console pastable js code
```

(() => {
    //safety - is already happened in this session
    if (sessionStorage.getItem('menuSwapped') === 'true') {
        console.log('Menu items already swapped in this session.');
        return;
    }

    try {
        // getting the parent 
        const parent = document.getElementsByClassName('mx-2.5 gap-1.5 hidden lg:flex')[0];
        if (!parent || !parent.children) {
            console.error('Invalid parent element');
            return;
        }

        // Getting the children as we know the index of reference & community
        const children = parent.children;
        const reference = children[1];
        const community = children[2];

        if (!reference || !community) {
            console.error('Children not found');
            return;
        }

        // Verify if they are the correct items (optional safety check)
        if (reference.textContent.trim() !== 'Reference' || community.textContent.trim() !== 'Community') {
            console.error('Expected Reference and Community items not found at the specified indices.');
            return;
        }

        // Swapin with extra var
        const temp = document.createElement('div');
        parent.replaceChild(temp, reference);
        parent.replaceChild(reference, community);
        parent.replaceChild(community, temp);

        // Marking as swapped in sessionStorage
        sessionStorage.setItem('menuSwapped', 'true');
        console.log('Successfully swapped Reference and Community menu items.');
    } catch (error) {
        console.error('Error during swap operation:', error.message);
    }
})();

```