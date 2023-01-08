import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { Vocabulary } from "./Vocabulary";


@Entity()
class Meaning {
  @PrimaryColumn()
  id?: string;

  @Column()
  meaning: string;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updated_At' })
  updated_At: Date;

  @ManyToOne(() => Vocabulary, (vocabulary) => vocabulary.meaning)
  vocabulary: Vocabulary;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Meaning }