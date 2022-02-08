import { MigrationInterface, QueryRunner } from "typeorm";
import { User } from "../entity/User";
import usersData from "../seed/users";

export class UserTable1644302806142 implements MigrationInterface {
  name = "UserTable1644302806142";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const users = User.create(usersData);
    User.save(users);
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`phone\` varchar(255) NOT NULL, \`email\` varchar(180) NOT NULL, \`password\` varchar(255) NOT NULL, \`admin\` tinyint NOT NULL, UNIQUE INDEX \`IDX_8e1f623798118e629b46a9e629\` (\`phone\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_8e1f623798118e629b46a9e629\` ON \`user\``
    );
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
