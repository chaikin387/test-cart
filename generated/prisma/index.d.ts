
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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Attribute
 * 
 */
export type Attribute = $Result.DefaultSelection<Prisma.$AttributePayload>
/**
 * Model AttributeValue
 * 
 */
export type AttributeValue = $Result.DefaultSelection<Prisma.$AttributeValuePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductVariant
 * 
 */
export type ProductVariant = $Result.DefaultSelection<Prisma.$ProductVariantPayload>
/**
 * Model VariantAttributeValue
 * 
 */
export type VariantAttributeValue = $Result.DefaultSelection<Prisma.$VariantAttributeValuePayload>
/**
 * Model VariantImage
 * 
 */
export type VariantImage = $Result.DefaultSelection<Prisma.$VariantImagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AttributeType: {
  SELECT: 'SELECT',
  COLOR: 'COLOR',
  TEXT: 'TEXT'
};

export type AttributeType = (typeof AttributeType)[keyof typeof AttributeType]

}

export type AttributeType = $Enums.AttributeType

export const AttributeType: typeof $Enums.AttributeType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
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
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attribute`: Exposes CRUD operations for the **Attribute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attributes
    * const attributes = await prisma.attribute.findMany()
    * ```
    */
  get attribute(): Prisma.AttributeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attributeValue`: Exposes CRUD operations for the **AttributeValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttributeValues
    * const attributeValues = await prisma.attributeValue.findMany()
    * ```
    */
  get attributeValue(): Prisma.AttributeValueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productVariant`: Exposes CRUD operations for the **ProductVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariants
    * const productVariants = await prisma.productVariant.findMany()
    * ```
    */
  get productVariant(): Prisma.ProductVariantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variantAttributeValue`: Exposes CRUD operations for the **VariantAttributeValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VariantAttributeValues
    * const variantAttributeValues = await prisma.variantAttributeValue.findMany()
    * ```
    */
  get variantAttributeValue(): Prisma.VariantAttributeValueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variantImage`: Exposes CRUD operations for the **VariantImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VariantImages
    * const variantImages = await prisma.variantImage.findMany()
    * ```
    */
  get variantImage(): Prisma.VariantImageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Category: 'Category',
    Attribute: 'Attribute',
    AttributeValue: 'AttributeValue',
    Product: 'Product',
    ProductVariant: 'ProductVariant',
    VariantAttributeValue: 'VariantAttributeValue',
    VariantImage: 'VariantImage'
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
      modelProps: "category" | "attribute" | "attributeValue" | "product" | "productVariant" | "variantAttributeValue" | "variantImage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Attribute: {
        payload: Prisma.$AttributePayload<ExtArgs>
        fields: Prisma.AttributeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttributeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttributeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          findFirst: {
            args: Prisma.AttributeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttributeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          findMany: {
            args: Prisma.AttributeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>[]
          }
          create: {
            args: Prisma.AttributeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          createMany: {
            args: Prisma.AttributeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttributeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>[]
          }
          delete: {
            args: Prisma.AttributeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          update: {
            args: Prisma.AttributeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          deleteMany: {
            args: Prisma.AttributeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttributeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttributeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>[]
          }
          upsert: {
            args: Prisma.AttributeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          aggregate: {
            args: Prisma.AttributeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttribute>
          }
          groupBy: {
            args: Prisma.AttributeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttributeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttributeCountArgs<ExtArgs>
            result: $Utils.Optional<AttributeCountAggregateOutputType> | number
          }
        }
      }
      AttributeValue: {
        payload: Prisma.$AttributeValuePayload<ExtArgs>
        fields: Prisma.AttributeValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttributeValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttributeValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload>
          }
          findFirst: {
            args: Prisma.AttributeValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttributeValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload>
          }
          findMany: {
            args: Prisma.AttributeValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload>[]
          }
          create: {
            args: Prisma.AttributeValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload>
          }
          createMany: {
            args: Prisma.AttributeValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttributeValueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload>[]
          }
          delete: {
            args: Prisma.AttributeValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload>
          }
          update: {
            args: Prisma.AttributeValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload>
          }
          deleteMany: {
            args: Prisma.AttributeValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttributeValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttributeValueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload>[]
          }
          upsert: {
            args: Prisma.AttributeValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload>
          }
          aggregate: {
            args: Prisma.AttributeValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttributeValue>
          }
          groupBy: {
            args: Prisma.AttributeValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttributeValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttributeValueCountArgs<ExtArgs>
            result: $Utils.Optional<AttributeValueCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductVariant: {
        payload: Prisma.$ProductVariantPayload<ExtArgs>
        fields: Prisma.ProductVariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findFirst: {
            args: Prisma.ProductVariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findMany: {
            args: Prisma.ProductVariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          create: {
            args: Prisma.ProductVariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          createMany: {
            args: Prisma.ProductVariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductVariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          delete: {
            args: Prisma.ProductVariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          update: {
            args: Prisma.ProductVariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          deleteMany: {
            args: Prisma.ProductVariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductVariantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          upsert: {
            args: Prisma.ProductVariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          aggregate: {
            args: Prisma.ProductVariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariant>
          }
          groupBy: {
            args: Prisma.ProductVariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariantCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantCountAggregateOutputType> | number
          }
        }
      }
      VariantAttributeValue: {
        payload: Prisma.$VariantAttributeValuePayload<ExtArgs>
        fields: Prisma.VariantAttributeValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariantAttributeValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributeValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariantAttributeValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributeValuePayload>
          }
          findFirst: {
            args: Prisma.VariantAttributeValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributeValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariantAttributeValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributeValuePayload>
          }
          findMany: {
            args: Prisma.VariantAttributeValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributeValuePayload>[]
          }
          create: {
            args: Prisma.VariantAttributeValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributeValuePayload>
          }
          createMany: {
            args: Prisma.VariantAttributeValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariantAttributeValueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributeValuePayload>[]
          }
          delete: {
            args: Prisma.VariantAttributeValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributeValuePayload>
          }
          update: {
            args: Prisma.VariantAttributeValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributeValuePayload>
          }
          deleteMany: {
            args: Prisma.VariantAttributeValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariantAttributeValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VariantAttributeValueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributeValuePayload>[]
          }
          upsert: {
            args: Prisma.VariantAttributeValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantAttributeValuePayload>
          }
          aggregate: {
            args: Prisma.VariantAttributeValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariantAttributeValue>
          }
          groupBy: {
            args: Prisma.VariantAttributeValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariantAttributeValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariantAttributeValueCountArgs<ExtArgs>
            result: $Utils.Optional<VariantAttributeValueCountAggregateOutputType> | number
          }
        }
      }
      VariantImage: {
        payload: Prisma.$VariantImagePayload<ExtArgs>
        fields: Prisma.VariantImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariantImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariantImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload>
          }
          findFirst: {
            args: Prisma.VariantImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariantImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload>
          }
          findMany: {
            args: Prisma.VariantImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload>[]
          }
          create: {
            args: Prisma.VariantImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload>
          }
          createMany: {
            args: Prisma.VariantImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariantImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload>[]
          }
          delete: {
            args: Prisma.VariantImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload>
          }
          update: {
            args: Prisma.VariantImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload>
          }
          deleteMany: {
            args: Prisma.VariantImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariantImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VariantImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload>[]
          }
          upsert: {
            args: Prisma.VariantImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantImagePayload>
          }
          aggregate: {
            args: Prisma.VariantImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariantImage>
          }
          groupBy: {
            args: Prisma.VariantImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariantImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariantImageCountArgs<ExtArgs>
            result: $Utils.Optional<VariantImageCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    category?: CategoryOmit
    attribute?: AttributeOmit
    attributeValue?: AttributeValueOmit
    product?: ProductOmit
    productVariant?: ProductVariantOmit
    variantAttributeValue?: VariantAttributeValueOmit
    variantImage?: VariantImageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
    attributes: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
    attributes?: boolean | CategoryCountOutputTypeCountAttributesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeWhereInput
  }


  /**
   * Count Type AttributeCountOutputType
   */

  export type AttributeCountOutputType = {
    values: number
  }

  export type AttributeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    values?: boolean | AttributeCountOutputTypeCountValuesArgs
  }

  // Custom InputTypes
  /**
   * AttributeCountOutputType without action
   */
  export type AttributeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeCountOutputType
     */
    select?: AttributeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttributeCountOutputType without action
   */
  export type AttributeCountOutputTypeCountValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeValueWhereInput
  }


  /**
   * Count Type AttributeValueCountOutputType
   */

  export type AttributeValueCountOutputType = {
    variantAttributeValues: number
  }

  export type AttributeValueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variantAttributeValues?: boolean | AttributeValueCountOutputTypeCountVariantAttributeValuesArgs
  }

  // Custom InputTypes
  /**
   * AttributeValueCountOutputType without action
   */
  export type AttributeValueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValueCountOutputType
     */
    select?: AttributeValueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttributeValueCountOutputType without action
   */
  export type AttributeValueCountOutputTypeCountVariantAttributeValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantAttributeValueWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    variants: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | ProductCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
  }


  /**
   * Count Type ProductVariantCountOutputType
   */

  export type ProductVariantCountOutputType = {
    images: number
    attributeValues: number
  }

  export type ProductVariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ProductVariantCountOutputTypeCountImagesArgs
    attributeValues?: boolean | ProductVariantCountOutputTypeCountAttributeValuesArgs
  }

  // Custom InputTypes
  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantCountOutputType
     */
    select?: ProductVariantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantImageWhereInput
  }

  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeCountAttributeValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantAttributeValueWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    slug: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    attributes?: boolean | Category$attributesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    attributes?: boolean | Category$attributesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
      attributes: Prisma.$AttributePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attributes<T extends Category$attributesArgs<ExtArgs> = {}>(args?: Subset<T, Category$attributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly isActive: FieldRef<"Category", 'Boolean'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category.attributes
   */
  export type Category$attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    where?: AttributeWhereInput
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    cursor?: AttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Attribute
   */

  export type AggregateAttribute = {
    _count: AttributeCountAggregateOutputType | null
    _avg: AttributeAvgAggregateOutputType | null
    _sum: AttributeSumAggregateOutputType | null
    _min: AttributeMinAggregateOutputType | null
    _max: AttributeMaxAggregateOutputType | null
  }

  export type AttributeAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    position: number | null
  }

  export type AttributeSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    position: number | null
  }

  export type AttributeMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    name: string | null
    slug: string | null
    type: $Enums.AttributeType | null
    isRequired: boolean | null
    position: number | null
    icon: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttributeMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    name: string | null
    slug: string | null
    type: $Enums.AttributeType | null
    isRequired: boolean | null
    position: number | null
    icon: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttributeCountAggregateOutputType = {
    id: number
    categoryId: number
    name: number
    slug: number
    type: number
    isRequired: number
    position: number
    icon: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttributeAvgAggregateInputType = {
    id?: true
    categoryId?: true
    position?: true
  }

  export type AttributeSumAggregateInputType = {
    id?: true
    categoryId?: true
    position?: true
  }

  export type AttributeMinAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    slug?: true
    type?: true
    isRequired?: true
    position?: true
    icon?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttributeMaxAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    slug?: true
    type?: true
    isRequired?: true
    position?: true
    icon?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttributeCountAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    slug?: true
    type?: true
    isRequired?: true
    position?: true
    icon?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttributeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attribute to aggregate.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attributes
    **/
    _count?: true | AttributeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttributeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttributeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttributeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttributeMaxAggregateInputType
  }

  export type GetAttributeAggregateType<T extends AttributeAggregateArgs> = {
        [P in keyof T & keyof AggregateAttribute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttribute[P]>
      : GetScalarType<T[P], AggregateAttribute[P]>
  }




  export type AttributeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeWhereInput
    orderBy?: AttributeOrderByWithAggregationInput | AttributeOrderByWithAggregationInput[]
    by: AttributeScalarFieldEnum[] | AttributeScalarFieldEnum
    having?: AttributeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttributeCountAggregateInputType | true
    _avg?: AttributeAvgAggregateInputType
    _sum?: AttributeSumAggregateInputType
    _min?: AttributeMinAggregateInputType
    _max?: AttributeMaxAggregateInputType
  }

  export type AttributeGroupByOutputType = {
    id: number
    categoryId: number
    name: string
    slug: string
    type: $Enums.AttributeType
    isRequired: boolean
    position: number
    icon: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AttributeCountAggregateOutputType | null
    _avg: AttributeAvgAggregateOutputType | null
    _sum: AttributeSumAggregateOutputType | null
    _min: AttributeMinAggregateOutputType | null
    _max: AttributeMaxAggregateOutputType | null
  }

  type GetAttributeGroupByPayload<T extends AttributeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttributeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttributeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttributeGroupByOutputType[P]>
            : GetScalarType<T[P], AttributeGroupByOutputType[P]>
        }
      >
    >


  export type AttributeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    isRequired?: boolean
    position?: boolean
    icon?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    values?: boolean | Attribute$valuesArgs<ExtArgs>
    _count?: boolean | AttributeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attribute"]>

  export type AttributeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    isRequired?: boolean
    position?: boolean
    icon?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attribute"]>

  export type AttributeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    isRequired?: boolean
    position?: boolean
    icon?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attribute"]>

  export type AttributeSelectScalar = {
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    isRequired?: boolean
    position?: boolean
    icon?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttributeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "name" | "slug" | "type" | "isRequired" | "position" | "icon" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["attribute"]>
  export type AttributeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    values?: boolean | Attribute$valuesArgs<ExtArgs>
    _count?: boolean | AttributeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttributeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type AttributeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $AttributePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attribute"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      values: Prisma.$AttributeValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryId: number
      name: string
      slug: string
      type: $Enums.AttributeType
      isRequired: boolean
      position: number
      icon: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attribute"]>
    composites: {}
  }

  type AttributeGetPayload<S extends boolean | null | undefined | AttributeDefaultArgs> = $Result.GetResult<Prisma.$AttributePayload, S>

  type AttributeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttributeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttributeCountAggregateInputType | true
    }

  export interface AttributeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attribute'], meta: { name: 'Attribute' } }
    /**
     * Find zero or one Attribute that matches the filter.
     * @param {AttributeFindUniqueArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttributeFindUniqueArgs>(args: SelectSubset<T, AttributeFindUniqueArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attribute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttributeFindUniqueOrThrowArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttributeFindUniqueOrThrowArgs>(args: SelectSubset<T, AttributeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attribute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindFirstArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttributeFindFirstArgs>(args?: SelectSubset<T, AttributeFindFirstArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attribute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindFirstOrThrowArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttributeFindFirstOrThrowArgs>(args?: SelectSubset<T, AttributeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attributes
     * const attributes = await prisma.attribute.findMany()
     * 
     * // Get first 10 Attributes
     * const attributes = await prisma.attribute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attributeWithIdOnly = await prisma.attribute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttributeFindManyArgs>(args?: SelectSubset<T, AttributeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attribute.
     * @param {AttributeCreateArgs} args - Arguments to create a Attribute.
     * @example
     * // Create one Attribute
     * const Attribute = await prisma.attribute.create({
     *   data: {
     *     // ... data to create a Attribute
     *   }
     * })
     * 
     */
    create<T extends AttributeCreateArgs>(args: SelectSubset<T, AttributeCreateArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attributes.
     * @param {AttributeCreateManyArgs} args - Arguments to create many Attributes.
     * @example
     * // Create many Attributes
     * const attribute = await prisma.attribute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttributeCreateManyArgs>(args?: SelectSubset<T, AttributeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attributes and returns the data saved in the database.
     * @param {AttributeCreateManyAndReturnArgs} args - Arguments to create many Attributes.
     * @example
     * // Create many Attributes
     * const attribute = await prisma.attribute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attributes and only return the `id`
     * const attributeWithIdOnly = await prisma.attribute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttributeCreateManyAndReturnArgs>(args?: SelectSubset<T, AttributeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attribute.
     * @param {AttributeDeleteArgs} args - Arguments to delete one Attribute.
     * @example
     * // Delete one Attribute
     * const Attribute = await prisma.attribute.delete({
     *   where: {
     *     // ... filter to delete one Attribute
     *   }
     * })
     * 
     */
    delete<T extends AttributeDeleteArgs>(args: SelectSubset<T, AttributeDeleteArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attribute.
     * @param {AttributeUpdateArgs} args - Arguments to update one Attribute.
     * @example
     * // Update one Attribute
     * const attribute = await prisma.attribute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttributeUpdateArgs>(args: SelectSubset<T, AttributeUpdateArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attributes.
     * @param {AttributeDeleteManyArgs} args - Arguments to filter Attributes to delete.
     * @example
     * // Delete a few Attributes
     * const { count } = await prisma.attribute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttributeDeleteManyArgs>(args?: SelectSubset<T, AttributeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attributes
     * const attribute = await prisma.attribute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttributeUpdateManyArgs>(args: SelectSubset<T, AttributeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attributes and returns the data updated in the database.
     * @param {AttributeUpdateManyAndReturnArgs} args - Arguments to update many Attributes.
     * @example
     * // Update many Attributes
     * const attribute = await prisma.attribute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attributes and only return the `id`
     * const attributeWithIdOnly = await prisma.attribute.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttributeUpdateManyAndReturnArgs>(args: SelectSubset<T, AttributeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attribute.
     * @param {AttributeUpsertArgs} args - Arguments to update or create a Attribute.
     * @example
     * // Update or create a Attribute
     * const attribute = await prisma.attribute.upsert({
     *   create: {
     *     // ... data to create a Attribute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attribute we want to update
     *   }
     * })
     */
    upsert<T extends AttributeUpsertArgs>(args: SelectSubset<T, AttributeUpsertArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeCountArgs} args - Arguments to filter Attributes to count.
     * @example
     * // Count the number of Attributes
     * const count = await prisma.attribute.count({
     *   where: {
     *     // ... the filter for the Attributes we want to count
     *   }
     * })
    **/
    count<T extends AttributeCountArgs>(
      args?: Subset<T, AttributeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttributeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttributeAggregateArgs>(args: Subset<T, AttributeAggregateArgs>): Prisma.PrismaPromise<GetAttributeAggregateType<T>>

    /**
     * Group by Attribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeGroupByArgs} args - Group by arguments.
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
      T extends AttributeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttributeGroupByArgs['orderBy'] }
        : { orderBy?: AttributeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttributeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attribute model
   */
  readonly fields: AttributeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attribute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttributeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    values<T extends Attribute$valuesArgs<ExtArgs> = {}>(args?: Subset<T, Attribute$valuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Attribute model
   */
  interface AttributeFieldRefs {
    readonly id: FieldRef<"Attribute", 'Int'>
    readonly categoryId: FieldRef<"Attribute", 'Int'>
    readonly name: FieldRef<"Attribute", 'String'>
    readonly slug: FieldRef<"Attribute", 'String'>
    readonly type: FieldRef<"Attribute", 'AttributeType'>
    readonly isRequired: FieldRef<"Attribute", 'Boolean'>
    readonly position: FieldRef<"Attribute", 'Int'>
    readonly icon: FieldRef<"Attribute", 'String'>
    readonly isActive: FieldRef<"Attribute", 'Boolean'>
    readonly createdAt: FieldRef<"Attribute", 'DateTime'>
    readonly updatedAt: FieldRef<"Attribute", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attribute findUnique
   */
  export type AttributeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute findUniqueOrThrow
   */
  export type AttributeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute findFirst
   */
  export type AttributeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attributes.
     */
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * Attribute findFirstOrThrow
   */
  export type AttributeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attributes.
     */
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * Attribute findMany
   */
  export type AttributeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attributes to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * Attribute create
   */
  export type AttributeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The data needed to create a Attribute.
     */
    data: XOR<AttributeCreateInput, AttributeUncheckedCreateInput>
  }

  /**
   * Attribute createMany
   */
  export type AttributeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attributes.
     */
    data: AttributeCreateManyInput | AttributeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attribute createManyAndReturn
   */
  export type AttributeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * The data used to create many Attributes.
     */
    data: AttributeCreateManyInput | AttributeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attribute update
   */
  export type AttributeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The data needed to update a Attribute.
     */
    data: XOR<AttributeUpdateInput, AttributeUncheckedUpdateInput>
    /**
     * Choose, which Attribute to update.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute updateMany
   */
  export type AttributeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attributes.
     */
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyInput>
    /**
     * Filter which Attributes to update
     */
    where?: AttributeWhereInput
    /**
     * Limit how many Attributes to update.
     */
    limit?: number
  }

  /**
   * Attribute updateManyAndReturn
   */
  export type AttributeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * The data used to update Attributes.
     */
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyInput>
    /**
     * Filter which Attributes to update
     */
    where?: AttributeWhereInput
    /**
     * Limit how many Attributes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attribute upsert
   */
  export type AttributeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The filter to search for the Attribute to update in case it exists.
     */
    where: AttributeWhereUniqueInput
    /**
     * In case the Attribute found by the `where` argument doesn't exist, create a new Attribute with this data.
     */
    create: XOR<AttributeCreateInput, AttributeUncheckedCreateInput>
    /**
     * In case the Attribute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttributeUpdateInput, AttributeUncheckedUpdateInput>
  }

  /**
   * Attribute delete
   */
  export type AttributeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter which Attribute to delete.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute deleteMany
   */
  export type AttributeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attributes to delete
     */
    where?: AttributeWhereInput
    /**
     * Limit how many Attributes to delete.
     */
    limit?: number
  }

  /**
   * Attribute.values
   */
  export type Attribute$valuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeValue
     */
    omit?: AttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeValueInclude<ExtArgs> | null
    where?: AttributeValueWhereInput
    orderBy?: AttributeValueOrderByWithRelationInput | AttributeValueOrderByWithRelationInput[]
    cursor?: AttributeValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttributeValueScalarFieldEnum | AttributeValueScalarFieldEnum[]
  }

  /**
   * Attribute without action
   */
  export type AttributeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
  }


  /**
   * Model AttributeValue
   */

  export type AggregateAttributeValue = {
    _count: AttributeValueCountAggregateOutputType | null
    _avg: AttributeValueAvgAggregateOutputType | null
    _sum: AttributeValueSumAggregateOutputType | null
    _min: AttributeValueMinAggregateOutputType | null
    _max: AttributeValueMaxAggregateOutputType | null
  }

  export type AttributeValueAvgAggregateOutputType = {
    id: number | null
    attributeId: number | null
    position: number | null
  }

  export type AttributeValueSumAggregateOutputType = {
    id: number | null
    attributeId: number | null
    position: number | null
  }

  export type AttributeValueMinAggregateOutputType = {
    id: number | null
    attributeId: number | null
    value: string | null
    slug: string | null
    colorHex: string | null
    position: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttributeValueMaxAggregateOutputType = {
    id: number | null
    attributeId: number | null
    value: string | null
    slug: string | null
    colorHex: string | null
    position: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttributeValueCountAggregateOutputType = {
    id: number
    attributeId: number
    value: number
    slug: number
    colorHex: number
    position: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttributeValueAvgAggregateInputType = {
    id?: true
    attributeId?: true
    position?: true
  }

  export type AttributeValueSumAggregateInputType = {
    id?: true
    attributeId?: true
    position?: true
  }

  export type AttributeValueMinAggregateInputType = {
    id?: true
    attributeId?: true
    value?: true
    slug?: true
    colorHex?: true
    position?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttributeValueMaxAggregateInputType = {
    id?: true
    attributeId?: true
    value?: true
    slug?: true
    colorHex?: true
    position?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttributeValueCountAggregateInputType = {
    id?: true
    attributeId?: true
    value?: true
    slug?: true
    colorHex?: true
    position?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttributeValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributeValue to aggregate.
     */
    where?: AttributeValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeValues to fetch.
     */
    orderBy?: AttributeValueOrderByWithRelationInput | AttributeValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttributeValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttributeValues
    **/
    _count?: true | AttributeValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttributeValueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttributeValueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttributeValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttributeValueMaxAggregateInputType
  }

  export type GetAttributeValueAggregateType<T extends AttributeValueAggregateArgs> = {
        [P in keyof T & keyof AggregateAttributeValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttributeValue[P]>
      : GetScalarType<T[P], AggregateAttributeValue[P]>
  }




  export type AttributeValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeValueWhereInput
    orderBy?: AttributeValueOrderByWithAggregationInput | AttributeValueOrderByWithAggregationInput[]
    by: AttributeValueScalarFieldEnum[] | AttributeValueScalarFieldEnum
    having?: AttributeValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttributeValueCountAggregateInputType | true
    _avg?: AttributeValueAvgAggregateInputType
    _sum?: AttributeValueSumAggregateInputType
    _min?: AttributeValueMinAggregateInputType
    _max?: AttributeValueMaxAggregateInputType
  }

  export type AttributeValueGroupByOutputType = {
    id: number
    attributeId: number
    value: string
    slug: string
    colorHex: string | null
    position: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AttributeValueCountAggregateOutputType | null
    _avg: AttributeValueAvgAggregateOutputType | null
    _sum: AttributeValueSumAggregateOutputType | null
    _min: AttributeValueMinAggregateOutputType | null
    _max: AttributeValueMaxAggregateOutputType | null
  }

  type GetAttributeValueGroupByPayload<T extends AttributeValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttributeValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttributeValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttributeValueGroupByOutputType[P]>
            : GetScalarType<T[P], AttributeValueGroupByOutputType[P]>
        }
      >
    >


  export type AttributeValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attributeId?: boolean
    value?: boolean
    slug?: boolean
    colorHex?: boolean
    position?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    variantAttributeValues?: boolean | AttributeValue$variantAttributeValuesArgs<ExtArgs>
    _count?: boolean | AttributeValueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributeValue"]>

  export type AttributeValueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attributeId?: boolean
    value?: boolean
    slug?: boolean
    colorHex?: boolean
    position?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributeValue"]>

  export type AttributeValueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attributeId?: boolean
    value?: boolean
    slug?: boolean
    colorHex?: boolean
    position?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributeValue"]>

  export type AttributeValueSelectScalar = {
    id?: boolean
    attributeId?: boolean
    value?: boolean
    slug?: boolean
    colorHex?: boolean
    position?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttributeValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "attributeId" | "value" | "slug" | "colorHex" | "position" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["attributeValue"]>
  export type AttributeValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    variantAttributeValues?: boolean | AttributeValue$variantAttributeValuesArgs<ExtArgs>
    _count?: boolean | AttributeValueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttributeValueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }
  export type AttributeValueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }

  export type $AttributeValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttributeValue"
    objects: {
      attribute: Prisma.$AttributePayload<ExtArgs>
      variantAttributeValues: Prisma.$VariantAttributeValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      attributeId: number
      value: string
      slug: string
      colorHex: string | null
      position: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attributeValue"]>
    composites: {}
  }

  type AttributeValueGetPayload<S extends boolean | null | undefined | AttributeValueDefaultArgs> = $Result.GetResult<Prisma.$AttributeValuePayload, S>

  type AttributeValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttributeValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttributeValueCountAggregateInputType | true
    }

  export interface AttributeValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttributeValue'], meta: { name: 'AttributeValue' } }
    /**
     * Find zero or one AttributeValue that matches the filter.
     * @param {AttributeValueFindUniqueArgs} args - Arguments to find a AttributeValue
     * @example
     * // Get one AttributeValue
     * const attributeValue = await prisma.attributeValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttributeValueFindUniqueArgs>(args: SelectSubset<T, AttributeValueFindUniqueArgs<ExtArgs>>): Prisma__AttributeValueClient<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttributeValue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttributeValueFindUniqueOrThrowArgs} args - Arguments to find a AttributeValue
     * @example
     * // Get one AttributeValue
     * const attributeValue = await prisma.attributeValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttributeValueFindUniqueOrThrowArgs>(args: SelectSubset<T, AttributeValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttributeValueClient<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttributeValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeValueFindFirstArgs} args - Arguments to find a AttributeValue
     * @example
     * // Get one AttributeValue
     * const attributeValue = await prisma.attributeValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttributeValueFindFirstArgs>(args?: SelectSubset<T, AttributeValueFindFirstArgs<ExtArgs>>): Prisma__AttributeValueClient<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttributeValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeValueFindFirstOrThrowArgs} args - Arguments to find a AttributeValue
     * @example
     * // Get one AttributeValue
     * const attributeValue = await prisma.attributeValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttributeValueFindFirstOrThrowArgs>(args?: SelectSubset<T, AttributeValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttributeValueClient<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttributeValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttributeValues
     * const attributeValues = await prisma.attributeValue.findMany()
     * 
     * // Get first 10 AttributeValues
     * const attributeValues = await prisma.attributeValue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attributeValueWithIdOnly = await prisma.attributeValue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttributeValueFindManyArgs>(args?: SelectSubset<T, AttributeValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttributeValue.
     * @param {AttributeValueCreateArgs} args - Arguments to create a AttributeValue.
     * @example
     * // Create one AttributeValue
     * const AttributeValue = await prisma.attributeValue.create({
     *   data: {
     *     // ... data to create a AttributeValue
     *   }
     * })
     * 
     */
    create<T extends AttributeValueCreateArgs>(args: SelectSubset<T, AttributeValueCreateArgs<ExtArgs>>): Prisma__AttributeValueClient<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttributeValues.
     * @param {AttributeValueCreateManyArgs} args - Arguments to create many AttributeValues.
     * @example
     * // Create many AttributeValues
     * const attributeValue = await prisma.attributeValue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttributeValueCreateManyArgs>(args?: SelectSubset<T, AttributeValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttributeValues and returns the data saved in the database.
     * @param {AttributeValueCreateManyAndReturnArgs} args - Arguments to create many AttributeValues.
     * @example
     * // Create many AttributeValues
     * const attributeValue = await prisma.attributeValue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttributeValues and only return the `id`
     * const attributeValueWithIdOnly = await prisma.attributeValue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttributeValueCreateManyAndReturnArgs>(args?: SelectSubset<T, AttributeValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttributeValue.
     * @param {AttributeValueDeleteArgs} args - Arguments to delete one AttributeValue.
     * @example
     * // Delete one AttributeValue
     * const AttributeValue = await prisma.attributeValue.delete({
     *   where: {
     *     // ... filter to delete one AttributeValue
     *   }
     * })
     * 
     */
    delete<T extends AttributeValueDeleteArgs>(args: SelectSubset<T, AttributeValueDeleteArgs<ExtArgs>>): Prisma__AttributeValueClient<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttributeValue.
     * @param {AttributeValueUpdateArgs} args - Arguments to update one AttributeValue.
     * @example
     * // Update one AttributeValue
     * const attributeValue = await prisma.attributeValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttributeValueUpdateArgs>(args: SelectSubset<T, AttributeValueUpdateArgs<ExtArgs>>): Prisma__AttributeValueClient<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttributeValues.
     * @param {AttributeValueDeleteManyArgs} args - Arguments to filter AttributeValues to delete.
     * @example
     * // Delete a few AttributeValues
     * const { count } = await prisma.attributeValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttributeValueDeleteManyArgs>(args?: SelectSubset<T, AttributeValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttributeValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttributeValues
     * const attributeValue = await prisma.attributeValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttributeValueUpdateManyArgs>(args: SelectSubset<T, AttributeValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttributeValues and returns the data updated in the database.
     * @param {AttributeValueUpdateManyAndReturnArgs} args - Arguments to update many AttributeValues.
     * @example
     * // Update many AttributeValues
     * const attributeValue = await prisma.attributeValue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttributeValues and only return the `id`
     * const attributeValueWithIdOnly = await prisma.attributeValue.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttributeValueUpdateManyAndReturnArgs>(args: SelectSubset<T, AttributeValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttributeValue.
     * @param {AttributeValueUpsertArgs} args - Arguments to update or create a AttributeValue.
     * @example
     * // Update or create a AttributeValue
     * const attributeValue = await prisma.attributeValue.upsert({
     *   create: {
     *     // ... data to create a AttributeValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttributeValue we want to update
     *   }
     * })
     */
    upsert<T extends AttributeValueUpsertArgs>(args: SelectSubset<T, AttributeValueUpsertArgs<ExtArgs>>): Prisma__AttributeValueClient<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttributeValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeValueCountArgs} args - Arguments to filter AttributeValues to count.
     * @example
     * // Count the number of AttributeValues
     * const count = await prisma.attributeValue.count({
     *   where: {
     *     // ... the filter for the AttributeValues we want to count
     *   }
     * })
    **/
    count<T extends AttributeValueCountArgs>(
      args?: Subset<T, AttributeValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttributeValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttributeValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttributeValueAggregateArgs>(args: Subset<T, AttributeValueAggregateArgs>): Prisma.PrismaPromise<GetAttributeValueAggregateType<T>>

    /**
     * Group by AttributeValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeValueGroupByArgs} args - Group by arguments.
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
      T extends AttributeValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttributeValueGroupByArgs['orderBy'] }
        : { orderBy?: AttributeValueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttributeValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributeValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttributeValue model
   */
  readonly fields: AttributeValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttributeValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttributeValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attribute<T extends AttributeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttributeDefaultArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    variantAttributeValues<T extends AttributeValue$variantAttributeValuesArgs<ExtArgs> = {}>(args?: Subset<T, AttributeValue$variantAttributeValuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantAttributeValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AttributeValue model
   */
  interface AttributeValueFieldRefs {
    readonly id: FieldRef<"AttributeValue", 'Int'>
    readonly attributeId: FieldRef<"AttributeValue", 'Int'>
    readonly value: FieldRef<"AttributeValue", 'String'>
    readonly slug: FieldRef<"AttributeValue", 'String'>
    readonly colorHex: FieldRef<"AttributeValue", 'String'>
    readonly position: FieldRef<"AttributeValue", 'Int'>
    readonly isActive: FieldRef<"AttributeValue", 'Boolean'>
    readonly createdAt: FieldRef<"AttributeValue", 'DateTime'>
    readonly updatedAt: FieldRef<"AttributeValue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttributeValue findUnique
   */
  export type AttributeValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeValue
     */
    omit?: AttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeValueInclude<ExtArgs> | null
    /**
     * Filter, which AttributeValue to fetch.
     */
    where: AttributeValueWhereUniqueInput
  }

  /**
   * AttributeValue findUniqueOrThrow
   */
  export type AttributeValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeValue
     */
    omit?: AttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeValueInclude<ExtArgs> | null
    /**
     * Filter, which AttributeValue to fetch.
     */
    where: AttributeValueWhereUniqueInput
  }

  /**
   * AttributeValue findFirst
   */
  export type AttributeValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeValue
     */
    omit?: AttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeValueInclude<ExtArgs> | null
    /**
     * Filter, which AttributeValue to fetch.
     */
    where?: AttributeValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeValues to fetch.
     */
    orderBy?: AttributeValueOrderByWithRelationInput | AttributeValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributeValues.
     */
    cursor?: AttributeValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributeValues.
     */
    distinct?: AttributeValueScalarFieldEnum | AttributeValueScalarFieldEnum[]
  }

  /**
   * AttributeValue findFirstOrThrow
   */
  export type AttributeValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeValue
     */
    omit?: AttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeValueInclude<ExtArgs> | null
    /**
     * Filter, which AttributeValue to fetch.
     */
    where?: AttributeValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeValues to fetch.
     */
    orderBy?: AttributeValueOrderByWithRelationInput | AttributeValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributeValues.
     */
    cursor?: AttributeValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributeValues.
     */
    distinct?: AttributeValueScalarFieldEnum | AttributeValueScalarFieldEnum[]
  }

  /**
   * AttributeValue findMany
   */
  export type AttributeValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeValue
     */
    omit?: AttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeValueInclude<ExtArgs> | null
    /**
     * Filter, which AttributeValues to fetch.
     */
    where?: AttributeValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeValues to fetch.
     */
    orderBy?: AttributeValueOrderByWithRelationInput | AttributeValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttributeValues.
     */
    cursor?: AttributeValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeValues.
     */
    skip?: number
    distinct?: AttributeValueScalarFieldEnum | AttributeValueScalarFieldEnum[]
  }

  /**
   * AttributeValue create
   */
  export type AttributeValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeValue
     */
    omit?: AttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeValueInclude<ExtArgs> | null
    /**
     * The data needed to create a AttributeValue.
     */
    data: XOR<AttributeValueCreateInput, AttributeValueUncheckedCreateInput>
  }

  /**
   * AttributeValue createMany
   */
  export type AttributeValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttributeValues.
     */
    data: AttributeValueCreateManyInput | AttributeValueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttributeValue createManyAndReturn
   */
  export type AttributeValueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeValue
     */
    omit?: AttributeValueOmit<ExtArgs> | null
    /**
     * The data used to create many AttributeValues.
     */
    data: AttributeValueCreateManyInput | AttributeValueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeValueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttributeValue update
   */
  export type AttributeValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeValue
     */
    omit?: AttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeValueInclude<ExtArgs> | null
    /**
     * The data needed to update a AttributeValue.
     */
    data: XOR<AttributeValueUpdateInput, AttributeValueUncheckedUpdateInput>
    /**
     * Choose, which AttributeValue to update.
     */
    where: AttributeValueWhereUniqueInput
  }

  /**
   * AttributeValue updateMany
   */
  export type AttributeValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttributeValues.
     */
    data: XOR<AttributeValueUpdateManyMutationInput, AttributeValueUncheckedUpdateManyInput>
    /**
     * Filter which AttributeValues to update
     */
    where?: AttributeValueWhereInput
    /**
     * Limit how many AttributeValues to update.
     */
    limit?: number
  }

  /**
   * AttributeValue updateManyAndReturn
   */
  export type AttributeValueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeValue
     */
    omit?: AttributeValueOmit<ExtArgs> | null
    /**
     * The data used to update AttributeValues.
     */
    data: XOR<AttributeValueUpdateManyMutationInput, AttributeValueUncheckedUpdateManyInput>
    /**
     * Filter which AttributeValues to update
     */
    where?: AttributeValueWhereInput
    /**
     * Limit how many AttributeValues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeValueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttributeValue upsert
   */
  export type AttributeValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeValue
     */
    omit?: AttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeValueInclude<ExtArgs> | null
    /**
     * The filter to search for the AttributeValue to update in case it exists.
     */
    where: AttributeValueWhereUniqueInput
    /**
     * In case the AttributeValue found by the `where` argument doesn't exist, create a new AttributeValue with this data.
     */
    create: XOR<AttributeValueCreateInput, AttributeValueUncheckedCreateInput>
    /**
     * In case the AttributeValue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttributeValueUpdateInput, AttributeValueUncheckedUpdateInput>
  }

  /**
   * AttributeValue delete
   */
  export type AttributeValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeValue
     */
    omit?: AttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeValueInclude<ExtArgs> | null
    /**
     * Filter which AttributeValue to delete.
     */
    where: AttributeValueWhereUniqueInput
  }

  /**
   * AttributeValue deleteMany
   */
  export type AttributeValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributeValues to delete
     */
    where?: AttributeValueWhereInput
    /**
     * Limit how many AttributeValues to delete.
     */
    limit?: number
  }

  /**
   * AttributeValue.variantAttributeValues
   */
  export type AttributeValue$variantAttributeValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttributeValue
     */
    select?: VariantAttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttributeValue
     */
    omit?: VariantAttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeValueInclude<ExtArgs> | null
    where?: VariantAttributeValueWhereInput
    orderBy?: VariantAttributeValueOrderByWithRelationInput | VariantAttributeValueOrderByWithRelationInput[]
    cursor?: VariantAttributeValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantAttributeValueScalarFieldEnum | VariantAttributeValueScalarFieldEnum[]
  }

  /**
   * AttributeValue without action
   */
  export type AttributeValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeValue
     */
    omit?: AttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeValueInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    categoryId: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    categoryId: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    categoryId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    categoryId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    categoryId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    categoryId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
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
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    slug: string
    description: string | null
    categoryId: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    categoryId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    variants?: boolean | Product$variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    categoryId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    categoryId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    categoryId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "categoryId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    variants?: boolean | Product$variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      variants: Prisma.$ProductVariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      description: string | null
      categoryId: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    variants<T extends Product$variantsArgs<ExtArgs> = {}>(args?: Subset<T, Product$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'Int'>
    readonly isActive: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
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
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
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
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
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
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.variants
   */
  export type Product$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    cursor?: ProductVariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductVariant
   */

  export type AggregateProductVariant = {
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  export type ProductVariantAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    price: number | null
    stock: number | null
  }

  export type ProductVariantSumAggregateOutputType = {
    id: number | null
    productId: number | null
    price: number | null
    stock: number | null
  }

  export type ProductVariantMinAggregateOutputType = {
    id: number | null
    productId: number | null
    name: string | null
    slug: string | null
    price: number | null
    stock: number | null
    isDefault: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariantMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    name: string | null
    slug: string | null
    price: number | null
    stock: number | null
    isDefault: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariantCountAggregateOutputType = {
    id: number
    productId: number
    name: number
    slug: number
    price: number
    stock: number
    isDefault: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductVariantAvgAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    stock?: true
  }

  export type ProductVariantSumAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    stock?: true
  }

  export type ProductVariantMinAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    slug?: true
    price?: true
    stock?: true
    isDefault?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariantMaxAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    slug?: true
    price?: true
    stock?: true
    isDefault?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariantCountAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    slug?: true
    price?: true
    stock?: true
    isDefault?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductVariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariant to aggregate.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariants
    **/
    _count?: true | ProductVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductVariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductVariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariantMaxAggregateInputType
  }

  export type GetProductVariantAggregateType<T extends ProductVariantAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariant[P]>
      : GetScalarType<T[P], AggregateProductVariant[P]>
  }




  export type ProductVariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithAggregationInput | ProductVariantOrderByWithAggregationInput[]
    by: ProductVariantScalarFieldEnum[] | ProductVariantScalarFieldEnum
    having?: ProductVariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariantCountAggregateInputType | true
    _avg?: ProductVariantAvgAggregateInputType
    _sum?: ProductVariantSumAggregateInputType
    _min?: ProductVariantMinAggregateInputType
    _max?: ProductVariantMaxAggregateInputType
  }

  export type ProductVariantGroupByOutputType = {
    id: number
    productId: number
    name: string
    slug: string
    price: number
    stock: number
    isDefault: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  type GetProductVariantGroupByPayload<T extends ProductVariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    slug?: boolean
    price?: boolean
    stock?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    images?: boolean | ProductVariant$imagesArgs<ExtArgs>
    attributeValues?: boolean | ProductVariant$attributeValuesArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    slug?: boolean
    price?: boolean
    stock?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    slug?: boolean
    price?: boolean
    stock?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectScalar = {
    id?: boolean
    productId?: boolean
    name?: boolean
    slug?: boolean
    price?: boolean
    stock?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductVariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "name" | "slug" | "price" | "stock" | "isDefault" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["productVariant"]>
  export type ProductVariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    images?: boolean | ProductVariant$imagesArgs<ExtArgs>
    attributeValues?: boolean | ProductVariant$attributeValuesArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductVariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductVariantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductVariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariant"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      images: Prisma.$VariantImagePayload<ExtArgs>[]
      attributeValues: Prisma.$VariantAttributeValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      name: string
      slug: string
      price: number
      stock: number
      isDefault: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productVariant"]>
    composites: {}
  }

  type ProductVariantGetPayload<S extends boolean | null | undefined | ProductVariantDefaultArgs> = $Result.GetResult<Prisma.$ProductVariantPayload, S>

  type ProductVariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductVariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductVariantCountAggregateInputType | true
    }

  export interface ProductVariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariant'], meta: { name: 'ProductVariant' } }
    /**
     * Find zero or one ProductVariant that matches the filter.
     * @param {ProductVariantFindUniqueArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVariantFindUniqueArgs>(args: SelectSubset<T, ProductVariantFindUniqueArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductVariant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductVariantFindUniqueOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVariantFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVariantFindFirstArgs>(args?: SelectSubset<T, ProductVariantFindFirstArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVariantFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariants
     * const productVariants = await prisma.productVariant.findMany()
     * 
     * // Get first 10 ProductVariants
     * const productVariants = await prisma.productVariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductVariantFindManyArgs>(args?: SelectSubset<T, ProductVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductVariant.
     * @param {ProductVariantCreateArgs} args - Arguments to create a ProductVariant.
     * @example
     * // Create one ProductVariant
     * const ProductVariant = await prisma.productVariant.create({
     *   data: {
     *     // ... data to create a ProductVariant
     *   }
     * })
     * 
     */
    create<T extends ProductVariantCreateArgs>(args: SelectSubset<T, ProductVariantCreateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductVariants.
     * @param {ProductVariantCreateManyArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVariantCreateManyArgs>(args?: SelectSubset<T, ProductVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductVariants and returns the data saved in the database.
     * @param {ProductVariantCreateManyAndReturnArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductVariants and only return the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductVariantCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductVariant.
     * @param {ProductVariantDeleteArgs} args - Arguments to delete one ProductVariant.
     * @example
     * // Delete one ProductVariant
     * const ProductVariant = await prisma.productVariant.delete({
     *   where: {
     *     // ... filter to delete one ProductVariant
     *   }
     * })
     * 
     */
    delete<T extends ProductVariantDeleteArgs>(args: SelectSubset<T, ProductVariantDeleteArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductVariant.
     * @param {ProductVariantUpdateArgs} args - Arguments to update one ProductVariant.
     * @example
     * // Update one ProductVariant
     * const productVariant = await prisma.productVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVariantUpdateArgs>(args: SelectSubset<T, ProductVariantUpdateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductVariants.
     * @param {ProductVariantDeleteManyArgs} args - Arguments to filter ProductVariants to delete.
     * @example
     * // Delete a few ProductVariants
     * const { count } = await prisma.productVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVariantDeleteManyArgs>(args?: SelectSubset<T, ProductVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVariantUpdateManyArgs>(args: SelectSubset<T, ProductVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants and returns the data updated in the database.
     * @param {ProductVariantUpdateManyAndReturnArgs} args - Arguments to update many ProductVariants.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductVariants and only return the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductVariantUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductVariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductVariant.
     * @param {ProductVariantUpsertArgs} args - Arguments to update or create a ProductVariant.
     * @example
     * // Update or create a ProductVariant
     * const productVariant = await prisma.productVariant.upsert({
     *   create: {
     *     // ... data to create a ProductVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariant we want to update
     *   }
     * })
     */
    upsert<T extends ProductVariantUpsertArgs>(args: SelectSubset<T, ProductVariantUpsertArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantCountArgs} args - Arguments to filter ProductVariants to count.
     * @example
     * // Count the number of ProductVariants
     * const count = await prisma.productVariant.count({
     *   where: {
     *     // ... the filter for the ProductVariants we want to count
     *   }
     * })
    **/
    count<T extends ProductVariantCountArgs>(
      args?: Subset<T, ProductVariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductVariantAggregateArgs>(args: Subset<T, ProductVariantAggregateArgs>): Prisma.PrismaPromise<GetProductVariantAggregateType<T>>

    /**
     * Group by ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantGroupByArgs} args - Group by arguments.
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
      T extends ProductVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariantGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariant model
   */
  readonly fields: ProductVariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends ProductVariant$imagesArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attributeValues<T extends ProductVariant$attributeValuesArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$attributeValuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantAttributeValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductVariant model
   */
  interface ProductVariantFieldRefs {
    readonly id: FieldRef<"ProductVariant", 'Int'>
    readonly productId: FieldRef<"ProductVariant", 'Int'>
    readonly name: FieldRef<"ProductVariant", 'String'>
    readonly slug: FieldRef<"ProductVariant", 'String'>
    readonly price: FieldRef<"ProductVariant", 'Int'>
    readonly stock: FieldRef<"ProductVariant", 'Int'>
    readonly isDefault: FieldRef<"ProductVariant", 'Boolean'>
    readonly isActive: FieldRef<"ProductVariant", 'Boolean'>
    readonly createdAt: FieldRef<"ProductVariant", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductVariant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductVariant findUnique
   */
  export type ProductVariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findUniqueOrThrow
   */
  export type ProductVariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findFirst
   */
  export type ProductVariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findFirstOrThrow
   */
  export type ProductVariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findMany
   */
  export type ProductVariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant create
   */
  export type ProductVariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVariant.
     */
    data: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
  }

  /**
   * ProductVariant createMany
   */
  export type ProductVariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductVariant createManyAndReturn
   */
  export type ProductVariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariant update
   */
  export type ProductVariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVariant.
     */
    data: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
    /**
     * Choose, which ProductVariant to update.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant updateMany
   */
  export type ProductVariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
  }

  /**
   * ProductVariant updateManyAndReturn
   */
  export type ProductVariantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariant upsert
   */
  export type ProductVariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVariant to update in case it exists.
     */
    where: ProductVariantWhereUniqueInput
    /**
     * In case the ProductVariant found by the `where` argument doesn't exist, create a new ProductVariant with this data.
     */
    create: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
    /**
     * In case the ProductVariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
  }

  /**
   * ProductVariant delete
   */
  export type ProductVariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter which ProductVariant to delete.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant deleteMany
   */
  export type ProductVariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariants to delete
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to delete.
     */
    limit?: number
  }

  /**
   * ProductVariant.images
   */
  export type ProductVariant$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    where?: VariantImageWhereInput
    orderBy?: VariantImageOrderByWithRelationInput | VariantImageOrderByWithRelationInput[]
    cursor?: VariantImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantImageScalarFieldEnum | VariantImageScalarFieldEnum[]
  }

  /**
   * ProductVariant.attributeValues
   */
  export type ProductVariant$attributeValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttributeValue
     */
    select?: VariantAttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttributeValue
     */
    omit?: VariantAttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeValueInclude<ExtArgs> | null
    where?: VariantAttributeValueWhereInput
    orderBy?: VariantAttributeValueOrderByWithRelationInput | VariantAttributeValueOrderByWithRelationInput[]
    cursor?: VariantAttributeValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantAttributeValueScalarFieldEnum | VariantAttributeValueScalarFieldEnum[]
  }

  /**
   * ProductVariant without action
   */
  export type ProductVariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
  }


  /**
   * Model VariantAttributeValue
   */

  export type AggregateVariantAttributeValue = {
    _count: VariantAttributeValueCountAggregateOutputType | null
    _avg: VariantAttributeValueAvgAggregateOutputType | null
    _sum: VariantAttributeValueSumAggregateOutputType | null
    _min: VariantAttributeValueMinAggregateOutputType | null
    _max: VariantAttributeValueMaxAggregateOutputType | null
  }

  export type VariantAttributeValueAvgAggregateOutputType = {
    variantId: number | null
    attributeValueId: number | null
  }

  export type VariantAttributeValueSumAggregateOutputType = {
    variantId: number | null
    attributeValueId: number | null
  }

  export type VariantAttributeValueMinAggregateOutputType = {
    variantId: number | null
    attributeValueId: number | null
    createdAt: Date | null
  }

  export type VariantAttributeValueMaxAggregateOutputType = {
    variantId: number | null
    attributeValueId: number | null
    createdAt: Date | null
  }

  export type VariantAttributeValueCountAggregateOutputType = {
    variantId: number
    attributeValueId: number
    createdAt: number
    _all: number
  }


  export type VariantAttributeValueAvgAggregateInputType = {
    variantId?: true
    attributeValueId?: true
  }

  export type VariantAttributeValueSumAggregateInputType = {
    variantId?: true
    attributeValueId?: true
  }

  export type VariantAttributeValueMinAggregateInputType = {
    variantId?: true
    attributeValueId?: true
    createdAt?: true
  }

  export type VariantAttributeValueMaxAggregateInputType = {
    variantId?: true
    attributeValueId?: true
    createdAt?: true
  }

  export type VariantAttributeValueCountAggregateInputType = {
    variantId?: true
    attributeValueId?: true
    createdAt?: true
    _all?: true
  }

  export type VariantAttributeValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariantAttributeValue to aggregate.
     */
    where?: VariantAttributeValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantAttributeValues to fetch.
     */
    orderBy?: VariantAttributeValueOrderByWithRelationInput | VariantAttributeValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariantAttributeValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantAttributeValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantAttributeValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VariantAttributeValues
    **/
    _count?: true | VariantAttributeValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariantAttributeValueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariantAttributeValueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantAttributeValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantAttributeValueMaxAggregateInputType
  }

  export type GetVariantAttributeValueAggregateType<T extends VariantAttributeValueAggregateArgs> = {
        [P in keyof T & keyof AggregateVariantAttributeValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariantAttributeValue[P]>
      : GetScalarType<T[P], AggregateVariantAttributeValue[P]>
  }




  export type VariantAttributeValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantAttributeValueWhereInput
    orderBy?: VariantAttributeValueOrderByWithAggregationInput | VariantAttributeValueOrderByWithAggregationInput[]
    by: VariantAttributeValueScalarFieldEnum[] | VariantAttributeValueScalarFieldEnum
    having?: VariantAttributeValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantAttributeValueCountAggregateInputType | true
    _avg?: VariantAttributeValueAvgAggregateInputType
    _sum?: VariantAttributeValueSumAggregateInputType
    _min?: VariantAttributeValueMinAggregateInputType
    _max?: VariantAttributeValueMaxAggregateInputType
  }

  export type VariantAttributeValueGroupByOutputType = {
    variantId: number
    attributeValueId: number
    createdAt: Date
    _count: VariantAttributeValueCountAggregateOutputType | null
    _avg: VariantAttributeValueAvgAggregateOutputType | null
    _sum: VariantAttributeValueSumAggregateOutputType | null
    _min: VariantAttributeValueMinAggregateOutputType | null
    _max: VariantAttributeValueMaxAggregateOutputType | null
  }

  type GetVariantAttributeValueGroupByPayload<T extends VariantAttributeValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantAttributeValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantAttributeValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantAttributeValueGroupByOutputType[P]>
            : GetScalarType<T[P], VariantAttributeValueGroupByOutputType[P]>
        }
      >
    >


  export type VariantAttributeValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    variantId?: boolean
    attributeValueId?: boolean
    createdAt?: boolean
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    attributeValue?: boolean | AttributeValueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantAttributeValue"]>

  export type VariantAttributeValueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    variantId?: boolean
    attributeValueId?: boolean
    createdAt?: boolean
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    attributeValue?: boolean | AttributeValueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantAttributeValue"]>

  export type VariantAttributeValueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    variantId?: boolean
    attributeValueId?: boolean
    createdAt?: boolean
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    attributeValue?: boolean | AttributeValueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantAttributeValue"]>

  export type VariantAttributeValueSelectScalar = {
    variantId?: boolean
    attributeValueId?: boolean
    createdAt?: boolean
  }

  export type VariantAttributeValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"variantId" | "attributeValueId" | "createdAt", ExtArgs["result"]["variantAttributeValue"]>
  export type VariantAttributeValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    attributeValue?: boolean | AttributeValueDefaultArgs<ExtArgs>
  }
  export type VariantAttributeValueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    attributeValue?: boolean | AttributeValueDefaultArgs<ExtArgs>
  }
  export type VariantAttributeValueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    attributeValue?: boolean | AttributeValueDefaultArgs<ExtArgs>
  }

  export type $VariantAttributeValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VariantAttributeValue"
    objects: {
      variant: Prisma.$ProductVariantPayload<ExtArgs>
      attributeValue: Prisma.$AttributeValuePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      variantId: number
      attributeValueId: number
      createdAt: Date
    }, ExtArgs["result"]["variantAttributeValue"]>
    composites: {}
  }

  type VariantAttributeValueGetPayload<S extends boolean | null | undefined | VariantAttributeValueDefaultArgs> = $Result.GetResult<Prisma.$VariantAttributeValuePayload, S>

  type VariantAttributeValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VariantAttributeValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariantAttributeValueCountAggregateInputType | true
    }

  export interface VariantAttributeValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VariantAttributeValue'], meta: { name: 'VariantAttributeValue' } }
    /**
     * Find zero or one VariantAttributeValue that matches the filter.
     * @param {VariantAttributeValueFindUniqueArgs} args - Arguments to find a VariantAttributeValue
     * @example
     * // Get one VariantAttributeValue
     * const variantAttributeValue = await prisma.variantAttributeValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariantAttributeValueFindUniqueArgs>(args: SelectSubset<T, VariantAttributeValueFindUniqueArgs<ExtArgs>>): Prisma__VariantAttributeValueClient<$Result.GetResult<Prisma.$VariantAttributeValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VariantAttributeValue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariantAttributeValueFindUniqueOrThrowArgs} args - Arguments to find a VariantAttributeValue
     * @example
     * // Get one VariantAttributeValue
     * const variantAttributeValue = await prisma.variantAttributeValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariantAttributeValueFindUniqueOrThrowArgs>(args: SelectSubset<T, VariantAttributeValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariantAttributeValueClient<$Result.GetResult<Prisma.$VariantAttributeValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VariantAttributeValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAttributeValueFindFirstArgs} args - Arguments to find a VariantAttributeValue
     * @example
     * // Get one VariantAttributeValue
     * const variantAttributeValue = await prisma.variantAttributeValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariantAttributeValueFindFirstArgs>(args?: SelectSubset<T, VariantAttributeValueFindFirstArgs<ExtArgs>>): Prisma__VariantAttributeValueClient<$Result.GetResult<Prisma.$VariantAttributeValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VariantAttributeValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAttributeValueFindFirstOrThrowArgs} args - Arguments to find a VariantAttributeValue
     * @example
     * // Get one VariantAttributeValue
     * const variantAttributeValue = await prisma.variantAttributeValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariantAttributeValueFindFirstOrThrowArgs>(args?: SelectSubset<T, VariantAttributeValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariantAttributeValueClient<$Result.GetResult<Prisma.$VariantAttributeValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VariantAttributeValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAttributeValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VariantAttributeValues
     * const variantAttributeValues = await prisma.variantAttributeValue.findMany()
     * 
     * // Get first 10 VariantAttributeValues
     * const variantAttributeValues = await prisma.variantAttributeValue.findMany({ take: 10 })
     * 
     * // Only select the `variantId`
     * const variantAttributeValueWithVariantIdOnly = await prisma.variantAttributeValue.findMany({ select: { variantId: true } })
     * 
     */
    findMany<T extends VariantAttributeValueFindManyArgs>(args?: SelectSubset<T, VariantAttributeValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantAttributeValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VariantAttributeValue.
     * @param {VariantAttributeValueCreateArgs} args - Arguments to create a VariantAttributeValue.
     * @example
     * // Create one VariantAttributeValue
     * const VariantAttributeValue = await prisma.variantAttributeValue.create({
     *   data: {
     *     // ... data to create a VariantAttributeValue
     *   }
     * })
     * 
     */
    create<T extends VariantAttributeValueCreateArgs>(args: SelectSubset<T, VariantAttributeValueCreateArgs<ExtArgs>>): Prisma__VariantAttributeValueClient<$Result.GetResult<Prisma.$VariantAttributeValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VariantAttributeValues.
     * @param {VariantAttributeValueCreateManyArgs} args - Arguments to create many VariantAttributeValues.
     * @example
     * // Create many VariantAttributeValues
     * const variantAttributeValue = await prisma.variantAttributeValue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariantAttributeValueCreateManyArgs>(args?: SelectSubset<T, VariantAttributeValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VariantAttributeValues and returns the data saved in the database.
     * @param {VariantAttributeValueCreateManyAndReturnArgs} args - Arguments to create many VariantAttributeValues.
     * @example
     * // Create many VariantAttributeValues
     * const variantAttributeValue = await prisma.variantAttributeValue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VariantAttributeValues and only return the `variantId`
     * const variantAttributeValueWithVariantIdOnly = await prisma.variantAttributeValue.createManyAndReturn({
     *   select: { variantId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariantAttributeValueCreateManyAndReturnArgs>(args?: SelectSubset<T, VariantAttributeValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantAttributeValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VariantAttributeValue.
     * @param {VariantAttributeValueDeleteArgs} args - Arguments to delete one VariantAttributeValue.
     * @example
     * // Delete one VariantAttributeValue
     * const VariantAttributeValue = await prisma.variantAttributeValue.delete({
     *   where: {
     *     // ... filter to delete one VariantAttributeValue
     *   }
     * })
     * 
     */
    delete<T extends VariantAttributeValueDeleteArgs>(args: SelectSubset<T, VariantAttributeValueDeleteArgs<ExtArgs>>): Prisma__VariantAttributeValueClient<$Result.GetResult<Prisma.$VariantAttributeValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VariantAttributeValue.
     * @param {VariantAttributeValueUpdateArgs} args - Arguments to update one VariantAttributeValue.
     * @example
     * // Update one VariantAttributeValue
     * const variantAttributeValue = await prisma.variantAttributeValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariantAttributeValueUpdateArgs>(args: SelectSubset<T, VariantAttributeValueUpdateArgs<ExtArgs>>): Prisma__VariantAttributeValueClient<$Result.GetResult<Prisma.$VariantAttributeValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VariantAttributeValues.
     * @param {VariantAttributeValueDeleteManyArgs} args - Arguments to filter VariantAttributeValues to delete.
     * @example
     * // Delete a few VariantAttributeValues
     * const { count } = await prisma.variantAttributeValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariantAttributeValueDeleteManyArgs>(args?: SelectSubset<T, VariantAttributeValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VariantAttributeValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAttributeValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VariantAttributeValues
     * const variantAttributeValue = await prisma.variantAttributeValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariantAttributeValueUpdateManyArgs>(args: SelectSubset<T, VariantAttributeValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VariantAttributeValues and returns the data updated in the database.
     * @param {VariantAttributeValueUpdateManyAndReturnArgs} args - Arguments to update many VariantAttributeValues.
     * @example
     * // Update many VariantAttributeValues
     * const variantAttributeValue = await prisma.variantAttributeValue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VariantAttributeValues and only return the `variantId`
     * const variantAttributeValueWithVariantIdOnly = await prisma.variantAttributeValue.updateManyAndReturn({
     *   select: { variantId: true },
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
    updateManyAndReturn<T extends VariantAttributeValueUpdateManyAndReturnArgs>(args: SelectSubset<T, VariantAttributeValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantAttributeValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VariantAttributeValue.
     * @param {VariantAttributeValueUpsertArgs} args - Arguments to update or create a VariantAttributeValue.
     * @example
     * // Update or create a VariantAttributeValue
     * const variantAttributeValue = await prisma.variantAttributeValue.upsert({
     *   create: {
     *     // ... data to create a VariantAttributeValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VariantAttributeValue we want to update
     *   }
     * })
     */
    upsert<T extends VariantAttributeValueUpsertArgs>(args: SelectSubset<T, VariantAttributeValueUpsertArgs<ExtArgs>>): Prisma__VariantAttributeValueClient<$Result.GetResult<Prisma.$VariantAttributeValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VariantAttributeValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAttributeValueCountArgs} args - Arguments to filter VariantAttributeValues to count.
     * @example
     * // Count the number of VariantAttributeValues
     * const count = await prisma.variantAttributeValue.count({
     *   where: {
     *     // ... the filter for the VariantAttributeValues we want to count
     *   }
     * })
    **/
    count<T extends VariantAttributeValueCountArgs>(
      args?: Subset<T, VariantAttributeValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantAttributeValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VariantAttributeValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAttributeValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariantAttributeValueAggregateArgs>(args: Subset<T, VariantAttributeValueAggregateArgs>): Prisma.PrismaPromise<GetVariantAttributeValueAggregateType<T>>

    /**
     * Group by VariantAttributeValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAttributeValueGroupByArgs} args - Group by arguments.
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
      T extends VariantAttributeValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariantAttributeValueGroupByArgs['orderBy'] }
        : { orderBy?: VariantAttributeValueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VariantAttributeValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantAttributeValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VariantAttributeValue model
   */
  readonly fields: VariantAttributeValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VariantAttributeValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariantAttributeValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variant<T extends ProductVariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantDefaultArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attributeValue<T extends AttributeValueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttributeValueDefaultArgs<ExtArgs>>): Prisma__AttributeValueClient<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VariantAttributeValue model
   */
  interface VariantAttributeValueFieldRefs {
    readonly variantId: FieldRef<"VariantAttributeValue", 'Int'>
    readonly attributeValueId: FieldRef<"VariantAttributeValue", 'Int'>
    readonly createdAt: FieldRef<"VariantAttributeValue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VariantAttributeValue findUnique
   */
  export type VariantAttributeValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttributeValue
     */
    select?: VariantAttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttributeValue
     */
    omit?: VariantAttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeValueInclude<ExtArgs> | null
    /**
     * Filter, which VariantAttributeValue to fetch.
     */
    where: VariantAttributeValueWhereUniqueInput
  }

  /**
   * VariantAttributeValue findUniqueOrThrow
   */
  export type VariantAttributeValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttributeValue
     */
    select?: VariantAttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttributeValue
     */
    omit?: VariantAttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeValueInclude<ExtArgs> | null
    /**
     * Filter, which VariantAttributeValue to fetch.
     */
    where: VariantAttributeValueWhereUniqueInput
  }

  /**
   * VariantAttributeValue findFirst
   */
  export type VariantAttributeValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttributeValue
     */
    select?: VariantAttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttributeValue
     */
    omit?: VariantAttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeValueInclude<ExtArgs> | null
    /**
     * Filter, which VariantAttributeValue to fetch.
     */
    where?: VariantAttributeValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantAttributeValues to fetch.
     */
    orderBy?: VariantAttributeValueOrderByWithRelationInput | VariantAttributeValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariantAttributeValues.
     */
    cursor?: VariantAttributeValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantAttributeValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantAttributeValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariantAttributeValues.
     */
    distinct?: VariantAttributeValueScalarFieldEnum | VariantAttributeValueScalarFieldEnum[]
  }

  /**
   * VariantAttributeValue findFirstOrThrow
   */
  export type VariantAttributeValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttributeValue
     */
    select?: VariantAttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttributeValue
     */
    omit?: VariantAttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeValueInclude<ExtArgs> | null
    /**
     * Filter, which VariantAttributeValue to fetch.
     */
    where?: VariantAttributeValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantAttributeValues to fetch.
     */
    orderBy?: VariantAttributeValueOrderByWithRelationInput | VariantAttributeValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariantAttributeValues.
     */
    cursor?: VariantAttributeValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantAttributeValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantAttributeValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariantAttributeValues.
     */
    distinct?: VariantAttributeValueScalarFieldEnum | VariantAttributeValueScalarFieldEnum[]
  }

  /**
   * VariantAttributeValue findMany
   */
  export type VariantAttributeValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttributeValue
     */
    select?: VariantAttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttributeValue
     */
    omit?: VariantAttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeValueInclude<ExtArgs> | null
    /**
     * Filter, which VariantAttributeValues to fetch.
     */
    where?: VariantAttributeValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantAttributeValues to fetch.
     */
    orderBy?: VariantAttributeValueOrderByWithRelationInput | VariantAttributeValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VariantAttributeValues.
     */
    cursor?: VariantAttributeValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantAttributeValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantAttributeValues.
     */
    skip?: number
    distinct?: VariantAttributeValueScalarFieldEnum | VariantAttributeValueScalarFieldEnum[]
  }

  /**
   * VariantAttributeValue create
   */
  export type VariantAttributeValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttributeValue
     */
    select?: VariantAttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttributeValue
     */
    omit?: VariantAttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeValueInclude<ExtArgs> | null
    /**
     * The data needed to create a VariantAttributeValue.
     */
    data: XOR<VariantAttributeValueCreateInput, VariantAttributeValueUncheckedCreateInput>
  }

  /**
   * VariantAttributeValue createMany
   */
  export type VariantAttributeValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VariantAttributeValues.
     */
    data: VariantAttributeValueCreateManyInput | VariantAttributeValueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VariantAttributeValue createManyAndReturn
   */
  export type VariantAttributeValueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttributeValue
     */
    select?: VariantAttributeValueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttributeValue
     */
    omit?: VariantAttributeValueOmit<ExtArgs> | null
    /**
     * The data used to create many VariantAttributeValues.
     */
    data: VariantAttributeValueCreateManyInput | VariantAttributeValueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeValueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VariantAttributeValue update
   */
  export type VariantAttributeValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttributeValue
     */
    select?: VariantAttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttributeValue
     */
    omit?: VariantAttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeValueInclude<ExtArgs> | null
    /**
     * The data needed to update a VariantAttributeValue.
     */
    data: XOR<VariantAttributeValueUpdateInput, VariantAttributeValueUncheckedUpdateInput>
    /**
     * Choose, which VariantAttributeValue to update.
     */
    where: VariantAttributeValueWhereUniqueInput
  }

  /**
   * VariantAttributeValue updateMany
   */
  export type VariantAttributeValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VariantAttributeValues.
     */
    data: XOR<VariantAttributeValueUpdateManyMutationInput, VariantAttributeValueUncheckedUpdateManyInput>
    /**
     * Filter which VariantAttributeValues to update
     */
    where?: VariantAttributeValueWhereInput
    /**
     * Limit how many VariantAttributeValues to update.
     */
    limit?: number
  }

  /**
   * VariantAttributeValue updateManyAndReturn
   */
  export type VariantAttributeValueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttributeValue
     */
    select?: VariantAttributeValueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttributeValue
     */
    omit?: VariantAttributeValueOmit<ExtArgs> | null
    /**
     * The data used to update VariantAttributeValues.
     */
    data: XOR<VariantAttributeValueUpdateManyMutationInput, VariantAttributeValueUncheckedUpdateManyInput>
    /**
     * Filter which VariantAttributeValues to update
     */
    where?: VariantAttributeValueWhereInput
    /**
     * Limit how many VariantAttributeValues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeValueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VariantAttributeValue upsert
   */
  export type VariantAttributeValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttributeValue
     */
    select?: VariantAttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttributeValue
     */
    omit?: VariantAttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeValueInclude<ExtArgs> | null
    /**
     * The filter to search for the VariantAttributeValue to update in case it exists.
     */
    where: VariantAttributeValueWhereUniqueInput
    /**
     * In case the VariantAttributeValue found by the `where` argument doesn't exist, create a new VariantAttributeValue with this data.
     */
    create: XOR<VariantAttributeValueCreateInput, VariantAttributeValueUncheckedCreateInput>
    /**
     * In case the VariantAttributeValue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariantAttributeValueUpdateInput, VariantAttributeValueUncheckedUpdateInput>
  }

  /**
   * VariantAttributeValue delete
   */
  export type VariantAttributeValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttributeValue
     */
    select?: VariantAttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttributeValue
     */
    omit?: VariantAttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeValueInclude<ExtArgs> | null
    /**
     * Filter which VariantAttributeValue to delete.
     */
    where: VariantAttributeValueWhereUniqueInput
  }

  /**
   * VariantAttributeValue deleteMany
   */
  export type VariantAttributeValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariantAttributeValues to delete
     */
    where?: VariantAttributeValueWhereInput
    /**
     * Limit how many VariantAttributeValues to delete.
     */
    limit?: number
  }

  /**
   * VariantAttributeValue without action
   */
  export type VariantAttributeValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantAttributeValue
     */
    select?: VariantAttributeValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantAttributeValue
     */
    omit?: VariantAttributeValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantAttributeValueInclude<ExtArgs> | null
  }


  /**
   * Model VariantImage
   */

  export type AggregateVariantImage = {
    _count: VariantImageCountAggregateOutputType | null
    _avg: VariantImageAvgAggregateOutputType | null
    _sum: VariantImageSumAggregateOutputType | null
    _min: VariantImageMinAggregateOutputType | null
    _max: VariantImageMaxAggregateOutputType | null
  }

  export type VariantImageAvgAggregateOutputType = {
    id: number | null
    variantId: number | null
    position: number | null
  }

  export type VariantImageSumAggregateOutputType = {
    id: number | null
    variantId: number | null
    position: number | null
  }

  export type VariantImageMinAggregateOutputType = {
    id: number | null
    variantId: number | null
    url: string | null
    alt: string | null
    position: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VariantImageMaxAggregateOutputType = {
    id: number | null
    variantId: number | null
    url: string | null
    alt: string | null
    position: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VariantImageCountAggregateOutputType = {
    id: number
    variantId: number
    url: number
    alt: number
    position: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VariantImageAvgAggregateInputType = {
    id?: true
    variantId?: true
    position?: true
  }

  export type VariantImageSumAggregateInputType = {
    id?: true
    variantId?: true
    position?: true
  }

  export type VariantImageMinAggregateInputType = {
    id?: true
    variantId?: true
    url?: true
    alt?: true
    position?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VariantImageMaxAggregateInputType = {
    id?: true
    variantId?: true
    url?: true
    alt?: true
    position?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VariantImageCountAggregateInputType = {
    id?: true
    variantId?: true
    url?: true
    alt?: true
    position?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VariantImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariantImage to aggregate.
     */
    where?: VariantImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantImages to fetch.
     */
    orderBy?: VariantImageOrderByWithRelationInput | VariantImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariantImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VariantImages
    **/
    _count?: true | VariantImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariantImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariantImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantImageMaxAggregateInputType
  }

  export type GetVariantImageAggregateType<T extends VariantImageAggregateArgs> = {
        [P in keyof T & keyof AggregateVariantImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariantImage[P]>
      : GetScalarType<T[P], AggregateVariantImage[P]>
  }




  export type VariantImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantImageWhereInput
    orderBy?: VariantImageOrderByWithAggregationInput | VariantImageOrderByWithAggregationInput[]
    by: VariantImageScalarFieldEnum[] | VariantImageScalarFieldEnum
    having?: VariantImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantImageCountAggregateInputType | true
    _avg?: VariantImageAvgAggregateInputType
    _sum?: VariantImageSumAggregateInputType
    _min?: VariantImageMinAggregateInputType
    _max?: VariantImageMaxAggregateInputType
  }

  export type VariantImageGroupByOutputType = {
    id: number
    variantId: number
    url: string
    alt: string | null
    position: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: VariantImageCountAggregateOutputType | null
    _avg: VariantImageAvgAggregateOutputType | null
    _sum: VariantImageSumAggregateOutputType | null
    _min: VariantImageMinAggregateOutputType | null
    _max: VariantImageMaxAggregateOutputType | null
  }

  type GetVariantImageGroupByPayload<T extends VariantImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantImageGroupByOutputType[P]>
            : GetScalarType<T[P], VariantImageGroupByOutputType[P]>
        }
      >
    >


  export type VariantImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variantId?: boolean
    url?: boolean
    alt?: boolean
    position?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantImage"]>

  export type VariantImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variantId?: boolean
    url?: boolean
    alt?: boolean
    position?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantImage"]>

  export type VariantImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variantId?: boolean
    url?: boolean
    alt?: boolean
    position?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantImage"]>

  export type VariantImageSelectScalar = {
    id?: boolean
    variantId?: boolean
    url?: boolean
    alt?: boolean
    position?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VariantImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "variantId" | "url" | "alt" | "position" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["variantImage"]>
  export type VariantImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }
  export type VariantImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }
  export type VariantImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }

  export type $VariantImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VariantImage"
    objects: {
      variant: Prisma.$ProductVariantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      variantId: number
      url: string
      alt: string | null
      position: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["variantImage"]>
    composites: {}
  }

  type VariantImageGetPayload<S extends boolean | null | undefined | VariantImageDefaultArgs> = $Result.GetResult<Prisma.$VariantImagePayload, S>

  type VariantImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VariantImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariantImageCountAggregateInputType | true
    }

  export interface VariantImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VariantImage'], meta: { name: 'VariantImage' } }
    /**
     * Find zero or one VariantImage that matches the filter.
     * @param {VariantImageFindUniqueArgs} args - Arguments to find a VariantImage
     * @example
     * // Get one VariantImage
     * const variantImage = await prisma.variantImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariantImageFindUniqueArgs>(args: SelectSubset<T, VariantImageFindUniqueArgs<ExtArgs>>): Prisma__VariantImageClient<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VariantImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariantImageFindUniqueOrThrowArgs} args - Arguments to find a VariantImage
     * @example
     * // Get one VariantImage
     * const variantImage = await prisma.variantImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariantImageFindUniqueOrThrowArgs>(args: SelectSubset<T, VariantImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariantImageClient<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VariantImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantImageFindFirstArgs} args - Arguments to find a VariantImage
     * @example
     * // Get one VariantImage
     * const variantImage = await prisma.variantImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariantImageFindFirstArgs>(args?: SelectSubset<T, VariantImageFindFirstArgs<ExtArgs>>): Prisma__VariantImageClient<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VariantImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantImageFindFirstOrThrowArgs} args - Arguments to find a VariantImage
     * @example
     * // Get one VariantImage
     * const variantImage = await prisma.variantImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariantImageFindFirstOrThrowArgs>(args?: SelectSubset<T, VariantImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariantImageClient<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VariantImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VariantImages
     * const variantImages = await prisma.variantImage.findMany()
     * 
     * // Get first 10 VariantImages
     * const variantImages = await prisma.variantImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variantImageWithIdOnly = await prisma.variantImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VariantImageFindManyArgs>(args?: SelectSubset<T, VariantImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VariantImage.
     * @param {VariantImageCreateArgs} args - Arguments to create a VariantImage.
     * @example
     * // Create one VariantImage
     * const VariantImage = await prisma.variantImage.create({
     *   data: {
     *     // ... data to create a VariantImage
     *   }
     * })
     * 
     */
    create<T extends VariantImageCreateArgs>(args: SelectSubset<T, VariantImageCreateArgs<ExtArgs>>): Prisma__VariantImageClient<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VariantImages.
     * @param {VariantImageCreateManyArgs} args - Arguments to create many VariantImages.
     * @example
     * // Create many VariantImages
     * const variantImage = await prisma.variantImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariantImageCreateManyArgs>(args?: SelectSubset<T, VariantImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VariantImages and returns the data saved in the database.
     * @param {VariantImageCreateManyAndReturnArgs} args - Arguments to create many VariantImages.
     * @example
     * // Create many VariantImages
     * const variantImage = await prisma.variantImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VariantImages and only return the `id`
     * const variantImageWithIdOnly = await prisma.variantImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariantImageCreateManyAndReturnArgs>(args?: SelectSubset<T, VariantImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VariantImage.
     * @param {VariantImageDeleteArgs} args - Arguments to delete one VariantImage.
     * @example
     * // Delete one VariantImage
     * const VariantImage = await prisma.variantImage.delete({
     *   where: {
     *     // ... filter to delete one VariantImage
     *   }
     * })
     * 
     */
    delete<T extends VariantImageDeleteArgs>(args: SelectSubset<T, VariantImageDeleteArgs<ExtArgs>>): Prisma__VariantImageClient<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VariantImage.
     * @param {VariantImageUpdateArgs} args - Arguments to update one VariantImage.
     * @example
     * // Update one VariantImage
     * const variantImage = await prisma.variantImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariantImageUpdateArgs>(args: SelectSubset<T, VariantImageUpdateArgs<ExtArgs>>): Prisma__VariantImageClient<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VariantImages.
     * @param {VariantImageDeleteManyArgs} args - Arguments to filter VariantImages to delete.
     * @example
     * // Delete a few VariantImages
     * const { count } = await prisma.variantImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariantImageDeleteManyArgs>(args?: SelectSubset<T, VariantImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VariantImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VariantImages
     * const variantImage = await prisma.variantImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariantImageUpdateManyArgs>(args: SelectSubset<T, VariantImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VariantImages and returns the data updated in the database.
     * @param {VariantImageUpdateManyAndReturnArgs} args - Arguments to update many VariantImages.
     * @example
     * // Update many VariantImages
     * const variantImage = await prisma.variantImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VariantImages and only return the `id`
     * const variantImageWithIdOnly = await prisma.variantImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends VariantImageUpdateManyAndReturnArgs>(args: SelectSubset<T, VariantImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VariantImage.
     * @param {VariantImageUpsertArgs} args - Arguments to update or create a VariantImage.
     * @example
     * // Update or create a VariantImage
     * const variantImage = await prisma.variantImage.upsert({
     *   create: {
     *     // ... data to create a VariantImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VariantImage we want to update
     *   }
     * })
     */
    upsert<T extends VariantImageUpsertArgs>(args: SelectSubset<T, VariantImageUpsertArgs<ExtArgs>>): Prisma__VariantImageClient<$Result.GetResult<Prisma.$VariantImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VariantImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantImageCountArgs} args - Arguments to filter VariantImages to count.
     * @example
     * // Count the number of VariantImages
     * const count = await prisma.variantImage.count({
     *   where: {
     *     // ... the filter for the VariantImages we want to count
     *   }
     * })
    **/
    count<T extends VariantImageCountArgs>(
      args?: Subset<T, VariantImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VariantImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariantImageAggregateArgs>(args: Subset<T, VariantImageAggregateArgs>): Prisma.PrismaPromise<GetVariantImageAggregateType<T>>

    /**
     * Group by VariantImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantImageGroupByArgs} args - Group by arguments.
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
      T extends VariantImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariantImageGroupByArgs['orderBy'] }
        : { orderBy?: VariantImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VariantImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VariantImage model
   */
  readonly fields: VariantImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VariantImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariantImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variant<T extends ProductVariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantDefaultArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VariantImage model
   */
  interface VariantImageFieldRefs {
    readonly id: FieldRef<"VariantImage", 'Int'>
    readonly variantId: FieldRef<"VariantImage", 'Int'>
    readonly url: FieldRef<"VariantImage", 'String'>
    readonly alt: FieldRef<"VariantImage", 'String'>
    readonly position: FieldRef<"VariantImage", 'Int'>
    readonly isActive: FieldRef<"VariantImage", 'Boolean'>
    readonly createdAt: FieldRef<"VariantImage", 'DateTime'>
    readonly updatedAt: FieldRef<"VariantImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VariantImage findUnique
   */
  export type VariantImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    /**
     * Filter, which VariantImage to fetch.
     */
    where: VariantImageWhereUniqueInput
  }

  /**
   * VariantImage findUniqueOrThrow
   */
  export type VariantImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    /**
     * Filter, which VariantImage to fetch.
     */
    where: VariantImageWhereUniqueInput
  }

  /**
   * VariantImage findFirst
   */
  export type VariantImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    /**
     * Filter, which VariantImage to fetch.
     */
    where?: VariantImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantImages to fetch.
     */
    orderBy?: VariantImageOrderByWithRelationInput | VariantImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariantImages.
     */
    cursor?: VariantImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariantImages.
     */
    distinct?: VariantImageScalarFieldEnum | VariantImageScalarFieldEnum[]
  }

  /**
   * VariantImage findFirstOrThrow
   */
  export type VariantImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    /**
     * Filter, which VariantImage to fetch.
     */
    where?: VariantImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantImages to fetch.
     */
    orderBy?: VariantImageOrderByWithRelationInput | VariantImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariantImages.
     */
    cursor?: VariantImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariantImages.
     */
    distinct?: VariantImageScalarFieldEnum | VariantImageScalarFieldEnum[]
  }

  /**
   * VariantImage findMany
   */
  export type VariantImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    /**
     * Filter, which VariantImages to fetch.
     */
    where?: VariantImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantImages to fetch.
     */
    orderBy?: VariantImageOrderByWithRelationInput | VariantImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VariantImages.
     */
    cursor?: VariantImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantImages.
     */
    skip?: number
    distinct?: VariantImageScalarFieldEnum | VariantImageScalarFieldEnum[]
  }

  /**
   * VariantImage create
   */
  export type VariantImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    /**
     * The data needed to create a VariantImage.
     */
    data: XOR<VariantImageCreateInput, VariantImageUncheckedCreateInput>
  }

  /**
   * VariantImage createMany
   */
  export type VariantImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VariantImages.
     */
    data: VariantImageCreateManyInput | VariantImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VariantImage createManyAndReturn
   */
  export type VariantImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * The data used to create many VariantImages.
     */
    data: VariantImageCreateManyInput | VariantImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VariantImage update
   */
  export type VariantImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    /**
     * The data needed to update a VariantImage.
     */
    data: XOR<VariantImageUpdateInput, VariantImageUncheckedUpdateInput>
    /**
     * Choose, which VariantImage to update.
     */
    where: VariantImageWhereUniqueInput
  }

  /**
   * VariantImage updateMany
   */
  export type VariantImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VariantImages.
     */
    data: XOR<VariantImageUpdateManyMutationInput, VariantImageUncheckedUpdateManyInput>
    /**
     * Filter which VariantImages to update
     */
    where?: VariantImageWhereInput
    /**
     * Limit how many VariantImages to update.
     */
    limit?: number
  }

  /**
   * VariantImage updateManyAndReturn
   */
  export type VariantImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * The data used to update VariantImages.
     */
    data: XOR<VariantImageUpdateManyMutationInput, VariantImageUncheckedUpdateManyInput>
    /**
     * Filter which VariantImages to update
     */
    where?: VariantImageWhereInput
    /**
     * Limit how many VariantImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VariantImage upsert
   */
  export type VariantImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    /**
     * The filter to search for the VariantImage to update in case it exists.
     */
    where: VariantImageWhereUniqueInput
    /**
     * In case the VariantImage found by the `where` argument doesn't exist, create a new VariantImage with this data.
     */
    create: XOR<VariantImageCreateInput, VariantImageUncheckedCreateInput>
    /**
     * In case the VariantImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariantImageUpdateInput, VariantImageUncheckedUpdateInput>
  }

  /**
   * VariantImage delete
   */
  export type VariantImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
    /**
     * Filter which VariantImage to delete.
     */
    where: VariantImageWhereUniqueInput
  }

  /**
   * VariantImage deleteMany
   */
  export type VariantImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariantImages to delete
     */
    where?: VariantImageWhereInput
    /**
     * Limit how many VariantImages to delete.
     */
    limit?: number
  }

  /**
   * VariantImage without action
   */
  export type VariantImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantImage
     */
    select?: VariantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariantImage
     */
    omit?: VariantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantImageInclude<ExtArgs> | null
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


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const AttributeScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    name: 'name',
    slug: 'slug',
    type: 'type',
    isRequired: 'isRequired',
    position: 'position',
    icon: 'icon',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttributeScalarFieldEnum = (typeof AttributeScalarFieldEnum)[keyof typeof AttributeScalarFieldEnum]


  export const AttributeValueScalarFieldEnum: {
    id: 'id',
    attributeId: 'attributeId',
    value: 'value',
    slug: 'slug',
    colorHex: 'colorHex',
    position: 'position',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttributeValueScalarFieldEnum = (typeof AttributeValueScalarFieldEnum)[keyof typeof AttributeValueScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    categoryId: 'categoryId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductVariantScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    name: 'name',
    slug: 'slug',
    price: 'price',
    stock: 'stock',
    isDefault: 'isDefault',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductVariantScalarFieldEnum = (typeof ProductVariantScalarFieldEnum)[keyof typeof ProductVariantScalarFieldEnum]


  export const VariantAttributeValueScalarFieldEnum: {
    variantId: 'variantId',
    attributeValueId: 'attributeValueId',
    createdAt: 'createdAt'
  };

  export type VariantAttributeValueScalarFieldEnum = (typeof VariantAttributeValueScalarFieldEnum)[keyof typeof VariantAttributeValueScalarFieldEnum]


  export const VariantImageScalarFieldEnum: {
    id: 'id',
    variantId: 'variantId',
    url: 'url',
    alt: 'alt',
    position: 'position',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VariantImageScalarFieldEnum = (typeof VariantImageScalarFieldEnum)[keyof typeof VariantImageScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AttributeType'
   */
  export type EnumAttributeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttributeType'>
    


  /**
   * Reference to a field of type 'AttributeType[]'
   */
  export type ListEnumAttributeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttributeType[]'>
    


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


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    isActive?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
    attributes?: AttributeListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    attributes?: AttributeOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    isActive?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
    attributes?: AttributeListRelationFilter
  }, "id" | "name" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    isActive?: BoolWithAggregatesFilter<"Category"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type AttributeWhereInput = {
    AND?: AttributeWhereInput | AttributeWhereInput[]
    OR?: AttributeWhereInput[]
    NOT?: AttributeWhereInput | AttributeWhereInput[]
    id?: IntFilter<"Attribute"> | number
    categoryId?: IntFilter<"Attribute"> | number
    name?: StringFilter<"Attribute"> | string
    slug?: StringFilter<"Attribute"> | string
    type?: EnumAttributeTypeFilter<"Attribute"> | $Enums.AttributeType
    isRequired?: BoolFilter<"Attribute"> | boolean
    position?: IntFilter<"Attribute"> | number
    icon?: StringNullableFilter<"Attribute"> | string | null
    isActive?: BoolFilter<"Attribute"> | boolean
    createdAt?: DateTimeFilter<"Attribute"> | Date | string
    updatedAt?: DateTimeFilter<"Attribute"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    values?: AttributeValueListRelationFilter
  }

  export type AttributeOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    isRequired?: SortOrder
    position?: SortOrder
    icon?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    values?: AttributeValueOrderByRelationAggregateInput
  }

  export type AttributeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    categoryId_slug?: AttributeCategoryIdSlugCompoundUniqueInput
    AND?: AttributeWhereInput | AttributeWhereInput[]
    OR?: AttributeWhereInput[]
    NOT?: AttributeWhereInput | AttributeWhereInput[]
    categoryId?: IntFilter<"Attribute"> | number
    name?: StringFilter<"Attribute"> | string
    slug?: StringFilter<"Attribute"> | string
    type?: EnumAttributeTypeFilter<"Attribute"> | $Enums.AttributeType
    isRequired?: BoolFilter<"Attribute"> | boolean
    position?: IntFilter<"Attribute"> | number
    icon?: StringNullableFilter<"Attribute"> | string | null
    isActive?: BoolFilter<"Attribute"> | boolean
    createdAt?: DateTimeFilter<"Attribute"> | Date | string
    updatedAt?: DateTimeFilter<"Attribute"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    values?: AttributeValueListRelationFilter
  }, "id" | "categoryId_slug">

  export type AttributeOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    isRequired?: SortOrder
    position?: SortOrder
    icon?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttributeCountOrderByAggregateInput
    _avg?: AttributeAvgOrderByAggregateInput
    _max?: AttributeMaxOrderByAggregateInput
    _min?: AttributeMinOrderByAggregateInput
    _sum?: AttributeSumOrderByAggregateInput
  }

  export type AttributeScalarWhereWithAggregatesInput = {
    AND?: AttributeScalarWhereWithAggregatesInput | AttributeScalarWhereWithAggregatesInput[]
    OR?: AttributeScalarWhereWithAggregatesInput[]
    NOT?: AttributeScalarWhereWithAggregatesInput | AttributeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attribute"> | number
    categoryId?: IntWithAggregatesFilter<"Attribute"> | number
    name?: StringWithAggregatesFilter<"Attribute"> | string
    slug?: StringWithAggregatesFilter<"Attribute"> | string
    type?: EnumAttributeTypeWithAggregatesFilter<"Attribute"> | $Enums.AttributeType
    isRequired?: BoolWithAggregatesFilter<"Attribute"> | boolean
    position?: IntWithAggregatesFilter<"Attribute"> | number
    icon?: StringNullableWithAggregatesFilter<"Attribute"> | string | null
    isActive?: BoolWithAggregatesFilter<"Attribute"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Attribute"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attribute"> | Date | string
  }

  export type AttributeValueWhereInput = {
    AND?: AttributeValueWhereInput | AttributeValueWhereInput[]
    OR?: AttributeValueWhereInput[]
    NOT?: AttributeValueWhereInput | AttributeValueWhereInput[]
    id?: IntFilter<"AttributeValue"> | number
    attributeId?: IntFilter<"AttributeValue"> | number
    value?: StringFilter<"AttributeValue"> | string
    slug?: StringFilter<"AttributeValue"> | string
    colorHex?: StringNullableFilter<"AttributeValue"> | string | null
    position?: IntFilter<"AttributeValue"> | number
    isActive?: BoolFilter<"AttributeValue"> | boolean
    createdAt?: DateTimeFilter<"AttributeValue"> | Date | string
    updatedAt?: DateTimeFilter<"AttributeValue"> | Date | string
    attribute?: XOR<AttributeScalarRelationFilter, AttributeWhereInput>
    variantAttributeValues?: VariantAttributeValueListRelationFilter
  }

  export type AttributeValueOrderByWithRelationInput = {
    id?: SortOrder
    attributeId?: SortOrder
    value?: SortOrder
    slug?: SortOrder
    colorHex?: SortOrderInput | SortOrder
    position?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attribute?: AttributeOrderByWithRelationInput
    variantAttributeValues?: VariantAttributeValueOrderByRelationAggregateInput
  }

  export type AttributeValueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    attributeId_value?: AttributeValueAttributeIdValueCompoundUniqueInput
    attributeId_slug?: AttributeValueAttributeIdSlugCompoundUniqueInput
    AND?: AttributeValueWhereInput | AttributeValueWhereInput[]
    OR?: AttributeValueWhereInput[]
    NOT?: AttributeValueWhereInput | AttributeValueWhereInput[]
    attributeId?: IntFilter<"AttributeValue"> | number
    value?: StringFilter<"AttributeValue"> | string
    slug?: StringFilter<"AttributeValue"> | string
    colorHex?: StringNullableFilter<"AttributeValue"> | string | null
    position?: IntFilter<"AttributeValue"> | number
    isActive?: BoolFilter<"AttributeValue"> | boolean
    createdAt?: DateTimeFilter<"AttributeValue"> | Date | string
    updatedAt?: DateTimeFilter<"AttributeValue"> | Date | string
    attribute?: XOR<AttributeScalarRelationFilter, AttributeWhereInput>
    variantAttributeValues?: VariantAttributeValueListRelationFilter
  }, "id" | "attributeId_value" | "attributeId_slug">

  export type AttributeValueOrderByWithAggregationInput = {
    id?: SortOrder
    attributeId?: SortOrder
    value?: SortOrder
    slug?: SortOrder
    colorHex?: SortOrderInput | SortOrder
    position?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttributeValueCountOrderByAggregateInput
    _avg?: AttributeValueAvgOrderByAggregateInput
    _max?: AttributeValueMaxOrderByAggregateInput
    _min?: AttributeValueMinOrderByAggregateInput
    _sum?: AttributeValueSumOrderByAggregateInput
  }

  export type AttributeValueScalarWhereWithAggregatesInput = {
    AND?: AttributeValueScalarWhereWithAggregatesInput | AttributeValueScalarWhereWithAggregatesInput[]
    OR?: AttributeValueScalarWhereWithAggregatesInput[]
    NOT?: AttributeValueScalarWhereWithAggregatesInput | AttributeValueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AttributeValue"> | number
    attributeId?: IntWithAggregatesFilter<"AttributeValue"> | number
    value?: StringWithAggregatesFilter<"AttributeValue"> | string
    slug?: StringWithAggregatesFilter<"AttributeValue"> | string
    colorHex?: StringNullableWithAggregatesFilter<"AttributeValue"> | string | null
    position?: IntWithAggregatesFilter<"AttributeValue"> | number
    isActive?: BoolWithAggregatesFilter<"AttributeValue"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AttributeValue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AttributeValue"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    categoryId?: IntFilter<"Product"> | number
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    variants?: ProductVariantListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    variants?: ProductVariantOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    categoryId?: IntFilter<"Product"> | number
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    variants?: ProductVariantListRelationFilter
  }, "id" | "slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    categoryId?: IntWithAggregatesFilter<"Product"> | number
    isActive?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductVariantWhereInput = {
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    id?: IntFilter<"ProductVariant"> | number
    productId?: IntFilter<"ProductVariant"> | number
    name?: StringFilter<"ProductVariant"> | string
    slug?: StringFilter<"ProductVariant"> | string
    price?: IntFilter<"ProductVariant"> | number
    stock?: IntFilter<"ProductVariant"> | number
    isDefault?: BoolFilter<"ProductVariant"> | boolean
    isActive?: BoolFilter<"ProductVariant"> | boolean
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    images?: VariantImageListRelationFilter
    attributeValues?: VariantAttributeValueListRelationFilter
  }

  export type ProductVariantOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    images?: VariantImageOrderByRelationAggregateInput
    attributeValues?: VariantAttributeValueOrderByRelationAggregateInput
  }

  export type ProductVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productId_slug?: ProductVariantProductIdSlugCompoundUniqueInput
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    productId?: IntFilter<"ProductVariant"> | number
    name?: StringFilter<"ProductVariant"> | string
    slug?: StringFilter<"ProductVariant"> | string
    price?: IntFilter<"ProductVariant"> | number
    stock?: IntFilter<"ProductVariant"> | number
    isDefault?: BoolFilter<"ProductVariant"> | boolean
    isActive?: BoolFilter<"ProductVariant"> | boolean
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    images?: VariantImageListRelationFilter
    attributeValues?: VariantAttributeValueListRelationFilter
  }, "id" | "productId_slug">

  export type ProductVariantOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductVariantCountOrderByAggregateInput
    _avg?: ProductVariantAvgOrderByAggregateInput
    _max?: ProductVariantMaxOrderByAggregateInput
    _min?: ProductVariantMinOrderByAggregateInput
    _sum?: ProductVariantSumOrderByAggregateInput
  }

  export type ProductVariantScalarWhereWithAggregatesInput = {
    AND?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    OR?: ProductVariantScalarWhereWithAggregatesInput[]
    NOT?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductVariant"> | number
    productId?: IntWithAggregatesFilter<"ProductVariant"> | number
    name?: StringWithAggregatesFilter<"ProductVariant"> | string
    slug?: StringWithAggregatesFilter<"ProductVariant"> | string
    price?: IntWithAggregatesFilter<"ProductVariant"> | number
    stock?: IntWithAggregatesFilter<"ProductVariant"> | number
    isDefault?: BoolWithAggregatesFilter<"ProductVariant"> | boolean
    isActive?: BoolWithAggregatesFilter<"ProductVariant"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductVariant"> | Date | string
  }

  export type VariantAttributeValueWhereInput = {
    AND?: VariantAttributeValueWhereInput | VariantAttributeValueWhereInput[]
    OR?: VariantAttributeValueWhereInput[]
    NOT?: VariantAttributeValueWhereInput | VariantAttributeValueWhereInput[]
    variantId?: IntFilter<"VariantAttributeValue"> | number
    attributeValueId?: IntFilter<"VariantAttributeValue"> | number
    createdAt?: DateTimeFilter<"VariantAttributeValue"> | Date | string
    variant?: XOR<ProductVariantScalarRelationFilter, ProductVariantWhereInput>
    attributeValue?: XOR<AttributeValueScalarRelationFilter, AttributeValueWhereInput>
  }

  export type VariantAttributeValueOrderByWithRelationInput = {
    variantId?: SortOrder
    attributeValueId?: SortOrder
    createdAt?: SortOrder
    variant?: ProductVariantOrderByWithRelationInput
    attributeValue?: AttributeValueOrderByWithRelationInput
  }

  export type VariantAttributeValueWhereUniqueInput = Prisma.AtLeast<{
    variantId_attributeValueId?: VariantAttributeValueVariantIdAttributeValueIdCompoundUniqueInput
    AND?: VariantAttributeValueWhereInput | VariantAttributeValueWhereInput[]
    OR?: VariantAttributeValueWhereInput[]
    NOT?: VariantAttributeValueWhereInput | VariantAttributeValueWhereInput[]
    variantId?: IntFilter<"VariantAttributeValue"> | number
    attributeValueId?: IntFilter<"VariantAttributeValue"> | number
    createdAt?: DateTimeFilter<"VariantAttributeValue"> | Date | string
    variant?: XOR<ProductVariantScalarRelationFilter, ProductVariantWhereInput>
    attributeValue?: XOR<AttributeValueScalarRelationFilter, AttributeValueWhereInput>
  }, "variantId_attributeValueId">

  export type VariantAttributeValueOrderByWithAggregationInput = {
    variantId?: SortOrder
    attributeValueId?: SortOrder
    createdAt?: SortOrder
    _count?: VariantAttributeValueCountOrderByAggregateInput
    _avg?: VariantAttributeValueAvgOrderByAggregateInput
    _max?: VariantAttributeValueMaxOrderByAggregateInput
    _min?: VariantAttributeValueMinOrderByAggregateInput
    _sum?: VariantAttributeValueSumOrderByAggregateInput
  }

  export type VariantAttributeValueScalarWhereWithAggregatesInput = {
    AND?: VariantAttributeValueScalarWhereWithAggregatesInput | VariantAttributeValueScalarWhereWithAggregatesInput[]
    OR?: VariantAttributeValueScalarWhereWithAggregatesInput[]
    NOT?: VariantAttributeValueScalarWhereWithAggregatesInput | VariantAttributeValueScalarWhereWithAggregatesInput[]
    variantId?: IntWithAggregatesFilter<"VariantAttributeValue"> | number
    attributeValueId?: IntWithAggregatesFilter<"VariantAttributeValue"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VariantAttributeValue"> | Date | string
  }

  export type VariantImageWhereInput = {
    AND?: VariantImageWhereInput | VariantImageWhereInput[]
    OR?: VariantImageWhereInput[]
    NOT?: VariantImageWhereInput | VariantImageWhereInput[]
    id?: IntFilter<"VariantImage"> | number
    variantId?: IntFilter<"VariantImage"> | number
    url?: StringFilter<"VariantImage"> | string
    alt?: StringNullableFilter<"VariantImage"> | string | null
    position?: IntFilter<"VariantImage"> | number
    isActive?: BoolFilter<"VariantImage"> | boolean
    createdAt?: DateTimeFilter<"VariantImage"> | Date | string
    updatedAt?: DateTimeFilter<"VariantImage"> | Date | string
    variant?: XOR<ProductVariantScalarRelationFilter, ProductVariantWhereInput>
  }

  export type VariantImageOrderByWithRelationInput = {
    id?: SortOrder
    variantId?: SortOrder
    url?: SortOrder
    alt?: SortOrderInput | SortOrder
    position?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    variant?: ProductVariantOrderByWithRelationInput
  }

  export type VariantImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    variantId_position?: VariantImageVariantIdPositionCompoundUniqueInput
    AND?: VariantImageWhereInput | VariantImageWhereInput[]
    OR?: VariantImageWhereInput[]
    NOT?: VariantImageWhereInput | VariantImageWhereInput[]
    variantId?: IntFilter<"VariantImage"> | number
    url?: StringFilter<"VariantImage"> | string
    alt?: StringNullableFilter<"VariantImage"> | string | null
    position?: IntFilter<"VariantImage"> | number
    isActive?: BoolFilter<"VariantImage"> | boolean
    createdAt?: DateTimeFilter<"VariantImage"> | Date | string
    updatedAt?: DateTimeFilter<"VariantImage"> | Date | string
    variant?: XOR<ProductVariantScalarRelationFilter, ProductVariantWhereInput>
  }, "id" | "variantId_position">

  export type VariantImageOrderByWithAggregationInput = {
    id?: SortOrder
    variantId?: SortOrder
    url?: SortOrder
    alt?: SortOrderInput | SortOrder
    position?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VariantImageCountOrderByAggregateInput
    _avg?: VariantImageAvgOrderByAggregateInput
    _max?: VariantImageMaxOrderByAggregateInput
    _min?: VariantImageMinOrderByAggregateInput
    _sum?: VariantImageSumOrderByAggregateInput
  }

  export type VariantImageScalarWhereWithAggregatesInput = {
    AND?: VariantImageScalarWhereWithAggregatesInput | VariantImageScalarWhereWithAggregatesInput[]
    OR?: VariantImageScalarWhereWithAggregatesInput[]
    NOT?: VariantImageScalarWhereWithAggregatesInput | VariantImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VariantImage"> | number
    variantId?: IntWithAggregatesFilter<"VariantImage"> | number
    url?: StringWithAggregatesFilter<"VariantImage"> | string
    alt?: StringNullableWithAggregatesFilter<"VariantImage"> | string | null
    position?: IntWithAggregatesFilter<"VariantImage"> | number
    isActive?: BoolWithAggregatesFilter<"VariantImage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"VariantImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VariantImage"> | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
    attributes?: AttributeCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
    attributes?: AttributeUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
    attributes?: AttributeUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
    attributes?: AttributeUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeCreateInput = {
    name: string
    slug: string
    type?: $Enums.AttributeType
    isRequired?: boolean
    position?: number
    icon?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutAttributesInput
    values?: AttributeValueCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUncheckedCreateInput = {
    id?: number
    categoryId: number
    name: string
    slug: string
    type?: $Enums.AttributeType
    isRequired?: boolean
    position?: number
    icon?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    values?: AttributeValueUncheckedCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAttributeTypeFieldUpdateOperationsInput | $Enums.AttributeType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutAttributesNestedInput
    values?: AttributeValueUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAttributeTypeFieldUpdateOperationsInput | $Enums.AttributeType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    values?: AttributeValueUncheckedUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeCreateManyInput = {
    id?: number
    categoryId: number
    name: string
    slug: string
    type?: $Enums.AttributeType
    isRequired?: boolean
    position?: number
    icon?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttributeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAttributeTypeFieldUpdateOperationsInput | $Enums.AttributeType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAttributeTypeFieldUpdateOperationsInput | $Enums.AttributeType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeValueCreateInput = {
    value: string
    slug: string
    colorHex?: string | null
    position?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attribute: AttributeCreateNestedOneWithoutValuesInput
    variantAttributeValues?: VariantAttributeValueCreateNestedManyWithoutAttributeValueInput
  }

  export type AttributeValueUncheckedCreateInput = {
    id?: number
    attributeId: number
    value: string
    slug: string
    colorHex?: string | null
    position?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    variantAttributeValues?: VariantAttributeValueUncheckedCreateNestedManyWithoutAttributeValueInput
  }

  export type AttributeValueUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    colorHex?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attribute?: AttributeUpdateOneRequiredWithoutValuesNestedInput
    variantAttributeValues?: VariantAttributeValueUpdateManyWithoutAttributeValueNestedInput
  }

  export type AttributeValueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    attributeId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    colorHex?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variantAttributeValues?: VariantAttributeValueUncheckedUpdateManyWithoutAttributeValueNestedInput
  }

  export type AttributeValueCreateManyInput = {
    id?: number
    attributeId: number
    value: string
    slug: string
    colorHex?: string | null
    position?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttributeValueUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    colorHex?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeValueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    attributeId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    colorHex?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    variants?: ProductVariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    categoryId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    categoryId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantCreateInput = {
    name: string
    slug: string
    price: number
    stock?: number
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
    images?: VariantImageCreateNestedManyWithoutVariantInput
    attributeValues?: VariantAttributeValueCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateInput = {
    id?: number
    productId: number
    name: string
    slug: string
    price: number
    stock?: number
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VariantImageUncheckedCreateNestedManyWithoutVariantInput
    attributeValues?: VariantAttributeValueUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    images?: VariantImageUpdateManyWithoutVariantNestedInput
    attributeValues?: VariantAttributeValueUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VariantImageUncheckedUpdateManyWithoutVariantNestedInput
    attributeValues?: VariantAttributeValueUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantCreateManyInput = {
    id?: number
    productId: number
    name: string
    slug: string
    price: number
    stock?: number
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVariantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantAttributeValueCreateInput = {
    createdAt?: Date | string
    variant: ProductVariantCreateNestedOneWithoutAttributeValuesInput
    attributeValue: AttributeValueCreateNestedOneWithoutVariantAttributeValuesInput
  }

  export type VariantAttributeValueUncheckedCreateInput = {
    variantId: number
    attributeValueId: number
    createdAt?: Date | string
  }

  export type VariantAttributeValueUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variant?: ProductVariantUpdateOneRequiredWithoutAttributeValuesNestedInput
    attributeValue?: AttributeValueUpdateOneRequiredWithoutVariantAttributeValuesNestedInput
  }

  export type VariantAttributeValueUncheckedUpdateInput = {
    variantId?: IntFieldUpdateOperationsInput | number
    attributeValueId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantAttributeValueCreateManyInput = {
    variantId: number
    attributeValueId: number
    createdAt?: Date | string
  }

  export type VariantAttributeValueUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantAttributeValueUncheckedUpdateManyInput = {
    variantId?: IntFieldUpdateOperationsInput | number
    attributeValueId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantImageCreateInput = {
    url: string
    alt?: string | null
    position?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    variant: ProductVariantCreateNestedOneWithoutImagesInput
  }

  export type VariantImageUncheckedCreateInput = {
    id?: number
    variantId: number
    url: string
    alt?: string | null
    position?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariantImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variant?: ProductVariantUpdateOneRequiredWithoutImagesNestedInput
  }

  export type VariantImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantImageCreateManyInput = {
    id?: number
    variantId: number
    url: string
    alt?: string | null
    position?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariantImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type AttributeListRelationFilter = {
    every?: AttributeWhereInput
    some?: AttributeWhereInput
    none?: AttributeWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttributeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumAttributeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttributeType | EnumAttributeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttributeType[] | ListEnumAttributeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttributeType[] | ListEnumAttributeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttributeTypeFilter<$PrismaModel> | $Enums.AttributeType
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

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type AttributeValueListRelationFilter = {
    every?: AttributeValueWhereInput
    some?: AttributeValueWhereInput
    none?: AttributeValueWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AttributeValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttributeCategoryIdSlugCompoundUniqueInput = {
    categoryId: number
    slug: string
  }

  export type AttributeCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    isRequired?: SortOrder
    position?: SortOrder
    icon?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttributeAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    position?: SortOrder
  }

  export type AttributeMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    isRequired?: SortOrder
    position?: SortOrder
    icon?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttributeMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    isRequired?: SortOrder
    position?: SortOrder
    icon?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttributeSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    position?: SortOrder
  }

  export type EnumAttributeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttributeType | EnumAttributeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttributeType[] | ListEnumAttributeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttributeType[] | ListEnumAttributeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttributeTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttributeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttributeTypeFilter<$PrismaModel>
    _max?: NestedEnumAttributeTypeFilter<$PrismaModel>
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

  export type AttributeScalarRelationFilter = {
    is?: AttributeWhereInput
    isNot?: AttributeWhereInput
  }

  export type VariantAttributeValueListRelationFilter = {
    every?: VariantAttributeValueWhereInput
    some?: VariantAttributeValueWhereInput
    none?: VariantAttributeValueWhereInput
  }

  export type VariantAttributeValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttributeValueAttributeIdValueCompoundUniqueInput = {
    attributeId: number
    value: string
  }

  export type AttributeValueAttributeIdSlugCompoundUniqueInput = {
    attributeId: number
    slug: string
  }

  export type AttributeValueCountOrderByAggregateInput = {
    id?: SortOrder
    attributeId?: SortOrder
    value?: SortOrder
    slug?: SortOrder
    colorHex?: SortOrder
    position?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttributeValueAvgOrderByAggregateInput = {
    id?: SortOrder
    attributeId?: SortOrder
    position?: SortOrder
  }

  export type AttributeValueMaxOrderByAggregateInput = {
    id?: SortOrder
    attributeId?: SortOrder
    value?: SortOrder
    slug?: SortOrder
    colorHex?: SortOrder
    position?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttributeValueMinOrderByAggregateInput = {
    id?: SortOrder
    attributeId?: SortOrder
    value?: SortOrder
    slug?: SortOrder
    colorHex?: SortOrder
    position?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttributeValueSumOrderByAggregateInput = {
    id?: SortOrder
    attributeId?: SortOrder
    position?: SortOrder
  }

  export type ProductVariantListRelationFilter = {
    every?: ProductVariantWhereInput
    some?: ProductVariantWhereInput
    none?: ProductVariantWhereInput
  }

  export type ProductVariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type VariantImageListRelationFilter = {
    every?: VariantImageWhereInput
    some?: VariantImageWhereInput
    none?: VariantImageWhereInput
  }

  export type VariantImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVariantProductIdSlugCompoundUniqueInput = {
    productId: number
    slug: string
  }

  export type ProductVariantCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type ProductVariantMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type ProductVariantScalarRelationFilter = {
    is?: ProductVariantWhereInput
    isNot?: ProductVariantWhereInput
  }

  export type AttributeValueScalarRelationFilter = {
    is?: AttributeValueWhereInput
    isNot?: AttributeValueWhereInput
  }

  export type VariantAttributeValueVariantIdAttributeValueIdCompoundUniqueInput = {
    variantId: number
    attributeValueId: number
  }

  export type VariantAttributeValueCountOrderByAggregateInput = {
    variantId?: SortOrder
    attributeValueId?: SortOrder
    createdAt?: SortOrder
  }

  export type VariantAttributeValueAvgOrderByAggregateInput = {
    variantId?: SortOrder
    attributeValueId?: SortOrder
  }

  export type VariantAttributeValueMaxOrderByAggregateInput = {
    variantId?: SortOrder
    attributeValueId?: SortOrder
    createdAt?: SortOrder
  }

  export type VariantAttributeValueMinOrderByAggregateInput = {
    variantId?: SortOrder
    attributeValueId?: SortOrder
    createdAt?: SortOrder
  }

  export type VariantAttributeValueSumOrderByAggregateInput = {
    variantId?: SortOrder
    attributeValueId?: SortOrder
  }

  export type VariantImageVariantIdPositionCompoundUniqueInput = {
    variantId: number
    position: number
  }

  export type VariantImageCountOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    position?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VariantImageAvgOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    position?: SortOrder
  }

  export type VariantImageMaxOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    position?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VariantImageMinOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    position?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VariantImageSumOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    position?: SortOrder
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type AttributeCreateNestedManyWithoutCategoryInput = {
    create?: XOR<AttributeCreateWithoutCategoryInput, AttributeUncheckedCreateWithoutCategoryInput> | AttributeCreateWithoutCategoryInput[] | AttributeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutCategoryInput | AttributeCreateOrConnectWithoutCategoryInput[]
    createMany?: AttributeCreateManyCategoryInputEnvelope
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type AttributeUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<AttributeCreateWithoutCategoryInput, AttributeUncheckedCreateWithoutCategoryInput> | AttributeCreateWithoutCategoryInput[] | AttributeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutCategoryInput | AttributeCreateOrConnectWithoutCategoryInput[]
    createMany?: AttributeCreateManyCategoryInputEnvelope
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type AttributeUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<AttributeCreateWithoutCategoryInput, AttributeUncheckedCreateWithoutCategoryInput> | AttributeCreateWithoutCategoryInput[] | AttributeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutCategoryInput | AttributeCreateOrConnectWithoutCategoryInput[]
    upsert?: AttributeUpsertWithWhereUniqueWithoutCategoryInput | AttributeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: AttributeCreateManyCategoryInputEnvelope
    set?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    disconnect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    delete?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    update?: AttributeUpdateWithWhereUniqueWithoutCategoryInput | AttributeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: AttributeUpdateManyWithWhereWithoutCategoryInput | AttributeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type AttributeUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<AttributeCreateWithoutCategoryInput, AttributeUncheckedCreateWithoutCategoryInput> | AttributeCreateWithoutCategoryInput[] | AttributeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutCategoryInput | AttributeCreateOrConnectWithoutCategoryInput[]
    upsert?: AttributeUpsertWithWhereUniqueWithoutCategoryInput | AttributeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: AttributeCreateManyCategoryInputEnvelope
    set?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    disconnect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    delete?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    update?: AttributeUpdateWithWhereUniqueWithoutCategoryInput | AttributeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: AttributeUpdateManyWithWhereWithoutCategoryInput | AttributeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutAttributesInput = {
    create?: XOR<CategoryCreateWithoutAttributesInput, CategoryUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAttributesInput
    connect?: CategoryWhereUniqueInput
  }

  export type AttributeValueCreateNestedManyWithoutAttributeInput = {
    create?: XOR<AttributeValueCreateWithoutAttributeInput, AttributeValueUncheckedCreateWithoutAttributeInput> | AttributeValueCreateWithoutAttributeInput[] | AttributeValueUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributeValueCreateOrConnectWithoutAttributeInput | AttributeValueCreateOrConnectWithoutAttributeInput[]
    createMany?: AttributeValueCreateManyAttributeInputEnvelope
    connect?: AttributeValueWhereUniqueInput | AttributeValueWhereUniqueInput[]
  }

  export type AttributeValueUncheckedCreateNestedManyWithoutAttributeInput = {
    create?: XOR<AttributeValueCreateWithoutAttributeInput, AttributeValueUncheckedCreateWithoutAttributeInput> | AttributeValueCreateWithoutAttributeInput[] | AttributeValueUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributeValueCreateOrConnectWithoutAttributeInput | AttributeValueCreateOrConnectWithoutAttributeInput[]
    createMany?: AttributeValueCreateManyAttributeInputEnvelope
    connect?: AttributeValueWhereUniqueInput | AttributeValueWhereUniqueInput[]
  }

  export type EnumAttributeTypeFieldUpdateOperationsInput = {
    set?: $Enums.AttributeType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CategoryUpdateOneRequiredWithoutAttributesNestedInput = {
    create?: XOR<CategoryCreateWithoutAttributesInput, CategoryUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAttributesInput
    upsert?: CategoryUpsertWithoutAttributesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutAttributesInput, CategoryUpdateWithoutAttributesInput>, CategoryUncheckedUpdateWithoutAttributesInput>
  }

  export type AttributeValueUpdateManyWithoutAttributeNestedInput = {
    create?: XOR<AttributeValueCreateWithoutAttributeInput, AttributeValueUncheckedCreateWithoutAttributeInput> | AttributeValueCreateWithoutAttributeInput[] | AttributeValueUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributeValueCreateOrConnectWithoutAttributeInput | AttributeValueCreateOrConnectWithoutAttributeInput[]
    upsert?: AttributeValueUpsertWithWhereUniqueWithoutAttributeInput | AttributeValueUpsertWithWhereUniqueWithoutAttributeInput[]
    createMany?: AttributeValueCreateManyAttributeInputEnvelope
    set?: AttributeValueWhereUniqueInput | AttributeValueWhereUniqueInput[]
    disconnect?: AttributeValueWhereUniqueInput | AttributeValueWhereUniqueInput[]
    delete?: AttributeValueWhereUniqueInput | AttributeValueWhereUniqueInput[]
    connect?: AttributeValueWhereUniqueInput | AttributeValueWhereUniqueInput[]
    update?: AttributeValueUpdateWithWhereUniqueWithoutAttributeInput | AttributeValueUpdateWithWhereUniqueWithoutAttributeInput[]
    updateMany?: AttributeValueUpdateManyWithWhereWithoutAttributeInput | AttributeValueUpdateManyWithWhereWithoutAttributeInput[]
    deleteMany?: AttributeValueScalarWhereInput | AttributeValueScalarWhereInput[]
  }

  export type AttributeValueUncheckedUpdateManyWithoutAttributeNestedInput = {
    create?: XOR<AttributeValueCreateWithoutAttributeInput, AttributeValueUncheckedCreateWithoutAttributeInput> | AttributeValueCreateWithoutAttributeInput[] | AttributeValueUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributeValueCreateOrConnectWithoutAttributeInput | AttributeValueCreateOrConnectWithoutAttributeInput[]
    upsert?: AttributeValueUpsertWithWhereUniqueWithoutAttributeInput | AttributeValueUpsertWithWhereUniqueWithoutAttributeInput[]
    createMany?: AttributeValueCreateManyAttributeInputEnvelope
    set?: AttributeValueWhereUniqueInput | AttributeValueWhereUniqueInput[]
    disconnect?: AttributeValueWhereUniqueInput | AttributeValueWhereUniqueInput[]
    delete?: AttributeValueWhereUniqueInput | AttributeValueWhereUniqueInput[]
    connect?: AttributeValueWhereUniqueInput | AttributeValueWhereUniqueInput[]
    update?: AttributeValueUpdateWithWhereUniqueWithoutAttributeInput | AttributeValueUpdateWithWhereUniqueWithoutAttributeInput[]
    updateMany?: AttributeValueUpdateManyWithWhereWithoutAttributeInput | AttributeValueUpdateManyWithWhereWithoutAttributeInput[]
    deleteMany?: AttributeValueScalarWhereInput | AttributeValueScalarWhereInput[]
  }

  export type AttributeCreateNestedOneWithoutValuesInput = {
    create?: XOR<AttributeCreateWithoutValuesInput, AttributeUncheckedCreateWithoutValuesInput>
    connectOrCreate?: AttributeCreateOrConnectWithoutValuesInput
    connect?: AttributeWhereUniqueInput
  }

  export type VariantAttributeValueCreateNestedManyWithoutAttributeValueInput = {
    create?: XOR<VariantAttributeValueCreateWithoutAttributeValueInput, VariantAttributeValueUncheckedCreateWithoutAttributeValueInput> | VariantAttributeValueCreateWithoutAttributeValueInput[] | VariantAttributeValueUncheckedCreateWithoutAttributeValueInput[]
    connectOrCreate?: VariantAttributeValueCreateOrConnectWithoutAttributeValueInput | VariantAttributeValueCreateOrConnectWithoutAttributeValueInput[]
    createMany?: VariantAttributeValueCreateManyAttributeValueInputEnvelope
    connect?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
  }

  export type VariantAttributeValueUncheckedCreateNestedManyWithoutAttributeValueInput = {
    create?: XOR<VariantAttributeValueCreateWithoutAttributeValueInput, VariantAttributeValueUncheckedCreateWithoutAttributeValueInput> | VariantAttributeValueCreateWithoutAttributeValueInput[] | VariantAttributeValueUncheckedCreateWithoutAttributeValueInput[]
    connectOrCreate?: VariantAttributeValueCreateOrConnectWithoutAttributeValueInput | VariantAttributeValueCreateOrConnectWithoutAttributeValueInput[]
    createMany?: VariantAttributeValueCreateManyAttributeValueInputEnvelope
    connect?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
  }

  export type AttributeUpdateOneRequiredWithoutValuesNestedInput = {
    create?: XOR<AttributeCreateWithoutValuesInput, AttributeUncheckedCreateWithoutValuesInput>
    connectOrCreate?: AttributeCreateOrConnectWithoutValuesInput
    upsert?: AttributeUpsertWithoutValuesInput
    connect?: AttributeWhereUniqueInput
    update?: XOR<XOR<AttributeUpdateToOneWithWhereWithoutValuesInput, AttributeUpdateWithoutValuesInput>, AttributeUncheckedUpdateWithoutValuesInput>
  }

  export type VariantAttributeValueUpdateManyWithoutAttributeValueNestedInput = {
    create?: XOR<VariantAttributeValueCreateWithoutAttributeValueInput, VariantAttributeValueUncheckedCreateWithoutAttributeValueInput> | VariantAttributeValueCreateWithoutAttributeValueInput[] | VariantAttributeValueUncheckedCreateWithoutAttributeValueInput[]
    connectOrCreate?: VariantAttributeValueCreateOrConnectWithoutAttributeValueInput | VariantAttributeValueCreateOrConnectWithoutAttributeValueInput[]
    upsert?: VariantAttributeValueUpsertWithWhereUniqueWithoutAttributeValueInput | VariantAttributeValueUpsertWithWhereUniqueWithoutAttributeValueInput[]
    createMany?: VariantAttributeValueCreateManyAttributeValueInputEnvelope
    set?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
    disconnect?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
    delete?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
    connect?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
    update?: VariantAttributeValueUpdateWithWhereUniqueWithoutAttributeValueInput | VariantAttributeValueUpdateWithWhereUniqueWithoutAttributeValueInput[]
    updateMany?: VariantAttributeValueUpdateManyWithWhereWithoutAttributeValueInput | VariantAttributeValueUpdateManyWithWhereWithoutAttributeValueInput[]
    deleteMany?: VariantAttributeValueScalarWhereInput | VariantAttributeValueScalarWhereInput[]
  }

  export type VariantAttributeValueUncheckedUpdateManyWithoutAttributeValueNestedInput = {
    create?: XOR<VariantAttributeValueCreateWithoutAttributeValueInput, VariantAttributeValueUncheckedCreateWithoutAttributeValueInput> | VariantAttributeValueCreateWithoutAttributeValueInput[] | VariantAttributeValueUncheckedCreateWithoutAttributeValueInput[]
    connectOrCreate?: VariantAttributeValueCreateOrConnectWithoutAttributeValueInput | VariantAttributeValueCreateOrConnectWithoutAttributeValueInput[]
    upsert?: VariantAttributeValueUpsertWithWhereUniqueWithoutAttributeValueInput | VariantAttributeValueUpsertWithWhereUniqueWithoutAttributeValueInput[]
    createMany?: VariantAttributeValueCreateManyAttributeValueInputEnvelope
    set?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
    disconnect?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
    delete?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
    connect?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
    update?: VariantAttributeValueUpdateWithWhereUniqueWithoutAttributeValueInput | VariantAttributeValueUpdateWithWhereUniqueWithoutAttributeValueInput[]
    updateMany?: VariantAttributeValueUpdateManyWithWhereWithoutAttributeValueInput | VariantAttributeValueUpdateManyWithWhereWithoutAttributeValueInput[]
    deleteMany?: VariantAttributeValueScalarWhereInput | VariantAttributeValueScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductVariantCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type ProductVariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ProductVariantUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutVariantsInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    connect?: ProductWhereUniqueInput
  }

  export type VariantImageCreateNestedManyWithoutVariantInput = {
    create?: XOR<VariantImageCreateWithoutVariantInput, VariantImageUncheckedCreateWithoutVariantInput> | VariantImageCreateWithoutVariantInput[] | VariantImageUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantImageCreateOrConnectWithoutVariantInput | VariantImageCreateOrConnectWithoutVariantInput[]
    createMany?: VariantImageCreateManyVariantInputEnvelope
    connect?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
  }

  export type VariantAttributeValueCreateNestedManyWithoutVariantInput = {
    create?: XOR<VariantAttributeValueCreateWithoutVariantInput, VariantAttributeValueUncheckedCreateWithoutVariantInput> | VariantAttributeValueCreateWithoutVariantInput[] | VariantAttributeValueUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantAttributeValueCreateOrConnectWithoutVariantInput | VariantAttributeValueCreateOrConnectWithoutVariantInput[]
    createMany?: VariantAttributeValueCreateManyVariantInputEnvelope
    connect?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
  }

  export type VariantImageUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<VariantImageCreateWithoutVariantInput, VariantImageUncheckedCreateWithoutVariantInput> | VariantImageCreateWithoutVariantInput[] | VariantImageUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantImageCreateOrConnectWithoutVariantInput | VariantImageCreateOrConnectWithoutVariantInput[]
    createMany?: VariantImageCreateManyVariantInputEnvelope
    connect?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
  }

  export type VariantAttributeValueUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<VariantAttributeValueCreateWithoutVariantInput, VariantAttributeValueUncheckedCreateWithoutVariantInput> | VariantAttributeValueCreateWithoutVariantInput[] | VariantAttributeValueUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantAttributeValueCreateOrConnectWithoutVariantInput | VariantAttributeValueCreateOrConnectWithoutVariantInput[]
    createMany?: VariantAttributeValueCreateManyVariantInputEnvelope
    connect?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    upsert?: ProductUpsertWithoutVariantsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutVariantsInput, ProductUpdateWithoutVariantsInput>, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type VariantImageUpdateManyWithoutVariantNestedInput = {
    create?: XOR<VariantImageCreateWithoutVariantInput, VariantImageUncheckedCreateWithoutVariantInput> | VariantImageCreateWithoutVariantInput[] | VariantImageUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantImageCreateOrConnectWithoutVariantInput | VariantImageCreateOrConnectWithoutVariantInput[]
    upsert?: VariantImageUpsertWithWhereUniqueWithoutVariantInput | VariantImageUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: VariantImageCreateManyVariantInputEnvelope
    set?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
    disconnect?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
    delete?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
    connect?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
    update?: VariantImageUpdateWithWhereUniqueWithoutVariantInput | VariantImageUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: VariantImageUpdateManyWithWhereWithoutVariantInput | VariantImageUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: VariantImageScalarWhereInput | VariantImageScalarWhereInput[]
  }

  export type VariantAttributeValueUpdateManyWithoutVariantNestedInput = {
    create?: XOR<VariantAttributeValueCreateWithoutVariantInput, VariantAttributeValueUncheckedCreateWithoutVariantInput> | VariantAttributeValueCreateWithoutVariantInput[] | VariantAttributeValueUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantAttributeValueCreateOrConnectWithoutVariantInput | VariantAttributeValueCreateOrConnectWithoutVariantInput[]
    upsert?: VariantAttributeValueUpsertWithWhereUniqueWithoutVariantInput | VariantAttributeValueUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: VariantAttributeValueCreateManyVariantInputEnvelope
    set?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
    disconnect?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
    delete?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
    connect?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
    update?: VariantAttributeValueUpdateWithWhereUniqueWithoutVariantInput | VariantAttributeValueUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: VariantAttributeValueUpdateManyWithWhereWithoutVariantInput | VariantAttributeValueUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: VariantAttributeValueScalarWhereInput | VariantAttributeValueScalarWhereInput[]
  }

  export type VariantImageUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<VariantImageCreateWithoutVariantInput, VariantImageUncheckedCreateWithoutVariantInput> | VariantImageCreateWithoutVariantInput[] | VariantImageUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantImageCreateOrConnectWithoutVariantInput | VariantImageCreateOrConnectWithoutVariantInput[]
    upsert?: VariantImageUpsertWithWhereUniqueWithoutVariantInput | VariantImageUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: VariantImageCreateManyVariantInputEnvelope
    set?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
    disconnect?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
    delete?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
    connect?: VariantImageWhereUniqueInput | VariantImageWhereUniqueInput[]
    update?: VariantImageUpdateWithWhereUniqueWithoutVariantInput | VariantImageUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: VariantImageUpdateManyWithWhereWithoutVariantInput | VariantImageUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: VariantImageScalarWhereInput | VariantImageScalarWhereInput[]
  }

  export type VariantAttributeValueUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<VariantAttributeValueCreateWithoutVariantInput, VariantAttributeValueUncheckedCreateWithoutVariantInput> | VariantAttributeValueCreateWithoutVariantInput[] | VariantAttributeValueUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantAttributeValueCreateOrConnectWithoutVariantInput | VariantAttributeValueCreateOrConnectWithoutVariantInput[]
    upsert?: VariantAttributeValueUpsertWithWhereUniqueWithoutVariantInput | VariantAttributeValueUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: VariantAttributeValueCreateManyVariantInputEnvelope
    set?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
    disconnect?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
    delete?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
    connect?: VariantAttributeValueWhereUniqueInput | VariantAttributeValueWhereUniqueInput[]
    update?: VariantAttributeValueUpdateWithWhereUniqueWithoutVariantInput | VariantAttributeValueUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: VariantAttributeValueUpdateManyWithWhereWithoutVariantInput | VariantAttributeValueUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: VariantAttributeValueScalarWhereInput | VariantAttributeValueScalarWhereInput[]
  }

  export type ProductVariantCreateNestedOneWithoutAttributeValuesInput = {
    create?: XOR<ProductVariantCreateWithoutAttributeValuesInput, ProductVariantUncheckedCreateWithoutAttributeValuesInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutAttributeValuesInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type AttributeValueCreateNestedOneWithoutVariantAttributeValuesInput = {
    create?: XOR<AttributeValueCreateWithoutVariantAttributeValuesInput, AttributeValueUncheckedCreateWithoutVariantAttributeValuesInput>
    connectOrCreate?: AttributeValueCreateOrConnectWithoutVariantAttributeValuesInput
    connect?: AttributeValueWhereUniqueInput
  }

  export type ProductVariantUpdateOneRequiredWithoutAttributeValuesNestedInput = {
    create?: XOR<ProductVariantCreateWithoutAttributeValuesInput, ProductVariantUncheckedCreateWithoutAttributeValuesInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutAttributeValuesInput
    upsert?: ProductVariantUpsertWithoutAttributeValuesInput
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutAttributeValuesInput, ProductVariantUpdateWithoutAttributeValuesInput>, ProductVariantUncheckedUpdateWithoutAttributeValuesInput>
  }

  export type AttributeValueUpdateOneRequiredWithoutVariantAttributeValuesNestedInput = {
    create?: XOR<AttributeValueCreateWithoutVariantAttributeValuesInput, AttributeValueUncheckedCreateWithoutVariantAttributeValuesInput>
    connectOrCreate?: AttributeValueCreateOrConnectWithoutVariantAttributeValuesInput
    upsert?: AttributeValueUpsertWithoutVariantAttributeValuesInput
    connect?: AttributeValueWhereUniqueInput
    update?: XOR<XOR<AttributeValueUpdateToOneWithWhereWithoutVariantAttributeValuesInput, AttributeValueUpdateWithoutVariantAttributeValuesInput>, AttributeValueUncheckedUpdateWithoutVariantAttributeValuesInput>
  }

  export type ProductVariantCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductVariantCreateWithoutImagesInput, ProductVariantUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutImagesInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type ProductVariantUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProductVariantCreateWithoutImagesInput, ProductVariantUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutImagesInput
    upsert?: ProductVariantUpsertWithoutImagesInput
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutImagesInput, ProductVariantUpdateWithoutImagesInput>, ProductVariantUncheckedUpdateWithoutImagesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumAttributeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttributeType | EnumAttributeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttributeType[] | ListEnumAttributeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttributeType[] | ListEnumAttributeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttributeTypeFilter<$PrismaModel> | $Enums.AttributeType
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

  export type NestedEnumAttributeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttributeType | EnumAttributeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttributeType[] | ListEnumAttributeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttributeType[] | ListEnumAttributeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttributeTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttributeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttributeTypeFilter<$PrismaModel>
    _max?: NestedEnumAttributeTypeFilter<$PrismaModel>
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

  export type ProductCreateWithoutCategoryInput = {
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: ProductVariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type AttributeCreateWithoutCategoryInput = {
    name: string
    slug: string
    type?: $Enums.AttributeType
    isRequired?: boolean
    position?: number
    icon?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    values?: AttributeValueCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    slug: string
    type?: $Enums.AttributeType
    isRequired?: boolean
    position?: number
    icon?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    values?: AttributeValueUncheckedCreateNestedManyWithoutAttributeInput
  }

  export type AttributeCreateOrConnectWithoutCategoryInput = {
    where: AttributeWhereUniqueInput
    create: XOR<AttributeCreateWithoutCategoryInput, AttributeUncheckedCreateWithoutCategoryInput>
  }

  export type AttributeCreateManyCategoryInputEnvelope = {
    data: AttributeCreateManyCategoryInput | AttributeCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    categoryId?: IntFilter<"Product"> | number
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type AttributeUpsertWithWhereUniqueWithoutCategoryInput = {
    where: AttributeWhereUniqueInput
    update: XOR<AttributeUpdateWithoutCategoryInput, AttributeUncheckedUpdateWithoutCategoryInput>
    create: XOR<AttributeCreateWithoutCategoryInput, AttributeUncheckedCreateWithoutCategoryInput>
  }

  export type AttributeUpdateWithWhereUniqueWithoutCategoryInput = {
    where: AttributeWhereUniqueInput
    data: XOR<AttributeUpdateWithoutCategoryInput, AttributeUncheckedUpdateWithoutCategoryInput>
  }

  export type AttributeUpdateManyWithWhereWithoutCategoryInput = {
    where: AttributeScalarWhereInput
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyWithoutCategoryInput>
  }

  export type AttributeScalarWhereInput = {
    AND?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
    OR?: AttributeScalarWhereInput[]
    NOT?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
    id?: IntFilter<"Attribute"> | number
    categoryId?: IntFilter<"Attribute"> | number
    name?: StringFilter<"Attribute"> | string
    slug?: StringFilter<"Attribute"> | string
    type?: EnumAttributeTypeFilter<"Attribute"> | $Enums.AttributeType
    isRequired?: BoolFilter<"Attribute"> | boolean
    position?: IntFilter<"Attribute"> | number
    icon?: StringNullableFilter<"Attribute"> | string | null
    isActive?: BoolFilter<"Attribute"> | boolean
    createdAt?: DateTimeFilter<"Attribute"> | Date | string
    updatedAt?: DateTimeFilter<"Attribute"> | Date | string
  }

  export type CategoryCreateWithoutAttributesInput = {
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutAttributesInput = {
    id?: number
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutAttributesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutAttributesInput, CategoryUncheckedCreateWithoutAttributesInput>
  }

  export type AttributeValueCreateWithoutAttributeInput = {
    value: string
    slug: string
    colorHex?: string | null
    position?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    variantAttributeValues?: VariantAttributeValueCreateNestedManyWithoutAttributeValueInput
  }

  export type AttributeValueUncheckedCreateWithoutAttributeInput = {
    id?: number
    value: string
    slug: string
    colorHex?: string | null
    position?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    variantAttributeValues?: VariantAttributeValueUncheckedCreateNestedManyWithoutAttributeValueInput
  }

  export type AttributeValueCreateOrConnectWithoutAttributeInput = {
    where: AttributeValueWhereUniqueInput
    create: XOR<AttributeValueCreateWithoutAttributeInput, AttributeValueUncheckedCreateWithoutAttributeInput>
  }

  export type AttributeValueCreateManyAttributeInputEnvelope = {
    data: AttributeValueCreateManyAttributeInput | AttributeValueCreateManyAttributeInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutAttributesInput = {
    update: XOR<CategoryUpdateWithoutAttributesInput, CategoryUncheckedUpdateWithoutAttributesInput>
    create: XOR<CategoryCreateWithoutAttributesInput, CategoryUncheckedCreateWithoutAttributesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutAttributesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutAttributesInput, CategoryUncheckedUpdateWithoutAttributesInput>
  }

  export type CategoryUpdateWithoutAttributesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutAttributesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type AttributeValueUpsertWithWhereUniqueWithoutAttributeInput = {
    where: AttributeValueWhereUniqueInput
    update: XOR<AttributeValueUpdateWithoutAttributeInput, AttributeValueUncheckedUpdateWithoutAttributeInput>
    create: XOR<AttributeValueCreateWithoutAttributeInput, AttributeValueUncheckedCreateWithoutAttributeInput>
  }

  export type AttributeValueUpdateWithWhereUniqueWithoutAttributeInput = {
    where: AttributeValueWhereUniqueInput
    data: XOR<AttributeValueUpdateWithoutAttributeInput, AttributeValueUncheckedUpdateWithoutAttributeInput>
  }

  export type AttributeValueUpdateManyWithWhereWithoutAttributeInput = {
    where: AttributeValueScalarWhereInput
    data: XOR<AttributeValueUpdateManyMutationInput, AttributeValueUncheckedUpdateManyWithoutAttributeInput>
  }

  export type AttributeValueScalarWhereInput = {
    AND?: AttributeValueScalarWhereInput | AttributeValueScalarWhereInput[]
    OR?: AttributeValueScalarWhereInput[]
    NOT?: AttributeValueScalarWhereInput | AttributeValueScalarWhereInput[]
    id?: IntFilter<"AttributeValue"> | number
    attributeId?: IntFilter<"AttributeValue"> | number
    value?: StringFilter<"AttributeValue"> | string
    slug?: StringFilter<"AttributeValue"> | string
    colorHex?: StringNullableFilter<"AttributeValue"> | string | null
    position?: IntFilter<"AttributeValue"> | number
    isActive?: BoolFilter<"AttributeValue"> | boolean
    createdAt?: DateTimeFilter<"AttributeValue"> | Date | string
    updatedAt?: DateTimeFilter<"AttributeValue"> | Date | string
  }

  export type AttributeCreateWithoutValuesInput = {
    name: string
    slug: string
    type?: $Enums.AttributeType
    isRequired?: boolean
    position?: number
    icon?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutAttributesInput
  }

  export type AttributeUncheckedCreateWithoutValuesInput = {
    id?: number
    categoryId: number
    name: string
    slug: string
    type?: $Enums.AttributeType
    isRequired?: boolean
    position?: number
    icon?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttributeCreateOrConnectWithoutValuesInput = {
    where: AttributeWhereUniqueInput
    create: XOR<AttributeCreateWithoutValuesInput, AttributeUncheckedCreateWithoutValuesInput>
  }

  export type VariantAttributeValueCreateWithoutAttributeValueInput = {
    createdAt?: Date | string
    variant: ProductVariantCreateNestedOneWithoutAttributeValuesInput
  }

  export type VariantAttributeValueUncheckedCreateWithoutAttributeValueInput = {
    variantId: number
    createdAt?: Date | string
  }

  export type VariantAttributeValueCreateOrConnectWithoutAttributeValueInput = {
    where: VariantAttributeValueWhereUniqueInput
    create: XOR<VariantAttributeValueCreateWithoutAttributeValueInput, VariantAttributeValueUncheckedCreateWithoutAttributeValueInput>
  }

  export type VariantAttributeValueCreateManyAttributeValueInputEnvelope = {
    data: VariantAttributeValueCreateManyAttributeValueInput | VariantAttributeValueCreateManyAttributeValueInput[]
    skipDuplicates?: boolean
  }

  export type AttributeUpsertWithoutValuesInput = {
    update: XOR<AttributeUpdateWithoutValuesInput, AttributeUncheckedUpdateWithoutValuesInput>
    create: XOR<AttributeCreateWithoutValuesInput, AttributeUncheckedCreateWithoutValuesInput>
    where?: AttributeWhereInput
  }

  export type AttributeUpdateToOneWithWhereWithoutValuesInput = {
    where?: AttributeWhereInput
    data: XOR<AttributeUpdateWithoutValuesInput, AttributeUncheckedUpdateWithoutValuesInput>
  }

  export type AttributeUpdateWithoutValuesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAttributeTypeFieldUpdateOperationsInput | $Enums.AttributeType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutAttributesNestedInput
  }

  export type AttributeUncheckedUpdateWithoutValuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAttributeTypeFieldUpdateOperationsInput | $Enums.AttributeType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantAttributeValueUpsertWithWhereUniqueWithoutAttributeValueInput = {
    where: VariantAttributeValueWhereUniqueInput
    update: XOR<VariantAttributeValueUpdateWithoutAttributeValueInput, VariantAttributeValueUncheckedUpdateWithoutAttributeValueInput>
    create: XOR<VariantAttributeValueCreateWithoutAttributeValueInput, VariantAttributeValueUncheckedCreateWithoutAttributeValueInput>
  }

  export type VariantAttributeValueUpdateWithWhereUniqueWithoutAttributeValueInput = {
    where: VariantAttributeValueWhereUniqueInput
    data: XOR<VariantAttributeValueUpdateWithoutAttributeValueInput, VariantAttributeValueUncheckedUpdateWithoutAttributeValueInput>
  }

  export type VariantAttributeValueUpdateManyWithWhereWithoutAttributeValueInput = {
    where: VariantAttributeValueScalarWhereInput
    data: XOR<VariantAttributeValueUpdateManyMutationInput, VariantAttributeValueUncheckedUpdateManyWithoutAttributeValueInput>
  }

  export type VariantAttributeValueScalarWhereInput = {
    AND?: VariantAttributeValueScalarWhereInput | VariantAttributeValueScalarWhereInput[]
    OR?: VariantAttributeValueScalarWhereInput[]
    NOT?: VariantAttributeValueScalarWhereInput | VariantAttributeValueScalarWhereInput[]
    variantId?: IntFilter<"VariantAttributeValue"> | number
    attributeValueId?: IntFilter<"VariantAttributeValue"> | number
    createdAt?: DateTimeFilter<"VariantAttributeValue"> | Date | string
  }

  export type CategoryCreateWithoutProductsInput = {
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: AttributeCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    slug: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: AttributeUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ProductVariantCreateWithoutProductInput = {
    name: string
    slug: string
    price: number
    stock?: number
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VariantImageCreateNestedManyWithoutVariantInput
    attributeValues?: VariantAttributeValueCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    slug: string
    price: number
    stock?: number
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VariantImageUncheckedCreateNestedManyWithoutVariantInput
    attributeValues?: VariantAttributeValueUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantCreateManyProductInputEnvelope = {
    data: ProductVariantCreateManyProductInput | ProductVariantCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributeUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributeUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProductVariantUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    update: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    data: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
  }

  export type ProductVariantUpdateManyWithWhereWithoutProductInput = {
    where: ProductVariantScalarWhereInput
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductVariantScalarWhereInput = {
    AND?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    OR?: ProductVariantScalarWhereInput[]
    NOT?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    id?: IntFilter<"ProductVariant"> | number
    productId?: IntFilter<"ProductVariant"> | number
    name?: StringFilter<"ProductVariant"> | string
    slug?: StringFilter<"ProductVariant"> | string
    price?: IntFilter<"ProductVariant"> | number
    stock?: IntFilter<"ProductVariant"> | number
    isDefault?: BoolFilter<"ProductVariant"> | boolean
    isActive?: BoolFilter<"ProductVariant"> | boolean
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
  }

  export type ProductCreateWithoutVariantsInput = {
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutVariantsInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    categoryId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutVariantsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
  }

  export type VariantImageCreateWithoutVariantInput = {
    url: string
    alt?: string | null
    position?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariantImageUncheckedCreateWithoutVariantInput = {
    id?: number
    url: string
    alt?: string | null
    position?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariantImageCreateOrConnectWithoutVariantInput = {
    where: VariantImageWhereUniqueInput
    create: XOR<VariantImageCreateWithoutVariantInput, VariantImageUncheckedCreateWithoutVariantInput>
  }

  export type VariantImageCreateManyVariantInputEnvelope = {
    data: VariantImageCreateManyVariantInput | VariantImageCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type VariantAttributeValueCreateWithoutVariantInput = {
    createdAt?: Date | string
    attributeValue: AttributeValueCreateNestedOneWithoutVariantAttributeValuesInput
  }

  export type VariantAttributeValueUncheckedCreateWithoutVariantInput = {
    attributeValueId: number
    createdAt?: Date | string
  }

  export type VariantAttributeValueCreateOrConnectWithoutVariantInput = {
    where: VariantAttributeValueWhereUniqueInput
    create: XOR<VariantAttributeValueCreateWithoutVariantInput, VariantAttributeValueUncheckedCreateWithoutVariantInput>
  }

  export type VariantAttributeValueCreateManyVariantInputEnvelope = {
    data: VariantAttributeValueCreateManyVariantInput | VariantAttributeValueCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutVariantsInput = {
    update: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutVariantsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type ProductUpdateWithoutVariantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutVariantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantImageUpsertWithWhereUniqueWithoutVariantInput = {
    where: VariantImageWhereUniqueInput
    update: XOR<VariantImageUpdateWithoutVariantInput, VariantImageUncheckedUpdateWithoutVariantInput>
    create: XOR<VariantImageCreateWithoutVariantInput, VariantImageUncheckedCreateWithoutVariantInput>
  }

  export type VariantImageUpdateWithWhereUniqueWithoutVariantInput = {
    where: VariantImageWhereUniqueInput
    data: XOR<VariantImageUpdateWithoutVariantInput, VariantImageUncheckedUpdateWithoutVariantInput>
  }

  export type VariantImageUpdateManyWithWhereWithoutVariantInput = {
    where: VariantImageScalarWhereInput
    data: XOR<VariantImageUpdateManyMutationInput, VariantImageUncheckedUpdateManyWithoutVariantInput>
  }

  export type VariantImageScalarWhereInput = {
    AND?: VariantImageScalarWhereInput | VariantImageScalarWhereInput[]
    OR?: VariantImageScalarWhereInput[]
    NOT?: VariantImageScalarWhereInput | VariantImageScalarWhereInput[]
    id?: IntFilter<"VariantImage"> | number
    variantId?: IntFilter<"VariantImage"> | number
    url?: StringFilter<"VariantImage"> | string
    alt?: StringNullableFilter<"VariantImage"> | string | null
    position?: IntFilter<"VariantImage"> | number
    isActive?: BoolFilter<"VariantImage"> | boolean
    createdAt?: DateTimeFilter<"VariantImage"> | Date | string
    updatedAt?: DateTimeFilter<"VariantImage"> | Date | string
  }

  export type VariantAttributeValueUpsertWithWhereUniqueWithoutVariantInput = {
    where: VariantAttributeValueWhereUniqueInput
    update: XOR<VariantAttributeValueUpdateWithoutVariantInput, VariantAttributeValueUncheckedUpdateWithoutVariantInput>
    create: XOR<VariantAttributeValueCreateWithoutVariantInput, VariantAttributeValueUncheckedCreateWithoutVariantInput>
  }

  export type VariantAttributeValueUpdateWithWhereUniqueWithoutVariantInput = {
    where: VariantAttributeValueWhereUniqueInput
    data: XOR<VariantAttributeValueUpdateWithoutVariantInput, VariantAttributeValueUncheckedUpdateWithoutVariantInput>
  }

  export type VariantAttributeValueUpdateManyWithWhereWithoutVariantInput = {
    where: VariantAttributeValueScalarWhereInput
    data: XOR<VariantAttributeValueUpdateManyMutationInput, VariantAttributeValueUncheckedUpdateManyWithoutVariantInput>
  }

  export type ProductVariantCreateWithoutAttributeValuesInput = {
    name: string
    slug: string
    price: number
    stock?: number
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
    images?: VariantImageCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutAttributeValuesInput = {
    id?: number
    productId: number
    name: string
    slug: string
    price: number
    stock?: number
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VariantImageUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutAttributeValuesInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutAttributeValuesInput, ProductVariantUncheckedCreateWithoutAttributeValuesInput>
  }

  export type AttributeValueCreateWithoutVariantAttributeValuesInput = {
    value: string
    slug: string
    colorHex?: string | null
    position?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attribute: AttributeCreateNestedOneWithoutValuesInput
  }

  export type AttributeValueUncheckedCreateWithoutVariantAttributeValuesInput = {
    id?: number
    attributeId: number
    value: string
    slug: string
    colorHex?: string | null
    position?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttributeValueCreateOrConnectWithoutVariantAttributeValuesInput = {
    where: AttributeValueWhereUniqueInput
    create: XOR<AttributeValueCreateWithoutVariantAttributeValuesInput, AttributeValueUncheckedCreateWithoutVariantAttributeValuesInput>
  }

  export type ProductVariantUpsertWithoutAttributeValuesInput = {
    update: XOR<ProductVariantUpdateWithoutAttributeValuesInput, ProductVariantUncheckedUpdateWithoutAttributeValuesInput>
    create: XOR<ProductVariantCreateWithoutAttributeValuesInput, ProductVariantUncheckedCreateWithoutAttributeValuesInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutAttributeValuesInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutAttributeValuesInput, ProductVariantUncheckedUpdateWithoutAttributeValuesInput>
  }

  export type ProductVariantUpdateWithoutAttributeValuesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    images?: VariantImageUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutAttributeValuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VariantImageUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type AttributeValueUpsertWithoutVariantAttributeValuesInput = {
    update: XOR<AttributeValueUpdateWithoutVariantAttributeValuesInput, AttributeValueUncheckedUpdateWithoutVariantAttributeValuesInput>
    create: XOR<AttributeValueCreateWithoutVariantAttributeValuesInput, AttributeValueUncheckedCreateWithoutVariantAttributeValuesInput>
    where?: AttributeValueWhereInput
  }

  export type AttributeValueUpdateToOneWithWhereWithoutVariantAttributeValuesInput = {
    where?: AttributeValueWhereInput
    data: XOR<AttributeValueUpdateWithoutVariantAttributeValuesInput, AttributeValueUncheckedUpdateWithoutVariantAttributeValuesInput>
  }

  export type AttributeValueUpdateWithoutVariantAttributeValuesInput = {
    value?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    colorHex?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attribute?: AttributeUpdateOneRequiredWithoutValuesNestedInput
  }

  export type AttributeValueUncheckedUpdateWithoutVariantAttributeValuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    attributeId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    colorHex?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantCreateWithoutImagesInput = {
    name: string
    slug: string
    price: number
    stock?: number
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
    attributeValues?: VariantAttributeValueCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutImagesInput = {
    id?: number
    productId: number
    name: string
    slug: string
    price: number
    stock?: number
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attributeValues?: VariantAttributeValueUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutImagesInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutImagesInput, ProductVariantUncheckedCreateWithoutImagesInput>
  }

  export type ProductVariantUpsertWithoutImagesInput = {
    update: XOR<ProductVariantUpdateWithoutImagesInput, ProductVariantUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductVariantCreateWithoutImagesInput, ProductVariantUncheckedCreateWithoutImagesInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutImagesInput, ProductVariantUncheckedUpdateWithoutImagesInput>
  }

  export type ProductVariantUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    attributeValues?: VariantAttributeValueUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributeValues?: VariantAttributeValueUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttributeCreateManyCategoryInput = {
    id?: number
    name: string
    slug: string
    type?: $Enums.AttributeType
    isRequired?: boolean
    position?: number
    icon?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAttributeTypeFieldUpdateOperationsInput | $Enums.AttributeType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    values?: AttributeValueUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAttributeTypeFieldUpdateOperationsInput | $Enums.AttributeType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    values?: AttributeValueUncheckedUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAttributeTypeFieldUpdateOperationsInput | $Enums.AttributeType
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeValueCreateManyAttributeInput = {
    id?: number
    value: string
    slug: string
    colorHex?: string | null
    position?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttributeValueUpdateWithoutAttributeInput = {
    value?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    colorHex?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variantAttributeValues?: VariantAttributeValueUpdateManyWithoutAttributeValueNestedInput
  }

  export type AttributeValueUncheckedUpdateWithoutAttributeInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    colorHex?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variantAttributeValues?: VariantAttributeValueUncheckedUpdateManyWithoutAttributeValueNestedInput
  }

  export type AttributeValueUncheckedUpdateManyWithoutAttributeInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    colorHex?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantAttributeValueCreateManyAttributeValueInput = {
    variantId: number
    createdAt?: Date | string
  }

  export type VariantAttributeValueUpdateWithoutAttributeValueInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variant?: ProductVariantUpdateOneRequiredWithoutAttributeValuesNestedInput
  }

  export type VariantAttributeValueUncheckedUpdateWithoutAttributeValueInput = {
    variantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantAttributeValueUncheckedUpdateManyWithoutAttributeValueInput = {
    variantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantCreateManyProductInput = {
    id?: number
    name: string
    slug: string
    price: number
    stock?: number
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVariantUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VariantImageUpdateManyWithoutVariantNestedInput
    attributeValues?: VariantAttributeValueUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VariantImageUncheckedUpdateManyWithoutVariantNestedInput
    attributeValues?: VariantAttributeValueUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantImageCreateManyVariantInput = {
    id?: number
    url: string
    alt?: string | null
    position?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariantAttributeValueCreateManyVariantInput = {
    attributeValueId: number
    createdAt?: Date | string
  }

  export type VariantImageUpdateWithoutVariantInput = {
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantImageUncheckedUpdateWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantImageUncheckedUpdateManyWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantAttributeValueUpdateWithoutVariantInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributeValue?: AttributeValueUpdateOneRequiredWithoutVariantAttributeValuesNestedInput
  }

  export type VariantAttributeValueUncheckedUpdateWithoutVariantInput = {
    attributeValueId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantAttributeValueUncheckedUpdateManyWithoutVariantInput = {
    attributeValueId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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