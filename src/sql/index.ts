import { randomUUID } from 'crypto';

type S = string;
type A<T = any> = T[] | Array<T>;
type O<K extends string[] | keyof any = keyof any> = K extends keyof any
  ? { [k in K]: unknown }
  : K extends string[]
  ? { [k: K[number]]: any }
  : { [k: string]: any };

type TableName<T extends TTableBasic> = T | null;
type OrNull<T> = T | null;
type OrArr<T> = T | T[];
type OrStr<T> = T | string;

type Column = {
  name: string;
  type: 'VARCHAR' | 'TEXT' | 'NUMBER' | 'CHAR' | 'DATE';
  defaultValue: any;
  nullable: boolean;
};
const CREATE_COLUMN = ({ name, type, defaultValue = '', nullable = true }: Column) =>
  `${name} ${type} ${nullable ? '' : 'NOT NULL'} ${defaultValue ? `DEFAULT ${defaultValue}` : ''}`;
const CREATE_TABLE = (tableName: string, columns: Column[]) =>
  `CREATE_TABLE ${tableName} ${columns.map(CREATE_COLUMN)}`;

type TTableBasic = {
  id: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: OrNull<Date>;
};
type TTable<Name extends string, Data> = {
  table_name: Name;
  table_keys: keyof Data;
  table: TTableBasic & Data;
};

class Tables {
  static toArgs = (v: string[] | string) => {
    if (typeof v === 'string') return v;
    if (Array.isArray(v)) return v.join(',');
    throw new Error(`Invalid value for table: ${v}`);
  };
  static toKeys = (t: string, k: string[] | string) => {
    if (typeof k === 'string') return `${t}.${k}`;
    if (Array.isArray(k)) return k.map(key => `${t}.${key}`);
    throw new Error(`Invalid value for table: ${t} ${k}`);
  };
  static isKeyIdLike = k => k.endsWith('_id');
  static toKeyRelationId = (t: string) => `${t}_id`;
}

class SqlHelpers {
  static getSqlQuery(query: string, params: any) {
    return {
      query,
      params,
    };
  }
}
