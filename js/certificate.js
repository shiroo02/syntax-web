/**
 * Dynamic HTML5 Canvas Certificate Generator
 * Personalized Gen-Z Syntax Mastery Certificate
 */

function setupCertificateSystem() {
    const modal = document.getElementById('cert-modal');
    if (!modal) return;

    window.openCertificateModal = function(score) {
        if (window.soundFx) window.soundFx.fanfare();
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        const scoreInput = document.getElementById('cert-score-val');
        if (scoreInput) scoreInput.value = score || "95";
        
        generateCertificatePreview();
    };

    window.closeCertificateModal = function() {
        if (window.soundFx) window.soundFx.pop();
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    };

    window.generateCertificatePreview = function() {
        const canvas = document.getElementById('cert-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const studentName = document.getElementById('cert-name-input')?.value.trim() || "Anggun Sasmita, S.Pd.";
        const studentNim = document.getElementById('cert-nim-input')?.value.trim() || "English Education Major";
        const score = document.getElementById('cert-score-val')?.value.trim() || "100";

        // Dimensions: 1200 x 800 (Aesthetic Landscape)
        canvas.width = 1200;
        canvas.height = 800;

        // Background: Soft cream with subtle warm violet gradient
        const bgGrad = ctx.createLinearGradient(0, 0, 1200, 800);
        bgGrad.addColorStop(0, '#FAFAFD');
        bgGrad.addColorStop(1, '#F3F0FF');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, 1200, 800);

        // Modern Neo-Brutalist / Clean Border
        ctx.strokeStyle = '#7C3AED';
        ctx.lineWidth = 14;
        ctx.strokeRect(30, 30, 1140, 740);

        ctx.strokeStyle = '#DDD6FE';
        ctx.lineWidth = 2;
        ctx.strokeRect(48, 48, 1104, 704);

        // Corner accents
        const drawCornerPill = (x, y) => {
            ctx.fillStyle = '#7C3AED';
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.fill();
        };
        drawCornerPill(54, 54);
        drawCornerPill(1146, 54);
        drawCornerPill(54, 746);
        drawCornerPill(1146, 746);

        // Header Pill
        ctx.fillStyle = '#EDE9FE';
        ctx.roundRect(450, 85, 300, 42, 21);
        ctx.fill();

        ctx.fillStyle = '#6D28D9';
        ctx.font = 'bold 14px "Space Grotesk", sans-serif';
        ctx.textAlign = 'center';
        ctx.letterSpacing = '3px';
        ctx.fillText('PRODI PENDIDIKAN BAHASA INGGRIS', 600, 111);

        // Main Title
        ctx.fillStyle = '#0F172A';
        ctx.font = '900 44px "Plus Jakarta Sans", sans-serif';
        ctx.letterSpacing = '0px';
        ctx.fillText('CERTIFICATE OF MASTERY', 600, 185);

        // Subtitle
        ctx.fillStyle = '#64748B';
        ctx.font = '500 18px "Plus Jakarta Sans", sans-serif';
        ctx.fillText('This certifies that the linguistics scholar below has conquered', 600, 225);

        // Topic Highlight
        ctx.fillStyle = '#7C3AED';
        ctx.font = 'bold 24px "Plus Jakarta Sans", sans-serif';
        ctx.fillText('ENGLISH SYNTAX & PHRASE STRUCTURE GRAMMAR', 600, 265);

        // Recipient Line
        ctx.fillStyle = '#94A3B8';
        ctx.font = 'italic 16px serif';
        ctx.fillText('Proudly awarded to:', 600, 330);

        // Name
        ctx.fillStyle = '#1E1B4B';
        ctx.font = '800 46px "Plus Jakarta Sans", sans-serif';
        ctx.fillText(studentName, 600, 395);

        // Line under name
        ctx.strokeStyle = '#7C3AED';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(350, 420);
        ctx.lineTo(850, 420);
        ctx.stroke();

        // NIM / Institution
        ctx.fillStyle = '#64748B';
        ctx.font = '600 17px "Space Grotesk", sans-serif';
        ctx.fillText(studentNim, 600, 455);

        // Achievement Text
        ctx.fillStyle = '#334155';
        ctx.font = 'normal 17px "Plus Jakarta Sans", sans-serif';
        const descText = 'Demonstrating exceptional syntactic competence in SVO typology, phrase structure tree analysis,';
        const descText2 = 'constituency tests, and resolving structural ambiguities with Gen-Z precision.';
        ctx.fillText(descText, 600, 515);
        ctx.fillText(descText2, 600, 545);

        // Bottom Stats Box
        ctx.fillStyle = '#FFFFFF';
        ctx.roundRect(140, 600, 920, 100, 16);
        ctx.fill();
        ctx.strokeStyle = '#E2E8F0';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Score item
        ctx.textAlign = 'left';
        ctx.fillStyle = '#64748B';
        ctx.font = '12px "Space Grotesk", sans-serif';
        ctx.fillText('SYNTAX SCORE', 180, 635);
        ctx.fillStyle = '#10B981';
        ctx.font = 'bold 28px "Space Grotesk", sans-serif';
        ctx.fillText(`${score}% (Distinction)`, 180, 672);

        // Date
        const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        ctx.fillStyle = '#64748B';
        ctx.font = '12px "Space Grotesk", sans-serif';
        ctx.fillText('ISSUE DATE', 500, 635);
        ctx.fillStyle = '#0F172A';
        ctx.font = 'bold 20px "Space Grotesk", sans-serif';
        ctx.fillText(today, 500, 670);

        // Verification Code
        const randCode = 'SYN-GENZ-' + Math.random().toString(36).substring(2, 8).toUpperCase();
        ctx.fillStyle = '#64748B';
        ctx.font = '12px "Space Grotesk", sans-serif';
        ctx.fillText('SECURITY CODE', 780, 635);
        ctx.fillStyle = '#7C3AED';
        ctx.font = 'bold 20px "Space Grotesk", sans-serif';
        ctx.fillText(randCode, 780, 670);

        // Cute badge stamp in bottom right
        ctx.save();
        ctx.translate(970, 650);
        ctx.fillStyle = '#7C3AED';
        ctx.beginPath();
        ctx.arc(0, 0, 32, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 11px "Space Grotesk", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('VERIFIED', 0, -3);
        ctx.fillText('ACADEMIC', 0, 11);
        ctx.restore();
    };

    window.downloadCertificate = function() {
        const canvas = document.getElementById('cert-canvas');
        if (!canvas) return;
        const studentName = document.getElementById('cert-name-input')?.value.trim() || "Student";
        const link = document.createElement('a');
        link.download = `Syntax-Mastery-Certificate-${studentName.replace(/\s+/g, '_')}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        if (window.soundFx) window.soundFx.correct();
    };
}

document.addEventListener('DOMContentLoaded', setupCertificateSystem);
