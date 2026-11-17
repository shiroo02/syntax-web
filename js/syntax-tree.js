/**
 * Interactive Syntax Tree Renderer & Constituency Tester
 * English Department Syntax Interactive Learning Module
 */

const TREE_DATA = [
    {
        id: "cat-laser",
        title: "Simple Transitive (SVO)",
        vibe: "Classic & Clean",
        sentence: "The cat chased the laser.",
        tree: {
            name: "S",
            type: "sentence",
            desc: "Sentence: Root clause",
            children: [
                {
                    name: "NP",
                    type: "phrase",
                    desc: "Noun Phrase (Subject): 'The cat'",
                    children: [
                        { name: "Det", type: "pos", desc: "Determiner", children: [{ name: "The", type: "word", wordIndex: 0 }] },
                        { name: "N", type: "pos", desc: "Noun (Head)", children: [{ name: "cat", type: "word", wordIndex: 1 }] }
                    ]
                },
                {
                    name: "VP",
                    type: "phrase",
                    desc: "Verb Phrase (Predicate): 'chased the laser'",
                    children: [
                        { name: "V", type: "pos", desc: "Transitive Verb", children: [{ name: "chased", type: "word", wordIndex: 2 }] },
                        {
                            name: "NP",
                            type: "phrase",
                            desc: "Noun Phrase (Direct Object): 'the laser'",
                            children: [
                                { name: "Det", type: "pos", desc: "Determiner", children: [{ name: "the", type: "word", wordIndex: 3 }] },
                                { name: "N", type: "pos", desc: "Noun (Head)", children: [{ name: "laser", type: "word", wordIndex: 4 }] }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: "matcha-barista",
        title: "With Adjective Modifiers",
        vibe: "Aesthetic Cafe Core",
        sentence: "A chill barista served fresh matcha.",
        tree: {
            name: "S",
            type: "sentence",
            desc: "Sentence: Root clause",
            children: [
                {
                    name: "NP",
                    type: "phrase",
                    desc: "Noun Phrase (Subject): 'A chill barista'",
                    children: [
                        { name: "Det", type: "pos", desc: "Determiner", children: [{ name: "A", type: "word", wordIndex: 0 }] },
                        { name: "AdjP", type: "phrase", desc: "Adjective Phrase", children: [{ name: "Adj", type: "pos", desc: "Adjective", children: [{ name: "chill", type: "word", wordIndex: 1 }] }] },
                        { name: "N", type: "pos", desc: "Noun (Head)", children: [{ name: "barista", type: "word", wordIndex: 2 }] }
                    ]
                },
                {
                    name: "VP",
                    type: "phrase",
                    desc: "Verb Phrase: 'served fresh matcha'",
                    children: [
                        { name: "V", type: "pos", desc: "Verb", children: [{ name: "served", type: "word", wordIndex: 3 }] },
                        {
                            name: "NP",
                            type: "phrase",
                            desc: "Noun Phrase (Object): 'fresh matcha'",
                            children: [
                                { name: "AdjP", type: "phrase", desc: "Adjective Phrase", children: [{ name: "Adj", type: "pos", desc: "Adjective", children: [{ name: "fresh", type: "word", wordIndex: 4 }] }] },
                                { name: "N", type: "pos", desc: "Noun (Head)", children: [{ name: "matcha", type: "word", wordIndex: 5 }] }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: "spill-tea",
        title: "VP with Prepositional Adjunct",
        vibe: "Drama Alert",
        sentence: "My roommate spilled the tea at 2 AM.",
        tree: {
            name: "S",
            type: "sentence",
            desc: "Sentence: Root clause",
            children: [
                {
                    name: "NP",
                    type: "phrase",
                    desc: "Noun Phrase (Subject)",
                    children: [
                        { name: "Poss", type: "pos", desc: "Possessive Pronoun", children: [{ name: "My", type: "word", wordIndex: 0 }] },
                        { name: "N", type: "pos", desc: "Noun (Head)", children: [{ name: "roommate", type: "word", wordIndex: 1 }] }
                    ]
                },
                {
                    name: "VP",
                    type: "phrase",
                    desc: "Verb Phrase with PP time adjunct",
                    children: [
                        { name: "V", type: "pos", desc: "Verb", children: [{ name: "spilled", type: "word", wordIndex: 2 }] },
                        {
                            name: "NP",
                            type: "phrase",
                            desc: "Noun Phrase (Direct Object)",
                            children: [
                                { name: "Det", type: "pos", desc: "Determiner", children: [{ name: "the", type: "word", wordIndex: 3 }] },
                                { name: "N", type: "pos", desc: "Noun (Head)", children: [{ name: "tea", type: "word", wordIndex: 4 }] }
                            ]
                        },
                        {
                            name: "PP",
                            type: "phrase",
                            desc: "Prepositional Phrase (Time Adjunct)",
                            children: [
                                { name: "P", type: "pos", desc: "Preposition", children: [{ name: "at", type: "word", wordIndex: 5 }] },
                                { name: "NP", type: "phrase", desc: "Noun Phrase (Time)", children: [{ name: "2 AM", type: "word", wordIndex: 6 }] }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: "ambiguity-telescope",
        title: "Syntactic Ambiguity: The Camera Dilemma",
        vibe: "Double Meaning Glitch",
        sentence: "She saw the influencer with the camera.",
        isAmbiguous: true,
        interpretations: [
            {
                label: "Interpretation A: Camera is the Tool (VP attachment)",
                meaning: "She used the camera as an instrument to see the influencer.",
                tree: {
                    name: "S",
                    type: "sentence",
                    desc: "Interpretation A: PP modifies VP",
                    children: [
                        { name: "NP", type: "phrase", desc: "Subject", children: [{ name: "Pron", type: "pos", desc: "Pronoun", children: [{ name: "She", type: "word" }] }] },
                        {
                            name: "VP",
                            type: "phrase",
                            desc: "VP: Verb + NP Object + Instrument PP",
                            children: [
                                { name: "V", type: "pos", desc: "Verb", children: [{ name: "saw", type: "word" }] },
                                { name: "NP", type: "phrase", desc: "Object", children: [{ name: "Det", type: "pos", desc: "Det", children: [{ name: "the", type: "word" }] }, { name: "N", type: "pos", desc: "Noun", children: [{ name: "influencer", type: "word" }] }] },
                                {
                                    name: "PP",
                                    type: "phrase",
                                    desc: "PP (Instrument): Attached directly to VP!",
                                    children: [
                                        { name: "P", type: "pos", desc: "Preposition", children: [{ name: "with", type: "word" }] },
                                        { name: "NP", type: "phrase", desc: "Tool", children: [{ name: "the camera", type: "word" }] }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                label: "Interpretation B: Influencer holds Camera (NP attachment)",
                meaning: "The influencer was in possession of the camera.",
                tree: {
                    name: "S",
                    type: "sentence",
                    desc: "Interpretation B: PP modifies NP",
                    children: [
                        { name: "NP", type: "phrase", desc: "Subject", children: [{ name: "Pron", type: "pos", desc: "Pronoun", children: [{ name: "She", type: "word" }] }] },
                        {
                            name: "VP",
                            type: "phrase",
                            desc: "VP: Verb + Complex NP",
                            children: [
                                { name: "V", type: "pos", desc: "Verb", children: [{ name: "saw", type: "word" }] },
                                {
                                    name: "NP",
                                    type: "phrase",
                                    desc: "Complex NP: 'the influencer with the camera' (Modifier inside NP!)",
                                    children: [
                                        { name: "Det", type: "pos", desc: "Det", children: [{ name: "the", type: "word" }] },
                                        { name: "N", type: "pos", desc: "Noun", children: [{ name: "influencer", type: "word" }] },
                                        {
                                            name: "PP",
                                            type: "phrase",
                                            desc: "PP (Attribute Modifier): Attached inside NP!",
                                            children: [
                                                { name: "P", type: "pos", desc: "Preposition", children: [{ name: "with", type: "word" }] },
                                                { name: "NP", type: "phrase", desc: "Possession", children: [{ name: "the camera", type: "word" }] }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    }
];

class SyntaxTreeVisualizer {
    constructor(containerId, infoBoxId) {
        this.container = document.getElementById(containerId);
        this.infoBox = document.getElementById(infoBoxId);
        this.currentTreeIndex = 0;
        this.currentAmbiguityVariant = 0;
    }

    renderSelector(selectorContainerId) {
        const selectorEl = document.getElementById(selectorContainerId);
        if (!selectorEl) return;

        selectorEl.innerHTML = TREE_DATA.map((item, idx) => `
            <button onclick="window.treeViz.selectTree(${idx})" 
                class="tree-tab-btn px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border text-left flex flex-col gap-1 ${
                    idx === this.currentTreeIndex 
                    ? 'bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-200 dark:shadow-none' 
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600'
                }">
                <span class="flex items-center justify-between gap-2">
                    <span class="font-bold">${item.title}</span>
                    <span class="text-[10px] px-2 py-0.5 rounded-full ${idx === this.currentTreeIndex ? 'bg-violet-500/50 text-white' : 'bg-slate-100 dark:bg-slate-700 text-violet-600 dark:text-violet-400'} font-mono">${item.vibe}</span>
                </span>
                <span class="text-xs font-normal opacity-85 truncate">"${item.sentence}"</span>
            </button>
        `).join('');
    }

    selectTree(index) {
        this.currentTreeIndex = index;
        this.currentAmbiguityVariant = 0;
        if (window.soundFx) window.soundFx.pop();
        this.renderSelector('tree-selector-tabs');
        this.renderTree();
    }

    setAmbiguityVariant(variantIdx) {
        this.currentAmbiguityVariant = variantIdx;
        if (window.soundFx) window.soundFx.pop();
        this.renderTree();
    }

    renderTree() {
        if (!this.container) return;
        const currentItem = TREE_DATA[this.currentTreeIndex];
        let rootTree = currentItem.tree;

        let ambiguityControls = '';
        if (currentItem.isAmbiguous) {
            rootTree = currentItem.interpretations[this.currentAmbiguityVariant].tree;
            ambiguityControls = `
                <div class="mb-4 p-3.5 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-2xl">
                    <div class="text-xs font-bold text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-1.5">
                        <i data-lucide="split" class="w-4 h-4 text-amber-600"></i>
                        <span>SYNTACTIC AMBIGUITY DETECTED: 2 Different Trees for 1 Sentence!</span>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        ${currentItem.interpretations.map((interp, idx) => `
                            <button onclick="window.treeViz.setAmbiguityVariant(${idx})" class="px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                                idx === this.currentAmbiguityVariant
                                ? 'bg-amber-500 text-white font-semibold shadow-sm'
                                : 'bg-white dark:bg-slate-800 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-700'
                            }">
                                ${interp.label.split(':')[0]}
                            </button>
                        `).join('')}
                    </div>
                    <p class="text-xs text-amber-800 dark:text-amber-300/90 mt-2 font-mono italic">
                        👉 ${currentItem.interpretations[this.currentAmbiguityVariant].meaning}
                    </p>
                </div>
            `;
        }

        // Layout calculation for SVG Tree
        const layout = this.calculateTreeLayout(rootTree);
        const svgWidth = Math.max(layout.width + 120, 680);
        const svgHeight = layout.height + 110;

        const svgLines = layout.links.map(link => `
            <line x1="${link.x1}" y1="${link.y1}" x2="${link.x2}" y2="${link.y2}" 
                class="tree-branch stroke-slate-300 dark:stroke-slate-600 stroke-[2.5]" 
                stroke-linecap="round" />
        `).join('');

        const svgNodes = layout.nodes.map(node => {
            const isWord = node.type === 'word';
            const isPhrase = node.type === 'phrase' || node.type === 'sentence';
            
            let bgClass = "fill-violet-600";
            let textClass = "fill-white font-bold";
            let pillClass = "cursor-pointer hover:opacity-90";

            if (node.type === 'sentence') {
                bgClass = "fill-indigo-700";
            } else if (node.type === 'phrase') {
                bgClass = "fill-violet-600";
            } else if (node.type === 'pos') {
                bgClass = "fill-emerald-600";
            } else if (isWord) {
                bgClass = "fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-600";
                textClass = "fill-slate-800 dark:fill-slate-100 font-semibold";
            }

            return `
                <g class="tree-node ${pillClass} group" onclick="window.treeViz.showNodeInfo('${node.name}', '${node.desc}', '${node.type}')">
                    ${isWord ? `
                        <rect x="${node.x - 42}" y="${node.y - 16}" width="84" height="32" rx="10" 
                            class="${bgClass} stroke-[1.5] transition-all group-hover:scale-105 transform-gpu" />
                        <text x="${node.x}" y="${node.y + 5}" text-anchor="middle" class="${textClass} text-xs font-sans tracking-wide">
                            "${node.name}"
                        </text>
                    ` : `
                        <rect x="${node.x - 30}" y="${node.y - 18}" width="60" height="34" rx="10" 
                            class="${bgClass} transition-all group-hover:scale-110 group-hover:shadow-lg transform-gpu" />
                        <text x="${node.x}" y="${node.y + 4}" text-anchor="middle" class="${textClass} text-xs font-mono font-bold tracking-wider">
                            ${node.name}
                        </text>
                    `}
                </g>
            `;
        }).join('');

        this.container.innerHTML = `
            ${ambiguityControls}
            <div class="relative overflow-x-auto pb-4 scrollbar-thin rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 p-4 border border-slate-200/80 dark:border-slate-800">
                <div class="absolute top-3 right-3 flex items-center gap-1.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-[11px] text-slate-500 dark:text-slate-400">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Interactive: Click any node
                </div>
                <svg viewBox="0 0 ${svgWidth} ${svgHeight}" class="mx-auto min-w-[580px] max-w-full transition-all">
                    ${svgLines}
                    ${svgNodes}
                </svg>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
    }

    calculateTreeLayout(treeData) {
        let leafCount = 0;
        const assignLeafIndices = (node) => {
            if (!node.children || node.children.length === 0) {
                node.leafIndex = leafCount++;
            } else {
                node.children.forEach(assignLeafIndices);
            }
        };
        assignLeafIndices(treeData);

        const nodes = [];
        const links = [];
        const leafSpacing = 100;
        const levelHeight = 72;

        const calculatePositions = (node, depth = 0) => {
            let x;
            if (!node.children || node.children.length === 0) {
                x = 60 + node.leafIndex * leafSpacing;
            } else {
                const childXs = node.children.map(c => calculatePositions(c, depth + 1));
                x = (Math.min(...childXs) + Math.max(...childXs)) / 2;
                
                node.children.forEach(child => {
                    links.push({
                        x1: x,
                        y1: 45 + depth * levelHeight + 10,
                        x2: child._x,
                        y2: 45 + (depth + 1) * levelHeight - 12
                    });
                });
            }

            const y = 45 + depth * levelHeight;
            node._x = x;
            node._y = y;

            nodes.push({
                x,
                y,
                name: node.name,
                type: node.type,
                desc: node.desc || `${node.name} node`,
                depth
            });

            return x;
        };

        calculatePositions(treeData, 0);

        return {
            nodes,
            links,
            width: leafCount * leafSpacing,
            height: Math.max(...nodes.map(n => n.y))
        };
    }

    showNodeInfo(name, desc, type) {
        if (window.soundFx) window.soundFx.pop();
        if (!this.infoBox) return;

        let badgeColor = "bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300";
        let typeLabel = "Phrase Level";
        if (type === 'sentence') {
            typeLabel = "Root Clause";
            badgeColor = "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300";
        } else if (type === 'pos') {
            typeLabel = "Grammatical Category (POS)";
            badgeColor = "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300";
        } else if (type === 'word') {
            typeLabel = "Lexical Terminal";
            badgeColor = "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
        }

        this.infoBox.innerHTML = `
            <div class="animate-fadeIn flex items-start justify-between gap-3">
                <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1.5">
                        <span class="font-mono text-base font-extrabold text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950 px-2 py-0.5 rounded-lg border border-violet-200 dark:border-violet-800">${name}</span>
                        <span class="text-[11px] px-2 py-0.5 rounded-md font-medium ${badgeColor}">${typeLabel}</span>
                    </div>
                    <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">${desc}</p>
                </div>
                <div class="text-right">
                    <span class="text-[10px] text-slate-400 font-mono">Syntax Inspector</span>
                </div>
            </div>
        `;
    }
}

// Constituency Tester Logic
const CONSTITUENCY_EXAMPLES = [
    {
        sentence: "The sneaky hacker breached the database at midnight.",
        targetPhrase: "The sneaky hacker",
        isConstituent: true,
        type: "NP (Noun Phrase)",
        substitution: "✅ 'SHE / HE breached the database at midnight.' (Pronoun replacement works!)",
        movement: "✅ 'It was [THE SNEAKY HACKER] that breached the database at midnight.' (Cleft movement works!)",
        standalone: "✅ Who breached the database? 'The sneaky hacker.' (Can stand alone as an answer!)",
        verdict: "Passes all 3 tests! 'The sneaky hacker' is a legit constituent (NP)."
    },
    {
        sentence: "The sneaky hacker breached the database at midnight.",
        targetPhrase: "hacker breached",
        isConstituent: false,
        type: "Non-constituent string",
        substitution: "❌ Cannot substitute 'hacker breached' with any single word or pronoun.",
        movement: "❌ 'It was [hacker breached] that the sneaky the database...' (Total ungrammatical word salad!)",
        standalone: "❌ What happened? Cannot answer simply 'hacker breached.'",
        verdict: "Fails all tests! 'hacker breached' crosses a phrase boundary (Head Noun + Transitive Verb) and is NOT a constituent."
    },
    {
        sentence: "The sneaky hacker breached the database at midnight.",
        targetPhrase: "at midnight",
        isConstituent: true,
        type: "PP (Prepositional Phrase / Temporal Adjunct)",
        substitution: "✅ 'The hacker breached the database THEN.' (Can substitute with 'then'!)",
        movement: "✅ '[AT MIDNIGHT], the sneaky hacker breached the database.' (Fronting/Movement works smoothly!)",
        standalone: "✅ When did this happen? 'At midnight.' (Natural standalone answer!)",
        verdict: "Passes all tests! 'at midnight' is an independent constituent (PP Adjunct)."
    }
];

function setupConstituencyTester() {
    const selectorEl = document.getElementById('constituency-test-select');
    const displayEl = document.getElementById('constituency-results');
    if (!selectorEl || !displayEl) return;

    selectorEl.innerHTML = CONSTITUENCY_EXAMPLES.map((item, idx) => `
        <button onclick="window.runConstituencyTest(${idx})" 
            class="constituent-btn px-4 py-2.5 rounded-xl text-left border transition-all text-xs font-medium flex items-center justify-between ${
                idx === 0 
                ? 'bg-violet-600 text-white border-violet-600 font-bold shadow-sm' 
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-violet-300'
            }">
            <span>Target: <span class="underline decoration-wavy decoration-violet-400 font-bold">"${item.targetPhrase}"</span></span>
            <span class="text-[10px] px-2 py-0.5 rounded-full ${item.isConstituent ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300' : 'bg-rose-500/20 text-rose-700 dark:text-rose-300'} font-mono">${item.isConstituent ? 'Constituent' : 'Non-Constituent'}</span>
        </button>
    `).join('');

    window.runConstituencyTest = function(idx) {
        const item = CONSTITUENCY_EXAMPLES[idx];
        if (window.soundFx) window.soundFx.pop();

        // Update button active styles
        const btns = selectorEl.querySelectorAll('.constituent-btn');
        btns.forEach((btn, bIdx) => {
            if (bIdx === idx) {
                btn.className = 'constituent-btn px-4 py-2.5 rounded-xl text-left border transition-all text-xs font-bold flex items-center justify-between bg-violet-600 text-white border-violet-600 shadow-sm';
            } else {
                btn.className = 'constituent-btn px-4 py-2.5 rounded-xl text-left border transition-all text-xs font-medium flex items-center justify-between bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-violet-300';
            }
        });

        displayEl.innerHTML = `
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4">
                <div class="border-b border-slate-100 dark:border-slate-700/60 pb-3">
                    <div class="text-xs text-slate-400 font-mono">Full Sentence</div>
                    <div class="text-sm font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                        ${item.sentence.replace(item.targetPhrase, `<mark class="bg-violet-200 dark:bg-violet-900/60 text-violet-900 dark:text-violet-200 px-1.5 py-0.5 rounded font-bold">${item.targetPhrase}</mark>`)}
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                        <div class="text-[11px] font-bold text-violet-600 dark:text-violet-400 mb-1 flex items-center gap-1">
                            <span>1. Substitution Test</span>
                        </div>
                        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${item.substitution}</p>
                    </div>

                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                        <div class="text-[11px] font-bold text-violet-600 dark:text-violet-400 mb-1 flex items-center gap-1">
                            <span>2. Movement Test</span>
                        </div>
                        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${item.movement}</p>
                    </div>

                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                        <div class="text-[11px] font-bold text-violet-600 dark:text-violet-400 mb-1 flex items-center gap-1">
                            <span>3. Standalone Test</span>
                        </div>
                        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${item.standalone}</p>
                    </div>
                </div>

                <div class="p-3.5 rounded-xl ${item.isConstituent ? 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200' : 'bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200'}">
                    <div class="font-bold text-xs flex items-center gap-1.5 mb-1">
                        <span>${item.isConstituent ? '⚡ Verdict: Valid Constituent!' : '🚫 Verdict: Not a Constituent!'}</span>
                    </div>
                    <p class="text-xs leading-relaxed font-sans">${item.verdict}</p>
                </div>
            </div>
        `;
    };

    window.runConstituencyTest(0);
}

document.addEventListener('DOMContentLoaded', () => {
    window.treeViz = new SyntaxTreeVisualizer('syntax-tree-svg-container', 'syntax-node-info-card');
    window.treeViz.renderSelector('tree-selector-tabs');
    window.treeViz.renderTree();
    setupConstituencyTester();
});
