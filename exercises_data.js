const exercisesData = [
    {
        title: "Danh từ",
        items: [
            { type: "video", text: "Video bài giảng: Lý thuyết (phần 1)", status: "completed" },
            { type: "video", text: "Video bài giảng: Lý thuyết (phần 2)", status: "completed" },
            {
                type: "exercise", text: "Luyện tập: Trắc nghiệm format TOEIC", status: "completed",
                questions: [
                    { q: "The _____ of the new product exceeded all expectations.", choices: ["success", "successful", "succeed", "successfully"], answer: 0 },
                    { q: "We need to hire more _____ for the upcoming project.", choices: ["employ", "employment", "employee", "employees"], answer: 3 },
                    { q: "The _____ submitted a detailed report to the board.", choices: ["manage", "manager", "management", "managing"], answer: 1 },
                    { q: "Customer _____ is our top priority.", choices: ["satisfy", "satisfied", "satisfaction", "satisfying"], answer: 2 },
                    { q: "The company saw a significant _____ in revenue last quarter.", choices: ["increase", "increasing", "increased", "increasingly"], answer: 0 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Nouns: countable, uncountable (Danh từ: đếm được, không đếm được)", status: "completed",
                questions: [
                    { q: "We need some _____ for the printer. (paper)", choices: ["papers", "paper", "a paper", "the papers"], answer: 1 },
                    { q: "She has a lot of _____ about this topic.", choices: ["knowledges", "a knowledge", "knowledge", "the knowledges"], answer: 2 },
                    { q: "Can I have _____ water, please?", choices: ["a", "an", "some", "many"], answer: 2 },
                    { q: "How much _____ do we have left?", choices: ["furnitures", "furniture", "a furniture", "the furniture"], answer: 1 },
                    { q: "There are _____ chairs in the meeting room.", choices: ["much", "a little", "many", "a few of"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Plural nouns (Danh từ số nhiều)", status: "completed",
                questions: [
                    { q: "The _____ are meeting in the boardroom. (CEO)", choices: ["CEO's", "CEOs", "CEOes", "CEOs'"], answer: 1 },
                    { q: "Several _____ were submitted for the design contest.", choices: ["entry", "entrys", "entries", "entryes"], answer: 2 },
                    { q: "The _____ were damaged in the flood. (shelf)", choices: ["shelfs", "shelves", "shelf's", "shelfes"], answer: 1 },
                    { q: "Two _____ are absent today. (secretary)", choices: ["secretarys", "secretaries", "secretaryes", "secretary's"], answer: 1 },
                    { q: "The children visited three different _____. (museum)", choices: ["museum", "museums", "museuies", "musea"], answer: 1 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Plurals: mix (Số nhiều: tổng hợp)", status: "completed",
                questions: [
                    { q: "The _____ in the lab reported their findings. (analysis)", choices: ["analysises", "analysies", "analyses", "analysises"], answer: 2 },
                    { q: "All _____ are required to wear safety gear. (staff)", choices: ["staffs", "staff", "staves", "staffes"], answer: 1 },
                    { q: "The company has offices in several _____. (country)", choices: ["countrys", "countrie", "countries", "countryes"], answer: 2 },
                    { q: "We found several _____ in the report. (error)", choices: ["error", "errores", "errors", "erros"], answer: 2 },
                    { q: "The _____ are stored in the basement. (criterion)", choices: ["criterions", "criteria", "criterias", "criteriones"], answer: 1 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Indefinite article (Mạo từ không xác định)", status: "completed",
                questions: [
                    { q: "She is _____ honest employee.", choices: ["a", "an", "the", "—"], answer: 1 },
                    { q: "We need to hire _____ experienced accountant.", choices: ["a", "an", "the", "—"], answer: 1 },
                    { q: "This is _____ one-time offer.", choices: ["a", "an", "the", "—"], answer: 0 },
                    { q: "He submitted _____ report yesterday.", choices: ["a", "an", "the", "—"], answer: 0 },
                    { q: "She had _____ MBA from Harvard.", choices: ["a", "an", "the", "—"], answer: 1 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Definite article (Mạo từ xác định)", status: "completed",
                questions: [
                    { q: "Please sign _____ contract on page 3.", choices: ["a", "an", "the", "—"], answer: 2 },
                    { q: "_____ Pacific Ocean is the largest ocean.", choices: ["A", "An", "The", "—"], answer: 2 },
                    { q: "She is _____ best candidate we interviewed.", choices: ["a", "an", "the", "—"], answer: 2 },
                    { q: "We met at _____ conference last March.", choices: ["a", "an", "the", "—"], answer: 0 },
                    { q: "_____ CEO announced the merger this morning.", choices: ["A", "An", "The", "—"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Few, less, little, much, many (Ít / nhiều)", status: "completed",
                questions: [
                    { q: "There is _____ time left before the deadline.", choices: ["few", "little", "many", "much of"], answer: 1 },
                    { q: "Not _____ employees attended the optional workshop.", choices: ["much", "little", "many", "few of"], answer: 2 },
                    { q: "We have _____ budget remaining this quarter.", choices: ["few", "little", "many", "much"], answer: 1 },
                    { q: "Very _____ applicants met all the requirements.", choices: ["little", "less", "few", "much"], answer: 2 },
                    { q: "We received _____ complaints than last year.", choices: ["few", "little", "fewer", "less of"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Zero article (Không dùng mạo từ)", status: "completed",
                questions: [
                    { q: "_____ oil prices rose sharply last month.", choices: ["A", "An", "The", "—"], answer: 3 },
                    { q: "She studies _____ economics at university.", choices: ["a", "an", "the", "—"], answer: 3 },
                    { q: "We travel by _____ plane for business trips.", choices: ["a", "an", "the", "—"], answer: 3 },
                    { q: "_____ life is full of unexpected challenges.", choices: ["A", "An", "The", "—"], answer: 3 },
                    { q: "He graduated from _____ Harvard University.", choices: ["a", "an", "the", "—"], answer: 3 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Quantity - mix (Số lượng - tổng hợp)", status: "completed",
                questions: [
                    { q: "_____ of the budget has already been spent.", choices: ["Many", "Much", "Few", "Several"], answer: 1 },
                    { q: "There are _____ options available for this project.", choices: ["much", "a little", "several", "less"], answer: 2 },
                    { q: "We have _____ data to support this decision.", choices: ["few", "many", "plenty of", "a few"], answer: 2 },
                    { q: "Only _____ employees volunteered for the extra shift.", choices: ["much", "a few", "little", "less"], answer: 1 },
                    { q: "_____ of her suggestions were implemented immediately.", choices: ["Much", "A little", "Several", "Less"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Articles: mix (Mạo từ: tổng hợp)", status: "completed",
                questions: [
                    { q: "We need _____ accountant and _____ assistant.", choices: ["a / a", "an / an", "an / a", "a / an"], answer: 2 },
                    { q: "_____ meeting we had yesterday was very productive.", choices: ["A", "An", "The", "—"], answer: 2 },
                    { q: "She works as _____ engineer at a tech firm.", choices: ["a", "an", "the", "—"], answer: 1 },
                    { q: "Can you pass me _____ file on the desk?", choices: ["a", "an", "the", "—"], answer: 2 },
                    { q: "He has _____ MBA and works in finance.", choices: ["a", "an", "the", "—"], answer: 1 },
                ]
            }
        ]
    },
    {
        title: "Đại từ",
        items: [

            { type: "video", text: "Video bài giảng: Lý thuyết", status: "completed" },
            {
                type: "exercise", text: "Luyện tập: Trắc nghiệm format TOEIC", status: "completed",
                questions: [
                    { q: "_____ is the new manager of the marketing department.", choices: ["He", "Him", "His", "Himself"], answer: 0 },
                    { q: "The employees submitted _____ reports before the deadline.", choices: ["they", "them", "their", "theirs"], answer: 2 },
                    { q: "The CEO introduced _____ to the new employees.", choices: ["he", "his", "himself", "him"], answer: 2 },
                    { q: "The project was completed by _____ alone, without any help.", choices: ["she", "her", "hers", "herself"], answer: 3 },
                    { q: "Please send the documents to _____ as soon as possible.", choices: ["I", "me", "my", "mine"], answer: 1 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Personal pronouns (Đại từ nhân xưng)", status: "completed",
                questions: [
                    { q: "_____ called while you were in the meeting.", choices: ["He", "Him", "His", "Himself"], answer: 0 },
                    { q: "I saw _____ at the conference yesterday.", choices: ["she", "her", "hers", "herself"], answer: 1 },
                    { q: "The manager asked _____ to finish the report.", choices: ["we", "us", "our", "ours"], answer: 1 },
                    { q: "_____ are responsible for the new product launch.", choices: ["They", "Them", "Their", "Theirs"], answer: 0 },
                    { q: "Can you help _____? I can't reach the top shelf.", choices: ["I", "me", "my", "mine"], answer: 1 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Reflexive pronouns (Đại từ phản thân)", status: "completed",
                questions: [
                    { q: "She finished the project by _____ in just two days.", choices: ["her", "hers", "herself", "she"], answer: 2 },
                    { q: "The children amused _____ with the new toys.", choices: ["them", "their", "theirs", "themselves"], answer: 3 },
                    { q: "I cut _____ while cooking dinner.", choices: ["me", "my", "myself", "mine"], answer: 2 },
                    { q: "He introduced _____ as the new department head.", choices: ["him", "his", "himself", "he"], answer: 2 },
                    { q: "We should be proud of _____; we did an excellent job.", choices: ["us", "our", "ours", "ourselves"], answer: 3 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Some, any, no, every (Một số, bất kỳ, không, mọi thứ)", status: "completed",
                questions: [
                    { q: "There are _____ questions about the new policy?", choices: ["some", "any", "no", "every"], answer: 1 },
                    { q: "We have _____ time left before the deadline.", choices: ["some", "any", "no", "every"], answer: 2 },
                    { q: "_____ employee must attend the safety training.", choices: ["Some", "Any", "No", "Every"], answer: 3 },
                    { q: "Can I get _____ help with this task?", choices: ["some", "any", "no", "every"], answer: 0 },
                    { q: "_____ of the applicants was qualified for the position.", choices: ["Some", "Any", "None", "Every"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Possessive pronouns (Đại từ sở hữu)", status: "completed",
                questions: [
                    { q: "This laptop is _____. I bought it last month.", choices: ["I", "me", "my", "mine"], answer: 3 },
                    { q: "Is this parking spot _____?", choices: ["your", "yours", "you", "yourself"], answer: 1 },
                    { q: "The blue folder is _____, not the red one.", choices: ["her", "hers", "she", "herself"], answer: 1 },
                    { q: "These seats are _____. We reserved them earlier.", choices: ["our", "ours", "we", "ourselves"], answer: 1 },
                    { q: "The company increased _____ profits by 20% this year.", choices: ["it", "its", "itself", "it's"], answer: 1 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Both, all, whole, every, each (Cả hai, tất cả, toàn bộ, mọi, mỗi)", status: "completed",
                questions: [
                    { q: "_____ employees received a bonus at the end of the year.", choices: ["Both", "All", "Whole", "Each"], answer: 1 },
                    { q: "_____ candidates were interviewed on the same day.", choices: ["Both", "All", "Whole", "Each"], answer: 0 },
                    { q: "The team spent the _____ afternoon preparing the presentation.", choices: ["both", "all", "whole", "each"], answer: 2 },
                    { q: "_____ department must submit a monthly progress report.", choices: ["Both", "All", "Whole", "Each"], answer: 3 },
                    { q: "She read the _____ report before signing it.", choices: ["both", "all", "whole", "each"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: This / these / that / those", status: "completed",
                questions: [
                    { q: "_____ is the report I submitted last week.", choices: ["This", "These", "That", "Those"], answer: 2 },
                    { q: "_____ chairs need to be replaced soon.", choices: ["This", "These", "That", "Those"], answer: 1 },
                    { q: "Are _____ your keys on the desk?", choices: ["this", "these", "that", "those"], answer: 1 },
                    { q: "_____ meeting was very productive, don't you think?", choices: ["This", "These", "That", "Those"], answer: 0 },
                    { q: "_____ clients over there have been waiting for an hour.", choices: ["This", "These", "That", "Those"], answer: 3 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Another, other, either, neither (Cái khác, cũng không, mỗi)", status: "completed",
                questions: [
                    { q: "Could I have _____ copy of the contract, please?", choices: ["another", "other", "either", "neither"], answer: 0 },
                    { q: "_____ of the two options is acceptable to us.", choices: ["Another", "Other", "Either", "Neither"], answer: 2 },
                    { q: "We can use _____ the first or the second approach.", choices: ["another", "other", "either", "neither"], answer: 2 },
                    { q: "There are _____ ways to solve this problem.", choices: ["another", "other", "either", "neither"], answer: 1 },
                    { q: "_____ of the proposals met our requirements.", choices: ["Another", "Other", "Either", "Neither"], answer: 3 },
                ]
            }
        ]
    },
    {
        title: "Thì",
        items: [
            { type: "video", text: "Video bài giảng: Lý thuyết", status: "default" },
            {
                type: "exercise", text: "Luyện tập: Trắc nghiệm format TOEIC", status: "default",
                questions: [
                    { q: "The company _____ its annual report every December.", choices: ["publish", "publishes", "published", "publishing"], answer: 1 },
                    { q: "By the time the CEO arrived, the board members _____ for two hours.", choices: ["wait", "waited", "had been waiting", "were waiting"], answer: 2 },
                    { q: "The team _____ the project when the power went out.", choices: ["finish", "finished", "was finishing", "had finished"], answer: 2 },
                    { q: "We _____ the client next Thursday at 3 PM.", choices: ["meet", "met", "will meet", "had met"], answer: 2 },
                    { q: "She _____ for this company since 2015.", choices: ["works", "worked", "has worked", "had worked"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Present simple tense (Thì hiện tại đơn)", status: "default",
                questions: [
                    { q: "The store _____ at 9 AM every weekday.", choices: ["open", "opens", "opened", "opening"], answer: 1 },
                    { q: "Water _____ at 100 degrees Celsius.", choices: ["boil", "boils", "boiled", "boiling"], answer: 1 },
                    { q: "My colleagues usually _____ lunch at noon.", choices: ["has", "have", "had", "having"], answer: 1 },
                    { q: "The manager _____ the reports every Friday.", choices: ["review", "reviews", "reviewed", "reviewing"], answer: 1 },
                    { q: "I _____ to work by bus every day.", choices: ["go", "goes", "went", "going"], answer: 0 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Present continuous (Thì hiện tại tiếp diễn)", status: "default",
                questions: [
                    { q: "She _____ a report for the board meeting right now.", choices: ["write", "writes", "is writing", "has written"], answer: 2 },
                    { q: "The engineers _____ on a new software update this week.", choices: ["work", "worked", "are working", "have worked"], answer: 2 },
                    { q: "Why _____ so early today? The meeting is at 10.", choices: ["you leave", "do you leave", "are you leaving", "have you left"], answer: 2 },
                    { q: "We _____ our new marketing strategy this quarter.", choices: ["test", "tested", "are testing", "have tested"], answer: 2 },
                    { q: "Look! The CEO _____ to our department right now.", choices: ["come", "comes", "is coming", "came"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Past simple tense (Thì quá khứ đơn)", status: "default",
                questions: [
                    { q: "The company _____ a new office last year.", choices: ["open", "opens", "opened", "had opened"], answer: 2 },
                    { q: "She _____ the project before the deadline.", choices: ["finish", "finishes", "finished", "has finished"], answer: 2 },
                    { q: "We _____ our best client at the trade show.", choices: ["meet", "meets", "met", "have met"], answer: 2 },
                    { q: "The sales team _____ 20% more than last quarter.", choices: ["sell", "sells", "sold", "has sold"], answer: 2 },
                    { q: "He _____ a very convincing presentation.", choices: ["give", "gave", "gives", "has given"], answer: 1 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Present perfect tense (Thì hiện tại hoàn thành)", status: "default",
                questions: [
                    { q: "She _____ her report yet.", choices: ["didn't finish", "hasn't finished", "doesn't finish", "won't finish"], answer: 1 },
                    { q: "We _____ clients in over 50 countries so far.", choices: ["serve", "served", "have served", "are serving"], answer: 2 },
                    { q: "Have you _____ the latest financial results?", choices: ["see", "saw", "seeing", "seen"], answer: 3 },
                    { q: "The team _____ three new contracts this month.", choices: ["sign", "signed", "has signed", "was signing"], answer: 2 },
                    { q: "I _____ to Tokyo twice for business.", choices: ["go", "went", "have been", "was going"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Will vs. going to", status: "default",
                questions: [
                    { q: "Look at those clouds! It _____ rain soon.", choices: ["will", "is going to", "going to", "shall"], answer: 1 },
                    { q: "I think the economy _____ improve next year.", choices: ["will", "is going to", "goes to", "shall"], answer: 0 },
                    { q: "We _____ launch the product next spring. (already planned)", choices: ["will", "are going to", "go to", "shall"], answer: 1 },
                    { q: "Don't worry, I _____ help you with the presentation.", choices: ["will", "am going to", "go to", "shall"], answer: 0 },
                    { q: "They _____ expand to Asia next year. (decided plan)", choices: ["will", "are going to", "going to", "shall"], answer: 1 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Tenses: mix (Các thì: tổng hợp)", status: "default",
                questions: [
                    { q: "By the time she arrived, the meeting _____.", choices: ["already ended", "already ends", "had already ended", "is already ending"], answer: 2 },
                    { q: "He _____ at the company for five years before he was promoted.", choices: ["works", "worked", "has worked", "had worked"], answer: 3 },
                    { q: "Right now the team _____ the final report.", choices: ["prepares", "prepared", "is preparing", "has prepared"], answer: 2 },
                    { q: "She _____ three books since last year.", choices: ["writes", "wrote", "has written", "had written"], answer: 2 },
                    { q: "We _____ a new strategy next month.", choices: ["implement", "implemented", "are implementing", "will implement"], answer: 3 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Past perfect (Thì quá khứ hoàn thành)", status: "default",
                questions: [
                    { q: "When I arrived, the show _____.", choices: ["already starts", "already started", "had already started", "has already started"], answer: 2 },
                    { q: "She _____ the report before the meeting began.", choices: ["finishes", "finished", "has finished", "had finished"], answer: 3 },
                    { q: "They couldn't enter because they _____ their ID.", choices: ["forget", "forgot", "have forgotten", "had forgotten"], answer: 3 },
                    { q: "By 2020, the company _____ offices in 10 countries.", choices: ["opens", "opened", "has opened", "had opened"], answer: 3 },
                    { q: "He applied for the job after he _____ his degree.", choices: ["receives", "received", "has received", "had received"], answer: 3 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Past simple vs. present perfect (Quá khứ đơn vs. hiện tại hoàn thành)", status: "default",
                questions: [
                    { q: "She _____ to Paris three times. (up to now)", choices: ["went", "goes", "has been", "had been"], answer: 2 },
                    { q: "I _____ him at the airport last Tuesday.", choices: ["meet", "have met", "met", "had met"], answer: 2 },
                    { q: "The company _____ a new branch last year.", choices: ["opens", "has opened", "opened", "had opened"], answer: 2 },
                    { q: "Have you ever _____ sushi?", choices: ["eat", "ate", "eaten", "eating"], answer: 2 },
                    { q: "We _____ that client since 2019.", choices: ["know", "knew", "have known", "had known"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Modal verbs: present simple (Động từ khuyết thiếu: hiện tại đơn)", status: "default",
                questions: [
                    { q: "You _____ submit the form by 5 PM. (obligation)", choices: ["can", "may", "must", "might"], answer: 2 },
                    { q: "She _____ speak three languages fluently.", choices: ["must", "can", "should", "ought"], answer: 1 },
                    { q: "It _____ rain later — bring an umbrella.", choices: ["must", "can", "might", "shall"], answer: 2 },
                    { q: "You _____ smoke in the office. (prohibition)", choices: ["mustn't", "don't have to", "can", "might not"], answer: 0 },
                    { q: "She _____ work overtime — it's optional.", choices: ["must", "can't", "doesn't have to", "mustn't"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Modal verbs: past simple (Động từ khuyết thiếu: quá khứ đơn)", status: "default",
                questions: [
                    { q: "You _____ booked earlier — now it's sold out.", choices: ["can have", "should have", "must have", "might"], answer: 1 },
                    { q: "She didn't answer. She _____ been sleeping.", choices: ["can have", "must have", "should have", "could"], answer: 1 },
                    { q: "He _____ passed the exam — he studied so hard!", choices: ["must have", "can't have", "should", "might not have"], answer: 0 },
                    { q: "They _____ warned us about the delay.", choices: ["could have", "can", "must", "should"], answer: 0 },
                    { q: "I _____ left my keys at the office.", choices: ["can have", "must have", "should", "ought to have"], answer: 1 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Can / could (Có thể)", status: "default",
                questions: [
                    { q: "_____ you help me with this report?", choices: ["Must", "Should", "Could", "Ought"], answer: 2 },
                    { q: "When she was young, she _____ run very fast.", choices: ["can", "could", "must", "should"], answer: 1 },
                    { q: "_____ I use your phone for a moment?", choices: ["Must", "Should", "Can", "Ought"], answer: 2 },
                    { q: "This machine _____ be repaired — it's broken.", choices: ["can't", "must", "could", "should"], answer: 0 },
                    { q: "You _____ reach the manager directly by email.", choices: ["could", "must", "ought to", "should"], answer: 0 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: There is, there are (Có)", status: "default",
                questions: [
                    { q: "_____ a new policy announced this morning.", choices: ["There is", "There are", "There was", "There were"], answer: 0 },
                    { q: "_____ several issues with the current system.", choices: ["There is", "There are", "There has been", "There was"], answer: 1 },
                    { q: "_____ no time left to revise the proposal.", choices: ["There is", "There are", "There were", "There have been"], answer: 0 },
                    { q: "_____ many challenges during the project last year.", choices: ["There is", "There are", "There were", "There had"], answer: 2 },
                    { q: "_____ been a lot of progress since then.", choices: ["There is", "There are", "There has", "There was"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Must / have to / can (Phải / có thể)", status: "default",
                questions: [
                    { q: "All employees _____ wear a badge. (company rule)", choices: ["must", "can", "could", "might"], answer: 0 },
                    { q: "You _____ attend if you're busy. (not necessary)", choices: ["must", "can't", "don't have to", "mustn't"], answer: 2 },
                    { q: "She _____ work from home on Fridays. (permission)", choices: ["must", "can", "has to", "ought to"], answer: 1 },
                    { q: "I _____ finish this before Friday. (personal obligation)", choices: ["can", "might", "have to", "could"], answer: 2 },
                    { q: "Visitors _____ sign in at the front desk.", choices: ["can", "might", "must", "could"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Should (Nên)", status: "default",
                questions: [
                    { q: "You _____ check your email before the meeting.", choices: ["must", "should", "can", "might"], answer: 1 },
                    { q: "She _____ have sent the report earlier.", choices: ["could", "should", "must", "can"], answer: 1 },
                    { q: "Employees _____ be treated fairly.", choices: ["should", "can", "might", "shall"], answer: 0 },
                    { q: "The manager _____ explain the new policy more clearly.", choices: ["can", "should", "must", "could"], answer: 1 },
                    { q: "You _____ worry about small details. (advice)", choices: ["should", "shouldn't", "must", "can"], answer: 1 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Modal verbs: mix (Động từ khuyết thiếu: tổng hợp)", status: "default",
                questions: [
                    { q: "You _____ park here — it's a fire lane.", choices: ["don't have to", "might not", "mustn't", "shouldn't"], answer: 2 },
                    { q: "She _____ finished early. The light was still on.", choices: ["can't have", "should have", "must have", "could"], answer: 2 },
                    { q: "We _____ submit this tomorrow. (we have a choice)", choices: ["must", "can", "ought to", "have to"], answer: 1 },
                    { q: "You _____ always double-check your work.", choices: ["should", "must not", "can't", "might not"], answer: 0 },
                    { q: "_____ you speak Japanese? (asking about ability)", choices: ["Should", "Must", "Can", "Ought"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Be, have, do: mix (Be, have, do: tổng hợp)", status: "default",
                questions: [
                    { q: "She _____ not finished the task yet.", choices: ["is", "are", "has", "have"], answer: 2 },
                    { q: "_____ they prepared for the presentation?", choices: ["Is", "Are", "Has", "Have"], answer: 3 },
                    { q: "The report _____ due on Friday.", choices: ["is", "are", "has", "have"], answer: 0 },
                    { q: "We _____ not receive the documents in time.", choices: ["is", "are", "did", "had"], answer: 2 },
                    { q: "She _____ a meeting with the client at noon.", choices: ["is", "are", "has", "have"], answer: 2 },
                ]
            }
        ]
    },
    {
        title: "Thể",
        items: [
            { type: "video", text: "Video bài giảng: Lý thuyết", status: "default" },
            {
                type: "exercise", text: "Luyện tập: Trắc nghiệm format TOEIC", status: "default",
                questions: [
                    { q: "The report _____ by the committee last Tuesday.", choices: ["review", "reviewed", "was reviewed", "has reviewed"], answer: 2 },
                    { q: "New policies _____ to improve workplace safety.", choices: ["introduce", "introduced", "were introduced", "have introduced"], answer: 2 },
                    { q: "The bridge _____ by a well-known architect.", choices: ["designs", "is designed", "was designed", "designed"], answer: 2 },
                    { q: "The package _____ to your address tomorrow.", choices: ["delivers", "delivered", "will be delivered", "is delivering"], answer: 2 },
                    { q: "Mistakes _____ if the team had followed the guidelines.", choices: ["avoid", "avoided", "could have been avoided", "were avoiding"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Passive voice (Thể bị động)", status: "default",
                questions: [
                    { q: "The new software _____ by our IT team.", choices: ["develop", "developed", "was developed", "has developing"], answer: 2 },
                    { q: "The annual conference _____ next month.", choices: ["holds", "held", "will be held", "is holding"], answer: 2 },
                    { q: "The error _____ before the report was sent.", choices: ["corrects", "is corrected", "had been corrected", "correcting"], answer: 2 },
                    { q: "Products _____ before they leave the factory.", choices: ["inspect", "inspects", "inspected", "are inspected"], answer: 3 },
                    { q: "She _____ to attend the board meeting.", choices: ["invites", "invited", "was invited", "is inviting"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Have something done (Hoàn thành điều gì đó)", status: "default",
                questions: [
                    { q: "We need to _____ the machines _____ before the audit.", choices: ["have / check", "have / checked", "get / check", "get / checking"], answer: 1 },
                    { q: "She _____ her car repaired at the garage yesterday.", choices: ["has had", "had", "got", "had has"], answer: 1 },
                    { q: "I'm going to _____ my suit _____ for the presentation.", choices: ["have / press", "have / pressed", "make / pressed", "get / pressing"], answer: 1 },
                    { q: "The CEO _____ the report prepared by an external consultant.", choices: ["has had", "has", "had", "got"], answer: 0 },
                    { q: "We usually _____ the office cleaned every Friday.", choices: ["make", "let", "have", "do"], answer: 2 },
                ]
            }
        ]
    },
    {
        title: "Động từ nguyên mẫu",
        items: [
            { type: "video", text: "Video bài giảng: Lý thuyết", status: "default" },
            {
                type: "exercise", text: "Luyện tập: Make / let", status: "default",
                questions: [
                    { q: "The manager _____ the team work overtime last Friday.", choices: ["let", "made", "allowed", "had"], answer: 1 },
                    { q: "She _____ her assistant reschedule all the meetings.", choices: ["let", "made", "allowed", "had"], answer: 0 },
                    { q: "The noise from construction _____ it hard to concentrate.", choices: ["let", "made", "allowed", "got"], answer: 1 },
                    { q: "The new rule _____ employees leave early on Fridays.", choices: ["let", "made", "forced", "caused"], answer: 0 },
                    { q: "The cold weather _____ everyone want to stay inside.", choices: ["let", "made", "allowed", "got"], answer: 1 },
                ]
            }
        ]
    },
    {
        title: "Động từ nguyên mẫu có 'to'",
        items: [
            { type: "video", text: "Video bài giảng: Lý thuyết", status: "default" },
            {
                type: "exercise", text: "Luyện tập: Trắc nghiệm format TOEIC", status: "default",
                questions: [
                    { q: "The manager decided _____ the meeting until next week.", choices: ["postpone", "postponing", "to postpone", "postponed"], answer: 2 },
                    { q: "She agreed _____ the project at no extra cost.", choices: ["complete", "completing", "to complete", "completed"], answer: 2 },
                    { q: "They expect _____ the contract by the end of this month.", choices: ["sign", "signing", "to sign", "signed"], answer: 2 },
                    { q: "The team failed _____ the deadline.", choices: ["meet", "meeting", "to meet", "met"], answer: 2 },
                    { q: "He promised _____ the report on time.", choices: ["submit", "submitting", "to submit", "submitted"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Verb + object + to infinitive (Động từ + tân ngữ + ĐT nguyên mẫu có 'to')", status: "default",
                questions: [
                    { q: "The director asked _____ _____ the budget report.", choices: ["her / review", "her / to review", "her / reviewing", "her / reviewed"], answer: 1 },
                    { q: "We would like _____ _____ our new office.", choices: ["you / visit", "you / to visit", "you / visiting", "you / visited"], answer: 1 },
                    { q: "The teacher encouraged _____ _____ more practice exercises.", choices: ["us / do", "us / to do", "us / doing", "us / done"], answer: 1 },
                    { q: "They invited _____ _____ the product launch.", choices: ["him / attend", "him / to attend", "him / attending", "him / attended"], answer: 1 },
                    { q: "She advised _____ _____ a second opinion.", choices: ["me / get", "me / to get", "me / getting", "me / got"], answer: 1 },
                ]
            }
        ]
    },
    {
        title: "Danh động từ",
        items: [
            { type: "video", text: "Video bài giảng: Lý thuyết", status: "default" },
            {
                type: "exercise", text: "Luyện tập: Trắc nghiệm format TOEIC", status: "default",
                questions: [
                    { q: "The company considered _____ to a larger office space.", choices: ["move", "to move", "moving", "moved"], answer: 2 },
                    { q: "She enjoys _____ new programming languages.", choices: ["learn", "to learn", "learning", "learned"], answer: 2 },
                    { q: "He denied _____ any documents from the office.", choices: ["take", "to take", "taking", "taken"], answer: 2 },
                    { q: "The team finished _____ the annual report last night.", choices: ["prepare", "to prepare", "preparing", "prepared"], answer: 2 },
                    { q: "They suggested _____ a team-building event this quarter.", choices: ["organize", "to organize", "organizing", "organized"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Gerund vs. infinitive (Danh động từ vs. động từ nguyên mẫu)", status: "default",
                questions: [
                    { q: "I stopped _____ coffee to improve my sleep quality.", choices: ["drink", "to drink", "drinking", "drunk"], answer: 2 },
                    { q: "She stopped _____ her colleague on the way out.", choices: ["greet", "to greet", "greeting", "greeted"], answer: 1 },
                    { q: "I remember _____ the email, but it seems it didn't arrive.", choices: ["send", "to send", "sending", "sent"], answer: 2 },
                    { q: "Please remember _____ the report before noon.", choices: ["send", "to send", "sending", "sent"], answer: 1 },
                    { q: "They tried _____ the budget, but it wasn't enough.", choices: ["increase", "to increase", "increasing", "increased"], answer: 1 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Verb patterns: mix (Các dạng động từ: tổng hợp)", status: "default",
                questions: [
                    { q: "She avoided _____ difficult questions during the interview.", choices: ["answer", "to answer", "answering", "answered"], answer: 2 },
                    { q: "The team managed _____ the project on time.", choices: ["complete", "to complete", "completing", "completed"], answer: 1 },
                    { q: "He kept _____ the same mistake during the presentation.", choices: ["make", "to make", "making", "made"], answer: 2 },
                    { q: "They want _____ a new branch in Singapore.", choices: ["open", "to open", "opening", "opened"], answer: 1 },
                    { q: "Would you mind _____ the window? It's hot in here.", choices: ["open", "to open", "opening", "opened"], answer: 2 },
                ]
            }
        ]
    },
    {
        title: "Phân từ và cấu trúc phân từ",
        items: [
            { type: "video", text: "Video bài giảng: Lý thuyết", status: "default" },
            {
                type: "exercise", text: "Luyện tập: Trắc nghiệm format TOEIC", status: "default",
                questions: [
                    { q: "The report _____ by the team was very detailed.", choices: ["prepare", "prepared", "preparing", "to prepare"], answer: 1 },
                    { q: "_____ the documents, she noticed an error.", choices: ["Check", "Checked", "Checking", "To checked"], answer: 2 },
                    { q: "The results _____ from the experiment were surprising.", choices: ["obtain", "obtained", "obtaining", "to obtain"], answer: 1 },
                    { q: "_____ from a major university, she got the job easily.", choices: ["Graduate", "Graduated", "Graduating", "To graduate"], answer: 1 },
                    { q: "The manager, _____ with the results, congratulated the team.", choices: ["please", "pleased", "pleasing", "to please"], answer: 1 },
                ]
            }
        ]
    },
    {
        title: "Cấu trúc phân từ",
        items: [
            {
                type: "exercise", text: "Luyện tập: Trắc nghiệm format TOEIC", status: "default",
                questions: [
                    { q: "_____ all options, the board chose the safest plan.", choices: ["Consider", "Considered", "Considering", "To consider"], answer: 2 },
                    { q: "The letter _____ yesterday was from the CEO.", choices: ["receive", "received", "receiving", "to receive"], answer: 1 },
                    { q: "_____ in the meeting, she had no idea what had been decided.", choices: ["Not include", "Not included", "Not including", "To not include"], answer: 1 },
                    { q: "The project _____ in time impressed the client.", choices: ["complete", "completed", "completing", "to complete"], answer: 1 },
                    { q: "_____ her mistake, she apologized immediately.", choices: ["Realize", "Realized", "Realizing", "To realize"], answer: 2 },
                ]
            }
        ]
    },
    {
        title: "Mệnh đề quan hệ",
        items: [
            { type: "video", text: "Video bài giảng: Lý thuyết", status: "default" },
            {
                type: "exercise", text: "Luyện tập: Trắc nghiệm format TOEIC", status: "default",
                questions: [
                    { q: "The employee _____ received the award is from our team.", choices: ["who", "whom", "which", "whose"], answer: 0 },
                    { q: "The report _____ was submitted yesterday needs revision.", choices: ["who", "whom", "which", "whose"], answer: 2 },
                    { q: "The manager _____ team won the competition was promoted.", choices: ["who", "whom", "which", "whose"], answer: 3 },
                    { q: "The office _____ we had our meeting is on the 5th floor.", choices: ["who", "whom", "where", "whose"], answer: 2 },
                    { q: "The candidate _____ we interviewed yesterday was impressive.", choices: ["who", "whom", "which", "whose"], answer: 1 },
                    { q: "This is the contract _____ was signed last week.", choices: ["who", "whom", "which", "whose"], answer: 2 },
                    { q: "The day _____ the merger was announced surprised everyone.", choices: ["who", "which", "when", "where"], answer: 2 },
                    { q: "She is the consultant _____ advice we always trust.", choices: ["who", "whom", "which", "whose"], answer: 3 },
                    { q: "The reason _____ he resigned was never made clear.", choices: ["which", "why", "when", "where"], answer: 1 },
                    { q: "He is the person to _____ I spoke on the phone.", choices: ["who", "whom", "which", "whose"], answer: 1 },
                ]
            }
        ]
    },
    {
        title: "Câu điều kiện",
        items: [
            { type: "video", text: "Video bài giảng: Lý thuyết", status: "default" },
            {
                type: "exercise", text: "Luyện tập: Trắc nghiệm format TOEIC", status: "default",
                questions: [
                    { q: "If the project is delayed, the client _____ unhappy.", choices: ["is", "will be", "would be", "would have been"], answer: 1 },
                    { q: "If she _____ the bonus, she would buy new equipment.", choices: ["receives", "received", "had received", "receive"], answer: 1 },
                    { q: "If they had left earlier, they _____ the flight.", choices: ["catch", "will catch", "would catch", "would have caught"], answer: 3 },
                    { q: "If I were the manager, I _____ a different strategy.", choices: ["choose", "will choose", "would choose", "would have chosen"], answer: 2 },
                    { q: "Unless you _____ harder, you won't meet the target.", choices: ["work", "worked", "will work", "would work"], answer: 0 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: First conditional (Điều kiện loại 1)", status: "default",
                questions: [
                    { q: "If it _____, we will cancel the outdoor event.", choices: ["rain", "rains", "rained", "will rain"], answer: 1 },
                    { q: "If she _____ the interview, she will get the job.", choices: ["pass", "passes", "passed", "will pass"], answer: 1 },
                    { q: "We will lose the contract if we _____ reduce the price.", choices: ["don't", "won't", "didn't", "wouldn't"], answer: 0 },
                    { q: "If they _____ extra staff, they will meet the deadline.", choices: ["hire", "hired", "will hire", "would hire"], answer: 0 },
                    { q: "If the system _____, contact IT immediately.", choices: ["crash", "crashes", "crashed", "will crash"], answer: 1 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Second and third conditional (Điều kiện loại 2 và 3)", status: "default",
                questions: [
                    { q: "If I _____ the CEO, I would restructure the company.", choices: ["am", "was", "were", "had been"], answer: 2 },
                    { q: "She would have finished on time if she _____ started earlier.", choices: ["have", "had", "has", "having"], answer: 1 },
                    { q: "If they _____ better planning, the project wouldn't have failed.", choices: ["had", "have", "had had", "has had"], answer: 2 },
                    { q: "He would get promoted if he _____ more initiative.", choices: ["shows", "showed", "has shown", "had shown"], answer: 1 },
                    { q: "If we had signed the deal, we _____ much more profit.", choices: ["make", "made", "would make", "would have made"], answer: 3 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Wish, unless, if only, if not (Ước gì, trừ khi, nếu chỉ, nếu không)", status: "default",
                questions: [
                    { q: "I wish I _____ more experience when I applied.", choices: ["have", "had", "had had", "would have"], answer: 2 },
                    { q: "_____ you submit this today, we'll miss the deadline.", choices: ["If", "Unless", "Until", "Though"], answer: 1 },
                    { q: "If only she _____ us sooner about the problem.", choices: ["tell", "tells", "told", "had told"], answer: 3 },
                    { q: "He wishes he _____ speak a second language.", choices: ["can", "could", "would", "should"], answer: 1 },
                    { q: "_____ you are available, please attend the meeting.", choices: ["Unless", "If", "Until", "So"], answer: 1 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Conditionals: mix (Điều kiện: tổng hợp)", status: "default",
                questions: [
                    { q: "If she _____ the training, she would be more confident.", choices: ["takes", "took", "had taken", "will take"], answer: 1 },
                    { q: "If the budget increases, we _____ hire more staff.", choices: ["can", "could", "would", "had"], answer: 0 },
                    { q: "I wish I _____ to the conference last year.", choices: ["go", "went", "have gone", "had gone"], answer: 3 },
                    { q: "Unless the weather improves, the event _____.", choices: ["cancel", "cancels", "will be cancelled", "would cancel"], answer: 2 },
                    { q: "If he _____ checked the contract, he wouldn't have made that error.", choices: ["carefully", "careful", "had carefully", "has carefully"], answer: 2 },
                ]
            }
        ]
    },
    {
        title: "Cấu trúc so sánh",
        items: [
            { type: "video", text: "Video bài giảng: Lý thuyết", status: "default" },
            {
                type: "exercise", text: "Luyện tập: Trắc nghiệm format TOEIC", status: "default",
                questions: [
                    { q: "This quarter's results are _____ than last quarter's.", choices: ["good", "well", "better", "best"], answer: 2 },
                    { q: "Of all the proposals, hers was the _____.", choices: ["more creative", "most creative", "creative", "creatively"], answer: 1 },
                    { q: "The new model is _____ efficient as the old one.", choices: ["more", "most", "as", "so"], answer: 2 },
                    { q: "The taller the building, _____ the maintenance cost.", choices: ["higher", "the higher", "the highest", "high"], answer: 1 },
                    { q: "Our service is _____ better than our competitors'.", choices: ["far", "very", "most", "much more"], answer: 0 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Comparative / superlative adjectives (Tính từ so sánh hơn / so sánh nhất)", status: "default",
                questions: [
                    { q: "She is _____ candidate we have interviewed so far.", choices: ["more qualified", "the most qualified", "most qualified", "as qualified as"], answer: 1 },
                    { q: "This report is _____ than the previous one.", choices: ["detailed", "more detailed", "most detailed", "the most detail"], answer: 1 },
                    { q: "Their product is _____ in the market right now.", choices: ["popular", "more popular", "the most popular", "as popular as"], answer: 2 },
                    { q: "The _____ the deadline, the faster we need to work.", choices: ["near", "nearer", "nearest", "the nearest"], answer: 1 },
                    { q: "Our new office is _____ the old one.", choices: ["larger than", "the largest", "larger as", "most large than"], answer: 0 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Comparative / superlative adverbs (Trạng từ so sánh hơn / so sánh nhất)", status: "default",
                questions: [
                    { q: "She works _____ than anyone else on the team.", choices: ["hard", "harder", "hardest", "the hardest"], answer: 1 },
                    { q: "Of all the staff, he responds to emails _____.", choices: ["quick", "quicker", "most quickly", "the most quickly"], answer: 3 },
                    { q: "The new software runs _____ than the previous version.", choices: ["fast", "faster", "fastest", "the fastest"], answer: 1 },
                    { q: "She presented _____ confidently than she did last time.", choices: ["more", "most", "as", "the most"], answer: 0 },
                    { q: "He completed the task _____ of all the team members.", choices: ["more efficiently", "efficiency", "most efficiently", "as efficiently"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Than vs then", status: "default",
                questions: [
                    { q: "The results were better _____ expected.", choices: ["then", "than", "as", "so"], answer: 1 },
                    { q: "First review the draft, _____ submit it.", choices: ["then", "than", "as", "so"], answer: 0 },
                    { q: "She earns more _____ her colleagues.", choices: ["then", "than", "as", "so"], answer: 1 },
                    { q: "Finish the analysis and _____ present it to the board.", choices: ["then", "than", "as", "so"], answer: 0 },
                    { q: "The market is more competitive now _____ it was five years ago.", choices: ["then", "than", "as", "so"], answer: 1 },
                ]
            }
        ]
    },
    {
        title: "Trạng từ",
        items: [
            { type: "video", text: "Video bài giảng: Lý thuyết", status: "default" },
            {
                type: "exercise", text: "Luyện tập: Trắc nghiệm format TOEIC", status: "default",
                questions: [
                    { q: "She completed the project _____ ahead of schedule.", choices: ["impressive", "impressed", "impressively", "impression"], answer: 2 },
                    { q: "The CEO spoke _____ at the annual conference.", choices: ["confident", "confidence", "confide", "confidently"], answer: 3 },
                    { q: "Please read the contract _____ before signing.", choices: ["care", "careful", "carefulness", "carefully"], answer: 3 },
                    { q: "Sales have _____ increased this quarter.", choices: ["significant", "significance", "significantly", "signify"], answer: 2 },
                    { q: "He _____ met the targets this quarter without overtime.", choices: ["easy", "ease", "easily", "easier"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Positions of adverbs in sentences (Vị trí của trạng từ trong câu)", status: "default",
                questions: [
                    { q: "She _____ submits her reports on time. (always)", choices: ["submits always", "always submits", "is always submits", "always submitting"], answer: 1 },
                    { q: "The manager _____ arrives early. (usually)", choices: ["arrives usually", "usually arrives", "usually arrive", "is usually arriving"], answer: 1 },
                    { q: "He has _____ worked here for three years.", choices: ["already", "yet", "ever", "still"], answer: 0 },
                    { q: "They _____ finished the report when I called.", choices: ["have just", "had just", "just have", "just had"], answer: 1 },
                    { q: "She speaks English _____ for a non-native speaker.", choices: ["very well", "very good", "very nice", "very fine"], answer: 0 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Adjective or adverb? (Tính từ hay trạng từ?)", status: "default",
                questions: [
                    { q: "The presentation was _____ prepared.", choices: ["good", "well", "nice", "fine"], answer: 1 },
                    { q: "He is a _____ speaker.", choices: ["fluent", "fluently", "fluency", "fluented"], answer: 0 },
                    { q: "The team worked _____ under pressure.", choices: ["efficient", "efficiency", "efficiently", "efficiencies"], answer: 2 },
                    { q: "She looked _____ after the long trip.", choices: ["tiredly", "tired", "tire", "tiring"], answer: 1 },
                    { q: "He answered the client's questions _____ .", choices: ["polite", "politeness", "politely", "impolite"], answer: 2 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Adjectives and adverbs: mix (Tính từ và trạng từ: tổng hợp)", status: "default",
                questions: [
                    { q: "The new policy was _____ implemented across all departments.", choices: ["quick", "quickly", "quickness", "quicker"], answer: 1 },
                    { q: "It was a _____ decision that saved the company money.", choices: ["wise", "wisely", "wisdom", "wiser"], answer: 0 },
                    { q: "She handled the complaint _____ and professionally.", choices: ["calm", "calmness", "calmly", "calmer"], answer: 2 },
                    { q: "The results look _____ for the upcoming quarter.", choices: ["promise", "promising", "promised", "promisingly"], answer: 1 },
                    { q: "He has a _____ understanding of financial markets.", choices: ["deep", "deeply", "depth", "deepen"], answer: 0 },
                ]
            }
        ]
    },
    {
        title: "Giới từ",
        items: [
            { type: "video", text: "Video bài giảng: Lý thuyết", status: "default" },
            {
                type: "exercise", text: "Luyện tập: Trắc nghiệm format TOEIC", status: "default",
                questions: [
                    { q: "The meeting is scheduled _____ Monday morning.", choices: ["in", "on", "at", "by"], answer: 1 },
                    { q: "She has been working here _____ 2018.", choices: ["since", "for", "during", "by"], answer: 0 },
                    { q: "The office is located _____ the third floor.", choices: ["in", "on", "at", "by"], answer: 1 },
                    { q: "Please submit your application _____ Friday.", choices: ["until", "by", "since", "for"], answer: 1 },
                    { q: "He traveled _____ business last week.", choices: ["for", "on", "at", "by"], answer: 1 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Prepositions of time (Giới từ chỉ thời gian)", status: "default",
                questions: [
                    { q: "The project started _____ January.", choices: ["in", "on", "at", "by"], answer: 0 },
                    { q: "The meeting is _____ 3 PM.", choices: ["in", "on", "at", "by"], answer: 2 },
                    { q: "She works _____ night sometimes.", choices: ["in", "on", "at", "by"], answer: 2 },
                    { q: "We have been partners _____ five years.", choices: ["since", "for", "during", "by"], answer: 1 },
                    { q: "He joined the company _____ 2020.", choices: ["in", "on", "at", "since"], answer: 0 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Prepositions of place (Giới từ chỉ địa điểm)", status: "default",
                questions: [
                    { q: "The documents are _____ the desk.", choices: ["in", "on", "at", "by"], answer: 1 },
                    { q: "She is waiting _____ the reception.", choices: ["in", "on", "at", "by"], answer: 2 },
                    { q: "The files are stored _____ the cabinet.", choices: ["in", "on", "at", "by"], answer: 0 },
                    { q: "There is a café _____ the office building.", choices: ["near", "nearby the", "at near", "on near"], answer: 0 },
                    { q: "The headquarters is _____ New York.", choices: ["in", "on", "at", "by"], answer: 0 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Prepositions of direction (Giới từ chỉ hướng)", status: "default",
                questions: [
                    { q: "Go _____ the corridor and turn left.", choices: ["along", "above", "below", "around"], answer: 0 },
                    { q: "She walked _____ the building to reach the parking lot.", choices: ["around", "above", "into", "over"], answer: 0 },
                    { q: "The package was sent _____ the company headquarters.", choices: ["to", "into", "over", "along"], answer: 0 },
                    { q: "They flew _____ the Pacific on their way to Japan.", choices: ["over", "under", "through", "along"], answer: 0 },
                    { q: "Please go _____ the door on your right.", choices: ["through", "along", "above", "beside"], answer: 0 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Prepositions: other (Giới từ: khác)", status: "default",
                questions: [
                    { q: "The decision was made _____ the board's approval.", choices: ["without", "with", "by", "for"], answer: 0 },
                    { q: "She is responsible _____ the marketing team.", choices: ["about", "of", "for", "to"], answer: 2 },
                    { q: "The company is known _____ its great customer service.", choices: ["about", "of", "for", "with"], answer: 2 },
                    { q: "He specializes _____ financial analysis.", choices: ["at", "in", "on", "about"], answer: 1 },
                    { q: "She is interested _____ the new position.", choices: ["at", "of", "on", "in"], answer: 3 },
                ]
            },
            {
                type: "exercise", text: "Luyện tập: Prepositions: mix (Giới từ: tổng hợp)", status: "default",
                questions: [
                    { q: "The report will be ready _____ the end of the week.", choices: ["at", "in", "by", "on"], answer: 2 },
                    { q: "She congratulated him _____ his promotion.", choices: ["about", "of", "on", "for"], answer: 2 },
                    { q: "The team consists _____ five members.", choices: ["of", "from", "in", "with"], answer: 0 },
                    { q: "He was accused _____ misusing company funds.", choices: ["about", "of", "for", "with"], answer: 1 },
                    { q: "They agreed _____ the new terms of the contract.", choices: ["about", "with", "on", "of"], answer: 2 },
                ]
            }
        ]
    },
    {
        title: "Liên từ",
        items: [
            { type: "video", text: "Video bài giảng: Lý thuyết", status: "default" },
            {
                type: "exercise", text: "Luyện tập: Trắc nghiệm format TOEIC", status: "default",
                questions: [
                    { q: "We can reduce costs _____ improve efficiency at the same time.", choices: ["and", "but", "or", "so"], answer: 0 },
                    { q: "She is experienced _____ she lacks the required certificate.", choices: ["and", "but", "so", "because"], answer: 1 },
                    { q: "_____ he failed the first attempt, he tried again.", choices: ["Because", "Although", "So", "And"], answer: 1 },
                    { q: "The team worked hard, _____ they finished early.", choices: ["but", "however", "so", "although"], answer: 2 },
                    { q: "You must sign the form _____ we can process your request.", choices: ["or", "but", "before", "so that"], answer: 3 },
                    { q: "She called _____ she heard the news.", choices: ["because", "as soon as", "although", "unless"], answer: 1 },
                    { q: "Submit the report _____ the deadline passes.", choices: ["after", "before", "because", "although"], answer: 1 },
                    { q: "We will proceed _____ we receive your approval.", choices: ["until", "while", "once", "before"], answer: 2 },
                    { q: "_____ the meeting ran long, no final decision was made.", choices: ["Because", "Although", "So", "Then"], answer: 1 },
                    { q: "He was promoted _____ his excellent performance.", choices: ["because of", "although", "however", "so that"], answer: 0 },
                ]
            }
        ]
    }
];

