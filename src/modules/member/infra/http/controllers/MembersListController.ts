import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateMembersListService from '@modules/member/services/CreateMembersListService';
import RemoveMembersListService from '@modules/member/services/RemoveMembersListService';
import ShowMembersListService from '@modules/member/services/ShowMembersListService';

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
  }

  public async removeList(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const { id } = request.params;

      const removeMembersList = container.resolve(RemoveMembersListService);
      await removeMembersList.execute(id);
      return response.status(204).json();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  public async showMember(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const getMembersList = container.resolve(ShowMembersListService);

    const membersList = await getMembersList.execute(id);

    return response.json(membersList);
  }
}
