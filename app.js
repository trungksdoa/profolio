document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('vocabGallery');
    const searchInput = document.getElementById('searchInput');
    const wordCount = document.getElementById('wordCount');
    const noResults = document.getElementById('noResults');

    let currentData = [...vocabData];
    let currentMode = 'list'; // 'list' or 'flashcard'
    let currentPage = 1;
    const itemsPerPage = 30; // Customize limit to 30 items
    let currentFlashcardIndex = 0;

    // Feature states
    let showFavoritesOnly = false;
    let showPhrasesOnly = false;
    let autoPlayEnabled = localStorage.getItem('vocabAutoPlay') === 'true';
    let favorites = JSON.parse(localStorage.getItem('vocabFavorites')) || [];

    // Auto-next states
    let autoNextEnabled = localStorage.getItem('vocabAutoNext') === 'true';
    let autoNextTime = parseInt(localStorage.getItem('vocabAutoNextTime')) || 3;
    let autoNextTimer = null;

    // Set initial auto-play and auto-next checklist/inputs
    document.getElementById('autoPlayAudio').checked = autoPlayEnabled;
    document.getElementById('autoNextCard').checked = autoNextEnabled;
    document.getElementById('autoNextTime').value = autoNextTime;

    // Filter out invalid records if any
    const allData = typeof phrasesData !== 'undefined' ? [...vocabData, ...phrasesData] : [...vocabData];
    const validVocabData = allData.filter(item => item.word && item.definition_vi);
    currentData = [...validVocabData];

    // Initialize Speech Synthesis
    const synth = window.speechSynthesis;

    function speakWord(word) {
        if (synth.speaking) {
            synth.cancel();
        }
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        synth.speak(utterance);
    }

    function renderCards(data) {
        gallery.innerHTML = '';
        wordCount.innerText = data.length;

        if (data.length === 0) {
            noResults.classList.remove('hidden');
            document.getElementById('paginationControls').innerHTML = '';
            document.getElementById('flashcardContainer').classList.add('hidden');
            return;
        }

        noResults.classList.add('hidden');

        // Paging logic
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, data.length);
        const paginatedData = data.slice(startIndex, endIndex);

        const fragment = document.createDocumentFragment();

        paginatedData.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.animationDelay = `${(index % 10) * 0.05}s`;

            const imageSrc = item.image ? item.image : 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=400&auto=format&fit=crop';

            const defVi = item.definition_vi || 'No definition available';
            const defEn = item.definition_en || '';
            const type = item.type || '';
            const pronun = item.pronunciation || '';

            let examplesHTML = '';
            if (item.examples && item.examples.length > 0) {
                const exList = item.examples.slice(0, 2).map(ex => `<li>${ex}</li>`).join('');
                examplesHTML = `
                    <div class="examples">
                        <h4>Examples</h4>
                        <ul>${exList}</ul>
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="card-image-wrap">
                    <img src="${imageSrc}" class="card-image" alt="${item.word}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=400&auto=format&fit=crop'">
                </div>
                <div class="card-body">
                    <div class="card-header">
                        <div>
                            <div class="word-title">${item.word}</div>
                            <div class="word-meta">
                                ${type ? `<span class="word-type">${type}</span>` : ''}
                                ${pronun ? `<span class="word-pronounce">${pronun}</span>` : ''}
                            </div>
                        </div>
                        <div style="display: flex; gap: 10px;">
                            <button class="star-btn ${favorites.includes(item.word) ? 'active' : ''}" data-word="${item.word}" title="Favorite">
                                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            </button>
                            <button class="play-audio" data-word="${item.word}" title="Listen">
                                <svg viewBox="0 0 24 24">
                                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="divider"></div>
                    
                    <div class="definition">
                        <div class="definition-vi">${defVi}</div>
                        ${defEn ? `<div class="definition-en">= ${defEn}</div>` : ''}
                    </div>

                    ${examplesHTML}
                </div>
            `;

            fragment.appendChild(card);
        });

        gallery.appendChild(fragment);

        // Attach event listeners to audio and star buttons
        const audioBtns = gallery.querySelectorAll('.play-audio');
        audioBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation(); // prevent card click
                const wordToSpeak = btn.getAttribute('data-word');
                speakWord(wordToSpeak);
            });
        });

        const starBtns = gallery.querySelectorAll('.star-btn');
        starBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleFavorite(btn.getAttribute('data-word'), btn);
            });
        });

        renderPagination(data.length);
    }

    function renderPagination(totalItems) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const paginationContainer = document.getElementById('paginationControls');
        paginationContainer.innerHTML = '';

        if (totalPages <= 1) return;

        const createBtn = (text, cls, onClick, disabled = false) => {
            const btn = document.createElement('button');
            btn.innerText = text;
            btn.className = cls;
            if (disabled) btn.classList.add('disabled');
            else btn.addEventListener('click', onClick);
            return btn;
        };

        // Prev btn
        paginationContainer.appendChild(createBtn('Prev', 'page-btn', () => goToPage(currentPage - 1), currentPage === 1));

        // Page buttons (simplified: show around current)
        let startP = Math.max(1, currentPage - 2);
        let endP = Math.min(totalPages, currentPage + 2);

        if (startP > 1) {
            paginationContainer.appendChild(createBtn('1', 'page-btn', () => goToPage(1)));
            if (startP > 2) {
                const dots = document.createElement('span');
                dots.innerText = '...';
                paginationContainer.appendChild(dots);
            }
        }

        for (let i = startP; i <= endP; i++) {
            paginationContainer.appendChild(createBtn(i.toString(), i === currentPage ? 'page-btn active' : 'page-btn', () => goToPage(i)));
        }

        if (endP < totalPages) {
            if (endP < totalPages - 1) {
                const dots = document.createElement('span');
                dots.innerText = '...';
                paginationContainer.appendChild(dots);
            }
            paginationContainer.appendChild(createBtn(totalPages.toString(), 'page-btn', () => goToPage(totalPages)));
        }

        // Next btn
        paginationContainer.appendChild(createBtn('Next', 'page-btn', () => goToPage(currentPage + 1), currentPage === totalPages));
    }

    function goToPage(page) {
        currentPage = page;
        renderCards(currentData);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function renderFlashcard() {
        if (currentData.length === 0) return;

        clearTimeout(autoNextTimer);

        const item = currentData[currentFlashcardIndex];
        const counter = document.getElementById('flashcardCounter');
        const front = document.getElementById('flashcardFront');
        const back = document.getElementById('flashcardBack');

        counter.innerText = `${currentFlashcardIndex + 1} / ${currentData.length}`;
        document.getElementById('flashcard').classList.remove('flipped');

        const type = item.type ? `<span class="word-type">${item.type}</span>` : '';
        const pronun = item.pronunciation ? `<span class="word-pronounce">${item.pronunciation}</span>` : '';

        let exHtml = '';
        if (item.examples && item.examples.length > 0) {
            exHtml = `<div class="examples">
                <ul>${item.examples.slice(0, 2).map((ex) => `<li>${ex}</li>`).join('')}</ul>
            </div>`;
        }

        front.innerHTML = `
            <h2>${item.word}</h2>
            <div class="flashcard-meta">
                ${type}
                ${pronun}
                <button class="play-audio flashcard-audio" data-word="${item.word}">
                    <svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                </button>
                <button class="star-btn ${favorites.includes(item.word) ? 'active' : ''} flashcard-star" data-word="${item.word}">
                    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </button>
            </div>
            <div class="flip-hint">Click to flip</div>
        `;

        back.innerHTML = `
            <div class="definition-vi">${item.definition_vi}</div>
            ${item.definition_en ? `<div class="definition-en">= ${item.definition_en}</div>` : ''}
            ${exHtml}
            <div class="flip-hint">Click to flip</div>
        `;

        const audioBtn = front.querySelector('.play-audio');
        if (audioBtn) {
            audioBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                speakWord(item.word);
            });
        }

        const starBtn = front.querySelector('.star-btn');
        if (starBtn) {
            starBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleFavorite(item.word, starBtn);
            });
        }

        if (autoPlayEnabled) {
            speakWord(item.word);
        }

        if (autoNextEnabled) {
            autoNextTimer = setTimeout(() => {
                if (currentFlashcardIndex < currentData.length - 1) {
                    currentFlashcardIndex++;
                    renderFlashcard();
                } else {
                    // Stop auto next if we reach the end
                    document.getElementById('autoNextCard').checked = false;
                    autoNextEnabled = false;
                    localStorage.setItem('vocabAutoNext', false);
                }
            }, autoNextTime * 1000);
        }
    }

    function toggleFavorite(word, btnElement) {
        if (favorites.includes(word)) {
            favorites = favorites.filter(w => w !== word);
            if (btnElement) btnElement.classList.remove('active');
        } else {
            favorites.push(word);
            if (btnElement) btnElement.classList.add('active');
        }
        localStorage.setItem('vocabFavorites', JSON.stringify(favorites));

        // If we are currently filtering by favorites, we need to refresh the view immediately
        if (showFavoritesOnly && favorites.length > 0) {
            searchWords(); // re-evaluates the list and re-renders
        } else if (showFavoritesOnly && favorites.length === 0) {
            searchWords();
        }
    }

    // Debounce helper
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function searchWords() {
        const query = searchInput.value.toLowerCase().trim();

        let baseData = [...validVocabData];
        if (showFavoritesOnly) {
            baseData = baseData.filter(item => favorites.includes(item.word));
        }
        if (showPhrasesOnly) {
            baseData = baseData.filter(item => item.type === '(phrase)');
        }

        if (!query) {
            currentData = baseData;
        } else {
            currentData = baseData.filter(item => {
                const wordMatch = item.word.toLowerCase().includes(query);
                const defViMatch = (item.definition_vi || '').toLowerCase().includes(query);
                const defEnMatch = (item.definition_en || '').toLowerCase().includes(query);
                return wordMatch || defViMatch || defEnMatch;
            });
        }

        currentPage = 1;
        currentFlashcardIndex = 0;

        if (currentMode === 'list') {
            renderCards(currentData);
        } else if (currentMode === 'flashcard') {
            renderFlashcard();
        } else if (currentMode === 'grammar') {
            // we can re-render or just do nothing since grammar is static
            renderGrammarSidebar();
        } else if (currentMode === 'practice') {
            renderPracticeView();
        }
    }

    document.getElementById('listViewBtn').addEventListener('click', () => {
        currentMode = 'list';
        document.getElementById('listViewBtn').classList.add('active');
        document.getElementById('flashcardViewBtn').classList.remove('active');
        if (document.getElementById('grammarViewBtn')) {
            document.getElementById('grammarViewBtn').classList.remove('active');
            document.getElementById('grammarContainer').classList.add('hidden');
        }
        if (document.getElementById('practiceViewBtn')) {
            document.getElementById('practiceViewBtn').classList.remove('active');
            document.getElementById('practiceContainer').classList.add('hidden');
        }
        document.getElementById('listViewContainer').classList.remove('hidden');
        document.getElementById('flashcardContainer').classList.add('hidden');
        renderCards(currentData);
    });

    document.getElementById('flashcardViewBtn').addEventListener('click', () => {
        currentMode = 'flashcard';
        document.getElementById('flashcardViewBtn').classList.add('active');
        document.getElementById('listViewBtn').classList.remove('active');
        if (document.getElementById('grammarViewBtn')) {
            document.getElementById('grammarViewBtn').classList.remove('active');
            document.getElementById('grammarContainer').classList.add('hidden');
        }
        if (document.getElementById('practiceViewBtn')) {
            document.getElementById('practiceViewBtn').classList.remove('active');
            document.getElementById('practiceContainer').classList.add('hidden');
        }
        document.getElementById('listViewContainer').classList.add('hidden');
        document.getElementById('flashcardContainer').classList.remove('hidden');

        if (currentData.length > 0) {
            noResults.classList.add('hidden');
            renderFlashcard();
        } else {
            noResults.classList.remove('hidden');
        }
    });

    if (document.getElementById('grammarViewBtn')) {
        document.getElementById('grammarViewBtn').addEventListener('click', () => {
            currentMode = 'grammar';
            document.getElementById('grammarViewBtn').classList.add('active');
            document.getElementById('listViewBtn').classList.remove('active');
            document.getElementById('flashcardViewBtn').classList.remove('active');
            if (document.getElementById('practiceViewBtn')) {
                document.getElementById('practiceViewBtn').classList.remove('active');
                document.getElementById('practiceContainer').classList.add('hidden');
            }

            document.getElementById('listViewContainer').classList.add('hidden');
            document.getElementById('flashcardContainer').classList.add('hidden');
            document.getElementById('noResults').classList.add('hidden');
            document.getElementById('grammarContainer').classList.remove('hidden');

            renderGrammarSidebar();
        });
    }

    if (document.getElementById('practiceViewBtn')) {
        document.getElementById('practiceViewBtn').addEventListener('click', () => {
            currentMode = 'practice';
            document.getElementById('practiceViewBtn').classList.add('active');
            document.getElementById('listViewBtn').classList.remove('active');
            document.getElementById('flashcardViewBtn').classList.remove('active');
            if (document.getElementById('grammarViewBtn')) {
                document.getElementById('grammarViewBtn').classList.remove('active');
                document.getElementById('grammarContainer').classList.add('hidden');
            }

            document.getElementById('listViewContainer').classList.add('hidden');
            document.getElementById('flashcardContainer').classList.add('hidden');
            document.getElementById('noResults').classList.add('hidden');
            document.getElementById('practiceContainer').classList.remove('hidden');

            renderPracticeView();
        });
    }

    function renderGrammarSidebar() {
        const sidebar = document.getElementById('grammarTopicsList');
        const content = document.getElementById('grammarContent');
        if (!sidebar || typeof grammarData === 'undefined') return;

        if (sidebar.children.length > 0) return; // Already rendered

        sidebar.innerHTML = '';
        if (grammarData.length === 0) {
            content.innerHTML = '<p>No grammar files found.</p>';
            return;
        }

        grammarData.forEach((item, index) => {
            const btn = document.createElement('button');
            btn.className = 'grammar-topic-btn';
            btn.innerText = item.title;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.grammar-topic-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                content.innerHTML = `<h2>${item.title}</h2>` + item.content;
            });
            sidebar.appendChild(btn);

            if (index === 0) {
                btn.click(); // auto select first
            }
        });
    }

    function renderPracticeView() {
        const container = document.getElementById('practiceContainer');
        if (!container || typeof exercisesData === 'undefined') return;
        if (container.children.length > 0) return; // Already rendered

        container.innerHTML = '';
        exercisesData.forEach(topic => {
            const card = document.createElement('div');
            card.className = 'practice-card';

            const title = document.createElement('h3');
            title.innerText = topic.title;
            card.appendChild(title);

            const itemList = document.createElement('div');
            itemList.className = 'practice-item-list';

            topic.items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'practice-item';
                itemDiv._topic = topic;

                let iconSvg = '';
                if (item.type === 'video') {
                    iconSvg = `<svg class="practice-icon default" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="1.5">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polygon points="10 8 16 12 10 16 10 8" fill="none"></polygon>
                               </svg>`;
                } else {
                    if (item.status === 'completed') {
                        iconSvg = `<svg class="practice-icon completed" viewBox="0 0 24 24" fill="#36b37e" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10" stroke="none"></circle>
                                    <polyline points="16 8 11 15 8 12"></polyline>
                                   </svg>`;
                    } else {
                        iconSvg = `<svg class="practice-icon default" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 17h4"></path>
                                    <path d="M14.5 5.5l2 2-7 7-3 1 1-3 7-7z"></path>
                                   </svg>`;
                    }
                }

                itemDiv.innerHTML = `<span class="icon-wrap">${iconSvg}</span><span class="item-text">${item.text}</span>`;

                if (item.type === 'exercise' && item.questions && item.questions.length > 0) {
                    itemDiv.style.cursor = 'pointer';
                    itemDiv.addEventListener('click', () => openQuiz(item, topic));
                }

                itemList.appendChild(itemDiv);
            });

            card.appendChild(itemList);
            container.appendChild(card);
        });
    }

    // ─── Quiz logic ───────────────────────────────────────────────
    let quizQuestions = [], quizCurrent = 0, quizScore = 0, quizUserAnswers = [];

    function shuffleArray(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function openQuiz(item, topic) {
        // Pool all questions from every exercise in this topic
        let pool = [];
        if (topic) {
            topic.items.forEach(it => {
                if (it.questions) pool = pool.concat(it.questions);
            });
        } else {
            pool = item.questions;
        }
        pool = shuffleArray(pool);
        quizQuestions = pool.slice(0, Math.min(30, pool.length));
        quizCurrent = 0;
        quizScore = 0;
        quizUserAnswers = [];

        document.getElementById('quizTitle').textContent = item.text;
        document.getElementById('quizResult').classList.add('hidden');
        document.getElementById('quizBody').style.display = '';
        document.getElementById('quizNextBtn').style.display = '';
        document.querySelector('.quiz-footer').style.display = '';
        document.querySelector('.quiz-progress-bar-wrap').style.display = '';
        document.querySelector('.quiz-progress-label').style.display = '';

        document.getElementById('quizModal').classList.remove('hidden');
        renderQuizQuestion();
    }

    function renderQuizQuestion() {
        const q = quizQuestions[quizCurrent];
        const total = quizQuestions.length;
        const pct = (quizCurrent / total) * 100;

        document.getElementById('quizProgressBar').style.width = pct + '%';
        document.getElementById('quizProgressLabel').textContent = `Câu ${quizCurrent + 1} / ${total}`;
        document.getElementById('quizQuestion').textContent = q.q;
        document.getElementById('quizNextBtn').disabled = true;

        const labels = ['A', 'B', 'C', 'D'];
        const choicesEl = document.getElementById('quizChoices');
        choicesEl.innerHTML = '';
        q.choices.forEach((choice, i) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-choice-btn';
            btn.innerHTML = `<span class="choice-label">${labels[i]}</span>${choice}`;
            btn.addEventListener('click', () => selectAnswer(i));
            choicesEl.appendChild(btn);
        });
    }

    function selectAnswer(idx) {
        const q = quizQuestions[quizCurrent];
        const btns = document.querySelectorAll('.quiz-choice-btn');

        btns.forEach(b => b.disabled = true);
        quizUserAnswers.push(idx);

        if (idx === q.answer) {
            btns[idx].classList.add('correct');
            quizScore++;
        } else {
            btns[idx].classList.add('wrong');
            btns[q.answer].classList.add('correct');
        }

        const nextBtn = document.getElementById('quizNextBtn');
        nextBtn.disabled = false;
        nextBtn.textContent = quizCurrent < quizQuestions.length - 1 ? 'Tiếp theo →' : 'Xem kết quả';
    }

    document.getElementById('quizNextBtn').addEventListener('click', () => {
        quizCurrent++;
        if (quizCurrent < quizQuestions.length) {
            renderQuizQuestion();
        } else {
            showQuizResult();
        }
    });

    function showQuizResult() {
        const total = quizQuestions.length;
        const pct = Math.round((quizScore / total) * 100);

        document.getElementById('quizBody').style.display = 'none';
        document.getElementById('quizNextBtn').style.display = 'none';
        document.querySelector('.quiz-footer').style.display = 'none';
        document.getElementById('quizProgressBar').style.width = '100%';
        document.getElementById('quizProgressLabel').textContent = `Hoàn thành!`;

        const icon = pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '📚';
        const title = pct >= 80 ? 'Xuất sắc!' : pct >= 50 ? 'Khá tốt!' : 'Cần ôn luyện thêm!';
        document.getElementById('quizResultIcon').textContent = icon;
        document.getElementById('quizResultTitle').textContent = title;
        document.getElementById('quizResultScore').innerHTML = `Bạn đúng <span>${quizScore}/${total}</span> câu (${pct}%)`;

        const labels = ['A', 'B', 'C', 'D'];
        const reviewEl = document.getElementById('quizReviewList');
        reviewEl.innerHTML = '';
        quizQuestions.forEach((q, i) => {
            const userAns = quizUserAnswers[i];
            const isCorrect = userAns === q.answer;
            const div = document.createElement('div');
            div.className = `quiz-review-item ${isCorrect ? 'review-correct' : 'review-wrong'}`;
            div.innerHTML = `
                <div class="review-q">${i + 1}. ${q.q}</div>
                ${!isCorrect ? `<div class="review-wrong-ans">✗ Bạn chọn: ${labels[userAns]}. ${q.choices[userAns]}</div>` : ''}
                <div class="review-correct-ans">✓ Đáp án: ${labels[q.answer]}. ${q.choices[q.answer]}</div>
            `;
            reviewEl.appendChild(div);
        });

        document.getElementById('quizResult').classList.remove('hidden');
    }

    document.getElementById('quizRetryBtn').addEventListener('click', () => {
        // Re-shuffle and re-pick 30 from the current pool
        quizQuestions = shuffleArray(quizQuestions).slice(0, Math.min(30, quizQuestions.length));
        quizCurrent = 0; quizScore = 0; quizUserAnswers = [];
        document.getElementById('quizResult').classList.add('hidden');
        document.getElementById('quizBody').style.display = '';
        document.getElementById('quizNextBtn').style.display = '';
        document.querySelector('.quiz-footer').style.display = '';
        document.querySelector('.quiz-progress-bar-wrap').style.display = '';
        document.querySelector('.quiz-progress-label').style.display = '';
        renderQuizQuestion();
    });

    document.getElementById('quizCloseBtn').addEventListener('click', () => {
        document.getElementById('quizModal').classList.add('hidden');
    });

    document.getElementById('quizModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('quizModal')) {
            document.getElementById('quizModal').classList.add('hidden');
        }
    });
    // ─── End Quiz logic ──────────────────────────────────────────

    // Flashcard events
    document.getElementById('flashcard').addEventListener('click', () => {
        document.getElementById('flashcard').classList.toggle('flipped');
        clearTimeout(autoNextTimer); // Pause auto next if user interacts
    });

    document.getElementById('prevCardBtn').addEventListener('click', () => {
        clearTimeout(autoNextTimer);
        if (currentFlashcardIndex > 0) {
            currentFlashcardIndex--;
            renderFlashcard();
        }
    });

    document.getElementById('nextCardBtn').addEventListener('click', () => {
        clearTimeout(autoNextTimer);
        if (currentFlashcardIndex < currentData.length - 1) {
            currentFlashcardIndex++;
            renderFlashcard();
        }
    });

    // Extra actions
    document.getElementById('phrasesFilterBtn').addEventListener('click', (e) => {
        const btn = e.currentTarget;
        showPhrasesOnly = !showPhrasesOnly;
        if (showPhrasesOnly) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
        searchWords();
    });

    document.getElementById('favoritesFilterBtn').addEventListener('click', (e) => {
        const btn = e.currentTarget;
        showFavoritesOnly = !showFavoritesOnly;
        if (showFavoritesOnly) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
        searchWords();
    });

    document.getElementById('shuffleBtn').addEventListener('click', () => {
        // Fisher-Yates shuffle
        for (let i = currentData.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [currentData[i], currentData[j]] = [currentData[j], currentData[i]];
        }
        currentPage = 1;
        currentFlashcardIndex = 0;

        if (currentMode === 'list') {
            renderCards(currentData);
        } else {
            renderFlashcard();
        }
    });

    document.getElementById('autoPlayAudio').addEventListener('change', (e) => {
        autoPlayEnabled = e.target.checked;
        localStorage.setItem('vocabAutoPlay', autoPlayEnabled);
    });

    document.getElementById('autoNextCard').addEventListener('change', (e) => {
        autoNextEnabled = e.target.checked;
        localStorage.setItem('vocabAutoNext', autoNextEnabled);
        if (autoNextEnabled && currentMode === 'flashcard') {
            renderFlashcard(); // Restart timer
        } else {
            clearTimeout(autoNextTimer);
        }
    });

    document.getElementById('autoNextTime').addEventListener('change', (e) => {
        let val = parseInt(e.target.value) || 3;
        if (val < 1) val = 1;
        if (val > 60) val = 60;
        e.target.value = val;
        autoNextTime = val;
        localStorage.setItem('vocabAutoNextTime', autoNextTime);
        if (autoNextEnabled && currentMode === 'flashcard') {
            renderFlashcard(); // Restart timer with new time
        }
    });

    searchInput.addEventListener('input', debounce(searchWords, 300));

    // Scroll Buttons
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const scrollToBottomBtn = document.getElementById('scrollToBottomBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.remove('hidden');
        } else {
            scrollToTopBtn.classList.add('hidden');
        }

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
            scrollToBottomBtn.classList.add('hidden');
        } else {
            scrollToBottomBtn.classList.remove('hidden');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    scrollToBottomBtn.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    // Initial render
    renderCards(currentData);
});
