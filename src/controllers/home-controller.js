function homeController(request, response) {
    return response
            .status(201)
            .json(`APP EM EXECUÇÃO EM CONTROLLER ESPECIFICA`)
}

export default homeController