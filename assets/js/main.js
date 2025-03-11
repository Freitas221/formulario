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
        const passValid = this.passValid()

        if(isValids && passValid) {
            alert('Formuário enviado')
            this.formulario.submit();
        }
    }

    passValid() {
        let valid = true;

        const senha = this.formulario.querySelector('#isenha')
        const repetirSenha = this.formulario.querySelector('#isenha2')

        if(senha.value !== repetirSenha.value) {
            this.criaErro(senha, 'Senha e Repetir Senha precisam ser iguais')
            this.criaErro(repetirSenha, 'Senha e Repetir Senha precisam ser iguais')

            return valid = false
        }
        return valid
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

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false
            }
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value)

        if(cpf.valida() === false){
            this.criaErro(campo, 'CPF inválido')
            return false
        }
        return true
    }

    validaUsuario(campo) {
        const usuario = campo.value
        if(!usuario.match(/^[a-zA-Z0-9]+$/)) {
            this.criaErro(campo, 'Usuario precisa conter apenas letras ou numeros')
            return false
        }
        return true
    }

    criaErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario()