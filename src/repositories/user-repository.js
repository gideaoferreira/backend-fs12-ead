import { User } from "../models/user.js"

function userRepository() {
  return {
    list: async () => {
      return await User.findAll()
    },
    create: async (data) => {
      const user = await User.create({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        birthDate: data.birthDate,
        gender: data.gender
      })

      return user
    }
  }
}

export default userRepository