import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Learning_Vocabulary } from "../../../../kimbundo/infra/typeorm/entities/Learning_Vocabulary";

@Entity("users")
class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar?: string;

  @OneToMany(() => Learning_Vocabulary, (learning_Vocabulary) => learning_Vocabulary.user)
  learning_vocabulary: Learning_Vocabulary[]

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User }