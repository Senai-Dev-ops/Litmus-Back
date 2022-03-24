const { User } = require('../models')

module.exports = {
    async createUser(req, res) {
        try {
            const { name, email, password, cpf, adm } = req.body
            const userEmail = await User.findOne({ where: { email } })
            const userCpf = await User.findOne({ where: { cpf } })

            if (userEmail) {
                res.status(400).json({ message: 'Já existe um usario com este email' })
                return
            }

            if (userCpf) {
                res.status(400).json({ message: 'Já existe um usario com este cpf' })
                return
            }

            const user = await User.create({ name, email, password, cpf, password, adm: false })
            res.status(200).json({ user })

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    async createUserAdm(req, res) {
        try {
            const { name, email, password, cpf, adm } = req.body
            const userEmail = await User.findOne({ where: { email } })
            const userCpf = await User.findOne({ where: { cpf } })



            if (userEmail) {
                res.status(400).json({ message: 'Já existe um usario com este email' })
                return
            }

            if (userCpf) {
                res.status(400).json({ message: 'Já existe um usario com este cpf' })
                return
            }

            const user = await User.create({ name, email, password, cpf, password, adm })
            res.status(200).json({ user })

        } catch (error) {
            res.status(400).json({ error })


        }
    },
    async updateUserAdm(req, res) {
        try {
            const { id } = req.params
            const { name, email, password, adm } = req.body
            const user = await User.findOne({ where: { id } })

            if (adm == true) {
                if (!user) {
                    res.status(401).json({ message: "Nenhum Usuario encontrado" })
                } else {
                    const user = await User.update({ name, email, password, adm }, { where: { id } })
                    res.status(200).json({ user })
                }
            } else {
                res.status(405).json({ message: "Nao permitido" })
            }
        }catch (error) {
            res.status(400).json({ error })
        }
    },


    async updateUser(req, res){
            try {
                const { id } = req.params
                const { name, email, password } = req.body
                const user = await User.findOne({ where: { id } })
                const adm = await User.findOne({ where: { adm } })

                if (adm == True) {
                    if (!user) {
                        res.status(401).json({ message: "Nenhum Usuario encontrado" })
                    } else {
                        const user = await User.update({ name, email, password }, { where: { id } })
                        res.status(200).json({ user })
                    }
                } else {
                    res.status(405).json({ message: "Nao permitido" })
                }

            } catch (error) {
                res.status(400).json({ error })
            }
        },

    async userList(req, res) {
            try {
                const users = await User.findAll()

                if (!users) {
                    res.status(401).json({ message: "Não há usuario cadastrados" })
                }
                res.status(200).json({ users })
            } catch (error) {
                res.status(400).json({ error })
            }
        }


    }
