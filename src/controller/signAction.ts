import {Request, Response} from 'express'
import {getManager} from 'typeorm'
import {User} from '../entity/User'

export async function signIn(req: Request, res: Response) {
  const postRepository = getManager().getRepository(User)
  const {name, password} = req.body

  const newUser = postRepository.create({name, password})
  const result = await postRepository.save(newUser)
  console.log(result)

  res.send('done')
}
