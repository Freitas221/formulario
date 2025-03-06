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

    isValid() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerHTML;
            if(!campo.value) {
               this.criaErro(campo, `*${label} não pode estar em branco`)
               valid = false
            }
        }
    }

    criaErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario()