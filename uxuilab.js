document.addEventListener('DOMContentLoaded', () => {
    console.log("Diagnostic System: Online");

    // --- 1. CORE TAB SYSTEM ---
    const tabs = document.querySelectorAll('.lab-tab');
    const panels = document.querySelectorAll('.lab-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');
            
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) targetPanel.classList.add('active');
        });
    });

    // --- 2. CONTRAST DIAGNOSTIC ENGINE ---
    const bgInput = document.getElementById('bg-color');
    const textInput = document.getElementById('text-color');
    const contrastLog = document.getElementById('contrast-log');
    
    // Preset Data for "A, B, and C" Logic
    const contrastScenarios = {
        "low-mesh": { 
            bg: "#E0E0E0", text: "#A0A0A0", 
            reason: "FAILED because (A) Luminance overlap creates a visual 'mesh', (B) Color-blind barriers, and (C) High-glare invisibility." 
        },
        "high-contrast": { 
            bg: "#111111", text: "#BC5434", 
            reason: "PASSED because (A) High-frequency contrast, (B) Clay-on-Ink cognitive anchor, and (C) WCAG AAA compliance." 
        }
    };

    function getLuminance(hex) {
        const rgb = hex.match(/[A-Za-z0-9]{2}/g).map(v => {
            let val = parseInt(v, 16) / 255;
            return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
    }

    function runContrastDiagnostic(bg, text, presetReason = null) {
        const preview = document.getElementById('preview-window');
        preview.style.backgroundColor = bg;
        document.getElementById('p-head').style.color = text;
        document.getElementById('p-body').style.color = text;

        const L1 = getLuminance(bg);
        const L2 = getLuminance(text);
        const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
        
        const isPass = ratio >= 4.5;
        const color = isPass ? "#4ade80" : "#bc5434";

        // Update HUD
        document.getElementById('live-ratio').innerText = ratio.toFixed(1) + ":1";
        const statusHud = document.getElementById('live-status');
        statusHud.innerText = isPass ? "PASS" : "FAIL";
        statusHud.style.color = color;

        // Update Console
        contrastLog.querySelector('.log-status').innerText = isPass ? "DIAGNOSTIC_PASS" : "DIAGNOSTIC_FAIL";
        contrastLog.querySelector('.log-status').style.color = color;
        contrastLog.querySelector('.log-reason').innerText = presetReason || 
            (isPass ? "MANUAL_PASS: Current mesh provides sufficient separation for AA compliance." 
                    : "MANUAL_FAIL: Insufficient luminance gap. Colors are meshing into a single visual plane.");
    }

    // Contrast Listeners
    if (bgInput) {
        [bgInput, textInput].forEach(el => el.addEventListener('input', () => {
            runContrastDiagnostic(bgInput.value, textInput.value);
            document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
        }));

        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const data = contrastScenarios[btn.dataset.scenario];
                bgInput.value = data.bg;
                textInput.value = data.text;
                document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                runContrastDiagnostic(data.bg, data.text, data.reason);
            });
        });
    }

    // --- 3. LOGIC DIAGNOSTIC ENGINE ---
    const logicData = {
        "trap": {
            status: "LOGIC_CRITICAL",
            reason: "FAILED because (A) Tab-index is misconfigured, (B) User is trapped in a keyboard loop, and (C) Escape routes are unreachable.",
            pass: false
        },
        "ghost": {
            status: "VISUAL_CRITICAL",
            reason: "FAILED because (A) Focus ring is 0px, (B) No 'Active' state in mesh, and (C) User location is unconfirmed.",
            pass: false
        },
        "secure": {
            status: "SYSTEM_SECURE",
            reason: "PASSED because (A) 3px tactile anchor, (B) Logic flow follows hierarchy, and (C) Mouse/Keyboard parity.",
            pass: true
        }
    };

    const logicBtn = document.getElementById('logic-toggle');
    const logicStage = document.getElementById('logic-stage');
    const logicLog = document.getElementById('logic-log');

    function runLogicDiagnostic(typeKey) {
        const data = logicData[typeKey];
        if (!data) return;

        logicStage.classList.toggle('pass', data.pass);
        logicStage.classList.toggle('broken', !data.pass);
        
        logicLog.querySelector('.log-status').innerText = data.status;
        logicLog.querySelector('.log-status').style.color = data.pass ? "#4ade80" : "#bc5434";
        logicLog.querySelector('.log-reason').innerText = data.reason;
        
        logicBtn.innerText = data.pass ? "STATE: ACCESSIBLE" : "STATE: BROKEN";
        logicBtn.classList.toggle('success', data.pass);
        
        const hud = document.getElementById('l-status');
        hud.innerText = data.pass ? "SECURE" : "UNSAFE";
        hud.style.color = data.pass ? "#4ade80" : "#bc5434";
    }

    if (logicBtn) {
        logicBtn.addEventListener('click', () => {
            const isBroken = logicStage.classList.contains('broken');
            runLogicDiagnostic(isBroken ? "secure" : "ghost");
        });

        document.querySelectorAll('.logic-preset-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                runLogicDiagnostic(btn.dataset.type);
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECTORS
    const logicBtn = document.getElementById('logic-toggle');
    const logicStage = document.getElementById('logic-stage');
    const logicLogStatus = document.querySelector('#logic-log .log-status');
    const logicLogReason = document.querySelector('#logic-log .log-reason');
    const lStatusHud = document.getElementById('l-status');

    // 2. DATA OBJECT (A, B, and C Logic)
    const logicScenarios = {
        "trap": {
            status: "LOGIC_CRITICAL",
            reason: "FAILED: (A) Tab-loop detected. (B) User cannot escape current container. (C) Navigation flow is circular.",
            pass: false
        },
        "ghost": {
            status: "VISUAL_CRITICAL",
            reason: "FAILED: (A) Focus ring hidden via CSS. (B) Zero visual feedback on Tab. (C) User is navigating blindly.",
            pass: false
        },
        "secure": {
            status: "SYSTEM_SECURE",
            reason: "PASSED: (A) 3px Clay Ring active. (B) Focus follows hierarchy. (C) Full keyboard agency restored.",
            pass: true
        }
    };

    // 3. THE UPDATE FUNCTION
    function updateLogic(mode) {
        const data = logicScenarios[mode];
        console.log("Updating Logic to:", mode);

        // Update Classes
        if (data.pass) {
            logicStage.classList.remove('broken');
            logicStage.classList.add('pass');
            logicBtn.classList.add('success');
            logicBtn.innerText = "STATE: ACCESSIBLE";
        } else {
            logicStage.classList.remove('pass');
            logicStage.classList.add('broken');
            logicBtn.classList.remove('success');
            logicBtn.innerText = "STATE: BROKEN";
        }

        // Update Console Text
        logicLogStatus.innerText = data.status;
        logicLogStatus.style.color = data.pass ? "#4ade80" : "#bc5434";
        logicLogReason.innerText = data.reason;
        
        // Update HUD
        lStatusHud.innerText = data.pass ? "SECURE" : "UNSAFE";
        lStatusHud.style.color = data.pass ? "#4ade80" : "#bc5434";
    }

    // 4. EVENT LISTENERS
    if (logicBtn) {
        logicBtn.addEventListener('click', () => {
            const isBroken = logicStage.classList.contains('broken');
            updateLogic(isBroken ? "secure" : "ghost");
        });
    }

    document.querySelectorAll('.logic-preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.getAttribute('data-type');
            updateLogic(type);
        });
    });
});
// 1. Define the Instruction Data
const labContext = {
    "contrast": {
        text: "<strong>Contrast Lab:</strong> Contrast ensures text is legible against its background. Adjust the color pickers manually or use Case Studies to see how a weak 'mesh' excludes users with low vision or color blindness. <br><br><em>INSTRUCTIONS: Select a scenario or move the color sliders to analyze the luminance ratio.</em>"
    },
    "logic": {
        text: "<strong>Logic Lab:</strong> Interface logic dictates how a system responds to human intent. Without a visible 'focus ring,' keyboard users are effectively blind. This is a critical ethical failure in design. <br><br><em>INSTRUCTIONS: Use the TAB key to navigate the buttons. Toggle the state or select scenarios to see how the logic breaks.</em>"
    }
};

