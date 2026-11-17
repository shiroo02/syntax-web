/**
 * SoundFX - Web Audio API Synthesizer
 * Zero external audio files required. Completely standalone & reliable.
 */
class SoundFX {
    constructor() {
        this.ctx = null;
        this.muted = false;
        this.initialized = false;
    }

    init() {
        if (!this.initialized) {
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                this.ctx = new AudioContext();
                this.initialized = true;
            } catch (e) {
                console.warn('Web Audio not supported');
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggleMute() {
        this.muted = !this.muted;
        return this.muted;
    }

    playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.15) {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }

    click() {
        this.playTone(600, 'sine', 0.05, 0.08);
    }

    pop() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(350, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.08);

        gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
    }

    correct() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        // Joyful 3-tone arpeggio (C5, E5, G5)
        const notes = [523.25, 659.25, 783.99];
        notes.forEach((freq, idx) => {
            setTimeout(() => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
                gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.2);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start();
                osc.stop(this.ctx.currentTime + 0.2);
            }, idx * 70);
        });
    }

    wrong() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        // Gentle low "boop-boop"
        const notes = [220, 185];
        notes.forEach((freq, idx) => {
            setTimeout(() => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
                gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.15);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start();
                osc.stop(this.ctx.currentTime + 0.15);
            }, idx * 110);
        });
    }

    fanfare() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        // Level completed victory chime
        const notes = [
            { f: 440, d: 0.1 },
            { f: 554.37, d: 0.1 },
            { f: 659.25, d: 0.1 },
            { f: 880, d: 0.35 }
        ];

        let delay = 0;
        notes.forEach(note => {
            setTimeout(() => {
                if (!this.ctx) return;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(note.f, this.ctx.currentTime);
                gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + note.d);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start();
                osc.stop(this.ctx.currentTime + note.d);
            }, delay);
            delay += 110;
        });
    }
}

window.soundFx = new SoundFX();
