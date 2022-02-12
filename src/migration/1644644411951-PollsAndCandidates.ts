import {MigrationInterface, QueryRunner} from "typeorm";

export class PollsAndCandidates1644644411951 implements MigrationInterface {
    name = 'PollsAndCandidates1644644411951'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`poll\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`candidate\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`pollId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`candidate\` ADD CONSTRAINT \`FK_01e0d963db31f953b94d0446e17\` FOREIGN KEY (\`pollId\`) REFERENCES \`poll\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`candidate\` DROP FOREIGN KEY \`FK_01e0d963db31f953b94d0446e17\``);
        await queryRunner.query(`DROP TABLE \`candidate\``);
        await queryRunner.query(`DROP TABLE \`poll\``);
    }

}
