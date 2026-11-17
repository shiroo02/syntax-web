/**
 * Gen Z Interactive Syntax Games Engine
 * English Department Syntax Learning Web App
 */

// Game 1: Chomsky's Vibe Check (Well-formed vs Ill-formed Syntax)
const CHOMSKY_DATA = [
    {
        sentence: "Colorless green ideas sleep furiously.",
        isWellFormed: true,
        reason: "✨ Classic Chomsky! Semantically nonsensical (meaningless in real life), but SYNTACTICALLY PERFECT: [NP [Adj colorless] [Adj green] [N ideas]] [VP [V sleep] [Adv furiously]]. It follows all English phrase structure rules!"
    },
    {
        sentence: "Furiously sleep ideas green colorless.",
        isWellFormed: false,
        reason: "❌ Word salad! It violates English word order. Adverbs cannot precede intransitive verbs in this position without inversion, and adjectives cannot trail after the head noun like this."
    },
    {
        sentence: "The aesthetic coffee shop quietly ghosted my wallet.",
        isWellFormed: true,
        reason: "✨ Gen Z slang, but syntactically 100% standard: [NP The aesthetic coffee shop] + [VP quietly [V ghosted] [NP my wallet]]."
    },
    {
        sentence: "Spilled roommate tea the table under yesterday.",
        isWellFormed: false,
        reason: "❌ Major syntax crash! English is head-initial for prepositions ('under the table', not 'table under') and requires SVO word order, not V-S-O-Adjunct."
    },
    {
        sentence: "Which professor did you say that you disliked?",
        isWellFormed: true,
        reason: "✨ Legitimate Wh-movement extraction out of an embedded clause without violating the island constraint!"
    },
    {
        sentence: "Which professor did you wonder whether she disliked?",
        isWellFormed: false,
        reason: "❌ Violates Wh-island constraint! You cannot extract a Wh-phrase out of an indirect question introduced by 'whether'."
    }
];

// Game 2: Sentence Architect (Constituent builder)
const SCRAMBLE_DATA = [
    {
        instruction: "Reconstruct the SVO sentence with an Adverbial Adjunct:",
        formula: "NP (Subject) + VP [V + NP (Object)] + PP (Time/Place)",
        tokens: ["The algorithm", "recommended", "weird reels", "at midnight"],
        correctOrder: ["The algorithm", "recommended", "weird reels", "at midnight"],
        tags: ["NP (Subject)", "V", "NP (Object)", "PP (Adjunct)"]
    },
    {
        instruction: "Build a Complex Sentence with Subordinate Clause:",
        formula: "Dependent Clause + , + Independent Clause",
        tokens: ["Although she studied all night", "the syntax tree", "confused", "the whole cohort"],
        correctOrder: ["Although she studied all night", "the syntax tree", "confused", "the whole cohort"],
        tags: ["Dep. Clause", "NP (Subj)", "V", "NP (Obj)"]
    },
    {
        instruction: "Assemble a Di-transitive (SVOO) Structure:",
        formula: "Subject + Verb + Indirect Object + Direct Object",
        tokens: ["The lecturer", "gave", "the stressed students", "extra study tips"],
        correctOrder: ["The lecturer", "gave", "the stressed students", "extra study tips"],
        tags: ["NP (Subj)", "V (Ditransitive)", "NP (Indirect Obj)", "NP (Direct Obj)"]
    }
];

// Game 3: Ambiguity Decoder
const AMBIGUITY_DATA = [
    {
        headline: "Kids make nutritious snacks.",
        meaningA: "Children prepare healthy snack meals for themselves (Kids = Subject Agent).",
        meaningB: "Children can literally be cooked/eaten as nutritious food! (Kids = Object Ingredient).",
        structuralSource: "Ambiguity of 'make': Linking verb / Constitute vs. Action verb / Cook."
    },
    {
        headline: "Police help dog bite victim.",
        meaningA: "The police assisted a person who was bitten by a dog.",
        meaningB: "The police are actively helping a dog bite an innocent person!",
        structuralSource: "'Help' + bare infinitive vs. 'Help' + noun phrase modifier."
    },
    {
        headline: "Include your children when baking cookies.",
        meaningA: "Bake cookies together as a fun family activity.",
        meaningB: "Mix your actual children into the cookie dough as ingredients!",
        structuralSource: "Temporal adjunct vs. Direct recipe ingredient adjunct."
    },
    {
        headline: "Stolen painting found by tree.",
        meaningA: "The lost artwork was discovered lying near an oak tree.",
        meaningB: "A literal tree detective was the one that solved the crime and found the painting!",
        structuralSource: "Preposition 'by': Agent of passive action vs. Locative prepositional phrase."
    }
];

// Game 4: Rapid Boss Quiz
const QUIZ_QUESTIONS = [
    {
        q: "What does SVO stand for in English typology?",
        options: [
            "Subject - Verb - Object",
            "Syntax - Vocabulary - Orthography",
            "Structural - Verbal - Operator",
            "Subordinate - Variable - Order"
        ],
        answer: 0,
        tip: "English is an SVO language, unlike Japanese or Korean which are SOV."
    },
    {
        q: "In the phrase 'The extremely cozy oversized sweater', what is the HEAD noun?",
        options: [
            "cozy",
            "extremely",
            "oversized",
            "sweater"
        ],
        answer: 3,
        tip: "The HEAD of a Noun Phrase determines its core identity. All other words are specifiers/modifiers of 'sweater'."
    },
    {
        q: "Why can 'I saw the man with a telescope' have TWO different meanings?",
        options: [
            "Because words sound the same (phonetic ambiguity)",
            "Because of Structural/Syntactic Ambiguity in PP attachment",
            "Because the spelling of telescope is archaic",
            "Because the speaker made a grammatical error"
        ],
        answer: 1,
        tip: "PP Attachment: The PP 'with a telescope' can attach to the VP (tool used) or to the NP 'the man' (he holds it)."
    },
    {
        q: "Which test replaces a group of words with 'it' or 'she' to prove it's a constituent?",
        options: [
            "Movement / Cleft Test",
            "Substitution Test",
            "Coordination Test",
            "Phoneme Elision Test"
        ],
        answer: 1,
        tip: "The Substitution Test replaces a constituent with a pro-form (pronoun, do-so, etc.)."
    },
    {
        q: "What type of sentence is: 'I wanted to submit the syntax paper, but my Wi-Fi crashed because a cat tripped on the router'?",
        options: [
            "Simple sentence",
            "Compound sentence only",
            "Complex sentence only",
            "Compound-Complex sentence"
        ],
        answer: 3,
        tip: "It has two independent clauses joined by 'but', and a dependent clause introduced by 'because'."
    },
    {
        q: "Which of these is a grammatical sentence in English?",
        options: [
            "The dog the cat chased ran away.",
            "Ran away dog cat the the chased.",
            "Chased the cat dog ran away the.",
            "Cat the chased dog the ran."
        ],
        answer: 0,
        tip: "Option A is a valid center-embedded relative clause: 'The dog [that] the cat chased ran away.'"
    }
];

class GamesManager {
    constructor() {
        this.xp = parseInt(localStorage.getItem('syntax_xp') || '0', 10);
        this.combo = 0;
        this.chomskyIndex = 0;
        this.scrambleIndex = 0;
        this.quizIndex = 0;
        this.quizScore = 0;
        this.userScrambleOrder = [];
    }

    init() {
        this.updateXPDisplay();
        this.renderChomsky();
        this.renderScramble();
        this.renderAmbiguity();
        this.renderQuiz();
    }

    addXP(amount) {
        this.xp += amount;
        localStorage.setItem('syntax_xp', this.xp.toString());
        this.updateXPDisplay();
    }

    updateXPDisplay() {
        const el = document.getElementById('user-xp-badge');
        const progressEl = document.getElementById('user-xp-bar');
        const labelEl = document.getElementById('arcade-xp-label');
        if (el) el.textContent = `${this.xp} XP`;
        if (progressEl) {
            const pct = Math.min(100, Math.round((this.xp / 150) * 100));
            progressEl.style.width = `${pct}%`;
        }
        if (labelEl) {
            labelEl.textContent = `${this.xp} / 150 XP`;
        }
    }

    // --- GAME 1: CHOMSKY'S VIBE CHECK ---
    renderChomsky() {
        const container = document.getElementById('chomsky-game-box');
        if (!container) return;

        const current = CHOMSKY_DATA[this.chomskyIndex];
        container.innerHTML = `
            <div class="space-y-4">
                <div class="flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>Card ${this.chomskyIndex + 1} of ${CHOMSKY_DATA.length}</span>
                    <span class="text-violet-600 font-bold">Chomsky's Syntax Radar</span>
                </div>

                <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-violet-100 dark:border-slate-700 shadow-sm text-center relative overflow-hidden group">
                    <div class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2 font-mono">Analyze this string</div>
                    <div class="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-slate-100 font-sans tracking-tight leading-snug">
                        "${current.sentence}"
                    </div>
                </div>

                <div id="chomsky-feedback" class="min-h-[50px]"></div>

                <div class="grid grid-cols-2 gap-3" id="chomsky-actions">
                    <button onclick="window.games.answerChomsky(true)" 
                        class="p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200 font-bold text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-sm">
                        <span>✨ Syntactically Valid</span>
                    </button>
                    <button onclick="window.games.answerChomsky(false)" 
                        class="p-3.5 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/50 border border-rose-300 dark:border-rose-700 text-rose-800 dark:text-rose-200 font-bold text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-sm">
                        <span>🚫 Syntax Crash (Ill-formed)</span>
                    </button>
                </div>
            </div>
        `;
    }

    answerChomsky(userChoice) {
        const current = CHOMSKY_DATA[this.chomskyIndex];
        const feedback = document.getElementById('chomsky-feedback');
        const actions = document.getElementById('chomsky-actions');
        const isCorrect = userChoice === current.isWellFormed;

        if (isCorrect) {
            if (window.soundFx) window.soundFx.correct();
            this.addXP(20);
            if (window.confetti && this.chomskyIndex === CHOMSKY_DATA.length - 1) {
                window.confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
            }
        } else {
            if (window.soundFx) window.soundFx.wrong();
        }

        feedback.innerHTML = `
            <div class="p-3.5 rounded-xl ${isCorrect ? 'bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 text-emerald-900 dark:text-emerald-200' : 'bg-rose-50 dark:bg-rose-950/50 border border-rose-300 text-rose-900 dark:text-rose-200'} text-xs leading-relaxed animate-fadeIn">
                <div class="font-bold flex items-center gap-1.5 mb-1">
                    <span>${isCorrect ? '🎯 Accurate Analysis (+20 XP)' : '🧐 Not quite! Here is why:'}</span>
                </div>
                <div>${current.reason}</div>
            </div>
        `;

        actions.innerHTML = `
            <button onclick="window.games.nextChomsky()" 
                class="col-span-2 py-3 px-6 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm shadow-md shadow-violet-200 dark:shadow-none transition-all flex items-center justify-center gap-2">
                <span>${this.chomskyIndex < CHOMSKY_DATA.length - 1 ? 'Next Sentence' : 'Restart Challenge'}</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
        `;
        if (window.lucide) window.lucide.createIcons();
    }

    nextChomsky() {
        this.chomskyIndex = (this.chomskyIndex + 1) % CHOMSKY_DATA.length;
        if (window.soundFx) window.soundFx.pop();
        this.renderChomsky();
    }