// 2. Update the Tab Switcher Logic
const tabs = document.querySelectorAll('.lab-tab');
const instructionElement = document.getElementById('lab-instructions');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-target');
        
        // Update the Paragraph Text
        if (labContext[targetId]) {
            instructionElement.innerHTML = labContext[targetId].text;
        }

        // Standard Panel Switching
        tabs.forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.lab-panel').forEach(p => p.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(targetId).classList.add('active');
    });
});
// Check if the URL has a hash (like #logic) on load
if (window.location.hash === "#logic") {
    const logicTab = document.querySelector('[data-target="logic"]');
    if (logicTab) logicTab.click(); // Trigger the click to swap instructions/panels
}



if (window.location.hash === "#logic") {
    const logicTab = document.querySelector('[data-target="logic"]');
    if (logicTab) logicTab.click(); // Trigger the click to swap instructions/panels
}
const darkInteractions = {
    'trickery': {
    render: () => `
        <div class="trap-card">
            <h3>Update Your Profile</h3>
            <p>Stay connected with our global network.</p>
            
            <button class="m-btn primary-trap" onclick="triggerAlert('TRICKERY', 'User clicked the high-contrast bait. The real decline option was hidden via low luminance.')">
                ACCEPT & PROCEED
            </button>
            
            <div class="hidden-whitespace">
                <button class="ghost-btn-hidden" onclick="triggerAlert('BYPASS', 'Diagnostic Pass: You detected the hidden luminance exploit.')">
                    Cancel Subscription
                </button>
            </div>
        </div>`,
    },
    'motel': {
        render: () => `
            <div class="trap-card">
                <h3>Premium Membership</h3>
                <p>Status: <strong>Active (Free Trial)</strong></p>
                <button class="m-btn primary-trap" onclick="triggerAlert('TRAPPED', 'Roach Motel active. Notice there is no Cancel button, only an Upgrade path.')">UPGRADE TO PRO</button>
                <p class="metadata">Contact support via physical mail to discuss status.</p>
            </div>`,
    },
    'misdirection': {
        render: () => `
            <div class="trap-card">
                <div class="fake-close" onclick="triggerAlert('MISDIRECTION', 'The X button was a lie. It was programmed to trigger an Accept command.')">×</div>
                <h3>Cookie Consent</h3>
                <p>We use cookies to track your soul.</p>
                <button class="m-btn" onclick="triggerAlert('SECURE', 'Standard action taken.')">PREFERENCES</button>
            </div>`,
    }
};

