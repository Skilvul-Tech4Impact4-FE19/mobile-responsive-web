const namalengkap = document.getElementById('namalengkap')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('formdaftar')

form.addEventListener('submit', async (even)=>{
    even.preventDefault()
    const datauser={
        nama:namalengkap.value, 
        email:email.value,
        password:password.value
    }
    const response=await fetch('https://6454c457a74f994b33486320.mockapi.io/users',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datauser)}
    )
    const userdata= await response.json()

    console.log(userdata)
})