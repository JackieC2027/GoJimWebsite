import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
        import { getDatabase, ref, onValue, push, set, serverTimestamp, child, get } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js';
        
        // Firebase project configuration details
        const firebaseConfig = {
            apiKey: "AIzaSyC3Vuf4ma6wKrrphF7tbmd2ih0Qr28w2sM",
            authDomain: "gojim-26cbc.firebaseapp.com",
            projectId: "gojim-26cbc",
            storageBucket: "gojim-26cbc.appspot.com",
            messagingSenderId: "491730952662",
            appId: "1:491730952662:web:2f430530eef2e0ebfbc477",
            measurementId: "G-C5KT1RZJYS"
        };

        // Initializing the Firebase app and database objects
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);

        // Function to submit a form to create a new thread in the database
        window.submitForm = async function(event) {
            event.preventDefault();

            // Getting the thread title and message from the form
            const threadTitle = document.getElementById("thread_title").value;
            const threadMessage = document.getElementById("thread_message").value;

            // Pushing the thread data to the database
            try {
                await push(ref(db, "threads/"), {
                    title: threadTitle,
                    message: threadMessage,
                    timestamp: serverTimestamp(),
                    count: 0
                });
                alert("Thread created");
                // Resetting the form after submission
                document.getElementById("createThreadForm").reset();
            } catch (error) {
                alert("Error: " + error.message);
            }
        };

        // Function to display threads from the database in the HTML page
        function displayThreads(snapshot) {
            const threadsContainer = document.getElementById("threads-container");
            threadsContainer.innerHTML = ""; 

            // Looping through all the threads in the database and creating HTML elements to display them
            snapshot.forEach((childSnapshot) => {
                const thread = childSnapshot.val();
                const threadKey = childSnapshot.key;
                const threadElement = 
                    `<div class="thread-container" data-thread-key="${threadKey}">
                        <div class="thread">
                            <div class="thread-title">${thread.title}</div>
                            <div class="thread-message">${thread.message}</div>
                            <button class="increment-button">+</button>
                            <p class="counter-value">${thread.count}</p>
                            <button class="decrement-button">-</button>
                            <button class="reply-btn">Reply</button>
                            <input type="text" class="reply-textbox" style="display:none">
                            <button class="submit-reply" style="display:none">Submit</button>
                                                    <div class="replies"></div>
                    </div>
                </div>`;
            // Appending the thread HTML elements to the threads container in the HTML page
            threadsContainer.insertAdjacentHTML('beforeend', threadElement);
        });

        // Adding event listeners for increment, decrement, reply, and submit reply buttons
        document.querySelectorAll(".increment-button").forEach((button) => {
            button.addEventListener("click", async () => {
                const threadKey = button.closest(".thread-container").getAttribute("data-thread-key");
                const countRef = ref(db, `threads/${threadKey}/count`);
                const countSnapshot = await get(countRef);
                const newCount = countSnapshot.val() + 1;
                await set(countRef, newCount);
            });
        });

        document.querySelectorAll(".decrement-button").forEach((button) => {
            button.addEventListener("click", async () => {
                const threadKey = button.closest(".thread-container").getAttribute("data-thread-key");
                const countRef = ref(db, `threads/${threadKey}/count`);
                const countSnapshot = await get(countRef);
                const newCount = countSnapshot.val() - 1;
                await set(countRef, newCount);
            });
        });

        document.querySelectorAll(".reply-btn").forEach((button) => {
            button.addEventListener("click", () => {
                const thread = button.closest(".thread");
                const replyTextbox = thread.querySelector(".reply-textbox");
                const submitReply = thread.querySelector(".submit-reply");
                replyTextbox.style.display = replyTextbox.style.display === "none" ? "block" : "none";
                submitReply.style.display = submitReply.style.display === "none" ? "block" : "none";
            });
        });

        document.querySelectorAll(".submit-reply").forEach((button) => {
            button.addEventListener("click", async () => {
                const thread = button.closest(".thread");
                const threadKey = thread.closest(".thread-container").getAttribute("data-thread-key");
                const replyText = thread.querySelector(".reply-textbox").value;

                try {
                    await push(ref(db, `threads/${threadKey}/replies/`), {
                        message: replyText,
                        timestamp: serverTimestamp()
                    });
                    alert("Reply submitted");
                    thread.querySelector(".reply-textbox").value = "";

                    // Create a new reply element and append it to the replies container
                    const replyElement = `
                        <div class="reply">
                            <p>${replyText}</p>
                        </div>
                    `;
                    const repliesContainer = thread.querySelector(".replies");
                    repliesContainer.insertAdjacentHTML('beforeend', replyElement);
                } catch (error) {
                    alert("Error: " + error.message);
                }
            });
        });

        // Displaying replies for each thread
        snapshot.forEach(async (childSnapshot, index) => {
            const threadKey = childSnapshot.key;
            const repliesRef = ref(db, `threads/${threadKey}/replies/`);
            const repliesSnapshot = await get(repliesRef);

            if (repliesSnapshot.exists()) {
                const repliesContainer = document.querySelectorAll(".replies")[index];
                repliesSnapshot.forEach((replySnapshot) => {
                    const reply = replySnapshot.val();
                    const replyElement = `
                        <div class="reply">
                            <p>${reply.message}</p>
                        </div>
                    `;
                    repliesContainer.innerHTML += replyElement;
                });
            }
        });
    }

    // Adding a listener to the database reference for "threads/" and calling the displayThreads function whenever the value of the reference changes.
    onValue(ref(db, "threads/"), displayThreads);