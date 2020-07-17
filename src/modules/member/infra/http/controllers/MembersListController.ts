// import { Request, Response } from 'express';
// import { container } from 'tsyringe';

// export default class MembersController {
//   public async createMember(
//     request: Request,
//     response: Response,
//   ): Promise<Response> {
//     try {
//       const { memberList } = request.body;

//       const createMember = container.resolve();

//       const member = await createMember.execute({
//         full_name,
//         role_id,
//       });

//       return response.json(member);
//     } catch (err) {
//       return response.status(400).json({ error: err.message });
//     }
//   }

//   public async removeMember(
//     request: Request,
//     response: Response,
//   ): Promise<Response> {
//     try {
//       const { id } = request.params;

//       const removeMember = container.resolve(RemoveMemberService);
//       await removeMember.execute(id);
//       return response.status(204).json();
//     } catch (err) {
//       return response.status(400).json({ error: err.message });
//     }
//   }

//   public async showMember(
//     request: Request,
//     response: Response,
//   ): Promise<Response> {
//     const getMember = container.resolve(ShowMemberService);

//     const members = await getMember.execute();

//     return response.json(members);
//   }
// }
