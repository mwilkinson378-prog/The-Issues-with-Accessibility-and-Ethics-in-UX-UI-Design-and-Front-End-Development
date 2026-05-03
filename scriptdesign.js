function setSimpleView(mode) {
    const text = document.getElementById('ui-text');
    const label = document.getElementById('verdict-label');
    const desc = document.getElementById('audit-desc');
    
   
    document.getElementById('btn-bad').classList.toggle('active', mode === 'bad');
    document.getElementById('btn-good').classList.toggle('active', mode === 'good');

    if (mode === 'bad') {
        label.innerText = "DECEPTIVE";
        label.style.color = "var(--clay)";
        text.className = "contrast-fail";
        desc.innerHTML = "<strong>Audit Note:</strong> The price is hidden using low-contrast text. This fails ADA standards and tricks the user.";
    } else {
        label.innerText = "INCLUSIVE";
        label.style.color = "#2d5a27";
        text.className = "contrast-pass";
        desc.innerHTML = "<strong>Audit Note:</strong> High contrast (4.5:1 ratio) and bold text ensure the financial cost is clear to all users.";
    }
}