import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateMembersListService from '@modules/member/services/CreateMembersListService';

export default class MembersController {
  public async createList(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const members_list_json = request.body;

      const createMember = container.resolve(CreateMembersListService);

      const membersList = await createMember.execute(members_list_json);

      return response.json(membersList);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
    // }

    // public async removeMember(
    //   request: Request,
    //   response: Response,
    // ): Promise<Response> {
    //   try {
    //     const { id } = request.params;

    //     const removeMember = container.resolve(RemoveMemberService);
    //     await removeMember.execute(id);
    //     return response.status(204).json();
    //   } catch (err) {
    //     return response.status(400).json({ error: err.message });
    //   }
    // }

    // public async showMember(
    //   request: Request,
    //   response: Response,
    // ): Promise<Response> {
    //   const getMember = container.resolve(ShowMemberService);

    //   const members = await getMember.execute();

    //   return response.json(members);
  }
}
