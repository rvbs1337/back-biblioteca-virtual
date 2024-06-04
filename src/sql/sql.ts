import { DataSource } from 'typeorm';

export class SQL {
    sqls: Array<string>;

    async executeSQLs(datasource: DataSource): Promise<void> {
        for (let i = 0; i < this.sqls.length; i++) {
            await datasource.query(this.sqls[i]).catch((e) => { console.log(e) });
        }
    }
}
