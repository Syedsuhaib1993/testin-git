// Initialize Supabase Client
// const supabaseUrl = "https://saqsepgxtvpgiigybsvd.supabase.co";
// const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhcXNlcGd4dHZwZ2lpZ3lic3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYwMTkzMzAsImV4cCI6MjA1MTU5NTMzMH0.lc9v_HyA9XkC_JoHNjpa4kIqts2hrkq_L6zJXfYNyQo";

 const supabaseUrl = "https://saqsepgxtvpgiigybsvd.supabase.co";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhcXNlcGd4dHZwZ2lpZ3lic3ZkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjAxOTMzMCwiZXhwIjoyMDUxNTk1MzMwfQ.lQ4iwMm7_nI0UwEUBuHq54X9-keZ3tvqBqSRQ2waGGg";
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
const signup_user_name = document.getElementById("signup-name")
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupBtn = document.getElementById('signup-btn');

// Signup Function
signupBtn.addEventListener('click', async () => {
    const user_name =signup_user_name.value
    const email = signupEmail.value;
    const password = signupPassword.value;
    

    if (!email || !password || !user_name ) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill in both fields!",
          });
        return;
    }

    const { data, error } = await supabaseClient.auth.signUp({ email, password , user_name });
    if (error) {
        alert(`Error: ${error.message}`);
    } else {
        // alert('Signup successful');
        Swal.fire("Signup successful!");
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
        console.log(data);
        signupEmail.value= ""
        signupPassword.value= ""
    }


    const { error: tableError, data: tableData } = await supabaseClient
    .from("users")
    .insert(
      [
        {
          user_name,
          uid: data.user.id
        }
      ]
    ).select()

    console.log(tableData)
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
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill in both email and password!",
          });
        // alert("Please fill in both email and password");
        return;
    }

    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

    if (error) {
        alert(`Login Error: ${error.message}`);
        console.log(error);
    } else {
        Swal.fire("Login successful!");        
        window.location.href = '../Admin page/admin.html';
    }
}
);


// forgetpassword 

// const forget = document.getElementById("forget-password")


// function forgetpassword(){
//     const forgetpassword = forget
//     console.log(forgetpassword)
// }
