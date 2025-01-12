
// <<<<<<SUPABASE>>>>>>
const supabaseUrl = "https://zqieisofmptcaitkfqkb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxaWVpc29mbXB0Y2FpdGtmcWtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3OTYzMzIsImV4cCI6MjA1MTM3MjMzMn0.2VP3hRMPj0xtHJtJCSfAy2Um2I_hPKL42d5xl3HNQyQ";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
// console.log(supabaseClient);

const ulname = document.getElementById('ulname')
const ulemail = document.getElementById('ulemail')
const ulphone = document.getElementById('ulphone')
const ulvisit = document.getElementById('ulvisit')
const ulgender = document.getElementById('ulgender')
const uldate = document.getElementById('uldate')
const ultime = document.getElementById('ultime')
const uldoctor = document.getElementById('uldoc')
const ulsymptom = document.getElementById('ulsym')
const ulno = document.getElementById('ulNo')
let a = 1
// console.log(ulname,
//     ulemail,
//     ulphone,
//     ulvisit,
//     ulgender,
//     uldate,
//     ultime,
//     uldoctor,
//     ulsymptom,);



async function getdoctordata(){
    const { data, error } = await supabaseClient
  .from('Doctor-App')
  .select()
    
  
  for (var i =0; i< data.length; i++){
    // console.log(data[i].fname)
let {fname,email,phone,visit,gender,date,time,doctor,Symptoms} = data[i]
let liNo = document.createElement('li')
ulno.appendChild(liNo)
    liNo.innerHTML += a++


let liname = document.createElement('li')
ulname.appendChild(liname)
    liname.innerHTML += fname

let liemail = document.createElement('li')
ulemail.appendChild(liemail)
    liemail.innerHTML += email

let liphone = document.createElement('li')
ulphone.appendChild(liphone)
    liphone.innerHTML += phone

let livisit = document.createElement('li')
ulvisit.appendChild(livisit)
    livisit.innerHTML += visit

let ligender = document.createElement('li')
ulgender.appendChild(ligender)
    ligender.innerHTML += gender

let lidate = document.createElement('li')
uldate.appendChild(lidate)
    lidate.innerHTML += date

let litime = document.createElement('li')
ultime.appendChild(litime)
    litime.innerHTML += time

let lidoc = document.createElement('li')
uldoctor.appendChild(lidoc)
    lidoc.innerHTML += doctor

let lisym = document.createElement('li')
ulsymptom.appendChild(lisym)
    lisym.innerHTML += Symptoms

}

}
getdoctordata()
