const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('formlogin')

form.addEventListener('submit', async (even)=>{
    even.preventDefault()
    
    const response=await fetch('https://6454c457a74f994b33486320.mockapi.io/users')
    const userdata= await response.json()
    const user= userdata.find(user =>user.email==email.value && user.password==password.value)
    if (user) {
        const datalogin=localStorage.setItem('email',email.value)
        console.log(datalogin)
        window.location.href='../kelas/kelas.html'
    }
})