    // --- GAME 2: SENTENCE ARCHITECT (CONSTITUENT SCRAMBLE) ---
    renderScramble() {
        const container = document.getElementById('scramble-game-box');
        if (!container) return;

        const current = SCRAMBLE_DATA[this.scrambleIndex];
        this.userScrambleOrder = [];

        // Shuffle tokens for initial state
        const shuffled = [...current.tokens].sort(() => Math.random() - 0.5);

        container.innerHTML = `
            <div class="space-y-4">
                <div class="flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>Target: ${current.formula}</span>
                    <span class="text-violet-600 font-bold">Puzzle ${this.scrambleIndex + 1}/${SCRAMBLE_DATA.length}</span>
                </div>

                <div class="p-3.5 bg-violet-50/70 dark:bg-slate-800/60 rounded-xl border border-violet-100 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300">
                    💡 <strong>Instruction:</strong> ${current.instruction}
                </div>

                <!-- Drop / Answer Area -->
                <div id="scramble-slots" class="min-h-[64px] p-3 rounded-2xl bg-white dark:bg-slate-900 border-2 border-dashed border-violet-300 dark:border-slate-700 flex flex-wrap gap-2 items-center justify-center">
                    <span class="text-xs text-slate-400 font-sans italic" id="empty-slot-hint">Tap blocks below in the correct syntactic order...</span>
                </div>

                <!-- Available Token Pool -->
                <div id="scramble-tokens-pool" class="flex flex-wrap gap-2 justify-center pt-2">
                    ${shuffled.map((token, idx) => `
                        <button onclick="window.games.selectToken('${token.replace(/'/g, "\\'")}', this)" 
                            class="token-chip px-3.5 py-2 rounded-xl bg-violet-100 dark:bg-slate-800 hover:bg-violet-200 dark:hover:bg-slate-700 text-violet-900 dark:text-violet-200 border border-violet-200 dark:border-slate-700 text-xs font-semibold shadow-sm transition-all active:scale-95">
                            ${token}
                        </button>
                    `).join('')}
                </div>

                <div id="scramble-result" class="min-h-[40px]"></div>

                <div class="flex items-center justify-between gap-3 pt-2">
                    <button onclick="window.games.resetScramble()" class="px-4 py-2 rounded-xl text-xs font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-1.5 border border-slate-200 dark:border-slate-700">
                        <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                        <span>Reset Order</span>
                    </button>
                    <button onclick="window.games.checkScramble()" class="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs shadow-md shadow-violet-200 dark:shadow-none flex items-center gap-1.5">
                        <i data-lucide="check" class="w-3.5 h-3.5"></i>
                        <span>Check Structure</span>
                    </button>
                </div>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
    }

    selectToken(tokenText, btnElement) {
        if (window.soundFx) window.soundFx.pop();
        this.userScrambleOrder.push(tokenText);
        btnElement.classList.add('opacity-30', 'pointer-events-none');

        const slots = document.getElementById('scramble-slots');
        const hint = document.getElementById('empty-slot-hint');
        if (hint) hint.remove();

        const tokenBadge = document.createElement('span');
        tokenBadge.className = 'px-3 py-1.5 rounded-lg bg-violet-600 text-white text-xs font-bold animate-fadeIn shadow-sm flex items-center gap-1';
        tokenBadge.innerHTML = `<span>${tokenText}</span>`;
        slots.appendChild(tokenBadge);
    }

    resetScramble() {
        if (window.soundFx) window.soundFx.click();
        this.renderScramble();
    }

    checkScramble() {
        const current = SCRAMBLE_DATA[this.scrambleIndex];
        const resultEl = document.getElementById('scramble-result');
        const isMatch = JSON.stringify(this.userScrambleOrder) === JSON.stringify(current.correctOrder);

        if (isMatch) {
            if (window.soundFx) window.soundFx.correct();
            this.addXP(25);
            resultEl.innerHTML = `
                <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 text-emerald-900 dark:text-emerald-200 text-xs animate-fadeIn">
                    <div class="font-bold flex items-center gap-1.5 mb-1">
                        <span>🎉 Perfectly Structured! (+25 XP)</span>
                    </div>
                    <div class="font-mono text-[11px] text-emerald-700 dark:text-emerald-300">
                        Constituent Tree: ${current.tags.map((t, i) => `[${t}: "${current.correctOrder[i]}"]`).join(' ')}
                    </div>
                </div>
            `;
            setTimeout(() => {
                this.scrambleIndex = (this.scrambleIndex + 1) % SCRAMBLE_DATA.length;
                this.renderScramble();
            }, 2500);
        } else {
            if (window.soundFx) window.soundFx.wrong();
            resultEl.innerHTML = `
                <div class="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 text-rose-900 dark:text-rose-200 text-xs animate-fadeIn">
                    <span>⚠️ Syntactic Order Mismatch! Check the target formula and try rearranging.</span>
                </div>
            `;
        }
    }

    // --- GAME 3: AMBIGUITY DECODER ---
    renderAmbiguity() {
        const container = document.getElementById('ambiguity-cards-grid');
        if (!container) return;

        container.innerHTML = AMBIGUITY_DATA.map((item, idx) => `
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-3 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between text-[11px] text-amber-600 dark:text-amber-400 font-mono mb-2">
                        <span>Headline #${idx + 1}</span>
                        <span class="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 font-bold">2 Trees / 1 String</span>
                    </div>
                    <h4 class="font-sans font-extrabold text-base text-slate-800 dark:text-slate-100">
                        "${item.headline}"
                    </h4>
                </div>

