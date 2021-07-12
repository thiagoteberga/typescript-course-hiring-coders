interface Usuario {
    nome: string
    email: string
    andress?: string
}

function getUser(): Usuario {
    return {
        nome: 'Thiago',
        email: 'thiago@thiago.com'
    }
}

function setUser(usuario: Usuario) {
    // ...
}