function toggleAudit(id) {
    const container = document.getElementById(id);
    const sandbox = container.querySelector('.audit-sandbox');
    const telemetry = container.querySelector('.telemetry');
    const button = container.querySelector('.toggle-audit-btn');

    if (sandbox.classList.contains('failed')) {
        // Switch to Passed State
        sandbox.classList.remove('failed');
        sandbox.classList.add('passed');
        button.innerText = "Revert to Forensic Failure";
        
      
        if (id === 'audit-1') {
            telemetry.innerText = "CONTRAST_RATIO: 7.1:1 [PASS]";
        } else {
            telemetry.innerText = "PATTERN: NEUTRAL_CHOICE [PASS]";
        }
    } else {
        // Revert to Failed State
        sandbox.classList.remove('passed');
        sandbox.classList.add('failed');
        button.innerText = "Execute Human Override";
        
        if (id === 'audit-1') {
            telemetry.innerText = "CONTRAST_RATIO: 1.2:1 [FAIL]";
        } else {
            telemetry.innerText = "PATTERN: DECEPTIVE_CHOICE [FAIL]";
        }
    }
}