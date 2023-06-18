import { Request, Response } from 'express';

const UserController = {
    index: async (req: Request, res: Response) => {
        return res.status(200).json({ error: false });
    }
}

export default UserController;
