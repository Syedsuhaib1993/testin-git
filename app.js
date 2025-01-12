// Initialize Supabase Client
const supabaseUrl = 'https://saqsepgxtvpgiigybsvd.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhcXNlcGd4dHZwZ2lpZ3lic3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYwMTkzMzAsImV4cCI6MjA1MTU5NTMzMH0.lc9v_HyA9XkC_JoHNjpa4kIqts2hrkq_L6zJXfYNyQo";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// Form Elements
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const switchSignup = document.getElementById('switchSignUp');
const switchLogin = document.getElementById('switchLogin');

// Functions to switch between forms
switchSignup.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
});

switchLogin.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
});

// Signup Form Elements
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupBtn = document.getElementById('signup-btn');

// Signup Function
signupBtn.addEventListener('click', async () => {
    const email = signupEmail.value;
    const password = signupPassword.value;

    if (!email || !password) {
        alert("Please fill in both email and password");
        return;
    }

    const { data, error } = await supabaseClient.auth.signUp({ email, password });

    if (error) {
        alert(`Error: ${error.message}`);
    } else {
        alert('Signup successful');
        window.location.href = 'home.html';
        console.log(data);
    }
});

// Login Form Elements
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginBtn = document.getElementById("login-button");

// Login Function
loginBtn.addEventListener("click", async () => {
    const email = loginEmail.value;
    const password = loginPassword.value;

    if (!email || !password) {
        alert("Please fill in both email and password");
        return;
    }

    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

    if (error) {
        alert(`Login Error: ${error.message}`);
        console.log(error);
    } else {
        alert('Login successful');
        window.location.href = 'home.html';
    }
});
