import { Request, Response } from "express";
import { getRepository } from "typeorm"
import { User } from "../models/User";

class UserController {

    async create(request: Request, response: Response) {
        const { nome, email } = request.body;

        const usersRepository = getRepository(User);

        // SELECT * FROM tbusuarios WHERE email = "email"
        const userAlredyExists = await usersRepository.findOne({
            email,
        });

        if (userAlredyExists) {
            return response.status(400).json({
                error: "Email, já cadastrado!",
            });
        }

        const user = usersRepository.create({
            nome, email
        })

        await usersRepository.save(user);
        return response.json(user);
    };
}

export { UserController };