import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm'
import {Post} from './Post'
@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  text: string

  @ManyToOne(type => Post, post => post.comments)
  post: Post
}
