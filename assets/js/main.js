class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.evento() /* A classe irá chamar automaticamente o método*/
    }

    evento() {
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault() /*Previne que o formulário seja enviado*/
        const isValids = this.isValid()
    }

}