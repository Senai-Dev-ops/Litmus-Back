require("dotenv").config();

const { User } = require("../database/models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  async createUser(req, res) {
    try {
      const { name, email, password, cpf, adm } = req.body;
      const userEmail = await User.findOne({ where: { email } });
      const userCPF = await User.findOne({ where: { cpf } });

      const { requesting_user } = req.params;
      const requestingUser = await User.findOne({
        where: { id: requesting_user },
      });

      if (userEmail) {
        res
          .status(400)
          .json({ message: "Já existe um usuário com este email" });
        return;
      }
      if (userCPF) {
        res.status(400).json({ message: "Já existe um usuário com este cpf" });
        return;
      }
      if (name === "" || email === "" || password === "" || cpf === "") {
        res.status(400).json({ message: "Campos não podem ser nulos" });
        return;
      }
      if (requestingUser.adm) {
        bcrypt.hash(password, 10).then(async (hash) => {
          User.create({
            name: name,
            email: email,
            password: hash,
            cpf: cpf,
            adm: adm,
          });
          res.status(201).json({ message: "Usuário criado com sucesso" });
        });
      } else {
        res.status(401).json({ message: "Não permitido" });
      }
    } catch (error) {
      res.status(400).json({ error: `${error}` });
    }
  },

  async updateUser(req, res) {
    try {
      const { requesting_user, id } = req.params;
      const { name, email, password, adm } = req.body;
      const user = await User.findOne({ where: { id } });
      const requestingUser = await User.findOne({
        where: { id: requesting_user },
      });

      if (requestingUser.adm == true) {
        if (!user) {
          res.status(400).json({ message: "Nenhum usuário encontrado" });
        } else {
          bcrypt.hash(password, 10).then((hash) => {
            User.update(
              { name: name, email: email, password: hash, adm: adm },
              { where: { id: id } }
            );
            res.status(202).json({ message: "Usuário Alterado" });
          });
        }
      } else {
        res.status(401).json({ message: "Não permitido" });
      }
    } catch (error) {
      res.status(400).json({ error: `${error}` });
    }
  },

  async deleteUser(req, res) {
    try {
      const { requesting_user, id } = req.params;
      const requestingUser = await User.findOne({
        where: { id: requesting_user },
      });
      const user = await User.findOne({ where: { id: id } });

      if (requestingUser.adm == true) {
        if (!user) {
          res.json({ message: "Usuário não existe" });
        } else {
          User.destroy({ where: { id: id } });
          res.status(200).json({ message: "Usuário excluído" });
        }
      } else {
        res.status(401).json({ message: "Não permitido" });
      }
    } catch (error) {
      res.status(400).json({ error: `${error}` });
    }
  },

  async userList(req, res) {
    try {
      const users = await User.findAll();

      if (!users) {
        res.status(400).json({ message: "Não há usuario cadastrados" });
      }
      res.status(200).json({ users });
    } catch (error) {
      res.status(400).json({ error: `${error}` });
    }
  },

  async userAuth(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email: email } });

      bcrypt.compare(password, user.password).then((match) => {
        if (match) {
          res.json({ error: "Usuário ou senha errados" });
          return;
        }

        const accessToken = sign(
          { id: user.id, name: user.name, email: email, adm: user.adm },
          process.env.SECRET
        );
        res.json({
          token: accessToken,
          name: user.name,
          email: email,
          adm: user.adm,
        });
      });
    } catch (error) {
      res.status(400).json({ error: `${error}` });
    }
  },

  async validToken(req, res) {
    res.json(req.user);
  },
};
