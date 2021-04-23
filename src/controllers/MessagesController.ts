import { Response, Request } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {
  async create(req: Request, res: Response) {
    const { admin_id, text, user_id } = req.body;

    const messagesService = new MessagesService();

    try {
      const messages = await messagesService.create({
        admin_id,
        text,
        user_id
      });

      return res.json(messages);
    } catch (err) {
      return res.status(400).json({
        message: err.message
      });
    }
  }

  async showByUser(req: Request, res: Response) {
    const { id } = req.params;

    const messagesService = new MessagesService();

    try {
      const list = await messagesService.listByUser(id);

      return res.json(list);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  }
}

export { MessagesController };