function userController(request, response) {
    return response
            .status(200)
            .json(listUser)
}

export default userController