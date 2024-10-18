function adjustWidth(selectElement) {
    // Create a temporary element to measure the text width
    var tempDiv = document.createElement("div");
    tempDiv.style.position = "absolute";
    tempDiv.style.visibility = "hidden";
    tempDiv.style.whiteSpace = "nowrap";
    tempDiv.style.fontSize = getComputedStyle(selectElement).fontSize;
    tempDiv.innerText = selectElement.options[selectElement.selectedIndex].text;

    document.body.appendChild(tempDiv);
    // Get the width of the selected option text
    var newWidth = tempDiv.offsetWidth + 28; // Adding some padding
    document.body.removeChild(tempDiv);

    // Set the new width to the select box
    selectElement.style.width = newWidth + "px";
}

// Initial adjustment when the page loads
window.onload = function() {
    const selectElement = document.getElementById('dynamic-select');
    adjustWidth(selectElement);
};