function runExploit(type) {
    const sandbox = document.getElementById('dark-sandbox');
    sandbox.innerHTML = darkInteractions[type].render();
    
    // Reset console
    document.getElementById('dark-console').classList.remove('visible');
    document.getElementById('dark-status').innerText = "MONITORING...";
    document.getElementById('dark-status').style.color = "#666";
}

function triggerAlert(status, message) {
    const consoleEl = document.getElementById('dark-console');
    const statusEl = document.getElementById('dark-status');
    const logEl = document.getElementById('dark-log');

    consoleEl.classList.add('visible');
    statusEl.innerText = "EXPLOIT_DETECTED: " + status;
    statusEl.style.color = status === 'SECURE' || status === 'BYPASS' ? '#4ade80' : '#bc5434';
    logEl.innerText = message;

    // Trigger visual shake on the stage for errors
    if (status !== 'SECURE' && status !== 'BYPASS') {
        document.getElementById('dark-stage').classList.add('shake');
        setTimeout(() => document.getElementById('dark-stage').classList.remove('shake'), 500);
    }
}
let componentStack = [];

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function dragEnter(ev) {
    const zone = document.getElementById('drop-zone-stack');
    zone.classList.add('drag-over');
}

function dragLeave(ev) {
    const zone = document.getElementById('drop-zone-stack');
    zone.classList.remove('drag-over');
}

function drop(ev) {
    ev.preventDefault();
    const zone = document.getElementById('drop-zone-stack');
    zone.classList.remove('drag-over');
    
    const id = ev.dataTransfer.getData("text");
    const dragged = document.getElementById(id);
    if (!dragged) return;

    componentStack.push({ type: dragged.dataset.type, spec: dragged.dataset.spec });

    const div = document.createElement('div');
    const isFluid = dragged.dataset.spec === 'fluid' || dragged.dataset.spec === 'standard';
    
    // Style applied based on fluid vs static
    div.style.width = isFluid ? "100%" : "320px";
    div.style.background = isFluid ? "rgba(138, 154, 91, 0.1)" : "#111";
    div.style.borderBottom = isFluid ? "1px solid #8A9A5B" : "1px dashed #333";
    div.style.padding = "15px";
    div.style.textAlign = "center";
    div.style.color = isFluid ? "#8A9A5B" : "#555";
    div.style.margin = isFluid ? "0" : "0 auto";
    
    div.innerText = dragged.innerText;
    zone.appendChild(div);
    
    updateTerminal("Component anchored. Pull frame corner to stress-test scaling.");
}

function resetLab() {
    componentStack = [];
    document.getElementById('drop-zone-stack').innerHTML = '';
    document.getElementById('audit-frame').style.width = '340px';
    updateTerminal("Workbench reset. Awaiting components.");
}

const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        const width = entry.contentRect.width;
        if (width > 350 && componentStack.length > 0) {
            runValidation(width);
        }
    }
});
resizeObserver.observe(document.getElementById('audit-frame'));

function runValidation(width) {
    const term = document.getElementById('terminal-text');
    const hasSmallTarget = componentStack.some(c => c.spec === 'small');
    const hasStatic = componentStack.some(c => c.spec === 'static');
    const hierarchyFail = componentStack.length > 0 && componentStack[0].type !== 'header';

    if (hierarchyFail) {
        term.innerHTML = `<span class="text-clay">[HIERARCHY_FAIL]</span> Header must be root element for professional IA standards.`;
    } else if (hasSmallTarget) {
        term.innerHTML = `<span class="text-clay">[WCAG_FAIL]</span> **Criterion 2.5.5**: 22px targets found. 44px is required for accessibility.`;
    } else if (hasStatic && width > 400) {
        term.innerHTML = `<span class="text-clay">[SCALING_FAIL]</span> Fixed-width logic breaking at ${Math.round(width)}px viewport.`;
    } else {
        term.innerHTML = `<span class="text-sage">[SUCCESS]</span> Layout fluid and compliant at ${Math.round(width)}px.`;
    }
}

function updateTerminal(msg) { document.getElementById('terminal-text').innerText = msg; }