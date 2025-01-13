// <<<<<<SUPABASE>>>>>>
const supabaseUrl = "https://zqieisofmptcaitkfqkb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxaWVpc29mbXB0Y2FpdGtmcWtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3OTYzMzIsImV4cCI6MjA1MTM3MjMzMn0.2VP3hRMPj0xtHJtJCSfAy2Um2I_hPKL42d5xl3HNQyQ";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
// console.log(supabaseClient);


// <<<<<<FOR FORM>>>>>>
const Fname = document.getElementById("name");
const Email = document.getElementById("email");
const Phone = document.getElementById("phone");
const Visityes = document.getElementById("visityes");
const Visitno = document.getElementById("visitno");
const Male = document.getElementById("male");
const Female = document.getElementById("female");
const Dates = document.getElementById("date");
const Time = document.getElementById("time");
const Doctor = document.getElementById("doctor");
const Symptoms = document.getElementById("Symptoms/Diseases");

// export{fname,email,phone,visityes,visitno,male,female,date,time,doctor,Symptoms}

// <<<<<<FOR ADMIN>>>>>>
// const getname = document.getElementById('getname')
// export default a

async function submitForm(event) {
  event.preventDefault();
 let fname = Fname.value
 let email = Email.value
 let phone = Phone.value
 let visityes = Visityes.value
 let visitno = Visitno.value
 let male = Male.value;
 let female = Female.value
 let date = Dates.value
 let time = Time.value
 let doctor = Doctor.value
 let symptoms = Symptoms.value
 
 
 
  const { error } = await supabaseClient
  .from('Doctor-App')
  .insert({ fname:fname , email:email , phone:phone , visit:visityes, visit:visitno, gender:male , gender:female , date:date , time:time, doctor:doctor , Symptoms:symptoms})


  Fname.value = ""
  Email.value = ""
  Phone.value = ""
  Visitno.value = ""
  Visityes.value = ""
  Male.value = ""
  Female.value = ""
  Dates.value = ""
  Time.value = ""
  Doctor.value = ""
  Symptoms.value = ""
}
