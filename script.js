// Phishing Quiz Script
// Author: Jonathan Peters
// Year: 2026
// Notification: This Tool Is Only For Educational Purposes

document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    const startBtn = document.getElementById('start-btn');
    const submitBtn = document.getElementById('submit-btn');
    const restartBtn = document.getElementById('restart-btn');
    const questionTitle = document.getElementById('question-title');
    const questionContent = document.getElementById('question-content');
    const optionsContainer = document.getElementById('options');
    const currentQuestionElem = document.getElementById('current-question');
    const totalQuestionsElem = document.getElementById('total-questions');
    const scoreElem = document.getElementById('score');
    const totalQuestionsResultElem = document.getElementById('total-questions-result');
    const explanationsContainer = document.getElementById('explanations');

    let currentQuestion = 0;
    let score = 0;
    let userAnswers = [];

    const questions = [
        {
            title: 'Question 1: Email from "Bank of America"',
            content: `Subject: Urgent Account Verification Required

Dear Customer,

We have detected unusual activity on your account. To prevent suspension, please verify your details by clicking the link below:

https://bankofamerica-security.com/verify

Thank you,
Bank of America Support`,
            options: [
                { text: 'This is a legitimate email.', isCorrect: false },
                { text: 'This is a phishing email.', isCorrect: true }
            ],
            explanation: 'This is a phishing email. Signs include: URL mismatch (bankofamerica-security.com instead of bankofamerica.com), urgent language to create panic, and generic greeting ("Dear Customer"). Always check URLs directly on official sites.'
        },
        {
            title: 'Question 2: URL in a Text Message',
            content: `You have a new voicemail: Click here to listen - http://voicemail-service.net/listen?id=12345`,
            options: [
                { text: 'Safe to click.', isCorrect: false },
                { text: 'Potential phishing.', isCorrect: true }
            ],
            explanation: 'This is potential phishing. Signs: Unsolicited message, unknown domain (voicemail-service.net), and shortened or disguised URL. Legitimate services use their own domains like verizon.com or att.com.'
        },
        {
            title: 'Question 3: Email from "Amazon"',
            content: `Subject: Your Order Has Shipped!

Hello,

Your recent order #123456 has shipped. Track it here: https://amazon.com/track-order

Best,
Amazon Team`,
            options: [
                { text: 'This is phishing.', isCorrect: false },
                { text: 'This is legitimate.', isCorrect: true }
            ],
            explanation: 'This appears legitimate. Signs: Correct domain (amazon.com), specific order details, and no urgent demands. However, always verify by logging into your account directly.'
        },
        {
            title: 'Question 4: Email with Attachment',
            content: `Subject: Invoice for Payment

Dear Valued Client,

Please find the attached invoice for your recent purchase. Open attachment to view details.

Attachment: invoice.doc.exe

Regards,
Billing Department`,
            options: [
                { text: 'Safe to open attachment.', isCorrect: false },
                { text: 'Phishing or malware risk.', isCorrect: true }
            ],
            explanation: 'This is phishing/malware. Signs: Suspicious attachment extension (.doc.exe - double extension to hide executable), generic sender, and request to open unknown file. Never open attachments from unknown sources.'
        },
        {
            title: 'Question 5: Social Media Message',
            content: `Hey friend! Check out this funny video: bit.ly/funnyvid123`,
            options: [
                { text: 'Likely safe from a friend.', isCorrect: false },
                { text: 'Possible phishing via shortened URL.', isCorrect: true }
            ],
            explanation: 'Possible phishing. Signs: Shortened URL (bit.ly) hides the real destination, even from "friends" (accounts can be hacked). Always expand shortened links or ask for the full URL.'
        }
    ];

    const totalQuestions = questions.length;
    totalQuestionsElem.textContent = totalQuestions;
    totalQuestionsResultElem.textContent = totalQuestions;

    function showScreen(screen) {
        startScreen.classList.add('hidden');
        quizScreen.classList.add('hidden');
        resultScreen.classList.add('hidden');
        screen.classList.remove('hidden');
    }

    function loadQuestion(index) {
        const q = questions[index];
        questionTitle.textContent = q.title;
        questionContent.innerHTML = q.content; // Use innerHTML for potential formatting
        optionsContainer.innerHTML = '';
        q.options.forEach((option, i) => {
            const div = document.createElement('div');
            div.classList.add('option');
            div.textContent = option.text;
            div.dataset.index = i;
            div.addEventListener('click', selectOption);
            optionsContainer.appendChild(div);
        });
        currentQuestionElem.textContent = index + 1;
        submitBtn.disabled = true;
    }

    function selectOption(e) {
        const selected = optionsContainer.querySelector('.selected');
        if (selected) selected.classList.remove('selected');
        e.target.classList.add('selected');
        submitBtn.disabled = false;
    }

    function submitAnswer() {
        const selected = optionsContainer.querySelector('.selected');
        if (!selected) return;
        const optionIndex = parseInt(selected.dataset.index);
        const q = questions[currentQuestion];
        const isCorrect = q.options[optionIndex].isCorrect;
        userAnswers.push({ questionIndex: currentQuestion, selected: optionIndex, isCorrect });
        if (isCorrect) score++;
        currentQuestion++;
        if (currentQuestion < totalQuestions) {
            loadQuestion(currentQuestion);
        } else {
            showResults();
        }
    }

    function showResults() {
        showScreen(resultScreen);
        scoreElem.textContent = score;
        explanationsContainer.innerHTML = '';
        userAnswers.forEach(answer => {
            const q = questions[answer.questionIndex];
            const expDiv = document.createElement('div');
            expDiv.classList.add('explanation');
            expDiv.classList.add(answer.isCorrect ? 'correct' : 'incorrect');
            const h3 = document.createElement('h3');
            h3.textContent = q.title;
            const pContent = document.createElement('p');
            pContent.textContent = `You selected: ${q.options[answer.selected].text} (${answer.isCorrect ? 'Correct' : 'Incorrect'})`;
            const pExp = document.createElement('p');
            pExp.textContent = q.explanation;
            expDiv.appendChild(h3);
            expDiv.appendChild(pContent);
            expDiv.appendChild(pExp);
            explanationsContainer.appendChild(expDiv);
        });
    }

    function resetQuiz() {
        currentQuestion = 0;
        score = 0;
        userAnswers = [];
        showScreen(startScreen);
    }

    startBtn.addEventListener('click', () => {
        showScreen(quizScreen);
        loadQuestion(0);
    });

    submitBtn.addEventListener('click', submitAnswer);

    restartBtn.addEventListener('click', resetQuiz);
});
