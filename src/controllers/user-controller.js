function userController(request, response) {
    return response
            .status(201)
            .json(`APP EM EXECUÇÃO EM CONTROLLER DE USUÁRIO`)
}

export default userController