                <div class="space-y-2 text-xs">
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                        <span class="font-bold text-violet-600 dark:text-violet-400 block mb-0.5">Parse 1 (Standard):</span>
                        <span class="text-slate-600 dark:text-slate-300">${item.meaningA}</span>
                    </div>
                    <div class="p-2.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/50">
                        <span class="font-bold text-rose-600 dark:text-rose-400 block mb-0.5">Parse 2 (Accidental Comedy):</span>
                        <span class="text-rose-800 dark:text-rose-300">${item.meaningB}</span>
                    </div>
                </div>

                <div class="pt-2 border-t border-slate-100 dark:border-slate-700/60 text-[11px] text-slate-400 font-mono">
                    Linguistic Source: ${item.structuralSource}
                </div>
            </div>
        `).join('');
    }

    // --- GAME 4: SPEED BOSS QUIZ ---
    renderQuiz() {
        const container = document.getElementById('quiz-container');
        if (!container) return;

        if (this.quizIndex >= QUIZ_QUESTIONS.length) {
            this.renderQuizResults(container);
            return;
        }

        const q = QUIZ_QUESTIONS[this.quizIndex];
        container.innerHTML = `
            <div class="space-y-5">
                <div class="flex items-center justify-between text-xs font-mono">
                    <span class="text-slate-400">Question ${this.quizIndex + 1} of ${QUIZ_QUESTIONS.length}</span>
                    <span class="px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 font-bold">Streak: ${this.combo}🔥</span>
                </div>

                <div class="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div class="text-base font-bold text-slate-800 dark:text-slate-100 mb-4 leading-relaxed">
                        ${q.q}
                    </div>

