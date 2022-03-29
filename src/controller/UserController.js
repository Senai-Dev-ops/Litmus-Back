const { User } = require('../models')
const bcrypt = require("bcrypt")
const { sign } = require("jsonwebtoken")
const { validateToken } = require("../middlewares/middlewares")

module.exports = {
    async createUser(req, res) {
        try {
            const { name, email, password, cpf, adm } = req.body
            const userEmail = await User.findOne({ where: { email } })
            const userCpf = await User.findOne({ where: { cpf } })

            if (userEmail) {
                res.status(400).json({ message: 'Já existe um usuário com este email' })
                return
            }
            if (userCpf) {
                res.status(400).json({ message: 'Já existe um usuário com este cpf' })
                return
            }
            if (name === "" || email === "" || password === "" || cpf === "") {
                res.status(400).json({ message: 'Campos não podem ser nulos' })
                return
            } else {
                bcrypt.hash(password, 10).then((hash) => {
                    User.create({ name: name, email: email, password: hash, cpf: cpf, adm: adm })
                    res.status(200).json({ message: "Usuário criado com sucesso" })
                })
            }
        } catch (error) {
            res.status(400).json({ error })
        }
    },

    async updateUser(req, res) {
        try {
            const { requesting_user, id } = req.params
            const { name, email, password, adm } = req.body
            const user = await User.findOne({ where: { id } })
            const requestingUser = await User.findOne({ where: { id: requesting_user } })

            if (requestingUser.adm == true) {
                if (!user) {
                    res.status(401).json({ message: "Nenhum Usuario encontrado" })
                } else {
                    bcrypt.hash(password, 10).then((hash) => {
                        User.update({ name: name, email: email, password: hash, adm: adm }, { where: { id: id } })
                        res.status(200).json({ message: "Usuário Alterado" })
                    })
                }
            } else {
                res.status(405).json({ message: "Nao permitido" })
            }

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    async deleteUser(req, res) {
        try {
            const { requesting_user, id } = req.params
            const requestingUser = await User.findOne({ where: { id: requesting_user } })
            const user = await User.findOne({ where: { id: id } })

            if (requestingUser.adm == true) {
                if (!user) {
                    res.json({ message: "Usuário não existe" })
                } else {
                    User.destroy({ where: { id: id } })
                    res.status(200).json({ message: "Usuário excluído" })
                }
            } else {
                res.status(401).json({ message: "Não permitido" })
            }
        } catch (error) {
            res.status(400).json({ error: error })
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
    },

    async userAuth(req, res) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ where: { email: email } });

            bcrypt.compare(password, user.password).then((match) => {
                if (!match) {
                    res.json({ error: "Usuário ou senha errados" });
                    return;
                }

                const accessToken = sign(
                    { id: user.id, name: user.name, email: email, adm: user.adm },
                    "mySecret"
                );
                res.json({ token: accessToken, name: user.name, email: email, adm: user.adm });
            });
        } catch (error) {
            res.status(400).json({ error })
        }
    },

    async validToken(req, res) {
        res.json(req.user)
    }
}
