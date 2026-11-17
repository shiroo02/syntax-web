/**
 * Core Application Controller - Syntax Gen-Z
 * English Education Department Interactive Web App
 */

const GLOSSARY_TERMS = [
    { term: "Syntax", def: "The study of principles and rules for constructing sentences in natural languages.", tag: "Core" },
    { term: "Constituent", def: "A word or a group of words that functions as a single structural unit within a hierarchical sentence.", tag: "Structure" },
    { term: "Head", def: "The central element that determines the syntactic category and core meaning of a phrase (e.g. Noun in an NP).", tag: "X-Bar" },
    { term: "Complement", def: "A phrase required by the head to complete its syntactic meaning (e.g. direct object of a transitive verb).", tag: "Relation" },
    { term: "Adjunct", def: "An optional modifying phrase that provides extra circumstantial details (time, place, manner) without altering core grammar.", tag: "Relation" },
    { term: "SVO", def: "Subject-Verb-Object word order typology; English standard canonical order.", tag: "Typology" },
    { term: "Structural Ambiguity", def: "A phenomenon where a single surface sentence has two or more distinct underlying syntactic tree structures.", tag: "Ambiguity" },
    { term: "Wh-Movement", def: "Syntactic transformation where an interrogative wh-word moves to the front of a clause (CP specifier).", tag: "Movement" },
    { term: "C-Command", def: "A core geometric structural relation between tree nodes: A c-commands B if neither dominates the other and the first branching node above A dominates B.", tag: "Advanced" }
];

class AppController {
    constructor() {
        this.currentTab = 'tab-intro';
        this.isDark = localStorage.getItem('syntax_theme') === 'dark';
        this.completedTabs = new Set(JSON.parse(localStorage.getItem('syntax_completed_tabs') || '["tab-intro"]'));
    }

    init() {
        this.applyTheme();
        this.setupNavigation();
        this.setupGlossary();
        this.updateOverallProgress();
        this.setupMobileMenu();
    }

    applyTheme() {
        if (this.isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        const themeBtn = document.getElementById('theme-toggle-btn');
        if (themeBtn) {
            themeBtn.innerHTML = this.isDark 
                ? '<i data-lucide="sun" class="w-4 h-4 text-amber-400"></i>' 
                : '<i data-lucide="moon" class="w-4 h-4 text-slate-600"></i>';
        }
        if (window.lucide) window.lucide.createIcons();
    }

    toggleTheme() {
        this.isDark = !this.isDark;
        localStorage.setItem('syntax_theme', this.isDark ? 'dark' : 'light');
        this.applyTheme();
        if (window.soundFx) window.soundFx.pop();
    }

    switchTab(tabId) {
        if (window.soundFx) window.soundFx.click();
        this.currentTab = tabId;
        this.completedTabs.add(tabId);
        localStorage.setItem('syntax_completed_tabs', JSON.stringify([...this.completedTabs]));

        // Hide all tab panes
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.add('hidden');
        });

        // Show target pane
        const target = document.getElementById(tabId);
        if (target) {
            target.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Update Nav button styles
        document.querySelectorAll('.nav-tab-btn').forEach(btn => {
            const btnTarget = btn.getAttribute('data-target');
            if (btnTarget === tabId) {
                btn.className = 'nav-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 bg-violet-600 text-white shadow-md shadow-violet-200 dark:shadow-none';
            } else {
                btn.className = 'nav-tab-btn px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800';
            }
        });

        // If tree tab is opened, re-render tree to ensure correct dimensions
        if (tabId === 'tab-tree' && window.treeViz) {
            setTimeout(() => window.treeViz.renderTree(), 50);
        }

        this.updateOverallProgress();
        if (window.lucide) window.lucide.createIcons();
    }

    updateOverallProgress() {
        const total = 5;
        const count = this.completedTabs.size;
        const pct = Math.min(100, Math.round((count / total) * 100));
        
        const bar = document.getElementById('lesson-progress-bar');
        const text = document.getElementById('lesson-progress-text');
        if (bar) bar.style.width = `${pct}%`;
        if (text) text.textContent = `${pct}% completed`;
    }

    setupNavigation() {
        document.querySelectorAll('.nav-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.getAttribute('data-target');
                if (target) this.switchTab(target);
            });
        });
    }

    setupGlossary() {
        const modal = document.getElementById('glossary-modal');
        const list = document.getElementById('glossary-list');
        const searchInput = document.getElementById('glossary-search');
        if (!modal || !list) return;

        window.openGlossary = () => {
            if (window.soundFx) window.soundFx.pop();
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            renderList(GLOSSARY_TERMS);
        };

        window.closeGlossary = () => {
            if (window.soundFx) window.soundFx.click();
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        };

        const renderList = (items) => {
            list.innerHTML = items.map(item => `
                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-sm text-violet-600 dark:text-violet-400 font-mono">${item.term}</span>
                        <span class="text-[10px] px-2 py-0.5 rounded-md bg-violet-100 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300 font-medium">${item.tag}</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">${item.def}</p>
                </div>
            `).join('');
        };

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                const filtered = GLOSSARY_TERMS.filter(t => 
                    t.term.toLowerCase().includes(query) || t.def.toLowerCase().includes(query)
                );
                renderList(filtered);
            });
        }
    }

    setupMobileMenu() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileNav = document.getElementById('mobile-nav-menu');
        if (menuBtn && mobileNav) {
            menuBtn.addEventListener('click', () => {
                mobileNav.classList.toggle('hidden');
                if (window.soundFx) window.soundFx.pop();
            });

            mobileNav.querySelectorAll('button').forEach(btn => {
                btn.addEventListener('click', () => {
                    mobileNav.classList.add('hidden');
                });
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new AppController();
    window.app.init();
});
