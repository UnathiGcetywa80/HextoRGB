function convertHexToRGB() {
const hexInput = document.getElementById('hexInput').value.trim();
    const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    const isValidHex = hexRegex.test(hexInput);
    
    if (!isValidHex) {
        console.error('Invalid hex color code');
        return;
    }
    const sanitizedHex = hexInput.replace(/^#/, '');
    const r = parseInt(sanitizedHex.substring(0, 2), 16);
    const g = parseInt(sanitizedHex.substring(2, 4), 16);
    const b = parseInt(sanitizedHex.substring(4, 6), 16);
    document.getElementById('rgbValue').textContent = `(${r}, ${g}, ${b})`;
}
