# Phishing Quiz

## Overview
This is an interactive cybersecurity educational tool designed to help users learn about identifying phishing attempts through a quiz format. Users are presented with fake emails and URLs, and they must determine if they are phishing or not. The tool provides scores and detailed explanations at the end.

**Author:** Jonathan Peters  
**Year:** 2026  
**Notification:** This Tool Is Only For Educational Purposes. It is not intended for any malicious use, such as creating real phishing campaigns. Use it solely to educate yourself or others about cybersecurity best practices.

## Features
- 5 detailed quiz questions with simulated phishing scenarios.
- Multiple-choice options for each question.
- Real-time answer submission and progress tracking.
- Final score display with comprehensive explanations for each answer.
- Responsive design for desktop and mobile.
- Built using pure HTML, CSS, and JavaScript (no external libraries required).

## Files
- **index.html**: The main HTML structure for the quiz interface, including screens for start, quiz, and results.
- **styles.css**: CSS styles for layout, buttons, and visual feedback (e.g., correct/incorrect explanations).
- **script.js**: JavaScript logic for quiz functionality, including question loading, answer handling, scoring, and explanations.
- **readme.md**: This file, providing project details and usage instructions.

## How to Run
1. Download all files into a single directory.
2. Open `index.html` in any modern web browser (e.g., Chrome, Firefox).
3. Click "Start Quiz" to begin.
4. Select an option for each question and submit.
5. View your results and explanations at the end.
6. Restart as needed.

## Customization
- Add more questions by editing the `questions` array in `script.js`. Each question object includes `title`, `content`, `options` (array of {text, isCorrect}), and `explanation`.
- Modify styles in `styles.css` for visual changes.
- Ensure all changes maintain the educational focus.

## Educational Value
This tool simulates common phishing tactics such as URL spoofing, urgent language, suspicious attachments, and shortened links. By interacting with it, users can better recognize these signs in real-life scenarios, reducing the risk of falling victim to phishing attacks.

## Disclaimer
This tool is provided "as is" without warranty. It is for educational purposes only. The author is not responsible for any misuse.

&copy; 2026 Jonathan Peters
