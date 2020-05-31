import { Router } from 'express';

import { getRepository } from 'typeorm';
import MemberService from '../services/MemberService';
import Member from '../models/Member';

const memberRouter = Router();

memberRouter.get('/', async (req, res) => {
  const memberRepository = getRepository(Member);
  const members = await memberRepository.find();
  res.json(members);
});

memberRouter.post('/', async (req, res) => {
  const { full_name, role_id } = req.body;
  const memberService = new MemberService();
  const member = await memberService.create({
    full_name,
    role_id,
  });
  res.json(member);
});

memberRouter.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { full_name, role_id } = req.body;
  const memberService = new MemberService();
  const memberUpdated = await memberService.update({ id, full_name, role_id });
  res.json(memberUpdated);
});

memberRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const memberService = new MemberService();
  const memberDeleted = await memberService.remove(id);
  res.json({ message: memberDeleted });
});

export default memberRouter;