                    <div class="space-y-2.5" id="quiz-options-list">
                        ${q.options.map((opt, idx) => `
                            <button onclick="window.games.answerQuiz(${idx})" 
                                class="quiz-opt-btn w-full p-3.5 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-violet-400 hover:bg-violet-50/50 dark:hover:bg-violet-950/30">
                                <span>${opt}</span>
                                <span class="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-[10px] text-slate-400 font-mono font-bold">${String.fromCharCode(65 + idx)}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div id="quiz-feedback-box"></div>
            </div>
        `;
    }

    answerQuiz(selectedIdx) {
        const q = QUIZ_QUESTIONS[this.quizIndex];
        const isCorrect = selectedIdx === q.answer;
        const feedback = document.getElementById('quiz-feedback-box');
        const optBtns = document.querySelectorAll('.quiz-opt-btn');

        optBtns.forEach((btn, idx) => {
            btn.classList.add('pointer-events-none');
            if (idx === q.answer) {
                btn.className = 'w-full p-3.5 rounded-xl border text-left text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 text-emerald-800 dark:text-emerald-200 flex items-center justify-between';
            } else if (idx === selectedIdx && !isCorrect) {
                btn.className = 'w-full p-3.5 rounded-xl border text-left text-xs font-bold bg-rose-50 dark:bg-rose-950/60 border-rose-400 text-rose-800 dark:text-rose-200 flex items-center justify-between';
            }
        });

        if (isCorrect) {
            if (window.soundFx) window.soundFx.correct();
            this.combo++;
            this.quizScore++;
            this.addXP(20 * (1 + (this.combo > 1 ? 0.5 : 0)));
        } else {
            if (window.soundFx) window.soundFx.wrong();
            this.combo = 0;
        }

        feedback.innerHTML = `
            <div class="p-4 rounded-xl ${isCorrect ? 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 text-emerald-900 dark:text-emerald-200' : 'bg-rose-50 dark:bg-rose-950/40 border border-rose-300 text-rose-900 dark:text-rose-200'} text-xs space-y-2 animate-fadeIn">
                <div class="font-bold flex items-center gap-1.5">
                    <span>${isCorrect ? '🎉 Correct Answer!' : '❌ Incorrect!'}</span>
                </div>
                <p class="text-slate-600 dark:text-slate-300">${q.tip}</p>
                <div class="pt-2">
                    <button onclick="window.games.nextQuizQuestion()" class="px-5 py-2 rounded-xl bg-violet-600 text-white font-bold text-xs hover:bg-violet-700 shadow-sm flex items-center gap-1">
                        <span>${this.quizIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'View Final Score'}</span>
                        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                    </button>
                </div>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
    }

    nextQuizQuestion() {
        this.quizIndex++;
        if (window.soundFx) window.soundFx.pop();
        this.renderQuiz();
    }

    renderQuizResults(container) {
        if (window.soundFx) window.soundFx.fanfare();
        if (window.confetti) {
            window.confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
        }

        const percentage = Math.round((this.quizScore / QUIZ_QUESTIONS.length) * 100);
        let badge = "Linguistics Baddie";
        if (percentage >= 80) badge = "Syntax Grandmaster (S-Tier)";
        else if (percentage >= 50) badge = "Phrase Structure Pro";

        container.innerHTML = `
            <div class="p-8 rounded-3xl bg-white dark:bg-slate-800 border-2 border-violet-200 dark:border-slate-700 text-center space-y-5 shadow-lg">
                <div class="inline-flex p-4 rounded-3xl bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-300 text-4xl shadow-inner">
                    🎓
                </div>

                <div>
                    <h3 class="text-2xl font-black text-slate-800 dark:text-white font-sans">Quiz Completed!</h3>
                    <p class="text-xs text-slate-500 font-mono mt-1">Status: ${badge}</p>
                </div>

                <div class="py-4 border-y border-slate-100 dark:border-slate-700/80 flex items-center justify-around">
                    <div>
                        <div class="text-3xl font-extrabold text-violet-600 dark:text-violet-400 font-mono">${this.quizScore}/${QUIZ_QUESTIONS.length}</div>
                        <div class="text-[11px] text-slate-400 uppercase font-mono">Questions Solved</div>
                    </div>
                    <div>
                        <div class="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">${percentage}%</div>
                        <div class="text-[11px] text-slate-400 uppercase font-mono">Accuracy</div>
                    </div>
                    <div>
                        <div class="text-3xl font-extrabold text-amber-500 font-mono">+${this.quizScore * 20}</div>
                        <div class="text-[11px] text-slate-400 uppercase font-mono">XP Earned</div>
                    </div>
                </div>

                <div class="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <button onclick="window.games.restartQuiz()" class="px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700">
                        Try Again
                    </button>
                    <button onclick="window.openCertificateModal('${percentage}')" class="px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-black shadow-lg shadow-violet-200 dark:shadow-none hover:opacity-95 flex items-center justify-center gap-2">
                        <span>Claim Official Certificate</span>
                        <i data-lucide="award" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
    }

    restartQuiz() {
        this.quizIndex = 0;
        this.quizScore = 0;
        this.combo = 0;
        if (window.soundFx) window.soundFx.pop();
        this.renderQuiz();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.games = new GamesManager();
    window.games.init();
});
