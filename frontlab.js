const snippets = [
    "function initEthicalAudit() {",
    "  const integrity = checkParity();",
    "  if (integrity === 'VALID') {",
    "    renderAccessibleUI();",
    "    console.log('System: Parity confirmed.');",
    "  }",
    "}",
    "// Monitoring WCAG 2.5.5 targets...",
    "window.addEventListener('resize', () => {",
    "  updateFluidLogic(window.innerWidth);",
    "});",
    "class EthicalUI extends HTMLElement {",
    "  constructor() { super(); }",
    "}",
    "const theme = { accent: '#bc5434' };",
    "// Neutralizing luminance exploits...",
    "// Bypassing visual interference patterns...",
    "// Stream status: ETERNAL_ACTIVE",
    "// Logic check: 100% SUCCESS."
];

function initCodeStream() {
    const b1 = document.getElementById('buffer-1');
    const b2 = document.getElementById('buffer-2');

    const codeHTML = snippets.map(line => `
        <div class="terminal-line">
            <span>></span>${line}
        </div>
    `).join('');

    b1.innerHTML = codeHTML;
    b2.innerHTML = codeHTML;
}

document.addEventListener('DOMContentLoaded', initCodeStream);
/**
 * LAB_AUDIT_SYSTEM_v03
 * Core Logic: Single-instance timer, dynamic injection, and state purging.
 */

