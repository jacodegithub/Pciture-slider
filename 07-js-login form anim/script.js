const labels = document.querySelectorAll('.form-control label')

/** when adding style suing js always provide units to it
 * use template quotes ``
 */
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay: ${idx * 30}ms">${letter}</span>`) 
        .join(''); // join('') with empty string is to make returning array to string
})