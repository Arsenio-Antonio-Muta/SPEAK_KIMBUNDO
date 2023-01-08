import { CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { User } from "../../account/entities/User";
import { Vocabulary } from "./Vocabulary";


@Entity("learning_vocabulary")
class Learning_Vocabulary {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn({ name: "created_At" })
  createdAt: Date;

  @CreateDateColumn({ name: "updated_At" })
  updatedAt: Date;

  @ManyToOne(() => Vocabulary, (vocabulary) => vocabulary.learning_vocabulary)
  vocabulary: Vocabulary;

  @ManyToOne(() => User, (user) => user.learning_vocabulary)
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Learning_Vocabulary }