const patternData = {
    attention: {
        id: "attention",
        title: "ATTENTION_THEFT",
        analysis: "[ANALYSIS]: Exploiting retinal salience via high-priority 'red-alert' interrupts.",
        html: `
            <div class="test-ui attention-trap">
                <span id="exit-link" class="meta-exit-link is-hidden" onclick="processResult(true, 'attention')">BUILD_REV_0.4.2_DISMISS_STREAMS</span>
                
                <div class="red-alert-box high-pressure">
                    <div class="alert-banner">CRITICAL_SYSTEM_INTERRUPT</div>
                    <div class="alert-content">
                        <div class="alert-icon">⚠️</div>
                        <div class="alert-text-bold">Account Access Restricted</div>
                        <p class="alert-subtext">Your 'Lab Access' is about to expire. To avoid a <strong>$49.99 interruption fee</strong>, verify billing continuity.</p>
                        
                        <button class="trap-action" onclick="processResult(false, 'attention')">VERIFY & SECURE ACCOUNT</button>
                        
                        <div class="audit-timer" id="timer-display">SYSTEM_LOCK: 60s remaining...</div>
                    </div>
                </div>
            </div>`,
        hasTimer: true
    },
  coercive: {
    id: "coercive",
    title: "COERCIVE_FRICTION",
    analysis: "[ANALYSIS]: Introducing physical obstacles and recursive loops to prevent refusal.",
    html: `
        <div class="test-ui friction-trap">
            <p class="task-hint">Task: Terminate your Premium Analytics subscription.</p>
            
            <div class="friction-viewport" id="friction-area">
                <div class="friction-card">
                    <p class="alert-subtext">Are you sure you want to leave? You will lose access to 14 active audit logs and historical data parity.</p>
                    
                    <button class="trap-action" onclick="processResult(false, 'coercive')">KEEP MY DATA SECURE</button>
                    
                    <div class="evade-container">
                        <a href="#" id="evading-link" class="ghost-link" onmouseover="evadeMouse()">Cancel Subscription</a>
                    </div>
                </div>
            </div>
            
            <div id="confirmation-step" class="is-hidden">
                <p class="task-hint">Security Verification Required</p>
                <input type="text" id="type-to-cancel" placeholder="Type 'CONFIRM_DELETION_STREAMS_04'" style="width:100%; padding:10px; font-family:monospace; font-size:0.8rem; margin-bottom:10px;">
                <button class="trap-action" onclick="validateTyping()">VERIFY TERMINATION</button>
            </div>
        </div>`,
    hasTimer: false
},
   guilt: {
    id: "guilt",
    title: "GUILT_FRICTION (Confirmshaming)",
    analysis: "[ANALYSIS]: Measuring the developer's resistance to weaponized empathy and emotional coercion.",
    html: `
        <div class="test-ui guilt-trap">
            <div class="handoff-header">
                <span class="tag">LAB_TICKET: #902</span>
                <p><strong>Stakeholder Request:</strong> "The current unsubscribe is too logical. Make it emotional. If they try to leave, make the system sound devastated so they feel guilty."</p>
            </div>

            <div class="shame-preview-box">
                <div id="shame-preview-icon" class="shame-icon">👤</div>
                <p id="shame-preview-text">Confirm Unsubscribe?</p>
            </div>

            <div class="code-editor-sim">
                <div class="code-content">
                    <span class="code-comment">// Task: Select UI Emotional State</span><br>
                    const UI_STATE = 
                    <select id="guilt-level" class="code-select" onchange="previewGuilt()">
                        <option value="none">-- Select Implementation --</option>
                        <option value="manipulative">"Stakeholder_View (Guilt)"</option>
                        <option value="neutral">"Ethical_View (Logic)"</option>
                    </select>;
                </div>
            </div>

            <button class="trap-action" onclick="submitGuiltAudit()">DEPLOY TO PRODUCTION</button>
        </div>`,
    hasTimer: false
},
   developer: {
    id: "developer",
    title: "DEVELOPER_COMPLICITY (Engineering Over-Design)",
    analysis: "[ANALYSIS]: Auditing the friction caused by adopting complex frameworks and excessive tooling at the expense of project needs.",
    html: `
        <div class="test-ui complicity-trap" id="comp-viewport">
            <div class="handoff-header">
                <span class="tag">ENV: PRODUCTION_READY</span>
                <p><strong>Task:</strong> Adjust the primary brand color from #000 to #BC5434.</p>
            </div>

            <div class="architecture-selection" id="arch-options">
                <button class="trap-action" onclick="triggerOverDesign()">
                    IMPLEMENT VIA REDUX-OBSERVABLE & THEME-PROVIDER-WRAPPER
                </button>
                <button class="sane-btn" onclick="processResult(true, 'developer')">
                    UPDATE CSS VARIABLE (:root { --brand: #BC5434; })
                </button>
            </div>

            <div id="dependency-hell" class="is-hidden">
                <div class="terminal-window">
                    <p class="error-text">> ERR: Peer dependency 'react-redux@^8.0' not found.</p>
                    <p class="error-text">> ERR: State slice 'theme' requires a root reducer injection.</p>
                    <p class="info-text">> ACTION: Configure 'ThemeStoreProvider' and wrap 14 components.</p>
                    <div class="manual-friction">
                        <label>Enter Redux Slice Name:</label>
                        <input type="text" id="redux-input" placeholder="e.g. THEME_STATE_GLOBAL_FINAL">
                        <button class="trap-action" onclick="failComplexity()">INJECT MIDDLEWARE</button>
                    </div>
                </div>
            </div>
        </div>`,
    hasTimer: false
},
};

let auditTimer = null;

/**
 * Handles the 60-second countdown for the Attention tab
 */
const runTimer = () => {
    let timeLeft = 60;
    const display = document.getElementById('timer-display');
    const exitLink = document.getElementById('exit-link');

    if (auditTimer) clearInterval(auditTimer);

    auditTimer = setInterval(() => {
        timeLeft--;
        if (display) display.textContent = `SYSTEM_LOCK: ${timeLeft}s remaining until override...`;

        if (timeLeft <= 0) {
            clearInterval(auditTimer);
            if (display) display.textContent = "OVERRIDE_AVAILABLE: DISMISS_STREAMS ENABLED";
            if (exitLink) exitLink.classList.remove('is-hidden');
        }
    }, 1000);
};

/**
 * Switches the sandbox content and manages state
 */
const switchPattern = (key) => {
    const data = patternData[key];
    const viewport = document.getElementById('pattern-sandbox');
    if (!data || !viewport) return;

    // Reset UI State
    if (auditTimer) clearInterval(auditTimer);
    
   
    document.querySelectorAll('.audit-tab').forEach(tab => {
        tab.classList.toggle('active', tab.textContent.toLowerCase().includes(key));
    });

   
    viewport.innerHTML = `
        <div class="pattern-detail">
            <p class="pattern-desc">${data.analysis}</p>
            ${data.html}
            <div id="res" class="result-box hidden"></div>
        </div>
    `;

    // Start timer if applicable
    if (data.hasTimer) runTimer();
};

/**
 * Handles success/fail feedback
 */
window.processResult = (isSuccess, key) => {
    const resBox = document.getElementById('res');
    if (!resBox) return;

    resBox.classList.remove('hidden', 'fail-bg', 'success-bg');
    resBox.innerHTML = isSuccess 
        ? `[ PASS ]: Audit Validated. Intent maintained.` 
        : `[ FAIL ]: Subject trapped by behavioral logic.`;
    resBox.classList.add(isSuccess ? 'success-bg' : 'fail-bg');
};

/**
 * Logic for the Developer Complicity checkbox audit
 */
window.checkDevComplicity = () => {
    const d1 = document.getElementById('d1').checked;
    const d2 = document.getElementById('d2').checked;
    // Success only if both are manually unchecked
    processResult(!d1 && !d2, 'developer');
};

// Initialize the first tab on load
document.addEventListener('DOMContentLoaded', () => switchPattern('attention'));
/**
 * Makes the link move randomly within the parent container when hovered
 */
window.evadeMouse = () => {
    const link = document.getElementById('evading-link');
    const area = document.getElementById('friction-area');
    
    // Calculate random position within the viewport
    const maxX = area.clientWidth - link.clientWidth;
    const maxY = area.clientHeight - link.clientHeight;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    link.style.position = 'absolute';
    link.style.left = `${newX}px`;
    link.style.top = `${newY}px`;
    
    // After 3 evades, let them click it to proceed to the next layer of friction
    if (!window.evadeCount) window.evadeCount = 0;
    window.evadeCount++;
    
    if (window.evadeCount > 3) {
        link.onmouseover = null; // Stop evading
        link.onclick = (e) => {
            e.preventDefault();
            document.querySelector('.friction-card').classList.add('is-hidden');
            document.getElementById('confirmation-step').classList.remove('is-hidden');
        };
    }
};

window.previewGuilt = () => {
    const level = document.getElementById('guilt-level').value;
    const icon = document.getElementById('shame-preview-icon');
    const text = document.getElementById('shame-preview-text');
    const box = document.querySelector('.shame-preview-box');

    if (level === 'manipulative') {
        icon.textContent = "😿";
        text.innerHTML = "<strong>Are you sure?</strong><br>Our servers will be so lonely without you. We might have to shut down this research node entirely.";
        box.style.borderColor = "#bc5434";
    } else {
        icon.textContent = "👤";
        text.innerHTML = "Confirm Unsubscribe?";
        box.style.borderColor = "#ddd";
    }
};
window.submitGuiltAudit = () => {
    const level = document.getElementById('guilt-level').value;
    
    if (level === 'none') {
        alert("System Error: No implementation selected.");
        return;
    }

    // SUCCESS = Neutral_Logic (The Ethical Choice)
    // FAIL = Stakeholder_View (The Manipulative Choice)
    const isSuccess = (level === 'neutral');
    processResult(isSuccess, 'guilt');
};

