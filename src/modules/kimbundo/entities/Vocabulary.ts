import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Example } from "./Example";
import { Learning_Vocabulary } from "./Learning_Vocabulary";
import { Meaning } from "./Meaning";

@Entity("vocabularies")
class Vocabulary {
  @PrimaryColumn()
  id?: string;

  @Column()
  word: string;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updated_At' })
  updatedAt: Date

  @OneToMany(() => Meaning, (meaning) => meaning.vocabulary)
  meaning: Meaning[];

  @OneToMany(() => Example, (examples) => examples.vocabulary)
  examples: Example[];

  @OneToMany(() => Learning_Vocabulary, (learning_vocabulary) => learning_vocabulary.vocabulary)
  learning_vocabulary: Learning_Vocabulary[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Vocabulary }