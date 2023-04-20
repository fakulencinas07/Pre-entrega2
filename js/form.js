const forms = document.getElementById("form");

forms.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers:{
        'accept': 'application/json'
        }
    } )
    if(response.ok){
        this.reset()
        Swal.fire('Gracias, nos contactaremos pronto con vos!')
    }
}