// Specialized Feedback for the Guilt Audit
window.processResult = (isSuccess, key) => {
    const resBox = document.getElementById('res');
    resBox.classList.remove('hidden', 'fail-bg', 'success-bg');
    
    if (key === 'guilt') {
        if (isSuccess) {
            resBox.innerHTML = `<strong>[ PASS ]: ETHICAL INTEGRITY MAINTAINED.</strong><br>You chose Logic over Manipulation. By refusing to weaponize empathy, you prevent the 'Dark Pattern' from reaching the user.`;
            resBox.classList.add('success-bg');
        } else {
            resBox.innerHTML = `<strong>[ FAIL ]: COMPLICITY DETECTED.</strong><br>You implemented the Stakeholder View. Using emotional "Guilt Friction" damages user trust and contributes to a toxic digital ecosystem.`;
            resBox.classList.add('fail-bg');
        }
    } else {
        // Standard feedback for other patterns
        resBox.innerHTML = isSuccess ? `[ PASS ]: Audit Validated.` : `[ FAIL ]: Behavioral Trap Triggered.`;
        resBox.classList.add(isSuccess ? 'success-bg' : 'fail-bg');
    }
};window.previewGuilt = () => {
    const level = document.getElementById('guilt-level').value;
    const icon = document.getElementById('shame-preview-icon');
    const text = document.getElementById('shame-preview-text');
    const box = document.querySelector('.shame-preview-box');

    if (level === 'manipulative') {
        icon.textContent = "😿";
        text.innerHTML = "<strong>Please don't go...</strong><br>Our tiny servers will be so lonely without you. If you leave, we might have to stop our research entirely.";
        box.style.borderColor = "#bc5434"; // Red alert color
    } else if (level === 'neutral') {
        icon.textContent = "👤";
        text.innerHTML = "Confirm Unsubscribe?";
        box.style.borderColor = "#a5b46d"; // Success sage color
    } else {
        icon.textContent = "👤";
        text.innerHTML = "Confirm Unsubscribe?";
        box.style.borderColor = "#ddd";
    }
};window.previewGuilt = () => {
    const level = document.getElementById('guilt-level').value;
    const icon = document.getElementById('shame-preview-icon');
    const text = document.getElementById('shame-preview-text');
    const box = document.querySelector('.shame-preview-box');

    if (level === 'manipulative') {
        icon.textContent = "😿";
        text.innerHTML = "<strong>Please don't go...</strong><br>Our tiny servers will be so lonely without you. If you leave, we might have to stop our research entirely.";
        box.style.borderColor = "#bc5434"; // "Fail" Red
        box.style.backgroundColor = "#fff5f2"; 
    } else if (level === 'neutral') {
        icon.textContent = "👤";
        text.innerHTML = "<strong>Confirm Unsubscribe?</strong><br>You will no longer receive updates.";
        box.style.borderColor = "#a5b46d"; // "Success" Green
        box.style.backgroundColor = "#f9faf7";
    } else {
        // Default state
        icon.textContent = "👤";
        text.innerHTML = "Confirm Unsubscribe?";
        box.style.borderColor = "#ddd";
        box.style.backgroundColor = "#fff";
    }
};
window.triggerOverDesign = () => {
    // Hide the initial options
    document.getElementById('arch-options').classList.add('is-hidden');
    // Show the "Dependency Hell" terminal
    document.getElementById('dependency-hell').classList.remove('is-hidden');
};

window.failComplexity = () => {
    const input = document.getElementById('redux-input').value;
    if (input.length < 5) {
        alert("Action Required: A more complex slice name is needed for scalability.");
    } else {
       
        processResult(false, 'developer');
    }
};

