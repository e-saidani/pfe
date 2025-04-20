
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Accounts
 * 
 */
export type Accounts = $Result.DefaultSelection<Prisma.$AccountsPayload>
/**
 * Model Disponibility
 * 
 */
export type Disponibility = $Result.DefaultSelection<Prisma.$DisponibilityPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Prospects
 * 
 */
export type Prospects = $Result.DefaultSelection<Prisma.$ProspectsPayload>
/**
 * Model Appointments
 * 
 */
export type Appointments = $Result.DefaultSelection<Prisma.$AppointmentsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Role: {
  ADMIN: 'ADMIN',
  AGENT: 'AGENT',
  COMMERCIAL: 'COMMERCIAL',
  SUPERVISOR: 'SUPERVISOR',
  CLIENT: 'CLIENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const StatusAppointment: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELED: 'CANCELED',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
};

export type StatusAppointment = (typeof StatusAppointment)[keyof typeof StatusAppointment]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type StatusAppointment = $Enums.StatusAppointment

export const StatusAppointment: typeof $Enums.StatusAppointment

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accounts`: Exposes CRUD operations for the **Accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.AccountsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disponibility`: Exposes CRUD operations for the **Disponibility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disponibilities
    * const disponibilities = await prisma.disponibility.findMany()
    * ```
    */
  get disponibility(): Prisma.DisponibilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prospects`: Exposes CRUD operations for the **Prospects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prospects
    * const prospects = await prisma.prospects.findMany()
    * ```
    */
  get prospects(): Prisma.ProspectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointments`: Exposes CRUD operations for the **Appointments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointments.findMany()
    * ```
    */
  get appointments(): Prisma.AppointmentsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Accounts: 'Accounts',
    Disponibility: 'Disponibility',
    Products: 'Products',
    Team: 'Team',
    Prospects: 'Prospects',
    Appointments: 'Appointments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "accounts" | "disponibility" | "products" | "team" | "prospects" | "appointments"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Accounts: {
        payload: Prisma.$AccountsPayload<ExtArgs>
        fields: Prisma.AccountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          findFirst: {
            args: Prisma.AccountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          findMany: {
            args: Prisma.AccountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>[]
          }
          create: {
            args: Prisma.AccountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          createMany: {
            args: Prisma.AccountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>[]
          }
          delete: {
            args: Prisma.AccountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          update: {
            args: Prisma.AccountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          deleteMany: {
            args: Prisma.AccountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>[]
          }
          upsert: {
            args: Prisma.AccountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.AccountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountsCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
          }
        }
      }
      Disponibility: {
        payload: Prisma.$DisponibilityPayload<ExtArgs>
        fields: Prisma.DisponibilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisponibilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisponibilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload>
          }
          findFirst: {
            args: Prisma.DisponibilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisponibilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload>
          }
          findMany: {
            args: Prisma.DisponibilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload>[]
          }
          create: {
            args: Prisma.DisponibilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload>
          }
          createMany: {
            args: Prisma.DisponibilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisponibilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload>[]
          }
          delete: {
            args: Prisma.DisponibilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload>
          }
          update: {
            args: Prisma.DisponibilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload>
          }
          deleteMany: {
            args: Prisma.DisponibilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisponibilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisponibilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload>[]
          }
          upsert: {
            args: Prisma.DisponibilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload>
          }
          aggregate: {
            args: Prisma.DisponibilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisponibility>
          }
          groupBy: {
            args: Prisma.DisponibilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisponibilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisponibilityCountArgs<ExtArgs>
            result: $Utils.Optional<DisponibilityCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Prospects: {
        payload: Prisma.$ProspectsPayload<ExtArgs>
        fields: Prisma.ProspectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProspectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProspectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectsPayload>
          }
          findFirst: {
            args: Prisma.ProspectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProspectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectsPayload>
          }
          findMany: {
            args: Prisma.ProspectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectsPayload>[]
          }
          create: {
            args: Prisma.ProspectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectsPayload>
          }
          createMany: {
            args: Prisma.ProspectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProspectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectsPayload>[]
          }
          delete: {
            args: Prisma.ProspectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectsPayload>
          }
          update: {
            args: Prisma.ProspectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectsPayload>
          }
          deleteMany: {
            args: Prisma.ProspectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProspectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProspectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectsPayload>[]
          }
          upsert: {
            args: Prisma.ProspectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectsPayload>
          }
          aggregate: {
            args: Prisma.ProspectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProspects>
          }
          groupBy: {
            args: Prisma.ProspectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProspectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProspectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProspectsCountAggregateOutputType> | number
          }
        }
      }
      Appointments: {
        payload: Prisma.$AppointmentsPayload<ExtArgs>
        fields: Prisma.AppointmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          findFirst: {
            args: Prisma.AppointmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          findMany: {
            args: Prisma.AppointmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>[]
          }
          create: {
            args: Prisma.AppointmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          createMany: {
            args: Prisma.AppointmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>[]
          }
          delete: {
            args: Prisma.AppointmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          update: {
            args: Prisma.AppointmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          aggregate: {
            args: Prisma.AppointmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointments>
          }
          groupBy: {
            args: Prisma.AppointmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentsCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    accounts?: AccountsOmit
    disponibility?: DisponibilityOmit
    products?: ProductsOmit
    team?: TeamOmit
    prospects?: ProspectsOmit
    appointments?: AppointmentsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    accounts: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UsersCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountsWhereInput
  }


  /**
   * Count Type AccountsCountOutputType
   */

  export type AccountsCountOutputType = {
    Team: number
    Appointments: number
    Disponibility: number
  }

  export type AccountsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Team?: boolean | AccountsCountOutputTypeCountTeamArgs
    Appointments?: boolean | AccountsCountOutputTypeCountAppointmentsArgs
    Disponibility?: boolean | AccountsCountOutputTypeCountDisponibilityArgs
  }

  // Custom InputTypes
  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsCountOutputType
     */
    select?: AccountsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentsWhereInput
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountDisponibilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisponibilityWhereInput
  }


  /**
   * Count Type ProspectsCountOutputType
   */

  export type ProspectsCountOutputType = {
    Appointments: number
  }

  export type ProspectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Appointments?: boolean | ProspectsCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * ProspectsCountOutputType without action
   */
  export type ProspectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProspectsCountOutputType
     */
    select?: ProspectsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProspectsCountOutputType without action
   */
  export type ProspectsCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    fullName: string | null
    image: string | null
    email: string | null
    phone: string | null
    departementCode: string | null
    departementName: string | null
    siret: string | null
    societyName: string | null
    logo: string | null
    userStatus: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    fullName: string | null
    image: string | null
    email: string | null
    phone: string | null
    departementCode: string | null
    departementName: string | null
    siret: string | null
    societyName: string | null
    logo: string | null
    userStatus: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    fullName: number
    image: number
    email: number
    phone: number
    departementCode: number
    departementName: number
    siret: number
    societyName: number
    logo: number
    userStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    fullName?: true
    image?: true
    email?: true
    phone?: true
    departementCode?: true
    departementName?: true
    siret?: true
    societyName?: true
    logo?: true
    userStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    fullName?: true
    image?: true
    email?: true
    phone?: true
    departementCode?: true
    departementName?: true
    siret?: true
    societyName?: true
    logo?: true
    userStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    fullName?: true
    image?: true
    email?: true
    phone?: true
    departementCode?: true
    departementName?: true
    siret?: true
    societyName?: true
    logo?: true
    userStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    fullName: string | null
    image: string | null
    email: string | null
    phone: string | null
    departementCode: string | null
    departementName: string | null
    siret: string | null
    societyName: string | null
    logo: string | null
    userStatus: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    fullName?: boolean
    image?: boolean
    email?: boolean
    phone?: boolean
    departementCode?: boolean
    departementName?: boolean
    siret?: boolean
    societyName?: boolean
    logo?: boolean
    userStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | Users$accountsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    fullName?: boolean
    image?: boolean
    email?: boolean
    phone?: boolean
    departementCode?: boolean
    departementName?: boolean
    siret?: boolean
    societyName?: boolean
    logo?: boolean
    userStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    fullName?: boolean
    image?: boolean
    email?: boolean
    phone?: boolean
    departementCode?: boolean
    departementName?: boolean
    siret?: boolean
    societyName?: boolean
    logo?: boolean
    userStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    fullName?: boolean
    image?: boolean
    email?: boolean
    phone?: boolean
    departementCode?: boolean
    departementName?: boolean
    siret?: boolean
    societyName?: boolean
    logo?: boolean
    userStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "fullName" | "image" | "email" | "phone" | "departementCode" | "departementName" | "siret" | "societyName" | "logo" | "userStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | Users$accountsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      accounts: Prisma.$AccountsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      fullName: string | null
      image: string | null
      email: string | null
      phone: string | null
      departementCode: string | null
      departementName: string | null
      siret: string | null
      societyName: string | null
      logo: string | null
      userStatus: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends Users$accountsArgs<ExtArgs> = {}>(args?: Subset<T, Users$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly firstName: FieldRef<"Users", 'String'>
    readonly lastName: FieldRef<"Users", 'String'>
    readonly fullName: FieldRef<"Users", 'String'>
    readonly image: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly departementCode: FieldRef<"Users", 'String'>
    readonly departementName: FieldRef<"Users", 'String'>
    readonly siret: FieldRef<"Users", 'String'>
    readonly societyName: FieldRef<"Users", 'String'>
    readonly logo: FieldRef<"Users", 'String'>
    readonly userStatus: FieldRef<"Users", 'Status'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.accounts
   */
  export type Users$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    where?: AccountsWhereInput
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    cursor?: AccountsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AccountsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AccountsMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type AccountsMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type AccountsCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type AccountsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AccountsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AccountsMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type AccountsMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type AccountsCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to aggregate.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type AccountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountsWhereInput
    orderBy?: AccountsOrderByWithAggregationInput | AccountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: AccountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _avg?: AccountsAvgAggregateInputType
    _sum?: AccountsSumAggregateInputType
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    id: number
    username: string
    password: string
    role: $Enums.Role
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends AccountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type AccountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    Team?: boolean | Accounts$TeamArgs<ExtArgs>
    Appointments?: boolean | Accounts$AppointmentsArgs<ExtArgs>
    Disponibility?: boolean | Accounts$DisponibilityArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type AccountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role" | "status" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["accounts"]>
  export type AccountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    Team?: boolean | Accounts$TeamArgs<ExtArgs>
    Appointments?: boolean | Accounts$AppointmentsArgs<ExtArgs>
    Disponibility?: boolean | Accounts$DisponibilityArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type AccountsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $AccountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accounts"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      Team: Prisma.$TeamPayload<ExtArgs>[]
      Appointments: Prisma.$AppointmentsPayload<ExtArgs>[]
      Disponibility: Prisma.$DisponibilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      role: $Enums.Role
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }

  type AccountsGetPayload<S extends boolean | null | undefined | AccountsDefaultArgs> = $Result.GetResult<Prisma.$AccountsPayload, S>

  type AccountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface AccountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Accounts'], meta: { name: 'Accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {AccountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountsFindUniqueArgs>(args: SelectSubset<T, AccountsFindUniqueArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountsFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountsFindFirstArgs>(args?: SelectSubset<T, AccountsFindFirstArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountsFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountsWithIdOnly = await prisma.accounts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountsFindManyArgs>(args?: SelectSubset<T, AccountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accounts.
     * @param {AccountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
     */
    create<T extends AccountsCreateArgs>(args: SelectSubset<T, AccountsCreateArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountsCreateManyArgs>(args?: SelectSubset<T, AccountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountsCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountsWithIdOnly = await prisma.accounts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountsCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accounts.
     * @param {AccountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
     */
    delete<T extends AccountsDeleteArgs>(args: SelectSubset<T, AccountsDeleteArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accounts.
     * @param {AccountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountsUpdateArgs>(args: SelectSubset<T, AccountsUpdateArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountsDeleteManyArgs>(args?: SelectSubset<T, AccountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountsUpdateManyArgs>(args: SelectSubset<T, AccountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountsUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountsWithIdOnly = await prisma.accounts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountsUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accounts.
     * @param {AccountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
     */
    upsert<T extends AccountsUpsertArgs>(args: SelectSubset<T, AccountsUpsertArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountsCountArgs>(
      args?: Subset<T, AccountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountsGroupByArgs['orderBy'] }
        : { orderBy?: AccountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Accounts model
   */
  readonly fields: AccountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Team<T extends Accounts$TeamArgs<ExtArgs> = {}>(args?: Subset<T, Accounts$TeamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Appointments<T extends Accounts$AppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Accounts$AppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Disponibility<T extends Accounts$DisponibilityArgs<ExtArgs> = {}>(args?: Subset<T, Accounts$DisponibilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Accounts model
   */
  interface AccountsFieldRefs {
    readonly id: FieldRef<"Accounts", 'Int'>
    readonly username: FieldRef<"Accounts", 'String'>
    readonly password: FieldRef<"Accounts", 'String'>
    readonly role: FieldRef<"Accounts", 'Role'>
    readonly status: FieldRef<"Accounts", 'Status'>
    readonly createdAt: FieldRef<"Accounts", 'DateTime'>
    readonly updatedAt: FieldRef<"Accounts", 'DateTime'>
    readonly userId: FieldRef<"Accounts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Accounts findUnique
   */
  export type AccountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts findUniqueOrThrow
   */
  export type AccountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts findFirst
   */
  export type AccountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts findFirstOrThrow
   */
  export type AccountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts findMany
   */
  export type AccountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts create
   */
  export type AccountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The data needed to create a Accounts.
     */
    data: XOR<AccountsCreateInput, AccountsUncheckedCreateInput>
  }

  /**
   * Accounts createMany
   */
  export type AccountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountsCreateManyInput | AccountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Accounts createManyAndReturn
   */
  export type AccountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountsCreateManyInput | AccountsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Accounts update
   */
  export type AccountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The data needed to update a Accounts.
     */
    data: XOR<AccountsUpdateInput, AccountsUncheckedUpdateInput>
    /**
     * Choose, which Accounts to update.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts updateMany
   */
  export type AccountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountsUpdateManyMutationInput, AccountsUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountsWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Accounts updateManyAndReturn
   */
  export type AccountsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountsUpdateManyMutationInput, AccountsUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountsWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Accounts upsert
   */
  export type AccountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The filter to search for the Accounts to update in case it exists.
     */
    where: AccountsWhereUniqueInput
    /**
     * In case the Accounts found by the `where` argument doesn't exist, create a new Accounts with this data.
     */
    create: XOR<AccountsCreateInput, AccountsUncheckedCreateInput>
    /**
     * In case the Accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountsUpdateInput, AccountsUncheckedUpdateInput>
  }

  /**
   * Accounts delete
   */
  export type AccountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter which Accounts to delete.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts deleteMany
   */
  export type AccountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountsWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Accounts.Team
   */
  export type Accounts$TeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Accounts.Appointments
   */
  export type Accounts$AppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    where?: AppointmentsWhereInput
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    cursor?: AppointmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Accounts.Disponibility
   */
  export type Accounts$DisponibilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    where?: DisponibilityWhereInput
    orderBy?: DisponibilityOrderByWithRelationInput | DisponibilityOrderByWithRelationInput[]
    cursor?: DisponibilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisponibilityScalarFieldEnum | DisponibilityScalarFieldEnum[]
  }

  /**
   * Accounts without action
   */
  export type AccountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
  }


  /**
   * Model Disponibility
   */

  export type AggregateDisponibility = {
    _count: DisponibilityCountAggregateOutputType | null
    _avg: DisponibilityAvgAggregateOutputType | null
    _sum: DisponibilitySumAggregateOutputType | null
    _min: DisponibilityMinAggregateOutputType | null
    _max: DisponibilityMaxAggregateOutputType | null
  }

  export type DisponibilityAvgAggregateOutputType = {
    id: number | null
    accountId: number | null
  }

  export type DisponibilitySumAggregateOutputType = {
    id: number | null
    accountId: number | null
  }

  export type DisponibilityMinAggregateOutputType = {
    id: number | null
    accountId: number | null
    availableFrom: Date | null
    availableTo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisponibilityMaxAggregateOutputType = {
    id: number | null
    accountId: number | null
    availableFrom: Date | null
    availableTo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisponibilityCountAggregateOutputType = {
    id: number
    accountId: number
    availableFrom: number
    availableTo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DisponibilityAvgAggregateInputType = {
    id?: true
    accountId?: true
  }

  export type DisponibilitySumAggregateInputType = {
    id?: true
    accountId?: true
  }

  export type DisponibilityMinAggregateInputType = {
    id?: true
    accountId?: true
    availableFrom?: true
    availableTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisponibilityMaxAggregateInputType = {
    id?: true
    accountId?: true
    availableFrom?: true
    availableTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisponibilityCountAggregateInputType = {
    id?: true
    accountId?: true
    availableFrom?: true
    availableTo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DisponibilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disponibility to aggregate.
     */
    where?: DisponibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilities to fetch.
     */
    orderBy?: DisponibilityOrderByWithRelationInput | DisponibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisponibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disponibilities
    **/
    _count?: true | DisponibilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisponibilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisponibilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisponibilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisponibilityMaxAggregateInputType
  }

  export type GetDisponibilityAggregateType<T extends DisponibilityAggregateArgs> = {
        [P in keyof T & keyof AggregateDisponibility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisponibility[P]>
      : GetScalarType<T[P], AggregateDisponibility[P]>
  }




  export type DisponibilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisponibilityWhereInput
    orderBy?: DisponibilityOrderByWithAggregationInput | DisponibilityOrderByWithAggregationInput[]
    by: DisponibilityScalarFieldEnum[] | DisponibilityScalarFieldEnum
    having?: DisponibilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisponibilityCountAggregateInputType | true
    _avg?: DisponibilityAvgAggregateInputType
    _sum?: DisponibilitySumAggregateInputType
    _min?: DisponibilityMinAggregateInputType
    _max?: DisponibilityMaxAggregateInputType
  }

  export type DisponibilityGroupByOutputType = {
    id: number
    accountId: number
    availableFrom: Date
    availableTo: Date
    createdAt: Date
    updatedAt: Date
    _count: DisponibilityCountAggregateOutputType | null
    _avg: DisponibilityAvgAggregateOutputType | null
    _sum: DisponibilitySumAggregateOutputType | null
    _min: DisponibilityMinAggregateOutputType | null
    _max: DisponibilityMaxAggregateOutputType | null
  }

  type GetDisponibilityGroupByPayload<T extends DisponibilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisponibilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisponibilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisponibilityGroupByOutputType[P]>
            : GetScalarType<T[P], DisponibilityGroupByOutputType[P]>
        }
      >
    >


  export type DisponibilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    availableFrom?: boolean
    availableTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disponibility"]>

  export type DisponibilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    availableFrom?: boolean
    availableTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disponibility"]>

  export type DisponibilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    availableFrom?: boolean
    availableTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disponibility"]>

  export type DisponibilitySelectScalar = {
    id?: boolean
    accountId?: boolean
    availableFrom?: boolean
    availableTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DisponibilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "availableFrom" | "availableTo" | "createdAt" | "updatedAt", ExtArgs["result"]["disponibility"]>
  export type DisponibilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }
  export type DisponibilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }
  export type DisponibilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }

  export type $DisponibilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disponibility"
    objects: {
      account: Prisma.$AccountsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      accountId: number
      availableFrom: Date
      availableTo: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["disponibility"]>
    composites: {}
  }

  type DisponibilityGetPayload<S extends boolean | null | undefined | DisponibilityDefaultArgs> = $Result.GetResult<Prisma.$DisponibilityPayload, S>

  type DisponibilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisponibilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisponibilityCountAggregateInputType | true
    }

  export interface DisponibilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disponibility'], meta: { name: 'Disponibility' } }
    /**
     * Find zero or one Disponibility that matches the filter.
     * @param {DisponibilityFindUniqueArgs} args - Arguments to find a Disponibility
     * @example
     * // Get one Disponibility
     * const disponibility = await prisma.disponibility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisponibilityFindUniqueArgs>(args: SelectSubset<T, DisponibilityFindUniqueArgs<ExtArgs>>): Prisma__DisponibilityClient<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disponibility that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisponibilityFindUniqueOrThrowArgs} args - Arguments to find a Disponibility
     * @example
     * // Get one Disponibility
     * const disponibility = await prisma.disponibility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisponibilityFindUniqueOrThrowArgs>(args: SelectSubset<T, DisponibilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisponibilityClient<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disponibility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilityFindFirstArgs} args - Arguments to find a Disponibility
     * @example
     * // Get one Disponibility
     * const disponibility = await prisma.disponibility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisponibilityFindFirstArgs>(args?: SelectSubset<T, DisponibilityFindFirstArgs<ExtArgs>>): Prisma__DisponibilityClient<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disponibility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilityFindFirstOrThrowArgs} args - Arguments to find a Disponibility
     * @example
     * // Get one Disponibility
     * const disponibility = await prisma.disponibility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisponibilityFindFirstOrThrowArgs>(args?: SelectSubset<T, DisponibilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisponibilityClient<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disponibilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disponibilities
     * const disponibilities = await prisma.disponibility.findMany()
     * 
     * // Get first 10 Disponibilities
     * const disponibilities = await prisma.disponibility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disponibilityWithIdOnly = await prisma.disponibility.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisponibilityFindManyArgs>(args?: SelectSubset<T, DisponibilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disponibility.
     * @param {DisponibilityCreateArgs} args - Arguments to create a Disponibility.
     * @example
     * // Create one Disponibility
     * const Disponibility = await prisma.disponibility.create({
     *   data: {
     *     // ... data to create a Disponibility
     *   }
     * })
     * 
     */
    create<T extends DisponibilityCreateArgs>(args: SelectSubset<T, DisponibilityCreateArgs<ExtArgs>>): Prisma__DisponibilityClient<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disponibilities.
     * @param {DisponibilityCreateManyArgs} args - Arguments to create many Disponibilities.
     * @example
     * // Create many Disponibilities
     * const disponibility = await prisma.disponibility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisponibilityCreateManyArgs>(args?: SelectSubset<T, DisponibilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disponibilities and returns the data saved in the database.
     * @param {DisponibilityCreateManyAndReturnArgs} args - Arguments to create many Disponibilities.
     * @example
     * // Create many Disponibilities
     * const disponibility = await prisma.disponibility.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disponibilities and only return the `id`
     * const disponibilityWithIdOnly = await prisma.disponibility.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisponibilityCreateManyAndReturnArgs>(args?: SelectSubset<T, DisponibilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disponibility.
     * @param {DisponibilityDeleteArgs} args - Arguments to delete one Disponibility.
     * @example
     * // Delete one Disponibility
     * const Disponibility = await prisma.disponibility.delete({
     *   where: {
     *     // ... filter to delete one Disponibility
     *   }
     * })
     * 
     */
    delete<T extends DisponibilityDeleteArgs>(args: SelectSubset<T, DisponibilityDeleteArgs<ExtArgs>>): Prisma__DisponibilityClient<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disponibility.
     * @param {DisponibilityUpdateArgs} args - Arguments to update one Disponibility.
     * @example
     * // Update one Disponibility
     * const disponibility = await prisma.disponibility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisponibilityUpdateArgs>(args: SelectSubset<T, DisponibilityUpdateArgs<ExtArgs>>): Prisma__DisponibilityClient<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disponibilities.
     * @param {DisponibilityDeleteManyArgs} args - Arguments to filter Disponibilities to delete.
     * @example
     * // Delete a few Disponibilities
     * const { count } = await prisma.disponibility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisponibilityDeleteManyArgs>(args?: SelectSubset<T, DisponibilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disponibilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disponibilities
     * const disponibility = await prisma.disponibility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisponibilityUpdateManyArgs>(args: SelectSubset<T, DisponibilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disponibilities and returns the data updated in the database.
     * @param {DisponibilityUpdateManyAndReturnArgs} args - Arguments to update many Disponibilities.
     * @example
     * // Update many Disponibilities
     * const disponibility = await prisma.disponibility.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disponibilities and only return the `id`
     * const disponibilityWithIdOnly = await prisma.disponibility.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DisponibilityUpdateManyAndReturnArgs>(args: SelectSubset<T, DisponibilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disponibility.
     * @param {DisponibilityUpsertArgs} args - Arguments to update or create a Disponibility.
     * @example
     * // Update or create a Disponibility
     * const disponibility = await prisma.disponibility.upsert({
     *   create: {
     *     // ... data to create a Disponibility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disponibility we want to update
     *   }
     * })
     */
    upsert<T extends DisponibilityUpsertArgs>(args: SelectSubset<T, DisponibilityUpsertArgs<ExtArgs>>): Prisma__DisponibilityClient<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disponibilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilityCountArgs} args - Arguments to filter Disponibilities to count.
     * @example
     * // Count the number of Disponibilities
     * const count = await prisma.disponibility.count({
     *   where: {
     *     // ... the filter for the Disponibilities we want to count
     *   }
     * })
    **/
    count<T extends DisponibilityCountArgs>(
      args?: Subset<T, DisponibilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisponibilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disponibility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisponibilityAggregateArgs>(args: Subset<T, DisponibilityAggregateArgs>): Prisma.PrismaPromise<GetDisponibilityAggregateType<T>>

    /**
     * Group by Disponibility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisponibilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisponibilityGroupByArgs['orderBy'] }
        : { orderBy?: DisponibilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisponibilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisponibilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disponibility model
   */
  readonly fields: DisponibilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disponibility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisponibilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountsDefaultArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Disponibility model
   */
  interface DisponibilityFieldRefs {
    readonly id: FieldRef<"Disponibility", 'Int'>
    readonly accountId: FieldRef<"Disponibility", 'Int'>
    readonly availableFrom: FieldRef<"Disponibility", 'DateTime'>
    readonly availableTo: FieldRef<"Disponibility", 'DateTime'>
    readonly createdAt: FieldRef<"Disponibility", 'DateTime'>
    readonly updatedAt: FieldRef<"Disponibility", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Disponibility findUnique
   */
  export type DisponibilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    /**
     * Filter, which Disponibility to fetch.
     */
    where: DisponibilityWhereUniqueInput
  }

  /**
   * Disponibility findUniqueOrThrow
   */
  export type DisponibilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    /**
     * Filter, which Disponibility to fetch.
     */
    where: DisponibilityWhereUniqueInput
  }

  /**
   * Disponibility findFirst
   */
  export type DisponibilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    /**
     * Filter, which Disponibility to fetch.
     */
    where?: DisponibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilities to fetch.
     */
    orderBy?: DisponibilityOrderByWithRelationInput | DisponibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disponibilities.
     */
    cursor?: DisponibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disponibilities.
     */
    distinct?: DisponibilityScalarFieldEnum | DisponibilityScalarFieldEnum[]
  }

  /**
   * Disponibility findFirstOrThrow
   */
  export type DisponibilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    /**
     * Filter, which Disponibility to fetch.
     */
    where?: DisponibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilities to fetch.
     */
    orderBy?: DisponibilityOrderByWithRelationInput | DisponibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disponibilities.
     */
    cursor?: DisponibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disponibilities.
     */
    distinct?: DisponibilityScalarFieldEnum | DisponibilityScalarFieldEnum[]
  }

  /**
   * Disponibility findMany
   */
  export type DisponibilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilities to fetch.
     */
    where?: DisponibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilities to fetch.
     */
    orderBy?: DisponibilityOrderByWithRelationInput | DisponibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disponibilities.
     */
    cursor?: DisponibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilities.
     */
    skip?: number
    distinct?: DisponibilityScalarFieldEnum | DisponibilityScalarFieldEnum[]
  }

  /**
   * Disponibility create
   */
  export type DisponibilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Disponibility.
     */
    data: XOR<DisponibilityCreateInput, DisponibilityUncheckedCreateInput>
  }

  /**
   * Disponibility createMany
   */
  export type DisponibilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disponibilities.
     */
    data: DisponibilityCreateManyInput | DisponibilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disponibility createManyAndReturn
   */
  export type DisponibilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * The data used to create many Disponibilities.
     */
    data: DisponibilityCreateManyInput | DisponibilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disponibility update
   */
  export type DisponibilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Disponibility.
     */
    data: XOR<DisponibilityUpdateInput, DisponibilityUncheckedUpdateInput>
    /**
     * Choose, which Disponibility to update.
     */
    where: DisponibilityWhereUniqueInput
  }

  /**
   * Disponibility updateMany
   */
  export type DisponibilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disponibilities.
     */
    data: XOR<DisponibilityUpdateManyMutationInput, DisponibilityUncheckedUpdateManyInput>
    /**
     * Filter which Disponibilities to update
     */
    where?: DisponibilityWhereInput
    /**
     * Limit how many Disponibilities to update.
     */
    limit?: number
  }

  /**
   * Disponibility updateManyAndReturn
   */
  export type DisponibilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * The data used to update Disponibilities.
     */
    data: XOR<DisponibilityUpdateManyMutationInput, DisponibilityUncheckedUpdateManyInput>
    /**
     * Filter which Disponibilities to update
     */
    where?: DisponibilityWhereInput
    /**
     * Limit how many Disponibilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disponibility upsert
   */
  export type DisponibilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Disponibility to update in case it exists.
     */
    where: DisponibilityWhereUniqueInput
    /**
     * In case the Disponibility found by the `where` argument doesn't exist, create a new Disponibility with this data.
     */
    create: XOR<DisponibilityCreateInput, DisponibilityUncheckedCreateInput>
    /**
     * In case the Disponibility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisponibilityUpdateInput, DisponibilityUncheckedUpdateInput>
  }

  /**
   * Disponibility delete
   */
  export type DisponibilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    /**
     * Filter which Disponibility to delete.
     */
    where: DisponibilityWhereUniqueInput
  }

  /**
   * Disponibility deleteMany
   */
  export type DisponibilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disponibilities to delete
     */
    where?: DisponibilityWhereInput
    /**
     * Limit how many Disponibilities to delete.
     */
    limit?: number
  }

  /**
   * Disponibility without action
   */
  export type DisponibilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    productName: string | null
    productLogo: string | null
    productDescription: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    productName: string | null
    productLogo: string | null
    productDescription: string | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    productName: number
    productLogo: number
    productDescription: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    productName?: true
    productLogo?: true
    productDescription?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    productName?: true
    productLogo?: true
    productDescription?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    productName?: true
    productLogo?: true
    productDescription?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    productName: string
    productLogo: string
    productDescription: string
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    productLogo?: boolean
    productDescription?: boolean
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    productLogo?: boolean
    productDescription?: boolean
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    productLogo?: boolean
    productDescription?: boolean
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    id?: boolean
    productName?: boolean
    productLogo?: boolean
    productDescription?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productName" | "productLogo" | "productDescription", ExtArgs["result"]["products"]>

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productName: string
      productLogo: string
      productDescription: string
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly id: FieldRef<"Products", 'Int'>
    readonly productName: FieldRef<"Products", 'String'>
    readonly productLogo: FieldRef<"Products", 'String'>
    readonly productDescription: FieldRef<"Products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
    leaderId: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
    leaderId: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    leaderId: number | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    leaderId: number | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    leaderId: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
    leaderId?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
    leaderId?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    leaderId?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    leaderId?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    leaderId?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    leaderId: number
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaderId?: boolean
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaderId?: boolean
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaderId?: boolean
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    leaderId?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leaderId", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      account: Prisma.$AccountsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      leaderId: number
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountsDefaultArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'Int'>
    readonly leaderId: FieldRef<"Team", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Prospects
   */

  export type AggregateProspects = {
    _count: ProspectsCountAggregateOutputType | null
    _avg: ProspectsAvgAggregateOutputType | null
    _sum: ProspectsSumAggregateOutputType | null
    _min: ProspectsMinAggregateOutputType | null
    _max: ProspectsMaxAggregateOutputType | null
  }

  export type ProspectsAvgAggregateOutputType = {
    id: number | null
  }

  export type ProspectsSumAggregateOutputType = {
    id: number | null
  }

  export type ProspectsMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    gender: $Enums.Gender | null
    AgeRange: string | null
    situation: string | null
    address: string | null
    city: string | null
    postalCode: string | null
    phone: string | null
    landline: string | null
  }

  export type ProspectsMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    gender: $Enums.Gender | null
    AgeRange: string | null
    situation: string | null
    address: string | null
    city: string | null
    postalCode: string | null
    phone: string | null
    landline: string | null
  }

  export type ProspectsCountAggregateOutputType = {
    id: number
    fullName: number
    gender: number
    AgeRange: number
    situation: number
    address: number
    city: number
    postalCode: number
    phone: number
    landline: number
    _all: number
  }


  export type ProspectsAvgAggregateInputType = {
    id?: true
  }

  export type ProspectsSumAggregateInputType = {
    id?: true
  }

  export type ProspectsMinAggregateInputType = {
    id?: true
    fullName?: true
    gender?: true
    AgeRange?: true
    situation?: true
    address?: true
    city?: true
    postalCode?: true
    phone?: true
    landline?: true
  }

  export type ProspectsMaxAggregateInputType = {
    id?: true
    fullName?: true
    gender?: true
    AgeRange?: true
    situation?: true
    address?: true
    city?: true
    postalCode?: true
    phone?: true
    landline?: true
  }

  export type ProspectsCountAggregateInputType = {
    id?: true
    fullName?: true
    gender?: true
    AgeRange?: true
    situation?: true
    address?: true
    city?: true
    postalCode?: true
    phone?: true
    landline?: true
    _all?: true
  }

  export type ProspectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prospects to aggregate.
     */
    where?: ProspectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prospects to fetch.
     */
    orderBy?: ProspectsOrderByWithRelationInput | ProspectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProspectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prospects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prospects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prospects
    **/
    _count?: true | ProspectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProspectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProspectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProspectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProspectsMaxAggregateInputType
  }

  export type GetProspectsAggregateType<T extends ProspectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProspects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProspects[P]>
      : GetScalarType<T[P], AggregateProspects[P]>
  }




  export type ProspectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProspectsWhereInput
    orderBy?: ProspectsOrderByWithAggregationInput | ProspectsOrderByWithAggregationInput[]
    by: ProspectsScalarFieldEnum[] | ProspectsScalarFieldEnum
    having?: ProspectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProspectsCountAggregateInputType | true
    _avg?: ProspectsAvgAggregateInputType
    _sum?: ProspectsSumAggregateInputType
    _min?: ProspectsMinAggregateInputType
    _max?: ProspectsMaxAggregateInputType
  }

  export type ProspectsGroupByOutputType = {
    id: number
    fullName: string
    gender: $Enums.Gender
    AgeRange: string
    situation: string
    address: string
    city: string
    postalCode: string
    phone: string
    landline: string
    _count: ProspectsCountAggregateOutputType | null
    _avg: ProspectsAvgAggregateOutputType | null
    _sum: ProspectsSumAggregateOutputType | null
    _min: ProspectsMinAggregateOutputType | null
    _max: ProspectsMaxAggregateOutputType | null
  }

  type GetProspectsGroupByPayload<T extends ProspectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProspectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProspectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProspectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProspectsGroupByOutputType[P]>
        }
      >
    >


  export type ProspectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    gender?: boolean
    AgeRange?: boolean
    situation?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    phone?: boolean
    landline?: boolean
    Appointments?: boolean | Prospects$AppointmentsArgs<ExtArgs>
    _count?: boolean | ProspectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prospects"]>

  export type ProspectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    gender?: boolean
    AgeRange?: boolean
    situation?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    phone?: boolean
    landline?: boolean
  }, ExtArgs["result"]["prospects"]>

  export type ProspectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    gender?: boolean
    AgeRange?: boolean
    situation?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    phone?: boolean
    landline?: boolean
  }, ExtArgs["result"]["prospects"]>

  export type ProspectsSelectScalar = {
    id?: boolean
    fullName?: boolean
    gender?: boolean
    AgeRange?: boolean
    situation?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    phone?: boolean
    landline?: boolean
  }

  export type ProspectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "gender" | "AgeRange" | "situation" | "address" | "city" | "postalCode" | "phone" | "landline", ExtArgs["result"]["prospects"]>
  export type ProspectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Appointments?: boolean | Prospects$AppointmentsArgs<ExtArgs>
    _count?: boolean | ProspectsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProspectsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProspectsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProspectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prospects"
    objects: {
      Appointments: Prisma.$AppointmentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      gender: $Enums.Gender
      AgeRange: string
      situation: string
      address: string
      city: string
      postalCode: string
      phone: string
      landline: string
    }, ExtArgs["result"]["prospects"]>
    composites: {}
  }

  type ProspectsGetPayload<S extends boolean | null | undefined | ProspectsDefaultArgs> = $Result.GetResult<Prisma.$ProspectsPayload, S>

  type ProspectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProspectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProspectsCountAggregateInputType | true
    }

  export interface ProspectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prospects'], meta: { name: 'Prospects' } }
    /**
     * Find zero or one Prospects that matches the filter.
     * @param {ProspectsFindUniqueArgs} args - Arguments to find a Prospects
     * @example
     * // Get one Prospects
     * const prospects = await prisma.prospects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProspectsFindUniqueArgs>(args: SelectSubset<T, ProspectsFindUniqueArgs<ExtArgs>>): Prisma__ProspectsClient<$Result.GetResult<Prisma.$ProspectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prospects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProspectsFindUniqueOrThrowArgs} args - Arguments to find a Prospects
     * @example
     * // Get one Prospects
     * const prospects = await prisma.prospects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProspectsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProspectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProspectsClient<$Result.GetResult<Prisma.$ProspectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prospects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectsFindFirstArgs} args - Arguments to find a Prospects
     * @example
     * // Get one Prospects
     * const prospects = await prisma.prospects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProspectsFindFirstArgs>(args?: SelectSubset<T, ProspectsFindFirstArgs<ExtArgs>>): Prisma__ProspectsClient<$Result.GetResult<Prisma.$ProspectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prospects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectsFindFirstOrThrowArgs} args - Arguments to find a Prospects
     * @example
     * // Get one Prospects
     * const prospects = await prisma.prospects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProspectsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProspectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProspectsClient<$Result.GetResult<Prisma.$ProspectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prospects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prospects
     * const prospects = await prisma.prospects.findMany()
     * 
     * // Get first 10 Prospects
     * const prospects = await prisma.prospects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prospectsWithIdOnly = await prisma.prospects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProspectsFindManyArgs>(args?: SelectSubset<T, ProspectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProspectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prospects.
     * @param {ProspectsCreateArgs} args - Arguments to create a Prospects.
     * @example
     * // Create one Prospects
     * const Prospects = await prisma.prospects.create({
     *   data: {
     *     // ... data to create a Prospects
     *   }
     * })
     * 
     */
    create<T extends ProspectsCreateArgs>(args: SelectSubset<T, ProspectsCreateArgs<ExtArgs>>): Prisma__ProspectsClient<$Result.GetResult<Prisma.$ProspectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prospects.
     * @param {ProspectsCreateManyArgs} args - Arguments to create many Prospects.
     * @example
     * // Create many Prospects
     * const prospects = await prisma.prospects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProspectsCreateManyArgs>(args?: SelectSubset<T, ProspectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prospects and returns the data saved in the database.
     * @param {ProspectsCreateManyAndReturnArgs} args - Arguments to create many Prospects.
     * @example
     * // Create many Prospects
     * const prospects = await prisma.prospects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prospects and only return the `id`
     * const prospectsWithIdOnly = await prisma.prospects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProspectsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProspectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProspectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prospects.
     * @param {ProspectsDeleteArgs} args - Arguments to delete one Prospects.
     * @example
     * // Delete one Prospects
     * const Prospects = await prisma.prospects.delete({
     *   where: {
     *     // ... filter to delete one Prospects
     *   }
     * })
     * 
     */
    delete<T extends ProspectsDeleteArgs>(args: SelectSubset<T, ProspectsDeleteArgs<ExtArgs>>): Prisma__ProspectsClient<$Result.GetResult<Prisma.$ProspectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prospects.
     * @param {ProspectsUpdateArgs} args - Arguments to update one Prospects.
     * @example
     * // Update one Prospects
     * const prospects = await prisma.prospects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProspectsUpdateArgs>(args: SelectSubset<T, ProspectsUpdateArgs<ExtArgs>>): Prisma__ProspectsClient<$Result.GetResult<Prisma.$ProspectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prospects.
     * @param {ProspectsDeleteManyArgs} args - Arguments to filter Prospects to delete.
     * @example
     * // Delete a few Prospects
     * const { count } = await prisma.prospects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProspectsDeleteManyArgs>(args?: SelectSubset<T, ProspectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prospects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prospects
     * const prospects = await prisma.prospects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProspectsUpdateManyArgs>(args: SelectSubset<T, ProspectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prospects and returns the data updated in the database.
     * @param {ProspectsUpdateManyAndReturnArgs} args - Arguments to update many Prospects.
     * @example
     * // Update many Prospects
     * const prospects = await prisma.prospects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prospects and only return the `id`
     * const prospectsWithIdOnly = await prisma.prospects.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProspectsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProspectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProspectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prospects.
     * @param {ProspectsUpsertArgs} args - Arguments to update or create a Prospects.
     * @example
     * // Update or create a Prospects
     * const prospects = await prisma.prospects.upsert({
     *   create: {
     *     // ... data to create a Prospects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prospects we want to update
     *   }
     * })
     */
    upsert<T extends ProspectsUpsertArgs>(args: SelectSubset<T, ProspectsUpsertArgs<ExtArgs>>): Prisma__ProspectsClient<$Result.GetResult<Prisma.$ProspectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prospects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectsCountArgs} args - Arguments to filter Prospects to count.
     * @example
     * // Count the number of Prospects
     * const count = await prisma.prospects.count({
     *   where: {
     *     // ... the filter for the Prospects we want to count
     *   }
     * })
    **/
    count<T extends ProspectsCountArgs>(
      args?: Subset<T, ProspectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProspectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prospects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProspectsAggregateArgs>(args: Subset<T, ProspectsAggregateArgs>): Prisma.PrismaPromise<GetProspectsAggregateType<T>>

    /**
     * Group by Prospects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProspectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProspectsGroupByArgs['orderBy'] }
        : { orderBy?: ProspectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProspectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProspectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prospects model
   */
  readonly fields: ProspectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prospects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProspectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Appointments<T extends Prospects$AppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Prospects$AppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prospects model
   */
  interface ProspectsFieldRefs {
    readonly id: FieldRef<"Prospects", 'Int'>
    readonly fullName: FieldRef<"Prospects", 'String'>
    readonly gender: FieldRef<"Prospects", 'Gender'>
    readonly AgeRange: FieldRef<"Prospects", 'String'>
    readonly situation: FieldRef<"Prospects", 'String'>
    readonly address: FieldRef<"Prospects", 'String'>
    readonly city: FieldRef<"Prospects", 'String'>
    readonly postalCode: FieldRef<"Prospects", 'String'>
    readonly phone: FieldRef<"Prospects", 'String'>
    readonly landline: FieldRef<"Prospects", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Prospects findUnique
   */
  export type ProspectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospects
     */
    select?: ProspectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospects
     */
    omit?: ProspectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectsInclude<ExtArgs> | null
    /**
     * Filter, which Prospects to fetch.
     */
    where: ProspectsWhereUniqueInput
  }

  /**
   * Prospects findUniqueOrThrow
   */
  export type ProspectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospects
     */
    select?: ProspectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospects
     */
    omit?: ProspectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectsInclude<ExtArgs> | null
    /**
     * Filter, which Prospects to fetch.
     */
    where: ProspectsWhereUniqueInput
  }

  /**
   * Prospects findFirst
   */
  export type ProspectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospects
     */
    select?: ProspectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospects
     */
    omit?: ProspectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectsInclude<ExtArgs> | null
    /**
     * Filter, which Prospects to fetch.
     */
    where?: ProspectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prospects to fetch.
     */
    orderBy?: ProspectsOrderByWithRelationInput | ProspectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prospects.
     */
    cursor?: ProspectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prospects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prospects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prospects.
     */
    distinct?: ProspectsScalarFieldEnum | ProspectsScalarFieldEnum[]
  }

  /**
   * Prospects findFirstOrThrow
   */
  export type ProspectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospects
     */
    select?: ProspectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospects
     */
    omit?: ProspectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectsInclude<ExtArgs> | null
    /**
     * Filter, which Prospects to fetch.
     */
    where?: ProspectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prospects to fetch.
     */
    orderBy?: ProspectsOrderByWithRelationInput | ProspectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prospects.
     */
    cursor?: ProspectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prospects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prospects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prospects.
     */
    distinct?: ProspectsScalarFieldEnum | ProspectsScalarFieldEnum[]
  }

  /**
   * Prospects findMany
   */
  export type ProspectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospects
     */
    select?: ProspectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospects
     */
    omit?: ProspectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectsInclude<ExtArgs> | null
    /**
     * Filter, which Prospects to fetch.
     */
    where?: ProspectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prospects to fetch.
     */
    orderBy?: ProspectsOrderByWithRelationInput | ProspectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prospects.
     */
    cursor?: ProspectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prospects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prospects.
     */
    skip?: number
    distinct?: ProspectsScalarFieldEnum | ProspectsScalarFieldEnum[]
  }

  /**
   * Prospects create
   */
  export type ProspectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospects
     */
    select?: ProspectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospects
     */
    omit?: ProspectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectsInclude<ExtArgs> | null
    /**
     * The data needed to create a Prospects.
     */
    data: XOR<ProspectsCreateInput, ProspectsUncheckedCreateInput>
  }

  /**
   * Prospects createMany
   */
  export type ProspectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prospects.
     */
    data: ProspectsCreateManyInput | ProspectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prospects createManyAndReturn
   */
  export type ProspectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospects
     */
    select?: ProspectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prospects
     */
    omit?: ProspectsOmit<ExtArgs> | null
    /**
     * The data used to create many Prospects.
     */
    data: ProspectsCreateManyInput | ProspectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prospects update
   */
  export type ProspectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospects
     */
    select?: ProspectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospects
     */
    omit?: ProspectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectsInclude<ExtArgs> | null
    /**
     * The data needed to update a Prospects.
     */
    data: XOR<ProspectsUpdateInput, ProspectsUncheckedUpdateInput>
    /**
     * Choose, which Prospects to update.
     */
    where: ProspectsWhereUniqueInput
  }

  /**
   * Prospects updateMany
   */
  export type ProspectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prospects.
     */
    data: XOR<ProspectsUpdateManyMutationInput, ProspectsUncheckedUpdateManyInput>
    /**
     * Filter which Prospects to update
     */
    where?: ProspectsWhereInput
    /**
     * Limit how many Prospects to update.
     */
    limit?: number
  }

  /**
   * Prospects updateManyAndReturn
   */
  export type ProspectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospects
     */
    select?: ProspectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prospects
     */
    omit?: ProspectsOmit<ExtArgs> | null
    /**
     * The data used to update Prospects.
     */
    data: XOR<ProspectsUpdateManyMutationInput, ProspectsUncheckedUpdateManyInput>
    /**
     * Filter which Prospects to update
     */
    where?: ProspectsWhereInput
    /**
     * Limit how many Prospects to update.
     */
    limit?: number
  }

  /**
   * Prospects upsert
   */
  export type ProspectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospects
     */
    select?: ProspectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospects
     */
    omit?: ProspectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectsInclude<ExtArgs> | null
    /**
     * The filter to search for the Prospects to update in case it exists.
     */
    where: ProspectsWhereUniqueInput
    /**
     * In case the Prospects found by the `where` argument doesn't exist, create a new Prospects with this data.
     */
    create: XOR<ProspectsCreateInput, ProspectsUncheckedCreateInput>
    /**
     * In case the Prospects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProspectsUpdateInput, ProspectsUncheckedUpdateInput>
  }

  /**
   * Prospects delete
   */
  export type ProspectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospects
     */
    select?: ProspectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospects
     */
    omit?: ProspectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectsInclude<ExtArgs> | null
    /**
     * Filter which Prospects to delete.
     */
    where: ProspectsWhereUniqueInput
  }

  /**
   * Prospects deleteMany
   */
  export type ProspectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prospects to delete
     */
    where?: ProspectsWhereInput
    /**
     * Limit how many Prospects to delete.
     */
    limit?: number
  }

  /**
   * Prospects.Appointments
   */
  export type Prospects$AppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    where?: AppointmentsWhereInput
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    cursor?: AppointmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Prospects without action
   */
  export type ProspectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospects
     */
    select?: ProspectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospects
     */
    omit?: ProspectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectsInclude<ExtArgs> | null
  }


  /**
   * Model Appointments
   */

  export type AggregateAppointments = {
    _count: AppointmentsCountAggregateOutputType | null
    _avg: AppointmentsAvgAggregateOutputType | null
    _sum: AppointmentsSumAggregateOutputType | null
    _min: AppointmentsMinAggregateOutputType | null
    _max: AppointmentsMaxAggregateOutputType | null
  }

  export type AppointmentsAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
    prospectId: number | null
    commercialId: number | null
  }

  export type AppointmentsSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
    prospectId: number | null
    commercialId: number | null
  }

  export type AppointmentsMinAggregateOutputType = {
    id: number | null
    startDate: Date | null
    endDate: Date | null
    callRecord: string | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    prospectId: number | null
    commercialId: number | null
    status: $Enums.StatusAppointment | null
  }

  export type AppointmentsMaxAggregateOutputType = {
    id: number | null
    startDate: Date | null
    endDate: Date | null
    callRecord: string | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    prospectId: number | null
    commercialId: number | null
    status: $Enums.StatusAppointment | null
  }

  export type AppointmentsCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    callRecord: number
    createdBy: number
    createdAt: number
    updatedAt: number
    prospectId: number
    commercialId: number
    status: number
    _all: number
  }


  export type AppointmentsAvgAggregateInputType = {
    id?: true
    createdBy?: true
    prospectId?: true
    commercialId?: true
  }

  export type AppointmentsSumAggregateInputType = {
    id?: true
    createdBy?: true
    prospectId?: true
    commercialId?: true
  }

  export type AppointmentsMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    callRecord?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    prospectId?: true
    commercialId?: true
    status?: true
  }

  export type AppointmentsMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    callRecord?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    prospectId?: true
    commercialId?: true
    status?: true
  }

  export type AppointmentsCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    callRecord?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    prospectId?: true
    commercialId?: true
    status?: true
    _all?: true
  }

  export type AppointmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to aggregate.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentsMaxAggregateInputType
  }

  export type GetAppointmentsAggregateType<T extends AppointmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointments[P]>
      : GetScalarType<T[P], AggregateAppointments[P]>
  }




  export type AppointmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentsWhereInput
    orderBy?: AppointmentsOrderByWithAggregationInput | AppointmentsOrderByWithAggregationInput[]
    by: AppointmentsScalarFieldEnum[] | AppointmentsScalarFieldEnum
    having?: AppointmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentsCountAggregateInputType | true
    _avg?: AppointmentsAvgAggregateInputType
    _sum?: AppointmentsSumAggregateInputType
    _min?: AppointmentsMinAggregateInputType
    _max?: AppointmentsMaxAggregateInputType
  }

  export type AppointmentsGroupByOutputType = {
    id: number
    startDate: Date
    endDate: Date
    callRecord: string
    createdBy: number
    createdAt: Date
    updatedAt: Date
    prospectId: number
    commercialId: number
    status: $Enums.StatusAppointment
    _count: AppointmentsCountAggregateOutputType | null
    _avg: AppointmentsAvgAggregateOutputType | null
    _sum: AppointmentsSumAggregateOutputType | null
    _min: AppointmentsMinAggregateOutputType | null
    _max: AppointmentsMaxAggregateOutputType | null
  }

  type GetAppointmentsGroupByPayload<T extends AppointmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentsGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    callRecord?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prospectId?: boolean
    commercialId?: boolean
    status?: boolean
    prospect?: boolean | ProspectsDefaultArgs<ExtArgs>
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointments"]>

  export type AppointmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    callRecord?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prospectId?: boolean
    commercialId?: boolean
    status?: boolean
    prospect?: boolean | ProspectsDefaultArgs<ExtArgs>
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointments"]>

  export type AppointmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    callRecord?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prospectId?: boolean
    commercialId?: boolean
    status?: boolean
    prospect?: boolean | ProspectsDefaultArgs<ExtArgs>
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointments"]>

  export type AppointmentsSelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    callRecord?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prospectId?: boolean
    commercialId?: boolean
    status?: boolean
  }

  export type AppointmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startDate" | "endDate" | "callRecord" | "createdBy" | "createdAt" | "updatedAt" | "prospectId" | "commercialId" | "status", ExtArgs["result"]["appointments"]>
  export type AppointmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prospect?: boolean | ProspectsDefaultArgs<ExtArgs>
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }
  export type AppointmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prospect?: boolean | ProspectsDefaultArgs<ExtArgs>
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }
  export type AppointmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prospect?: boolean | ProspectsDefaultArgs<ExtArgs>
    account?: boolean | AccountsDefaultArgs<ExtArgs>
  }

  export type $AppointmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointments"
    objects: {
      prospect: Prisma.$ProspectsPayload<ExtArgs>
      account: Prisma.$AccountsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startDate: Date
      endDate: Date
      callRecord: string
      createdBy: number
      createdAt: Date
      updatedAt: Date
      prospectId: number
      commercialId: number
      status: $Enums.StatusAppointment
    }, ExtArgs["result"]["appointments"]>
    composites: {}
  }

  type AppointmentsGetPayload<S extends boolean | null | undefined | AppointmentsDefaultArgs> = $Result.GetResult<Prisma.$AppointmentsPayload, S>

  type AppointmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentsCountAggregateInputType | true
    }

  export interface AppointmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointments'], meta: { name: 'Appointments' } }
    /**
     * Find zero or one Appointments that matches the filter.
     * @param {AppointmentsFindUniqueArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentsFindUniqueArgs>(args: SelectSubset<T, AppointmentsFindUniqueArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentsFindUniqueOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsFindFirstArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentsFindFirstArgs>(args?: SelectSubset<T, AppointmentsFindFirstArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsFindFirstOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointments.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentsWithIdOnly = await prisma.appointments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentsFindManyArgs>(args?: SelectSubset<T, AppointmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointments.
     * @param {AppointmentsCreateArgs} args - Arguments to create a Appointments.
     * @example
     * // Create one Appointments
     * const Appointments = await prisma.appointments.create({
     *   data: {
     *     // ... data to create a Appointments
     *   }
     * })
     * 
     */
    create<T extends AppointmentsCreateArgs>(args: SelectSubset<T, AppointmentsCreateArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentsCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointments = await prisma.appointments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentsCreateManyArgs>(args?: SelectSubset<T, AppointmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentsCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointments = await prisma.appointments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentsWithIdOnly = await prisma.appointments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointments.
     * @param {AppointmentsDeleteArgs} args - Arguments to delete one Appointments.
     * @example
     * // Delete one Appointments
     * const Appointments = await prisma.appointments.delete({
     *   where: {
     *     // ... filter to delete one Appointments
     *   }
     * })
     * 
     */
    delete<T extends AppointmentsDeleteArgs>(args: SelectSubset<T, AppointmentsDeleteArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointments.
     * @param {AppointmentsUpdateArgs} args - Arguments to update one Appointments.
     * @example
     * // Update one Appointments
     * const appointments = await prisma.appointments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentsUpdateArgs>(args: SelectSubset<T, AppointmentsUpdateArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentsDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentsDeleteManyArgs>(args?: SelectSubset<T, AppointmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointments = await prisma.appointments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentsUpdateManyArgs>(args: SelectSubset<T, AppointmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentsUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointments = await prisma.appointments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentsWithIdOnly = await prisma.appointments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointments.
     * @param {AppointmentsUpsertArgs} args - Arguments to update or create a Appointments.
     * @example
     * // Update or create a Appointments
     * const appointments = await prisma.appointments.upsert({
     *   create: {
     *     // ... data to create a Appointments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointments we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentsUpsertArgs>(args: SelectSubset<T, AppointmentsUpsertArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointments.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentsCountArgs>(
      args?: Subset<T, AppointmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentsAggregateArgs>(args: Subset<T, AppointmentsAggregateArgs>): Prisma.PrismaPromise<GetAppointmentsAggregateType<T>>

    /**
     * Group by Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentsGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointments model
   */
  readonly fields: AppointmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prospect<T extends ProspectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProspectsDefaultArgs<ExtArgs>>): Prisma__ProspectsClient<$Result.GetResult<Prisma.$ProspectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends AccountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountsDefaultArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointments model
   */
  interface AppointmentsFieldRefs {
    readonly id: FieldRef<"Appointments", 'Int'>
    readonly startDate: FieldRef<"Appointments", 'DateTime'>
    readonly endDate: FieldRef<"Appointments", 'DateTime'>
    readonly callRecord: FieldRef<"Appointments", 'String'>
    readonly createdBy: FieldRef<"Appointments", 'Int'>
    readonly createdAt: FieldRef<"Appointments", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointments", 'DateTime'>
    readonly prospectId: FieldRef<"Appointments", 'Int'>
    readonly commercialId: FieldRef<"Appointments", 'Int'>
    readonly status: FieldRef<"Appointments", 'StatusAppointment'>
  }
    

  // Custom InputTypes
  /**
   * Appointments findUnique
   */
  export type AppointmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments findUniqueOrThrow
   */
  export type AppointmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments findFirst
   */
  export type AppointmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Appointments findFirstOrThrow
   */
  export type AppointmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Appointments findMany
   */
  export type AppointmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Appointments create
   */
  export type AppointmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointments.
     */
    data: XOR<AppointmentsCreateInput, AppointmentsUncheckedCreateInput>
  }

  /**
   * Appointments createMany
   */
  export type AppointmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentsCreateManyInput | AppointmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointments createManyAndReturn
   */
  export type AppointmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentsCreateManyInput | AppointmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointments update
   */
  export type AppointmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointments.
     */
    data: XOR<AppointmentsUpdateInput, AppointmentsUncheckedUpdateInput>
    /**
     * Choose, which Appointments to update.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments updateMany
   */
  export type AppointmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentsUpdateManyMutationInput, AppointmentsUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentsWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointments updateManyAndReturn
   */
  export type AppointmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentsUpdateManyMutationInput, AppointmentsUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentsWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointments upsert
   */
  export type AppointmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointments to update in case it exists.
     */
    where: AppointmentsWhereUniqueInput
    /**
     * In case the Appointments found by the `where` argument doesn't exist, create a new Appointments with this data.
     */
    create: XOR<AppointmentsCreateInput, AppointmentsUncheckedCreateInput>
    /**
     * In case the Appointments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentsUpdateInput, AppointmentsUncheckedUpdateInput>
  }

  /**
   * Appointments delete
   */
  export type AppointmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter which Appointments to delete.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments deleteMany
   */
  export type AppointmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentsWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointments without action
   */
  export type AppointmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    fullName: 'fullName',
    image: 'image',
    email: 'email',
    phone: 'phone',
    departementCode: 'departementCode',
    departementName: 'departementName',
    siret: 'siret',
    societyName: 'societyName',
    logo: 'logo',
    userStatus: 'userStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const AccountsScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const DisponibilityScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    availableFrom: 'availableFrom',
    availableTo: 'availableTo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DisponibilityScalarFieldEnum = (typeof DisponibilityScalarFieldEnum)[keyof typeof DisponibilityScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    productName: 'productName',
    productLogo: 'productLogo',
    productDescription: 'productDescription'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    leaderId: 'leaderId'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const ProspectsScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    gender: 'gender',
    AgeRange: 'AgeRange',
    situation: 'situation',
    address: 'address',
    city: 'city',
    postalCode: 'postalCode',
    phone: 'phone',
    landline: 'landline'
  };

  export type ProspectsScalarFieldEnum = (typeof ProspectsScalarFieldEnum)[keyof typeof ProspectsScalarFieldEnum]


  export const AppointmentsScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    callRecord: 'callRecord',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    prospectId: 'prospectId',
    commercialId: 'commercialId',
    status: 'status'
  };

  export type AppointmentsScalarFieldEnum = (typeof AppointmentsScalarFieldEnum)[keyof typeof AppointmentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'StatusAppointment'
   */
  export type EnumStatusAppointmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAppointment'>
    


  /**
   * Reference to a field of type 'StatusAppointment[]'
   */
  export type ListEnumStatusAppointmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAppointment[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    firstName?: StringFilter<"Users"> | string
    lastName?: StringFilter<"Users"> | string
    fullName?: StringNullableFilter<"Users"> | string | null
    image?: StringNullableFilter<"Users"> | string | null
    email?: StringNullableFilter<"Users"> | string | null
    phone?: StringNullableFilter<"Users"> | string | null
    departementCode?: StringNullableFilter<"Users"> | string | null
    departementName?: StringNullableFilter<"Users"> | string | null
    siret?: StringNullableFilter<"Users"> | string | null
    societyName?: StringNullableFilter<"Users"> | string | null
    logo?: StringNullableFilter<"Users"> | string | null
    userStatus?: EnumStatusFilter<"Users"> | $Enums.Status
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    accounts?: AccountsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    fullName?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    departementCode?: SortOrderInput | SortOrder
    departementName?: SortOrderInput | SortOrder
    siret?: SortOrderInput | SortOrder
    societyName?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    userStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone?: string
    siret?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    firstName?: StringFilter<"Users"> | string
    lastName?: StringFilter<"Users"> | string
    fullName?: StringNullableFilter<"Users"> | string | null
    image?: StringNullableFilter<"Users"> | string | null
    departementCode?: StringNullableFilter<"Users"> | string | null
    departementName?: StringNullableFilter<"Users"> | string | null
    societyName?: StringNullableFilter<"Users"> | string | null
    logo?: StringNullableFilter<"Users"> | string | null
    userStatus?: EnumStatusFilter<"Users"> | $Enums.Status
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    accounts?: AccountsListRelationFilter
  }, "id" | "email" | "phone" | "siret">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    fullName?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    departementCode?: SortOrderInput | SortOrder
    departementName?: SortOrderInput | SortOrder
    siret?: SortOrderInput | SortOrder
    societyName?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    userStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    firstName?: StringWithAggregatesFilter<"Users"> | string
    lastName?: StringWithAggregatesFilter<"Users"> | string
    fullName?: StringNullableWithAggregatesFilter<"Users"> | string | null
    image?: StringNullableWithAggregatesFilter<"Users"> | string | null
    email?: StringNullableWithAggregatesFilter<"Users"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Users"> | string | null
    departementCode?: StringNullableWithAggregatesFilter<"Users"> | string | null
    departementName?: StringNullableWithAggregatesFilter<"Users"> | string | null
    siret?: StringNullableWithAggregatesFilter<"Users"> | string | null
    societyName?: StringNullableWithAggregatesFilter<"Users"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Users"> | string | null
    userStatus?: EnumStatusWithAggregatesFilter<"Users"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type AccountsWhereInput = {
    AND?: AccountsWhereInput | AccountsWhereInput[]
    OR?: AccountsWhereInput[]
    NOT?: AccountsWhereInput | AccountsWhereInput[]
    id?: IntFilter<"Accounts"> | number
    username?: StringFilter<"Accounts"> | string
    password?: StringFilter<"Accounts"> | string
    role?: EnumRoleFilter<"Accounts"> | $Enums.Role
    status?: EnumStatusFilter<"Accounts"> | $Enums.Status
    createdAt?: DateTimeFilter<"Accounts"> | Date | string
    updatedAt?: DateTimeFilter<"Accounts"> | Date | string
    userId?: IntFilter<"Accounts"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Team?: TeamListRelationFilter
    Appointments?: AppointmentsListRelationFilter
    Disponibility?: DisponibilityListRelationFilter
  }

  export type AccountsOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UsersOrderByWithRelationInput
    Team?: TeamOrderByRelationAggregateInput
    Appointments?: AppointmentsOrderByRelationAggregateInput
    Disponibility?: DisponibilityOrderByRelationAggregateInput
  }

  export type AccountsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: AccountsWhereInput | AccountsWhereInput[]
    OR?: AccountsWhereInput[]
    NOT?: AccountsWhereInput | AccountsWhereInput[]
    password?: StringFilter<"Accounts"> | string
    role?: EnumRoleFilter<"Accounts"> | $Enums.Role
    status?: EnumStatusFilter<"Accounts"> | $Enums.Status
    createdAt?: DateTimeFilter<"Accounts"> | Date | string
    updatedAt?: DateTimeFilter<"Accounts"> | Date | string
    userId?: IntFilter<"Accounts"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Team?: TeamListRelationFilter
    Appointments?: AppointmentsListRelationFilter
    Disponibility?: DisponibilityListRelationFilter
  }, "id" | "username">

  export type AccountsOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: AccountsCountOrderByAggregateInput
    _avg?: AccountsAvgOrderByAggregateInput
    _max?: AccountsMaxOrderByAggregateInput
    _min?: AccountsMinOrderByAggregateInput
    _sum?: AccountsSumOrderByAggregateInput
  }

  export type AccountsScalarWhereWithAggregatesInput = {
    AND?: AccountsScalarWhereWithAggregatesInput | AccountsScalarWhereWithAggregatesInput[]
    OR?: AccountsScalarWhereWithAggregatesInput[]
    NOT?: AccountsScalarWhereWithAggregatesInput | AccountsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Accounts"> | number
    username?: StringWithAggregatesFilter<"Accounts"> | string
    password?: StringWithAggregatesFilter<"Accounts"> | string
    role?: EnumRoleWithAggregatesFilter<"Accounts"> | $Enums.Role
    status?: EnumStatusWithAggregatesFilter<"Accounts"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Accounts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Accounts"> | Date | string
    userId?: IntWithAggregatesFilter<"Accounts"> | number
  }

  export type DisponibilityWhereInput = {
    AND?: DisponibilityWhereInput | DisponibilityWhereInput[]
    OR?: DisponibilityWhereInput[]
    NOT?: DisponibilityWhereInput | DisponibilityWhereInput[]
    id?: IntFilter<"Disponibility"> | number
    accountId?: IntFilter<"Disponibility"> | number
    availableFrom?: DateTimeFilter<"Disponibility"> | Date | string
    availableTo?: DateTimeFilter<"Disponibility"> | Date | string
    createdAt?: DateTimeFilter<"Disponibility"> | Date | string
    updatedAt?: DateTimeFilter<"Disponibility"> | Date | string
    account?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
  }

  export type DisponibilityOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    availableFrom?: SortOrder
    availableTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    account?: AccountsOrderByWithRelationInput
  }

  export type DisponibilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DisponibilityWhereInput | DisponibilityWhereInput[]
    OR?: DisponibilityWhereInput[]
    NOT?: DisponibilityWhereInput | DisponibilityWhereInput[]
    accountId?: IntFilter<"Disponibility"> | number
    availableFrom?: DateTimeFilter<"Disponibility"> | Date | string
    availableTo?: DateTimeFilter<"Disponibility"> | Date | string
    createdAt?: DateTimeFilter<"Disponibility"> | Date | string
    updatedAt?: DateTimeFilter<"Disponibility"> | Date | string
    account?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
  }, "id">

  export type DisponibilityOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    availableFrom?: SortOrder
    availableTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DisponibilityCountOrderByAggregateInput
    _avg?: DisponibilityAvgOrderByAggregateInput
    _max?: DisponibilityMaxOrderByAggregateInput
    _min?: DisponibilityMinOrderByAggregateInput
    _sum?: DisponibilitySumOrderByAggregateInput
  }

  export type DisponibilityScalarWhereWithAggregatesInput = {
    AND?: DisponibilityScalarWhereWithAggregatesInput | DisponibilityScalarWhereWithAggregatesInput[]
    OR?: DisponibilityScalarWhereWithAggregatesInput[]
    NOT?: DisponibilityScalarWhereWithAggregatesInput | DisponibilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Disponibility"> | number
    accountId?: IntWithAggregatesFilter<"Disponibility"> | number
    availableFrom?: DateTimeWithAggregatesFilter<"Disponibility"> | Date | string
    availableTo?: DateTimeWithAggregatesFilter<"Disponibility"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Disponibility"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Disponibility"> | Date | string
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    id?: IntFilter<"Products"> | number
    productName?: StringFilter<"Products"> | string
    productLogo?: StringFilter<"Products"> | string
    productDescription?: StringFilter<"Products"> | string
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    productName?: SortOrder
    productLogo?: SortOrder
    productDescription?: SortOrder
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    productName?: StringFilter<"Products"> | string
    productLogo?: StringFilter<"Products"> | string
    productDescription?: StringFilter<"Products"> | string
  }, "id">

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    productName?: SortOrder
    productLogo?: SortOrder
    productDescription?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Products"> | number
    productName?: StringWithAggregatesFilter<"Products"> | string
    productLogo?: StringWithAggregatesFilter<"Products"> | string
    productDescription?: StringWithAggregatesFilter<"Products"> | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: IntFilter<"Team"> | number
    leaderId?: IntFilter<"Team"> | number
    account?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    leaderId?: SortOrder
    account?: AccountsOrderByWithRelationInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    leaderId?: IntFilter<"Team"> | number
    account?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    leaderId?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Team"> | number
    leaderId?: IntWithAggregatesFilter<"Team"> | number
  }

  export type ProspectsWhereInput = {
    AND?: ProspectsWhereInput | ProspectsWhereInput[]
    OR?: ProspectsWhereInput[]
    NOT?: ProspectsWhereInput | ProspectsWhereInput[]
    id?: IntFilter<"Prospects"> | number
    fullName?: StringFilter<"Prospects"> | string
    gender?: EnumGenderFilter<"Prospects"> | $Enums.Gender
    AgeRange?: StringFilter<"Prospects"> | string
    situation?: StringFilter<"Prospects"> | string
    address?: StringFilter<"Prospects"> | string
    city?: StringFilter<"Prospects"> | string
    postalCode?: StringFilter<"Prospects"> | string
    phone?: StringFilter<"Prospects"> | string
    landline?: StringFilter<"Prospects"> | string
    Appointments?: AppointmentsListRelationFilter
  }

  export type ProspectsOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    AgeRange?: SortOrder
    situation?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    phone?: SortOrder
    landline?: SortOrder
    Appointments?: AppointmentsOrderByRelationAggregateInput
  }

  export type ProspectsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProspectsWhereInput | ProspectsWhereInput[]
    OR?: ProspectsWhereInput[]
    NOT?: ProspectsWhereInput | ProspectsWhereInput[]
    fullName?: StringFilter<"Prospects"> | string
    gender?: EnumGenderFilter<"Prospects"> | $Enums.Gender
    AgeRange?: StringFilter<"Prospects"> | string
    situation?: StringFilter<"Prospects"> | string
    address?: StringFilter<"Prospects"> | string
    city?: StringFilter<"Prospects"> | string
    postalCode?: StringFilter<"Prospects"> | string
    phone?: StringFilter<"Prospects"> | string
    landline?: StringFilter<"Prospects"> | string
    Appointments?: AppointmentsListRelationFilter
  }, "id">

  export type ProspectsOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    AgeRange?: SortOrder
    situation?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    phone?: SortOrder
    landline?: SortOrder
    _count?: ProspectsCountOrderByAggregateInput
    _avg?: ProspectsAvgOrderByAggregateInput
    _max?: ProspectsMaxOrderByAggregateInput
    _min?: ProspectsMinOrderByAggregateInput
    _sum?: ProspectsSumOrderByAggregateInput
  }

  export type ProspectsScalarWhereWithAggregatesInput = {
    AND?: ProspectsScalarWhereWithAggregatesInput | ProspectsScalarWhereWithAggregatesInput[]
    OR?: ProspectsScalarWhereWithAggregatesInput[]
    NOT?: ProspectsScalarWhereWithAggregatesInput | ProspectsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prospects"> | number
    fullName?: StringWithAggregatesFilter<"Prospects"> | string
    gender?: EnumGenderWithAggregatesFilter<"Prospects"> | $Enums.Gender
    AgeRange?: StringWithAggregatesFilter<"Prospects"> | string
    situation?: StringWithAggregatesFilter<"Prospects"> | string
    address?: StringWithAggregatesFilter<"Prospects"> | string
    city?: StringWithAggregatesFilter<"Prospects"> | string
    postalCode?: StringWithAggregatesFilter<"Prospects"> | string
    phone?: StringWithAggregatesFilter<"Prospects"> | string
    landline?: StringWithAggregatesFilter<"Prospects"> | string
  }

  export type AppointmentsWhereInput = {
    AND?: AppointmentsWhereInput | AppointmentsWhereInput[]
    OR?: AppointmentsWhereInput[]
    NOT?: AppointmentsWhereInput | AppointmentsWhereInput[]
    id?: IntFilter<"Appointments"> | number
    startDate?: DateTimeFilter<"Appointments"> | Date | string
    endDate?: DateTimeFilter<"Appointments"> | Date | string
    callRecord?: StringFilter<"Appointments"> | string
    createdBy?: IntFilter<"Appointments"> | number
    createdAt?: DateTimeFilter<"Appointments"> | Date | string
    updatedAt?: DateTimeFilter<"Appointments"> | Date | string
    prospectId?: IntFilter<"Appointments"> | number
    commercialId?: IntFilter<"Appointments"> | number
    status?: EnumStatusAppointmentFilter<"Appointments"> | $Enums.StatusAppointment
    prospect?: XOR<ProspectsScalarRelationFilter, ProspectsWhereInput>
    account?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
  }

  export type AppointmentsOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    callRecord?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prospectId?: SortOrder
    commercialId?: SortOrder
    status?: SortOrder
    prospect?: ProspectsOrderByWithRelationInput
    account?: AccountsOrderByWithRelationInput
  }

  export type AppointmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentsWhereInput | AppointmentsWhereInput[]
    OR?: AppointmentsWhereInput[]
    NOT?: AppointmentsWhereInput | AppointmentsWhereInput[]
    startDate?: DateTimeFilter<"Appointments"> | Date | string
    endDate?: DateTimeFilter<"Appointments"> | Date | string
    callRecord?: StringFilter<"Appointments"> | string
    createdBy?: IntFilter<"Appointments"> | number
    createdAt?: DateTimeFilter<"Appointments"> | Date | string
    updatedAt?: DateTimeFilter<"Appointments"> | Date | string
    prospectId?: IntFilter<"Appointments"> | number
    commercialId?: IntFilter<"Appointments"> | number
    status?: EnumStatusAppointmentFilter<"Appointments"> | $Enums.StatusAppointment
    prospect?: XOR<ProspectsScalarRelationFilter, ProspectsWhereInput>
    account?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
  }, "id">

  export type AppointmentsOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    callRecord?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prospectId?: SortOrder
    commercialId?: SortOrder
    status?: SortOrder
    _count?: AppointmentsCountOrderByAggregateInput
    _avg?: AppointmentsAvgOrderByAggregateInput
    _max?: AppointmentsMaxOrderByAggregateInput
    _min?: AppointmentsMinOrderByAggregateInput
    _sum?: AppointmentsSumOrderByAggregateInput
  }

  export type AppointmentsScalarWhereWithAggregatesInput = {
    AND?: AppointmentsScalarWhereWithAggregatesInput | AppointmentsScalarWhereWithAggregatesInput[]
    OR?: AppointmentsScalarWhereWithAggregatesInput[]
    NOT?: AppointmentsScalarWhereWithAggregatesInput | AppointmentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointments"> | number
    startDate?: DateTimeWithAggregatesFilter<"Appointments"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Appointments"> | Date | string
    callRecord?: StringWithAggregatesFilter<"Appointments"> | string
    createdBy?: IntWithAggregatesFilter<"Appointments"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Appointments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointments"> | Date | string
    prospectId?: IntWithAggregatesFilter<"Appointments"> | number
    commercialId?: IntWithAggregatesFilter<"Appointments"> | number
    status?: EnumStatusAppointmentWithAggregatesFilter<"Appointments"> | $Enums.StatusAppointment
  }

  export type UsersCreateInput = {
    firstName: string
    lastName: string
    fullName?: string | null
    image?: string | null
    email?: string | null
    phone?: string | null
    departementCode?: string | null
    departementName?: string | null
    siret?: string | null
    societyName?: string | null
    logo?: string | null
    userStatus?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    fullName?: string | null
    image?: string | null
    email?: string | null
    phone?: string | null
    departementCode?: string | null
    departementName?: string | null
    siret?: string | null
    societyName?: string | null
    logo?: string | null
    userStatus?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    departementCode?: NullableStringFieldUpdateOperationsInput | string | null
    departementName?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    societyName?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    departementCode?: NullableStringFieldUpdateOperationsInput | string | null
    departementName?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    societyName?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    fullName?: string | null
    image?: string | null
    email?: string | null
    phone?: string | null
    departementCode?: string | null
    departementName?: string | null
    siret?: string | null
    societyName?: string | null
    logo?: string | null
    userStatus?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    departementCode?: NullableStringFieldUpdateOperationsInput | string | null
    departementName?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    societyName?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    departementCode?: NullableStringFieldUpdateOperationsInput | string | null
    departementName?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    societyName?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsCreateInput = {
    username: string
    password: string
    role: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutAccountsInput
    Team?: TeamCreateNestedManyWithoutAccountInput
    Appointments?: AppointmentsCreateNestedManyWithoutAccountInput
    Disponibility?: DisponibilityCreateNestedManyWithoutAccountInput
  }

  export type AccountsUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    role: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    Team?: TeamUncheckedCreateNestedManyWithoutAccountInput
    Appointments?: AppointmentsUncheckedCreateNestedManyWithoutAccountInput
    Disponibility?: DisponibilityUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountsUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutAccountsNestedInput
    Team?: TeamUpdateManyWithoutAccountNestedInput
    Appointments?: AppointmentsUpdateManyWithoutAccountNestedInput
    Disponibility?: DisponibilityUpdateManyWithoutAccountNestedInput
  }

  export type AccountsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    Team?: TeamUncheckedUpdateManyWithoutAccountNestedInput
    Appointments?: AppointmentsUncheckedUpdateManyWithoutAccountNestedInput
    Disponibility?: DisponibilityUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountsCreateManyInput = {
    id?: number
    username: string
    password: string
    role: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type AccountsUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DisponibilityCreateInput = {
    availableFrom: Date | string
    availableTo: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    account: AccountsCreateNestedOneWithoutDisponibilityInput
  }

  export type DisponibilityUncheckedCreateInput = {
    id?: number
    accountId: number
    availableFrom: Date | string
    availableTo: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisponibilityUpdateInput = {
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountsUpdateOneRequiredWithoutDisponibilityNestedInput
  }

  export type DisponibilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisponibilityCreateManyInput = {
    id?: number
    accountId: number
    availableFrom: Date | string
    availableTo: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisponibilityUpdateManyMutationInput = {
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisponibilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateInput = {
    productName: string
    productLogo: string
    productDescription: string
  }

  export type ProductsUncheckedCreateInput = {
    id?: number
    productName: string
    productLogo: string
    productDescription: string
  }

  export type ProductsUpdateInput = {
    productName?: StringFieldUpdateOperationsInput | string
    productLogo?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    productLogo?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsCreateManyInput = {
    id?: number
    productName: string
    productLogo: string
    productDescription: string
  }

  export type ProductsUpdateManyMutationInput = {
    productName?: StringFieldUpdateOperationsInput | string
    productLogo?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    productLogo?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
  }

  export type TeamCreateInput = {
    account: AccountsCreateNestedOneWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: number
    leaderId: number
  }

  export type TeamUpdateInput = {
    account?: AccountsUpdateOneRequiredWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    leaderId?: IntFieldUpdateOperationsInput | number
  }

  export type TeamCreateManyInput = {
    id?: number
    leaderId: number
  }

  export type TeamUpdateManyMutationInput = {

  }

  export type TeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    leaderId?: IntFieldUpdateOperationsInput | number
  }

  export type ProspectsCreateInput = {
    fullName: string
    gender: $Enums.Gender
    AgeRange: string
    situation: string
    address: string
    city: string
    postalCode: string
    phone: string
    landline: string
    Appointments?: AppointmentsCreateNestedManyWithoutProspectInput
  }

  export type ProspectsUncheckedCreateInput = {
    id?: number
    fullName: string
    gender: $Enums.Gender
    AgeRange: string
    situation: string
    address: string
    city: string
    postalCode: string
    phone: string
    landline: string
    Appointments?: AppointmentsUncheckedCreateNestedManyWithoutProspectInput
  }

  export type ProspectsUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    AgeRange?: StringFieldUpdateOperationsInput | string
    situation?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    landline?: StringFieldUpdateOperationsInput | string
    Appointments?: AppointmentsUpdateManyWithoutProspectNestedInput
  }

  export type ProspectsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    AgeRange?: StringFieldUpdateOperationsInput | string
    situation?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    landline?: StringFieldUpdateOperationsInput | string
    Appointments?: AppointmentsUncheckedUpdateManyWithoutProspectNestedInput
  }

  export type ProspectsCreateManyInput = {
    id?: number
    fullName: string
    gender: $Enums.Gender
    AgeRange: string
    situation: string
    address: string
    city: string
    postalCode: string
    phone: string
    landline: string
  }

  export type ProspectsUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    AgeRange?: StringFieldUpdateOperationsInput | string
    situation?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    landline?: StringFieldUpdateOperationsInput | string
  }

  export type ProspectsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    AgeRange?: StringFieldUpdateOperationsInput | string
    situation?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    landline?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentsCreateInput = {
    startDate: Date | string
    endDate: Date | string
    callRecord: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commercialId: number
    status?: $Enums.StatusAppointment
    prospect: ProspectsCreateNestedOneWithoutAppointmentsInput
    account: AccountsCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentsUncheckedCreateInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    callRecord: string
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
    prospectId: number
    commercialId: number
    status?: $Enums.StatusAppointment
  }

  export type AppointmentsUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    callRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commercialId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAppointmentFieldUpdateOperationsInput | $Enums.StatusAppointment
    prospect?: ProspectsUpdateOneRequiredWithoutAppointmentsNestedInput
    account?: AccountsUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    callRecord?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prospectId?: IntFieldUpdateOperationsInput | number
    commercialId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAppointmentFieldUpdateOperationsInput | $Enums.StatusAppointment
  }

  export type AppointmentsCreateManyInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    callRecord: string
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
    prospectId: number
    commercialId: number
    status?: $Enums.StatusAppointment
  }

  export type AppointmentsUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    callRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commercialId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAppointmentFieldUpdateOperationsInput | $Enums.StatusAppointment
  }

  export type AppointmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    callRecord?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prospectId?: IntFieldUpdateOperationsInput | number
    commercialId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAppointmentFieldUpdateOperationsInput | $Enums.StatusAppointment
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountsListRelationFilter = {
    every?: AccountsWhereInput
    some?: AccountsWhereInput
    none?: AccountsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    fullName?: SortOrder
    image?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    departementCode?: SortOrder
    departementName?: SortOrder
    siret?: SortOrder
    societyName?: SortOrder
    logo?: SortOrder
    userStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    fullName?: SortOrder
    image?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    departementCode?: SortOrder
    departementName?: SortOrder
    siret?: SortOrder
    societyName?: SortOrder
    logo?: SortOrder
    userStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    fullName?: SortOrder
    image?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    departementCode?: SortOrder
    departementName?: SortOrder
    siret?: SortOrder
    societyName?: SortOrder
    logo?: SortOrder
    userStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type AppointmentsListRelationFilter = {
    every?: AppointmentsWhereInput
    some?: AppointmentsWhereInput
    none?: AppointmentsWhereInput
  }

  export type DisponibilityListRelationFilter = {
    every?: DisponibilityWhereInput
    some?: DisponibilityWhereInput
    none?: DisponibilityWhereInput
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisponibilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountsCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type AccountsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AccountsMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type AccountsMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type AccountsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type AccountsScalarRelationFilter = {
    is?: AccountsWhereInput
    isNot?: AccountsWhereInput
  }

  export type DisponibilityCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    availableFrom?: SortOrder
    availableTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisponibilityAvgOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
  }

  export type DisponibilityMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    availableFrom?: SortOrder
    availableTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisponibilityMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    availableFrom?: SortOrder
    availableTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisponibilitySumOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    productLogo?: SortOrder
    productDescription?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    productLogo?: SortOrder
    productDescription?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    productLogo?: SortOrder
    productDescription?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    leaderId?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    id?: SortOrder
    leaderId?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    leaderId?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    leaderId?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    id?: SortOrder
    leaderId?: SortOrder
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type ProspectsCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    AgeRange?: SortOrder
    situation?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    phone?: SortOrder
    landline?: SortOrder
  }

  export type ProspectsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProspectsMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    AgeRange?: SortOrder
    situation?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    phone?: SortOrder
    landline?: SortOrder
  }

  export type ProspectsMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    AgeRange?: SortOrder
    situation?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    phone?: SortOrder
    landline?: SortOrder
  }

  export type ProspectsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumStatusAppointmentFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAppointment | EnumStatusAppointmentFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAppointment[] | ListEnumStatusAppointmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAppointment[] | ListEnumStatusAppointmentFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAppointmentFilter<$PrismaModel> | $Enums.StatusAppointment
  }

  export type ProspectsScalarRelationFilter = {
    is?: ProspectsWhereInput
    isNot?: ProspectsWhereInput
  }

  export type AppointmentsCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    callRecord?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prospectId?: SortOrder
    commercialId?: SortOrder
    status?: SortOrder
  }

  export type AppointmentsAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    prospectId?: SortOrder
    commercialId?: SortOrder
  }

  export type AppointmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    callRecord?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prospectId?: SortOrder
    commercialId?: SortOrder
    status?: SortOrder
  }

  export type AppointmentsMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    callRecord?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prospectId?: SortOrder
    commercialId?: SortOrder
    status?: SortOrder
  }

  export type AppointmentsSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    prospectId?: SortOrder
    commercialId?: SortOrder
  }

  export type EnumStatusAppointmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAppointment | EnumStatusAppointmentFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAppointment[] | ListEnumStatusAppointmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAppointment[] | ListEnumStatusAppointmentFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAppointmentWithAggregatesFilter<$PrismaModel> | $Enums.StatusAppointment
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAppointmentFilter<$PrismaModel>
    _max?: NestedEnumStatusAppointmentFilter<$PrismaModel>
  }

  export type AccountsCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput> | AccountsCreateWithoutUserInput[] | AccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountsCreateOrConnectWithoutUserInput | AccountsCreateOrConnectWithoutUserInput[]
    createMany?: AccountsCreateManyUserInputEnvelope
    connect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
  }

  export type AccountsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput> | AccountsCreateWithoutUserInput[] | AccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountsCreateOrConnectWithoutUserInput | AccountsCreateOrConnectWithoutUserInput[]
    createMany?: AccountsCreateManyUserInputEnvelope
    connect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountsUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput> | AccountsCreateWithoutUserInput[] | AccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountsCreateOrConnectWithoutUserInput | AccountsCreateOrConnectWithoutUserInput[]
    upsert?: AccountsUpsertWithWhereUniqueWithoutUserInput | AccountsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountsCreateManyUserInputEnvelope
    set?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    disconnect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    delete?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    connect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    update?: AccountsUpdateWithWhereUniqueWithoutUserInput | AccountsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountsUpdateManyWithWhereWithoutUserInput | AccountsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountsScalarWhereInput | AccountsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput> | AccountsCreateWithoutUserInput[] | AccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountsCreateOrConnectWithoutUserInput | AccountsCreateOrConnectWithoutUserInput[]
    upsert?: AccountsUpsertWithWhereUniqueWithoutUserInput | AccountsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountsCreateManyUserInputEnvelope
    set?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    disconnect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    delete?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    connect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    update?: AccountsUpdateWithWhereUniqueWithoutUserInput | AccountsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountsUpdateManyWithWhereWithoutUserInput | AccountsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountsScalarWhereInput | AccountsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAccountsInput
    connect?: UsersWhereUniqueInput
  }

  export type TeamCreateNestedManyWithoutAccountInput = {
    create?: XOR<TeamCreateWithoutAccountInput, TeamUncheckedCreateWithoutAccountInput> | TeamCreateWithoutAccountInput[] | TeamUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutAccountInput | TeamCreateOrConnectWithoutAccountInput[]
    createMany?: TeamCreateManyAccountInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type AppointmentsCreateNestedManyWithoutAccountInput = {
    create?: XOR<AppointmentsCreateWithoutAccountInput, AppointmentsUncheckedCreateWithoutAccountInput> | AppointmentsCreateWithoutAccountInput[] | AppointmentsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutAccountInput | AppointmentsCreateOrConnectWithoutAccountInput[]
    createMany?: AppointmentsCreateManyAccountInputEnvelope
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
  }

  export type DisponibilityCreateNestedManyWithoutAccountInput = {
    create?: XOR<DisponibilityCreateWithoutAccountInput, DisponibilityUncheckedCreateWithoutAccountInput> | DisponibilityCreateWithoutAccountInput[] | DisponibilityUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: DisponibilityCreateOrConnectWithoutAccountInput | DisponibilityCreateOrConnectWithoutAccountInput[]
    createMany?: DisponibilityCreateManyAccountInputEnvelope
    connect?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<TeamCreateWithoutAccountInput, TeamUncheckedCreateWithoutAccountInput> | TeamCreateWithoutAccountInput[] | TeamUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutAccountInput | TeamCreateOrConnectWithoutAccountInput[]
    createMany?: TeamCreateManyAccountInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type AppointmentsUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<AppointmentsCreateWithoutAccountInput, AppointmentsUncheckedCreateWithoutAccountInput> | AppointmentsCreateWithoutAccountInput[] | AppointmentsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutAccountInput | AppointmentsCreateOrConnectWithoutAccountInput[]
    createMany?: AppointmentsCreateManyAccountInputEnvelope
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
  }

  export type DisponibilityUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<DisponibilityCreateWithoutAccountInput, DisponibilityUncheckedCreateWithoutAccountInput> | DisponibilityCreateWithoutAccountInput[] | DisponibilityUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: DisponibilityCreateOrConnectWithoutAccountInput | DisponibilityCreateOrConnectWithoutAccountInput[]
    createMany?: DisponibilityCreateManyAccountInputEnvelope
    connect?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UsersUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAccountsInput
    upsert?: UsersUpsertWithoutAccountsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAccountsInput, UsersUpdateWithoutAccountsInput>, UsersUncheckedUpdateWithoutAccountsInput>
  }

  export type TeamUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TeamCreateWithoutAccountInput, TeamUncheckedCreateWithoutAccountInput> | TeamCreateWithoutAccountInput[] | TeamUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutAccountInput | TeamCreateOrConnectWithoutAccountInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutAccountInput | TeamUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TeamCreateManyAccountInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutAccountInput | TeamUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutAccountInput | TeamUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type AppointmentsUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AppointmentsCreateWithoutAccountInput, AppointmentsUncheckedCreateWithoutAccountInput> | AppointmentsCreateWithoutAccountInput[] | AppointmentsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutAccountInput | AppointmentsCreateOrConnectWithoutAccountInput[]
    upsert?: AppointmentsUpsertWithWhereUniqueWithoutAccountInput | AppointmentsUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AppointmentsCreateManyAccountInputEnvelope
    set?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    disconnect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    delete?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    update?: AppointmentsUpdateWithWhereUniqueWithoutAccountInput | AppointmentsUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AppointmentsUpdateManyWithWhereWithoutAccountInput | AppointmentsUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
  }

  export type DisponibilityUpdateManyWithoutAccountNestedInput = {
    create?: XOR<DisponibilityCreateWithoutAccountInput, DisponibilityUncheckedCreateWithoutAccountInput> | DisponibilityCreateWithoutAccountInput[] | DisponibilityUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: DisponibilityCreateOrConnectWithoutAccountInput | DisponibilityCreateOrConnectWithoutAccountInput[]
    upsert?: DisponibilityUpsertWithWhereUniqueWithoutAccountInput | DisponibilityUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: DisponibilityCreateManyAccountInputEnvelope
    set?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
    disconnect?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
    delete?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
    connect?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
    update?: DisponibilityUpdateWithWhereUniqueWithoutAccountInput | DisponibilityUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: DisponibilityUpdateManyWithWhereWithoutAccountInput | DisponibilityUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: DisponibilityScalarWhereInput | DisponibilityScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TeamCreateWithoutAccountInput, TeamUncheckedCreateWithoutAccountInput> | TeamCreateWithoutAccountInput[] | TeamUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutAccountInput | TeamCreateOrConnectWithoutAccountInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutAccountInput | TeamUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TeamCreateManyAccountInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutAccountInput | TeamUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutAccountInput | TeamUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type AppointmentsUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AppointmentsCreateWithoutAccountInput, AppointmentsUncheckedCreateWithoutAccountInput> | AppointmentsCreateWithoutAccountInput[] | AppointmentsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutAccountInput | AppointmentsCreateOrConnectWithoutAccountInput[]
    upsert?: AppointmentsUpsertWithWhereUniqueWithoutAccountInput | AppointmentsUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AppointmentsCreateManyAccountInputEnvelope
    set?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    disconnect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    delete?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    update?: AppointmentsUpdateWithWhereUniqueWithoutAccountInput | AppointmentsUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AppointmentsUpdateManyWithWhereWithoutAccountInput | AppointmentsUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
  }

  export type DisponibilityUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<DisponibilityCreateWithoutAccountInput, DisponibilityUncheckedCreateWithoutAccountInput> | DisponibilityCreateWithoutAccountInput[] | DisponibilityUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: DisponibilityCreateOrConnectWithoutAccountInput | DisponibilityCreateOrConnectWithoutAccountInput[]
    upsert?: DisponibilityUpsertWithWhereUniqueWithoutAccountInput | DisponibilityUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: DisponibilityCreateManyAccountInputEnvelope
    set?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
    disconnect?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
    delete?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
    connect?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
    update?: DisponibilityUpdateWithWhereUniqueWithoutAccountInput | DisponibilityUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: DisponibilityUpdateManyWithWhereWithoutAccountInput | DisponibilityUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: DisponibilityScalarWhereInput | DisponibilityScalarWhereInput[]
  }

  export type AccountsCreateNestedOneWithoutDisponibilityInput = {
    create?: XOR<AccountsCreateWithoutDisponibilityInput, AccountsUncheckedCreateWithoutDisponibilityInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutDisponibilityInput
    connect?: AccountsWhereUniqueInput
  }

  export type AccountsUpdateOneRequiredWithoutDisponibilityNestedInput = {
    create?: XOR<AccountsCreateWithoutDisponibilityInput, AccountsUncheckedCreateWithoutDisponibilityInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutDisponibilityInput
    upsert?: AccountsUpsertWithoutDisponibilityInput
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutDisponibilityInput, AccountsUpdateWithoutDisponibilityInput>, AccountsUncheckedUpdateWithoutDisponibilityInput>
  }

  export type AccountsCreateNestedOneWithoutTeamInput = {
    create?: XOR<AccountsCreateWithoutTeamInput, AccountsUncheckedCreateWithoutTeamInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutTeamInput
    connect?: AccountsWhereUniqueInput
  }

  export type AccountsUpdateOneRequiredWithoutTeamNestedInput = {
    create?: XOR<AccountsCreateWithoutTeamInput, AccountsUncheckedCreateWithoutTeamInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutTeamInput
    upsert?: AccountsUpsertWithoutTeamInput
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutTeamInput, AccountsUpdateWithoutTeamInput>, AccountsUncheckedUpdateWithoutTeamInput>
  }

  export type AppointmentsCreateNestedManyWithoutProspectInput = {
    create?: XOR<AppointmentsCreateWithoutProspectInput, AppointmentsUncheckedCreateWithoutProspectInput> | AppointmentsCreateWithoutProspectInput[] | AppointmentsUncheckedCreateWithoutProspectInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutProspectInput | AppointmentsCreateOrConnectWithoutProspectInput[]
    createMany?: AppointmentsCreateManyProspectInputEnvelope
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
  }

  export type AppointmentsUncheckedCreateNestedManyWithoutProspectInput = {
    create?: XOR<AppointmentsCreateWithoutProspectInput, AppointmentsUncheckedCreateWithoutProspectInput> | AppointmentsCreateWithoutProspectInput[] | AppointmentsUncheckedCreateWithoutProspectInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutProspectInput | AppointmentsCreateOrConnectWithoutProspectInput[]
    createMany?: AppointmentsCreateManyProspectInputEnvelope
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type AppointmentsUpdateManyWithoutProspectNestedInput = {
    create?: XOR<AppointmentsCreateWithoutProspectInput, AppointmentsUncheckedCreateWithoutProspectInput> | AppointmentsCreateWithoutProspectInput[] | AppointmentsUncheckedCreateWithoutProspectInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutProspectInput | AppointmentsCreateOrConnectWithoutProspectInput[]
    upsert?: AppointmentsUpsertWithWhereUniqueWithoutProspectInput | AppointmentsUpsertWithWhereUniqueWithoutProspectInput[]
    createMany?: AppointmentsCreateManyProspectInputEnvelope
    set?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    disconnect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    delete?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    update?: AppointmentsUpdateWithWhereUniqueWithoutProspectInput | AppointmentsUpdateWithWhereUniqueWithoutProspectInput[]
    updateMany?: AppointmentsUpdateManyWithWhereWithoutProspectInput | AppointmentsUpdateManyWithWhereWithoutProspectInput[]
    deleteMany?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
  }

  export type AppointmentsUncheckedUpdateManyWithoutProspectNestedInput = {
    create?: XOR<AppointmentsCreateWithoutProspectInput, AppointmentsUncheckedCreateWithoutProspectInput> | AppointmentsCreateWithoutProspectInput[] | AppointmentsUncheckedCreateWithoutProspectInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutProspectInput | AppointmentsCreateOrConnectWithoutProspectInput[]
    upsert?: AppointmentsUpsertWithWhereUniqueWithoutProspectInput | AppointmentsUpsertWithWhereUniqueWithoutProspectInput[]
    createMany?: AppointmentsCreateManyProspectInputEnvelope
    set?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    disconnect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    delete?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    update?: AppointmentsUpdateWithWhereUniqueWithoutProspectInput | AppointmentsUpdateWithWhereUniqueWithoutProspectInput[]
    updateMany?: AppointmentsUpdateManyWithWhereWithoutProspectInput | AppointmentsUpdateManyWithWhereWithoutProspectInput[]
    deleteMany?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
  }

  export type ProspectsCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<ProspectsCreateWithoutAppointmentsInput, ProspectsUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ProspectsCreateOrConnectWithoutAppointmentsInput
    connect?: ProspectsWhereUniqueInput
  }

  export type AccountsCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<AccountsCreateWithoutAppointmentsInput, AccountsUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutAppointmentsInput
    connect?: AccountsWhereUniqueInput
  }

  export type EnumStatusAppointmentFieldUpdateOperationsInput = {
    set?: $Enums.StatusAppointment
  }

  export type ProspectsUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<ProspectsCreateWithoutAppointmentsInput, ProspectsUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ProspectsCreateOrConnectWithoutAppointmentsInput
    upsert?: ProspectsUpsertWithoutAppointmentsInput
    connect?: ProspectsWhereUniqueInput
    update?: XOR<XOR<ProspectsUpdateToOneWithWhereWithoutAppointmentsInput, ProspectsUpdateWithoutAppointmentsInput>, ProspectsUncheckedUpdateWithoutAppointmentsInput>
  }

  export type AccountsUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<AccountsCreateWithoutAppointmentsInput, AccountsUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutAppointmentsInput
    upsert?: AccountsUpsertWithoutAppointmentsInput
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutAppointmentsInput, AccountsUpdateWithoutAppointmentsInput>, AccountsUncheckedUpdateWithoutAppointmentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumStatusAppointmentFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAppointment | EnumStatusAppointmentFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAppointment[] | ListEnumStatusAppointmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAppointment[] | ListEnumStatusAppointmentFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAppointmentFilter<$PrismaModel> | $Enums.StatusAppointment
  }

  export type NestedEnumStatusAppointmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAppointment | EnumStatusAppointmentFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAppointment[] | ListEnumStatusAppointmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAppointment[] | ListEnumStatusAppointmentFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAppointmentWithAggregatesFilter<$PrismaModel> | $Enums.StatusAppointment
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAppointmentFilter<$PrismaModel>
    _max?: NestedEnumStatusAppointmentFilter<$PrismaModel>
  }

  export type AccountsCreateWithoutUserInput = {
    username: string
    password: string
    role: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    Team?: TeamCreateNestedManyWithoutAccountInput
    Appointments?: AppointmentsCreateNestedManyWithoutAccountInput
    Disponibility?: DisponibilityCreateNestedManyWithoutAccountInput
  }

  export type AccountsUncheckedCreateWithoutUserInput = {
    id?: number
    username: string
    password: string
    role: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    Team?: TeamUncheckedCreateNestedManyWithoutAccountInput
    Appointments?: AppointmentsUncheckedCreateNestedManyWithoutAccountInput
    Disponibility?: DisponibilityUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountsCreateOrConnectWithoutUserInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput>
  }

  export type AccountsCreateManyUserInputEnvelope = {
    data: AccountsCreateManyUserInput | AccountsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountsUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountsWhereUniqueInput
    update: XOR<AccountsUpdateWithoutUserInput, AccountsUncheckedUpdateWithoutUserInput>
    create: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput>
  }

  export type AccountsUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountsWhereUniqueInput
    data: XOR<AccountsUpdateWithoutUserInput, AccountsUncheckedUpdateWithoutUserInput>
  }

  export type AccountsUpdateManyWithWhereWithoutUserInput = {
    where: AccountsScalarWhereInput
    data: XOR<AccountsUpdateManyMutationInput, AccountsUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountsScalarWhereInput = {
    AND?: AccountsScalarWhereInput | AccountsScalarWhereInput[]
    OR?: AccountsScalarWhereInput[]
    NOT?: AccountsScalarWhereInput | AccountsScalarWhereInput[]
    id?: IntFilter<"Accounts"> | number
    username?: StringFilter<"Accounts"> | string
    password?: StringFilter<"Accounts"> | string
    role?: EnumRoleFilter<"Accounts"> | $Enums.Role
    status?: EnumStatusFilter<"Accounts"> | $Enums.Status
    createdAt?: DateTimeFilter<"Accounts"> | Date | string
    updatedAt?: DateTimeFilter<"Accounts"> | Date | string
    userId?: IntFilter<"Accounts"> | number
  }

  export type UsersCreateWithoutAccountsInput = {
    firstName: string
    lastName: string
    fullName?: string | null
    image?: string | null
    email?: string | null
    phone?: string | null
    departementCode?: string | null
    departementName?: string | null
    siret?: string | null
    societyName?: string | null
    logo?: string | null
    userStatus?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUncheckedCreateWithoutAccountsInput = {
    id?: number
    firstName: string
    lastName: string
    fullName?: string | null
    image?: string | null
    email?: string | null
    phone?: string | null
    departementCode?: string | null
    departementName?: string | null
    siret?: string | null
    societyName?: string | null
    logo?: string | null
    userStatus?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersCreateOrConnectWithoutAccountsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
  }

  export type TeamCreateWithoutAccountInput = {

  }

  export type TeamUncheckedCreateWithoutAccountInput = {
    id?: number
  }

  export type TeamCreateOrConnectWithoutAccountInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutAccountInput, TeamUncheckedCreateWithoutAccountInput>
  }

  export type TeamCreateManyAccountInputEnvelope = {
    data: TeamCreateManyAccountInput | TeamCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentsCreateWithoutAccountInput = {
    startDate: Date | string
    endDate: Date | string
    callRecord: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commercialId: number
    status?: $Enums.StatusAppointment
    prospect: ProspectsCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentsUncheckedCreateWithoutAccountInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    callRecord: string
    createdAt?: Date | string
    updatedAt?: Date | string
    prospectId: number
    commercialId: number
    status?: $Enums.StatusAppointment
  }

  export type AppointmentsCreateOrConnectWithoutAccountInput = {
    where: AppointmentsWhereUniqueInput
    create: XOR<AppointmentsCreateWithoutAccountInput, AppointmentsUncheckedCreateWithoutAccountInput>
  }

  export type AppointmentsCreateManyAccountInputEnvelope = {
    data: AppointmentsCreateManyAccountInput | AppointmentsCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type DisponibilityCreateWithoutAccountInput = {
    availableFrom: Date | string
    availableTo: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisponibilityUncheckedCreateWithoutAccountInput = {
    id?: number
    availableFrom: Date | string
    availableTo: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisponibilityCreateOrConnectWithoutAccountInput = {
    where: DisponibilityWhereUniqueInput
    create: XOR<DisponibilityCreateWithoutAccountInput, DisponibilityUncheckedCreateWithoutAccountInput>
  }

  export type DisponibilityCreateManyAccountInputEnvelope = {
    data: DisponibilityCreateManyAccountInput | DisponibilityCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutAccountsInput = {
    update: XOR<UsersUpdateWithoutAccountsInput, UsersUncheckedUpdateWithoutAccountsInput>
    create: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAccountsInput, UsersUncheckedUpdateWithoutAccountsInput>
  }

  export type UsersUpdateWithoutAccountsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    departementCode?: NullableStringFieldUpdateOperationsInput | string | null
    departementName?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    societyName?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    departementCode?: NullableStringFieldUpdateOperationsInput | string | null
    departementName?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    societyName?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUpsertWithWhereUniqueWithoutAccountInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutAccountInput, TeamUncheckedUpdateWithoutAccountInput>
    create: XOR<TeamCreateWithoutAccountInput, TeamUncheckedCreateWithoutAccountInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutAccountInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutAccountInput, TeamUncheckedUpdateWithoutAccountInput>
  }

  export type TeamUpdateManyWithWhereWithoutAccountInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutAccountInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: IntFilter<"Team"> | number
    leaderId?: IntFilter<"Team"> | number
  }

  export type AppointmentsUpsertWithWhereUniqueWithoutAccountInput = {
    where: AppointmentsWhereUniqueInput
    update: XOR<AppointmentsUpdateWithoutAccountInput, AppointmentsUncheckedUpdateWithoutAccountInput>
    create: XOR<AppointmentsCreateWithoutAccountInput, AppointmentsUncheckedCreateWithoutAccountInput>
  }

  export type AppointmentsUpdateWithWhereUniqueWithoutAccountInput = {
    where: AppointmentsWhereUniqueInput
    data: XOR<AppointmentsUpdateWithoutAccountInput, AppointmentsUncheckedUpdateWithoutAccountInput>
  }

  export type AppointmentsUpdateManyWithWhereWithoutAccountInput = {
    where: AppointmentsScalarWhereInput
    data: XOR<AppointmentsUpdateManyMutationInput, AppointmentsUncheckedUpdateManyWithoutAccountInput>
  }

  export type AppointmentsScalarWhereInput = {
    AND?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
    OR?: AppointmentsScalarWhereInput[]
    NOT?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
    id?: IntFilter<"Appointments"> | number
    startDate?: DateTimeFilter<"Appointments"> | Date | string
    endDate?: DateTimeFilter<"Appointments"> | Date | string
    callRecord?: StringFilter<"Appointments"> | string
    createdBy?: IntFilter<"Appointments"> | number
    createdAt?: DateTimeFilter<"Appointments"> | Date | string
    updatedAt?: DateTimeFilter<"Appointments"> | Date | string
    prospectId?: IntFilter<"Appointments"> | number
    commercialId?: IntFilter<"Appointments"> | number
    status?: EnumStatusAppointmentFilter<"Appointments"> | $Enums.StatusAppointment
  }

  export type DisponibilityUpsertWithWhereUniqueWithoutAccountInput = {
    where: DisponibilityWhereUniqueInput
    update: XOR<DisponibilityUpdateWithoutAccountInput, DisponibilityUncheckedUpdateWithoutAccountInput>
    create: XOR<DisponibilityCreateWithoutAccountInput, DisponibilityUncheckedCreateWithoutAccountInput>
  }

  export type DisponibilityUpdateWithWhereUniqueWithoutAccountInput = {
    where: DisponibilityWhereUniqueInput
    data: XOR<DisponibilityUpdateWithoutAccountInput, DisponibilityUncheckedUpdateWithoutAccountInput>
  }

  export type DisponibilityUpdateManyWithWhereWithoutAccountInput = {
    where: DisponibilityScalarWhereInput
    data: XOR<DisponibilityUpdateManyMutationInput, DisponibilityUncheckedUpdateManyWithoutAccountInput>
  }

  export type DisponibilityScalarWhereInput = {
    AND?: DisponibilityScalarWhereInput | DisponibilityScalarWhereInput[]
    OR?: DisponibilityScalarWhereInput[]
    NOT?: DisponibilityScalarWhereInput | DisponibilityScalarWhereInput[]
    id?: IntFilter<"Disponibility"> | number
    accountId?: IntFilter<"Disponibility"> | number
    availableFrom?: DateTimeFilter<"Disponibility"> | Date | string
    availableTo?: DateTimeFilter<"Disponibility"> | Date | string
    createdAt?: DateTimeFilter<"Disponibility"> | Date | string
    updatedAt?: DateTimeFilter<"Disponibility"> | Date | string
  }

  export type AccountsCreateWithoutDisponibilityInput = {
    username: string
    password: string
    role: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutAccountsInput
    Team?: TeamCreateNestedManyWithoutAccountInput
    Appointments?: AppointmentsCreateNestedManyWithoutAccountInput
  }

  export type AccountsUncheckedCreateWithoutDisponibilityInput = {
    id?: number
    username: string
    password: string
    role: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    Team?: TeamUncheckedCreateNestedManyWithoutAccountInput
    Appointments?: AppointmentsUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountsCreateOrConnectWithoutDisponibilityInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutDisponibilityInput, AccountsUncheckedCreateWithoutDisponibilityInput>
  }

  export type AccountsUpsertWithoutDisponibilityInput = {
    update: XOR<AccountsUpdateWithoutDisponibilityInput, AccountsUncheckedUpdateWithoutDisponibilityInput>
    create: XOR<AccountsCreateWithoutDisponibilityInput, AccountsUncheckedCreateWithoutDisponibilityInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutDisponibilityInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutDisponibilityInput, AccountsUncheckedUpdateWithoutDisponibilityInput>
  }

  export type AccountsUpdateWithoutDisponibilityInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutAccountsNestedInput
    Team?: TeamUpdateManyWithoutAccountNestedInput
    Appointments?: AppointmentsUpdateManyWithoutAccountNestedInput
  }

  export type AccountsUncheckedUpdateWithoutDisponibilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    Team?: TeamUncheckedUpdateManyWithoutAccountNestedInput
    Appointments?: AppointmentsUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountsCreateWithoutTeamInput = {
    username: string
    password: string
    role: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutAccountsInput
    Appointments?: AppointmentsCreateNestedManyWithoutAccountInput
    Disponibility?: DisponibilityCreateNestedManyWithoutAccountInput
  }

  export type AccountsUncheckedCreateWithoutTeamInput = {
    id?: number
    username: string
    password: string
    role: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    Appointments?: AppointmentsUncheckedCreateNestedManyWithoutAccountInput
    Disponibility?: DisponibilityUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountsCreateOrConnectWithoutTeamInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutTeamInput, AccountsUncheckedCreateWithoutTeamInput>
  }

  export type AccountsUpsertWithoutTeamInput = {
    update: XOR<AccountsUpdateWithoutTeamInput, AccountsUncheckedUpdateWithoutTeamInput>
    create: XOR<AccountsCreateWithoutTeamInput, AccountsUncheckedCreateWithoutTeamInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutTeamInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutTeamInput, AccountsUncheckedUpdateWithoutTeamInput>
  }

  export type AccountsUpdateWithoutTeamInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutAccountsNestedInput
    Appointments?: AppointmentsUpdateManyWithoutAccountNestedInput
    Disponibility?: DisponibilityUpdateManyWithoutAccountNestedInput
  }

  export type AccountsUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    Appointments?: AppointmentsUncheckedUpdateManyWithoutAccountNestedInput
    Disponibility?: DisponibilityUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AppointmentsCreateWithoutProspectInput = {
    startDate: Date | string
    endDate: Date | string
    callRecord: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commercialId: number
    status?: $Enums.StatusAppointment
    account: AccountsCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentsUncheckedCreateWithoutProspectInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    callRecord: string
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
    commercialId: number
    status?: $Enums.StatusAppointment
  }

  export type AppointmentsCreateOrConnectWithoutProspectInput = {
    where: AppointmentsWhereUniqueInput
    create: XOR<AppointmentsCreateWithoutProspectInput, AppointmentsUncheckedCreateWithoutProspectInput>
  }

  export type AppointmentsCreateManyProspectInputEnvelope = {
    data: AppointmentsCreateManyProspectInput | AppointmentsCreateManyProspectInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentsUpsertWithWhereUniqueWithoutProspectInput = {
    where: AppointmentsWhereUniqueInput
    update: XOR<AppointmentsUpdateWithoutProspectInput, AppointmentsUncheckedUpdateWithoutProspectInput>
    create: XOR<AppointmentsCreateWithoutProspectInput, AppointmentsUncheckedCreateWithoutProspectInput>
  }

  export type AppointmentsUpdateWithWhereUniqueWithoutProspectInput = {
    where: AppointmentsWhereUniqueInput
    data: XOR<AppointmentsUpdateWithoutProspectInput, AppointmentsUncheckedUpdateWithoutProspectInput>
  }

  export type AppointmentsUpdateManyWithWhereWithoutProspectInput = {
    where: AppointmentsScalarWhereInput
    data: XOR<AppointmentsUpdateManyMutationInput, AppointmentsUncheckedUpdateManyWithoutProspectInput>
  }

  export type ProspectsCreateWithoutAppointmentsInput = {
    fullName: string
    gender: $Enums.Gender
    AgeRange: string
    situation: string
    address: string
    city: string
    postalCode: string
    phone: string
    landline: string
  }

  export type ProspectsUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    fullName: string
    gender: $Enums.Gender
    AgeRange: string
    situation: string
    address: string
    city: string
    postalCode: string
    phone: string
    landline: string
  }

  export type ProspectsCreateOrConnectWithoutAppointmentsInput = {
    where: ProspectsWhereUniqueInput
    create: XOR<ProspectsCreateWithoutAppointmentsInput, ProspectsUncheckedCreateWithoutAppointmentsInput>
  }

  export type AccountsCreateWithoutAppointmentsInput = {
    username: string
    password: string
    role: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutAccountsInput
    Team?: TeamCreateNestedManyWithoutAccountInput
    Disponibility?: DisponibilityCreateNestedManyWithoutAccountInput
  }

  export type AccountsUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    username: string
    password: string
    role: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    Team?: TeamUncheckedCreateNestedManyWithoutAccountInput
    Disponibility?: DisponibilityUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountsCreateOrConnectWithoutAppointmentsInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutAppointmentsInput, AccountsUncheckedCreateWithoutAppointmentsInput>
  }

  export type ProspectsUpsertWithoutAppointmentsInput = {
    update: XOR<ProspectsUpdateWithoutAppointmentsInput, ProspectsUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<ProspectsCreateWithoutAppointmentsInput, ProspectsUncheckedCreateWithoutAppointmentsInput>
    where?: ProspectsWhereInput
  }

  export type ProspectsUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: ProspectsWhereInput
    data: XOR<ProspectsUpdateWithoutAppointmentsInput, ProspectsUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ProspectsUpdateWithoutAppointmentsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    AgeRange?: StringFieldUpdateOperationsInput | string
    situation?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    landline?: StringFieldUpdateOperationsInput | string
  }

  export type ProspectsUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    AgeRange?: StringFieldUpdateOperationsInput | string
    situation?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    landline?: StringFieldUpdateOperationsInput | string
  }

  export type AccountsUpsertWithoutAppointmentsInput = {
    update: XOR<AccountsUpdateWithoutAppointmentsInput, AccountsUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<AccountsCreateWithoutAppointmentsInput, AccountsUncheckedCreateWithoutAppointmentsInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutAppointmentsInput, AccountsUncheckedUpdateWithoutAppointmentsInput>
  }

  export type AccountsUpdateWithoutAppointmentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutAccountsNestedInput
    Team?: TeamUpdateManyWithoutAccountNestedInput
    Disponibility?: DisponibilityUpdateManyWithoutAccountNestedInput
  }

  export type AccountsUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    Team?: TeamUncheckedUpdateManyWithoutAccountNestedInput
    Disponibility?: DisponibilityUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountsCreateManyUserInput = {
    id?: number
    username: string
    password: string
    role: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountsUpdateWithoutUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Team?: TeamUpdateManyWithoutAccountNestedInput
    Appointments?: AppointmentsUpdateManyWithoutAccountNestedInput
    Disponibility?: DisponibilityUpdateManyWithoutAccountNestedInput
  }

  export type AccountsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Team?: TeamUncheckedUpdateManyWithoutAccountNestedInput
    Appointments?: AppointmentsUncheckedUpdateManyWithoutAccountNestedInput
    Disponibility?: DisponibilityUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateManyAccountInput = {
    id?: number
  }

  export type AppointmentsCreateManyAccountInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    callRecord: string
    createdAt?: Date | string
    updatedAt?: Date | string
    prospectId: number
    commercialId: number
    status?: $Enums.StatusAppointment
  }

  export type DisponibilityCreateManyAccountInput = {
    id?: number
    availableFrom: Date | string
    availableTo: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateWithoutAccountInput = {

  }

  export type TeamUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type TeamUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentsUpdateWithoutAccountInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    callRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commercialId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAppointmentFieldUpdateOperationsInput | $Enums.StatusAppointment
    prospect?: ProspectsUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentsUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    callRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prospectId?: IntFieldUpdateOperationsInput | number
    commercialId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAppointmentFieldUpdateOperationsInput | $Enums.StatusAppointment
  }

  export type AppointmentsUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    callRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prospectId?: IntFieldUpdateOperationsInput | number
    commercialId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAppointmentFieldUpdateOperationsInput | $Enums.StatusAppointment
  }

  export type DisponibilityUpdateWithoutAccountInput = {
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisponibilityUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisponibilityUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    availableTo?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentsCreateManyProspectInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    callRecord: string
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
    commercialId: number
    status?: $Enums.StatusAppointment
  }

  export type AppointmentsUpdateWithoutProspectInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    callRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commercialId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAppointmentFieldUpdateOperationsInput | $Enums.StatusAppointment
    account?: AccountsUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentsUncheckedUpdateWithoutProspectInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    callRecord?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commercialId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAppointmentFieldUpdateOperationsInput | $Enums.StatusAppointment
  }

  export type AppointmentsUncheckedUpdateManyWithoutProspectInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    callRecord?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commercialId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAppointmentFieldUpdateOperationsInput | $Enums.StatusAppointment
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}