import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Vocabulary } from "./Vocabulary";



@Entity("examples")
class Example {
  @PrimaryColumn()
  id?: string;

  @Column()
  example: string;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updated_At' })
  updatedAt: Date;

  @ManyToOne(() => Vocabulary, (vocabulary) => vocabulary.examples, { eager: true })
  vocabulary: Vocabulary;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }

}

export { Example }