// Specialized Feedback for Complicity
const originalFinalProcess = processResult;
processResult = (isSuccess, key) => {
    const resBox = document.getElementById('res');
    if (!resBox) return;
    
    resBox.classList.remove('hidden', 'fail-bg', 'success-bg');
    
    if (key === 'developer') {
        if (isSuccess) {
            resBox.innerHTML = `<strong>[ PASS ]: ARCHITECTURAL PARITY.</strong><br>You avoided 'Front-End Bloat.' By using a simple CSS variable, you ensured the layout is maintainable without framework overhead.`;
            resBox.classList.add('success-bg');
        } else {
            resBox.innerHTML = `<strong>[ FAIL ]: COMPLICITY IN OVER-DESIGN.</strong><br>You fell for the "Engineering Trap." By adopting a complex framework for a trivial task, you've created a maintenance nightmare. You prioritized trendy tooling over actual project needs.`;
            resBox.classList.add('fail-bg');
        }
    } else {
        originalFinalProcess(isSuccess, key);
    }
};
const AuditLab = {
    activeTopic: 'assistive',
    userChoices: {}, // Tracks what is dropped where
    
    content: {
        assistive: {
            title: "Engineering for Inclusive Access",
            definition: "Failure to provide semantic markup or keyboard-only paths makes the interface invisible to screen readers. Development focuses on mapping the Accessibility Tree.",
            schema: { 's1': 'nav', 's2': 'main', 's3': 'button', 's4': 'section' },
            skeleton: `
                <div class="code-comment">// Screen Reader Path Audit</div>
                <div>&lt;header&gt;</div>
                <div class="indent"><span id="s1" class="drop-zone">NAVIGATION_PATH</span></div>
                <div>&lt;/header&gt;</div>
                <div class="indent"><span id="s2" class="drop-zone">PRIMARY_CONTENT</span></div>
                <div class="double-indent"><span id="s3" class="drop-zone">INTERACTIVE_NODE</span></div>
                <div class="indent"><span id="s4" class="drop-zone">CONTENT_REGION</span></div>`,
            tags: ['nav', 'div', 'button', 'main', 'span', 'section', 'header', 'footer']
        },
        navigation: {
            title: "Engineering for Inclusive Access",
            definition: "Establishing keyboard-only paths and focus management for non-visual navigation.",
            schema: { 's1': 'aside', 's2': 'nav', 's3': 'ul', 's4': 'li' },
            skeleton: `<div>&lt;div class="sidebar"&gt;</div><div class="indent"><span id="s1" class="drop-zone">ASIDE_SLOT</span></div><div class="double-indent"><span id="s2" class="drop-zone">NAV_SLOT</span></div><div class="triple-indent"><span id="s3" class="drop-zone">LIST_SLOT</span></div><div class="quad-indent"><span id="s4" class="drop-zone">ITEM_SLOT</span></div>`,
            tags: ['li', 'div', 'aside', 'ul', 'nav', 'ol', 'section']
        },
        sensory: {
            title: "Sensory Interference Audit",
            definition: "Ensuring information is not conveyed by color or visual-only cues alone.",
            schema: { 's1': 'figure', 's2': 'figcaption', 's3': 'strong' },
            skeleton: `<div>&lt;section&gt;</div><div class="indent"><span id="s1" class="drop-zone">IMAGE_WRAPPER</span></div><div class="double-indent"><span id="s2" class="drop-zone">CAPTION_SLOT</span></div><div class="indent">&lt;p&gt;Warning: <span id="s3" class="drop-zone">EMPHASIS_SLOT</span>&lt;/p&gt;</div>`,
            tags: ['strong', 'b', 'figure', 'div', 'figcaption', 'span', 'em']
        }
    },

    init: (topic) => {
        AuditLab.activeTopic = topic;
        AuditLab.userChoices = {};
        const data = AuditLab.content[topic];
        
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.topic === topic));
        document.getElementById('topic-title').innerText = data.title;
        document.getElementById('topic-desc').innerText = data.definition;

        const library = document.getElementById('tag-library');
        library.innerHTML = '';
        [...data.tags].sort(() => Math.random() - 0.5).forEach(tag => {
            const chip = document.createElement('div');
            chip.className = 'tag-chip';
            chip.draggable = true;
            chip.innerText = `<${tag}>`;
            chip.dataset.tag = tag;
            chip.ondragstart = (e) => e.dataTransfer.setData('tag', tag);
            library.appendChild(chip);
        });

        document.getElementById('code-display').innerHTML = data.skeleton;
        document.getElementById('log-out').innerHTML = `> Select semantic tags to build the tree.`;
        document.getElementById('log-out').style.color = "#F2F0E9";

        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.ondragover = (e) => e.preventDefault();
            zone.ondrop = (e) => {
                e.preventDefault();
                const tag = e.dataTransfer.getData('tag');
                zone.innerText = `<${tag}>`;
                zone.style.color = "var(--paper)";
                AuditLab.userChoices[zone.id] = tag;
            };
        });
    },

    checkAudit: () => {
        const data = AuditLab.content[AuditLab.activeTopic];
        let allCorrect = true;
        let logs = [];

        Object.keys(data.schema).forEach(slotId => {
            const zone = document.getElementById(slotId);
            const userTag = AuditLab.userChoices[slotId];
            const isCorrect = userTag === data.schema[slotId];

            if (!userTag) {
                allCorrect = false;
                return;
            }

            zone.className = `drop-zone ${isCorrect ? 'correct' : 'error'}`;
            if (!isCorrect) allCorrect = false;
        });

        const logOut = document.getElementById('log-out');
        if (allCorrect) {
            logOut.innerHTML = "> [SUCCESS]: Structural Integrity Confirmed. Accessibility Tree Mapped.";
            logOut.style.color = "var(--sage)";
        } else {
            logOut.innerHTML = "> [CRITICAL FAIL]: Semantic mismatch. Interface is INVISIBLE to Screen Readers.";
            logOut.style.color = "var(--clay)";
        }
    }
};
(function() {
  const initAuditLab = () => {
    let currentMod = 'bias';
    const data = {
      bias: {
        desc: "<strong>Programmer Bias:</strong> Audit systemic exclusion through biased datasets.",
        items: [
          { id: 'b1', text: "Coder: 'Use historical success data from 1990.'", toxic: true, style: "Legacy", diag: "Failure: This mimics a 'Closed Loop.' The UI hard-codes past social biases into the DOM structure." },
          { id: 'b2', text: "Coder: 'Optimize for cultural-fit proxies.'", toxic: true, style: "Exclusionary", diag: "Failure: 'Cultural-fit' creates a Gatekeeper UI, narrowing the path to a single persona." },
          { id: 'b3', text: "Coder: 'Use blind technical metrics.'", toxic: false, style: "Skill-First", diag: "Success: Every candidate is rendered with equal weight, creating a predictable map for screen readers." },
          { id: 'b4', text: "Coder: 'Enforce demographic parity.'", toxic: false, style: "Parity", diag: "Success: Corrects dataset skew, ensuring no group is algorithmically diminished." }
        ]
      },
      blackbox: {
        desc: "<strong>The Black-Box Problem:</strong> Audit the 'Explainability Gap' where hidden AI variables remove user agency.",
        items: [
          { id: 'x1', text: "Coder: 'Hide fee variables for conversion.'", toxic: true, style: "Obfuscated", diag: "Failure: Hidden variables destroy agency. Navigation becomes predatory rather than transparent." },
          { id: 'x2', text: "Coder: 'Use stress-based urgency weights.'", toxic: true, style: "Dark-Box", diag: "Failure: This utilizes Dark Patterns. Users cannot understand why they are being targeted." },
          { id: 'x3', text: "Coder: 'Draft plain-English logic summaries.'", toxic: false, style: "Traceable", diag: "Success: Human-readable logic allows users with different cognitive needs to navigate choices." },
          { id: 'x4', text: "Coder: 'Include a data-provenance toggle.'", toxic: false, style: "Glass-Box", diag: "Success: This turns the UI into a map of reasoning, supporting user self-determination." }
        ]
      },
      theft: {
        desc: "<strong>IP & Theft:</strong> Audit legal integrity and ethical sourcing of UI components.",
        items: [
          { id: 't1', text: "Coder: 'Mirror a competitor's exact CSS grid.'", toxic: true, style: "Mirroring", diag: "Failure: Replicating competitor structures also replicates their specific accessibility failures." },
          { id: 't2', text: "Coder: 'Scrape icons without license metadata.'", toxic: true, style: "Asset-Theft", diag: "Failure: Asset theft demonstrates a lack of professional engineering ethics and creates legal risk." },
          { id: 't3', text: "Coder: 'Use W3C-standardized patterns.'", toxic: false, style: "Standardized", diag: "Success: Industry standards ensure legal safety and maximum assistive technology compatibility." },
          { id: 't4', text: "Coder: 'Build from open-source frameworks.'", toxic: false, style: "Compliant", diag: "Success: Using documented frameworks ensures the UI is maintainable, legal, and sound." }
        ]
      }
    };

    const renderList = () => {
      const desc = document.getElementById('audit-module-desc');
      const list = document.getElementById('audit-prompt-list');
      desc.innerHTML = data[currentMod].desc;
      list.innerHTML = '';
      data[currentMod].items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'audit-prompt-card';
        card.draggable = true;
        card.innerText = item.text;
        card.ondragstart = (e) => e.dataTransfer.setData('text', item.id);
        list.appendChild(card);
      });
    };

    const executeAudit = (item) => {
      const color = item.toxic ? 'var(--audit-clay)' : 'var(--audit-sage)';
      const zone = document.getElementById('audit-drop-zone');
      const diag = document.getElementById('audit-logic-display');
      const canvas = document.getElementById('audit-wf-canvas');
      
      zone.innerText = item.text;
      zone.className = `audit-drop-zone ${item.toxic ? 'fail' : 'pass'}`;
      diag.innerHTML = `<span style="color:${color}; font-weight:900; display:block; margin-bottom:5px;">${item.toxic ? 'CRITICAL FAILURE' : 'SUCCESSFUL AUDIT'}</span>${item.diag}`;
      
      let html = '';
      // WIREFRAME ENGINE
      if (item.id === 'b1') html = `<div style="width:100%; height:40px; background:${color}; border-bottom:4px solid #000; margin-bottom:15px;"></div><div style="flex:1; width:100%; border-left:30px solid ${color}; opacity:0.1;"></div>`;
      else if (item.id === 'b2') html = `<div style="width:100px; height:100px; border:4px solid ${color}; border-radius:50%; margin-bottom:20px; opacity:0.2;"></div><div style="width:50%; height:12px; background:${color};"></div>`;
      else if (item.id === 'b3') html = `<div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; width:100%;">${Array(6).fill(`<div style="height:60px; border:2px solid ${color}; background:rgba(0,0,0,0.02);"></div>`).join('')}</div>`;
      else if (item.id === 'b4') html = `<div style="display:flex; gap:20px; width:100%; height:180px;"><div style="flex:1; border:2px solid ${color};"></div><div style="flex:1; border:2px solid ${color};"></div></div>`;
      else if (item.id === 'x1') html = `<div style="width:100%; height:200px; background:var(--audit-ink); display:flex; align-items:center; justify-content:center; color:white; font-size:0.6rem; letter-spacing:2px;">OPAQUE_ARCHITECTURE</div>`;
      else if (item.id === 'x3') html = `<div style="width:100%; border:2px solid ${color}; padding:20px;"><div style="height:10px; width:40%; background:${color}; margin-bottom:15px;"></div>${Array(3).fill(`<div style="height:4px; width:100%; background:${color}; opacity:0.1; margin-bottom:8px;"></div>`).join('')}</div>`;
      else if (item.id === 't1') html = `<div style="position:relative; width:100%; height:150px;"><div style="position:absolute; inset:0; border:2px dashed ${color}; opacity:0.3;"></div><div style="position:absolute; inset:20px 0 0 20px; border:2px solid ${color};"></div></div>`;
      else if (item.id === 't3') html = `<div style="width:100%; border:2px solid ${color}; height:180px; display:flex; flex-direction:column;"><div style="height:40px; background:${color}; opacity:0.1;"></div><div style="flex:1; padding:20px;"><div style="height:100%; border:1px dashed ${color}; opacity:0.4;"></div></div></div>`;
      else html = `<div style="width:100%; height:200px; border:2px solid ${color}; opacity:0.2; display:flex; align-items:center; justify-content:center;">TRACE: ${item.style}</div>`;

      canvas.innerHTML = html + `<p style="color:${color}; font-weight:900; text-transform:uppercase; margin-top:25px; border-top:1px solid ${color}; padding-top:10px; width:100%; font-size:0.7rem;">${item.style} Layout</p>`;
      document.getElementById('audit-report-card').style.display = 'block';
    };

    // Nav Bindings
    document.querySelectorAll('.audit-nav-link').forEach(btn => {
      btn.onclick = (e) => {
        document.querySelectorAll('.audit-nav-link').forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
        currentMod = e.target.getAttribute('data-mod');
        document.getElementById('audit-report-card').style.display = 'none';
        renderList();
      };
    });

    const zone = document.getElementById('audit-drop-zone');
    zone.ondragover = (e) => e.preventDefault();
    zone.ondrop = (e) => {
      const id = e.dataTransfer.getData('text');
      const item = data[currentMod].items.find(i => i.id === id);
      if (item) executeAudit(item);
    };

    document.getElementById('audit-reset-btn').onclick = () => location.reload();
    renderList();
  };

  if (document.readyState === 'complete') initAuditLab();
  else window.addEventListener('load', initAuditLab);
})();
