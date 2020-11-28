import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm'
import {Comment} from './Comment'
import {User} from './User'

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column('text')
  text: string

  @ManyToOne(type => User, user => user.posts)
  user: User

  @OneToMany(type => Comment, comment => comment.post)
  comments: Comment[]
}
