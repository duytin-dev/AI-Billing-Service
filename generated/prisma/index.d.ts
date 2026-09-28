
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SubscriptionPlan
 * 
 */
export type SubscriptionPlan = $Result.DefaultSelection<Prisma.$SubscriptionPlanPayload>
/**
 * Model SubscriptionPrice
 * 
 */
export type SubscriptionPrice = $Result.DefaultSelection<Prisma.$SubscriptionPricePayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model PaymentMethod
 * 
 */
export type PaymentMethod = $Result.DefaultSelection<Prisma.$PaymentMethodPayload>
/**
 * Model CreditAllocation
 * 
 */
export type CreditAllocation = $Result.DefaultSelection<Prisma.$CreditAllocationPayload>
/**
 * Model CreditAccount
 * 
 */
export type CreditAccount = $Result.DefaultSelection<Prisma.$CreditAccountPayload>
/**
 * Model CreditTransaction
 * 
 */
export type CreditTransaction = $Result.DefaultSelection<Prisma.$CreditTransactionPayload>
/**
 * Model BillingTransaction
 * 
 */
export type BillingTransaction = $Result.DefaultSelection<Prisma.$BillingTransactionPayload>
/**
 * Model CreditAddon
 * 
 */
export type CreditAddon = $Result.DefaultSelection<Prisma.$CreditAddonPayload>
/**
 * Model AddonPurchase
 * 
 */
export type AddonPurchase = $Result.DefaultSelection<Prisma.$AddonPurchasePayload>
/**
 * Model StripeWebhookEvent
 * 
 */
export type StripeWebhookEvent = $Result.DefaultSelection<Prisma.$StripeWebhookEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BillingCycle: {
  MONTHLY: 'MONTHLY',
  ANNUALLY: 'ANNUALLY'
};

export type BillingCycle = (typeof BillingCycle)[keyof typeof BillingCycle]


export const SubscriptionStatus: {
  ACTIVE: 'ACTIVE',
  PAST_DUE: 'PAST_DUE',
  CANCELED: 'CANCELED',
  EXPIRED: 'EXPIRED'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const CreditSource: {
  SUBSCRIPTION: 'SUBSCRIPTION',
  ADDON: 'ADDON'
};

export type CreditSource = (typeof CreditSource)[keyof typeof CreditSource]


export const CreditTransactionType: {
  SUBSCRIPTION_ALLOCATION: 'SUBSCRIPTION_ALLOCATION',
  ADDON_PURCHASE: 'ADDON_PURCHASE',
  CONSUMPTION: 'CONSUMPTION',
  ADJUSTMENT: 'ADJUSTMENT',
  REFUND: 'REFUND'
};

export type CreditTransactionType = (typeof CreditTransactionType)[keyof typeof CreditTransactionType]


export const BillingTransactionType: {
  SUBSCRIPTION_PAYMENT: 'SUBSCRIPTION_PAYMENT',
  ADDON_PAYMENT: 'ADDON_PAYMENT'
};

export type BillingTransactionType = (typeof BillingTransactionType)[keyof typeof BillingTransactionType]


export const PaymentStatus: {
  PENDING: 'PENDING',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const WebhookEventStatus: {
  PENDING: 'PENDING',
  PROCESSED: 'PROCESSED',
  FAILED: 'FAILED'
};

export type WebhookEventStatus = (typeof WebhookEventStatus)[keyof typeof WebhookEventStatus]

}

export type BillingCycle = $Enums.BillingCycle

export const BillingCycle: typeof $Enums.BillingCycle

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type CreditSource = $Enums.CreditSource

export const CreditSource: typeof $Enums.CreditSource

export type CreditTransactionType = $Enums.CreditTransactionType

export const CreditTransactionType: typeof $Enums.CreditTransactionType

export type BillingTransactionType = $Enums.BillingTransactionType

export const BillingTransactionType: typeof $Enums.BillingTransactionType

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type WebhookEventStatus = $Enums.WebhookEventStatus

export const WebhookEventStatus: typeof $Enums.WebhookEventStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionPlan`: Exposes CRUD operations for the **SubscriptionPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionPlans
    * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
    * ```
    */
  get subscriptionPlan(): Prisma.SubscriptionPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionPrice`: Exposes CRUD operations for the **SubscriptionPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionPrices
    * const subscriptionPrices = await prisma.subscriptionPrice.findMany()
    * ```
    */
  get subscriptionPrice(): Prisma.SubscriptionPriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentMethod`: Exposes CRUD operations for the **PaymentMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMethods
    * const paymentMethods = await prisma.paymentMethod.findMany()
    * ```
    */
  get paymentMethod(): Prisma.PaymentMethodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditAllocation`: Exposes CRUD operations for the **CreditAllocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditAllocations
    * const creditAllocations = await prisma.creditAllocation.findMany()
    * ```
    */
  get creditAllocation(): Prisma.CreditAllocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditAccount`: Exposes CRUD operations for the **CreditAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditAccounts
    * const creditAccounts = await prisma.creditAccount.findMany()
    * ```
    */
  get creditAccount(): Prisma.CreditAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditTransaction`: Exposes CRUD operations for the **CreditTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditTransactions
    * const creditTransactions = await prisma.creditTransaction.findMany()
    * ```
    */
  get creditTransaction(): Prisma.CreditTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.billingTransaction`: Exposes CRUD operations for the **BillingTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BillingTransactions
    * const billingTransactions = await prisma.billingTransaction.findMany()
    * ```
    */
  get billingTransaction(): Prisma.BillingTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditAddon`: Exposes CRUD operations for the **CreditAddon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditAddons
    * const creditAddons = await prisma.creditAddon.findMany()
    * ```
    */
  get creditAddon(): Prisma.CreditAddonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addonPurchase`: Exposes CRUD operations for the **AddonPurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddonPurchases
    * const addonPurchases = await prisma.addonPurchase.findMany()
    * ```
    */
  get addonPurchase(): Prisma.AddonPurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stripeWebhookEvent`: Exposes CRUD operations for the **StripeWebhookEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StripeWebhookEvents
    * const stripeWebhookEvents = await prisma.stripeWebhookEvent.findMany()
    * ```
    */
  get stripeWebhookEvent(): Prisma.StripeWebhookEventDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
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
    User: 'User',
    SubscriptionPlan: 'SubscriptionPlan',
    SubscriptionPrice: 'SubscriptionPrice',
    Subscription: 'Subscription',
    PaymentMethod: 'PaymentMethod',
    CreditAllocation: 'CreditAllocation',
    CreditAccount: 'CreditAccount',
    CreditTransaction: 'CreditTransaction',
    BillingTransaction: 'BillingTransaction',
    CreditAddon: 'CreditAddon',
    AddonPurchase: 'AddonPurchase',
    StripeWebhookEvent: 'StripeWebhookEvent'
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
      modelProps: "user" | "subscriptionPlan" | "subscriptionPrice" | "subscription" | "paymentMethod" | "creditAllocation" | "creditAccount" | "creditTransaction" | "billingTransaction" | "creditAddon" | "addonPurchase" | "stripeWebhookEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionPlan: {
        payload: Prisma.$SubscriptionPlanPayload<ExtArgs>
        fields: Prisma.SubscriptionPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findMany: {
            args: Prisma.SubscriptionPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          create: {
            args: Prisma.SubscriptionPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          createMany: {
            args: Prisma.SubscriptionPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          update: {
            args: Prisma.SubscriptionPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionPlan>
          }
          groupBy: {
            args: Prisma.SubscriptionPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionPlanCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionPrice: {
        payload: Prisma.$SubscriptionPricePayload<ExtArgs>
        fields: Prisma.SubscriptionPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPricePayload>
          }
          findFirst: {
            args: Prisma.SubscriptionPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPricePayload>
          }
          findMany: {
            args: Prisma.SubscriptionPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPricePayload>[]
          }
          create: {
            args: Prisma.SubscriptionPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPricePayload>
          }
          createMany: {
            args: Prisma.SubscriptionPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPricePayload>[]
          }
          delete: {
            args: Prisma.SubscriptionPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPricePayload>
          }
          update: {
            args: Prisma.SubscriptionPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPricePayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionPriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPricePayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPricePayload>
          }
          aggregate: {
            args: Prisma.SubscriptionPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionPrice>
          }
          groupBy: {
            args: Prisma.SubscriptionPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionPriceCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPriceCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      PaymentMethod: {
        payload: Prisma.$PaymentMethodPayload<ExtArgs>
        fields: Prisma.PaymentMethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentMethodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentMethodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findFirst: {
            args: Prisma.PaymentMethodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentMethodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findMany: {
            args: Prisma.PaymentMethodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          create: {
            args: Prisma.PaymentMethodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          createMany: {
            args: Prisma.PaymentMethodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentMethodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          delete: {
            args: Prisma.PaymentMethodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          update: {
            args: Prisma.PaymentMethodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          deleteMany: {
            args: Prisma.PaymentMethodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentMethodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentMethodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          upsert: {
            args: Prisma.PaymentMethodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          aggregate: {
            args: Prisma.PaymentMethodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentMethod>
          }
          groupBy: {
            args: Prisma.PaymentMethodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentMethodCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodCountAggregateOutputType> | number
          }
        }
      }
      CreditAllocation: {
        payload: Prisma.$CreditAllocationPayload<ExtArgs>
        fields: Prisma.CreditAllocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditAllocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAllocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditAllocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAllocationPayload>
          }
          findFirst: {
            args: Prisma.CreditAllocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAllocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditAllocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAllocationPayload>
          }
          findMany: {
            args: Prisma.CreditAllocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAllocationPayload>[]
          }
          create: {
            args: Prisma.CreditAllocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAllocationPayload>
          }
          createMany: {
            args: Prisma.CreditAllocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditAllocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAllocationPayload>[]
          }
          delete: {
            args: Prisma.CreditAllocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAllocationPayload>
          }
          update: {
            args: Prisma.CreditAllocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAllocationPayload>
          }
          deleteMany: {
            args: Prisma.CreditAllocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditAllocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreditAllocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAllocationPayload>[]
          }
          upsert: {
            args: Prisma.CreditAllocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAllocationPayload>
          }
          aggregate: {
            args: Prisma.CreditAllocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditAllocation>
          }
          groupBy: {
            args: Prisma.CreditAllocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditAllocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditAllocationCountArgs<ExtArgs>
            result: $Utils.Optional<CreditAllocationCountAggregateOutputType> | number
          }
        }
      }
      CreditAccount: {
        payload: Prisma.$CreditAccountPayload<ExtArgs>
        fields: Prisma.CreditAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>
          }
          findFirst: {
            args: Prisma.CreditAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>
          }
          findMany: {
            args: Prisma.CreditAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>[]
          }
          create: {
            args: Prisma.CreditAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>
          }
          createMany: {
            args: Prisma.CreditAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>[]
          }
          delete: {
            args: Prisma.CreditAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>
          }
          update: {
            args: Prisma.CreditAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>
          }
          deleteMany: {
            args: Prisma.CreditAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreditAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>[]
          }
          upsert: {
            args: Prisma.CreditAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>
          }
          aggregate: {
            args: Prisma.CreditAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditAccount>
          }
          groupBy: {
            args: Prisma.CreditAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditAccountCountArgs<ExtArgs>
            result: $Utils.Optional<CreditAccountCountAggregateOutputType> | number
          }
        }
      }
      CreditTransaction: {
        payload: Prisma.$CreditTransactionPayload<ExtArgs>
        fields: Prisma.CreditTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findFirst: {
            args: Prisma.CreditTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findMany: {
            args: Prisma.CreditTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          create: {
            args: Prisma.CreditTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          createMany: {
            args: Prisma.CreditTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          delete: {
            args: Prisma.CreditTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          update: {
            args: Prisma.CreditTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          deleteMany: {
            args: Prisma.CreditTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreditTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          upsert: {
            args: Prisma.CreditTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          aggregate: {
            args: Prisma.CreditTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditTransaction>
          }
          groupBy: {
            args: Prisma.CreditTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<CreditTransactionCountAggregateOutputType> | number
          }
        }
      }
      BillingTransaction: {
        payload: Prisma.$BillingTransactionPayload<ExtArgs>
        fields: Prisma.BillingTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillingTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillingTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTransactionPayload>
          }
          findFirst: {
            args: Prisma.BillingTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillingTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTransactionPayload>
          }
          findMany: {
            args: Prisma.BillingTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTransactionPayload>[]
          }
          create: {
            args: Prisma.BillingTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTransactionPayload>
          }
          createMany: {
            args: Prisma.BillingTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillingTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTransactionPayload>[]
          }
          delete: {
            args: Prisma.BillingTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTransactionPayload>
          }
          update: {
            args: Prisma.BillingTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTransactionPayload>
          }
          deleteMany: {
            args: Prisma.BillingTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillingTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillingTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTransactionPayload>[]
          }
          upsert: {
            args: Prisma.BillingTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTransactionPayload>
          }
          aggregate: {
            args: Prisma.BillingTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillingTransaction>
          }
          groupBy: {
            args: Prisma.BillingTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillingTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillingTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<BillingTransactionCountAggregateOutputType> | number
          }
        }
      }
      CreditAddon: {
        payload: Prisma.$CreditAddonPayload<ExtArgs>
        fields: Prisma.CreditAddonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditAddonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAddonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditAddonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAddonPayload>
          }
          findFirst: {
            args: Prisma.CreditAddonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAddonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditAddonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAddonPayload>
          }
          findMany: {
            args: Prisma.CreditAddonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAddonPayload>[]
          }
          create: {
            args: Prisma.CreditAddonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAddonPayload>
          }
          createMany: {
            args: Prisma.CreditAddonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditAddonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAddonPayload>[]
          }
          delete: {
            args: Prisma.CreditAddonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAddonPayload>
          }
          update: {
            args: Prisma.CreditAddonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAddonPayload>
          }
          deleteMany: {
            args: Prisma.CreditAddonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditAddonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreditAddonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAddonPayload>[]
          }
          upsert: {
            args: Prisma.CreditAddonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAddonPayload>
          }
          aggregate: {
            args: Prisma.CreditAddonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditAddon>
          }
          groupBy: {
            args: Prisma.CreditAddonGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditAddonGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditAddonCountArgs<ExtArgs>
            result: $Utils.Optional<CreditAddonCountAggregateOutputType> | number
          }
        }
      }
      AddonPurchase: {
        payload: Prisma.$AddonPurchasePayload<ExtArgs>
        fields: Prisma.AddonPurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddonPurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddonPurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPurchasePayload>
          }
          findFirst: {
            args: Prisma.AddonPurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddonPurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPurchasePayload>
          }
          findMany: {
            args: Prisma.AddonPurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPurchasePayload>[]
          }
          create: {
            args: Prisma.AddonPurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPurchasePayload>
          }
          createMany: {
            args: Prisma.AddonPurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddonPurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPurchasePayload>[]
          }
          delete: {
            args: Prisma.AddonPurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPurchasePayload>
          }
          update: {
            args: Prisma.AddonPurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPurchasePayload>
          }
          deleteMany: {
            args: Prisma.AddonPurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddonPurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddonPurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPurchasePayload>[]
          }
          upsert: {
            args: Prisma.AddonPurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPurchasePayload>
          }
          aggregate: {
            args: Prisma.AddonPurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddonPurchase>
          }
          groupBy: {
            args: Prisma.AddonPurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddonPurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddonPurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<AddonPurchaseCountAggregateOutputType> | number
          }
        }
      }
      StripeWebhookEvent: {
        payload: Prisma.$StripeWebhookEventPayload<ExtArgs>
        fields: Prisma.StripeWebhookEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StripeWebhookEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StripeWebhookEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload>
          }
          findFirst: {
            args: Prisma.StripeWebhookEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StripeWebhookEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload>
          }
          findMany: {
            args: Prisma.StripeWebhookEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload>[]
          }
          create: {
            args: Prisma.StripeWebhookEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload>
          }
          createMany: {
            args: Prisma.StripeWebhookEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StripeWebhookEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload>[]
          }
          delete: {
            args: Prisma.StripeWebhookEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload>
          }
          update: {
            args: Prisma.StripeWebhookEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload>
          }
          deleteMany: {
            args: Prisma.StripeWebhookEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StripeWebhookEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StripeWebhookEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload>[]
          }
          upsert: {
            args: Prisma.StripeWebhookEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload>
          }
          aggregate: {
            args: Prisma.StripeWebhookEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStripeWebhookEvent>
          }
          groupBy: {
            args: Prisma.StripeWebhookEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<StripeWebhookEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.StripeWebhookEventCountArgs<ExtArgs>
            result: $Utils.Optional<StripeWebhookEventCountAggregateOutputType> | number
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
    user?: UserOmit
    subscriptionPlan?: SubscriptionPlanOmit
    subscriptionPrice?: SubscriptionPriceOmit
    subscription?: SubscriptionOmit
    paymentMethod?: PaymentMethodOmit
    creditAllocation?: CreditAllocationOmit
    creditAccount?: CreditAccountOmit
    creditTransaction?: CreditTransactionOmit
    billingTransaction?: BillingTransactionOmit
    creditAddon?: CreditAddonOmit
    addonPurchase?: AddonPurchaseOmit
    stripeWebhookEvent?: StripeWebhookEventOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    addonPurchases: number
    billingTransactions: number
    paymentMethods: number
    subscriptions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addonPurchases?: boolean | UserCountOutputTypeCountAddonPurchasesArgs
    billingTransactions?: boolean | UserCountOutputTypeCountBillingTransactionsArgs
    paymentMethods?: boolean | UserCountOutputTypeCountPaymentMethodsArgs
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddonPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddonPurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBillingTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type SubscriptionPlanCountOutputType
   */

  export type SubscriptionPlanCountOutputType = {
    prices: number
  }

  export type SubscriptionPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prices?: boolean | SubscriptionPlanCountOutputTypeCountPricesArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanCountOutputType
     */
    select?: SubscriptionPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeCountPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionPriceWhereInput
  }


  /**
   * Count Type SubscriptionPriceCountOutputType
   */

  export type SubscriptionPriceCountOutputType = {
    subscriptions: number
  }

  export type SubscriptionPriceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | SubscriptionPriceCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionPriceCountOutputType without action
   */
  export type SubscriptionPriceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPriceCountOutputType
     */
    select?: SubscriptionPriceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionPriceCountOutputType without action
   */
  export type SubscriptionPriceCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    billingTransactions: number
    creditAllocations: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    billingTransactions?: boolean | SubscriptionCountOutputTypeCountBillingTransactionsArgs
    creditAllocations?: boolean | SubscriptionCountOutputTypeCountCreditAllocationsArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountBillingTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingTransactionWhereInput
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountCreditAllocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditAllocationWhereInput
  }


  /**
   * Count Type CreditAllocationCountOutputType
   */

  export type CreditAllocationCountOutputType = {
    transactions: number
  }

  export type CreditAllocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CreditAllocationCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * CreditAllocationCountOutputType without action
   */
  export type CreditAllocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAllocationCountOutputType
     */
    select?: CreditAllocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreditAllocationCountOutputType without action
   */
  export type CreditAllocationCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
  }


  /**
   * Count Type CreditAccountCountOutputType
   */

  export type CreditAccountCountOutputType = {
    allocations: number
    transactions: number
  }

  export type CreditAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allocations?: boolean | CreditAccountCountOutputTypeCountAllocationsArgs
    transactions?: boolean | CreditAccountCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * CreditAccountCountOutputType without action
   */
  export type CreditAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccountCountOutputType
     */
    select?: CreditAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreditAccountCountOutputType without action
   */
  export type CreditAccountCountOutputTypeCountAllocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditAllocationWhereInput
  }

  /**
   * CreditAccountCountOutputType without action
   */
  export type CreditAccountCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
  }


  /**
   * Count Type CreditAddonCountOutputType
   */

  export type CreditAddonCountOutputType = {
    purchases: number
  }

  export type CreditAddonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | CreditAddonCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * CreditAddonCountOutputType without action
   */
  export type CreditAddonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAddonCountOutputType
     */
    select?: CreditAddonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreditAddonCountOutputType without action
   */
  export type CreditAddonCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddonPurchaseWhereInput
  }


  /**
   * Count Type AddonPurchaseCountOutputType
   */

  export type AddonPurchaseCountOutputType = {
    billingTransactions: number
    creditAllocations: number
    creditTransactions: number
  }

  export type AddonPurchaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    billingTransactions?: boolean | AddonPurchaseCountOutputTypeCountBillingTransactionsArgs
    creditAllocations?: boolean | AddonPurchaseCountOutputTypeCountCreditAllocationsArgs
    creditTransactions?: boolean | AddonPurchaseCountOutputTypeCountCreditTransactionsArgs
  }

  // Custom InputTypes
  /**
   * AddonPurchaseCountOutputType without action
   */
  export type AddonPurchaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonPurchaseCountOutputType
     */
    select?: AddonPurchaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddonPurchaseCountOutputType without action
   */
  export type AddonPurchaseCountOutputTypeCountBillingTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingTransactionWhereInput
  }

  /**
   * AddonPurchaseCountOutputType without action
   */
  export type AddonPurchaseCountOutputTypeCountCreditAllocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditAllocationWhereInput
  }

  /**
   * AddonPurchaseCountOutputType without action
   */
  export type AddonPurchaseCountOutputTypeCountCreditTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    stripeCustomerId: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    stripeCustomerId: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    stripeCustomerId: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    stripeCustomerId?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    stripeCustomerId?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    stripeCustomerId?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    stripeCustomerId: string | null
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stripeCustomerId?: boolean
    password?: boolean
    addonPurchases?: boolean | User$addonPurchasesArgs<ExtArgs>
    billingTransactions?: boolean | User$billingTransactionsArgs<ExtArgs>
    creditAccount?: boolean | User$creditAccountArgs<ExtArgs>
    paymentMethods?: boolean | User$paymentMethodsArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stripeCustomerId?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stripeCustomerId?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stripeCustomerId?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "createdAt" | "updatedAt" | "stripeCustomerId" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addonPurchases?: boolean | User$addonPurchasesArgs<ExtArgs>
    billingTransactions?: boolean | User$billingTransactionsArgs<ExtArgs>
    creditAccount?: boolean | User$creditAccountArgs<ExtArgs>
    paymentMethods?: boolean | User$paymentMethodsArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      addonPurchases: Prisma.$AddonPurchasePayload<ExtArgs>[]
      billingTransactions: Prisma.$BillingTransactionPayload<ExtArgs>[]
      creditAccount: Prisma.$CreditAccountPayload<ExtArgs> | null
      paymentMethods: Prisma.$PaymentMethodPayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      createdAt: Date
      updatedAt: Date
      stripeCustomerId: string | null
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addonPurchases<T extends User$addonPurchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$addonPurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddonPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    billingTransactions<T extends User$billingTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$billingTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creditAccount<T extends User$creditAccountArgs<ExtArgs> = {}>(args?: Subset<T, User$creditAccountArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    paymentMethods<T extends User$paymentMethodsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentMethodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly stripeCustomerId: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.addonPurchases
   */
  export type User$addonPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonPurchase
     */
    select?: AddonPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddonPurchase
     */
    omit?: AddonPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonPurchaseInclude<ExtArgs> | null
    where?: AddonPurchaseWhereInput
    orderBy?: AddonPurchaseOrderByWithRelationInput | AddonPurchaseOrderByWithRelationInput[]
    cursor?: AddonPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddonPurchaseScalarFieldEnum | AddonPurchaseScalarFieldEnum[]
  }

  /**
   * User.billingTransactions
   */
  export type User$billingTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTransaction
     */
    select?: BillingTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTransaction
     */
    omit?: BillingTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTransactionInclude<ExtArgs> | null
    where?: BillingTransactionWhereInput
    orderBy?: BillingTransactionOrderByWithRelationInput | BillingTransactionOrderByWithRelationInput[]
    cursor?: BillingTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillingTransactionScalarFieldEnum | BillingTransactionScalarFieldEnum[]
  }

  /**
   * User.creditAccount
   */
  export type User$creditAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    where?: CreditAccountWhereInput
  }

  /**
   * User.paymentMethods
   */
  export type User$paymentMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    where?: PaymentMethodWhereInput
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    cursor?: PaymentMethodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * User.subscriptions
   */
  export type User$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionPlan
   */

  export type AggregateSubscriptionPlan = {
    _count: SubscriptionPlanCountAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  export type SubscriptionPlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
  }

  export type SubscriptionPlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
  }

  export type SubscriptionPlanCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    description: number
    _all: number
  }


  export type SubscriptionPlanMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    description?: true
  }

  export type SubscriptionPlanMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    description?: true
  }

  export type SubscriptionPlanCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    _all?: true
  }

  export type SubscriptionPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlan to aggregate.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionPlans
    **/
    _count?: true | SubscriptionPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type GetSubscriptionPlanAggregateType<T extends SubscriptionPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
      : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
  }




  export type SubscriptionPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionPlanWhereInput
    orderBy?: SubscriptionPlanOrderByWithAggregationInput | SubscriptionPlanOrderByWithAggregationInput[]
    by: SubscriptionPlanScalarFieldEnum[] | SubscriptionPlanScalarFieldEnum
    having?: SubscriptionPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionPlanCountAggregateInputType | true
    _min?: SubscriptionPlanMinAggregateInputType
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type SubscriptionPlanGroupByOutputType = {
    id: string
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    description: string | null
    _count: SubscriptionPlanCountAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  type GetSubscriptionPlanGroupByPayload<T extends SubscriptionPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    prices?: boolean | SubscriptionPlan$pricesArgs<ExtArgs>
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
  }

  export type SubscriptionPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isActive" | "createdAt" | "updatedAt" | "description", ExtArgs["result"]["subscriptionPlan"]>
  export type SubscriptionPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prices?: boolean | SubscriptionPlan$pricesArgs<ExtArgs>
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubscriptionPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubscriptionPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionPlan"
    objects: {
      prices: Prisma.$SubscriptionPricePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      description: string | null
    }, ExtArgs["result"]["subscriptionPlan"]>
    composites: {}
  }

  type SubscriptionPlanGetPayload<S extends boolean | null | undefined | SubscriptionPlanDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPlanPayload, S>

  type SubscriptionPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionPlanCountAggregateInputType | true
    }

  export interface SubscriptionPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionPlan'], meta: { name: 'SubscriptionPlan' } }
    /**
     * Find zero or one SubscriptionPlan that matches the filter.
     * @param {SubscriptionPlanFindUniqueArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionPlanFindUniqueArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionPlanFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionPlanFindFirstArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
     * 
     * // Get first 10 SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionPlanFindManyArgs>(args?: SelectSubset<T, SubscriptionPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionPlan.
     * @param {SubscriptionPlanCreateArgs} args - Arguments to create a SubscriptionPlan.
     * @example
     * // Create one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.create({
     *   data: {
     *     // ... data to create a SubscriptionPlan
     *   }
     * })
     * 
     */
    create<T extends SubscriptionPlanCreateArgs>(args: SelectSubset<T, SubscriptionPlanCreateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionPlans.
     * @param {SubscriptionPlanCreateManyArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionPlanCreateManyArgs>(args?: SelectSubset<T, SubscriptionPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionPlans and returns the data saved in the database.
     * @param {SubscriptionPlanCreateManyAndReturnArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionPlans and only return the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubscriptionPlan.
     * @param {SubscriptionPlanDeleteArgs} args - Arguments to delete one SubscriptionPlan.
     * @example
     * // Delete one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionPlan
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionPlanDeleteArgs>(args: SelectSubset<T, SubscriptionPlanDeleteArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionPlan.
     * @param {SubscriptionPlanUpdateArgs} args - Arguments to update one SubscriptionPlan.
     * @example
     * // Update one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionPlanUpdateArgs>(args: SelectSubset<T, SubscriptionPlanUpdateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionPlans.
     * @param {SubscriptionPlanDeleteManyArgs} args - Arguments to filter SubscriptionPlans to delete.
     * @example
     * // Delete a few SubscriptionPlans
     * const { count } = await prisma.subscriptionPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionPlanDeleteManyArgs>(args?: SelectSubset<T, SubscriptionPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionPlanUpdateManyArgs>(args: SelectSubset<T, SubscriptionPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlans and returns the data updated in the database.
     * @param {SubscriptionPlanUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionPlans.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubscriptionPlans and only return the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubscriptionPlan.
     * @param {SubscriptionPlanUpsertArgs} args - Arguments to update or create a SubscriptionPlan.
     * @example
     * // Update or create a SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.upsert({
     *   create: {
     *     // ... data to create a SubscriptionPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionPlan we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionPlanUpsertArgs>(args: SelectSubset<T, SubscriptionPlanUpsertArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanCountArgs} args - Arguments to filter SubscriptionPlans to count.
     * @example
     * // Count the number of SubscriptionPlans
     * const count = await prisma.subscriptionPlan.count({
     *   where: {
     *     // ... the filter for the SubscriptionPlans we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionPlanCountArgs>(
      args?: Subset<T, SubscriptionPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionPlanAggregateArgs>(args: Subset<T, SubscriptionPlanAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionPlanAggregateType<T>>

    /**
     * Group by SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionPlanGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionPlan model
   */
  readonly fields: SubscriptionPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prices<T extends SubscriptionPlan$pricesArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlan$pricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubscriptionPlan model
   */
  interface SubscriptionPlanFieldRefs {
    readonly id: FieldRef<"SubscriptionPlan", 'String'>
    readonly name: FieldRef<"SubscriptionPlan", 'String'>
    readonly isActive: FieldRef<"SubscriptionPlan", 'Boolean'>
    readonly createdAt: FieldRef<"SubscriptionPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"SubscriptionPlan", 'DateTime'>
    readonly description: FieldRef<"SubscriptionPlan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionPlan findUnique
   */
  export type SubscriptionPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findUniqueOrThrow
   */
  export type SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findFirst
   */
  export type SubscriptionPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findFirstOrThrow
   */
  export type SubscriptionPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findMany
   */
  export type SubscriptionPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlans to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan create
   */
  export type SubscriptionPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
  }

  /**
   * SubscriptionPlan createMany
   */
  export type SubscriptionPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPlan createManyAndReturn
   */
  export type SubscriptionPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPlan update
   */
  export type SubscriptionPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionPlan to update.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan updateMany
   */
  export type SubscriptionPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan updateManyAndReturn
   */
  export type SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan upsert
   */
  export type SubscriptionPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionPlan to update in case it exists.
     */
    where: SubscriptionPlanWhereUniqueInput
    /**
     * In case the SubscriptionPlan found by the `where` argument doesn't exist, create a new SubscriptionPlan with this data.
     */
    create: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
    /**
     * In case the SubscriptionPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
  }

  /**
   * SubscriptionPlan delete
   */
  export type SubscriptionPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionPlan to delete.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan deleteMany
   */
  export type SubscriptionPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlans to delete
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan.prices
   */
  export type SubscriptionPlan$pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPrice
     */
    select?: SubscriptionPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPrice
     */
    omit?: SubscriptionPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPriceInclude<ExtArgs> | null
    where?: SubscriptionPriceWhereInput
    orderBy?: SubscriptionPriceOrderByWithRelationInput | SubscriptionPriceOrderByWithRelationInput[]
    cursor?: SubscriptionPriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionPriceScalarFieldEnum | SubscriptionPriceScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan without action
   */
  export type SubscriptionPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionPrice
   */

  export type AggregateSubscriptionPrice = {
    _count: SubscriptionPriceCountAggregateOutputType | null
    _avg: SubscriptionPriceAvgAggregateOutputType | null
    _sum: SubscriptionPriceSumAggregateOutputType | null
    _min: SubscriptionPriceMinAggregateOutputType | null
    _max: SubscriptionPriceMaxAggregateOutputType | null
  }

  export type SubscriptionPriceAvgAggregateOutputType = {
    price: Decimal | null
    monthlyCredits: number | null
  }

  export type SubscriptionPriceSumAggregateOutputType = {
    price: Decimal | null
    monthlyCredits: number | null
  }

  export type SubscriptionPriceMinAggregateOutputType = {
    id: string | null
    subscriptionPlanId: string | null
    billingCycle: $Enums.BillingCycle | null
    price: Decimal | null
    currency: string | null
    stripePriceId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    monthlyCredits: number | null
  }

  export type SubscriptionPriceMaxAggregateOutputType = {
    id: string | null
    subscriptionPlanId: string | null
    billingCycle: $Enums.BillingCycle | null
    price: Decimal | null
    currency: string | null
    stripePriceId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    monthlyCredits: number | null
  }

  export type SubscriptionPriceCountAggregateOutputType = {
    id: number
    subscriptionPlanId: number
    billingCycle: number
    price: number
    currency: number
    stripePriceId: number
    isActive: number
    createdAt: number
    updatedAt: number
    monthlyCredits: number
    _all: number
  }


  export type SubscriptionPriceAvgAggregateInputType = {
    price?: true
    monthlyCredits?: true
  }

  export type SubscriptionPriceSumAggregateInputType = {
    price?: true
    monthlyCredits?: true
  }

  export type SubscriptionPriceMinAggregateInputType = {
    id?: true
    subscriptionPlanId?: true
    billingCycle?: true
    price?: true
    currency?: true
    stripePriceId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    monthlyCredits?: true
  }

  export type SubscriptionPriceMaxAggregateInputType = {
    id?: true
    subscriptionPlanId?: true
    billingCycle?: true
    price?: true
    currency?: true
    stripePriceId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    monthlyCredits?: true
  }

  export type SubscriptionPriceCountAggregateInputType = {
    id?: true
    subscriptionPlanId?: true
    billingCycle?: true
    price?: true
    currency?: true
    stripePriceId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    monthlyCredits?: true
    _all?: true
  }

  export type SubscriptionPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPrice to aggregate.
     */
    where?: SubscriptionPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPrices to fetch.
     */
    orderBy?: SubscriptionPriceOrderByWithRelationInput | SubscriptionPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionPrices
    **/
    _count?: true | SubscriptionPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionPriceMaxAggregateInputType
  }

  export type GetSubscriptionPriceAggregateType<T extends SubscriptionPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionPrice[P]>
      : GetScalarType<T[P], AggregateSubscriptionPrice[P]>
  }




  export type SubscriptionPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionPriceWhereInput
    orderBy?: SubscriptionPriceOrderByWithAggregationInput | SubscriptionPriceOrderByWithAggregationInput[]
    by: SubscriptionPriceScalarFieldEnum[] | SubscriptionPriceScalarFieldEnum
    having?: SubscriptionPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionPriceCountAggregateInputType | true
    _avg?: SubscriptionPriceAvgAggregateInputType
    _sum?: SubscriptionPriceSumAggregateInputType
    _min?: SubscriptionPriceMinAggregateInputType
    _max?: SubscriptionPriceMaxAggregateInputType
  }

  export type SubscriptionPriceGroupByOutputType = {
    id: string
    subscriptionPlanId: string
    billingCycle: $Enums.BillingCycle
    price: Decimal
    currency: string
    stripePriceId: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    monthlyCredits: number
    _count: SubscriptionPriceCountAggregateOutputType | null
    _avg: SubscriptionPriceAvgAggregateOutputType | null
    _sum: SubscriptionPriceSumAggregateOutputType | null
    _min: SubscriptionPriceMinAggregateOutputType | null
    _max: SubscriptionPriceMaxAggregateOutputType | null
  }

  type GetSubscriptionPriceGroupByPayload<T extends SubscriptionPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionPriceGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionPriceGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionPlanId?: boolean
    billingCycle?: boolean
    price?: boolean
    currency?: boolean
    stripePriceId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    monthlyCredits?: boolean
    subscriptions?: boolean | SubscriptionPrice$subscriptionsArgs<ExtArgs>
    subscriptionPlan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    _count?: boolean | SubscriptionPriceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionPrice"]>

  export type SubscriptionPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionPlanId?: boolean
    billingCycle?: boolean
    price?: boolean
    currency?: boolean
    stripePriceId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    monthlyCredits?: boolean
    subscriptionPlan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionPrice"]>

  export type SubscriptionPriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionPlanId?: boolean
    billingCycle?: boolean
    price?: boolean
    currency?: boolean
    stripePriceId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    monthlyCredits?: boolean
    subscriptionPlan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionPrice"]>

  export type SubscriptionPriceSelectScalar = {
    id?: boolean
    subscriptionPlanId?: boolean
    billingCycle?: boolean
    price?: boolean
    currency?: boolean
    stripePriceId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    monthlyCredits?: boolean
  }

  export type SubscriptionPriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subscriptionPlanId" | "billingCycle" | "price" | "currency" | "stripePriceId" | "isActive" | "createdAt" | "updatedAt" | "monthlyCredits", ExtArgs["result"]["subscriptionPrice"]>
  export type SubscriptionPriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | SubscriptionPrice$subscriptionsArgs<ExtArgs>
    subscriptionPlan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    _count?: boolean | SubscriptionPriceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionPriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptionPlan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }
  export type SubscriptionPriceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptionPlan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionPrice"
    objects: {
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      subscriptionPlan: Prisma.$SubscriptionPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subscriptionPlanId: string
      billingCycle: $Enums.BillingCycle
      price: Prisma.Decimal
      currency: string
      stripePriceId: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      monthlyCredits: number
    }, ExtArgs["result"]["subscriptionPrice"]>
    composites: {}
  }

  type SubscriptionPriceGetPayload<S extends boolean | null | undefined | SubscriptionPriceDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPricePayload, S>

  type SubscriptionPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionPriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionPriceCountAggregateInputType | true
    }

  export interface SubscriptionPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionPrice'], meta: { name: 'SubscriptionPrice' } }
    /**
     * Find zero or one SubscriptionPrice that matches the filter.
     * @param {SubscriptionPriceFindUniqueArgs} args - Arguments to find a SubscriptionPrice
     * @example
     * // Get one SubscriptionPrice
     * const subscriptionPrice = await prisma.subscriptionPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionPriceFindUniqueArgs>(args: SelectSubset<T, SubscriptionPriceFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionPriceClient<$Result.GetResult<Prisma.$SubscriptionPricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionPrice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionPriceFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionPrice
     * @example
     * // Get one SubscriptionPrice
     * const subscriptionPrice = await prisma.subscriptionPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPriceClient<$Result.GetResult<Prisma.$SubscriptionPricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPriceFindFirstArgs} args - Arguments to find a SubscriptionPrice
     * @example
     * // Get one SubscriptionPrice
     * const subscriptionPrice = await prisma.subscriptionPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionPriceFindFirstArgs>(args?: SelectSubset<T, SubscriptionPriceFindFirstArgs<ExtArgs>>): Prisma__SubscriptionPriceClient<$Result.GetResult<Prisma.$SubscriptionPricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPriceFindFirstOrThrowArgs} args - Arguments to find a SubscriptionPrice
     * @example
     * // Get one SubscriptionPrice
     * const subscriptionPrice = await prisma.subscriptionPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPriceClient<$Result.GetResult<Prisma.$SubscriptionPricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionPrices
     * const subscriptionPrices = await prisma.subscriptionPrice.findMany()
     * 
     * // Get first 10 SubscriptionPrices
     * const subscriptionPrices = await prisma.subscriptionPrice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionPriceWithIdOnly = await prisma.subscriptionPrice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionPriceFindManyArgs>(args?: SelectSubset<T, SubscriptionPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionPrice.
     * @param {SubscriptionPriceCreateArgs} args - Arguments to create a SubscriptionPrice.
     * @example
     * // Create one SubscriptionPrice
     * const SubscriptionPrice = await prisma.subscriptionPrice.create({
     *   data: {
     *     // ... data to create a SubscriptionPrice
     *   }
     * })
     * 
     */
    create<T extends SubscriptionPriceCreateArgs>(args: SelectSubset<T, SubscriptionPriceCreateArgs<ExtArgs>>): Prisma__SubscriptionPriceClient<$Result.GetResult<Prisma.$SubscriptionPricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionPrices.
     * @param {SubscriptionPriceCreateManyArgs} args - Arguments to create many SubscriptionPrices.
     * @example
     * // Create many SubscriptionPrices
     * const subscriptionPrice = await prisma.subscriptionPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionPriceCreateManyArgs>(args?: SelectSubset<T, SubscriptionPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionPrices and returns the data saved in the database.
     * @param {SubscriptionPriceCreateManyAndReturnArgs} args - Arguments to create many SubscriptionPrices.
     * @example
     * // Create many SubscriptionPrices
     * const subscriptionPrice = await prisma.subscriptionPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionPrices and only return the `id`
     * const subscriptionPriceWithIdOnly = await prisma.subscriptionPrice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubscriptionPrice.
     * @param {SubscriptionPriceDeleteArgs} args - Arguments to delete one SubscriptionPrice.
     * @example
     * // Delete one SubscriptionPrice
     * const SubscriptionPrice = await prisma.subscriptionPrice.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionPrice
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionPriceDeleteArgs>(args: SelectSubset<T, SubscriptionPriceDeleteArgs<ExtArgs>>): Prisma__SubscriptionPriceClient<$Result.GetResult<Prisma.$SubscriptionPricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionPrice.
     * @param {SubscriptionPriceUpdateArgs} args - Arguments to update one SubscriptionPrice.
     * @example
     * // Update one SubscriptionPrice
     * const subscriptionPrice = await prisma.subscriptionPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionPriceUpdateArgs>(args: SelectSubset<T, SubscriptionPriceUpdateArgs<ExtArgs>>): Prisma__SubscriptionPriceClient<$Result.GetResult<Prisma.$SubscriptionPricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionPrices.
     * @param {SubscriptionPriceDeleteManyArgs} args - Arguments to filter SubscriptionPrices to delete.
     * @example
     * // Delete a few SubscriptionPrices
     * const { count } = await prisma.subscriptionPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionPriceDeleteManyArgs>(args?: SelectSubset<T, SubscriptionPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionPrices
     * const subscriptionPrice = await prisma.subscriptionPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionPriceUpdateManyArgs>(args: SelectSubset<T, SubscriptionPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPrices and returns the data updated in the database.
     * @param {SubscriptionPriceUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionPrices.
     * @example
     * // Update many SubscriptionPrices
     * const subscriptionPrice = await prisma.subscriptionPrice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubscriptionPrices and only return the `id`
     * const subscriptionPriceWithIdOnly = await prisma.subscriptionPrice.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionPriceUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionPriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubscriptionPrice.
     * @param {SubscriptionPriceUpsertArgs} args - Arguments to update or create a SubscriptionPrice.
     * @example
     * // Update or create a SubscriptionPrice
     * const subscriptionPrice = await prisma.subscriptionPrice.upsert({
     *   create: {
     *     // ... data to create a SubscriptionPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionPrice we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionPriceUpsertArgs>(args: SelectSubset<T, SubscriptionPriceUpsertArgs<ExtArgs>>): Prisma__SubscriptionPriceClient<$Result.GetResult<Prisma.$SubscriptionPricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPriceCountArgs} args - Arguments to filter SubscriptionPrices to count.
     * @example
     * // Count the number of SubscriptionPrices
     * const count = await prisma.subscriptionPrice.count({
     *   where: {
     *     // ... the filter for the SubscriptionPrices we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionPriceCountArgs>(
      args?: Subset<T, SubscriptionPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionPriceAggregateArgs>(args: Subset<T, SubscriptionPriceAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionPriceAggregateType<T>>

    /**
     * Group by SubscriptionPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPriceGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionPriceGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionPriceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionPrice model
   */
  readonly fields: SubscriptionPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptions<T extends SubscriptionPrice$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPrice$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptionPlan<T extends SubscriptionPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlanDefaultArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SubscriptionPrice model
   */
  interface SubscriptionPriceFieldRefs {
    readonly id: FieldRef<"SubscriptionPrice", 'String'>
    readonly subscriptionPlanId: FieldRef<"SubscriptionPrice", 'String'>
    readonly billingCycle: FieldRef<"SubscriptionPrice", 'BillingCycle'>
    readonly price: FieldRef<"SubscriptionPrice", 'Decimal'>
    readonly currency: FieldRef<"SubscriptionPrice", 'String'>
    readonly stripePriceId: FieldRef<"SubscriptionPrice", 'String'>
    readonly isActive: FieldRef<"SubscriptionPrice", 'Boolean'>
    readonly createdAt: FieldRef<"SubscriptionPrice", 'DateTime'>
    readonly updatedAt: FieldRef<"SubscriptionPrice", 'DateTime'>
    readonly monthlyCredits: FieldRef<"SubscriptionPrice", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionPrice findUnique
   */
  export type SubscriptionPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPrice
     */
    select?: SubscriptionPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPrice
     */
    omit?: SubscriptionPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPriceInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPrice to fetch.
     */
    where: SubscriptionPriceWhereUniqueInput
  }

  /**
   * SubscriptionPrice findUniqueOrThrow
   */
  export type SubscriptionPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPrice
     */
    select?: SubscriptionPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPrice
     */
    omit?: SubscriptionPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPriceInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPrice to fetch.
     */
    where: SubscriptionPriceWhereUniqueInput
  }

  /**
   * SubscriptionPrice findFirst
   */
  export type SubscriptionPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPrice
     */
    select?: SubscriptionPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPrice
     */
    omit?: SubscriptionPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPriceInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPrice to fetch.
     */
    where?: SubscriptionPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPrices to fetch.
     */
    orderBy?: SubscriptionPriceOrderByWithRelationInput | SubscriptionPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPrices.
     */
    cursor?: SubscriptionPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPrices.
     */
    distinct?: SubscriptionPriceScalarFieldEnum | SubscriptionPriceScalarFieldEnum[]
  }

  /**
   * SubscriptionPrice findFirstOrThrow
   */
  export type SubscriptionPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPrice
     */
    select?: SubscriptionPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPrice
     */
    omit?: SubscriptionPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPriceInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPrice to fetch.
     */
    where?: SubscriptionPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPrices to fetch.
     */
    orderBy?: SubscriptionPriceOrderByWithRelationInput | SubscriptionPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPrices.
     */
    cursor?: SubscriptionPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPrices.
     */
    distinct?: SubscriptionPriceScalarFieldEnum | SubscriptionPriceScalarFieldEnum[]
  }

  /**
   * SubscriptionPrice findMany
   */
  export type SubscriptionPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPrice
     */
    select?: SubscriptionPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPrice
     */
    omit?: SubscriptionPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPriceInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPrices to fetch.
     */
    where?: SubscriptionPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPrices to fetch.
     */
    orderBy?: SubscriptionPriceOrderByWithRelationInput | SubscriptionPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionPrices.
     */
    cursor?: SubscriptionPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPrices.
     */
    skip?: number
    distinct?: SubscriptionPriceScalarFieldEnum | SubscriptionPriceScalarFieldEnum[]
  }

  /**
   * SubscriptionPrice create
   */
  export type SubscriptionPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPrice
     */
    select?: SubscriptionPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPrice
     */
    omit?: SubscriptionPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPriceInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionPrice.
     */
    data: XOR<SubscriptionPriceCreateInput, SubscriptionPriceUncheckedCreateInput>
  }

  /**
   * SubscriptionPrice createMany
   */
  export type SubscriptionPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionPrices.
     */
    data: SubscriptionPriceCreateManyInput | SubscriptionPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPrice createManyAndReturn
   */
  export type SubscriptionPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPrice
     */
    select?: SubscriptionPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPrice
     */
    omit?: SubscriptionPriceOmit<ExtArgs> | null
    /**
     * The data used to create many SubscriptionPrices.
     */
    data: SubscriptionPriceCreateManyInput | SubscriptionPriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionPrice update
   */
  export type SubscriptionPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPrice
     */
    select?: SubscriptionPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPrice
     */
    omit?: SubscriptionPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPriceInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionPrice.
     */
    data: XOR<SubscriptionPriceUpdateInput, SubscriptionPriceUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionPrice to update.
     */
    where: SubscriptionPriceWhereUniqueInput
  }

  /**
   * SubscriptionPrice updateMany
   */
  export type SubscriptionPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionPrices.
     */
    data: XOR<SubscriptionPriceUpdateManyMutationInput, SubscriptionPriceUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPrices to update
     */
    where?: SubscriptionPriceWhereInput
    /**
     * Limit how many SubscriptionPrices to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPrice updateManyAndReturn
   */
  export type SubscriptionPriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPrice
     */
    select?: SubscriptionPriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPrice
     */
    omit?: SubscriptionPriceOmit<ExtArgs> | null
    /**
     * The data used to update SubscriptionPrices.
     */
    data: XOR<SubscriptionPriceUpdateManyMutationInput, SubscriptionPriceUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPrices to update
     */
    where?: SubscriptionPriceWhereInput
    /**
     * Limit how many SubscriptionPrices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPriceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionPrice upsert
   */
  export type SubscriptionPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPrice
     */
    select?: SubscriptionPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPrice
     */
    omit?: SubscriptionPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPriceInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionPrice to update in case it exists.
     */
    where: SubscriptionPriceWhereUniqueInput
    /**
     * In case the SubscriptionPrice found by the `where` argument doesn't exist, create a new SubscriptionPrice with this data.
     */
    create: XOR<SubscriptionPriceCreateInput, SubscriptionPriceUncheckedCreateInput>
    /**
     * In case the SubscriptionPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionPriceUpdateInput, SubscriptionPriceUncheckedUpdateInput>
  }

  /**
   * SubscriptionPrice delete
   */
  export type SubscriptionPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPrice
     */
    select?: SubscriptionPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPrice
     */
    omit?: SubscriptionPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPriceInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionPrice to delete.
     */
    where: SubscriptionPriceWhereUniqueInput
  }

  /**
   * SubscriptionPrice deleteMany
   */
  export type SubscriptionPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPrices to delete
     */
    where?: SubscriptionPriceWhereInput
    /**
     * Limit how many SubscriptionPrices to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionPrice.subscriptions
   */
  export type SubscriptionPrice$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * SubscriptionPrice without action
   */
  export type SubscriptionPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPrice
     */
    select?: SubscriptionPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPrice
     */
    omit?: SubscriptionPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPriceInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    retryCount: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    retryCount: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeSubscriptionId: string | null
    status: $Enums.SubscriptionStatus | null
    startedAt: Date | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    retryCount: number | null
    firstFailedAt: Date | null
    canceledAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    subscriptionPriceId: string | null
    nextCreditRefillAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeSubscriptionId: string | null
    status: $Enums.SubscriptionStatus | null
    startedAt: Date | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    retryCount: number | null
    firstFailedAt: Date | null
    canceledAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    subscriptionPriceId: string | null
    nextCreditRefillAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    stripeSubscriptionId: number
    status: number
    startedAt: number
    currentPeriodStart: number
    currentPeriodEnd: number
    retryCount: number
    firstFailedAt: number
    canceledAt: number
    endedAt: number
    createdAt: number
    updatedAt: number
    subscriptionPriceId: number
    nextCreditRefillAt: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    retryCount?: true
  }

  export type SubscriptionSumAggregateInputType = {
    retryCount?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    stripeSubscriptionId?: true
    status?: true
    startedAt?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    retryCount?: true
    firstFailedAt?: true
    canceledAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
    subscriptionPriceId?: true
    nextCreditRefillAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    stripeSubscriptionId?: true
    status?: true
    startedAt?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    retryCount?: true
    firstFailedAt?: true
    canceledAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
    subscriptionPriceId?: true
    nextCreditRefillAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    stripeSubscriptionId?: true
    status?: true
    startedAt?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    retryCount?: true
    firstFailedAt?: true
    canceledAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
    subscriptionPriceId?: true
    nextCreditRefillAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    stripeSubscriptionId: string | null
    status: $Enums.SubscriptionStatus
    startedAt: Date
    currentPeriodStart: Date
    currentPeriodEnd: Date
    retryCount: number
    firstFailedAt: Date | null
    canceledAt: Date | null
    endedAt: Date | null
    createdAt: Date
    updatedAt: Date
    subscriptionPriceId: string
    nextCreditRefillAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    startedAt?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    retryCount?: boolean
    firstFailedAt?: boolean
    canceledAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptionPriceId?: boolean
    nextCreditRefillAt?: boolean
    billingTransactions?: boolean | Subscription$billingTransactionsArgs<ExtArgs>
    creditAllocations?: boolean | Subscription$creditAllocationsArgs<ExtArgs>
    subscriptionPrice?: boolean | SubscriptionPriceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    startedAt?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    retryCount?: boolean
    firstFailedAt?: boolean
    canceledAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptionPriceId?: boolean
    nextCreditRefillAt?: boolean
    subscriptionPrice?: boolean | SubscriptionPriceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    startedAt?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    retryCount?: boolean
    firstFailedAt?: boolean
    canceledAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptionPriceId?: boolean
    nextCreditRefillAt?: boolean
    subscriptionPrice?: boolean | SubscriptionPriceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    startedAt?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    retryCount?: boolean
    firstFailedAt?: boolean
    canceledAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptionPriceId?: boolean
    nextCreditRefillAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "stripeSubscriptionId" | "status" | "startedAt" | "currentPeriodStart" | "currentPeriodEnd" | "retryCount" | "firstFailedAt" | "canceledAt" | "endedAt" | "createdAt" | "updatedAt" | "subscriptionPriceId" | "nextCreditRefillAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    billingTransactions?: boolean | Subscription$billingTransactionsArgs<ExtArgs>
    creditAllocations?: boolean | Subscription$creditAllocationsArgs<ExtArgs>
    subscriptionPrice?: boolean | SubscriptionPriceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptionPrice?: boolean | SubscriptionPriceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptionPrice?: boolean | SubscriptionPriceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      billingTransactions: Prisma.$BillingTransactionPayload<ExtArgs>[]
      creditAllocations: Prisma.$CreditAllocationPayload<ExtArgs>[]
      subscriptionPrice: Prisma.$SubscriptionPricePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      stripeSubscriptionId: string | null
      status: $Enums.SubscriptionStatus
      startedAt: Date
      currentPeriodStart: Date
      currentPeriodEnd: Date
      retryCount: number
      firstFailedAt: Date | null
      canceledAt: Date | null
      endedAt: Date | null
      createdAt: Date
      updatedAt: Date
      subscriptionPriceId: string
      nextCreditRefillAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    billingTransactions<T extends Subscription$billingTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$billingTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creditAllocations<T extends Subscription$creditAllocationsArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$creditAllocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptionPrice<T extends SubscriptionPriceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPriceDefaultArgs<ExtArgs>>): Prisma__SubscriptionPriceClient<$Result.GetResult<Prisma.$SubscriptionPricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly stripeSubscriptionId: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly startedAt: FieldRef<"Subscription", 'DateTime'>
    readonly currentPeriodStart: FieldRef<"Subscription", 'DateTime'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly retryCount: FieldRef<"Subscription", 'Int'>
    readonly firstFailedAt: FieldRef<"Subscription", 'DateTime'>
    readonly canceledAt: FieldRef<"Subscription", 'DateTime'>
    readonly endedAt: FieldRef<"Subscription", 'DateTime'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
    readonly subscriptionPriceId: FieldRef<"Subscription", 'String'>
    readonly nextCreditRefillAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.billingTransactions
   */
  export type Subscription$billingTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTransaction
     */
    select?: BillingTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTransaction
     */
    omit?: BillingTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTransactionInclude<ExtArgs> | null
    where?: BillingTransactionWhereInput
    orderBy?: BillingTransactionOrderByWithRelationInput | BillingTransactionOrderByWithRelationInput[]
    cursor?: BillingTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillingTransactionScalarFieldEnum | BillingTransactionScalarFieldEnum[]
  }

  /**
   * Subscription.creditAllocations
   */
  export type Subscription$creditAllocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAllocation
     */
    select?: CreditAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAllocation
     */
    omit?: CreditAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAllocationInclude<ExtArgs> | null
    where?: CreditAllocationWhereInput
    orderBy?: CreditAllocationOrderByWithRelationInput | CreditAllocationOrderByWithRelationInput[]
    cursor?: CreditAllocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditAllocationScalarFieldEnum | CreditAllocationScalarFieldEnum[]
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model PaymentMethod
   */

  export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  export type PaymentMethodAvgAggregateOutputType = {
    expMonth: number | null
    expYear: number | null
  }

  export type PaymentMethodSumAggregateOutputType = {
    expMonth: number | null
    expYear: number | null
  }

  export type PaymentMethodMinAggregateOutputType = {
    id: string | null
    userId: string | null
    stripePaymentMethodId: string | null
    type: string | null
    brand: string | null
    last4: string | null
    expMonth: number | null
    expYear: number | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMethodMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    stripePaymentMethodId: string | null
    type: string | null
    brand: string | null
    last4: string | null
    expMonth: number | null
    expYear: number | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMethodCountAggregateOutputType = {
    id: number
    userId: number
    stripePaymentMethodId: number
    type: number
    brand: number
    last4: number
    expMonth: number
    expYear: number
    isDefault: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentMethodAvgAggregateInputType = {
    expMonth?: true
    expYear?: true
  }

  export type PaymentMethodSumAggregateInputType = {
    expMonth?: true
    expYear?: true
  }

  export type PaymentMethodMinAggregateInputType = {
    id?: true
    userId?: true
    stripePaymentMethodId?: true
    type?: true
    brand?: true
    last4?: true
    expMonth?: true
    expYear?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMethodMaxAggregateInputType = {
    id?: true
    userId?: true
    stripePaymentMethodId?: true
    type?: true
    brand?: true
    last4?: true
    expMonth?: true
    expYear?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMethodCountAggregateInputType = {
    id?: true
    userId?: true
    stripePaymentMethodId?: true
    type?: true
    brand?: true
    last4?: true
    expMonth?: true
    expYear?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentMethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethod to aggregate.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMethods
    **/
    _count?: true | PaymentMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentMethodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentMethodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type GetPaymentMethodAggregateType<T extends PaymentMethodAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMethod[P]>
      : GetScalarType<T[P], AggregatePaymentMethod[P]>
  }




  export type PaymentMethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
    orderBy?: PaymentMethodOrderByWithAggregationInput | PaymentMethodOrderByWithAggregationInput[]
    by: PaymentMethodScalarFieldEnum[] | PaymentMethodScalarFieldEnum
    having?: PaymentMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentMethodCountAggregateInputType | true
    _avg?: PaymentMethodAvgAggregateInputType
    _sum?: PaymentMethodSumAggregateInputType
    _min?: PaymentMethodMinAggregateInputType
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type PaymentMethodGroupByOutputType = {
    id: string
    userId: string
    stripePaymentMethodId: string
    type: string
    brand: string | null
    last4: string | null
    expMonth: number | null
    expYear: number | null
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  type GetPaymentMethodGroupByPayload<T extends PaymentMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripePaymentMethodId?: boolean
    type?: boolean
    brand?: boolean
    last4?: boolean
    expMonth?: boolean
    expYear?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripePaymentMethodId?: boolean
    type?: boolean
    brand?: boolean
    last4?: boolean
    expMonth?: boolean
    expYear?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripePaymentMethodId?: boolean
    type?: boolean
    brand?: boolean
    last4?: boolean
    expMonth?: boolean
    expYear?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectScalar = {
    id?: boolean
    userId?: boolean
    stripePaymentMethodId?: boolean
    type?: boolean
    brand?: boolean
    last4?: boolean
    expMonth?: boolean
    expYear?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentMethodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "stripePaymentMethodId" | "type" | "brand" | "last4" | "expMonth" | "expYear" | "isDefault" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentMethod"]>
  export type PaymentMethodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentMethodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentMethodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMethod"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      stripePaymentMethodId: string
      type: string
      brand: string | null
      last4: string | null
      expMonth: number | null
      expYear: number | null
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentMethod"]>
    composites: {}
  }

  type PaymentMethodGetPayload<S extends boolean | null | undefined | PaymentMethodDefaultArgs> = $Result.GetResult<Prisma.$PaymentMethodPayload, S>

  type PaymentMethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentMethodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentMethodCountAggregateInputType | true
    }

  export interface PaymentMethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethod'], meta: { name: 'PaymentMethod' } }
    /**
     * Find zero or one PaymentMethod that matches the filter.
     * @param {PaymentMethodFindUniqueArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentMethodFindUniqueArgs>(args: SelectSubset<T, PaymentMethodFindUniqueArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentMethod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentMethodFindUniqueOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentMethodFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentMethodFindFirstArgs>(args?: SelectSubset<T, PaymentMethodFindFirstArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentMethodFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentMethodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany()
     * 
     * // Get first 10 PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentMethodFindManyArgs>(args?: SelectSubset<T, PaymentMethodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentMethod.
     * @param {PaymentMethodCreateArgs} args - Arguments to create a PaymentMethod.
     * @example
     * // Create one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.create({
     *   data: {
     *     // ... data to create a PaymentMethod
     *   }
     * })
     * 
     */
    create<T extends PaymentMethodCreateArgs>(args: SelectSubset<T, PaymentMethodCreateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentMethods.
     * @param {PaymentMethodCreateManyArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentMethodCreateManyArgs>(args?: SelectSubset<T, PaymentMethodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentMethods and returns the data saved in the database.
     * @param {PaymentMethodCreateManyAndReturnArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentMethods and only return the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentMethodCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentMethodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentMethod.
     * @param {PaymentMethodDeleteArgs} args - Arguments to delete one PaymentMethod.
     * @example
     * // Delete one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.delete({
     *   where: {
     *     // ... filter to delete one PaymentMethod
     *   }
     * })
     * 
     */
    delete<T extends PaymentMethodDeleteArgs>(args: SelectSubset<T, PaymentMethodDeleteArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentMethod.
     * @param {PaymentMethodUpdateArgs} args - Arguments to update one PaymentMethod.
     * @example
     * // Update one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentMethodUpdateArgs>(args: SelectSubset<T, PaymentMethodUpdateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentMethods.
     * @param {PaymentMethodDeleteManyArgs} args - Arguments to filter PaymentMethods to delete.
     * @example
     * // Delete a few PaymentMethods
     * const { count } = await prisma.paymentMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentMethodDeleteManyArgs>(args?: SelectSubset<T, PaymentMethodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentMethodUpdateManyArgs>(args: SelectSubset<T, PaymentMethodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods and returns the data updated in the database.
     * @param {PaymentMethodUpdateManyAndReturnArgs} args - Arguments to update many PaymentMethods.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentMethods and only return the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentMethodUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentMethodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentMethod.
     * @param {PaymentMethodUpsertArgs} args - Arguments to update or create a PaymentMethod.
     * @example
     * // Update or create a PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.upsert({
     *   create: {
     *     // ... data to create a PaymentMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMethod we want to update
     *   }
     * })
     */
    upsert<T extends PaymentMethodUpsertArgs>(args: SelectSubset<T, PaymentMethodUpsertArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodCountArgs} args - Arguments to filter PaymentMethods to count.
     * @example
     * // Count the number of PaymentMethods
     * const count = await prisma.paymentMethod.count({
     *   where: {
     *     // ... the filter for the PaymentMethods we want to count
     *   }
     * })
    **/
    count<T extends PaymentMethodCountArgs>(
      args?: Subset<T, PaymentMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentMethodAggregateArgs>(args: Subset<T, PaymentMethodAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodAggregateType<T>>

    /**
     * Group by PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodGroupByArgs} args - Group by arguments.
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
      T extends PaymentMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMethodGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMethodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentMethod model
   */
  readonly fields: PaymentMethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentMethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PaymentMethod model
   */
  interface PaymentMethodFieldRefs {
    readonly id: FieldRef<"PaymentMethod", 'String'>
    readonly userId: FieldRef<"PaymentMethod", 'String'>
    readonly stripePaymentMethodId: FieldRef<"PaymentMethod", 'String'>
    readonly type: FieldRef<"PaymentMethod", 'String'>
    readonly brand: FieldRef<"PaymentMethod", 'String'>
    readonly last4: FieldRef<"PaymentMethod", 'String'>
    readonly expMonth: FieldRef<"PaymentMethod", 'Int'>
    readonly expYear: FieldRef<"PaymentMethod", 'Int'>
    readonly isDefault: FieldRef<"PaymentMethod", 'Boolean'>
    readonly createdAt: FieldRef<"PaymentMethod", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentMethod", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentMethod findUnique
   */
  export type PaymentMethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findUniqueOrThrow
   */
  export type PaymentMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findFirst
   */
  export type PaymentMethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findFirstOrThrow
   */
  export type PaymentMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findMany
   */
  export type PaymentMethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod create
   */
  export type PaymentMethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentMethod.
     */
    data: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
  }

  /**
   * PaymentMethod createMany
   */
  export type PaymentMethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentMethod createManyAndReturn
   */
  export type PaymentMethodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentMethod update
   */
  export type PaymentMethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentMethod.
     */
    data: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
    /**
     * Choose, which PaymentMethod to update.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod updateMany
   */
  export type PaymentMethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
  }

  /**
   * PaymentMethod updateManyAndReturn
   */
  export type PaymentMethodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentMethod upsert
   */
  export type PaymentMethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentMethod to update in case it exists.
     */
    where: PaymentMethodWhereUniqueInput
    /**
     * In case the PaymentMethod found by the `where` argument doesn't exist, create a new PaymentMethod with this data.
     */
    create: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
    /**
     * In case the PaymentMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
  }

  /**
   * PaymentMethod delete
   */
  export type PaymentMethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter which PaymentMethod to delete.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod deleteMany
   */
  export type PaymentMethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethods to delete
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to delete.
     */
    limit?: number
  }

  /**
   * PaymentMethod without action
   */
  export type PaymentMethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
  }


  /**
   * Model CreditAllocation
   */

  export type AggregateCreditAllocation = {
    _count: CreditAllocationCountAggregateOutputType | null
    _avg: CreditAllocationAvgAggregateOutputType | null
    _sum: CreditAllocationSumAggregateOutputType | null
    _min: CreditAllocationMinAggregateOutputType | null
    _max: CreditAllocationMaxAggregateOutputType | null
  }

  export type CreditAllocationAvgAggregateOutputType = {
    totalAmount: number | null
    remainingAmount: number | null
  }

  export type CreditAllocationSumAggregateOutputType = {
    totalAmount: number | null
    remainingAmount: number | null
  }

  export type CreditAllocationMinAggregateOutputType = {
    id: string | null
    creditAccountId: string | null
    source: $Enums.CreditSource | null
    totalAmount: number | null
    remainingAmount: number | null
    expiresAt: Date | null
    subscriptionId: string | null
    addonPurchaseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditAllocationMaxAggregateOutputType = {
    id: string | null
    creditAccountId: string | null
    source: $Enums.CreditSource | null
    totalAmount: number | null
    remainingAmount: number | null
    expiresAt: Date | null
    subscriptionId: string | null
    addonPurchaseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditAllocationCountAggregateOutputType = {
    id: number
    creditAccountId: number
    source: number
    totalAmount: number
    remainingAmount: number
    expiresAt: number
    subscriptionId: number
    addonPurchaseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CreditAllocationAvgAggregateInputType = {
    totalAmount?: true
    remainingAmount?: true
  }

  export type CreditAllocationSumAggregateInputType = {
    totalAmount?: true
    remainingAmount?: true
  }

  export type CreditAllocationMinAggregateInputType = {
    id?: true
    creditAccountId?: true
    source?: true
    totalAmount?: true
    remainingAmount?: true
    expiresAt?: true
    subscriptionId?: true
    addonPurchaseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditAllocationMaxAggregateInputType = {
    id?: true
    creditAccountId?: true
    source?: true
    totalAmount?: true
    remainingAmount?: true
    expiresAt?: true
    subscriptionId?: true
    addonPurchaseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditAllocationCountAggregateInputType = {
    id?: true
    creditAccountId?: true
    source?: true
    totalAmount?: true
    remainingAmount?: true
    expiresAt?: true
    subscriptionId?: true
    addonPurchaseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CreditAllocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditAllocation to aggregate.
     */
    where?: CreditAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAllocations to fetch.
     */
    orderBy?: CreditAllocationOrderByWithRelationInput | CreditAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditAllocations
    **/
    _count?: true | CreditAllocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditAllocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditAllocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditAllocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditAllocationMaxAggregateInputType
  }

  export type GetCreditAllocationAggregateType<T extends CreditAllocationAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditAllocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditAllocation[P]>
      : GetScalarType<T[P], AggregateCreditAllocation[P]>
  }




  export type CreditAllocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditAllocationWhereInput
    orderBy?: CreditAllocationOrderByWithAggregationInput | CreditAllocationOrderByWithAggregationInput[]
    by: CreditAllocationScalarFieldEnum[] | CreditAllocationScalarFieldEnum
    having?: CreditAllocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditAllocationCountAggregateInputType | true
    _avg?: CreditAllocationAvgAggregateInputType
    _sum?: CreditAllocationSumAggregateInputType
    _min?: CreditAllocationMinAggregateInputType
    _max?: CreditAllocationMaxAggregateInputType
  }

  export type CreditAllocationGroupByOutputType = {
    id: string
    creditAccountId: string
    source: $Enums.CreditSource
    totalAmount: number
    remainingAmount: number
    expiresAt: Date | null
    subscriptionId: string | null
    addonPurchaseId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CreditAllocationCountAggregateOutputType | null
    _avg: CreditAllocationAvgAggregateOutputType | null
    _sum: CreditAllocationSumAggregateOutputType | null
    _min: CreditAllocationMinAggregateOutputType | null
    _max: CreditAllocationMaxAggregateOutputType | null
  }

  type GetCreditAllocationGroupByPayload<T extends CreditAllocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditAllocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditAllocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditAllocationGroupByOutputType[P]>
            : GetScalarType<T[P], CreditAllocationGroupByOutputType[P]>
        }
      >
    >


  export type CreditAllocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creditAccountId?: boolean
    source?: boolean
    totalAmount?: boolean
    remainingAmount?: boolean
    expiresAt?: boolean
    subscriptionId?: boolean
    addonPurchaseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addonPurchase?: boolean | CreditAllocation$addonPurchaseArgs<ExtArgs>
    creditAccount?: boolean | CreditAccountDefaultArgs<ExtArgs>
    subscription?: boolean | CreditAllocation$subscriptionArgs<ExtArgs>
    transactions?: boolean | CreditAllocation$transactionsArgs<ExtArgs>
    _count?: boolean | CreditAllocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditAllocation"]>

  export type CreditAllocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creditAccountId?: boolean
    source?: boolean
    totalAmount?: boolean
    remainingAmount?: boolean
    expiresAt?: boolean
    subscriptionId?: boolean
    addonPurchaseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addonPurchase?: boolean | CreditAllocation$addonPurchaseArgs<ExtArgs>
    creditAccount?: boolean | CreditAccountDefaultArgs<ExtArgs>
    subscription?: boolean | CreditAllocation$subscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["creditAllocation"]>

  export type CreditAllocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creditAccountId?: boolean
    source?: boolean
    totalAmount?: boolean
    remainingAmount?: boolean
    expiresAt?: boolean
    subscriptionId?: boolean
    addonPurchaseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addonPurchase?: boolean | CreditAllocation$addonPurchaseArgs<ExtArgs>
    creditAccount?: boolean | CreditAccountDefaultArgs<ExtArgs>
    subscription?: boolean | CreditAllocation$subscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["creditAllocation"]>

  export type CreditAllocationSelectScalar = {
    id?: boolean
    creditAccountId?: boolean
    source?: boolean
    totalAmount?: boolean
    remainingAmount?: boolean
    expiresAt?: boolean
    subscriptionId?: boolean
    addonPurchaseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CreditAllocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creditAccountId" | "source" | "totalAmount" | "remainingAmount" | "expiresAt" | "subscriptionId" | "addonPurchaseId" | "createdAt" | "updatedAt", ExtArgs["result"]["creditAllocation"]>
  export type CreditAllocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addonPurchase?: boolean | CreditAllocation$addonPurchaseArgs<ExtArgs>
    creditAccount?: boolean | CreditAccountDefaultArgs<ExtArgs>
    subscription?: boolean | CreditAllocation$subscriptionArgs<ExtArgs>
    transactions?: boolean | CreditAllocation$transactionsArgs<ExtArgs>
    _count?: boolean | CreditAllocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CreditAllocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addonPurchase?: boolean | CreditAllocation$addonPurchaseArgs<ExtArgs>
    creditAccount?: boolean | CreditAccountDefaultArgs<ExtArgs>
    subscription?: boolean | CreditAllocation$subscriptionArgs<ExtArgs>
  }
  export type CreditAllocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addonPurchase?: boolean | CreditAllocation$addonPurchaseArgs<ExtArgs>
    creditAccount?: boolean | CreditAccountDefaultArgs<ExtArgs>
    subscription?: boolean | CreditAllocation$subscriptionArgs<ExtArgs>
  }

  export type $CreditAllocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditAllocation"
    objects: {
      addonPurchase: Prisma.$AddonPurchasePayload<ExtArgs> | null
      creditAccount: Prisma.$CreditAccountPayload<ExtArgs>
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      transactions: Prisma.$CreditTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      creditAccountId: string
      source: $Enums.CreditSource
      totalAmount: number
      remainingAmount: number
      expiresAt: Date | null
      subscriptionId: string | null
      addonPurchaseId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["creditAllocation"]>
    composites: {}
  }

  type CreditAllocationGetPayload<S extends boolean | null | undefined | CreditAllocationDefaultArgs> = $Result.GetResult<Prisma.$CreditAllocationPayload, S>

  type CreditAllocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditAllocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditAllocationCountAggregateInputType | true
    }

  export interface CreditAllocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditAllocation'], meta: { name: 'CreditAllocation' } }
    /**
     * Find zero or one CreditAllocation that matches the filter.
     * @param {CreditAllocationFindUniqueArgs} args - Arguments to find a CreditAllocation
     * @example
     * // Get one CreditAllocation
     * const creditAllocation = await prisma.creditAllocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditAllocationFindUniqueArgs>(args: SelectSubset<T, CreditAllocationFindUniqueArgs<ExtArgs>>): Prisma__CreditAllocationClient<$Result.GetResult<Prisma.$CreditAllocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditAllocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditAllocationFindUniqueOrThrowArgs} args - Arguments to find a CreditAllocation
     * @example
     * // Get one CreditAllocation
     * const creditAllocation = await prisma.creditAllocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditAllocationFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditAllocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditAllocationClient<$Result.GetResult<Prisma.$CreditAllocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditAllocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAllocationFindFirstArgs} args - Arguments to find a CreditAllocation
     * @example
     * // Get one CreditAllocation
     * const creditAllocation = await prisma.creditAllocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditAllocationFindFirstArgs>(args?: SelectSubset<T, CreditAllocationFindFirstArgs<ExtArgs>>): Prisma__CreditAllocationClient<$Result.GetResult<Prisma.$CreditAllocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditAllocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAllocationFindFirstOrThrowArgs} args - Arguments to find a CreditAllocation
     * @example
     * // Get one CreditAllocation
     * const creditAllocation = await prisma.creditAllocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditAllocationFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditAllocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditAllocationClient<$Result.GetResult<Prisma.$CreditAllocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditAllocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAllocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditAllocations
     * const creditAllocations = await prisma.creditAllocation.findMany()
     * 
     * // Get first 10 CreditAllocations
     * const creditAllocations = await prisma.creditAllocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditAllocationWithIdOnly = await prisma.creditAllocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditAllocationFindManyArgs>(args?: SelectSubset<T, CreditAllocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditAllocation.
     * @param {CreditAllocationCreateArgs} args - Arguments to create a CreditAllocation.
     * @example
     * // Create one CreditAllocation
     * const CreditAllocation = await prisma.creditAllocation.create({
     *   data: {
     *     // ... data to create a CreditAllocation
     *   }
     * })
     * 
     */
    create<T extends CreditAllocationCreateArgs>(args: SelectSubset<T, CreditAllocationCreateArgs<ExtArgs>>): Prisma__CreditAllocationClient<$Result.GetResult<Prisma.$CreditAllocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditAllocations.
     * @param {CreditAllocationCreateManyArgs} args - Arguments to create many CreditAllocations.
     * @example
     * // Create many CreditAllocations
     * const creditAllocation = await prisma.creditAllocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditAllocationCreateManyArgs>(args?: SelectSubset<T, CreditAllocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditAllocations and returns the data saved in the database.
     * @param {CreditAllocationCreateManyAndReturnArgs} args - Arguments to create many CreditAllocations.
     * @example
     * // Create many CreditAllocations
     * const creditAllocation = await prisma.creditAllocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditAllocations and only return the `id`
     * const creditAllocationWithIdOnly = await prisma.creditAllocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditAllocationCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditAllocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditAllocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreditAllocation.
     * @param {CreditAllocationDeleteArgs} args - Arguments to delete one CreditAllocation.
     * @example
     * // Delete one CreditAllocation
     * const CreditAllocation = await prisma.creditAllocation.delete({
     *   where: {
     *     // ... filter to delete one CreditAllocation
     *   }
     * })
     * 
     */
    delete<T extends CreditAllocationDeleteArgs>(args: SelectSubset<T, CreditAllocationDeleteArgs<ExtArgs>>): Prisma__CreditAllocationClient<$Result.GetResult<Prisma.$CreditAllocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditAllocation.
     * @param {CreditAllocationUpdateArgs} args - Arguments to update one CreditAllocation.
     * @example
     * // Update one CreditAllocation
     * const creditAllocation = await prisma.creditAllocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditAllocationUpdateArgs>(args: SelectSubset<T, CreditAllocationUpdateArgs<ExtArgs>>): Prisma__CreditAllocationClient<$Result.GetResult<Prisma.$CreditAllocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditAllocations.
     * @param {CreditAllocationDeleteManyArgs} args - Arguments to filter CreditAllocations to delete.
     * @example
     * // Delete a few CreditAllocations
     * const { count } = await prisma.creditAllocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditAllocationDeleteManyArgs>(args?: SelectSubset<T, CreditAllocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditAllocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAllocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditAllocations
     * const creditAllocation = await prisma.creditAllocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditAllocationUpdateManyArgs>(args: SelectSubset<T, CreditAllocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditAllocations and returns the data updated in the database.
     * @param {CreditAllocationUpdateManyAndReturnArgs} args - Arguments to update many CreditAllocations.
     * @example
     * // Update many CreditAllocations
     * const creditAllocation = await prisma.creditAllocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreditAllocations and only return the `id`
     * const creditAllocationWithIdOnly = await prisma.creditAllocation.updateManyAndReturn({
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
    updateManyAndReturn<T extends CreditAllocationUpdateManyAndReturnArgs>(args: SelectSubset<T, CreditAllocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditAllocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreditAllocation.
     * @param {CreditAllocationUpsertArgs} args - Arguments to update or create a CreditAllocation.
     * @example
     * // Update or create a CreditAllocation
     * const creditAllocation = await prisma.creditAllocation.upsert({
     *   create: {
     *     // ... data to create a CreditAllocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditAllocation we want to update
     *   }
     * })
     */
    upsert<T extends CreditAllocationUpsertArgs>(args: SelectSubset<T, CreditAllocationUpsertArgs<ExtArgs>>): Prisma__CreditAllocationClient<$Result.GetResult<Prisma.$CreditAllocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditAllocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAllocationCountArgs} args - Arguments to filter CreditAllocations to count.
     * @example
     * // Count the number of CreditAllocations
     * const count = await prisma.creditAllocation.count({
     *   where: {
     *     // ... the filter for the CreditAllocations we want to count
     *   }
     * })
    **/
    count<T extends CreditAllocationCountArgs>(
      args?: Subset<T, CreditAllocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditAllocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditAllocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAllocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditAllocationAggregateArgs>(args: Subset<T, CreditAllocationAggregateArgs>): Prisma.PrismaPromise<GetCreditAllocationAggregateType<T>>

    /**
     * Group by CreditAllocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAllocationGroupByArgs} args - Group by arguments.
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
      T extends CreditAllocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditAllocationGroupByArgs['orderBy'] }
        : { orderBy?: CreditAllocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditAllocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditAllocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditAllocation model
   */
  readonly fields: CreditAllocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditAllocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditAllocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addonPurchase<T extends CreditAllocation$addonPurchaseArgs<ExtArgs> = {}>(args?: Subset<T, CreditAllocation$addonPurchaseArgs<ExtArgs>>): Prisma__AddonPurchaseClient<$Result.GetResult<Prisma.$AddonPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    creditAccount<T extends CreditAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreditAccountDefaultArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscription<T extends CreditAllocation$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, CreditAllocation$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transactions<T extends CreditAllocation$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, CreditAllocation$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CreditAllocation model
   */
  interface CreditAllocationFieldRefs {
    readonly id: FieldRef<"CreditAllocation", 'String'>
    readonly creditAccountId: FieldRef<"CreditAllocation", 'String'>
    readonly source: FieldRef<"CreditAllocation", 'CreditSource'>
    readonly totalAmount: FieldRef<"CreditAllocation", 'Int'>
    readonly remainingAmount: FieldRef<"CreditAllocation", 'Int'>
    readonly expiresAt: FieldRef<"CreditAllocation", 'DateTime'>
    readonly subscriptionId: FieldRef<"CreditAllocation", 'String'>
    readonly addonPurchaseId: FieldRef<"CreditAllocation", 'String'>
    readonly createdAt: FieldRef<"CreditAllocation", 'DateTime'>
    readonly updatedAt: FieldRef<"CreditAllocation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditAllocation findUnique
   */
  export type CreditAllocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAllocation
     */
    select?: CreditAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAllocation
     */
    omit?: CreditAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAllocationInclude<ExtArgs> | null
    /**
     * Filter, which CreditAllocation to fetch.
     */
    where: CreditAllocationWhereUniqueInput
  }

  /**
   * CreditAllocation findUniqueOrThrow
   */
  export type CreditAllocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAllocation
     */
    select?: CreditAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAllocation
     */
    omit?: CreditAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAllocationInclude<ExtArgs> | null
    /**
     * Filter, which CreditAllocation to fetch.
     */
    where: CreditAllocationWhereUniqueInput
  }

  /**
   * CreditAllocation findFirst
   */
  export type CreditAllocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAllocation
     */
    select?: CreditAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAllocation
     */
    omit?: CreditAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAllocationInclude<ExtArgs> | null
    /**
     * Filter, which CreditAllocation to fetch.
     */
    where?: CreditAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAllocations to fetch.
     */
    orderBy?: CreditAllocationOrderByWithRelationInput | CreditAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditAllocations.
     */
    cursor?: CreditAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditAllocations.
     */
    distinct?: CreditAllocationScalarFieldEnum | CreditAllocationScalarFieldEnum[]
  }

  /**
   * CreditAllocation findFirstOrThrow
   */
  export type CreditAllocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAllocation
     */
    select?: CreditAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAllocation
     */
    omit?: CreditAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAllocationInclude<ExtArgs> | null
    /**
     * Filter, which CreditAllocation to fetch.
     */
    where?: CreditAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAllocations to fetch.
     */
    orderBy?: CreditAllocationOrderByWithRelationInput | CreditAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditAllocations.
     */
    cursor?: CreditAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditAllocations.
     */
    distinct?: CreditAllocationScalarFieldEnum | CreditAllocationScalarFieldEnum[]
  }

  /**
   * CreditAllocation findMany
   */
  export type CreditAllocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAllocation
     */
    select?: CreditAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAllocation
     */
    omit?: CreditAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAllocationInclude<ExtArgs> | null
    /**
     * Filter, which CreditAllocations to fetch.
     */
    where?: CreditAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAllocations to fetch.
     */
    orderBy?: CreditAllocationOrderByWithRelationInput | CreditAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditAllocations.
     */
    cursor?: CreditAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAllocations.
     */
    skip?: number
    distinct?: CreditAllocationScalarFieldEnum | CreditAllocationScalarFieldEnum[]
  }

  /**
   * CreditAllocation create
   */
  export type CreditAllocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAllocation
     */
    select?: CreditAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAllocation
     */
    omit?: CreditAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAllocationInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditAllocation.
     */
    data: XOR<CreditAllocationCreateInput, CreditAllocationUncheckedCreateInput>
  }

  /**
   * CreditAllocation createMany
   */
  export type CreditAllocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditAllocations.
     */
    data: CreditAllocationCreateManyInput | CreditAllocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditAllocation createManyAndReturn
   */
  export type CreditAllocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAllocation
     */
    select?: CreditAllocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAllocation
     */
    omit?: CreditAllocationOmit<ExtArgs> | null
    /**
     * The data used to create many CreditAllocations.
     */
    data: CreditAllocationCreateManyInput | CreditAllocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAllocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditAllocation update
   */
  export type CreditAllocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAllocation
     */
    select?: CreditAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAllocation
     */
    omit?: CreditAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAllocationInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditAllocation.
     */
    data: XOR<CreditAllocationUpdateInput, CreditAllocationUncheckedUpdateInput>
    /**
     * Choose, which CreditAllocation to update.
     */
    where: CreditAllocationWhereUniqueInput
  }

  /**
   * CreditAllocation updateMany
   */
  export type CreditAllocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditAllocations.
     */
    data: XOR<CreditAllocationUpdateManyMutationInput, CreditAllocationUncheckedUpdateManyInput>
    /**
     * Filter which CreditAllocations to update
     */
    where?: CreditAllocationWhereInput
    /**
     * Limit how many CreditAllocations to update.
     */
    limit?: number
  }

  /**
   * CreditAllocation updateManyAndReturn
   */
  export type CreditAllocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAllocation
     */
    select?: CreditAllocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAllocation
     */
    omit?: CreditAllocationOmit<ExtArgs> | null
    /**
     * The data used to update CreditAllocations.
     */
    data: XOR<CreditAllocationUpdateManyMutationInput, CreditAllocationUncheckedUpdateManyInput>
    /**
     * Filter which CreditAllocations to update
     */
    where?: CreditAllocationWhereInput
    /**
     * Limit how many CreditAllocations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAllocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditAllocation upsert
   */
  export type CreditAllocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAllocation
     */
    select?: CreditAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAllocation
     */
    omit?: CreditAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAllocationInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditAllocation to update in case it exists.
     */
    where: CreditAllocationWhereUniqueInput
    /**
     * In case the CreditAllocation found by the `where` argument doesn't exist, create a new CreditAllocation with this data.
     */
    create: XOR<CreditAllocationCreateInput, CreditAllocationUncheckedCreateInput>
    /**
     * In case the CreditAllocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditAllocationUpdateInput, CreditAllocationUncheckedUpdateInput>
  }

  /**
   * CreditAllocation delete
   */
  export type CreditAllocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAllocation
     */
    select?: CreditAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAllocation
     */
    omit?: CreditAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAllocationInclude<ExtArgs> | null
    /**
     * Filter which CreditAllocation to delete.
     */
    where: CreditAllocationWhereUniqueInput
  }

  /**
   * CreditAllocation deleteMany
   */
  export type CreditAllocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditAllocations to delete
     */
    where?: CreditAllocationWhereInput
    /**
     * Limit how many CreditAllocations to delete.
     */
    limit?: number
  }

  /**
   * CreditAllocation.addonPurchase
   */
  export type CreditAllocation$addonPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonPurchase
     */
    select?: AddonPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddonPurchase
     */
    omit?: AddonPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonPurchaseInclude<ExtArgs> | null
    where?: AddonPurchaseWhereInput
  }

  /**
   * CreditAllocation.subscription
   */
  export type CreditAllocation$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * CreditAllocation.transactions
   */
  export type CreditAllocation$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    cursor?: CreditTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditAllocation without action
   */
  export type CreditAllocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAllocation
     */
    select?: CreditAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAllocation
     */
    omit?: CreditAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAllocationInclude<ExtArgs> | null
  }


  /**
   * Model CreditAccount
   */

  export type AggregateCreditAccount = {
    _count: CreditAccountCountAggregateOutputType | null
    _avg: CreditAccountAvgAggregateOutputType | null
    _sum: CreditAccountSumAggregateOutputType | null
    _min: CreditAccountMinAggregateOutputType | null
    _max: CreditAccountMaxAggregateOutputType | null
  }

  export type CreditAccountAvgAggregateOutputType = {
    addonBalance: number | null
    subscriptionBalance: number | null
  }

  export type CreditAccountSumAggregateOutputType = {
    addonBalance: number | null
    subscriptionBalance: number | null
  }

  export type CreditAccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    addonBalance: number | null
    subscriptionBalance: number | null
  }

  export type CreditAccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    addonBalance: number | null
    subscriptionBalance: number | null
  }

  export type CreditAccountCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    addonBalance: number
    subscriptionBalance: number
    _all: number
  }


  export type CreditAccountAvgAggregateInputType = {
    addonBalance?: true
    subscriptionBalance?: true
  }

  export type CreditAccountSumAggregateInputType = {
    addonBalance?: true
    subscriptionBalance?: true
  }

  export type CreditAccountMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    addonBalance?: true
    subscriptionBalance?: true
  }

  export type CreditAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    addonBalance?: true
    subscriptionBalance?: true
  }

  export type CreditAccountCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    addonBalance?: true
    subscriptionBalance?: true
    _all?: true
  }

  export type CreditAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditAccount to aggregate.
     */
    where?: CreditAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAccounts to fetch.
     */
    orderBy?: CreditAccountOrderByWithRelationInput | CreditAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditAccounts
    **/
    _count?: true | CreditAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditAccountMaxAggregateInputType
  }

  export type GetCreditAccountAggregateType<T extends CreditAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditAccount[P]>
      : GetScalarType<T[P], AggregateCreditAccount[P]>
  }




  export type CreditAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditAccountWhereInput
    orderBy?: CreditAccountOrderByWithAggregationInput | CreditAccountOrderByWithAggregationInput[]
    by: CreditAccountScalarFieldEnum[] | CreditAccountScalarFieldEnum
    having?: CreditAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditAccountCountAggregateInputType | true
    _avg?: CreditAccountAvgAggregateInputType
    _sum?: CreditAccountSumAggregateInputType
    _min?: CreditAccountMinAggregateInputType
    _max?: CreditAccountMaxAggregateInputType
  }

  export type CreditAccountGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    updatedAt: Date
    addonBalance: number
    subscriptionBalance: number
    _count: CreditAccountCountAggregateOutputType | null
    _avg: CreditAccountAvgAggregateOutputType | null
    _sum: CreditAccountSumAggregateOutputType | null
    _min: CreditAccountMinAggregateOutputType | null
    _max: CreditAccountMaxAggregateOutputType | null
  }

  type GetCreditAccountGroupByPayload<T extends CreditAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditAccountGroupByOutputType[P]>
            : GetScalarType<T[P], CreditAccountGroupByOutputType[P]>
        }
      >
    >


  export type CreditAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addonBalance?: boolean
    subscriptionBalance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    allocations?: boolean | CreditAccount$allocationsArgs<ExtArgs>
    transactions?: boolean | CreditAccount$transactionsArgs<ExtArgs>
    _count?: boolean | CreditAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditAccount"]>

  export type CreditAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addonBalance?: boolean
    subscriptionBalance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditAccount"]>

  export type CreditAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addonBalance?: boolean
    subscriptionBalance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditAccount"]>

  export type CreditAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addonBalance?: boolean
    subscriptionBalance?: boolean
  }

  export type CreditAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt" | "addonBalance" | "subscriptionBalance", ExtArgs["result"]["creditAccount"]>
  export type CreditAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    allocations?: boolean | CreditAccount$allocationsArgs<ExtArgs>
    transactions?: boolean | CreditAccount$transactionsArgs<ExtArgs>
    _count?: boolean | CreditAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CreditAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CreditAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CreditAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      allocations: Prisma.$CreditAllocationPayload<ExtArgs>[]
      transactions: Prisma.$CreditTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      updatedAt: Date
      addonBalance: number
      subscriptionBalance: number
    }, ExtArgs["result"]["creditAccount"]>
    composites: {}
  }

  type CreditAccountGetPayload<S extends boolean | null | undefined | CreditAccountDefaultArgs> = $Result.GetResult<Prisma.$CreditAccountPayload, S>

  type CreditAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditAccountCountAggregateInputType | true
    }

  export interface CreditAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditAccount'], meta: { name: 'CreditAccount' } }
    /**
     * Find zero or one CreditAccount that matches the filter.
     * @param {CreditAccountFindUniqueArgs} args - Arguments to find a CreditAccount
     * @example
     * // Get one CreditAccount
     * const creditAccount = await prisma.creditAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditAccountFindUniqueArgs>(args: SelectSubset<T, CreditAccountFindUniqueArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditAccountFindUniqueOrThrowArgs} args - Arguments to find a CreditAccount
     * @example
     * // Get one CreditAccount
     * const creditAccount = await prisma.creditAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountFindFirstArgs} args - Arguments to find a CreditAccount
     * @example
     * // Get one CreditAccount
     * const creditAccount = await prisma.creditAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditAccountFindFirstArgs>(args?: SelectSubset<T, CreditAccountFindFirstArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountFindFirstOrThrowArgs} args - Arguments to find a CreditAccount
     * @example
     * // Get one CreditAccount
     * const creditAccount = await prisma.creditAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditAccounts
     * const creditAccounts = await prisma.creditAccount.findMany()
     * 
     * // Get first 10 CreditAccounts
     * const creditAccounts = await prisma.creditAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditAccountWithIdOnly = await prisma.creditAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditAccountFindManyArgs>(args?: SelectSubset<T, CreditAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditAccount.
     * @param {CreditAccountCreateArgs} args - Arguments to create a CreditAccount.
     * @example
     * // Create one CreditAccount
     * const CreditAccount = await prisma.creditAccount.create({
     *   data: {
     *     // ... data to create a CreditAccount
     *   }
     * })
     * 
     */
    create<T extends CreditAccountCreateArgs>(args: SelectSubset<T, CreditAccountCreateArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditAccounts.
     * @param {CreditAccountCreateManyArgs} args - Arguments to create many CreditAccounts.
     * @example
     * // Create many CreditAccounts
     * const creditAccount = await prisma.creditAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditAccountCreateManyArgs>(args?: SelectSubset<T, CreditAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditAccounts and returns the data saved in the database.
     * @param {CreditAccountCreateManyAndReturnArgs} args - Arguments to create many CreditAccounts.
     * @example
     * // Create many CreditAccounts
     * const creditAccount = await prisma.creditAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditAccounts and only return the `id`
     * const creditAccountWithIdOnly = await prisma.creditAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreditAccount.
     * @param {CreditAccountDeleteArgs} args - Arguments to delete one CreditAccount.
     * @example
     * // Delete one CreditAccount
     * const CreditAccount = await prisma.creditAccount.delete({
     *   where: {
     *     // ... filter to delete one CreditAccount
     *   }
     * })
     * 
     */
    delete<T extends CreditAccountDeleteArgs>(args: SelectSubset<T, CreditAccountDeleteArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditAccount.
     * @param {CreditAccountUpdateArgs} args - Arguments to update one CreditAccount.
     * @example
     * // Update one CreditAccount
     * const creditAccount = await prisma.creditAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditAccountUpdateArgs>(args: SelectSubset<T, CreditAccountUpdateArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditAccounts.
     * @param {CreditAccountDeleteManyArgs} args - Arguments to filter CreditAccounts to delete.
     * @example
     * // Delete a few CreditAccounts
     * const { count } = await prisma.creditAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditAccountDeleteManyArgs>(args?: SelectSubset<T, CreditAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditAccounts
     * const creditAccount = await prisma.creditAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditAccountUpdateManyArgs>(args: SelectSubset<T, CreditAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditAccounts and returns the data updated in the database.
     * @param {CreditAccountUpdateManyAndReturnArgs} args - Arguments to update many CreditAccounts.
     * @example
     * // Update many CreditAccounts
     * const creditAccount = await prisma.creditAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreditAccounts and only return the `id`
     * const creditAccountWithIdOnly = await prisma.creditAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends CreditAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, CreditAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreditAccount.
     * @param {CreditAccountUpsertArgs} args - Arguments to update or create a CreditAccount.
     * @example
     * // Update or create a CreditAccount
     * const creditAccount = await prisma.creditAccount.upsert({
     *   create: {
     *     // ... data to create a CreditAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditAccount we want to update
     *   }
     * })
     */
    upsert<T extends CreditAccountUpsertArgs>(args: SelectSubset<T, CreditAccountUpsertArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountCountArgs} args - Arguments to filter CreditAccounts to count.
     * @example
     * // Count the number of CreditAccounts
     * const count = await prisma.creditAccount.count({
     *   where: {
     *     // ... the filter for the CreditAccounts we want to count
     *   }
     * })
    **/
    count<T extends CreditAccountCountArgs>(
      args?: Subset<T, CreditAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditAccountAggregateArgs>(args: Subset<T, CreditAccountAggregateArgs>): Prisma.PrismaPromise<GetCreditAccountAggregateType<T>>

    /**
     * Group by CreditAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountGroupByArgs} args - Group by arguments.
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
      T extends CreditAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditAccountGroupByArgs['orderBy'] }
        : { orderBy?: CreditAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditAccount model
   */
  readonly fields: CreditAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    allocations<T extends CreditAccount$allocationsArgs<ExtArgs> = {}>(args?: Subset<T, CreditAccount$allocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends CreditAccount$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, CreditAccount$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CreditAccount model
   */
  interface CreditAccountFieldRefs {
    readonly id: FieldRef<"CreditAccount", 'String'>
    readonly userId: FieldRef<"CreditAccount", 'String'>
    readonly createdAt: FieldRef<"CreditAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"CreditAccount", 'DateTime'>
    readonly addonBalance: FieldRef<"CreditAccount", 'Int'>
    readonly subscriptionBalance: FieldRef<"CreditAccount", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CreditAccount findUnique
   */
  export type CreditAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditAccount to fetch.
     */
    where: CreditAccountWhereUniqueInput
  }

  /**
   * CreditAccount findUniqueOrThrow
   */
  export type CreditAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditAccount to fetch.
     */
    where: CreditAccountWhereUniqueInput
  }

  /**
   * CreditAccount findFirst
   */
  export type CreditAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditAccount to fetch.
     */
    where?: CreditAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAccounts to fetch.
     */
    orderBy?: CreditAccountOrderByWithRelationInput | CreditAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditAccounts.
     */
    cursor?: CreditAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditAccounts.
     */
    distinct?: CreditAccountScalarFieldEnum | CreditAccountScalarFieldEnum[]
  }

  /**
   * CreditAccount findFirstOrThrow
   */
  export type CreditAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditAccount to fetch.
     */
    where?: CreditAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAccounts to fetch.
     */
    orderBy?: CreditAccountOrderByWithRelationInput | CreditAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditAccounts.
     */
    cursor?: CreditAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditAccounts.
     */
    distinct?: CreditAccountScalarFieldEnum | CreditAccountScalarFieldEnum[]
  }

  /**
   * CreditAccount findMany
   */
  export type CreditAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditAccounts to fetch.
     */
    where?: CreditAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAccounts to fetch.
     */
    orderBy?: CreditAccountOrderByWithRelationInput | CreditAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditAccounts.
     */
    cursor?: CreditAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAccounts.
     */
    skip?: number
    distinct?: CreditAccountScalarFieldEnum | CreditAccountScalarFieldEnum[]
  }

  /**
   * CreditAccount create
   */
  export type CreditAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditAccount.
     */
    data: XOR<CreditAccountCreateInput, CreditAccountUncheckedCreateInput>
  }

  /**
   * CreditAccount createMany
   */
  export type CreditAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditAccounts.
     */
    data: CreditAccountCreateManyInput | CreditAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditAccount createManyAndReturn
   */
  export type CreditAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * The data used to create many CreditAccounts.
     */
    data: CreditAccountCreateManyInput | CreditAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditAccount update
   */
  export type CreditAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditAccount.
     */
    data: XOR<CreditAccountUpdateInput, CreditAccountUncheckedUpdateInput>
    /**
     * Choose, which CreditAccount to update.
     */
    where: CreditAccountWhereUniqueInput
  }

  /**
   * CreditAccount updateMany
   */
  export type CreditAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditAccounts.
     */
    data: XOR<CreditAccountUpdateManyMutationInput, CreditAccountUncheckedUpdateManyInput>
    /**
     * Filter which CreditAccounts to update
     */
    where?: CreditAccountWhereInput
    /**
     * Limit how many CreditAccounts to update.
     */
    limit?: number
  }

  /**
   * CreditAccount updateManyAndReturn
   */
  export type CreditAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * The data used to update CreditAccounts.
     */
    data: XOR<CreditAccountUpdateManyMutationInput, CreditAccountUncheckedUpdateManyInput>
    /**
     * Filter which CreditAccounts to update
     */
    where?: CreditAccountWhereInput
    /**
     * Limit how many CreditAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditAccount upsert
   */
  export type CreditAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditAccount to update in case it exists.
     */
    where: CreditAccountWhereUniqueInput
    /**
     * In case the CreditAccount found by the `where` argument doesn't exist, create a new CreditAccount with this data.
     */
    create: XOR<CreditAccountCreateInput, CreditAccountUncheckedCreateInput>
    /**
     * In case the CreditAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditAccountUpdateInput, CreditAccountUncheckedUpdateInput>
  }

  /**
   * CreditAccount delete
   */
  export type CreditAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * Filter which CreditAccount to delete.
     */
    where: CreditAccountWhereUniqueInput
  }

  /**
   * CreditAccount deleteMany
   */
  export type CreditAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditAccounts to delete
     */
    where?: CreditAccountWhereInput
    /**
     * Limit how many CreditAccounts to delete.
     */
    limit?: number
  }

  /**
   * CreditAccount.allocations
   */
  export type CreditAccount$allocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAllocation
     */
    select?: CreditAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAllocation
     */
    omit?: CreditAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAllocationInclude<ExtArgs> | null
    where?: CreditAllocationWhereInput
    orderBy?: CreditAllocationOrderByWithRelationInput | CreditAllocationOrderByWithRelationInput[]
    cursor?: CreditAllocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditAllocationScalarFieldEnum | CreditAllocationScalarFieldEnum[]
  }

  /**
   * CreditAccount.transactions
   */
  export type CreditAccount$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    cursor?: CreditTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditAccount without action
   */
  export type CreditAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
  }


  /**
   * Model CreditTransaction
   */

  export type AggregateCreditTransaction = {
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  export type CreditTransactionAvgAggregateOutputType = {
    amount: number | null
    balanceBefore: number | null
    balanceAfter: number | null
  }

  export type CreditTransactionSumAggregateOutputType = {
    amount: number | null
    balanceBefore: number | null
    balanceAfter: number | null
  }

  export type CreditTransactionMinAggregateOutputType = {
    id: string | null
    creditAccountId: string | null
    amount: number | null
    type: $Enums.CreditTransactionType | null
    description: string | null
    balanceBefore: number | null
    balanceAfter: number | null
    referenceId: string | null
    createdAt: Date | null
    addonPurchaseId: string | null
    creditAllocationId: string | null
  }

  export type CreditTransactionMaxAggregateOutputType = {
    id: string | null
    creditAccountId: string | null
    amount: number | null
    type: $Enums.CreditTransactionType | null
    description: string | null
    balanceBefore: number | null
    balanceAfter: number | null
    referenceId: string | null
    createdAt: Date | null
    addonPurchaseId: string | null
    creditAllocationId: string | null
  }

  export type CreditTransactionCountAggregateOutputType = {
    id: number
    creditAccountId: number
    amount: number
    type: number
    description: number
    balanceBefore: number
    balanceAfter: number
    referenceId: number
    createdAt: number
    addonPurchaseId: number
    creditAllocationId: number
    _all: number
  }


  export type CreditTransactionAvgAggregateInputType = {
    amount?: true
    balanceBefore?: true
    balanceAfter?: true
  }

  export type CreditTransactionSumAggregateInputType = {
    amount?: true
    balanceBefore?: true
    balanceAfter?: true
  }

  export type CreditTransactionMinAggregateInputType = {
    id?: true
    creditAccountId?: true
    amount?: true
    type?: true
    description?: true
    balanceBefore?: true
    balanceAfter?: true
    referenceId?: true
    createdAt?: true
    addonPurchaseId?: true
    creditAllocationId?: true
  }

  export type CreditTransactionMaxAggregateInputType = {
    id?: true
    creditAccountId?: true
    amount?: true
    type?: true
    description?: true
    balanceBefore?: true
    balanceAfter?: true
    referenceId?: true
    createdAt?: true
    addonPurchaseId?: true
    creditAllocationId?: true
  }

  export type CreditTransactionCountAggregateInputType = {
    id?: true
    creditAccountId?: true
    amount?: true
    type?: true
    description?: true
    balanceBefore?: true
    balanceAfter?: true
    referenceId?: true
    createdAt?: true
    addonPurchaseId?: true
    creditAllocationId?: true
    _all?: true
  }

  export type CreditTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransaction to aggregate.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditTransactions
    **/
    _count?: true | CreditTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type GetCreditTransactionAggregateType<T extends CreditTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditTransaction[P]>
      : GetScalarType<T[P], AggregateCreditTransaction[P]>
  }




  export type CreditTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithAggregationInput | CreditTransactionOrderByWithAggregationInput[]
    by: CreditTransactionScalarFieldEnum[] | CreditTransactionScalarFieldEnum
    having?: CreditTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditTransactionCountAggregateInputType | true
    _avg?: CreditTransactionAvgAggregateInputType
    _sum?: CreditTransactionSumAggregateInputType
    _min?: CreditTransactionMinAggregateInputType
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type CreditTransactionGroupByOutputType = {
    id: string
    creditAccountId: string
    amount: number
    type: $Enums.CreditTransactionType
    description: string | null
    balanceBefore: number
    balanceAfter: number
    referenceId: string | null
    createdAt: Date
    addonPurchaseId: string | null
    creditAllocationId: string | null
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  type GetCreditTransactionGroupByPayload<T extends CreditTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
        }
      >
    >


  export type CreditTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creditAccountId?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    balanceBefore?: boolean
    balanceAfter?: boolean
    referenceId?: boolean
    createdAt?: boolean
    addonPurchaseId?: boolean
    creditAllocationId?: boolean
    addonPurchase?: boolean | CreditTransaction$addonPurchaseArgs<ExtArgs>
    creditAccount?: boolean | CreditAccountDefaultArgs<ExtArgs>
    creditAllocation?: boolean | CreditTransaction$creditAllocationArgs<ExtArgs>
  }, ExtArgs["result"]["creditTransaction"]>

  export type CreditTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creditAccountId?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    balanceBefore?: boolean
    balanceAfter?: boolean
    referenceId?: boolean
    createdAt?: boolean
    addonPurchaseId?: boolean
    creditAllocationId?: boolean
    addonPurchase?: boolean | CreditTransaction$addonPurchaseArgs<ExtArgs>
    creditAccount?: boolean | CreditAccountDefaultArgs<ExtArgs>
    creditAllocation?: boolean | CreditTransaction$creditAllocationArgs<ExtArgs>
  }, ExtArgs["result"]["creditTransaction"]>

  export type CreditTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creditAccountId?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    balanceBefore?: boolean
    balanceAfter?: boolean
    referenceId?: boolean
    createdAt?: boolean
    addonPurchaseId?: boolean
    creditAllocationId?: boolean
    addonPurchase?: boolean | CreditTransaction$addonPurchaseArgs<ExtArgs>
    creditAccount?: boolean | CreditAccountDefaultArgs<ExtArgs>
    creditAllocation?: boolean | CreditTransaction$creditAllocationArgs<ExtArgs>
  }, ExtArgs["result"]["creditTransaction"]>

  export type CreditTransactionSelectScalar = {
    id?: boolean
    creditAccountId?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    balanceBefore?: boolean
    balanceAfter?: boolean
    referenceId?: boolean
    createdAt?: boolean
    addonPurchaseId?: boolean
    creditAllocationId?: boolean
  }

  export type CreditTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creditAccountId" | "amount" | "type" | "description" | "balanceBefore" | "balanceAfter" | "referenceId" | "createdAt" | "addonPurchaseId" | "creditAllocationId", ExtArgs["result"]["creditTransaction"]>
  export type CreditTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addonPurchase?: boolean | CreditTransaction$addonPurchaseArgs<ExtArgs>
    creditAccount?: boolean | CreditAccountDefaultArgs<ExtArgs>
    creditAllocation?: boolean | CreditTransaction$creditAllocationArgs<ExtArgs>
  }
  export type CreditTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addonPurchase?: boolean | CreditTransaction$addonPurchaseArgs<ExtArgs>
    creditAccount?: boolean | CreditAccountDefaultArgs<ExtArgs>
    creditAllocation?: boolean | CreditTransaction$creditAllocationArgs<ExtArgs>
  }
  export type CreditTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addonPurchase?: boolean | CreditTransaction$addonPurchaseArgs<ExtArgs>
    creditAccount?: boolean | CreditAccountDefaultArgs<ExtArgs>
    creditAllocation?: boolean | CreditTransaction$creditAllocationArgs<ExtArgs>
  }

  export type $CreditTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditTransaction"
    objects: {
      addonPurchase: Prisma.$AddonPurchasePayload<ExtArgs> | null
      creditAccount: Prisma.$CreditAccountPayload<ExtArgs>
      creditAllocation: Prisma.$CreditAllocationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      creditAccountId: string
      amount: number
      type: $Enums.CreditTransactionType
      description: string | null
      balanceBefore: number
      balanceAfter: number
      referenceId: string | null
      createdAt: Date
      addonPurchaseId: string | null
      creditAllocationId: string | null
    }, ExtArgs["result"]["creditTransaction"]>
    composites: {}
  }

  type CreditTransactionGetPayload<S extends boolean | null | undefined | CreditTransactionDefaultArgs> = $Result.GetResult<Prisma.$CreditTransactionPayload, S>

  type CreditTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditTransactionCountAggregateInputType | true
    }

  export interface CreditTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditTransaction'], meta: { name: 'CreditTransaction' } }
    /**
     * Find zero or one CreditTransaction that matches the filter.
     * @param {CreditTransactionFindUniqueArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditTransactionFindUniqueArgs>(args: SelectSubset<T, CreditTransactionFindUniqueArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditTransactionFindUniqueOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditTransactionFindFirstArgs>(args?: SelectSubset<T, CreditTransactionFindFirstArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany()
     * 
     * // Get first 10 CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditTransactionFindManyArgs>(args?: SelectSubset<T, CreditTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditTransaction.
     * @param {CreditTransactionCreateArgs} args - Arguments to create a CreditTransaction.
     * @example
     * // Create one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.create({
     *   data: {
     *     // ... data to create a CreditTransaction
     *   }
     * })
     * 
     */
    create<T extends CreditTransactionCreateArgs>(args: SelectSubset<T, CreditTransactionCreateArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditTransactions.
     * @param {CreditTransactionCreateManyArgs} args - Arguments to create many CreditTransactions.
     * @example
     * // Create many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditTransactionCreateManyArgs>(args?: SelectSubset<T, CreditTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditTransactions and returns the data saved in the database.
     * @param {CreditTransactionCreateManyAndReturnArgs} args - Arguments to create many CreditTransactions.
     * @example
     * // Create many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditTransactions and only return the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreditTransaction.
     * @param {CreditTransactionDeleteArgs} args - Arguments to delete one CreditTransaction.
     * @example
     * // Delete one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.delete({
     *   where: {
     *     // ... filter to delete one CreditTransaction
     *   }
     * })
     * 
     */
    delete<T extends CreditTransactionDeleteArgs>(args: SelectSubset<T, CreditTransactionDeleteArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditTransaction.
     * @param {CreditTransactionUpdateArgs} args - Arguments to update one CreditTransaction.
     * @example
     * // Update one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditTransactionUpdateArgs>(args: SelectSubset<T, CreditTransactionUpdateArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditTransactions.
     * @param {CreditTransactionDeleteManyArgs} args - Arguments to filter CreditTransactions to delete.
     * @example
     * // Delete a few CreditTransactions
     * const { count } = await prisma.creditTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditTransactionDeleteManyArgs>(args?: SelectSubset<T, CreditTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditTransactionUpdateManyArgs>(args: SelectSubset<T, CreditTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditTransactions and returns the data updated in the database.
     * @param {CreditTransactionUpdateManyAndReturnArgs} args - Arguments to update many CreditTransactions.
     * @example
     * // Update many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreditTransactions and only return the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends CreditTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, CreditTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreditTransaction.
     * @param {CreditTransactionUpsertArgs} args - Arguments to update or create a CreditTransaction.
     * @example
     * // Update or create a CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.upsert({
     *   create: {
     *     // ... data to create a CreditTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditTransaction we want to update
     *   }
     * })
     */
    upsert<T extends CreditTransactionUpsertArgs>(args: SelectSubset<T, CreditTransactionUpsertArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionCountArgs} args - Arguments to filter CreditTransactions to count.
     * @example
     * // Count the number of CreditTransactions
     * const count = await prisma.creditTransaction.count({
     *   where: {
     *     // ... the filter for the CreditTransactions we want to count
     *   }
     * })
    **/
    count<T extends CreditTransactionCountArgs>(
      args?: Subset<T, CreditTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditTransactionAggregateArgs>(args: Subset<T, CreditTransactionAggregateArgs>): Prisma.PrismaPromise<GetCreditTransactionAggregateType<T>>

    /**
     * Group by CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionGroupByArgs} args - Group by arguments.
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
      T extends CreditTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditTransactionGroupByArgs['orderBy'] }
        : { orderBy?: CreditTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditTransaction model
   */
  readonly fields: CreditTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addonPurchase<T extends CreditTransaction$addonPurchaseArgs<ExtArgs> = {}>(args?: Subset<T, CreditTransaction$addonPurchaseArgs<ExtArgs>>): Prisma__AddonPurchaseClient<$Result.GetResult<Prisma.$AddonPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    creditAccount<T extends CreditAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreditAccountDefaultArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creditAllocation<T extends CreditTransaction$creditAllocationArgs<ExtArgs> = {}>(args?: Subset<T, CreditTransaction$creditAllocationArgs<ExtArgs>>): Prisma__CreditAllocationClient<$Result.GetResult<Prisma.$CreditAllocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CreditTransaction model
   */
  interface CreditTransactionFieldRefs {
    readonly id: FieldRef<"CreditTransaction", 'String'>
    readonly creditAccountId: FieldRef<"CreditTransaction", 'String'>
    readonly amount: FieldRef<"CreditTransaction", 'Int'>
    readonly type: FieldRef<"CreditTransaction", 'CreditTransactionType'>
    readonly description: FieldRef<"CreditTransaction", 'String'>
    readonly balanceBefore: FieldRef<"CreditTransaction", 'Int'>
    readonly balanceAfter: FieldRef<"CreditTransaction", 'Int'>
    readonly referenceId: FieldRef<"CreditTransaction", 'String'>
    readonly createdAt: FieldRef<"CreditTransaction", 'DateTime'>
    readonly addonPurchaseId: FieldRef<"CreditTransaction", 'String'>
    readonly creditAllocationId: FieldRef<"CreditTransaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CreditTransaction findUnique
   */
  export type CreditTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction findUniqueOrThrow
   */
  export type CreditTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction findFirst
   */
  export type CreditTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction findFirstOrThrow
   */
  export type CreditTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction findMany
   */
  export type CreditTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransactions to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction create
   */
  export type CreditTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditTransaction.
     */
    data: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
  }

  /**
   * CreditTransaction createMany
   */
  export type CreditTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditTransactions.
     */
    data: CreditTransactionCreateManyInput | CreditTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditTransaction createManyAndReturn
   */
  export type CreditTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many CreditTransactions.
     */
    data: CreditTransactionCreateManyInput | CreditTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditTransaction update
   */
  export type CreditTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditTransaction.
     */
    data: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
    /**
     * Choose, which CreditTransaction to update.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction updateMany
   */
  export type CreditTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditTransactions.
     */
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CreditTransactions to update
     */
    where?: CreditTransactionWhereInput
    /**
     * Limit how many CreditTransactions to update.
     */
    limit?: number
  }

  /**
   * CreditTransaction updateManyAndReturn
   */
  export type CreditTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * The data used to update CreditTransactions.
     */
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CreditTransactions to update
     */
    where?: CreditTransactionWhereInput
    /**
     * Limit how many CreditTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditTransaction upsert
   */
  export type CreditTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditTransaction to update in case it exists.
     */
    where: CreditTransactionWhereUniqueInput
    /**
     * In case the CreditTransaction found by the `where` argument doesn't exist, create a new CreditTransaction with this data.
     */
    create: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
    /**
     * In case the CreditTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
  }

  /**
   * CreditTransaction delete
   */
  export type CreditTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter which CreditTransaction to delete.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction deleteMany
   */
  export type CreditTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransactions to delete
     */
    where?: CreditTransactionWhereInput
    /**
     * Limit how many CreditTransactions to delete.
     */
    limit?: number
  }

  /**
   * CreditTransaction.addonPurchase
   */
  export type CreditTransaction$addonPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonPurchase
     */
    select?: AddonPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddonPurchase
     */
    omit?: AddonPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonPurchaseInclude<ExtArgs> | null
    where?: AddonPurchaseWhereInput
  }

  /**
   * CreditTransaction.creditAllocation
   */
  export type CreditTransaction$creditAllocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAllocation
     */
    select?: CreditAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAllocation
     */
    omit?: CreditAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAllocationInclude<ExtArgs> | null
    where?: CreditAllocationWhereInput
  }

  /**
   * CreditTransaction without action
   */
  export type CreditTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
  }


  /**
   * Model BillingTransaction
   */

  export type AggregateBillingTransaction = {
    _count: BillingTransactionCountAggregateOutputType | null
    _avg: BillingTransactionAvgAggregateOutputType | null
    _sum: BillingTransactionSumAggregateOutputType | null
    _min: BillingTransactionMinAggregateOutputType | null
    _max: BillingTransactionMaxAggregateOutputType | null
  }

  export type BillingTransactionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type BillingTransactionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type BillingTransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    subscriptionId: string | null
    type: $Enums.BillingTransactionType | null
    status: $Enums.PaymentStatus | null
    amount: Decimal | null
    currency: string | null
    stripePaymentIntentId: string | null
    stripeInvoiceId: string | null
    stripeChargeId: string | null
    failureReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
    addonPurchaseId: string | null
  }

  export type BillingTransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    subscriptionId: string | null
    type: $Enums.BillingTransactionType | null
    status: $Enums.PaymentStatus | null
    amount: Decimal | null
    currency: string | null
    stripePaymentIntentId: string | null
    stripeInvoiceId: string | null
    stripeChargeId: string | null
    failureReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
    addonPurchaseId: string | null
  }

  export type BillingTransactionCountAggregateOutputType = {
    id: number
    userId: number
    subscriptionId: number
    type: number
    status: number
    amount: number
    currency: number
    stripePaymentIntentId: number
    stripeInvoiceId: number
    stripeChargeId: number
    failureReason: number
    createdAt: number
    updatedAt: number
    addonPurchaseId: number
    _all: number
  }


  export type BillingTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type BillingTransactionSumAggregateInputType = {
    amount?: true
  }

  export type BillingTransactionMinAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    type?: true
    status?: true
    amount?: true
    currency?: true
    stripePaymentIntentId?: true
    stripeInvoiceId?: true
    stripeChargeId?: true
    failureReason?: true
    createdAt?: true
    updatedAt?: true
    addonPurchaseId?: true
  }

  export type BillingTransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    type?: true
    status?: true
    amount?: true
    currency?: true
    stripePaymentIntentId?: true
    stripeInvoiceId?: true
    stripeChargeId?: true
    failureReason?: true
    createdAt?: true
    updatedAt?: true
    addonPurchaseId?: true
  }

  export type BillingTransactionCountAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    type?: true
    status?: true
    amount?: true
    currency?: true
    stripePaymentIntentId?: true
    stripeInvoiceId?: true
    stripeChargeId?: true
    failureReason?: true
    createdAt?: true
    updatedAt?: true
    addonPurchaseId?: true
    _all?: true
  }

  export type BillingTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingTransaction to aggregate.
     */
    where?: BillingTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingTransactions to fetch.
     */
    orderBy?: BillingTransactionOrderByWithRelationInput | BillingTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillingTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BillingTransactions
    **/
    _count?: true | BillingTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillingTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillingTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillingTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillingTransactionMaxAggregateInputType
  }

  export type GetBillingTransactionAggregateType<T extends BillingTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateBillingTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillingTransaction[P]>
      : GetScalarType<T[P], AggregateBillingTransaction[P]>
  }




  export type BillingTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingTransactionWhereInput
    orderBy?: BillingTransactionOrderByWithAggregationInput | BillingTransactionOrderByWithAggregationInput[]
    by: BillingTransactionScalarFieldEnum[] | BillingTransactionScalarFieldEnum
    having?: BillingTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillingTransactionCountAggregateInputType | true
    _avg?: BillingTransactionAvgAggregateInputType
    _sum?: BillingTransactionSumAggregateInputType
    _min?: BillingTransactionMinAggregateInputType
    _max?: BillingTransactionMaxAggregateInputType
  }

  export type BillingTransactionGroupByOutputType = {
    id: string
    userId: string
    subscriptionId: string | null
    type: $Enums.BillingTransactionType
    status: $Enums.PaymentStatus
    amount: Decimal
    currency: string
    stripePaymentIntentId: string | null
    stripeInvoiceId: string | null
    stripeChargeId: string | null
    failureReason: string | null
    createdAt: Date
    updatedAt: Date
    addonPurchaseId: string | null
    _count: BillingTransactionCountAggregateOutputType | null
    _avg: BillingTransactionAvgAggregateOutputType | null
    _sum: BillingTransactionSumAggregateOutputType | null
    _min: BillingTransactionMinAggregateOutputType | null
    _max: BillingTransactionMaxAggregateOutputType | null
  }

  type GetBillingTransactionGroupByPayload<T extends BillingTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillingTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillingTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillingTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], BillingTransactionGroupByOutputType[P]>
        }
      >
    >


  export type BillingTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    type?: boolean
    status?: boolean
    amount?: boolean
    currency?: boolean
    stripePaymentIntentId?: boolean
    stripeInvoiceId?: boolean
    stripeChargeId?: boolean
    failureReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addonPurchaseId?: boolean
    addonPurchase?: boolean | BillingTransaction$addonPurchaseArgs<ExtArgs>
    subscription?: boolean | BillingTransaction$subscriptionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billingTransaction"]>

  export type BillingTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    type?: boolean
    status?: boolean
    amount?: boolean
    currency?: boolean
    stripePaymentIntentId?: boolean
    stripeInvoiceId?: boolean
    stripeChargeId?: boolean
    failureReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addonPurchaseId?: boolean
    addonPurchase?: boolean | BillingTransaction$addonPurchaseArgs<ExtArgs>
    subscription?: boolean | BillingTransaction$subscriptionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billingTransaction"]>

  export type BillingTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    type?: boolean
    status?: boolean
    amount?: boolean
    currency?: boolean
    stripePaymentIntentId?: boolean
    stripeInvoiceId?: boolean
    stripeChargeId?: boolean
    failureReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addonPurchaseId?: boolean
    addonPurchase?: boolean | BillingTransaction$addonPurchaseArgs<ExtArgs>
    subscription?: boolean | BillingTransaction$subscriptionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billingTransaction"]>

  export type BillingTransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    type?: boolean
    status?: boolean
    amount?: boolean
    currency?: boolean
    stripePaymentIntentId?: boolean
    stripeInvoiceId?: boolean
    stripeChargeId?: boolean
    failureReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addonPurchaseId?: boolean
  }

  export type BillingTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "subscriptionId" | "type" | "status" | "amount" | "currency" | "stripePaymentIntentId" | "stripeInvoiceId" | "stripeChargeId" | "failureReason" | "createdAt" | "updatedAt" | "addonPurchaseId", ExtArgs["result"]["billingTransaction"]>
  export type BillingTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addonPurchase?: boolean | BillingTransaction$addonPurchaseArgs<ExtArgs>
    subscription?: boolean | BillingTransaction$subscriptionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BillingTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addonPurchase?: boolean | BillingTransaction$addonPurchaseArgs<ExtArgs>
    subscription?: boolean | BillingTransaction$subscriptionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BillingTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addonPurchase?: boolean | BillingTransaction$addonPurchaseArgs<ExtArgs>
    subscription?: boolean | BillingTransaction$subscriptionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BillingTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BillingTransaction"
    objects: {
      addonPurchase: Prisma.$AddonPurchasePayload<ExtArgs> | null
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subscriptionId: string | null
      type: $Enums.BillingTransactionType
      status: $Enums.PaymentStatus
      amount: Prisma.Decimal
      currency: string
      stripePaymentIntentId: string | null
      stripeInvoiceId: string | null
      stripeChargeId: string | null
      failureReason: string | null
      createdAt: Date
      updatedAt: Date
      addonPurchaseId: string | null
    }, ExtArgs["result"]["billingTransaction"]>
    composites: {}
  }

  type BillingTransactionGetPayload<S extends boolean | null | undefined | BillingTransactionDefaultArgs> = $Result.GetResult<Prisma.$BillingTransactionPayload, S>

  type BillingTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillingTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillingTransactionCountAggregateInputType | true
    }

  export interface BillingTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BillingTransaction'], meta: { name: 'BillingTransaction' } }
    /**
     * Find zero or one BillingTransaction that matches the filter.
     * @param {BillingTransactionFindUniqueArgs} args - Arguments to find a BillingTransaction
     * @example
     * // Get one BillingTransaction
     * const billingTransaction = await prisma.billingTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillingTransactionFindUniqueArgs>(args: SelectSubset<T, BillingTransactionFindUniqueArgs<ExtArgs>>): Prisma__BillingTransactionClient<$Result.GetResult<Prisma.$BillingTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BillingTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillingTransactionFindUniqueOrThrowArgs} args - Arguments to find a BillingTransaction
     * @example
     * // Get one BillingTransaction
     * const billingTransaction = await prisma.billingTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillingTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, BillingTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillingTransactionClient<$Result.GetResult<Prisma.$BillingTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillingTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingTransactionFindFirstArgs} args - Arguments to find a BillingTransaction
     * @example
     * // Get one BillingTransaction
     * const billingTransaction = await prisma.billingTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillingTransactionFindFirstArgs>(args?: SelectSubset<T, BillingTransactionFindFirstArgs<ExtArgs>>): Prisma__BillingTransactionClient<$Result.GetResult<Prisma.$BillingTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillingTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingTransactionFindFirstOrThrowArgs} args - Arguments to find a BillingTransaction
     * @example
     * // Get one BillingTransaction
     * const billingTransaction = await prisma.billingTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillingTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, BillingTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillingTransactionClient<$Result.GetResult<Prisma.$BillingTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BillingTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillingTransactions
     * const billingTransactions = await prisma.billingTransaction.findMany()
     * 
     * // Get first 10 BillingTransactions
     * const billingTransactions = await prisma.billingTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billingTransactionWithIdOnly = await prisma.billingTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillingTransactionFindManyArgs>(args?: SelectSubset<T, BillingTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BillingTransaction.
     * @param {BillingTransactionCreateArgs} args - Arguments to create a BillingTransaction.
     * @example
     * // Create one BillingTransaction
     * const BillingTransaction = await prisma.billingTransaction.create({
     *   data: {
     *     // ... data to create a BillingTransaction
     *   }
     * })
     * 
     */
    create<T extends BillingTransactionCreateArgs>(args: SelectSubset<T, BillingTransactionCreateArgs<ExtArgs>>): Prisma__BillingTransactionClient<$Result.GetResult<Prisma.$BillingTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BillingTransactions.
     * @param {BillingTransactionCreateManyArgs} args - Arguments to create many BillingTransactions.
     * @example
     * // Create many BillingTransactions
     * const billingTransaction = await prisma.billingTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillingTransactionCreateManyArgs>(args?: SelectSubset<T, BillingTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BillingTransactions and returns the data saved in the database.
     * @param {BillingTransactionCreateManyAndReturnArgs} args - Arguments to create many BillingTransactions.
     * @example
     * // Create many BillingTransactions
     * const billingTransaction = await prisma.billingTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BillingTransactions and only return the `id`
     * const billingTransactionWithIdOnly = await prisma.billingTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillingTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, BillingTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BillingTransaction.
     * @param {BillingTransactionDeleteArgs} args - Arguments to delete one BillingTransaction.
     * @example
     * // Delete one BillingTransaction
     * const BillingTransaction = await prisma.billingTransaction.delete({
     *   where: {
     *     // ... filter to delete one BillingTransaction
     *   }
     * })
     * 
     */
    delete<T extends BillingTransactionDeleteArgs>(args: SelectSubset<T, BillingTransactionDeleteArgs<ExtArgs>>): Prisma__BillingTransactionClient<$Result.GetResult<Prisma.$BillingTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BillingTransaction.
     * @param {BillingTransactionUpdateArgs} args - Arguments to update one BillingTransaction.
     * @example
     * // Update one BillingTransaction
     * const billingTransaction = await prisma.billingTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillingTransactionUpdateArgs>(args: SelectSubset<T, BillingTransactionUpdateArgs<ExtArgs>>): Prisma__BillingTransactionClient<$Result.GetResult<Prisma.$BillingTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BillingTransactions.
     * @param {BillingTransactionDeleteManyArgs} args - Arguments to filter BillingTransactions to delete.
     * @example
     * // Delete a few BillingTransactions
     * const { count } = await prisma.billingTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillingTransactionDeleteManyArgs>(args?: SelectSubset<T, BillingTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillingTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillingTransactions
     * const billingTransaction = await prisma.billingTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillingTransactionUpdateManyArgs>(args: SelectSubset<T, BillingTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillingTransactions and returns the data updated in the database.
     * @param {BillingTransactionUpdateManyAndReturnArgs} args - Arguments to update many BillingTransactions.
     * @example
     * // Update many BillingTransactions
     * const billingTransaction = await prisma.billingTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BillingTransactions and only return the `id`
     * const billingTransactionWithIdOnly = await prisma.billingTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends BillingTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, BillingTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BillingTransaction.
     * @param {BillingTransactionUpsertArgs} args - Arguments to update or create a BillingTransaction.
     * @example
     * // Update or create a BillingTransaction
     * const billingTransaction = await prisma.billingTransaction.upsert({
     *   create: {
     *     // ... data to create a BillingTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillingTransaction we want to update
     *   }
     * })
     */
    upsert<T extends BillingTransactionUpsertArgs>(args: SelectSubset<T, BillingTransactionUpsertArgs<ExtArgs>>): Prisma__BillingTransactionClient<$Result.GetResult<Prisma.$BillingTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BillingTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingTransactionCountArgs} args - Arguments to filter BillingTransactions to count.
     * @example
     * // Count the number of BillingTransactions
     * const count = await prisma.billingTransaction.count({
     *   where: {
     *     // ... the filter for the BillingTransactions we want to count
     *   }
     * })
    **/
    count<T extends BillingTransactionCountArgs>(
      args?: Subset<T, BillingTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillingTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BillingTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillingTransactionAggregateArgs>(args: Subset<T, BillingTransactionAggregateArgs>): Prisma.PrismaPromise<GetBillingTransactionAggregateType<T>>

    /**
     * Group by BillingTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingTransactionGroupByArgs} args - Group by arguments.
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
      T extends BillingTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillingTransactionGroupByArgs['orderBy'] }
        : { orderBy?: BillingTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillingTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillingTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BillingTransaction model
   */
  readonly fields: BillingTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BillingTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillingTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addonPurchase<T extends BillingTransaction$addonPurchaseArgs<ExtArgs> = {}>(args?: Subset<T, BillingTransaction$addonPurchaseArgs<ExtArgs>>): Prisma__AddonPurchaseClient<$Result.GetResult<Prisma.$AddonPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subscription<T extends BillingTransaction$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, BillingTransaction$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BillingTransaction model
   */
  interface BillingTransactionFieldRefs {
    readonly id: FieldRef<"BillingTransaction", 'String'>
    readonly userId: FieldRef<"BillingTransaction", 'String'>
    readonly subscriptionId: FieldRef<"BillingTransaction", 'String'>
    readonly type: FieldRef<"BillingTransaction", 'BillingTransactionType'>
    readonly status: FieldRef<"BillingTransaction", 'PaymentStatus'>
    readonly amount: FieldRef<"BillingTransaction", 'Decimal'>
    readonly currency: FieldRef<"BillingTransaction", 'String'>
    readonly stripePaymentIntentId: FieldRef<"BillingTransaction", 'String'>
    readonly stripeInvoiceId: FieldRef<"BillingTransaction", 'String'>
    readonly stripeChargeId: FieldRef<"BillingTransaction", 'String'>
    readonly failureReason: FieldRef<"BillingTransaction", 'String'>
    readonly createdAt: FieldRef<"BillingTransaction", 'DateTime'>
    readonly updatedAt: FieldRef<"BillingTransaction", 'DateTime'>
    readonly addonPurchaseId: FieldRef<"BillingTransaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BillingTransaction findUnique
   */
  export type BillingTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTransaction
     */
    select?: BillingTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTransaction
     */
    omit?: BillingTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BillingTransaction to fetch.
     */
    where: BillingTransactionWhereUniqueInput
  }

  /**
   * BillingTransaction findUniqueOrThrow
   */
  export type BillingTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTransaction
     */
    select?: BillingTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTransaction
     */
    omit?: BillingTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BillingTransaction to fetch.
     */
    where: BillingTransactionWhereUniqueInput
  }

  /**
   * BillingTransaction findFirst
   */
  export type BillingTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTransaction
     */
    select?: BillingTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTransaction
     */
    omit?: BillingTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BillingTransaction to fetch.
     */
    where?: BillingTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingTransactions to fetch.
     */
    orderBy?: BillingTransactionOrderByWithRelationInput | BillingTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingTransactions.
     */
    cursor?: BillingTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingTransactions.
     */
    distinct?: BillingTransactionScalarFieldEnum | BillingTransactionScalarFieldEnum[]
  }

  /**
   * BillingTransaction findFirstOrThrow
   */
  export type BillingTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTransaction
     */
    select?: BillingTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTransaction
     */
    omit?: BillingTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BillingTransaction to fetch.
     */
    where?: BillingTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingTransactions to fetch.
     */
    orderBy?: BillingTransactionOrderByWithRelationInput | BillingTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingTransactions.
     */
    cursor?: BillingTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingTransactions.
     */
    distinct?: BillingTransactionScalarFieldEnum | BillingTransactionScalarFieldEnum[]
  }

  /**
   * BillingTransaction findMany
   */
  export type BillingTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTransaction
     */
    select?: BillingTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTransaction
     */
    omit?: BillingTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BillingTransactions to fetch.
     */
    where?: BillingTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingTransactions to fetch.
     */
    orderBy?: BillingTransactionOrderByWithRelationInput | BillingTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BillingTransactions.
     */
    cursor?: BillingTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingTransactions.
     */
    skip?: number
    distinct?: BillingTransactionScalarFieldEnum | BillingTransactionScalarFieldEnum[]
  }

  /**
   * BillingTransaction create
   */
  export type BillingTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTransaction
     */
    select?: BillingTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTransaction
     */
    omit?: BillingTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a BillingTransaction.
     */
    data: XOR<BillingTransactionCreateInput, BillingTransactionUncheckedCreateInput>
  }

  /**
   * BillingTransaction createMany
   */
  export type BillingTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillingTransactions.
     */
    data: BillingTransactionCreateManyInput | BillingTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillingTransaction createManyAndReturn
   */
  export type BillingTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTransaction
     */
    select?: BillingTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTransaction
     */
    omit?: BillingTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many BillingTransactions.
     */
    data: BillingTransactionCreateManyInput | BillingTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillingTransaction update
   */
  export type BillingTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTransaction
     */
    select?: BillingTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTransaction
     */
    omit?: BillingTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a BillingTransaction.
     */
    data: XOR<BillingTransactionUpdateInput, BillingTransactionUncheckedUpdateInput>
    /**
     * Choose, which BillingTransaction to update.
     */
    where: BillingTransactionWhereUniqueInput
  }

  /**
   * BillingTransaction updateMany
   */
  export type BillingTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BillingTransactions.
     */
    data: XOR<BillingTransactionUpdateManyMutationInput, BillingTransactionUncheckedUpdateManyInput>
    /**
     * Filter which BillingTransactions to update
     */
    where?: BillingTransactionWhereInput
    /**
     * Limit how many BillingTransactions to update.
     */
    limit?: number
  }

  /**
   * BillingTransaction updateManyAndReturn
   */
  export type BillingTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTransaction
     */
    select?: BillingTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTransaction
     */
    omit?: BillingTransactionOmit<ExtArgs> | null
    /**
     * The data used to update BillingTransactions.
     */
    data: XOR<BillingTransactionUpdateManyMutationInput, BillingTransactionUncheckedUpdateManyInput>
    /**
     * Filter which BillingTransactions to update
     */
    where?: BillingTransactionWhereInput
    /**
     * Limit how many BillingTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillingTransaction upsert
   */
  export type BillingTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTransaction
     */
    select?: BillingTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTransaction
     */
    omit?: BillingTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the BillingTransaction to update in case it exists.
     */
    where: BillingTransactionWhereUniqueInput
    /**
     * In case the BillingTransaction found by the `where` argument doesn't exist, create a new BillingTransaction with this data.
     */
    create: XOR<BillingTransactionCreateInput, BillingTransactionUncheckedCreateInput>
    /**
     * In case the BillingTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillingTransactionUpdateInput, BillingTransactionUncheckedUpdateInput>
  }

  /**
   * BillingTransaction delete
   */
  export type BillingTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTransaction
     */
    select?: BillingTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTransaction
     */
    omit?: BillingTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTransactionInclude<ExtArgs> | null
    /**
     * Filter which BillingTransaction to delete.
     */
    where: BillingTransactionWhereUniqueInput
  }

  /**
   * BillingTransaction deleteMany
   */
  export type BillingTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingTransactions to delete
     */
    where?: BillingTransactionWhereInput
    /**
     * Limit how many BillingTransactions to delete.
     */
    limit?: number
  }

  /**
   * BillingTransaction.addonPurchase
   */
  export type BillingTransaction$addonPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonPurchase
     */
    select?: AddonPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddonPurchase
     */
    omit?: AddonPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonPurchaseInclude<ExtArgs> | null
    where?: AddonPurchaseWhereInput
  }

  /**
   * BillingTransaction.subscription
   */
  export type BillingTransaction$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * BillingTransaction without action
   */
  export type BillingTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTransaction
     */
    select?: BillingTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTransaction
     */
    omit?: BillingTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTransactionInclude<ExtArgs> | null
  }


  /**
   * Model CreditAddon
   */

  export type AggregateCreditAddon = {
    _count: CreditAddonCountAggregateOutputType | null
    _avg: CreditAddonAvgAggregateOutputType | null
    _sum: CreditAddonSumAggregateOutputType | null
    _min: CreditAddonMinAggregateOutputType | null
    _max: CreditAddonMaxAggregateOutputType | null
  }

  export type CreditAddonAvgAggregateOutputType = {
    credits: number | null
    price: Decimal | null
  }

  export type CreditAddonSumAggregateOutputType = {
    credits: number | null
    price: Decimal | null
  }

  export type CreditAddonMinAggregateOutputType = {
    id: string | null
    name: string | null
    credits: number | null
    price: Decimal | null
    currency: string | null
    stripePriceId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditAddonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    credits: number | null
    price: Decimal | null
    currency: string | null
    stripePriceId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditAddonCountAggregateOutputType = {
    id: number
    name: number
    credits: number
    price: number
    currency: number
    stripePriceId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CreditAddonAvgAggregateInputType = {
    credits?: true
    price?: true
  }

  export type CreditAddonSumAggregateInputType = {
    credits?: true
    price?: true
  }

  export type CreditAddonMinAggregateInputType = {
    id?: true
    name?: true
    credits?: true
    price?: true
    currency?: true
    stripePriceId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditAddonMaxAggregateInputType = {
    id?: true
    name?: true
    credits?: true
    price?: true
    currency?: true
    stripePriceId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditAddonCountAggregateInputType = {
    id?: true
    name?: true
    credits?: true
    price?: true
    currency?: true
    stripePriceId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CreditAddonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditAddon to aggregate.
     */
    where?: CreditAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAddons to fetch.
     */
    orderBy?: CreditAddonOrderByWithRelationInput | CreditAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAddons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditAddons
    **/
    _count?: true | CreditAddonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditAddonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditAddonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditAddonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditAddonMaxAggregateInputType
  }

  export type GetCreditAddonAggregateType<T extends CreditAddonAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditAddon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditAddon[P]>
      : GetScalarType<T[P], AggregateCreditAddon[P]>
  }




  export type CreditAddonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditAddonWhereInput
    orderBy?: CreditAddonOrderByWithAggregationInput | CreditAddonOrderByWithAggregationInput[]
    by: CreditAddonScalarFieldEnum[] | CreditAddonScalarFieldEnum
    having?: CreditAddonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditAddonCountAggregateInputType | true
    _avg?: CreditAddonAvgAggregateInputType
    _sum?: CreditAddonSumAggregateInputType
    _min?: CreditAddonMinAggregateInputType
    _max?: CreditAddonMaxAggregateInputType
  }

  export type CreditAddonGroupByOutputType = {
    id: string
    name: string
    credits: number
    price: Decimal
    currency: string
    stripePriceId: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CreditAddonCountAggregateOutputType | null
    _avg: CreditAddonAvgAggregateOutputType | null
    _sum: CreditAddonSumAggregateOutputType | null
    _min: CreditAddonMinAggregateOutputType | null
    _max: CreditAddonMaxAggregateOutputType | null
  }

  type GetCreditAddonGroupByPayload<T extends CreditAddonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditAddonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditAddonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditAddonGroupByOutputType[P]>
            : GetScalarType<T[P], CreditAddonGroupByOutputType[P]>
        }
      >
    >


  export type CreditAddonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    credits?: boolean
    price?: boolean
    currency?: boolean
    stripePriceId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchases?: boolean | CreditAddon$purchasesArgs<ExtArgs>
    _count?: boolean | CreditAddonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditAddon"]>

  export type CreditAddonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    credits?: boolean
    price?: boolean
    currency?: boolean
    stripePriceId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["creditAddon"]>

  export type CreditAddonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    credits?: boolean
    price?: boolean
    currency?: boolean
    stripePriceId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["creditAddon"]>

  export type CreditAddonSelectScalar = {
    id?: boolean
    name?: boolean
    credits?: boolean
    price?: boolean
    currency?: boolean
    stripePriceId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CreditAddonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "credits" | "price" | "currency" | "stripePriceId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["creditAddon"]>
  export type CreditAddonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | CreditAddon$purchasesArgs<ExtArgs>
    _count?: boolean | CreditAddonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CreditAddonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CreditAddonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CreditAddonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditAddon"
    objects: {
      purchases: Prisma.$AddonPurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      credits: number
      price: Prisma.Decimal
      currency: string
      stripePriceId: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["creditAddon"]>
    composites: {}
  }

  type CreditAddonGetPayload<S extends boolean | null | undefined | CreditAddonDefaultArgs> = $Result.GetResult<Prisma.$CreditAddonPayload, S>

  type CreditAddonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditAddonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditAddonCountAggregateInputType | true
    }

  export interface CreditAddonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditAddon'], meta: { name: 'CreditAddon' } }
    /**
     * Find zero or one CreditAddon that matches the filter.
     * @param {CreditAddonFindUniqueArgs} args - Arguments to find a CreditAddon
     * @example
     * // Get one CreditAddon
     * const creditAddon = await prisma.creditAddon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditAddonFindUniqueArgs>(args: SelectSubset<T, CreditAddonFindUniqueArgs<ExtArgs>>): Prisma__CreditAddonClient<$Result.GetResult<Prisma.$CreditAddonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditAddon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditAddonFindUniqueOrThrowArgs} args - Arguments to find a CreditAddon
     * @example
     * // Get one CreditAddon
     * const creditAddon = await prisma.creditAddon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditAddonFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditAddonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditAddonClient<$Result.GetResult<Prisma.$CreditAddonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditAddon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAddonFindFirstArgs} args - Arguments to find a CreditAddon
     * @example
     * // Get one CreditAddon
     * const creditAddon = await prisma.creditAddon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditAddonFindFirstArgs>(args?: SelectSubset<T, CreditAddonFindFirstArgs<ExtArgs>>): Prisma__CreditAddonClient<$Result.GetResult<Prisma.$CreditAddonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditAddon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAddonFindFirstOrThrowArgs} args - Arguments to find a CreditAddon
     * @example
     * // Get one CreditAddon
     * const creditAddon = await prisma.creditAddon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditAddonFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditAddonFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditAddonClient<$Result.GetResult<Prisma.$CreditAddonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditAddons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAddonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditAddons
     * const creditAddons = await prisma.creditAddon.findMany()
     * 
     * // Get first 10 CreditAddons
     * const creditAddons = await prisma.creditAddon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditAddonWithIdOnly = await prisma.creditAddon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditAddonFindManyArgs>(args?: SelectSubset<T, CreditAddonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditAddonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditAddon.
     * @param {CreditAddonCreateArgs} args - Arguments to create a CreditAddon.
     * @example
     * // Create one CreditAddon
     * const CreditAddon = await prisma.creditAddon.create({
     *   data: {
     *     // ... data to create a CreditAddon
     *   }
     * })
     * 
     */
    create<T extends CreditAddonCreateArgs>(args: SelectSubset<T, CreditAddonCreateArgs<ExtArgs>>): Prisma__CreditAddonClient<$Result.GetResult<Prisma.$CreditAddonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditAddons.
     * @param {CreditAddonCreateManyArgs} args - Arguments to create many CreditAddons.
     * @example
     * // Create many CreditAddons
     * const creditAddon = await prisma.creditAddon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditAddonCreateManyArgs>(args?: SelectSubset<T, CreditAddonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditAddons and returns the data saved in the database.
     * @param {CreditAddonCreateManyAndReturnArgs} args - Arguments to create many CreditAddons.
     * @example
     * // Create many CreditAddons
     * const creditAddon = await prisma.creditAddon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditAddons and only return the `id`
     * const creditAddonWithIdOnly = await prisma.creditAddon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditAddonCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditAddonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditAddonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreditAddon.
     * @param {CreditAddonDeleteArgs} args - Arguments to delete one CreditAddon.
     * @example
     * // Delete one CreditAddon
     * const CreditAddon = await prisma.creditAddon.delete({
     *   where: {
     *     // ... filter to delete one CreditAddon
     *   }
     * })
     * 
     */
    delete<T extends CreditAddonDeleteArgs>(args: SelectSubset<T, CreditAddonDeleteArgs<ExtArgs>>): Prisma__CreditAddonClient<$Result.GetResult<Prisma.$CreditAddonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditAddon.
     * @param {CreditAddonUpdateArgs} args - Arguments to update one CreditAddon.
     * @example
     * // Update one CreditAddon
     * const creditAddon = await prisma.creditAddon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditAddonUpdateArgs>(args: SelectSubset<T, CreditAddonUpdateArgs<ExtArgs>>): Prisma__CreditAddonClient<$Result.GetResult<Prisma.$CreditAddonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditAddons.
     * @param {CreditAddonDeleteManyArgs} args - Arguments to filter CreditAddons to delete.
     * @example
     * // Delete a few CreditAddons
     * const { count } = await prisma.creditAddon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditAddonDeleteManyArgs>(args?: SelectSubset<T, CreditAddonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditAddons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAddonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditAddons
     * const creditAddon = await prisma.creditAddon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditAddonUpdateManyArgs>(args: SelectSubset<T, CreditAddonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditAddons and returns the data updated in the database.
     * @param {CreditAddonUpdateManyAndReturnArgs} args - Arguments to update many CreditAddons.
     * @example
     * // Update many CreditAddons
     * const creditAddon = await prisma.creditAddon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreditAddons and only return the `id`
     * const creditAddonWithIdOnly = await prisma.creditAddon.updateManyAndReturn({
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
    updateManyAndReturn<T extends CreditAddonUpdateManyAndReturnArgs>(args: SelectSubset<T, CreditAddonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditAddonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreditAddon.
     * @param {CreditAddonUpsertArgs} args - Arguments to update or create a CreditAddon.
     * @example
     * // Update or create a CreditAddon
     * const creditAddon = await prisma.creditAddon.upsert({
     *   create: {
     *     // ... data to create a CreditAddon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditAddon we want to update
     *   }
     * })
     */
    upsert<T extends CreditAddonUpsertArgs>(args: SelectSubset<T, CreditAddonUpsertArgs<ExtArgs>>): Prisma__CreditAddonClient<$Result.GetResult<Prisma.$CreditAddonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditAddons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAddonCountArgs} args - Arguments to filter CreditAddons to count.
     * @example
     * // Count the number of CreditAddons
     * const count = await prisma.creditAddon.count({
     *   where: {
     *     // ... the filter for the CreditAddons we want to count
     *   }
     * })
    **/
    count<T extends CreditAddonCountArgs>(
      args?: Subset<T, CreditAddonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditAddonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditAddon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAddonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditAddonAggregateArgs>(args: Subset<T, CreditAddonAggregateArgs>): Prisma.PrismaPromise<GetCreditAddonAggregateType<T>>

    /**
     * Group by CreditAddon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAddonGroupByArgs} args - Group by arguments.
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
      T extends CreditAddonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditAddonGroupByArgs['orderBy'] }
        : { orderBy?: CreditAddonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditAddonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditAddonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditAddon model
   */
  readonly fields: CreditAddonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditAddon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditAddonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchases<T extends CreditAddon$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, CreditAddon$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddonPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CreditAddon model
   */
  interface CreditAddonFieldRefs {
    readonly id: FieldRef<"CreditAddon", 'String'>
    readonly name: FieldRef<"CreditAddon", 'String'>
    readonly credits: FieldRef<"CreditAddon", 'Int'>
    readonly price: FieldRef<"CreditAddon", 'Decimal'>
    readonly currency: FieldRef<"CreditAddon", 'String'>
    readonly stripePriceId: FieldRef<"CreditAddon", 'String'>
    readonly isActive: FieldRef<"CreditAddon", 'Boolean'>
    readonly createdAt: FieldRef<"CreditAddon", 'DateTime'>
    readonly updatedAt: FieldRef<"CreditAddon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditAddon findUnique
   */
  export type CreditAddonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAddon
     */
    select?: CreditAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAddon
     */
    omit?: CreditAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAddonInclude<ExtArgs> | null
    /**
     * Filter, which CreditAddon to fetch.
     */
    where: CreditAddonWhereUniqueInput
  }

  /**
   * CreditAddon findUniqueOrThrow
   */
  export type CreditAddonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAddon
     */
    select?: CreditAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAddon
     */
    omit?: CreditAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAddonInclude<ExtArgs> | null
    /**
     * Filter, which CreditAddon to fetch.
     */
    where: CreditAddonWhereUniqueInput
  }

  /**
   * CreditAddon findFirst
   */
  export type CreditAddonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAddon
     */
    select?: CreditAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAddon
     */
    omit?: CreditAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAddonInclude<ExtArgs> | null
    /**
     * Filter, which CreditAddon to fetch.
     */
    where?: CreditAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAddons to fetch.
     */
    orderBy?: CreditAddonOrderByWithRelationInput | CreditAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditAddons.
     */
    cursor?: CreditAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAddons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditAddons.
     */
    distinct?: CreditAddonScalarFieldEnum | CreditAddonScalarFieldEnum[]
  }

  /**
   * CreditAddon findFirstOrThrow
   */
  export type CreditAddonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAddon
     */
    select?: CreditAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAddon
     */
    omit?: CreditAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAddonInclude<ExtArgs> | null
    /**
     * Filter, which CreditAddon to fetch.
     */
    where?: CreditAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAddons to fetch.
     */
    orderBy?: CreditAddonOrderByWithRelationInput | CreditAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditAddons.
     */
    cursor?: CreditAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAddons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditAddons.
     */
    distinct?: CreditAddonScalarFieldEnum | CreditAddonScalarFieldEnum[]
  }

  /**
   * CreditAddon findMany
   */
  export type CreditAddonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAddon
     */
    select?: CreditAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAddon
     */
    omit?: CreditAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAddonInclude<ExtArgs> | null
    /**
     * Filter, which CreditAddons to fetch.
     */
    where?: CreditAddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAddons to fetch.
     */
    orderBy?: CreditAddonOrderByWithRelationInput | CreditAddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditAddons.
     */
    cursor?: CreditAddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAddons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAddons.
     */
    skip?: number
    distinct?: CreditAddonScalarFieldEnum | CreditAddonScalarFieldEnum[]
  }

  /**
   * CreditAddon create
   */
  export type CreditAddonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAddon
     */
    select?: CreditAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAddon
     */
    omit?: CreditAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAddonInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditAddon.
     */
    data: XOR<CreditAddonCreateInput, CreditAddonUncheckedCreateInput>
  }

  /**
   * CreditAddon createMany
   */
  export type CreditAddonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditAddons.
     */
    data: CreditAddonCreateManyInput | CreditAddonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditAddon createManyAndReturn
   */
  export type CreditAddonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAddon
     */
    select?: CreditAddonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAddon
     */
    omit?: CreditAddonOmit<ExtArgs> | null
    /**
     * The data used to create many CreditAddons.
     */
    data: CreditAddonCreateManyInput | CreditAddonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditAddon update
   */
  export type CreditAddonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAddon
     */
    select?: CreditAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAddon
     */
    omit?: CreditAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAddonInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditAddon.
     */
    data: XOR<CreditAddonUpdateInput, CreditAddonUncheckedUpdateInput>
    /**
     * Choose, which CreditAddon to update.
     */
    where: CreditAddonWhereUniqueInput
  }

  /**
   * CreditAddon updateMany
   */
  export type CreditAddonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditAddons.
     */
    data: XOR<CreditAddonUpdateManyMutationInput, CreditAddonUncheckedUpdateManyInput>
    /**
     * Filter which CreditAddons to update
     */
    where?: CreditAddonWhereInput
    /**
     * Limit how many CreditAddons to update.
     */
    limit?: number
  }

  /**
   * CreditAddon updateManyAndReturn
   */
  export type CreditAddonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAddon
     */
    select?: CreditAddonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAddon
     */
    omit?: CreditAddonOmit<ExtArgs> | null
    /**
     * The data used to update CreditAddons.
     */
    data: XOR<CreditAddonUpdateManyMutationInput, CreditAddonUncheckedUpdateManyInput>
    /**
     * Filter which CreditAddons to update
     */
    where?: CreditAddonWhereInput
    /**
     * Limit how many CreditAddons to update.
     */
    limit?: number
  }

  /**
   * CreditAddon upsert
   */
  export type CreditAddonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAddon
     */
    select?: CreditAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAddon
     */
    omit?: CreditAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAddonInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditAddon to update in case it exists.
     */
    where: CreditAddonWhereUniqueInput
    /**
     * In case the CreditAddon found by the `where` argument doesn't exist, create a new CreditAddon with this data.
     */
    create: XOR<CreditAddonCreateInput, CreditAddonUncheckedCreateInput>
    /**
     * In case the CreditAddon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditAddonUpdateInput, CreditAddonUncheckedUpdateInput>
  }

  /**
   * CreditAddon delete
   */
  export type CreditAddonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAddon
     */
    select?: CreditAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAddon
     */
    omit?: CreditAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAddonInclude<ExtArgs> | null
    /**
     * Filter which CreditAddon to delete.
     */
    where: CreditAddonWhereUniqueInput
  }

  /**
   * CreditAddon deleteMany
   */
  export type CreditAddonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditAddons to delete
     */
    where?: CreditAddonWhereInput
    /**
     * Limit how many CreditAddons to delete.
     */
    limit?: number
  }

  /**
   * CreditAddon.purchases
   */
  export type CreditAddon$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonPurchase
     */
    select?: AddonPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddonPurchase
     */
    omit?: AddonPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonPurchaseInclude<ExtArgs> | null
    where?: AddonPurchaseWhereInput
    orderBy?: AddonPurchaseOrderByWithRelationInput | AddonPurchaseOrderByWithRelationInput[]
    cursor?: AddonPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddonPurchaseScalarFieldEnum | AddonPurchaseScalarFieldEnum[]
  }

  /**
   * CreditAddon without action
   */
  export type CreditAddonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAddon
     */
    select?: CreditAddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAddon
     */
    omit?: CreditAddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAddonInclude<ExtArgs> | null
  }


  /**
   * Model AddonPurchase
   */

  export type AggregateAddonPurchase = {
    _count: AddonPurchaseCountAggregateOutputType | null
    _avg: AddonPurchaseAvgAggregateOutputType | null
    _sum: AddonPurchaseSumAggregateOutputType | null
    _min: AddonPurchaseMinAggregateOutputType | null
    _max: AddonPurchaseMaxAggregateOutputType | null
  }

  export type AddonPurchaseAvgAggregateOutputType = {
    credits: number | null
    amount: Decimal | null
  }

  export type AddonPurchaseSumAggregateOutputType = {
    credits: number | null
    amount: Decimal | null
  }

  export type AddonPurchaseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    credits: number | null
    amount: Decimal | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    stripePaymentIntentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    creditAddonId: string | null
  }

  export type AddonPurchaseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    credits: number | null
    amount: Decimal | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    stripePaymentIntentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    creditAddonId: string | null
  }

  export type AddonPurchaseCountAggregateOutputType = {
    id: number
    userId: number
    credits: number
    amount: number
    currency: number
    status: number
    stripePaymentIntentId: number
    createdAt: number
    updatedAt: number
    creditAddonId: number
    _all: number
  }


  export type AddonPurchaseAvgAggregateInputType = {
    credits?: true
    amount?: true
  }

  export type AddonPurchaseSumAggregateInputType = {
    credits?: true
    amount?: true
  }

  export type AddonPurchaseMinAggregateInputType = {
    id?: true
    userId?: true
    credits?: true
    amount?: true
    currency?: true
    status?: true
    stripePaymentIntentId?: true
    createdAt?: true
    updatedAt?: true
    creditAddonId?: true
  }

  export type AddonPurchaseMaxAggregateInputType = {
    id?: true
    userId?: true
    credits?: true
    amount?: true
    currency?: true
    status?: true
    stripePaymentIntentId?: true
    createdAt?: true
    updatedAt?: true
    creditAddonId?: true
  }

  export type AddonPurchaseCountAggregateInputType = {
    id?: true
    userId?: true
    credits?: true
    amount?: true
    currency?: true
    status?: true
    stripePaymentIntentId?: true
    createdAt?: true
    updatedAt?: true
    creditAddonId?: true
    _all?: true
  }

  export type AddonPurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddonPurchase to aggregate.
     */
    where?: AddonPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddonPurchases to fetch.
     */
    orderBy?: AddonPurchaseOrderByWithRelationInput | AddonPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddonPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddonPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddonPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AddonPurchases
    **/
    _count?: true | AddonPurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddonPurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddonPurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddonPurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddonPurchaseMaxAggregateInputType
  }

  export type GetAddonPurchaseAggregateType<T extends AddonPurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateAddonPurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddonPurchase[P]>
      : GetScalarType<T[P], AggregateAddonPurchase[P]>
  }




  export type AddonPurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddonPurchaseWhereInput
    orderBy?: AddonPurchaseOrderByWithAggregationInput | AddonPurchaseOrderByWithAggregationInput[]
    by: AddonPurchaseScalarFieldEnum[] | AddonPurchaseScalarFieldEnum
    having?: AddonPurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddonPurchaseCountAggregateInputType | true
    _avg?: AddonPurchaseAvgAggregateInputType
    _sum?: AddonPurchaseSumAggregateInputType
    _min?: AddonPurchaseMinAggregateInputType
    _max?: AddonPurchaseMaxAggregateInputType
  }

  export type AddonPurchaseGroupByOutputType = {
    id: string
    userId: string
    credits: number
    amount: Decimal
    currency: string
    status: $Enums.PaymentStatus
    stripePaymentIntentId: string | null
    createdAt: Date
    updatedAt: Date
    creditAddonId: string
    _count: AddonPurchaseCountAggregateOutputType | null
    _avg: AddonPurchaseAvgAggregateOutputType | null
    _sum: AddonPurchaseSumAggregateOutputType | null
    _min: AddonPurchaseMinAggregateOutputType | null
    _max: AddonPurchaseMaxAggregateOutputType | null
  }

  type GetAddonPurchaseGroupByPayload<T extends AddonPurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddonPurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddonPurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddonPurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], AddonPurchaseGroupByOutputType[P]>
        }
      >
    >


  export type AddonPurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    credits?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    stripePaymentIntentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creditAddonId?: boolean
    addon?: boolean | CreditAddonDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    billingTransactions?: boolean | AddonPurchase$billingTransactionsArgs<ExtArgs>
    creditAllocations?: boolean | AddonPurchase$creditAllocationsArgs<ExtArgs>
    creditTransactions?: boolean | AddonPurchase$creditTransactionsArgs<ExtArgs>
    _count?: boolean | AddonPurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addonPurchase"]>

  export type AddonPurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    credits?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    stripePaymentIntentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creditAddonId?: boolean
    addon?: boolean | CreditAddonDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addonPurchase"]>

  export type AddonPurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    credits?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    stripePaymentIntentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creditAddonId?: boolean
    addon?: boolean | CreditAddonDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addonPurchase"]>

  export type AddonPurchaseSelectScalar = {
    id?: boolean
    userId?: boolean
    credits?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    stripePaymentIntentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creditAddonId?: boolean
  }

  export type AddonPurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "credits" | "amount" | "currency" | "status" | "stripePaymentIntentId" | "createdAt" | "updatedAt" | "creditAddonId", ExtArgs["result"]["addonPurchase"]>
  export type AddonPurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addon?: boolean | CreditAddonDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    billingTransactions?: boolean | AddonPurchase$billingTransactionsArgs<ExtArgs>
    creditAllocations?: boolean | AddonPurchase$creditAllocationsArgs<ExtArgs>
    creditTransactions?: boolean | AddonPurchase$creditTransactionsArgs<ExtArgs>
    _count?: boolean | AddonPurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AddonPurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addon?: boolean | CreditAddonDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AddonPurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addon?: boolean | CreditAddonDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AddonPurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddonPurchase"
    objects: {
      addon: Prisma.$CreditAddonPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      billingTransactions: Prisma.$BillingTransactionPayload<ExtArgs>[]
      creditAllocations: Prisma.$CreditAllocationPayload<ExtArgs>[]
      creditTransactions: Prisma.$CreditTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      credits: number
      amount: Prisma.Decimal
      currency: string
      status: $Enums.PaymentStatus
      stripePaymentIntentId: string | null
      createdAt: Date
      updatedAt: Date
      creditAddonId: string
    }, ExtArgs["result"]["addonPurchase"]>
    composites: {}
  }

  type AddonPurchaseGetPayload<S extends boolean | null | undefined | AddonPurchaseDefaultArgs> = $Result.GetResult<Prisma.$AddonPurchasePayload, S>

  type AddonPurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddonPurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddonPurchaseCountAggregateInputType | true
    }

  export interface AddonPurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AddonPurchase'], meta: { name: 'AddonPurchase' } }
    /**
     * Find zero or one AddonPurchase that matches the filter.
     * @param {AddonPurchaseFindUniqueArgs} args - Arguments to find a AddonPurchase
     * @example
     * // Get one AddonPurchase
     * const addonPurchase = await prisma.addonPurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddonPurchaseFindUniqueArgs>(args: SelectSubset<T, AddonPurchaseFindUniqueArgs<ExtArgs>>): Prisma__AddonPurchaseClient<$Result.GetResult<Prisma.$AddonPurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AddonPurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddonPurchaseFindUniqueOrThrowArgs} args - Arguments to find a AddonPurchase
     * @example
     * // Get one AddonPurchase
     * const addonPurchase = await prisma.addonPurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddonPurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, AddonPurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddonPurchaseClient<$Result.GetResult<Prisma.$AddonPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddonPurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonPurchaseFindFirstArgs} args - Arguments to find a AddonPurchase
     * @example
     * // Get one AddonPurchase
     * const addonPurchase = await prisma.addonPurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddonPurchaseFindFirstArgs>(args?: SelectSubset<T, AddonPurchaseFindFirstArgs<ExtArgs>>): Prisma__AddonPurchaseClient<$Result.GetResult<Prisma.$AddonPurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddonPurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonPurchaseFindFirstOrThrowArgs} args - Arguments to find a AddonPurchase
     * @example
     * // Get one AddonPurchase
     * const addonPurchase = await prisma.addonPurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddonPurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, AddonPurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddonPurchaseClient<$Result.GetResult<Prisma.$AddonPurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AddonPurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonPurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddonPurchases
     * const addonPurchases = await prisma.addonPurchase.findMany()
     * 
     * // Get first 10 AddonPurchases
     * const addonPurchases = await prisma.addonPurchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addonPurchaseWithIdOnly = await prisma.addonPurchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddonPurchaseFindManyArgs>(args?: SelectSubset<T, AddonPurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddonPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AddonPurchase.
     * @param {AddonPurchaseCreateArgs} args - Arguments to create a AddonPurchase.
     * @example
     * // Create one AddonPurchase
     * const AddonPurchase = await prisma.addonPurchase.create({
     *   data: {
     *     // ... data to create a AddonPurchase
     *   }
     * })
     * 
     */
    create<T extends AddonPurchaseCreateArgs>(args: SelectSubset<T, AddonPurchaseCreateArgs<ExtArgs>>): Prisma__AddonPurchaseClient<$Result.GetResult<Prisma.$AddonPurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AddonPurchases.
     * @param {AddonPurchaseCreateManyArgs} args - Arguments to create many AddonPurchases.
     * @example
     * // Create many AddonPurchases
     * const addonPurchase = await prisma.addonPurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddonPurchaseCreateManyArgs>(args?: SelectSubset<T, AddonPurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AddonPurchases and returns the data saved in the database.
     * @param {AddonPurchaseCreateManyAndReturnArgs} args - Arguments to create many AddonPurchases.
     * @example
     * // Create many AddonPurchases
     * const addonPurchase = await prisma.addonPurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AddonPurchases and only return the `id`
     * const addonPurchaseWithIdOnly = await prisma.addonPurchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddonPurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, AddonPurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddonPurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AddonPurchase.
     * @param {AddonPurchaseDeleteArgs} args - Arguments to delete one AddonPurchase.
     * @example
     * // Delete one AddonPurchase
     * const AddonPurchase = await prisma.addonPurchase.delete({
     *   where: {
     *     // ... filter to delete one AddonPurchase
     *   }
     * })
     * 
     */
    delete<T extends AddonPurchaseDeleteArgs>(args: SelectSubset<T, AddonPurchaseDeleteArgs<ExtArgs>>): Prisma__AddonPurchaseClient<$Result.GetResult<Prisma.$AddonPurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AddonPurchase.
     * @param {AddonPurchaseUpdateArgs} args - Arguments to update one AddonPurchase.
     * @example
     * // Update one AddonPurchase
     * const addonPurchase = await prisma.addonPurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddonPurchaseUpdateArgs>(args: SelectSubset<T, AddonPurchaseUpdateArgs<ExtArgs>>): Prisma__AddonPurchaseClient<$Result.GetResult<Prisma.$AddonPurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AddonPurchases.
     * @param {AddonPurchaseDeleteManyArgs} args - Arguments to filter AddonPurchases to delete.
     * @example
     * // Delete a few AddonPurchases
     * const { count } = await prisma.addonPurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddonPurchaseDeleteManyArgs>(args?: SelectSubset<T, AddonPurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddonPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonPurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddonPurchases
     * const addonPurchase = await prisma.addonPurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddonPurchaseUpdateManyArgs>(args: SelectSubset<T, AddonPurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddonPurchases and returns the data updated in the database.
     * @param {AddonPurchaseUpdateManyAndReturnArgs} args - Arguments to update many AddonPurchases.
     * @example
     * // Update many AddonPurchases
     * const addonPurchase = await prisma.addonPurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AddonPurchases and only return the `id`
     * const addonPurchaseWithIdOnly = await prisma.addonPurchase.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddonPurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, AddonPurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddonPurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AddonPurchase.
     * @param {AddonPurchaseUpsertArgs} args - Arguments to update or create a AddonPurchase.
     * @example
     * // Update or create a AddonPurchase
     * const addonPurchase = await prisma.addonPurchase.upsert({
     *   create: {
     *     // ... data to create a AddonPurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddonPurchase we want to update
     *   }
     * })
     */
    upsert<T extends AddonPurchaseUpsertArgs>(args: SelectSubset<T, AddonPurchaseUpsertArgs<ExtArgs>>): Prisma__AddonPurchaseClient<$Result.GetResult<Prisma.$AddonPurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AddonPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonPurchaseCountArgs} args - Arguments to filter AddonPurchases to count.
     * @example
     * // Count the number of AddonPurchases
     * const count = await prisma.addonPurchase.count({
     *   where: {
     *     // ... the filter for the AddonPurchases we want to count
     *   }
     * })
    **/
    count<T extends AddonPurchaseCountArgs>(
      args?: Subset<T, AddonPurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddonPurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AddonPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonPurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddonPurchaseAggregateArgs>(args: Subset<T, AddonPurchaseAggregateArgs>): Prisma.PrismaPromise<GetAddonPurchaseAggregateType<T>>

    /**
     * Group by AddonPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonPurchaseGroupByArgs} args - Group by arguments.
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
      T extends AddonPurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddonPurchaseGroupByArgs['orderBy'] }
        : { orderBy?: AddonPurchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddonPurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddonPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AddonPurchase model
   */
  readonly fields: AddonPurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AddonPurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddonPurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addon<T extends CreditAddonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreditAddonDefaultArgs<ExtArgs>>): Prisma__CreditAddonClient<$Result.GetResult<Prisma.$CreditAddonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    billingTransactions<T extends AddonPurchase$billingTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, AddonPurchase$billingTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creditAllocations<T extends AddonPurchase$creditAllocationsArgs<ExtArgs> = {}>(args?: Subset<T, AddonPurchase$creditAllocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creditTransactions<T extends AddonPurchase$creditTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, AddonPurchase$creditTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AddonPurchase model
   */
  interface AddonPurchaseFieldRefs {
    readonly id: FieldRef<"AddonPurchase", 'String'>
    readonly userId: FieldRef<"AddonPurchase", 'String'>
    readonly credits: FieldRef<"AddonPurchase", 'Int'>
    readonly amount: FieldRef<"AddonPurchase", 'Decimal'>
    readonly currency: FieldRef<"AddonPurchase", 'String'>
    readonly status: FieldRef<"AddonPurchase", 'PaymentStatus'>
    readonly stripePaymentIntentId: FieldRef<"AddonPurchase", 'String'>
    readonly createdAt: FieldRef<"AddonPurchase", 'DateTime'>
    readonly updatedAt: FieldRef<"AddonPurchase", 'DateTime'>
    readonly creditAddonId: FieldRef<"AddonPurchase", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AddonPurchase findUnique
   */
  export type AddonPurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonPurchase
     */
    select?: AddonPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddonPurchase
     */
    omit?: AddonPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which AddonPurchase to fetch.
     */
    where: AddonPurchaseWhereUniqueInput
  }

  /**
   * AddonPurchase findUniqueOrThrow
   */
  export type AddonPurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonPurchase
     */
    select?: AddonPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddonPurchase
     */
    omit?: AddonPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which AddonPurchase to fetch.
     */
    where: AddonPurchaseWhereUniqueInput
  }

  /**
   * AddonPurchase findFirst
   */
  export type AddonPurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonPurchase
     */
    select?: AddonPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddonPurchase
     */
    omit?: AddonPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which AddonPurchase to fetch.
     */
    where?: AddonPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddonPurchases to fetch.
     */
    orderBy?: AddonPurchaseOrderByWithRelationInput | AddonPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddonPurchases.
     */
    cursor?: AddonPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddonPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddonPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddonPurchases.
     */
    distinct?: AddonPurchaseScalarFieldEnum | AddonPurchaseScalarFieldEnum[]
  }

  /**
   * AddonPurchase findFirstOrThrow
   */
  export type AddonPurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonPurchase
     */
    select?: AddonPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddonPurchase
     */
    omit?: AddonPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which AddonPurchase to fetch.
     */
    where?: AddonPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddonPurchases to fetch.
     */
    orderBy?: AddonPurchaseOrderByWithRelationInput | AddonPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddonPurchases.
     */
    cursor?: AddonPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddonPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddonPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddonPurchases.
     */
    distinct?: AddonPurchaseScalarFieldEnum | AddonPurchaseScalarFieldEnum[]
  }

  /**
   * AddonPurchase findMany
   */
  export type AddonPurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonPurchase
     */
    select?: AddonPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddonPurchase
     */
    omit?: AddonPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which AddonPurchases to fetch.
     */
    where?: AddonPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddonPurchases to fetch.
     */
    orderBy?: AddonPurchaseOrderByWithRelationInput | AddonPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AddonPurchases.
     */
    cursor?: AddonPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddonPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddonPurchases.
     */
    skip?: number
    distinct?: AddonPurchaseScalarFieldEnum | AddonPurchaseScalarFieldEnum[]
  }

  /**
   * AddonPurchase create
   */
  export type AddonPurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonPurchase
     */
    select?: AddonPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddonPurchase
     */
    omit?: AddonPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a AddonPurchase.
     */
    data: XOR<AddonPurchaseCreateInput, AddonPurchaseUncheckedCreateInput>
  }

  /**
   * AddonPurchase createMany
   */
  export type AddonPurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AddonPurchases.
     */
    data: AddonPurchaseCreateManyInput | AddonPurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AddonPurchase createManyAndReturn
   */
  export type AddonPurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonPurchase
     */
    select?: AddonPurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AddonPurchase
     */
    omit?: AddonPurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many AddonPurchases.
     */
    data: AddonPurchaseCreateManyInput | AddonPurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonPurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AddonPurchase update
   */
  export type AddonPurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonPurchase
     */
    select?: AddonPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddonPurchase
     */
    omit?: AddonPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a AddonPurchase.
     */
    data: XOR<AddonPurchaseUpdateInput, AddonPurchaseUncheckedUpdateInput>
    /**
     * Choose, which AddonPurchase to update.
     */
    where: AddonPurchaseWhereUniqueInput
  }

  /**
   * AddonPurchase updateMany
   */
  export type AddonPurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AddonPurchases.
     */
    data: XOR<AddonPurchaseUpdateManyMutationInput, AddonPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which AddonPurchases to update
     */
    where?: AddonPurchaseWhereInput
    /**
     * Limit how many AddonPurchases to update.
     */
    limit?: number
  }

  /**
   * AddonPurchase updateManyAndReturn
   */
  export type AddonPurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonPurchase
     */
    select?: AddonPurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AddonPurchase
     */
    omit?: AddonPurchaseOmit<ExtArgs> | null
    /**
     * The data used to update AddonPurchases.
     */
    data: XOR<AddonPurchaseUpdateManyMutationInput, AddonPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which AddonPurchases to update
     */
    where?: AddonPurchaseWhereInput
    /**
     * Limit how many AddonPurchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonPurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AddonPurchase upsert
   */
  export type AddonPurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonPurchase
     */
    select?: AddonPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddonPurchase
     */
    omit?: AddonPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonPurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the AddonPurchase to update in case it exists.
     */
    where: AddonPurchaseWhereUniqueInput
    /**
     * In case the AddonPurchase found by the `where` argument doesn't exist, create a new AddonPurchase with this data.
     */
    create: XOR<AddonPurchaseCreateInput, AddonPurchaseUncheckedCreateInput>
    /**
     * In case the AddonPurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddonPurchaseUpdateInput, AddonPurchaseUncheckedUpdateInput>
  }

  /**
   * AddonPurchase delete
   */
  export type AddonPurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonPurchase
     */
    select?: AddonPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddonPurchase
     */
    omit?: AddonPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonPurchaseInclude<ExtArgs> | null
    /**
     * Filter which AddonPurchase to delete.
     */
    where: AddonPurchaseWhereUniqueInput
  }

  /**
   * AddonPurchase deleteMany
   */
  export type AddonPurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddonPurchases to delete
     */
    where?: AddonPurchaseWhereInput
    /**
     * Limit how many AddonPurchases to delete.
     */
    limit?: number
  }

  /**
   * AddonPurchase.billingTransactions
   */
  export type AddonPurchase$billingTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTransaction
     */
    select?: BillingTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTransaction
     */
    omit?: BillingTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTransactionInclude<ExtArgs> | null
    where?: BillingTransactionWhereInput
    orderBy?: BillingTransactionOrderByWithRelationInput | BillingTransactionOrderByWithRelationInput[]
    cursor?: BillingTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillingTransactionScalarFieldEnum | BillingTransactionScalarFieldEnum[]
  }

  /**
   * AddonPurchase.creditAllocations
   */
  export type AddonPurchase$creditAllocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAllocation
     */
    select?: CreditAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAllocation
     */
    omit?: CreditAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAllocationInclude<ExtArgs> | null
    where?: CreditAllocationWhereInput
    orderBy?: CreditAllocationOrderByWithRelationInput | CreditAllocationOrderByWithRelationInput[]
    cursor?: CreditAllocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditAllocationScalarFieldEnum | CreditAllocationScalarFieldEnum[]
  }

  /**
   * AddonPurchase.creditTransactions
   */
  export type AddonPurchase$creditTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    cursor?: CreditTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * AddonPurchase without action
   */
  export type AddonPurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonPurchase
     */
    select?: AddonPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddonPurchase
     */
    omit?: AddonPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonPurchaseInclude<ExtArgs> | null
  }


  /**
   * Model StripeWebhookEvent
   */

  export type AggregateStripeWebhookEvent = {
    _count: StripeWebhookEventCountAggregateOutputType | null
    _min: StripeWebhookEventMinAggregateOutputType | null
    _max: StripeWebhookEventMaxAggregateOutputType | null
  }

  export type StripeWebhookEventMinAggregateOutputType = {
    id: string | null
    stripeEventId: string | null
    eventType: string | null
    status: $Enums.WebhookEventStatus | null
    processedAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type StripeWebhookEventMaxAggregateOutputType = {
    id: string | null
    stripeEventId: string | null
    eventType: string | null
    status: $Enums.WebhookEventStatus | null
    processedAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type StripeWebhookEventCountAggregateOutputType = {
    id: number
    stripeEventId: number
    eventType: number
    status: number
    processedAt: number
    errorMessage: number
    createdAt: number
    _all: number
  }


  export type StripeWebhookEventMinAggregateInputType = {
    id?: true
    stripeEventId?: true
    eventType?: true
    status?: true
    processedAt?: true
    errorMessage?: true
    createdAt?: true
  }

  export type StripeWebhookEventMaxAggregateInputType = {
    id?: true
    stripeEventId?: true
    eventType?: true
    status?: true
    processedAt?: true
    errorMessage?: true
    createdAt?: true
  }

  export type StripeWebhookEventCountAggregateInputType = {
    id?: true
    stripeEventId?: true
    eventType?: true
    status?: true
    processedAt?: true
    errorMessage?: true
    createdAt?: true
    _all?: true
  }

  export type StripeWebhookEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StripeWebhookEvent to aggregate.
     */
    where?: StripeWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeWebhookEvents to fetch.
     */
    orderBy?: StripeWebhookEventOrderByWithRelationInput | StripeWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StripeWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeWebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StripeWebhookEvents
    **/
    _count?: true | StripeWebhookEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StripeWebhookEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StripeWebhookEventMaxAggregateInputType
  }

  export type GetStripeWebhookEventAggregateType<T extends StripeWebhookEventAggregateArgs> = {
        [P in keyof T & keyof AggregateStripeWebhookEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStripeWebhookEvent[P]>
      : GetScalarType<T[P], AggregateStripeWebhookEvent[P]>
  }




  export type StripeWebhookEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StripeWebhookEventWhereInput
    orderBy?: StripeWebhookEventOrderByWithAggregationInput | StripeWebhookEventOrderByWithAggregationInput[]
    by: StripeWebhookEventScalarFieldEnum[] | StripeWebhookEventScalarFieldEnum
    having?: StripeWebhookEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StripeWebhookEventCountAggregateInputType | true
    _min?: StripeWebhookEventMinAggregateInputType
    _max?: StripeWebhookEventMaxAggregateInputType
  }

  export type StripeWebhookEventGroupByOutputType = {
    id: string
    stripeEventId: string
    eventType: string
    status: $Enums.WebhookEventStatus
    processedAt: Date | null
    errorMessage: string | null
    createdAt: Date
    _count: StripeWebhookEventCountAggregateOutputType | null
    _min: StripeWebhookEventMinAggregateOutputType | null
    _max: StripeWebhookEventMaxAggregateOutputType | null
  }

  type GetStripeWebhookEventGroupByPayload<T extends StripeWebhookEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StripeWebhookEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StripeWebhookEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StripeWebhookEventGroupByOutputType[P]>
            : GetScalarType<T[P], StripeWebhookEventGroupByOutputType[P]>
        }
      >
    >


  export type StripeWebhookEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stripeEventId?: boolean
    eventType?: boolean
    status?: boolean
    processedAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stripeWebhookEvent"]>

  export type StripeWebhookEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stripeEventId?: boolean
    eventType?: boolean
    status?: boolean
    processedAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stripeWebhookEvent"]>

  export type StripeWebhookEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stripeEventId?: boolean
    eventType?: boolean
    status?: boolean
    processedAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stripeWebhookEvent"]>

  export type StripeWebhookEventSelectScalar = {
    id?: boolean
    stripeEventId?: boolean
    eventType?: boolean
    status?: boolean
    processedAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
  }

  export type StripeWebhookEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stripeEventId" | "eventType" | "status" | "processedAt" | "errorMessage" | "createdAt", ExtArgs["result"]["stripeWebhookEvent"]>

  export type $StripeWebhookEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StripeWebhookEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stripeEventId: string
      eventType: string
      status: $Enums.WebhookEventStatus
      processedAt: Date | null
      errorMessage: string | null
      createdAt: Date
    }, ExtArgs["result"]["stripeWebhookEvent"]>
    composites: {}
  }

  type StripeWebhookEventGetPayload<S extends boolean | null | undefined | StripeWebhookEventDefaultArgs> = $Result.GetResult<Prisma.$StripeWebhookEventPayload, S>

  type StripeWebhookEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StripeWebhookEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StripeWebhookEventCountAggregateInputType | true
    }

  export interface StripeWebhookEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StripeWebhookEvent'], meta: { name: 'StripeWebhookEvent' } }
    /**
     * Find zero or one StripeWebhookEvent that matches the filter.
     * @param {StripeWebhookEventFindUniqueArgs} args - Arguments to find a StripeWebhookEvent
     * @example
     * // Get one StripeWebhookEvent
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StripeWebhookEventFindUniqueArgs>(args: SelectSubset<T, StripeWebhookEventFindUniqueArgs<ExtArgs>>): Prisma__StripeWebhookEventClient<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StripeWebhookEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StripeWebhookEventFindUniqueOrThrowArgs} args - Arguments to find a StripeWebhookEvent
     * @example
     * // Get one StripeWebhookEvent
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StripeWebhookEventFindUniqueOrThrowArgs>(args: SelectSubset<T, StripeWebhookEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StripeWebhookEventClient<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StripeWebhookEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeWebhookEventFindFirstArgs} args - Arguments to find a StripeWebhookEvent
     * @example
     * // Get one StripeWebhookEvent
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StripeWebhookEventFindFirstArgs>(args?: SelectSubset<T, StripeWebhookEventFindFirstArgs<ExtArgs>>): Prisma__StripeWebhookEventClient<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StripeWebhookEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeWebhookEventFindFirstOrThrowArgs} args - Arguments to find a StripeWebhookEvent
     * @example
     * // Get one StripeWebhookEvent
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StripeWebhookEventFindFirstOrThrowArgs>(args?: SelectSubset<T, StripeWebhookEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__StripeWebhookEventClient<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StripeWebhookEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeWebhookEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StripeWebhookEvents
     * const stripeWebhookEvents = await prisma.stripeWebhookEvent.findMany()
     * 
     * // Get first 10 StripeWebhookEvents
     * const stripeWebhookEvents = await prisma.stripeWebhookEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stripeWebhookEventWithIdOnly = await prisma.stripeWebhookEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StripeWebhookEventFindManyArgs>(args?: SelectSubset<T, StripeWebhookEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StripeWebhookEvent.
     * @param {StripeWebhookEventCreateArgs} args - Arguments to create a StripeWebhookEvent.
     * @example
     * // Create one StripeWebhookEvent
     * const StripeWebhookEvent = await prisma.stripeWebhookEvent.create({
     *   data: {
     *     // ... data to create a StripeWebhookEvent
     *   }
     * })
     * 
     */
    create<T extends StripeWebhookEventCreateArgs>(args: SelectSubset<T, StripeWebhookEventCreateArgs<ExtArgs>>): Prisma__StripeWebhookEventClient<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StripeWebhookEvents.
     * @param {StripeWebhookEventCreateManyArgs} args - Arguments to create many StripeWebhookEvents.
     * @example
     * // Create many StripeWebhookEvents
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StripeWebhookEventCreateManyArgs>(args?: SelectSubset<T, StripeWebhookEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StripeWebhookEvents and returns the data saved in the database.
     * @param {StripeWebhookEventCreateManyAndReturnArgs} args - Arguments to create many StripeWebhookEvents.
     * @example
     * // Create many StripeWebhookEvents
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StripeWebhookEvents and only return the `id`
     * const stripeWebhookEventWithIdOnly = await prisma.stripeWebhookEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StripeWebhookEventCreateManyAndReturnArgs>(args?: SelectSubset<T, StripeWebhookEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StripeWebhookEvent.
     * @param {StripeWebhookEventDeleteArgs} args - Arguments to delete one StripeWebhookEvent.
     * @example
     * // Delete one StripeWebhookEvent
     * const StripeWebhookEvent = await prisma.stripeWebhookEvent.delete({
     *   where: {
     *     // ... filter to delete one StripeWebhookEvent
     *   }
     * })
     * 
     */
    delete<T extends StripeWebhookEventDeleteArgs>(args: SelectSubset<T, StripeWebhookEventDeleteArgs<ExtArgs>>): Prisma__StripeWebhookEventClient<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StripeWebhookEvent.
     * @param {StripeWebhookEventUpdateArgs} args - Arguments to update one StripeWebhookEvent.
     * @example
     * // Update one StripeWebhookEvent
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StripeWebhookEventUpdateArgs>(args: SelectSubset<T, StripeWebhookEventUpdateArgs<ExtArgs>>): Prisma__StripeWebhookEventClient<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StripeWebhookEvents.
     * @param {StripeWebhookEventDeleteManyArgs} args - Arguments to filter StripeWebhookEvents to delete.
     * @example
     * // Delete a few StripeWebhookEvents
     * const { count } = await prisma.stripeWebhookEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StripeWebhookEventDeleteManyArgs>(args?: SelectSubset<T, StripeWebhookEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StripeWebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeWebhookEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StripeWebhookEvents
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StripeWebhookEventUpdateManyArgs>(args: SelectSubset<T, StripeWebhookEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StripeWebhookEvents and returns the data updated in the database.
     * @param {StripeWebhookEventUpdateManyAndReturnArgs} args - Arguments to update many StripeWebhookEvents.
     * @example
     * // Update many StripeWebhookEvents
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StripeWebhookEvents and only return the `id`
     * const stripeWebhookEventWithIdOnly = await prisma.stripeWebhookEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends StripeWebhookEventUpdateManyAndReturnArgs>(args: SelectSubset<T, StripeWebhookEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StripeWebhookEvent.
     * @param {StripeWebhookEventUpsertArgs} args - Arguments to update or create a StripeWebhookEvent.
     * @example
     * // Update or create a StripeWebhookEvent
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.upsert({
     *   create: {
     *     // ... data to create a StripeWebhookEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StripeWebhookEvent we want to update
     *   }
     * })
     */
    upsert<T extends StripeWebhookEventUpsertArgs>(args: SelectSubset<T, StripeWebhookEventUpsertArgs<ExtArgs>>): Prisma__StripeWebhookEventClient<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StripeWebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeWebhookEventCountArgs} args - Arguments to filter StripeWebhookEvents to count.
     * @example
     * // Count the number of StripeWebhookEvents
     * const count = await prisma.stripeWebhookEvent.count({
     *   where: {
     *     // ... the filter for the StripeWebhookEvents we want to count
     *   }
     * })
    **/
    count<T extends StripeWebhookEventCountArgs>(
      args?: Subset<T, StripeWebhookEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StripeWebhookEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StripeWebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeWebhookEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StripeWebhookEventAggregateArgs>(args: Subset<T, StripeWebhookEventAggregateArgs>): Prisma.PrismaPromise<GetStripeWebhookEventAggregateType<T>>

    /**
     * Group by StripeWebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeWebhookEventGroupByArgs} args - Group by arguments.
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
      T extends StripeWebhookEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StripeWebhookEventGroupByArgs['orderBy'] }
        : { orderBy?: StripeWebhookEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StripeWebhookEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStripeWebhookEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StripeWebhookEvent model
   */
  readonly fields: StripeWebhookEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StripeWebhookEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StripeWebhookEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the StripeWebhookEvent model
   */
  interface StripeWebhookEventFieldRefs {
    readonly id: FieldRef<"StripeWebhookEvent", 'String'>
    readonly stripeEventId: FieldRef<"StripeWebhookEvent", 'String'>
    readonly eventType: FieldRef<"StripeWebhookEvent", 'String'>
    readonly status: FieldRef<"StripeWebhookEvent", 'WebhookEventStatus'>
    readonly processedAt: FieldRef<"StripeWebhookEvent", 'DateTime'>
    readonly errorMessage: FieldRef<"StripeWebhookEvent", 'String'>
    readonly createdAt: FieldRef<"StripeWebhookEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StripeWebhookEvent findUnique
   */
  export type StripeWebhookEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which StripeWebhookEvent to fetch.
     */
    where: StripeWebhookEventWhereUniqueInput
  }

  /**
   * StripeWebhookEvent findUniqueOrThrow
   */
  export type StripeWebhookEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which StripeWebhookEvent to fetch.
     */
    where: StripeWebhookEventWhereUniqueInput
  }

  /**
   * StripeWebhookEvent findFirst
   */
  export type StripeWebhookEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which StripeWebhookEvent to fetch.
     */
    where?: StripeWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeWebhookEvents to fetch.
     */
    orderBy?: StripeWebhookEventOrderByWithRelationInput | StripeWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StripeWebhookEvents.
     */
    cursor?: StripeWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeWebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StripeWebhookEvents.
     */
    distinct?: StripeWebhookEventScalarFieldEnum | StripeWebhookEventScalarFieldEnum[]
  }

  /**
   * StripeWebhookEvent findFirstOrThrow
   */
  export type StripeWebhookEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which StripeWebhookEvent to fetch.
     */
    where?: StripeWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeWebhookEvents to fetch.
     */
    orderBy?: StripeWebhookEventOrderByWithRelationInput | StripeWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StripeWebhookEvents.
     */
    cursor?: StripeWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeWebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StripeWebhookEvents.
     */
    distinct?: StripeWebhookEventScalarFieldEnum | StripeWebhookEventScalarFieldEnum[]
  }

  /**
   * StripeWebhookEvent findMany
   */
  export type StripeWebhookEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which StripeWebhookEvents to fetch.
     */
    where?: StripeWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeWebhookEvents to fetch.
     */
    orderBy?: StripeWebhookEventOrderByWithRelationInput | StripeWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StripeWebhookEvents.
     */
    cursor?: StripeWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeWebhookEvents.
     */
    skip?: number
    distinct?: StripeWebhookEventScalarFieldEnum | StripeWebhookEventScalarFieldEnum[]
  }

  /**
   * StripeWebhookEvent create
   */
  export type StripeWebhookEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * The data needed to create a StripeWebhookEvent.
     */
    data: XOR<StripeWebhookEventCreateInput, StripeWebhookEventUncheckedCreateInput>
  }

  /**
   * StripeWebhookEvent createMany
   */
  export type StripeWebhookEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StripeWebhookEvents.
     */
    data: StripeWebhookEventCreateManyInput | StripeWebhookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StripeWebhookEvent createManyAndReturn
   */
  export type StripeWebhookEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * The data used to create many StripeWebhookEvents.
     */
    data: StripeWebhookEventCreateManyInput | StripeWebhookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StripeWebhookEvent update
   */
  export type StripeWebhookEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * The data needed to update a StripeWebhookEvent.
     */
    data: XOR<StripeWebhookEventUpdateInput, StripeWebhookEventUncheckedUpdateInput>
    /**
     * Choose, which StripeWebhookEvent to update.
     */
    where: StripeWebhookEventWhereUniqueInput
  }

  /**
   * StripeWebhookEvent updateMany
   */
  export type StripeWebhookEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StripeWebhookEvents.
     */
    data: XOR<StripeWebhookEventUpdateManyMutationInput, StripeWebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which StripeWebhookEvents to update
     */
    where?: StripeWebhookEventWhereInput
    /**
     * Limit how many StripeWebhookEvents to update.
     */
    limit?: number
  }

  /**
   * StripeWebhookEvent updateManyAndReturn
   */
  export type StripeWebhookEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * The data used to update StripeWebhookEvents.
     */
    data: XOR<StripeWebhookEventUpdateManyMutationInput, StripeWebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which StripeWebhookEvents to update
     */
    where?: StripeWebhookEventWhereInput
    /**
     * Limit how many StripeWebhookEvents to update.
     */
    limit?: number
  }

  /**
   * StripeWebhookEvent upsert
   */
  export type StripeWebhookEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * The filter to search for the StripeWebhookEvent to update in case it exists.
     */
    where: StripeWebhookEventWhereUniqueInput
    /**
     * In case the StripeWebhookEvent found by the `where` argument doesn't exist, create a new StripeWebhookEvent with this data.
     */
    create: XOR<StripeWebhookEventCreateInput, StripeWebhookEventUncheckedCreateInput>
    /**
     * In case the StripeWebhookEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StripeWebhookEventUpdateInput, StripeWebhookEventUncheckedUpdateInput>
  }

  /**
   * StripeWebhookEvent delete
   */
  export type StripeWebhookEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * Filter which StripeWebhookEvent to delete.
     */
    where: StripeWebhookEventWhereUniqueInput
  }

  /**
   * StripeWebhookEvent deleteMany
   */
  export type StripeWebhookEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StripeWebhookEvents to delete
     */
    where?: StripeWebhookEventWhereInput
    /**
     * Limit how many StripeWebhookEvents to delete.
     */
    limit?: number
  }

  /**
   * StripeWebhookEvent without action
   */
  export type StripeWebhookEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    stripeCustomerId: 'stripeCustomerId',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubscriptionPlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    description: 'description'
  };

  export type SubscriptionPlanScalarFieldEnum = (typeof SubscriptionPlanScalarFieldEnum)[keyof typeof SubscriptionPlanScalarFieldEnum]


  export const SubscriptionPriceScalarFieldEnum: {
    id: 'id',
    subscriptionPlanId: 'subscriptionPlanId',
    billingCycle: 'billingCycle',
    price: 'price',
    currency: 'currency',
    stripePriceId: 'stripePriceId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    monthlyCredits: 'monthlyCredits'
  };

  export type SubscriptionPriceScalarFieldEnum = (typeof SubscriptionPriceScalarFieldEnum)[keyof typeof SubscriptionPriceScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    status: 'status',
    startedAt: 'startedAt',
    currentPeriodStart: 'currentPeriodStart',
    currentPeriodEnd: 'currentPeriodEnd',
    retryCount: 'retryCount',
    firstFailedAt: 'firstFailedAt',
    canceledAt: 'canceledAt',
    endedAt: 'endedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    subscriptionPriceId: 'subscriptionPriceId',
    nextCreditRefillAt: 'nextCreditRefillAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const PaymentMethodScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stripePaymentMethodId: 'stripePaymentMethodId',
    type: 'type',
    brand: 'brand',
    last4: 'last4',
    expMonth: 'expMonth',
    expYear: 'expYear',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum]


  export const CreditAllocationScalarFieldEnum: {
    id: 'id',
    creditAccountId: 'creditAccountId',
    source: 'source',
    totalAmount: 'totalAmount',
    remainingAmount: 'remainingAmount',
    expiresAt: 'expiresAt',
    subscriptionId: 'subscriptionId',
    addonPurchaseId: 'addonPurchaseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CreditAllocationScalarFieldEnum = (typeof CreditAllocationScalarFieldEnum)[keyof typeof CreditAllocationScalarFieldEnum]


  export const CreditAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    addonBalance: 'addonBalance',
    subscriptionBalance: 'subscriptionBalance'
  };

  export type CreditAccountScalarFieldEnum = (typeof CreditAccountScalarFieldEnum)[keyof typeof CreditAccountScalarFieldEnum]


  export const CreditTransactionScalarFieldEnum: {
    id: 'id',
    creditAccountId: 'creditAccountId',
    amount: 'amount',
    type: 'type',
    description: 'description',
    balanceBefore: 'balanceBefore',
    balanceAfter: 'balanceAfter',
    referenceId: 'referenceId',
    createdAt: 'createdAt',
    addonPurchaseId: 'addonPurchaseId',
    creditAllocationId: 'creditAllocationId'
  };

  export type CreditTransactionScalarFieldEnum = (typeof CreditTransactionScalarFieldEnum)[keyof typeof CreditTransactionScalarFieldEnum]


  export const BillingTransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subscriptionId: 'subscriptionId',
    type: 'type',
    status: 'status',
    amount: 'amount',
    currency: 'currency',
    stripePaymentIntentId: 'stripePaymentIntentId',
    stripeInvoiceId: 'stripeInvoiceId',
    stripeChargeId: 'stripeChargeId',
    failureReason: 'failureReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    addonPurchaseId: 'addonPurchaseId'
  };

  export type BillingTransactionScalarFieldEnum = (typeof BillingTransactionScalarFieldEnum)[keyof typeof BillingTransactionScalarFieldEnum]


  export const CreditAddonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    credits: 'credits',
    price: 'price',
    currency: 'currency',
    stripePriceId: 'stripePriceId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CreditAddonScalarFieldEnum = (typeof CreditAddonScalarFieldEnum)[keyof typeof CreditAddonScalarFieldEnum]


  export const AddonPurchaseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    credits: 'credits',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    stripePaymentIntentId: 'stripePaymentIntentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    creditAddonId: 'creditAddonId'
  };

  export type AddonPurchaseScalarFieldEnum = (typeof AddonPurchaseScalarFieldEnum)[keyof typeof AddonPurchaseScalarFieldEnum]


  export const StripeWebhookEventScalarFieldEnum: {
    id: 'id',
    stripeEventId: 'stripeEventId',
    eventType: 'eventType',
    status: 'status',
    processedAt: 'processedAt',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt'
  };

  export type StripeWebhookEventScalarFieldEnum = (typeof StripeWebhookEventScalarFieldEnum)[keyof typeof StripeWebhookEventScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BillingCycle'
   */
  export type EnumBillingCycleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingCycle'>
    


  /**
   * Reference to a field of type 'BillingCycle[]'
   */
  export type ListEnumBillingCycleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingCycle[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'CreditSource'
   */
  export type EnumCreditSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreditSource'>
    


  /**
   * Reference to a field of type 'CreditSource[]'
   */
  export type ListEnumCreditSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreditSource[]'>
    


  /**
   * Reference to a field of type 'CreditTransactionType'
   */
  export type EnumCreditTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreditTransactionType'>
    


  /**
   * Reference to a field of type 'CreditTransactionType[]'
   */
  export type ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreditTransactionType[]'>
    


  /**
   * Reference to a field of type 'BillingTransactionType'
   */
  export type EnumBillingTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingTransactionType'>
    


  /**
   * Reference to a field of type 'BillingTransactionType[]'
   */
  export type ListEnumBillingTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingTransactionType[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'WebhookEventStatus'
   */
  export type EnumWebhookEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebhookEventStatus'>
    


  /**
   * Reference to a field of type 'WebhookEventStatus[]'
   */
  export type ListEnumWebhookEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebhookEventStatus[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    addonPurchases?: AddonPurchaseListRelationFilter
    billingTransactions?: BillingTransactionListRelationFilter
    creditAccount?: XOR<CreditAccountNullableScalarRelationFilter, CreditAccountWhereInput> | null
    paymentMethods?: PaymentMethodListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    password?: SortOrder
    addonPurchases?: AddonPurchaseOrderByRelationAggregateInput
    billingTransactions?: BillingTransactionOrderByRelationAggregateInput
    creditAccount?: CreditAccountOrderByWithRelationInput
    paymentMethods?: PaymentMethodOrderByRelationAggregateInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    stripeCustomerId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    addonPurchases?: AddonPurchaseListRelationFilter
    billingTransactions?: BillingTransactionListRelationFilter
    creditAccount?: XOR<CreditAccountNullableScalarRelationFilter, CreditAccountWhereInput> | null
    paymentMethods?: PaymentMethodListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }, "id" | "email" | "stripeCustomerId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    stripeCustomerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type SubscriptionPlanWhereInput = {
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    id?: StringFilter<"SubscriptionPlan"> | string
    name?: StringFilter<"SubscriptionPlan"> | string
    isActive?: BoolFilter<"SubscriptionPlan"> | boolean
    createdAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    description?: StringNullableFilter<"SubscriptionPlan"> | string | null
    prices?: SubscriptionPriceListRelationFilter
  }

  export type SubscriptionPlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrderInput | SortOrder
    prices?: SubscriptionPriceOrderByRelationAggregateInput
  }

  export type SubscriptionPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    name?: StringFilter<"SubscriptionPlan"> | string
    isActive?: BoolFilter<"SubscriptionPlan"> | boolean
    createdAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    description?: StringNullableFilter<"SubscriptionPlan"> | string | null
    prices?: SubscriptionPriceListRelationFilter
  }, "id">

  export type SubscriptionPlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: SubscriptionPlanCountOrderByAggregateInput
    _max?: SubscriptionPlanMaxOrderByAggregateInput
    _min?: SubscriptionPlanMinOrderByAggregateInput
  }

  export type SubscriptionPlanScalarWhereWithAggregatesInput = {
    AND?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    OR?: SubscriptionPlanScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    name?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    isActive?: BoolWithAggregatesFilter<"SubscriptionPlan"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubscriptionPlan"> | Date | string
    description?: StringNullableWithAggregatesFilter<"SubscriptionPlan"> | string | null
  }

  export type SubscriptionPriceWhereInput = {
    AND?: SubscriptionPriceWhereInput | SubscriptionPriceWhereInput[]
    OR?: SubscriptionPriceWhereInput[]
    NOT?: SubscriptionPriceWhereInput | SubscriptionPriceWhereInput[]
    id?: StringFilter<"SubscriptionPrice"> | string
    subscriptionPlanId?: StringFilter<"SubscriptionPrice"> | string
    billingCycle?: EnumBillingCycleFilter<"SubscriptionPrice"> | $Enums.BillingCycle
    price?: DecimalFilter<"SubscriptionPrice"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"SubscriptionPrice"> | string
    stripePriceId?: StringNullableFilter<"SubscriptionPrice"> | string | null
    isActive?: BoolFilter<"SubscriptionPrice"> | boolean
    createdAt?: DateTimeFilter<"SubscriptionPrice"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPrice"> | Date | string
    monthlyCredits?: IntFilter<"SubscriptionPrice"> | number
    subscriptions?: SubscriptionListRelationFilter
    subscriptionPlan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
  }

  export type SubscriptionPriceOrderByWithRelationInput = {
    id?: SortOrder
    subscriptionPlanId?: SortOrder
    billingCycle?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    stripePriceId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthlyCredits?: SortOrder
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    subscriptionPlan?: SubscriptionPlanOrderByWithRelationInput
  }

  export type SubscriptionPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripePriceId?: string
    AND?: SubscriptionPriceWhereInput | SubscriptionPriceWhereInput[]
    OR?: SubscriptionPriceWhereInput[]
    NOT?: SubscriptionPriceWhereInput | SubscriptionPriceWhereInput[]
    subscriptionPlanId?: StringFilter<"SubscriptionPrice"> | string
    billingCycle?: EnumBillingCycleFilter<"SubscriptionPrice"> | $Enums.BillingCycle
    price?: DecimalFilter<"SubscriptionPrice"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"SubscriptionPrice"> | string
    isActive?: BoolFilter<"SubscriptionPrice"> | boolean
    createdAt?: DateTimeFilter<"SubscriptionPrice"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPrice"> | Date | string
    monthlyCredits?: IntFilter<"SubscriptionPrice"> | number
    subscriptions?: SubscriptionListRelationFilter
    subscriptionPlan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
  }, "id" | "stripePriceId">

  export type SubscriptionPriceOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptionPlanId?: SortOrder
    billingCycle?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    stripePriceId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthlyCredits?: SortOrder
    _count?: SubscriptionPriceCountOrderByAggregateInput
    _avg?: SubscriptionPriceAvgOrderByAggregateInput
    _max?: SubscriptionPriceMaxOrderByAggregateInput
    _min?: SubscriptionPriceMinOrderByAggregateInput
    _sum?: SubscriptionPriceSumOrderByAggregateInput
  }

  export type SubscriptionPriceScalarWhereWithAggregatesInput = {
    AND?: SubscriptionPriceScalarWhereWithAggregatesInput | SubscriptionPriceScalarWhereWithAggregatesInput[]
    OR?: SubscriptionPriceScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionPriceScalarWhereWithAggregatesInput | SubscriptionPriceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionPrice"> | string
    subscriptionPlanId?: StringWithAggregatesFilter<"SubscriptionPrice"> | string
    billingCycle?: EnumBillingCycleWithAggregatesFilter<"SubscriptionPrice"> | $Enums.BillingCycle
    price?: DecimalWithAggregatesFilter<"SubscriptionPrice"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"SubscriptionPrice"> | string
    stripePriceId?: StringNullableWithAggregatesFilter<"SubscriptionPrice"> | string | null
    isActive?: BoolWithAggregatesFilter<"SubscriptionPrice"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SubscriptionPrice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubscriptionPrice"> | Date | string
    monthlyCredits?: IntWithAggregatesFilter<"SubscriptionPrice"> | number
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    stripeSubscriptionId?: StringNullableFilter<"Subscription"> | string | null
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    startedAt?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodStart?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    retryCount?: IntFilter<"Subscription"> | number
    firstFailedAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    canceledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    subscriptionPriceId?: StringFilter<"Subscription"> | string
    nextCreditRefillAt?: DateTimeFilter<"Subscription"> | Date | string
    billingTransactions?: BillingTransactionListRelationFilter
    creditAllocations?: CreditAllocationListRelationFilter
    subscriptionPrice?: XOR<SubscriptionPriceScalarRelationFilter, SubscriptionPriceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    retryCount?: SortOrder
    firstFailedAt?: SortOrderInput | SortOrder
    canceledAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionPriceId?: SortOrder
    nextCreditRefillAt?: SortOrder
    billingTransactions?: BillingTransactionOrderByRelationAggregateInput
    creditAllocations?: CreditAllocationOrderByRelationAggregateInput
    subscriptionPrice?: SubscriptionPriceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeSubscriptionId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    userId?: StringFilter<"Subscription"> | string
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    startedAt?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodStart?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    retryCount?: IntFilter<"Subscription"> | number
    firstFailedAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    canceledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    subscriptionPriceId?: StringFilter<"Subscription"> | string
    nextCreditRefillAt?: DateTimeFilter<"Subscription"> | Date | string
    billingTransactions?: BillingTransactionListRelationFilter
    creditAllocations?: CreditAllocationListRelationFilter
    subscriptionPrice?: XOR<SubscriptionPriceScalarRelationFilter, SubscriptionPriceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "stripeSubscriptionId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    retryCount?: SortOrder
    firstFailedAt?: SortOrderInput | SortOrder
    canceledAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionPriceId?: SortOrder
    nextCreditRefillAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    stripeSubscriptionId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    startedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    currentPeriodStart?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    retryCount?: IntWithAggregatesFilter<"Subscription"> | number
    firstFailedAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    canceledAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    subscriptionPriceId?: StringWithAggregatesFilter<"Subscription"> | string
    nextCreditRefillAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type PaymentMethodWhereInput = {
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    id?: StringFilter<"PaymentMethod"> | string
    userId?: StringFilter<"PaymentMethod"> | string
    stripePaymentMethodId?: StringFilter<"PaymentMethod"> | string
    type?: StringFilter<"PaymentMethod"> | string
    brand?: StringNullableFilter<"PaymentMethod"> | string | null
    last4?: StringNullableFilter<"PaymentMethod"> | string | null
    expMonth?: IntNullableFilter<"PaymentMethod"> | number | null
    expYear?: IntNullableFilter<"PaymentMethod"> | number | null
    isDefault?: BoolFilter<"PaymentMethod"> | boolean
    createdAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentMethodOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripePaymentMethodId?: SortOrder
    type?: SortOrder
    brand?: SortOrderInput | SortOrder
    last4?: SortOrderInput | SortOrder
    expMonth?: SortOrderInput | SortOrder
    expYear?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PaymentMethodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripePaymentMethodId?: string
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    userId?: StringFilter<"PaymentMethod"> | string
    type?: StringFilter<"PaymentMethod"> | string
    brand?: StringNullableFilter<"PaymentMethod"> | string | null
    last4?: StringNullableFilter<"PaymentMethod"> | string | null
    expMonth?: IntNullableFilter<"PaymentMethod"> | number | null
    expYear?: IntNullableFilter<"PaymentMethod"> | number | null
    isDefault?: BoolFilter<"PaymentMethod"> | boolean
    createdAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "stripePaymentMethodId">

  export type PaymentMethodOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripePaymentMethodId?: SortOrder
    type?: SortOrder
    brand?: SortOrderInput | SortOrder
    last4?: SortOrderInput | SortOrder
    expMonth?: SortOrderInput | SortOrder
    expYear?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentMethodCountOrderByAggregateInput
    _avg?: PaymentMethodAvgOrderByAggregateInput
    _max?: PaymentMethodMaxOrderByAggregateInput
    _min?: PaymentMethodMinOrderByAggregateInput
    _sum?: PaymentMethodSumOrderByAggregateInput
  }

  export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    OR?: PaymentMethodScalarWhereWithAggregatesInput[]
    NOT?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentMethod"> | string
    userId?: StringWithAggregatesFilter<"PaymentMethod"> | string
    stripePaymentMethodId?: StringWithAggregatesFilter<"PaymentMethod"> | string
    type?: StringWithAggregatesFilter<"PaymentMethod"> | string
    brand?: StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null
    last4?: StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null
    expMonth?: IntNullableWithAggregatesFilter<"PaymentMethod"> | number | null
    expYear?: IntNullableWithAggregatesFilter<"PaymentMethod"> | number | null
    isDefault?: BoolWithAggregatesFilter<"PaymentMethod"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string
  }

  export type CreditAllocationWhereInput = {
    AND?: CreditAllocationWhereInput | CreditAllocationWhereInput[]
    OR?: CreditAllocationWhereInput[]
    NOT?: CreditAllocationWhereInput | CreditAllocationWhereInput[]
    id?: StringFilter<"CreditAllocation"> | string
    creditAccountId?: StringFilter<"CreditAllocation"> | string
    source?: EnumCreditSourceFilter<"CreditAllocation"> | $Enums.CreditSource
    totalAmount?: IntFilter<"CreditAllocation"> | number
    remainingAmount?: IntFilter<"CreditAllocation"> | number
    expiresAt?: DateTimeNullableFilter<"CreditAllocation"> | Date | string | null
    subscriptionId?: StringNullableFilter<"CreditAllocation"> | string | null
    addonPurchaseId?: StringNullableFilter<"CreditAllocation"> | string | null
    createdAt?: DateTimeFilter<"CreditAllocation"> | Date | string
    updatedAt?: DateTimeFilter<"CreditAllocation"> | Date | string
    addonPurchase?: XOR<AddonPurchaseNullableScalarRelationFilter, AddonPurchaseWhereInput> | null
    creditAccount?: XOR<CreditAccountScalarRelationFilter, CreditAccountWhereInput>
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    transactions?: CreditTransactionListRelationFilter
  }

  export type CreditAllocationOrderByWithRelationInput = {
    id?: SortOrder
    creditAccountId?: SortOrder
    source?: SortOrder
    totalAmount?: SortOrder
    remainingAmount?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    addonPurchaseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addonPurchase?: AddonPurchaseOrderByWithRelationInput
    creditAccount?: CreditAccountOrderByWithRelationInput
    subscription?: SubscriptionOrderByWithRelationInput
    transactions?: CreditTransactionOrderByRelationAggregateInput
  }

  export type CreditAllocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CreditAllocationWhereInput | CreditAllocationWhereInput[]
    OR?: CreditAllocationWhereInput[]
    NOT?: CreditAllocationWhereInput | CreditAllocationWhereInput[]
    creditAccountId?: StringFilter<"CreditAllocation"> | string
    source?: EnumCreditSourceFilter<"CreditAllocation"> | $Enums.CreditSource
    totalAmount?: IntFilter<"CreditAllocation"> | number
    remainingAmount?: IntFilter<"CreditAllocation"> | number
    expiresAt?: DateTimeNullableFilter<"CreditAllocation"> | Date | string | null
    subscriptionId?: StringNullableFilter<"CreditAllocation"> | string | null
    addonPurchaseId?: StringNullableFilter<"CreditAllocation"> | string | null
    createdAt?: DateTimeFilter<"CreditAllocation"> | Date | string
    updatedAt?: DateTimeFilter<"CreditAllocation"> | Date | string
    addonPurchase?: XOR<AddonPurchaseNullableScalarRelationFilter, AddonPurchaseWhereInput> | null
    creditAccount?: XOR<CreditAccountScalarRelationFilter, CreditAccountWhereInput>
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    transactions?: CreditTransactionListRelationFilter
  }, "id">

  export type CreditAllocationOrderByWithAggregationInput = {
    id?: SortOrder
    creditAccountId?: SortOrder
    source?: SortOrder
    totalAmount?: SortOrder
    remainingAmount?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    addonPurchaseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CreditAllocationCountOrderByAggregateInput
    _avg?: CreditAllocationAvgOrderByAggregateInput
    _max?: CreditAllocationMaxOrderByAggregateInput
    _min?: CreditAllocationMinOrderByAggregateInput
    _sum?: CreditAllocationSumOrderByAggregateInput
  }

  export type CreditAllocationScalarWhereWithAggregatesInput = {
    AND?: CreditAllocationScalarWhereWithAggregatesInput | CreditAllocationScalarWhereWithAggregatesInput[]
    OR?: CreditAllocationScalarWhereWithAggregatesInput[]
    NOT?: CreditAllocationScalarWhereWithAggregatesInput | CreditAllocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditAllocation"> | string
    creditAccountId?: StringWithAggregatesFilter<"CreditAllocation"> | string
    source?: EnumCreditSourceWithAggregatesFilter<"CreditAllocation"> | $Enums.CreditSource
    totalAmount?: IntWithAggregatesFilter<"CreditAllocation"> | number
    remainingAmount?: IntWithAggregatesFilter<"CreditAllocation"> | number
    expiresAt?: DateTimeNullableWithAggregatesFilter<"CreditAllocation"> | Date | string | null
    subscriptionId?: StringNullableWithAggregatesFilter<"CreditAllocation"> | string | null
    addonPurchaseId?: StringNullableWithAggregatesFilter<"CreditAllocation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CreditAllocation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CreditAllocation"> | Date | string
  }

  export type CreditAccountWhereInput = {
    AND?: CreditAccountWhereInput | CreditAccountWhereInput[]
    OR?: CreditAccountWhereInput[]
    NOT?: CreditAccountWhereInput | CreditAccountWhereInput[]
    id?: StringFilter<"CreditAccount"> | string
    userId?: StringFilter<"CreditAccount"> | string
    createdAt?: DateTimeFilter<"CreditAccount"> | Date | string
    updatedAt?: DateTimeFilter<"CreditAccount"> | Date | string
    addonBalance?: IntFilter<"CreditAccount"> | number
    subscriptionBalance?: IntFilter<"CreditAccount"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    allocations?: CreditAllocationListRelationFilter
    transactions?: CreditTransactionListRelationFilter
  }

  export type CreditAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addonBalance?: SortOrder
    subscriptionBalance?: SortOrder
    user?: UserOrderByWithRelationInput
    allocations?: CreditAllocationOrderByRelationAggregateInput
    transactions?: CreditTransactionOrderByRelationAggregateInput
  }

  export type CreditAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CreditAccountWhereInput | CreditAccountWhereInput[]
    OR?: CreditAccountWhereInput[]
    NOT?: CreditAccountWhereInput | CreditAccountWhereInput[]
    createdAt?: DateTimeFilter<"CreditAccount"> | Date | string
    updatedAt?: DateTimeFilter<"CreditAccount"> | Date | string
    addonBalance?: IntFilter<"CreditAccount"> | number
    subscriptionBalance?: IntFilter<"CreditAccount"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    allocations?: CreditAllocationListRelationFilter
    transactions?: CreditTransactionListRelationFilter
  }, "id" | "userId">

  export type CreditAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addonBalance?: SortOrder
    subscriptionBalance?: SortOrder
    _count?: CreditAccountCountOrderByAggregateInput
    _avg?: CreditAccountAvgOrderByAggregateInput
    _max?: CreditAccountMaxOrderByAggregateInput
    _min?: CreditAccountMinOrderByAggregateInput
    _sum?: CreditAccountSumOrderByAggregateInput
  }

  export type CreditAccountScalarWhereWithAggregatesInput = {
    AND?: CreditAccountScalarWhereWithAggregatesInput | CreditAccountScalarWhereWithAggregatesInput[]
    OR?: CreditAccountScalarWhereWithAggregatesInput[]
    NOT?: CreditAccountScalarWhereWithAggregatesInput | CreditAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditAccount"> | string
    userId?: StringWithAggregatesFilter<"CreditAccount"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CreditAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CreditAccount"> | Date | string
    addonBalance?: IntWithAggregatesFilter<"CreditAccount"> | number
    subscriptionBalance?: IntWithAggregatesFilter<"CreditAccount"> | number
  }

  export type CreditTransactionWhereInput = {
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    id?: StringFilter<"CreditTransaction"> | string
    creditAccountId?: StringFilter<"CreditTransaction"> | string
    amount?: IntFilter<"CreditTransaction"> | number
    type?: EnumCreditTransactionTypeFilter<"CreditTransaction"> | $Enums.CreditTransactionType
    description?: StringNullableFilter<"CreditTransaction"> | string | null
    balanceBefore?: IntFilter<"CreditTransaction"> | number
    balanceAfter?: IntFilter<"CreditTransaction"> | number
    referenceId?: StringNullableFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    addonPurchaseId?: StringNullableFilter<"CreditTransaction"> | string | null
    creditAllocationId?: StringNullableFilter<"CreditTransaction"> | string | null
    addonPurchase?: XOR<AddonPurchaseNullableScalarRelationFilter, AddonPurchaseWhereInput> | null
    creditAccount?: XOR<CreditAccountScalarRelationFilter, CreditAccountWhereInput>
    creditAllocation?: XOR<CreditAllocationNullableScalarRelationFilter, CreditAllocationWhereInput> | null
  }

  export type CreditTransactionOrderByWithRelationInput = {
    id?: SortOrder
    creditAccountId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    addonPurchaseId?: SortOrderInput | SortOrder
    creditAllocationId?: SortOrderInput | SortOrder
    addonPurchase?: AddonPurchaseOrderByWithRelationInput
    creditAccount?: CreditAccountOrderByWithRelationInput
    creditAllocation?: CreditAllocationOrderByWithRelationInput
  }

  export type CreditTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    creditAccountId?: StringFilter<"CreditTransaction"> | string
    amount?: IntFilter<"CreditTransaction"> | number
    type?: EnumCreditTransactionTypeFilter<"CreditTransaction"> | $Enums.CreditTransactionType
    description?: StringNullableFilter<"CreditTransaction"> | string | null
    balanceBefore?: IntFilter<"CreditTransaction"> | number
    balanceAfter?: IntFilter<"CreditTransaction"> | number
    referenceId?: StringNullableFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    addonPurchaseId?: StringNullableFilter<"CreditTransaction"> | string | null
    creditAllocationId?: StringNullableFilter<"CreditTransaction"> | string | null
    addonPurchase?: XOR<AddonPurchaseNullableScalarRelationFilter, AddonPurchaseWhereInput> | null
    creditAccount?: XOR<CreditAccountScalarRelationFilter, CreditAccountWhereInput>
    creditAllocation?: XOR<CreditAllocationNullableScalarRelationFilter, CreditAllocationWhereInput> | null
  }, "id">

  export type CreditTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    creditAccountId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    addonPurchaseId?: SortOrderInput | SortOrder
    creditAllocationId?: SortOrderInput | SortOrder
    _count?: CreditTransactionCountOrderByAggregateInput
    _avg?: CreditTransactionAvgOrderByAggregateInput
    _max?: CreditTransactionMaxOrderByAggregateInput
    _min?: CreditTransactionMinOrderByAggregateInput
    _sum?: CreditTransactionSumOrderByAggregateInput
  }

  export type CreditTransactionScalarWhereWithAggregatesInput = {
    AND?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    OR?: CreditTransactionScalarWhereWithAggregatesInput[]
    NOT?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditTransaction"> | string
    creditAccountId?: StringWithAggregatesFilter<"CreditTransaction"> | string
    amount?: IntWithAggregatesFilter<"CreditTransaction"> | number
    type?: EnumCreditTransactionTypeWithAggregatesFilter<"CreditTransaction"> | $Enums.CreditTransactionType
    description?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    balanceBefore?: IntWithAggregatesFilter<"CreditTransaction"> | number
    balanceAfter?: IntWithAggregatesFilter<"CreditTransaction"> | number
    referenceId?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CreditTransaction"> | Date | string
    addonPurchaseId?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    creditAllocationId?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
  }

  export type BillingTransactionWhereInput = {
    AND?: BillingTransactionWhereInput | BillingTransactionWhereInput[]
    OR?: BillingTransactionWhereInput[]
    NOT?: BillingTransactionWhereInput | BillingTransactionWhereInput[]
    id?: StringFilter<"BillingTransaction"> | string
    userId?: StringFilter<"BillingTransaction"> | string
    subscriptionId?: StringNullableFilter<"BillingTransaction"> | string | null
    type?: EnumBillingTransactionTypeFilter<"BillingTransaction"> | $Enums.BillingTransactionType
    status?: EnumPaymentStatusFilter<"BillingTransaction"> | $Enums.PaymentStatus
    amount?: DecimalFilter<"BillingTransaction"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"BillingTransaction"> | string
    stripePaymentIntentId?: StringNullableFilter<"BillingTransaction"> | string | null
    stripeInvoiceId?: StringNullableFilter<"BillingTransaction"> | string | null
    stripeChargeId?: StringNullableFilter<"BillingTransaction"> | string | null
    failureReason?: StringNullableFilter<"BillingTransaction"> | string | null
    createdAt?: DateTimeFilter<"BillingTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"BillingTransaction"> | Date | string
    addonPurchaseId?: StringNullableFilter<"BillingTransaction"> | string | null
    addonPurchase?: XOR<AddonPurchaseNullableScalarRelationFilter, AddonPurchaseWhereInput> | null
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BillingTransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    stripeInvoiceId?: SortOrderInput | SortOrder
    stripeChargeId?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addonPurchaseId?: SortOrderInput | SortOrder
    addonPurchase?: AddonPurchaseOrderByWithRelationInput
    subscription?: SubscriptionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BillingTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripePaymentIntentId?: string
    stripeInvoiceId?: string
    AND?: BillingTransactionWhereInput | BillingTransactionWhereInput[]
    OR?: BillingTransactionWhereInput[]
    NOT?: BillingTransactionWhereInput | BillingTransactionWhereInput[]
    userId?: StringFilter<"BillingTransaction"> | string
    subscriptionId?: StringNullableFilter<"BillingTransaction"> | string | null
    type?: EnumBillingTransactionTypeFilter<"BillingTransaction"> | $Enums.BillingTransactionType
    status?: EnumPaymentStatusFilter<"BillingTransaction"> | $Enums.PaymentStatus
    amount?: DecimalFilter<"BillingTransaction"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"BillingTransaction"> | string
    stripeChargeId?: StringNullableFilter<"BillingTransaction"> | string | null
    failureReason?: StringNullableFilter<"BillingTransaction"> | string | null
    createdAt?: DateTimeFilter<"BillingTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"BillingTransaction"> | Date | string
    addonPurchaseId?: StringNullableFilter<"BillingTransaction"> | string | null
    addonPurchase?: XOR<AddonPurchaseNullableScalarRelationFilter, AddonPurchaseWhereInput> | null
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "stripePaymentIntentId" | "stripeInvoiceId">

  export type BillingTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    stripeInvoiceId?: SortOrderInput | SortOrder
    stripeChargeId?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addonPurchaseId?: SortOrderInput | SortOrder
    _count?: BillingTransactionCountOrderByAggregateInput
    _avg?: BillingTransactionAvgOrderByAggregateInput
    _max?: BillingTransactionMaxOrderByAggregateInput
    _min?: BillingTransactionMinOrderByAggregateInput
    _sum?: BillingTransactionSumOrderByAggregateInput
  }

  export type BillingTransactionScalarWhereWithAggregatesInput = {
    AND?: BillingTransactionScalarWhereWithAggregatesInput | BillingTransactionScalarWhereWithAggregatesInput[]
    OR?: BillingTransactionScalarWhereWithAggregatesInput[]
    NOT?: BillingTransactionScalarWhereWithAggregatesInput | BillingTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BillingTransaction"> | string
    userId?: StringWithAggregatesFilter<"BillingTransaction"> | string
    subscriptionId?: StringNullableWithAggregatesFilter<"BillingTransaction"> | string | null
    type?: EnumBillingTransactionTypeWithAggregatesFilter<"BillingTransaction"> | $Enums.BillingTransactionType
    status?: EnumPaymentStatusWithAggregatesFilter<"BillingTransaction"> | $Enums.PaymentStatus
    amount?: DecimalWithAggregatesFilter<"BillingTransaction"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"BillingTransaction"> | string
    stripePaymentIntentId?: StringNullableWithAggregatesFilter<"BillingTransaction"> | string | null
    stripeInvoiceId?: StringNullableWithAggregatesFilter<"BillingTransaction"> | string | null
    stripeChargeId?: StringNullableWithAggregatesFilter<"BillingTransaction"> | string | null
    failureReason?: StringNullableWithAggregatesFilter<"BillingTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BillingTransaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BillingTransaction"> | Date | string
    addonPurchaseId?: StringNullableWithAggregatesFilter<"BillingTransaction"> | string | null
  }

  export type CreditAddonWhereInput = {
    AND?: CreditAddonWhereInput | CreditAddonWhereInput[]
    OR?: CreditAddonWhereInput[]
    NOT?: CreditAddonWhereInput | CreditAddonWhereInput[]
    id?: StringFilter<"CreditAddon"> | string
    name?: StringFilter<"CreditAddon"> | string
    credits?: IntFilter<"CreditAddon"> | number
    price?: DecimalFilter<"CreditAddon"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"CreditAddon"> | string
    stripePriceId?: StringFilter<"CreditAddon"> | string
    isActive?: BoolFilter<"CreditAddon"> | boolean
    createdAt?: DateTimeFilter<"CreditAddon"> | Date | string
    updatedAt?: DateTimeFilter<"CreditAddon"> | Date | string
    purchases?: AddonPurchaseListRelationFilter
  }

  export type CreditAddonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    stripePriceId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    purchases?: AddonPurchaseOrderByRelationAggregateInput
  }

  export type CreditAddonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    stripePriceId?: string
    AND?: CreditAddonWhereInput | CreditAddonWhereInput[]
    OR?: CreditAddonWhereInput[]
    NOT?: CreditAddonWhereInput | CreditAddonWhereInput[]
    credits?: IntFilter<"CreditAddon"> | number
    price?: DecimalFilter<"CreditAddon"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"CreditAddon"> | string
    isActive?: BoolFilter<"CreditAddon"> | boolean
    createdAt?: DateTimeFilter<"CreditAddon"> | Date | string
    updatedAt?: DateTimeFilter<"CreditAddon"> | Date | string
    purchases?: AddonPurchaseListRelationFilter
  }, "id" | "name" | "stripePriceId">

  export type CreditAddonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    stripePriceId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CreditAddonCountOrderByAggregateInput
    _avg?: CreditAddonAvgOrderByAggregateInput
    _max?: CreditAddonMaxOrderByAggregateInput
    _min?: CreditAddonMinOrderByAggregateInput
    _sum?: CreditAddonSumOrderByAggregateInput
  }

  export type CreditAddonScalarWhereWithAggregatesInput = {
    AND?: CreditAddonScalarWhereWithAggregatesInput | CreditAddonScalarWhereWithAggregatesInput[]
    OR?: CreditAddonScalarWhereWithAggregatesInput[]
    NOT?: CreditAddonScalarWhereWithAggregatesInput | CreditAddonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditAddon"> | string
    name?: StringWithAggregatesFilter<"CreditAddon"> | string
    credits?: IntWithAggregatesFilter<"CreditAddon"> | number
    price?: DecimalWithAggregatesFilter<"CreditAddon"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"CreditAddon"> | string
    stripePriceId?: StringWithAggregatesFilter<"CreditAddon"> | string
    isActive?: BoolWithAggregatesFilter<"CreditAddon"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CreditAddon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CreditAddon"> | Date | string
  }

  export type AddonPurchaseWhereInput = {
    AND?: AddonPurchaseWhereInput | AddonPurchaseWhereInput[]
    OR?: AddonPurchaseWhereInput[]
    NOT?: AddonPurchaseWhereInput | AddonPurchaseWhereInput[]
    id?: StringFilter<"AddonPurchase"> | string
    userId?: StringFilter<"AddonPurchase"> | string
    credits?: IntFilter<"AddonPurchase"> | number
    amount?: DecimalFilter<"AddonPurchase"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"AddonPurchase"> | string
    status?: EnumPaymentStatusFilter<"AddonPurchase"> | $Enums.PaymentStatus
    stripePaymentIntentId?: StringNullableFilter<"AddonPurchase"> | string | null
    createdAt?: DateTimeFilter<"AddonPurchase"> | Date | string
    updatedAt?: DateTimeFilter<"AddonPurchase"> | Date | string
    creditAddonId?: StringFilter<"AddonPurchase"> | string
    addon?: XOR<CreditAddonScalarRelationFilter, CreditAddonWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    billingTransactions?: BillingTransactionListRelationFilter
    creditAllocations?: CreditAllocationListRelationFilter
    creditTransactions?: CreditTransactionListRelationFilter
  }

  export type AddonPurchaseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    credits?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creditAddonId?: SortOrder
    addon?: CreditAddonOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    billingTransactions?: BillingTransactionOrderByRelationAggregateInput
    creditAllocations?: CreditAllocationOrderByRelationAggregateInput
    creditTransactions?: CreditTransactionOrderByRelationAggregateInput
  }

  export type AddonPurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripePaymentIntentId?: string
    AND?: AddonPurchaseWhereInput | AddonPurchaseWhereInput[]
    OR?: AddonPurchaseWhereInput[]
    NOT?: AddonPurchaseWhereInput | AddonPurchaseWhereInput[]
    userId?: StringFilter<"AddonPurchase"> | string
    credits?: IntFilter<"AddonPurchase"> | number
    amount?: DecimalFilter<"AddonPurchase"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"AddonPurchase"> | string
    status?: EnumPaymentStatusFilter<"AddonPurchase"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"AddonPurchase"> | Date | string
    updatedAt?: DateTimeFilter<"AddonPurchase"> | Date | string
    creditAddonId?: StringFilter<"AddonPurchase"> | string
    addon?: XOR<CreditAddonScalarRelationFilter, CreditAddonWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    billingTransactions?: BillingTransactionListRelationFilter
    creditAllocations?: CreditAllocationListRelationFilter
    creditTransactions?: CreditTransactionListRelationFilter
  }, "id" | "stripePaymentIntentId">

  export type AddonPurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    credits?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creditAddonId?: SortOrder
    _count?: AddonPurchaseCountOrderByAggregateInput
    _avg?: AddonPurchaseAvgOrderByAggregateInput
    _max?: AddonPurchaseMaxOrderByAggregateInput
    _min?: AddonPurchaseMinOrderByAggregateInput
    _sum?: AddonPurchaseSumOrderByAggregateInput
  }

  export type AddonPurchaseScalarWhereWithAggregatesInput = {
    AND?: AddonPurchaseScalarWhereWithAggregatesInput | AddonPurchaseScalarWhereWithAggregatesInput[]
    OR?: AddonPurchaseScalarWhereWithAggregatesInput[]
    NOT?: AddonPurchaseScalarWhereWithAggregatesInput | AddonPurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AddonPurchase"> | string
    userId?: StringWithAggregatesFilter<"AddonPurchase"> | string
    credits?: IntWithAggregatesFilter<"AddonPurchase"> | number
    amount?: DecimalWithAggregatesFilter<"AddonPurchase"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"AddonPurchase"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"AddonPurchase"> | $Enums.PaymentStatus
    stripePaymentIntentId?: StringNullableWithAggregatesFilter<"AddonPurchase"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AddonPurchase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AddonPurchase"> | Date | string
    creditAddonId?: StringWithAggregatesFilter<"AddonPurchase"> | string
  }

  export type StripeWebhookEventWhereInput = {
    AND?: StripeWebhookEventWhereInput | StripeWebhookEventWhereInput[]
    OR?: StripeWebhookEventWhereInput[]
    NOT?: StripeWebhookEventWhereInput | StripeWebhookEventWhereInput[]
    id?: StringFilter<"StripeWebhookEvent"> | string
    stripeEventId?: StringFilter<"StripeWebhookEvent"> | string
    eventType?: StringFilter<"StripeWebhookEvent"> | string
    status?: EnumWebhookEventStatusFilter<"StripeWebhookEvent"> | $Enums.WebhookEventStatus
    processedAt?: DateTimeNullableFilter<"StripeWebhookEvent"> | Date | string | null
    errorMessage?: StringNullableFilter<"StripeWebhookEvent"> | string | null
    createdAt?: DateTimeFilter<"StripeWebhookEvent"> | Date | string
  }

  export type StripeWebhookEventOrderByWithRelationInput = {
    id?: SortOrder
    stripeEventId?: SortOrder
    eventType?: SortOrder
    status?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type StripeWebhookEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeEventId?: string
    AND?: StripeWebhookEventWhereInput | StripeWebhookEventWhereInput[]
    OR?: StripeWebhookEventWhereInput[]
    NOT?: StripeWebhookEventWhereInput | StripeWebhookEventWhereInput[]
    eventType?: StringFilter<"StripeWebhookEvent"> | string
    status?: EnumWebhookEventStatusFilter<"StripeWebhookEvent"> | $Enums.WebhookEventStatus
    processedAt?: DateTimeNullableFilter<"StripeWebhookEvent"> | Date | string | null
    errorMessage?: StringNullableFilter<"StripeWebhookEvent"> | string | null
    createdAt?: DateTimeFilter<"StripeWebhookEvent"> | Date | string
  }, "id" | "stripeEventId">

  export type StripeWebhookEventOrderByWithAggregationInput = {
    id?: SortOrder
    stripeEventId?: SortOrder
    eventType?: SortOrder
    status?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StripeWebhookEventCountOrderByAggregateInput
    _max?: StripeWebhookEventMaxOrderByAggregateInput
    _min?: StripeWebhookEventMinOrderByAggregateInput
  }

  export type StripeWebhookEventScalarWhereWithAggregatesInput = {
    AND?: StripeWebhookEventScalarWhereWithAggregatesInput | StripeWebhookEventScalarWhereWithAggregatesInput[]
    OR?: StripeWebhookEventScalarWhereWithAggregatesInput[]
    NOT?: StripeWebhookEventScalarWhereWithAggregatesInput | StripeWebhookEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StripeWebhookEvent"> | string
    stripeEventId?: StringWithAggregatesFilter<"StripeWebhookEvent"> | string
    eventType?: StringWithAggregatesFilter<"StripeWebhookEvent"> | string
    status?: EnumWebhookEventStatusWithAggregatesFilter<"StripeWebhookEvent"> | $Enums.WebhookEventStatus
    processedAt?: DateTimeNullableWithAggregatesFilter<"StripeWebhookEvent"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"StripeWebhookEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StripeWebhookEvent"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId?: string | null
    password: string
    addonPurchases?: AddonPurchaseCreateNestedManyWithoutUserInput
    billingTransactions?: BillingTransactionCreateNestedManyWithoutUserInput
    creditAccount?: CreditAccountCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId?: string | null
    password: string
    addonPurchases?: AddonPurchaseUncheckedCreateNestedManyWithoutUserInput
    billingTransactions?: BillingTransactionUncheckedCreateNestedManyWithoutUserInput
    creditAccount?: CreditAccountUncheckedCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    addonPurchases?: AddonPurchaseUpdateManyWithoutUserNestedInput
    billingTransactions?: BillingTransactionUpdateManyWithoutUserNestedInput
    creditAccount?: CreditAccountUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    addonPurchases?: AddonPurchaseUncheckedUpdateManyWithoutUserNestedInput
    billingTransactions?: BillingTransactionUncheckedUpdateManyWithoutUserNestedInput
    creditAccount?: CreditAccountUncheckedUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId?: string | null
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionPlanCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    prices?: SubscriptionPriceCreateNestedManyWithoutSubscriptionPlanInput
  }

  export type SubscriptionPlanUncheckedCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    prices?: SubscriptionPriceUncheckedCreateNestedManyWithoutSubscriptionPlanInput
  }

  export type SubscriptionPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prices?: SubscriptionPriceUpdateManyWithoutSubscriptionPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prices?: SubscriptionPriceUncheckedUpdateManyWithoutSubscriptionPlanNestedInput
  }

  export type SubscriptionPlanCreateManyInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
  }

  export type SubscriptionPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionPriceCreateInput = {
    id?: string
    billingCycle: $Enums.BillingCycle
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePriceId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyCredits: number
    subscriptions?: SubscriptionCreateNestedManyWithoutSubscriptionPriceInput
    subscriptionPlan: SubscriptionPlanCreateNestedOneWithoutPricesInput
  }

  export type SubscriptionPriceUncheckedCreateInput = {
    id?: string
    subscriptionPlanId: string
    billingCycle: $Enums.BillingCycle
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePriceId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyCredits: number
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutSubscriptionPriceInput
  }

  export type SubscriptionPriceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCredits?: IntFieldUpdateOperationsInput | number
    subscriptions?: SubscriptionUpdateManyWithoutSubscriptionPriceNestedInput
    subscriptionPlan?: SubscriptionPlanUpdateOneRequiredWithoutPricesNestedInput
  }

  export type SubscriptionPriceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionPlanId?: StringFieldUpdateOperationsInput | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCredits?: IntFieldUpdateOperationsInput | number
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutSubscriptionPriceNestedInput
  }

  export type SubscriptionPriceCreateManyInput = {
    id?: string
    subscriptionPlanId: string
    billingCycle: $Enums.BillingCycle
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePriceId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyCredits: number
  }

  export type SubscriptionPriceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCredits?: IntFieldUpdateOperationsInput | number
  }

  export type SubscriptionPriceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionPlanId?: StringFieldUpdateOperationsInput | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCredits?: IntFieldUpdateOperationsInput | number
  }

  export type SubscriptionCreateInput = {
    id?: string
    stripeSubscriptionId?: string | null
    status?: $Enums.SubscriptionStatus
    startedAt: Date | string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    retryCount?: number
    firstFailedAt?: Date | string | null
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nextCreditRefillAt: Date | string
    billingTransactions?: BillingTransactionCreateNestedManyWithoutSubscriptionInput
    creditAllocations?: CreditAllocationCreateNestedManyWithoutSubscriptionInput
    subscriptionPrice: SubscriptionPriceCreateNestedOneWithoutSubscriptionsInput
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    stripeSubscriptionId?: string | null
    status?: $Enums.SubscriptionStatus
    startedAt: Date | string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    retryCount?: number
    firstFailedAt?: Date | string | null
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionPriceId: string
    nextCreditRefillAt: Date | string
    billingTransactions?: BillingTransactionUncheckedCreateNestedManyWithoutSubscriptionInput
    creditAllocations?: CreditAllocationUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    retryCount?: IntFieldUpdateOperationsInput | number
    firstFailedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextCreditRefillAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billingTransactions?: BillingTransactionUpdateManyWithoutSubscriptionNestedInput
    creditAllocations?: CreditAllocationUpdateManyWithoutSubscriptionNestedInput
    subscriptionPrice?: SubscriptionPriceUpdateOneRequiredWithoutSubscriptionsNestedInput
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    retryCount?: IntFieldUpdateOperationsInput | number
    firstFailedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionPriceId?: StringFieldUpdateOperationsInput | string
    nextCreditRefillAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billingTransactions?: BillingTransactionUncheckedUpdateManyWithoutSubscriptionNestedInput
    creditAllocations?: CreditAllocationUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    stripeSubscriptionId?: string | null
    status?: $Enums.SubscriptionStatus
    startedAt: Date | string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    retryCount?: number
    firstFailedAt?: Date | string | null
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionPriceId: string
    nextCreditRefillAt: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    retryCount?: IntFieldUpdateOperationsInput | number
    firstFailedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextCreditRefillAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    retryCount?: IntFieldUpdateOperationsInput | number
    firstFailedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionPriceId?: StringFieldUpdateOperationsInput | string
    nextCreditRefillAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodCreateInput = {
    id?: string
    stripePaymentMethodId: string
    type: string
    brand?: string | null
    last4?: string | null
    expMonth?: number | null
    expYear?: number | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentMethodsInput
  }

  export type PaymentMethodUncheckedCreateInput = {
    id?: string
    userId: string
    stripePaymentMethodId: string
    type: string
    brand?: string | null
    last4?: string | null
    expMonth?: number | null
    expYear?: number | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripePaymentMethodId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    expMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expYear?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentMethodsNestedInput
  }

  export type PaymentMethodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripePaymentMethodId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    expMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expYear?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodCreateManyInput = {
    id?: string
    userId: string
    stripePaymentMethodId: string
    type: string
    brand?: string | null
    last4?: string | null
    expMonth?: number | null
    expYear?: number | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripePaymentMethodId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    expMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expYear?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripePaymentMethodId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    expMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expYear?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditAllocationCreateInput = {
    id?: string
    source: $Enums.CreditSource
    totalAmount: number
    remainingAmount: number
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addonPurchase?: AddonPurchaseCreateNestedOneWithoutCreditAllocationsInput
    creditAccount: CreditAccountCreateNestedOneWithoutAllocationsInput
    subscription?: SubscriptionCreateNestedOneWithoutCreditAllocationsInput
    transactions?: CreditTransactionCreateNestedManyWithoutCreditAllocationInput
  }

  export type CreditAllocationUncheckedCreateInput = {
    id?: string
    creditAccountId: string
    source: $Enums.CreditSource
    totalAmount: number
    remainingAmount: number
    expiresAt?: Date | string | null
    subscriptionId?: string | null
    addonPurchaseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutCreditAllocationInput
  }

  export type CreditAllocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumCreditSourceFieldUpdateOperationsInput | $Enums.CreditSource
    totalAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchase?: AddonPurchaseUpdateOneWithoutCreditAllocationsNestedInput
    creditAccount?: CreditAccountUpdateOneRequiredWithoutAllocationsNestedInput
    subscription?: SubscriptionUpdateOneWithoutCreditAllocationsNestedInput
    transactions?: CreditTransactionUpdateManyWithoutCreditAllocationNestedInput
  }

  export type CreditAllocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    source?: EnumCreditSourceFieldUpdateOperationsInput | $Enums.CreditSource
    totalAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    addonPurchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: CreditTransactionUncheckedUpdateManyWithoutCreditAllocationNestedInput
  }

  export type CreditAllocationCreateManyInput = {
    id?: string
    creditAccountId: string
    source: $Enums.CreditSource
    totalAmount: number
    remainingAmount: number
    expiresAt?: Date | string | null
    subscriptionId?: string | null
    addonPurchaseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditAllocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumCreditSourceFieldUpdateOperationsInput | $Enums.CreditSource
    totalAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditAllocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    source?: EnumCreditSourceFieldUpdateOperationsInput | $Enums.CreditSource
    totalAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    addonPurchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditAccountCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addonBalance?: number
    subscriptionBalance?: number
    user: UserCreateNestedOneWithoutCreditAccountInput
    allocations?: CreditAllocationCreateNestedManyWithoutCreditAccountInput
    transactions?: CreditTransactionCreateNestedManyWithoutCreditAccountInput
  }

  export type CreditAccountUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addonBalance?: number
    subscriptionBalance?: number
    allocations?: CreditAllocationUncheckedCreateNestedManyWithoutCreditAccountInput
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutCreditAccountInput
  }

  export type CreditAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonBalance?: IntFieldUpdateOperationsInput | number
    subscriptionBalance?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCreditAccountNestedInput
    allocations?: CreditAllocationUpdateManyWithoutCreditAccountNestedInput
    transactions?: CreditTransactionUpdateManyWithoutCreditAccountNestedInput
  }

  export type CreditAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonBalance?: IntFieldUpdateOperationsInput | number
    subscriptionBalance?: IntFieldUpdateOperationsInput | number
    allocations?: CreditAllocationUncheckedUpdateManyWithoutCreditAccountNestedInput
    transactions?: CreditTransactionUncheckedUpdateManyWithoutCreditAccountNestedInput
  }

  export type CreditAccountCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addonBalance?: number
    subscriptionBalance?: number
  }

  export type CreditAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonBalance?: IntFieldUpdateOperationsInput | number
    subscriptionBalance?: IntFieldUpdateOperationsInput | number
  }

  export type CreditAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonBalance?: IntFieldUpdateOperationsInput | number
    subscriptionBalance?: IntFieldUpdateOperationsInput | number
  }

  export type CreditTransactionCreateInput = {
    id?: string
    amount: number
    type: $Enums.CreditTransactionType
    description?: string | null
    balanceBefore: number
    balanceAfter: number
    referenceId?: string | null
    createdAt?: Date | string
    addonPurchase?: AddonPurchaseCreateNestedOneWithoutCreditTransactionsInput
    creditAccount: CreditAccountCreateNestedOneWithoutTransactionsInput
    creditAllocation?: CreditAllocationCreateNestedOneWithoutTransactionsInput
  }

  export type CreditTransactionUncheckedCreateInput = {
    id?: string
    creditAccountId: string
    amount: number
    type: $Enums.CreditTransactionType
    description?: string | null
    balanceBefore: number
    balanceAfter: number
    referenceId?: string | null
    createdAt?: Date | string
    addonPurchaseId?: string | null
    creditAllocationId?: string | null
  }

  export type CreditTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    balanceBefore?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchase?: AddonPurchaseUpdateOneWithoutCreditTransactionsNestedInput
    creditAccount?: CreditAccountUpdateOneRequiredWithoutTransactionsNestedInput
    creditAllocation?: CreditAllocationUpdateOneWithoutTransactionsNestedInput
  }

  export type CreditTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    balanceBefore?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    creditAllocationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreditTransactionCreateManyInput = {
    id?: string
    creditAccountId: string
    amount: number
    type: $Enums.CreditTransactionType
    description?: string | null
    balanceBefore: number
    balanceAfter: number
    referenceId?: string | null
    createdAt?: Date | string
    addonPurchaseId?: string | null
    creditAllocationId?: string | null
  }

  export type CreditTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    balanceBefore?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    balanceBefore?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    creditAllocationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BillingTransactionCreateInput = {
    id?: string
    type: $Enums.BillingTransactionType
    status?: $Enums.PaymentStatus
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePaymentIntentId?: string | null
    stripeInvoiceId?: string | null
    stripeChargeId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addonPurchase?: AddonPurchaseCreateNestedOneWithoutBillingTransactionsInput
    subscription?: SubscriptionCreateNestedOneWithoutBillingTransactionsInput
    user: UserCreateNestedOneWithoutBillingTransactionsInput
  }

  export type BillingTransactionUncheckedCreateInput = {
    id?: string
    userId: string
    subscriptionId?: string | null
    type: $Enums.BillingTransactionType
    status?: $Enums.PaymentStatus
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePaymentIntentId?: string | null
    stripeInvoiceId?: string | null
    stripeChargeId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addonPurchaseId?: string | null
  }

  export type BillingTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBillingTransactionTypeFieldUpdateOperationsInput | $Enums.BillingTransactionType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchase?: AddonPurchaseUpdateOneWithoutBillingTransactionsNestedInput
    subscription?: SubscriptionUpdateOneWithoutBillingTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutBillingTransactionsNestedInput
  }

  export type BillingTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumBillingTransactionTypeFieldUpdateOperationsInput | $Enums.BillingTransactionType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchaseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BillingTransactionCreateManyInput = {
    id?: string
    userId: string
    subscriptionId?: string | null
    type: $Enums.BillingTransactionType
    status?: $Enums.PaymentStatus
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePaymentIntentId?: string | null
    stripeInvoiceId?: string | null
    stripeChargeId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addonPurchaseId?: string | null
  }

  export type BillingTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBillingTransactionTypeFieldUpdateOperationsInput | $Enums.BillingTransactionType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumBillingTransactionTypeFieldUpdateOperationsInput | $Enums.BillingTransactionType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchaseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreditAddonCreateInput = {
    id?: string
    name: string
    credits: number
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePriceId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: AddonPurchaseCreateNestedManyWithoutAddonInput
  }

  export type CreditAddonUncheckedCreateInput = {
    id?: string
    name: string
    credits: number
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePriceId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: AddonPurchaseUncheckedCreateNestedManyWithoutAddonInput
  }

  export type CreditAddonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: AddonPurchaseUpdateManyWithoutAddonNestedInput
  }

  export type CreditAddonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: AddonPurchaseUncheckedUpdateManyWithoutAddonNestedInput
  }

  export type CreditAddonCreateManyInput = {
    id?: string
    name: string
    credits: number
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePriceId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditAddonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditAddonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddonPurchaseCreateInput = {
    id?: string
    credits: number
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addon: CreditAddonCreateNestedOneWithoutPurchasesInput
    user: UserCreateNestedOneWithoutAddonPurchasesInput
    billingTransactions?: BillingTransactionCreateNestedManyWithoutAddonPurchaseInput
    creditAllocations?: CreditAllocationCreateNestedManyWithoutAddonPurchaseInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutAddonPurchaseInput
  }

  export type AddonPurchaseUncheckedCreateInput = {
    id?: string
    userId: string
    credits: number
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creditAddonId: string
    billingTransactions?: BillingTransactionUncheckedCreateNestedManyWithoutAddonPurchaseInput
    creditAllocations?: CreditAllocationUncheckedCreateNestedManyWithoutAddonPurchaseInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutAddonPurchaseInput
  }

  export type AddonPurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addon?: CreditAddonUpdateOneRequiredWithoutPurchasesNestedInput
    user?: UserUpdateOneRequiredWithoutAddonPurchasesNestedInput
    billingTransactions?: BillingTransactionUpdateManyWithoutAddonPurchaseNestedInput
    creditAllocations?: CreditAllocationUpdateManyWithoutAddonPurchaseNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutAddonPurchaseNestedInput
  }

  export type AddonPurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditAddonId?: StringFieldUpdateOperationsInput | string
    billingTransactions?: BillingTransactionUncheckedUpdateManyWithoutAddonPurchaseNestedInput
    creditAllocations?: CreditAllocationUncheckedUpdateManyWithoutAddonPurchaseNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutAddonPurchaseNestedInput
  }

  export type AddonPurchaseCreateManyInput = {
    id?: string
    userId: string
    credits: number
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creditAddonId: string
  }

  export type AddonPurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddonPurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditAddonId?: StringFieldUpdateOperationsInput | string
  }

  export type StripeWebhookEventCreateInput = {
    id?: string
    stripeEventId: string
    eventType: string
    status?: $Enums.WebhookEventStatus
    processedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type StripeWebhookEventUncheckedCreateInput = {
    id?: string
    stripeEventId: string
    eventType: string
    status?: $Enums.WebhookEventStatus
    processedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type StripeWebhookEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeEventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    status?: EnumWebhookEventStatusFieldUpdateOperationsInput | $Enums.WebhookEventStatus
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripeWebhookEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeEventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    status?: EnumWebhookEventStatusFieldUpdateOperationsInput | $Enums.WebhookEventStatus
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripeWebhookEventCreateManyInput = {
    id?: string
    stripeEventId: string
    eventType: string
    status?: $Enums.WebhookEventStatus
    processedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type StripeWebhookEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeEventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    status?: EnumWebhookEventStatusFieldUpdateOperationsInput | $Enums.WebhookEventStatus
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripeWebhookEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeEventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    status?: EnumWebhookEventStatusFieldUpdateOperationsInput | $Enums.WebhookEventStatus
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AddonPurchaseListRelationFilter = {
    every?: AddonPurchaseWhereInput
    some?: AddonPurchaseWhereInput
    none?: AddonPurchaseWhereInput
  }

  export type BillingTransactionListRelationFilter = {
    every?: BillingTransactionWhereInput
    some?: BillingTransactionWhereInput
    none?: BillingTransactionWhereInput
  }

  export type CreditAccountNullableScalarRelationFilter = {
    is?: CreditAccountWhereInput | null
    isNot?: CreditAccountWhereInput | null
  }

  export type PaymentMethodListRelationFilter = {
    every?: PaymentMethodWhereInput
    some?: PaymentMethodWhereInput
    none?: PaymentMethodWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AddonPurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillingTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentMethodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stripeCustomerId?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stripeCustomerId?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stripeCustomerId?: SortOrder
    password?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SubscriptionPriceListRelationFilter = {
    every?: SubscriptionPriceWhereInput
    some?: SubscriptionPriceWhereInput
    none?: SubscriptionPriceWhereInput
  }

  export type SubscriptionPriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionPlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
  }

  export type SubscriptionPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
  }

  export type SubscriptionPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumBillingCycleFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingCycle | EnumBillingCycleFieldRefInput<$PrismaModel>
    in?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingCycleFilter<$PrismaModel> | $Enums.BillingCycle
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type SubscriptionPlanScalarRelationFilter = {
    is?: SubscriptionPlanWhereInput
    isNot?: SubscriptionPlanWhereInput
  }

  export type SubscriptionPriceCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptionPlanId?: SortOrder
    billingCycle?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    stripePriceId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthlyCredits?: SortOrder
  }

  export type SubscriptionPriceAvgOrderByAggregateInput = {
    price?: SortOrder
    monthlyCredits?: SortOrder
  }

  export type SubscriptionPriceMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptionPlanId?: SortOrder
    billingCycle?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    stripePriceId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthlyCredits?: SortOrder
  }

  export type SubscriptionPriceMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptionPlanId?: SortOrder
    billingCycle?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    stripePriceId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthlyCredits?: SortOrder
  }

  export type SubscriptionPriceSumOrderByAggregateInput = {
    price?: SortOrder
    monthlyCredits?: SortOrder
  }

  export type EnumBillingCycleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingCycle | EnumBillingCycleFieldRefInput<$PrismaModel>
    in?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingCycleWithAggregatesFilter<$PrismaModel> | $Enums.BillingCycle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingCycleFilter<$PrismaModel>
    _max?: NestedEnumBillingCycleFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CreditAllocationListRelationFilter = {
    every?: CreditAllocationWhereInput
    some?: CreditAllocationWhereInput
    none?: CreditAllocationWhereInput
  }

  export type SubscriptionPriceScalarRelationFilter = {
    is?: SubscriptionPriceWhereInput
    isNot?: SubscriptionPriceWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CreditAllocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    retryCount?: SortOrder
    firstFailedAt?: SortOrder
    canceledAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionPriceId?: SortOrder
    nextCreditRefillAt?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    retryCount?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    retryCount?: SortOrder
    firstFailedAt?: SortOrder
    canceledAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionPriceId?: SortOrder
    nextCreditRefillAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    retryCount?: SortOrder
    firstFailedAt?: SortOrder
    canceledAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionPriceId?: SortOrder
    nextCreditRefillAt?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    retryCount?: SortOrder
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PaymentMethodCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripePaymentMethodId?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    last4?: SortOrder
    expMonth?: SortOrder
    expYear?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodAvgOrderByAggregateInput = {
    expMonth?: SortOrder
    expYear?: SortOrder
  }

  export type PaymentMethodMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripePaymentMethodId?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    last4?: SortOrder
    expMonth?: SortOrder
    expYear?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripePaymentMethodId?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    last4?: SortOrder
    expMonth?: SortOrder
    expYear?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodSumOrderByAggregateInput = {
    expMonth?: SortOrder
    expYear?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumCreditSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditSource | EnumCreditSourceFieldRefInput<$PrismaModel>
    in?: $Enums.CreditSource[] | ListEnumCreditSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditSource[] | ListEnumCreditSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditSourceFilter<$PrismaModel> | $Enums.CreditSource
  }

  export type AddonPurchaseNullableScalarRelationFilter = {
    is?: AddonPurchaseWhereInput | null
    isNot?: AddonPurchaseWhereInput | null
  }

  export type CreditAccountScalarRelationFilter = {
    is?: CreditAccountWhereInput
    isNot?: CreditAccountWhereInput
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type CreditTransactionListRelationFilter = {
    every?: CreditTransactionWhereInput
    some?: CreditTransactionWhereInput
    none?: CreditTransactionWhereInput
  }

  export type CreditTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreditAllocationCountOrderByAggregateInput = {
    id?: SortOrder
    creditAccountId?: SortOrder
    source?: SortOrder
    totalAmount?: SortOrder
    remainingAmount?: SortOrder
    expiresAt?: SortOrder
    subscriptionId?: SortOrder
    addonPurchaseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditAllocationAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    remainingAmount?: SortOrder
  }

  export type CreditAllocationMaxOrderByAggregateInput = {
    id?: SortOrder
    creditAccountId?: SortOrder
    source?: SortOrder
    totalAmount?: SortOrder
    remainingAmount?: SortOrder
    expiresAt?: SortOrder
    subscriptionId?: SortOrder
    addonPurchaseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditAllocationMinOrderByAggregateInput = {
    id?: SortOrder
    creditAccountId?: SortOrder
    source?: SortOrder
    totalAmount?: SortOrder
    remainingAmount?: SortOrder
    expiresAt?: SortOrder
    subscriptionId?: SortOrder
    addonPurchaseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditAllocationSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    remainingAmount?: SortOrder
  }

  export type EnumCreditSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditSource | EnumCreditSourceFieldRefInput<$PrismaModel>
    in?: $Enums.CreditSource[] | ListEnumCreditSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditSource[] | ListEnumCreditSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditSourceWithAggregatesFilter<$PrismaModel> | $Enums.CreditSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreditSourceFilter<$PrismaModel>
    _max?: NestedEnumCreditSourceFilter<$PrismaModel>
  }

  export type CreditAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addonBalance?: SortOrder
    subscriptionBalance?: SortOrder
  }

  export type CreditAccountAvgOrderByAggregateInput = {
    addonBalance?: SortOrder
    subscriptionBalance?: SortOrder
  }

  export type CreditAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addonBalance?: SortOrder
    subscriptionBalance?: SortOrder
  }

  export type CreditAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addonBalance?: SortOrder
    subscriptionBalance?: SortOrder
  }

  export type CreditAccountSumOrderByAggregateInput = {
    addonBalance?: SortOrder
    subscriptionBalance?: SortOrder
  }

  export type EnumCreditTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditTransactionType | EnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTransactionTypeFilter<$PrismaModel> | $Enums.CreditTransactionType
  }

  export type CreditAllocationNullableScalarRelationFilter = {
    is?: CreditAllocationWhereInput | null
    isNot?: CreditAllocationWhereInput | null
  }

  export type CreditTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    creditAccountId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    referenceId?: SortOrder
    createdAt?: SortOrder
    addonPurchaseId?: SortOrder
    creditAllocationId?: SortOrder
  }

  export type CreditTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
  }

  export type CreditTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    creditAccountId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    referenceId?: SortOrder
    createdAt?: SortOrder
    addonPurchaseId?: SortOrder
    creditAllocationId?: SortOrder
  }

  export type CreditTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    creditAccountId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    referenceId?: SortOrder
    createdAt?: SortOrder
    addonPurchaseId?: SortOrder
    creditAllocationId?: SortOrder
  }

  export type CreditTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
  }

  export type EnumCreditTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditTransactionType | EnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CreditTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreditTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumCreditTransactionTypeFilter<$PrismaModel>
  }

  export type EnumBillingTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingTransactionType | EnumBillingTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BillingTransactionType[] | ListEnumBillingTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingTransactionType[] | ListEnumBillingTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingTransactionTypeFilter<$PrismaModel> | $Enums.BillingTransactionType
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type BillingTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    stripePaymentIntentId?: SortOrder
    stripeInvoiceId?: SortOrder
    stripeChargeId?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addonPurchaseId?: SortOrder
  }

  export type BillingTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BillingTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    stripePaymentIntentId?: SortOrder
    stripeInvoiceId?: SortOrder
    stripeChargeId?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addonPurchaseId?: SortOrder
  }

  export type BillingTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    stripePaymentIntentId?: SortOrder
    stripeInvoiceId?: SortOrder
    stripeChargeId?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addonPurchaseId?: SortOrder
  }

  export type BillingTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumBillingTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingTransactionType | EnumBillingTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BillingTransactionType[] | ListEnumBillingTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingTransactionType[] | ListEnumBillingTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.BillingTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumBillingTransactionTypeFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type CreditAddonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    stripePriceId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditAddonAvgOrderByAggregateInput = {
    credits?: SortOrder
    price?: SortOrder
  }

  export type CreditAddonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    stripePriceId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditAddonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    stripePriceId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditAddonSumOrderByAggregateInput = {
    credits?: SortOrder
    price?: SortOrder
  }

  export type CreditAddonScalarRelationFilter = {
    is?: CreditAddonWhereInput
    isNot?: CreditAddonWhereInput
  }

  export type AddonPurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    credits?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    stripePaymentIntentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creditAddonId?: SortOrder
  }

  export type AddonPurchaseAvgOrderByAggregateInput = {
    credits?: SortOrder
    amount?: SortOrder
  }

  export type AddonPurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    credits?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    stripePaymentIntentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creditAddonId?: SortOrder
  }

  export type AddonPurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    credits?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    stripePaymentIntentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creditAddonId?: SortOrder
  }

  export type AddonPurchaseSumOrderByAggregateInput = {
    credits?: SortOrder
    amount?: SortOrder
  }

  export type EnumWebhookEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookEventStatus | EnumWebhookEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookEventStatus[] | ListEnumWebhookEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookEventStatus[] | ListEnumWebhookEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookEventStatusFilter<$PrismaModel> | $Enums.WebhookEventStatus
  }

  export type StripeWebhookEventCountOrderByAggregateInput = {
    id?: SortOrder
    stripeEventId?: SortOrder
    eventType?: SortOrder
    status?: SortOrder
    processedAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type StripeWebhookEventMaxOrderByAggregateInput = {
    id?: SortOrder
    stripeEventId?: SortOrder
    eventType?: SortOrder
    status?: SortOrder
    processedAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type StripeWebhookEventMinOrderByAggregateInput = {
    id?: SortOrder
    stripeEventId?: SortOrder
    eventType?: SortOrder
    status?: SortOrder
    processedAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumWebhookEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookEventStatus | EnumWebhookEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookEventStatus[] | ListEnumWebhookEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookEventStatus[] | ListEnumWebhookEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebhookEventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebhookEventStatusFilter<$PrismaModel>
    _max?: NestedEnumWebhookEventStatusFilter<$PrismaModel>
  }

  export type AddonPurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<AddonPurchaseCreateWithoutUserInput, AddonPurchaseUncheckedCreateWithoutUserInput> | AddonPurchaseCreateWithoutUserInput[] | AddonPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddonPurchaseCreateOrConnectWithoutUserInput | AddonPurchaseCreateOrConnectWithoutUserInput[]
    createMany?: AddonPurchaseCreateManyUserInputEnvelope
    connect?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
  }

  export type BillingTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<BillingTransactionCreateWithoutUserInput, BillingTransactionUncheckedCreateWithoutUserInput> | BillingTransactionCreateWithoutUserInput[] | BillingTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillingTransactionCreateOrConnectWithoutUserInput | BillingTransactionCreateOrConnectWithoutUserInput[]
    createMany?: BillingTransactionCreateManyUserInputEnvelope
    connect?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
  }

  export type CreditAccountCreateNestedOneWithoutUserInput = {
    create?: XOR<CreditAccountCreateWithoutUserInput, CreditAccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditAccountCreateOrConnectWithoutUserInput
    connect?: CreditAccountWhereUniqueInput
  }

  export type PaymentMethodCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput> | PaymentMethodCreateWithoutUserInput[] | PaymentMethodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutUserInput | PaymentMethodCreateOrConnectWithoutUserInput[]
    createMany?: PaymentMethodCreateManyUserInputEnvelope
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type AddonPurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AddonPurchaseCreateWithoutUserInput, AddonPurchaseUncheckedCreateWithoutUserInput> | AddonPurchaseCreateWithoutUserInput[] | AddonPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddonPurchaseCreateOrConnectWithoutUserInput | AddonPurchaseCreateOrConnectWithoutUserInput[]
    createMany?: AddonPurchaseCreateManyUserInputEnvelope
    connect?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
  }

  export type BillingTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BillingTransactionCreateWithoutUserInput, BillingTransactionUncheckedCreateWithoutUserInput> | BillingTransactionCreateWithoutUserInput[] | BillingTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillingTransactionCreateOrConnectWithoutUserInput | BillingTransactionCreateOrConnectWithoutUserInput[]
    createMany?: BillingTransactionCreateManyUserInputEnvelope
    connect?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
  }

  export type CreditAccountUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CreditAccountCreateWithoutUserInput, CreditAccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditAccountCreateOrConnectWithoutUserInput
    connect?: CreditAccountWhereUniqueInput
  }

  export type PaymentMethodUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput> | PaymentMethodCreateWithoutUserInput[] | PaymentMethodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutUserInput | PaymentMethodCreateOrConnectWithoutUserInput[]
    createMany?: PaymentMethodCreateManyUserInputEnvelope
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AddonPurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddonPurchaseCreateWithoutUserInput, AddonPurchaseUncheckedCreateWithoutUserInput> | AddonPurchaseCreateWithoutUserInput[] | AddonPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddonPurchaseCreateOrConnectWithoutUserInput | AddonPurchaseCreateOrConnectWithoutUserInput[]
    upsert?: AddonPurchaseUpsertWithWhereUniqueWithoutUserInput | AddonPurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddonPurchaseCreateManyUserInputEnvelope
    set?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
    disconnect?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
    delete?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
    connect?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
    update?: AddonPurchaseUpdateWithWhereUniqueWithoutUserInput | AddonPurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddonPurchaseUpdateManyWithWhereWithoutUserInput | AddonPurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddonPurchaseScalarWhereInput | AddonPurchaseScalarWhereInput[]
  }

  export type BillingTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<BillingTransactionCreateWithoutUserInput, BillingTransactionUncheckedCreateWithoutUserInput> | BillingTransactionCreateWithoutUserInput[] | BillingTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillingTransactionCreateOrConnectWithoutUserInput | BillingTransactionCreateOrConnectWithoutUserInput[]
    upsert?: BillingTransactionUpsertWithWhereUniqueWithoutUserInput | BillingTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BillingTransactionCreateManyUserInputEnvelope
    set?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    disconnect?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    delete?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    connect?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    update?: BillingTransactionUpdateWithWhereUniqueWithoutUserInput | BillingTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BillingTransactionUpdateManyWithWhereWithoutUserInput | BillingTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BillingTransactionScalarWhereInput | BillingTransactionScalarWhereInput[]
  }

  export type CreditAccountUpdateOneWithoutUserNestedInput = {
    create?: XOR<CreditAccountCreateWithoutUserInput, CreditAccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditAccountCreateOrConnectWithoutUserInput
    upsert?: CreditAccountUpsertWithoutUserInput
    disconnect?: CreditAccountWhereInput | boolean
    delete?: CreditAccountWhereInput | boolean
    connect?: CreditAccountWhereUniqueInput
    update?: XOR<XOR<CreditAccountUpdateToOneWithWhereWithoutUserInput, CreditAccountUpdateWithoutUserInput>, CreditAccountUncheckedUpdateWithoutUserInput>
  }

  export type PaymentMethodUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput> | PaymentMethodCreateWithoutUserInput[] | PaymentMethodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutUserInput | PaymentMethodCreateOrConnectWithoutUserInput[]
    upsert?: PaymentMethodUpsertWithWhereUniqueWithoutUserInput | PaymentMethodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentMethodCreateManyUserInputEnvelope
    set?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    disconnect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    delete?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    update?: PaymentMethodUpdateWithWhereUniqueWithoutUserInput | PaymentMethodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentMethodUpdateManyWithWhereWithoutUserInput | PaymentMethodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type AddonPurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddonPurchaseCreateWithoutUserInput, AddonPurchaseUncheckedCreateWithoutUserInput> | AddonPurchaseCreateWithoutUserInput[] | AddonPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddonPurchaseCreateOrConnectWithoutUserInput | AddonPurchaseCreateOrConnectWithoutUserInput[]
    upsert?: AddonPurchaseUpsertWithWhereUniqueWithoutUserInput | AddonPurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddonPurchaseCreateManyUserInputEnvelope
    set?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
    disconnect?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
    delete?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
    connect?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
    update?: AddonPurchaseUpdateWithWhereUniqueWithoutUserInput | AddonPurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddonPurchaseUpdateManyWithWhereWithoutUserInput | AddonPurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddonPurchaseScalarWhereInput | AddonPurchaseScalarWhereInput[]
  }

  export type BillingTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BillingTransactionCreateWithoutUserInput, BillingTransactionUncheckedCreateWithoutUserInput> | BillingTransactionCreateWithoutUserInput[] | BillingTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillingTransactionCreateOrConnectWithoutUserInput | BillingTransactionCreateOrConnectWithoutUserInput[]
    upsert?: BillingTransactionUpsertWithWhereUniqueWithoutUserInput | BillingTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BillingTransactionCreateManyUserInputEnvelope
    set?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    disconnect?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    delete?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    connect?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    update?: BillingTransactionUpdateWithWhereUniqueWithoutUserInput | BillingTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BillingTransactionUpdateManyWithWhereWithoutUserInput | BillingTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BillingTransactionScalarWhereInput | BillingTransactionScalarWhereInput[]
  }

  export type CreditAccountUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CreditAccountCreateWithoutUserInput, CreditAccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditAccountCreateOrConnectWithoutUserInput
    upsert?: CreditAccountUpsertWithoutUserInput
    disconnect?: CreditAccountWhereInput | boolean
    delete?: CreditAccountWhereInput | boolean
    connect?: CreditAccountWhereUniqueInput
    update?: XOR<XOR<CreditAccountUpdateToOneWithWhereWithoutUserInput, CreditAccountUpdateWithoutUserInput>, CreditAccountUncheckedUpdateWithoutUserInput>
  }

  export type PaymentMethodUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput> | PaymentMethodCreateWithoutUserInput[] | PaymentMethodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutUserInput | PaymentMethodCreateOrConnectWithoutUserInput[]
    upsert?: PaymentMethodUpsertWithWhereUniqueWithoutUserInput | PaymentMethodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentMethodCreateManyUserInputEnvelope
    set?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    disconnect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    delete?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    update?: PaymentMethodUpdateWithWhereUniqueWithoutUserInput | PaymentMethodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentMethodUpdateManyWithWhereWithoutUserInput | PaymentMethodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionPriceCreateNestedManyWithoutSubscriptionPlanInput = {
    create?: XOR<SubscriptionPriceCreateWithoutSubscriptionPlanInput, SubscriptionPriceUncheckedCreateWithoutSubscriptionPlanInput> | SubscriptionPriceCreateWithoutSubscriptionPlanInput[] | SubscriptionPriceUncheckedCreateWithoutSubscriptionPlanInput[]
    connectOrCreate?: SubscriptionPriceCreateOrConnectWithoutSubscriptionPlanInput | SubscriptionPriceCreateOrConnectWithoutSubscriptionPlanInput[]
    createMany?: SubscriptionPriceCreateManySubscriptionPlanInputEnvelope
    connect?: SubscriptionPriceWhereUniqueInput | SubscriptionPriceWhereUniqueInput[]
  }

  export type SubscriptionPriceUncheckedCreateNestedManyWithoutSubscriptionPlanInput = {
    create?: XOR<SubscriptionPriceCreateWithoutSubscriptionPlanInput, SubscriptionPriceUncheckedCreateWithoutSubscriptionPlanInput> | SubscriptionPriceCreateWithoutSubscriptionPlanInput[] | SubscriptionPriceUncheckedCreateWithoutSubscriptionPlanInput[]
    connectOrCreate?: SubscriptionPriceCreateOrConnectWithoutSubscriptionPlanInput | SubscriptionPriceCreateOrConnectWithoutSubscriptionPlanInput[]
    createMany?: SubscriptionPriceCreateManySubscriptionPlanInputEnvelope
    connect?: SubscriptionPriceWhereUniqueInput | SubscriptionPriceWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SubscriptionPriceUpdateManyWithoutSubscriptionPlanNestedInput = {
    create?: XOR<SubscriptionPriceCreateWithoutSubscriptionPlanInput, SubscriptionPriceUncheckedCreateWithoutSubscriptionPlanInput> | SubscriptionPriceCreateWithoutSubscriptionPlanInput[] | SubscriptionPriceUncheckedCreateWithoutSubscriptionPlanInput[]
    connectOrCreate?: SubscriptionPriceCreateOrConnectWithoutSubscriptionPlanInput | SubscriptionPriceCreateOrConnectWithoutSubscriptionPlanInput[]
    upsert?: SubscriptionPriceUpsertWithWhereUniqueWithoutSubscriptionPlanInput | SubscriptionPriceUpsertWithWhereUniqueWithoutSubscriptionPlanInput[]
    createMany?: SubscriptionPriceCreateManySubscriptionPlanInputEnvelope
    set?: SubscriptionPriceWhereUniqueInput | SubscriptionPriceWhereUniqueInput[]
    disconnect?: SubscriptionPriceWhereUniqueInput | SubscriptionPriceWhereUniqueInput[]
    delete?: SubscriptionPriceWhereUniqueInput | SubscriptionPriceWhereUniqueInput[]
    connect?: SubscriptionPriceWhereUniqueInput | SubscriptionPriceWhereUniqueInput[]
    update?: SubscriptionPriceUpdateWithWhereUniqueWithoutSubscriptionPlanInput | SubscriptionPriceUpdateWithWhereUniqueWithoutSubscriptionPlanInput[]
    updateMany?: SubscriptionPriceUpdateManyWithWhereWithoutSubscriptionPlanInput | SubscriptionPriceUpdateManyWithWhereWithoutSubscriptionPlanInput[]
    deleteMany?: SubscriptionPriceScalarWhereInput | SubscriptionPriceScalarWhereInput[]
  }

  export type SubscriptionPriceUncheckedUpdateManyWithoutSubscriptionPlanNestedInput = {
    create?: XOR<SubscriptionPriceCreateWithoutSubscriptionPlanInput, SubscriptionPriceUncheckedCreateWithoutSubscriptionPlanInput> | SubscriptionPriceCreateWithoutSubscriptionPlanInput[] | SubscriptionPriceUncheckedCreateWithoutSubscriptionPlanInput[]
    connectOrCreate?: SubscriptionPriceCreateOrConnectWithoutSubscriptionPlanInput | SubscriptionPriceCreateOrConnectWithoutSubscriptionPlanInput[]
    upsert?: SubscriptionPriceUpsertWithWhereUniqueWithoutSubscriptionPlanInput | SubscriptionPriceUpsertWithWhereUniqueWithoutSubscriptionPlanInput[]
    createMany?: SubscriptionPriceCreateManySubscriptionPlanInputEnvelope
    set?: SubscriptionPriceWhereUniqueInput | SubscriptionPriceWhereUniqueInput[]
    disconnect?: SubscriptionPriceWhereUniqueInput | SubscriptionPriceWhereUniqueInput[]
    delete?: SubscriptionPriceWhereUniqueInput | SubscriptionPriceWhereUniqueInput[]
    connect?: SubscriptionPriceWhereUniqueInput | SubscriptionPriceWhereUniqueInput[]
    update?: SubscriptionPriceUpdateWithWhereUniqueWithoutSubscriptionPlanInput | SubscriptionPriceUpdateWithWhereUniqueWithoutSubscriptionPlanInput[]
    updateMany?: SubscriptionPriceUpdateManyWithWhereWithoutSubscriptionPlanInput | SubscriptionPriceUpdateManyWithWhereWithoutSubscriptionPlanInput[]
    deleteMany?: SubscriptionPriceScalarWhereInput | SubscriptionPriceScalarWhereInput[]
  }

  export type SubscriptionCreateNestedManyWithoutSubscriptionPriceInput = {
    create?: XOR<SubscriptionCreateWithoutSubscriptionPriceInput, SubscriptionUncheckedCreateWithoutSubscriptionPriceInput> | SubscriptionCreateWithoutSubscriptionPriceInput[] | SubscriptionUncheckedCreateWithoutSubscriptionPriceInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutSubscriptionPriceInput | SubscriptionCreateOrConnectWithoutSubscriptionPriceInput[]
    createMany?: SubscriptionCreateManySubscriptionPriceInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionPlanCreateNestedOneWithoutPricesInput = {
    create?: XOR<SubscriptionPlanCreateWithoutPricesInput, SubscriptionPlanUncheckedCreateWithoutPricesInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutPricesInput
    connect?: SubscriptionPlanWhereUniqueInput
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutSubscriptionPriceInput = {
    create?: XOR<SubscriptionCreateWithoutSubscriptionPriceInput, SubscriptionUncheckedCreateWithoutSubscriptionPriceInput> | SubscriptionCreateWithoutSubscriptionPriceInput[] | SubscriptionUncheckedCreateWithoutSubscriptionPriceInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutSubscriptionPriceInput | SubscriptionCreateOrConnectWithoutSubscriptionPriceInput[]
    createMany?: SubscriptionCreateManySubscriptionPriceInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type EnumBillingCycleFieldUpdateOperationsInput = {
    set?: $Enums.BillingCycle
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubscriptionUpdateManyWithoutSubscriptionPriceNestedInput = {
    create?: XOR<SubscriptionCreateWithoutSubscriptionPriceInput, SubscriptionUncheckedCreateWithoutSubscriptionPriceInput> | SubscriptionCreateWithoutSubscriptionPriceInput[] | SubscriptionUncheckedCreateWithoutSubscriptionPriceInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutSubscriptionPriceInput | SubscriptionCreateOrConnectWithoutSubscriptionPriceInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutSubscriptionPriceInput | SubscriptionUpsertWithWhereUniqueWithoutSubscriptionPriceInput[]
    createMany?: SubscriptionCreateManySubscriptionPriceInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutSubscriptionPriceInput | SubscriptionUpdateWithWhereUniqueWithoutSubscriptionPriceInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutSubscriptionPriceInput | SubscriptionUpdateManyWithWhereWithoutSubscriptionPriceInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionPlanUpdateOneRequiredWithoutPricesNestedInput = {
    create?: XOR<SubscriptionPlanCreateWithoutPricesInput, SubscriptionPlanUncheckedCreateWithoutPricesInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutPricesInput
    upsert?: SubscriptionPlanUpsertWithoutPricesInput
    connect?: SubscriptionPlanWhereUniqueInput
    update?: XOR<XOR<SubscriptionPlanUpdateToOneWithWhereWithoutPricesInput, SubscriptionPlanUpdateWithoutPricesInput>, SubscriptionPlanUncheckedUpdateWithoutPricesInput>
  }

  export type SubscriptionUncheckedUpdateManyWithoutSubscriptionPriceNestedInput = {
    create?: XOR<SubscriptionCreateWithoutSubscriptionPriceInput, SubscriptionUncheckedCreateWithoutSubscriptionPriceInput> | SubscriptionCreateWithoutSubscriptionPriceInput[] | SubscriptionUncheckedCreateWithoutSubscriptionPriceInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutSubscriptionPriceInput | SubscriptionCreateOrConnectWithoutSubscriptionPriceInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutSubscriptionPriceInput | SubscriptionUpsertWithWhereUniqueWithoutSubscriptionPriceInput[]
    createMany?: SubscriptionCreateManySubscriptionPriceInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutSubscriptionPriceInput | SubscriptionUpdateWithWhereUniqueWithoutSubscriptionPriceInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutSubscriptionPriceInput | SubscriptionUpdateManyWithWhereWithoutSubscriptionPriceInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type BillingTransactionCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<BillingTransactionCreateWithoutSubscriptionInput, BillingTransactionUncheckedCreateWithoutSubscriptionInput> | BillingTransactionCreateWithoutSubscriptionInput[] | BillingTransactionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: BillingTransactionCreateOrConnectWithoutSubscriptionInput | BillingTransactionCreateOrConnectWithoutSubscriptionInput[]
    createMany?: BillingTransactionCreateManySubscriptionInputEnvelope
    connect?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
  }

  export type CreditAllocationCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<CreditAllocationCreateWithoutSubscriptionInput, CreditAllocationUncheckedCreateWithoutSubscriptionInput> | CreditAllocationCreateWithoutSubscriptionInput[] | CreditAllocationUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: CreditAllocationCreateOrConnectWithoutSubscriptionInput | CreditAllocationCreateOrConnectWithoutSubscriptionInput[]
    createMany?: CreditAllocationCreateManySubscriptionInputEnvelope
    connect?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
  }

  export type SubscriptionPriceCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<SubscriptionPriceCreateWithoutSubscriptionsInput, SubscriptionPriceUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: SubscriptionPriceCreateOrConnectWithoutSubscriptionsInput
    connect?: SubscriptionPriceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type BillingTransactionUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<BillingTransactionCreateWithoutSubscriptionInput, BillingTransactionUncheckedCreateWithoutSubscriptionInput> | BillingTransactionCreateWithoutSubscriptionInput[] | BillingTransactionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: BillingTransactionCreateOrConnectWithoutSubscriptionInput | BillingTransactionCreateOrConnectWithoutSubscriptionInput[]
    createMany?: BillingTransactionCreateManySubscriptionInputEnvelope
    connect?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
  }

  export type CreditAllocationUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<CreditAllocationCreateWithoutSubscriptionInput, CreditAllocationUncheckedCreateWithoutSubscriptionInput> | CreditAllocationCreateWithoutSubscriptionInput[] | CreditAllocationUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: CreditAllocationCreateOrConnectWithoutSubscriptionInput | CreditAllocationCreateOrConnectWithoutSubscriptionInput[]
    createMany?: CreditAllocationCreateManySubscriptionInputEnvelope
    connect?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BillingTransactionUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<BillingTransactionCreateWithoutSubscriptionInput, BillingTransactionUncheckedCreateWithoutSubscriptionInput> | BillingTransactionCreateWithoutSubscriptionInput[] | BillingTransactionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: BillingTransactionCreateOrConnectWithoutSubscriptionInput | BillingTransactionCreateOrConnectWithoutSubscriptionInput[]
    upsert?: BillingTransactionUpsertWithWhereUniqueWithoutSubscriptionInput | BillingTransactionUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: BillingTransactionCreateManySubscriptionInputEnvelope
    set?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    disconnect?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    delete?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    connect?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    update?: BillingTransactionUpdateWithWhereUniqueWithoutSubscriptionInput | BillingTransactionUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: BillingTransactionUpdateManyWithWhereWithoutSubscriptionInput | BillingTransactionUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: BillingTransactionScalarWhereInput | BillingTransactionScalarWhereInput[]
  }

  export type CreditAllocationUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<CreditAllocationCreateWithoutSubscriptionInput, CreditAllocationUncheckedCreateWithoutSubscriptionInput> | CreditAllocationCreateWithoutSubscriptionInput[] | CreditAllocationUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: CreditAllocationCreateOrConnectWithoutSubscriptionInput | CreditAllocationCreateOrConnectWithoutSubscriptionInput[]
    upsert?: CreditAllocationUpsertWithWhereUniqueWithoutSubscriptionInput | CreditAllocationUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: CreditAllocationCreateManySubscriptionInputEnvelope
    set?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    disconnect?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    delete?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    connect?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    update?: CreditAllocationUpdateWithWhereUniqueWithoutSubscriptionInput | CreditAllocationUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: CreditAllocationUpdateManyWithWhereWithoutSubscriptionInput | CreditAllocationUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: CreditAllocationScalarWhereInput | CreditAllocationScalarWhereInput[]
  }

  export type SubscriptionPriceUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<SubscriptionPriceCreateWithoutSubscriptionsInput, SubscriptionPriceUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: SubscriptionPriceCreateOrConnectWithoutSubscriptionsInput
    upsert?: SubscriptionPriceUpsertWithoutSubscriptionsInput
    connect?: SubscriptionPriceWhereUniqueInput
    update?: XOR<XOR<SubscriptionPriceUpdateToOneWithWhereWithoutSubscriptionsInput, SubscriptionPriceUpdateWithoutSubscriptionsInput>, SubscriptionPriceUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionsInput, UserUpdateWithoutSubscriptionsInput>, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type BillingTransactionUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<BillingTransactionCreateWithoutSubscriptionInput, BillingTransactionUncheckedCreateWithoutSubscriptionInput> | BillingTransactionCreateWithoutSubscriptionInput[] | BillingTransactionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: BillingTransactionCreateOrConnectWithoutSubscriptionInput | BillingTransactionCreateOrConnectWithoutSubscriptionInput[]
    upsert?: BillingTransactionUpsertWithWhereUniqueWithoutSubscriptionInput | BillingTransactionUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: BillingTransactionCreateManySubscriptionInputEnvelope
    set?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    disconnect?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    delete?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    connect?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    update?: BillingTransactionUpdateWithWhereUniqueWithoutSubscriptionInput | BillingTransactionUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: BillingTransactionUpdateManyWithWhereWithoutSubscriptionInput | BillingTransactionUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: BillingTransactionScalarWhereInput | BillingTransactionScalarWhereInput[]
  }

  export type CreditAllocationUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<CreditAllocationCreateWithoutSubscriptionInput, CreditAllocationUncheckedCreateWithoutSubscriptionInput> | CreditAllocationCreateWithoutSubscriptionInput[] | CreditAllocationUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: CreditAllocationCreateOrConnectWithoutSubscriptionInput | CreditAllocationCreateOrConnectWithoutSubscriptionInput[]
    upsert?: CreditAllocationUpsertWithWhereUniqueWithoutSubscriptionInput | CreditAllocationUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: CreditAllocationCreateManySubscriptionInputEnvelope
    set?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    disconnect?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    delete?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    connect?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    update?: CreditAllocationUpdateWithWhereUniqueWithoutSubscriptionInput | CreditAllocationUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: CreditAllocationUpdateManyWithWhereWithoutSubscriptionInput | CreditAllocationUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: CreditAllocationScalarWhereInput | CreditAllocationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPaymentMethodsInput = {
    create?: XOR<UserCreateWithoutPaymentMethodsInput, UserUncheckedCreateWithoutPaymentMethodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentMethodsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPaymentMethodsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentMethodsInput, UserUncheckedCreateWithoutPaymentMethodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentMethodsInput
    upsert?: UserUpsertWithoutPaymentMethodsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentMethodsInput, UserUpdateWithoutPaymentMethodsInput>, UserUncheckedUpdateWithoutPaymentMethodsInput>
  }

  export type AddonPurchaseCreateNestedOneWithoutCreditAllocationsInput = {
    create?: XOR<AddonPurchaseCreateWithoutCreditAllocationsInput, AddonPurchaseUncheckedCreateWithoutCreditAllocationsInput>
    connectOrCreate?: AddonPurchaseCreateOrConnectWithoutCreditAllocationsInput
    connect?: AddonPurchaseWhereUniqueInput
  }

  export type CreditAccountCreateNestedOneWithoutAllocationsInput = {
    create?: XOR<CreditAccountCreateWithoutAllocationsInput, CreditAccountUncheckedCreateWithoutAllocationsInput>
    connectOrCreate?: CreditAccountCreateOrConnectWithoutAllocationsInput
    connect?: CreditAccountWhereUniqueInput
  }

  export type SubscriptionCreateNestedOneWithoutCreditAllocationsInput = {
    create?: XOR<SubscriptionCreateWithoutCreditAllocationsInput, SubscriptionUncheckedCreateWithoutCreditAllocationsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCreditAllocationsInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type CreditTransactionCreateNestedManyWithoutCreditAllocationInput = {
    create?: XOR<CreditTransactionCreateWithoutCreditAllocationInput, CreditTransactionUncheckedCreateWithoutCreditAllocationInput> | CreditTransactionCreateWithoutCreditAllocationInput[] | CreditTransactionUncheckedCreateWithoutCreditAllocationInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCreditAllocationInput | CreditTransactionCreateOrConnectWithoutCreditAllocationInput[]
    createMany?: CreditTransactionCreateManyCreditAllocationInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type CreditTransactionUncheckedCreateNestedManyWithoutCreditAllocationInput = {
    create?: XOR<CreditTransactionCreateWithoutCreditAllocationInput, CreditTransactionUncheckedCreateWithoutCreditAllocationInput> | CreditTransactionCreateWithoutCreditAllocationInput[] | CreditTransactionUncheckedCreateWithoutCreditAllocationInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCreditAllocationInput | CreditTransactionCreateOrConnectWithoutCreditAllocationInput[]
    createMany?: CreditTransactionCreateManyCreditAllocationInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type EnumCreditSourceFieldUpdateOperationsInput = {
    set?: $Enums.CreditSource
  }

  export type AddonPurchaseUpdateOneWithoutCreditAllocationsNestedInput = {
    create?: XOR<AddonPurchaseCreateWithoutCreditAllocationsInput, AddonPurchaseUncheckedCreateWithoutCreditAllocationsInput>
    connectOrCreate?: AddonPurchaseCreateOrConnectWithoutCreditAllocationsInput
    upsert?: AddonPurchaseUpsertWithoutCreditAllocationsInput
    disconnect?: AddonPurchaseWhereInput | boolean
    delete?: AddonPurchaseWhereInput | boolean
    connect?: AddonPurchaseWhereUniqueInput
    update?: XOR<XOR<AddonPurchaseUpdateToOneWithWhereWithoutCreditAllocationsInput, AddonPurchaseUpdateWithoutCreditAllocationsInput>, AddonPurchaseUncheckedUpdateWithoutCreditAllocationsInput>
  }

  export type CreditAccountUpdateOneRequiredWithoutAllocationsNestedInput = {
    create?: XOR<CreditAccountCreateWithoutAllocationsInput, CreditAccountUncheckedCreateWithoutAllocationsInput>
    connectOrCreate?: CreditAccountCreateOrConnectWithoutAllocationsInput
    upsert?: CreditAccountUpsertWithoutAllocationsInput
    connect?: CreditAccountWhereUniqueInput
    update?: XOR<XOR<CreditAccountUpdateToOneWithWhereWithoutAllocationsInput, CreditAccountUpdateWithoutAllocationsInput>, CreditAccountUncheckedUpdateWithoutAllocationsInput>
  }

  export type SubscriptionUpdateOneWithoutCreditAllocationsNestedInput = {
    create?: XOR<SubscriptionCreateWithoutCreditAllocationsInput, SubscriptionUncheckedCreateWithoutCreditAllocationsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCreditAllocationsInput
    upsert?: SubscriptionUpsertWithoutCreditAllocationsInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutCreditAllocationsInput, SubscriptionUpdateWithoutCreditAllocationsInput>, SubscriptionUncheckedUpdateWithoutCreditAllocationsInput>
  }

  export type CreditTransactionUpdateManyWithoutCreditAllocationNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutCreditAllocationInput, CreditTransactionUncheckedCreateWithoutCreditAllocationInput> | CreditTransactionCreateWithoutCreditAllocationInput[] | CreditTransactionUncheckedCreateWithoutCreditAllocationInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCreditAllocationInput | CreditTransactionCreateOrConnectWithoutCreditAllocationInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutCreditAllocationInput | CreditTransactionUpsertWithWhereUniqueWithoutCreditAllocationInput[]
    createMany?: CreditTransactionCreateManyCreditAllocationInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutCreditAllocationInput | CreditTransactionUpdateWithWhereUniqueWithoutCreditAllocationInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutCreditAllocationInput | CreditTransactionUpdateManyWithWhereWithoutCreditAllocationInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type CreditTransactionUncheckedUpdateManyWithoutCreditAllocationNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutCreditAllocationInput, CreditTransactionUncheckedCreateWithoutCreditAllocationInput> | CreditTransactionCreateWithoutCreditAllocationInput[] | CreditTransactionUncheckedCreateWithoutCreditAllocationInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCreditAllocationInput | CreditTransactionCreateOrConnectWithoutCreditAllocationInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutCreditAllocationInput | CreditTransactionUpsertWithWhereUniqueWithoutCreditAllocationInput[]
    createMany?: CreditTransactionCreateManyCreditAllocationInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutCreditAllocationInput | CreditTransactionUpdateWithWhereUniqueWithoutCreditAllocationInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutCreditAllocationInput | CreditTransactionUpdateManyWithWhereWithoutCreditAllocationInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreditAccountInput = {
    create?: XOR<UserCreateWithoutCreditAccountInput, UserUncheckedCreateWithoutCreditAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditAccountInput
    connect?: UserWhereUniqueInput
  }

  export type CreditAllocationCreateNestedManyWithoutCreditAccountInput = {
    create?: XOR<CreditAllocationCreateWithoutCreditAccountInput, CreditAllocationUncheckedCreateWithoutCreditAccountInput> | CreditAllocationCreateWithoutCreditAccountInput[] | CreditAllocationUncheckedCreateWithoutCreditAccountInput[]
    connectOrCreate?: CreditAllocationCreateOrConnectWithoutCreditAccountInput | CreditAllocationCreateOrConnectWithoutCreditAccountInput[]
    createMany?: CreditAllocationCreateManyCreditAccountInputEnvelope
    connect?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
  }

  export type CreditTransactionCreateNestedManyWithoutCreditAccountInput = {
    create?: XOR<CreditTransactionCreateWithoutCreditAccountInput, CreditTransactionUncheckedCreateWithoutCreditAccountInput> | CreditTransactionCreateWithoutCreditAccountInput[] | CreditTransactionUncheckedCreateWithoutCreditAccountInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCreditAccountInput | CreditTransactionCreateOrConnectWithoutCreditAccountInput[]
    createMany?: CreditTransactionCreateManyCreditAccountInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type CreditAllocationUncheckedCreateNestedManyWithoutCreditAccountInput = {
    create?: XOR<CreditAllocationCreateWithoutCreditAccountInput, CreditAllocationUncheckedCreateWithoutCreditAccountInput> | CreditAllocationCreateWithoutCreditAccountInput[] | CreditAllocationUncheckedCreateWithoutCreditAccountInput[]
    connectOrCreate?: CreditAllocationCreateOrConnectWithoutCreditAccountInput | CreditAllocationCreateOrConnectWithoutCreditAccountInput[]
    createMany?: CreditAllocationCreateManyCreditAccountInputEnvelope
    connect?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
  }

  export type CreditTransactionUncheckedCreateNestedManyWithoutCreditAccountInput = {
    create?: XOR<CreditTransactionCreateWithoutCreditAccountInput, CreditTransactionUncheckedCreateWithoutCreditAccountInput> | CreditTransactionCreateWithoutCreditAccountInput[] | CreditTransactionUncheckedCreateWithoutCreditAccountInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCreditAccountInput | CreditTransactionCreateOrConnectWithoutCreditAccountInput[]
    createMany?: CreditTransactionCreateManyCreditAccountInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreditAccountNestedInput = {
    create?: XOR<UserCreateWithoutCreditAccountInput, UserUncheckedCreateWithoutCreditAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditAccountInput
    upsert?: UserUpsertWithoutCreditAccountInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreditAccountInput, UserUpdateWithoutCreditAccountInput>, UserUncheckedUpdateWithoutCreditAccountInput>
  }

  export type CreditAllocationUpdateManyWithoutCreditAccountNestedInput = {
    create?: XOR<CreditAllocationCreateWithoutCreditAccountInput, CreditAllocationUncheckedCreateWithoutCreditAccountInput> | CreditAllocationCreateWithoutCreditAccountInput[] | CreditAllocationUncheckedCreateWithoutCreditAccountInput[]
    connectOrCreate?: CreditAllocationCreateOrConnectWithoutCreditAccountInput | CreditAllocationCreateOrConnectWithoutCreditAccountInput[]
    upsert?: CreditAllocationUpsertWithWhereUniqueWithoutCreditAccountInput | CreditAllocationUpsertWithWhereUniqueWithoutCreditAccountInput[]
    createMany?: CreditAllocationCreateManyCreditAccountInputEnvelope
    set?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    disconnect?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    delete?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    connect?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    update?: CreditAllocationUpdateWithWhereUniqueWithoutCreditAccountInput | CreditAllocationUpdateWithWhereUniqueWithoutCreditAccountInput[]
    updateMany?: CreditAllocationUpdateManyWithWhereWithoutCreditAccountInput | CreditAllocationUpdateManyWithWhereWithoutCreditAccountInput[]
    deleteMany?: CreditAllocationScalarWhereInput | CreditAllocationScalarWhereInput[]
  }

  export type CreditTransactionUpdateManyWithoutCreditAccountNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutCreditAccountInput, CreditTransactionUncheckedCreateWithoutCreditAccountInput> | CreditTransactionCreateWithoutCreditAccountInput[] | CreditTransactionUncheckedCreateWithoutCreditAccountInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCreditAccountInput | CreditTransactionCreateOrConnectWithoutCreditAccountInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutCreditAccountInput | CreditTransactionUpsertWithWhereUniqueWithoutCreditAccountInput[]
    createMany?: CreditTransactionCreateManyCreditAccountInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutCreditAccountInput | CreditTransactionUpdateWithWhereUniqueWithoutCreditAccountInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutCreditAccountInput | CreditTransactionUpdateManyWithWhereWithoutCreditAccountInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type CreditAllocationUncheckedUpdateManyWithoutCreditAccountNestedInput = {
    create?: XOR<CreditAllocationCreateWithoutCreditAccountInput, CreditAllocationUncheckedCreateWithoutCreditAccountInput> | CreditAllocationCreateWithoutCreditAccountInput[] | CreditAllocationUncheckedCreateWithoutCreditAccountInput[]
    connectOrCreate?: CreditAllocationCreateOrConnectWithoutCreditAccountInput | CreditAllocationCreateOrConnectWithoutCreditAccountInput[]
    upsert?: CreditAllocationUpsertWithWhereUniqueWithoutCreditAccountInput | CreditAllocationUpsertWithWhereUniqueWithoutCreditAccountInput[]
    createMany?: CreditAllocationCreateManyCreditAccountInputEnvelope
    set?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    disconnect?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    delete?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    connect?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    update?: CreditAllocationUpdateWithWhereUniqueWithoutCreditAccountInput | CreditAllocationUpdateWithWhereUniqueWithoutCreditAccountInput[]
    updateMany?: CreditAllocationUpdateManyWithWhereWithoutCreditAccountInput | CreditAllocationUpdateManyWithWhereWithoutCreditAccountInput[]
    deleteMany?: CreditAllocationScalarWhereInput | CreditAllocationScalarWhereInput[]
  }

  export type CreditTransactionUncheckedUpdateManyWithoutCreditAccountNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutCreditAccountInput, CreditTransactionUncheckedCreateWithoutCreditAccountInput> | CreditTransactionCreateWithoutCreditAccountInput[] | CreditTransactionUncheckedCreateWithoutCreditAccountInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCreditAccountInput | CreditTransactionCreateOrConnectWithoutCreditAccountInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutCreditAccountInput | CreditTransactionUpsertWithWhereUniqueWithoutCreditAccountInput[]
    createMany?: CreditTransactionCreateManyCreditAccountInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutCreditAccountInput | CreditTransactionUpdateWithWhereUniqueWithoutCreditAccountInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutCreditAccountInput | CreditTransactionUpdateManyWithWhereWithoutCreditAccountInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type AddonPurchaseCreateNestedOneWithoutCreditTransactionsInput = {
    create?: XOR<AddonPurchaseCreateWithoutCreditTransactionsInput, AddonPurchaseUncheckedCreateWithoutCreditTransactionsInput>
    connectOrCreate?: AddonPurchaseCreateOrConnectWithoutCreditTransactionsInput
    connect?: AddonPurchaseWhereUniqueInput
  }

  export type CreditAccountCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CreditAccountCreateWithoutTransactionsInput, CreditAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CreditAccountCreateOrConnectWithoutTransactionsInput
    connect?: CreditAccountWhereUniqueInput
  }

  export type CreditAllocationCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CreditAllocationCreateWithoutTransactionsInput, CreditAllocationUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CreditAllocationCreateOrConnectWithoutTransactionsInput
    connect?: CreditAllocationWhereUniqueInput
  }

  export type EnumCreditTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.CreditTransactionType
  }

  export type AddonPurchaseUpdateOneWithoutCreditTransactionsNestedInput = {
    create?: XOR<AddonPurchaseCreateWithoutCreditTransactionsInput, AddonPurchaseUncheckedCreateWithoutCreditTransactionsInput>
    connectOrCreate?: AddonPurchaseCreateOrConnectWithoutCreditTransactionsInput
    upsert?: AddonPurchaseUpsertWithoutCreditTransactionsInput
    disconnect?: AddonPurchaseWhereInput | boolean
    delete?: AddonPurchaseWhereInput | boolean
    connect?: AddonPurchaseWhereUniqueInput
    update?: XOR<XOR<AddonPurchaseUpdateToOneWithWhereWithoutCreditTransactionsInput, AddonPurchaseUpdateWithoutCreditTransactionsInput>, AddonPurchaseUncheckedUpdateWithoutCreditTransactionsInput>
  }

  export type CreditAccountUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<CreditAccountCreateWithoutTransactionsInput, CreditAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CreditAccountCreateOrConnectWithoutTransactionsInput
    upsert?: CreditAccountUpsertWithoutTransactionsInput
    connect?: CreditAccountWhereUniqueInput
    update?: XOR<XOR<CreditAccountUpdateToOneWithWhereWithoutTransactionsInput, CreditAccountUpdateWithoutTransactionsInput>, CreditAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type CreditAllocationUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<CreditAllocationCreateWithoutTransactionsInput, CreditAllocationUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CreditAllocationCreateOrConnectWithoutTransactionsInput
    upsert?: CreditAllocationUpsertWithoutTransactionsInput
    disconnect?: CreditAllocationWhereInput | boolean
    delete?: CreditAllocationWhereInput | boolean
    connect?: CreditAllocationWhereUniqueInput
    update?: XOR<XOR<CreditAllocationUpdateToOneWithWhereWithoutTransactionsInput, CreditAllocationUpdateWithoutTransactionsInput>, CreditAllocationUncheckedUpdateWithoutTransactionsInput>
  }

  export type AddonPurchaseCreateNestedOneWithoutBillingTransactionsInput = {
    create?: XOR<AddonPurchaseCreateWithoutBillingTransactionsInput, AddonPurchaseUncheckedCreateWithoutBillingTransactionsInput>
    connectOrCreate?: AddonPurchaseCreateOrConnectWithoutBillingTransactionsInput
    connect?: AddonPurchaseWhereUniqueInput
  }

  export type SubscriptionCreateNestedOneWithoutBillingTransactionsInput = {
    create?: XOR<SubscriptionCreateWithoutBillingTransactionsInput, SubscriptionUncheckedCreateWithoutBillingTransactionsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutBillingTransactionsInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBillingTransactionsInput = {
    create?: XOR<UserCreateWithoutBillingTransactionsInput, UserUncheckedCreateWithoutBillingTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillingTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumBillingTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.BillingTransactionType
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type AddonPurchaseUpdateOneWithoutBillingTransactionsNestedInput = {
    create?: XOR<AddonPurchaseCreateWithoutBillingTransactionsInput, AddonPurchaseUncheckedCreateWithoutBillingTransactionsInput>
    connectOrCreate?: AddonPurchaseCreateOrConnectWithoutBillingTransactionsInput
    upsert?: AddonPurchaseUpsertWithoutBillingTransactionsInput
    disconnect?: AddonPurchaseWhereInput | boolean
    delete?: AddonPurchaseWhereInput | boolean
    connect?: AddonPurchaseWhereUniqueInput
    update?: XOR<XOR<AddonPurchaseUpdateToOneWithWhereWithoutBillingTransactionsInput, AddonPurchaseUpdateWithoutBillingTransactionsInput>, AddonPurchaseUncheckedUpdateWithoutBillingTransactionsInput>
  }

  export type SubscriptionUpdateOneWithoutBillingTransactionsNestedInput = {
    create?: XOR<SubscriptionCreateWithoutBillingTransactionsInput, SubscriptionUncheckedCreateWithoutBillingTransactionsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutBillingTransactionsInput
    upsert?: SubscriptionUpsertWithoutBillingTransactionsInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutBillingTransactionsInput, SubscriptionUpdateWithoutBillingTransactionsInput>, SubscriptionUncheckedUpdateWithoutBillingTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutBillingTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutBillingTransactionsInput, UserUncheckedCreateWithoutBillingTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillingTransactionsInput
    upsert?: UserUpsertWithoutBillingTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBillingTransactionsInput, UserUpdateWithoutBillingTransactionsInput>, UserUncheckedUpdateWithoutBillingTransactionsInput>
  }

  export type AddonPurchaseCreateNestedManyWithoutAddonInput = {
    create?: XOR<AddonPurchaseCreateWithoutAddonInput, AddonPurchaseUncheckedCreateWithoutAddonInput> | AddonPurchaseCreateWithoutAddonInput[] | AddonPurchaseUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: AddonPurchaseCreateOrConnectWithoutAddonInput | AddonPurchaseCreateOrConnectWithoutAddonInput[]
    createMany?: AddonPurchaseCreateManyAddonInputEnvelope
    connect?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
  }

  export type AddonPurchaseUncheckedCreateNestedManyWithoutAddonInput = {
    create?: XOR<AddonPurchaseCreateWithoutAddonInput, AddonPurchaseUncheckedCreateWithoutAddonInput> | AddonPurchaseCreateWithoutAddonInput[] | AddonPurchaseUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: AddonPurchaseCreateOrConnectWithoutAddonInput | AddonPurchaseCreateOrConnectWithoutAddonInput[]
    createMany?: AddonPurchaseCreateManyAddonInputEnvelope
    connect?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
  }

  export type AddonPurchaseUpdateManyWithoutAddonNestedInput = {
    create?: XOR<AddonPurchaseCreateWithoutAddonInput, AddonPurchaseUncheckedCreateWithoutAddonInput> | AddonPurchaseCreateWithoutAddonInput[] | AddonPurchaseUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: AddonPurchaseCreateOrConnectWithoutAddonInput | AddonPurchaseCreateOrConnectWithoutAddonInput[]
    upsert?: AddonPurchaseUpsertWithWhereUniqueWithoutAddonInput | AddonPurchaseUpsertWithWhereUniqueWithoutAddonInput[]
    createMany?: AddonPurchaseCreateManyAddonInputEnvelope
    set?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
    disconnect?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
    delete?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
    connect?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
    update?: AddonPurchaseUpdateWithWhereUniqueWithoutAddonInput | AddonPurchaseUpdateWithWhereUniqueWithoutAddonInput[]
    updateMany?: AddonPurchaseUpdateManyWithWhereWithoutAddonInput | AddonPurchaseUpdateManyWithWhereWithoutAddonInput[]
    deleteMany?: AddonPurchaseScalarWhereInput | AddonPurchaseScalarWhereInput[]
  }

  export type AddonPurchaseUncheckedUpdateManyWithoutAddonNestedInput = {
    create?: XOR<AddonPurchaseCreateWithoutAddonInput, AddonPurchaseUncheckedCreateWithoutAddonInput> | AddonPurchaseCreateWithoutAddonInput[] | AddonPurchaseUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: AddonPurchaseCreateOrConnectWithoutAddonInput | AddonPurchaseCreateOrConnectWithoutAddonInput[]
    upsert?: AddonPurchaseUpsertWithWhereUniqueWithoutAddonInput | AddonPurchaseUpsertWithWhereUniqueWithoutAddonInput[]
    createMany?: AddonPurchaseCreateManyAddonInputEnvelope
    set?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
    disconnect?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
    delete?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
    connect?: AddonPurchaseWhereUniqueInput | AddonPurchaseWhereUniqueInput[]
    update?: AddonPurchaseUpdateWithWhereUniqueWithoutAddonInput | AddonPurchaseUpdateWithWhereUniqueWithoutAddonInput[]
    updateMany?: AddonPurchaseUpdateManyWithWhereWithoutAddonInput | AddonPurchaseUpdateManyWithWhereWithoutAddonInput[]
    deleteMany?: AddonPurchaseScalarWhereInput | AddonPurchaseScalarWhereInput[]
  }

  export type CreditAddonCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<CreditAddonCreateWithoutPurchasesInput, CreditAddonUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: CreditAddonCreateOrConnectWithoutPurchasesInput
    connect?: CreditAddonWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAddonPurchasesInput = {
    create?: XOR<UserCreateWithoutAddonPurchasesInput, UserUncheckedCreateWithoutAddonPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddonPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type BillingTransactionCreateNestedManyWithoutAddonPurchaseInput = {
    create?: XOR<BillingTransactionCreateWithoutAddonPurchaseInput, BillingTransactionUncheckedCreateWithoutAddonPurchaseInput> | BillingTransactionCreateWithoutAddonPurchaseInput[] | BillingTransactionUncheckedCreateWithoutAddonPurchaseInput[]
    connectOrCreate?: BillingTransactionCreateOrConnectWithoutAddonPurchaseInput | BillingTransactionCreateOrConnectWithoutAddonPurchaseInput[]
    createMany?: BillingTransactionCreateManyAddonPurchaseInputEnvelope
    connect?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
  }

  export type CreditAllocationCreateNestedManyWithoutAddonPurchaseInput = {
    create?: XOR<CreditAllocationCreateWithoutAddonPurchaseInput, CreditAllocationUncheckedCreateWithoutAddonPurchaseInput> | CreditAllocationCreateWithoutAddonPurchaseInput[] | CreditAllocationUncheckedCreateWithoutAddonPurchaseInput[]
    connectOrCreate?: CreditAllocationCreateOrConnectWithoutAddonPurchaseInput | CreditAllocationCreateOrConnectWithoutAddonPurchaseInput[]
    createMany?: CreditAllocationCreateManyAddonPurchaseInputEnvelope
    connect?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
  }

  export type CreditTransactionCreateNestedManyWithoutAddonPurchaseInput = {
    create?: XOR<CreditTransactionCreateWithoutAddonPurchaseInput, CreditTransactionUncheckedCreateWithoutAddonPurchaseInput> | CreditTransactionCreateWithoutAddonPurchaseInput[] | CreditTransactionUncheckedCreateWithoutAddonPurchaseInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutAddonPurchaseInput | CreditTransactionCreateOrConnectWithoutAddonPurchaseInput[]
    createMany?: CreditTransactionCreateManyAddonPurchaseInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type BillingTransactionUncheckedCreateNestedManyWithoutAddonPurchaseInput = {
    create?: XOR<BillingTransactionCreateWithoutAddonPurchaseInput, BillingTransactionUncheckedCreateWithoutAddonPurchaseInput> | BillingTransactionCreateWithoutAddonPurchaseInput[] | BillingTransactionUncheckedCreateWithoutAddonPurchaseInput[]
    connectOrCreate?: BillingTransactionCreateOrConnectWithoutAddonPurchaseInput | BillingTransactionCreateOrConnectWithoutAddonPurchaseInput[]
    createMany?: BillingTransactionCreateManyAddonPurchaseInputEnvelope
    connect?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
  }

  export type CreditAllocationUncheckedCreateNestedManyWithoutAddonPurchaseInput = {
    create?: XOR<CreditAllocationCreateWithoutAddonPurchaseInput, CreditAllocationUncheckedCreateWithoutAddonPurchaseInput> | CreditAllocationCreateWithoutAddonPurchaseInput[] | CreditAllocationUncheckedCreateWithoutAddonPurchaseInput[]
    connectOrCreate?: CreditAllocationCreateOrConnectWithoutAddonPurchaseInput | CreditAllocationCreateOrConnectWithoutAddonPurchaseInput[]
    createMany?: CreditAllocationCreateManyAddonPurchaseInputEnvelope
    connect?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
  }

  export type CreditTransactionUncheckedCreateNestedManyWithoutAddonPurchaseInput = {
    create?: XOR<CreditTransactionCreateWithoutAddonPurchaseInput, CreditTransactionUncheckedCreateWithoutAddonPurchaseInput> | CreditTransactionCreateWithoutAddonPurchaseInput[] | CreditTransactionUncheckedCreateWithoutAddonPurchaseInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutAddonPurchaseInput | CreditTransactionCreateOrConnectWithoutAddonPurchaseInput[]
    createMany?: CreditTransactionCreateManyAddonPurchaseInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type CreditAddonUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<CreditAddonCreateWithoutPurchasesInput, CreditAddonUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: CreditAddonCreateOrConnectWithoutPurchasesInput
    upsert?: CreditAddonUpsertWithoutPurchasesInput
    connect?: CreditAddonWhereUniqueInput
    update?: XOR<XOR<CreditAddonUpdateToOneWithWhereWithoutPurchasesInput, CreditAddonUpdateWithoutPurchasesInput>, CreditAddonUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserUpdateOneRequiredWithoutAddonPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutAddonPurchasesInput, UserUncheckedCreateWithoutAddonPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddonPurchasesInput
    upsert?: UserUpsertWithoutAddonPurchasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddonPurchasesInput, UserUpdateWithoutAddonPurchasesInput>, UserUncheckedUpdateWithoutAddonPurchasesInput>
  }

  export type BillingTransactionUpdateManyWithoutAddonPurchaseNestedInput = {
    create?: XOR<BillingTransactionCreateWithoutAddonPurchaseInput, BillingTransactionUncheckedCreateWithoutAddonPurchaseInput> | BillingTransactionCreateWithoutAddonPurchaseInput[] | BillingTransactionUncheckedCreateWithoutAddonPurchaseInput[]
    connectOrCreate?: BillingTransactionCreateOrConnectWithoutAddonPurchaseInput | BillingTransactionCreateOrConnectWithoutAddonPurchaseInput[]
    upsert?: BillingTransactionUpsertWithWhereUniqueWithoutAddonPurchaseInput | BillingTransactionUpsertWithWhereUniqueWithoutAddonPurchaseInput[]
    createMany?: BillingTransactionCreateManyAddonPurchaseInputEnvelope
    set?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    disconnect?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    delete?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    connect?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    update?: BillingTransactionUpdateWithWhereUniqueWithoutAddonPurchaseInput | BillingTransactionUpdateWithWhereUniqueWithoutAddonPurchaseInput[]
    updateMany?: BillingTransactionUpdateManyWithWhereWithoutAddonPurchaseInput | BillingTransactionUpdateManyWithWhereWithoutAddonPurchaseInput[]
    deleteMany?: BillingTransactionScalarWhereInput | BillingTransactionScalarWhereInput[]
  }

  export type CreditAllocationUpdateManyWithoutAddonPurchaseNestedInput = {
    create?: XOR<CreditAllocationCreateWithoutAddonPurchaseInput, CreditAllocationUncheckedCreateWithoutAddonPurchaseInput> | CreditAllocationCreateWithoutAddonPurchaseInput[] | CreditAllocationUncheckedCreateWithoutAddonPurchaseInput[]
    connectOrCreate?: CreditAllocationCreateOrConnectWithoutAddonPurchaseInput | CreditAllocationCreateOrConnectWithoutAddonPurchaseInput[]
    upsert?: CreditAllocationUpsertWithWhereUniqueWithoutAddonPurchaseInput | CreditAllocationUpsertWithWhereUniqueWithoutAddonPurchaseInput[]
    createMany?: CreditAllocationCreateManyAddonPurchaseInputEnvelope
    set?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    disconnect?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    delete?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    connect?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    update?: CreditAllocationUpdateWithWhereUniqueWithoutAddonPurchaseInput | CreditAllocationUpdateWithWhereUniqueWithoutAddonPurchaseInput[]
    updateMany?: CreditAllocationUpdateManyWithWhereWithoutAddonPurchaseInput | CreditAllocationUpdateManyWithWhereWithoutAddonPurchaseInput[]
    deleteMany?: CreditAllocationScalarWhereInput | CreditAllocationScalarWhereInput[]
  }

  export type CreditTransactionUpdateManyWithoutAddonPurchaseNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutAddonPurchaseInput, CreditTransactionUncheckedCreateWithoutAddonPurchaseInput> | CreditTransactionCreateWithoutAddonPurchaseInput[] | CreditTransactionUncheckedCreateWithoutAddonPurchaseInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutAddonPurchaseInput | CreditTransactionCreateOrConnectWithoutAddonPurchaseInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutAddonPurchaseInput | CreditTransactionUpsertWithWhereUniqueWithoutAddonPurchaseInput[]
    createMany?: CreditTransactionCreateManyAddonPurchaseInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutAddonPurchaseInput | CreditTransactionUpdateWithWhereUniqueWithoutAddonPurchaseInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutAddonPurchaseInput | CreditTransactionUpdateManyWithWhereWithoutAddonPurchaseInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type BillingTransactionUncheckedUpdateManyWithoutAddonPurchaseNestedInput = {
    create?: XOR<BillingTransactionCreateWithoutAddonPurchaseInput, BillingTransactionUncheckedCreateWithoutAddonPurchaseInput> | BillingTransactionCreateWithoutAddonPurchaseInput[] | BillingTransactionUncheckedCreateWithoutAddonPurchaseInput[]
    connectOrCreate?: BillingTransactionCreateOrConnectWithoutAddonPurchaseInput | BillingTransactionCreateOrConnectWithoutAddonPurchaseInput[]
    upsert?: BillingTransactionUpsertWithWhereUniqueWithoutAddonPurchaseInput | BillingTransactionUpsertWithWhereUniqueWithoutAddonPurchaseInput[]
    createMany?: BillingTransactionCreateManyAddonPurchaseInputEnvelope
    set?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    disconnect?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    delete?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    connect?: BillingTransactionWhereUniqueInput | BillingTransactionWhereUniqueInput[]
    update?: BillingTransactionUpdateWithWhereUniqueWithoutAddonPurchaseInput | BillingTransactionUpdateWithWhereUniqueWithoutAddonPurchaseInput[]
    updateMany?: BillingTransactionUpdateManyWithWhereWithoutAddonPurchaseInput | BillingTransactionUpdateManyWithWhereWithoutAddonPurchaseInput[]
    deleteMany?: BillingTransactionScalarWhereInput | BillingTransactionScalarWhereInput[]
  }

  export type CreditAllocationUncheckedUpdateManyWithoutAddonPurchaseNestedInput = {
    create?: XOR<CreditAllocationCreateWithoutAddonPurchaseInput, CreditAllocationUncheckedCreateWithoutAddonPurchaseInput> | CreditAllocationCreateWithoutAddonPurchaseInput[] | CreditAllocationUncheckedCreateWithoutAddonPurchaseInput[]
    connectOrCreate?: CreditAllocationCreateOrConnectWithoutAddonPurchaseInput | CreditAllocationCreateOrConnectWithoutAddonPurchaseInput[]
    upsert?: CreditAllocationUpsertWithWhereUniqueWithoutAddonPurchaseInput | CreditAllocationUpsertWithWhereUniqueWithoutAddonPurchaseInput[]
    createMany?: CreditAllocationCreateManyAddonPurchaseInputEnvelope
    set?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    disconnect?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    delete?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    connect?: CreditAllocationWhereUniqueInput | CreditAllocationWhereUniqueInput[]
    update?: CreditAllocationUpdateWithWhereUniqueWithoutAddonPurchaseInput | CreditAllocationUpdateWithWhereUniqueWithoutAddonPurchaseInput[]
    updateMany?: CreditAllocationUpdateManyWithWhereWithoutAddonPurchaseInput | CreditAllocationUpdateManyWithWhereWithoutAddonPurchaseInput[]
    deleteMany?: CreditAllocationScalarWhereInput | CreditAllocationScalarWhereInput[]
  }

  export type CreditTransactionUncheckedUpdateManyWithoutAddonPurchaseNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutAddonPurchaseInput, CreditTransactionUncheckedCreateWithoutAddonPurchaseInput> | CreditTransactionCreateWithoutAddonPurchaseInput[] | CreditTransactionUncheckedCreateWithoutAddonPurchaseInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutAddonPurchaseInput | CreditTransactionCreateOrConnectWithoutAddonPurchaseInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutAddonPurchaseInput | CreditTransactionUpsertWithWhereUniqueWithoutAddonPurchaseInput[]
    createMany?: CreditTransactionCreateManyAddonPurchaseInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutAddonPurchaseInput | CreditTransactionUpdateWithWhereUniqueWithoutAddonPurchaseInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutAddonPurchaseInput | CreditTransactionUpdateManyWithWhereWithoutAddonPurchaseInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type EnumWebhookEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.WebhookEventStatus
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumBillingCycleFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingCycle | EnumBillingCycleFieldRefInput<$PrismaModel>
    in?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingCycleFilter<$PrismaModel> | $Enums.BillingCycle
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumBillingCycleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingCycle | EnumBillingCycleFieldRefInput<$PrismaModel>
    in?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingCycle[] | ListEnumBillingCycleFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingCycleWithAggregatesFilter<$PrismaModel> | $Enums.BillingCycle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingCycleFilter<$PrismaModel>
    _max?: NestedEnumBillingCycleFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCreditSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditSource | EnumCreditSourceFieldRefInput<$PrismaModel>
    in?: $Enums.CreditSource[] | ListEnumCreditSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditSource[] | ListEnumCreditSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditSourceFilter<$PrismaModel> | $Enums.CreditSource
  }

  export type NestedEnumCreditSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditSource | EnumCreditSourceFieldRefInput<$PrismaModel>
    in?: $Enums.CreditSource[] | ListEnumCreditSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditSource[] | ListEnumCreditSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditSourceWithAggregatesFilter<$PrismaModel> | $Enums.CreditSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreditSourceFilter<$PrismaModel>
    _max?: NestedEnumCreditSourceFilter<$PrismaModel>
  }

  export type NestedEnumCreditTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditTransactionType | EnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTransactionTypeFilter<$PrismaModel> | $Enums.CreditTransactionType
  }

  export type NestedEnumCreditTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditTransactionType | EnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CreditTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreditTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumCreditTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumBillingTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingTransactionType | EnumBillingTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BillingTransactionType[] | ListEnumBillingTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingTransactionType[] | ListEnumBillingTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingTransactionTypeFilter<$PrismaModel> | $Enums.BillingTransactionType
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumBillingTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingTransactionType | EnumBillingTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BillingTransactionType[] | ListEnumBillingTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingTransactionType[] | ListEnumBillingTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.BillingTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumBillingTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumWebhookEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookEventStatus | EnumWebhookEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookEventStatus[] | ListEnumWebhookEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookEventStatus[] | ListEnumWebhookEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookEventStatusFilter<$PrismaModel> | $Enums.WebhookEventStatus
  }

  export type NestedEnumWebhookEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookEventStatus | EnumWebhookEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookEventStatus[] | ListEnumWebhookEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookEventStatus[] | ListEnumWebhookEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebhookEventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebhookEventStatusFilter<$PrismaModel>
    _max?: NestedEnumWebhookEventStatusFilter<$PrismaModel>
  }

  export type AddonPurchaseCreateWithoutUserInput = {
    id?: string
    credits: number
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addon: CreditAddonCreateNestedOneWithoutPurchasesInput
    billingTransactions?: BillingTransactionCreateNestedManyWithoutAddonPurchaseInput
    creditAllocations?: CreditAllocationCreateNestedManyWithoutAddonPurchaseInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutAddonPurchaseInput
  }

  export type AddonPurchaseUncheckedCreateWithoutUserInput = {
    id?: string
    credits: number
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creditAddonId: string
    billingTransactions?: BillingTransactionUncheckedCreateNestedManyWithoutAddonPurchaseInput
    creditAllocations?: CreditAllocationUncheckedCreateNestedManyWithoutAddonPurchaseInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutAddonPurchaseInput
  }

  export type AddonPurchaseCreateOrConnectWithoutUserInput = {
    where: AddonPurchaseWhereUniqueInput
    create: XOR<AddonPurchaseCreateWithoutUserInput, AddonPurchaseUncheckedCreateWithoutUserInput>
  }

  export type AddonPurchaseCreateManyUserInputEnvelope = {
    data: AddonPurchaseCreateManyUserInput | AddonPurchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BillingTransactionCreateWithoutUserInput = {
    id?: string
    type: $Enums.BillingTransactionType
    status?: $Enums.PaymentStatus
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePaymentIntentId?: string | null
    stripeInvoiceId?: string | null
    stripeChargeId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addonPurchase?: AddonPurchaseCreateNestedOneWithoutBillingTransactionsInput
    subscription?: SubscriptionCreateNestedOneWithoutBillingTransactionsInput
  }

  export type BillingTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    subscriptionId?: string | null
    type: $Enums.BillingTransactionType
    status?: $Enums.PaymentStatus
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePaymentIntentId?: string | null
    stripeInvoiceId?: string | null
    stripeChargeId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addonPurchaseId?: string | null
  }

  export type BillingTransactionCreateOrConnectWithoutUserInput = {
    where: BillingTransactionWhereUniqueInput
    create: XOR<BillingTransactionCreateWithoutUserInput, BillingTransactionUncheckedCreateWithoutUserInput>
  }

  export type BillingTransactionCreateManyUserInputEnvelope = {
    data: BillingTransactionCreateManyUserInput | BillingTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CreditAccountCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addonBalance?: number
    subscriptionBalance?: number
    allocations?: CreditAllocationCreateNestedManyWithoutCreditAccountInput
    transactions?: CreditTransactionCreateNestedManyWithoutCreditAccountInput
  }

  export type CreditAccountUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addonBalance?: number
    subscriptionBalance?: number
    allocations?: CreditAllocationUncheckedCreateNestedManyWithoutCreditAccountInput
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutCreditAccountInput
  }

  export type CreditAccountCreateOrConnectWithoutUserInput = {
    where: CreditAccountWhereUniqueInput
    create: XOR<CreditAccountCreateWithoutUserInput, CreditAccountUncheckedCreateWithoutUserInput>
  }

  export type PaymentMethodCreateWithoutUserInput = {
    id?: string
    stripePaymentMethodId: string
    type: string
    brand?: string | null
    last4?: string | null
    expMonth?: number | null
    expYear?: number | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodUncheckedCreateWithoutUserInput = {
    id?: string
    stripePaymentMethodId: string
    type: string
    brand?: string | null
    last4?: string | null
    expMonth?: number | null
    expYear?: number | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodCreateOrConnectWithoutUserInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput>
  }

  export type PaymentMethodCreateManyUserInputEnvelope = {
    data: PaymentMethodCreateManyUserInput | PaymentMethodCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    stripeSubscriptionId?: string | null
    status?: $Enums.SubscriptionStatus
    startedAt: Date | string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    retryCount?: number
    firstFailedAt?: Date | string | null
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nextCreditRefillAt: Date | string
    billingTransactions?: BillingTransactionCreateNestedManyWithoutSubscriptionInput
    creditAllocations?: CreditAllocationCreateNestedManyWithoutSubscriptionInput
    subscriptionPrice: SubscriptionPriceCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    stripeSubscriptionId?: string | null
    status?: $Enums.SubscriptionStatus
    startedAt: Date | string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    retryCount?: number
    firstFailedAt?: Date | string | null
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionPriceId: string
    nextCreditRefillAt: Date | string
    billingTransactions?: BillingTransactionUncheckedCreateNestedManyWithoutSubscriptionInput
    creditAllocations?: CreditAllocationUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateManyUserInputEnvelope = {
    data: SubscriptionCreateManyUserInput | SubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AddonPurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: AddonPurchaseWhereUniqueInput
    update: XOR<AddonPurchaseUpdateWithoutUserInput, AddonPurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<AddonPurchaseCreateWithoutUserInput, AddonPurchaseUncheckedCreateWithoutUserInput>
  }

  export type AddonPurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: AddonPurchaseWhereUniqueInput
    data: XOR<AddonPurchaseUpdateWithoutUserInput, AddonPurchaseUncheckedUpdateWithoutUserInput>
  }

  export type AddonPurchaseUpdateManyWithWhereWithoutUserInput = {
    where: AddonPurchaseScalarWhereInput
    data: XOR<AddonPurchaseUpdateManyMutationInput, AddonPurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type AddonPurchaseScalarWhereInput = {
    AND?: AddonPurchaseScalarWhereInput | AddonPurchaseScalarWhereInput[]
    OR?: AddonPurchaseScalarWhereInput[]
    NOT?: AddonPurchaseScalarWhereInput | AddonPurchaseScalarWhereInput[]
    id?: StringFilter<"AddonPurchase"> | string
    userId?: StringFilter<"AddonPurchase"> | string
    credits?: IntFilter<"AddonPurchase"> | number
    amount?: DecimalFilter<"AddonPurchase"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"AddonPurchase"> | string
    status?: EnumPaymentStatusFilter<"AddonPurchase"> | $Enums.PaymentStatus
    stripePaymentIntentId?: StringNullableFilter<"AddonPurchase"> | string | null
    createdAt?: DateTimeFilter<"AddonPurchase"> | Date | string
    updatedAt?: DateTimeFilter<"AddonPurchase"> | Date | string
    creditAddonId?: StringFilter<"AddonPurchase"> | string
  }

  export type BillingTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: BillingTransactionWhereUniqueInput
    update: XOR<BillingTransactionUpdateWithoutUserInput, BillingTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<BillingTransactionCreateWithoutUserInput, BillingTransactionUncheckedCreateWithoutUserInput>
  }

  export type BillingTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: BillingTransactionWhereUniqueInput
    data: XOR<BillingTransactionUpdateWithoutUserInput, BillingTransactionUncheckedUpdateWithoutUserInput>
  }

  export type BillingTransactionUpdateManyWithWhereWithoutUserInput = {
    where: BillingTransactionScalarWhereInput
    data: XOR<BillingTransactionUpdateManyMutationInput, BillingTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type BillingTransactionScalarWhereInput = {
    AND?: BillingTransactionScalarWhereInput | BillingTransactionScalarWhereInput[]
    OR?: BillingTransactionScalarWhereInput[]
    NOT?: BillingTransactionScalarWhereInput | BillingTransactionScalarWhereInput[]
    id?: StringFilter<"BillingTransaction"> | string
    userId?: StringFilter<"BillingTransaction"> | string
    subscriptionId?: StringNullableFilter<"BillingTransaction"> | string | null
    type?: EnumBillingTransactionTypeFilter<"BillingTransaction"> | $Enums.BillingTransactionType
    status?: EnumPaymentStatusFilter<"BillingTransaction"> | $Enums.PaymentStatus
    amount?: DecimalFilter<"BillingTransaction"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"BillingTransaction"> | string
    stripePaymentIntentId?: StringNullableFilter<"BillingTransaction"> | string | null
    stripeInvoiceId?: StringNullableFilter<"BillingTransaction"> | string | null
    stripeChargeId?: StringNullableFilter<"BillingTransaction"> | string | null
    failureReason?: StringNullableFilter<"BillingTransaction"> | string | null
    createdAt?: DateTimeFilter<"BillingTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"BillingTransaction"> | Date | string
    addonPurchaseId?: StringNullableFilter<"BillingTransaction"> | string | null
  }

  export type CreditAccountUpsertWithoutUserInput = {
    update: XOR<CreditAccountUpdateWithoutUserInput, CreditAccountUncheckedUpdateWithoutUserInput>
    create: XOR<CreditAccountCreateWithoutUserInput, CreditAccountUncheckedCreateWithoutUserInput>
    where?: CreditAccountWhereInput
  }

  export type CreditAccountUpdateToOneWithWhereWithoutUserInput = {
    where?: CreditAccountWhereInput
    data: XOR<CreditAccountUpdateWithoutUserInput, CreditAccountUncheckedUpdateWithoutUserInput>
  }

  export type CreditAccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonBalance?: IntFieldUpdateOperationsInput | number
    subscriptionBalance?: IntFieldUpdateOperationsInput | number
    allocations?: CreditAllocationUpdateManyWithoutCreditAccountNestedInput
    transactions?: CreditTransactionUpdateManyWithoutCreditAccountNestedInput
  }

  export type CreditAccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonBalance?: IntFieldUpdateOperationsInput | number
    subscriptionBalance?: IntFieldUpdateOperationsInput | number
    allocations?: CreditAllocationUncheckedUpdateManyWithoutCreditAccountNestedInput
    transactions?: CreditTransactionUncheckedUpdateManyWithoutCreditAccountNestedInput
  }

  export type PaymentMethodUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentMethodWhereUniqueInput
    update: XOR<PaymentMethodUpdateWithoutUserInput, PaymentMethodUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput>
  }

  export type PaymentMethodUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentMethodWhereUniqueInput
    data: XOR<PaymentMethodUpdateWithoutUserInput, PaymentMethodUncheckedUpdateWithoutUserInput>
  }

  export type PaymentMethodUpdateManyWithWhereWithoutUserInput = {
    where: PaymentMethodScalarWhereInput
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentMethodScalarWhereInput = {
    AND?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
    OR?: PaymentMethodScalarWhereInput[]
    NOT?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
    id?: StringFilter<"PaymentMethod"> | string
    userId?: StringFilter<"PaymentMethod"> | string
    stripePaymentMethodId?: StringFilter<"PaymentMethod"> | string
    type?: StringFilter<"PaymentMethod"> | string
    brand?: StringNullableFilter<"PaymentMethod"> | string | null
    last4?: StringNullableFilter<"PaymentMethod"> | string | null
    expMonth?: IntNullableFilter<"PaymentMethod"> | number | null
    expYear?: IntNullableFilter<"PaymentMethod"> | number | null
    isDefault?: BoolFilter<"PaymentMethod"> | boolean
    createdAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethod"> | Date | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    stripeSubscriptionId?: StringNullableFilter<"Subscription"> | string | null
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    startedAt?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodStart?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    retryCount?: IntFilter<"Subscription"> | number
    firstFailedAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    canceledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    subscriptionPriceId?: StringFilter<"Subscription"> | string
    nextCreditRefillAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type SubscriptionPriceCreateWithoutSubscriptionPlanInput = {
    id?: string
    billingCycle: $Enums.BillingCycle
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePriceId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyCredits: number
    subscriptions?: SubscriptionCreateNestedManyWithoutSubscriptionPriceInput
  }

  export type SubscriptionPriceUncheckedCreateWithoutSubscriptionPlanInput = {
    id?: string
    billingCycle: $Enums.BillingCycle
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePriceId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyCredits: number
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutSubscriptionPriceInput
  }

  export type SubscriptionPriceCreateOrConnectWithoutSubscriptionPlanInput = {
    where: SubscriptionPriceWhereUniqueInput
    create: XOR<SubscriptionPriceCreateWithoutSubscriptionPlanInput, SubscriptionPriceUncheckedCreateWithoutSubscriptionPlanInput>
  }

  export type SubscriptionPriceCreateManySubscriptionPlanInputEnvelope = {
    data: SubscriptionPriceCreateManySubscriptionPlanInput | SubscriptionPriceCreateManySubscriptionPlanInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionPriceUpsertWithWhereUniqueWithoutSubscriptionPlanInput = {
    where: SubscriptionPriceWhereUniqueInput
    update: XOR<SubscriptionPriceUpdateWithoutSubscriptionPlanInput, SubscriptionPriceUncheckedUpdateWithoutSubscriptionPlanInput>
    create: XOR<SubscriptionPriceCreateWithoutSubscriptionPlanInput, SubscriptionPriceUncheckedCreateWithoutSubscriptionPlanInput>
  }

  export type SubscriptionPriceUpdateWithWhereUniqueWithoutSubscriptionPlanInput = {
    where: SubscriptionPriceWhereUniqueInput
    data: XOR<SubscriptionPriceUpdateWithoutSubscriptionPlanInput, SubscriptionPriceUncheckedUpdateWithoutSubscriptionPlanInput>
  }

  export type SubscriptionPriceUpdateManyWithWhereWithoutSubscriptionPlanInput = {
    where: SubscriptionPriceScalarWhereInput
    data: XOR<SubscriptionPriceUpdateManyMutationInput, SubscriptionPriceUncheckedUpdateManyWithoutSubscriptionPlanInput>
  }

  export type SubscriptionPriceScalarWhereInput = {
    AND?: SubscriptionPriceScalarWhereInput | SubscriptionPriceScalarWhereInput[]
    OR?: SubscriptionPriceScalarWhereInput[]
    NOT?: SubscriptionPriceScalarWhereInput | SubscriptionPriceScalarWhereInput[]
    id?: StringFilter<"SubscriptionPrice"> | string
    subscriptionPlanId?: StringFilter<"SubscriptionPrice"> | string
    billingCycle?: EnumBillingCycleFilter<"SubscriptionPrice"> | $Enums.BillingCycle
    price?: DecimalFilter<"SubscriptionPrice"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"SubscriptionPrice"> | string
    stripePriceId?: StringNullableFilter<"SubscriptionPrice"> | string | null
    isActive?: BoolFilter<"SubscriptionPrice"> | boolean
    createdAt?: DateTimeFilter<"SubscriptionPrice"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPrice"> | Date | string
    monthlyCredits?: IntFilter<"SubscriptionPrice"> | number
  }

  export type SubscriptionCreateWithoutSubscriptionPriceInput = {
    id?: string
    stripeSubscriptionId?: string | null
    status?: $Enums.SubscriptionStatus
    startedAt: Date | string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    retryCount?: number
    firstFailedAt?: Date | string | null
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nextCreditRefillAt: Date | string
    billingTransactions?: BillingTransactionCreateNestedManyWithoutSubscriptionInput
    creditAllocations?: CreditAllocationCreateNestedManyWithoutSubscriptionInput
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutSubscriptionPriceInput = {
    id?: string
    userId: string
    stripeSubscriptionId?: string | null
    status?: $Enums.SubscriptionStatus
    startedAt: Date | string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    retryCount?: number
    firstFailedAt?: Date | string | null
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nextCreditRefillAt: Date | string
    billingTransactions?: BillingTransactionUncheckedCreateNestedManyWithoutSubscriptionInput
    creditAllocations?: CreditAllocationUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutSubscriptionPriceInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutSubscriptionPriceInput, SubscriptionUncheckedCreateWithoutSubscriptionPriceInput>
  }

  export type SubscriptionCreateManySubscriptionPriceInputEnvelope = {
    data: SubscriptionCreateManySubscriptionPriceInput | SubscriptionCreateManySubscriptionPriceInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionPlanCreateWithoutPricesInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
  }

  export type SubscriptionPlanUncheckedCreateWithoutPricesInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
  }

  export type SubscriptionPlanCreateOrConnectWithoutPricesInput = {
    where: SubscriptionPlanWhereUniqueInput
    create: XOR<SubscriptionPlanCreateWithoutPricesInput, SubscriptionPlanUncheckedCreateWithoutPricesInput>
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutSubscriptionPriceInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutSubscriptionPriceInput, SubscriptionUncheckedUpdateWithoutSubscriptionPriceInput>
    create: XOR<SubscriptionCreateWithoutSubscriptionPriceInput, SubscriptionUncheckedCreateWithoutSubscriptionPriceInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutSubscriptionPriceInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutSubscriptionPriceInput, SubscriptionUncheckedUpdateWithoutSubscriptionPriceInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutSubscriptionPriceInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutSubscriptionPriceInput>
  }

  export type SubscriptionPlanUpsertWithoutPricesInput = {
    update: XOR<SubscriptionPlanUpdateWithoutPricesInput, SubscriptionPlanUncheckedUpdateWithoutPricesInput>
    create: XOR<SubscriptionPlanCreateWithoutPricesInput, SubscriptionPlanUncheckedCreateWithoutPricesInput>
    where?: SubscriptionPlanWhereInput
  }

  export type SubscriptionPlanUpdateToOneWithWhereWithoutPricesInput = {
    where?: SubscriptionPlanWhereInput
    data: XOR<SubscriptionPlanUpdateWithoutPricesInput, SubscriptionPlanUncheckedUpdateWithoutPricesInput>
  }

  export type SubscriptionPlanUpdateWithoutPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionPlanUncheckedUpdateWithoutPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BillingTransactionCreateWithoutSubscriptionInput = {
    id?: string
    type: $Enums.BillingTransactionType
    status?: $Enums.PaymentStatus
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePaymentIntentId?: string | null
    stripeInvoiceId?: string | null
    stripeChargeId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addonPurchase?: AddonPurchaseCreateNestedOneWithoutBillingTransactionsInput
    user: UserCreateNestedOneWithoutBillingTransactionsInput
  }

  export type BillingTransactionUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    userId: string
    type: $Enums.BillingTransactionType
    status?: $Enums.PaymentStatus
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePaymentIntentId?: string | null
    stripeInvoiceId?: string | null
    stripeChargeId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addonPurchaseId?: string | null
  }

  export type BillingTransactionCreateOrConnectWithoutSubscriptionInput = {
    where: BillingTransactionWhereUniqueInput
    create: XOR<BillingTransactionCreateWithoutSubscriptionInput, BillingTransactionUncheckedCreateWithoutSubscriptionInput>
  }

  export type BillingTransactionCreateManySubscriptionInputEnvelope = {
    data: BillingTransactionCreateManySubscriptionInput | BillingTransactionCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type CreditAllocationCreateWithoutSubscriptionInput = {
    id?: string
    source: $Enums.CreditSource
    totalAmount: number
    remainingAmount: number
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addonPurchase?: AddonPurchaseCreateNestedOneWithoutCreditAllocationsInput
    creditAccount: CreditAccountCreateNestedOneWithoutAllocationsInput
    transactions?: CreditTransactionCreateNestedManyWithoutCreditAllocationInput
  }

  export type CreditAllocationUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    creditAccountId: string
    source: $Enums.CreditSource
    totalAmount: number
    remainingAmount: number
    expiresAt?: Date | string | null
    addonPurchaseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutCreditAllocationInput
  }

  export type CreditAllocationCreateOrConnectWithoutSubscriptionInput = {
    where: CreditAllocationWhereUniqueInput
    create: XOR<CreditAllocationCreateWithoutSubscriptionInput, CreditAllocationUncheckedCreateWithoutSubscriptionInput>
  }

  export type CreditAllocationCreateManySubscriptionInputEnvelope = {
    data: CreditAllocationCreateManySubscriptionInput | CreditAllocationCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionPriceCreateWithoutSubscriptionsInput = {
    id?: string
    billingCycle: $Enums.BillingCycle
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePriceId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyCredits: number
    subscriptionPlan: SubscriptionPlanCreateNestedOneWithoutPricesInput
  }

  export type SubscriptionPriceUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    subscriptionPlanId: string
    billingCycle: $Enums.BillingCycle
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePriceId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyCredits: number
  }

  export type SubscriptionPriceCreateOrConnectWithoutSubscriptionsInput = {
    where: SubscriptionPriceWhereUniqueInput
    create: XOR<SubscriptionPriceCreateWithoutSubscriptionsInput, SubscriptionPriceUncheckedCreateWithoutSubscriptionsInput>
  }

  export type UserCreateWithoutSubscriptionsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId?: string | null
    password: string
    addonPurchases?: AddonPurchaseCreateNestedManyWithoutUserInput
    billingTransactions?: BillingTransactionCreateNestedManyWithoutUserInput
    creditAccount?: CreditAccountCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId?: string | null
    password: string
    addonPurchases?: AddonPurchaseUncheckedCreateNestedManyWithoutUserInput
    billingTransactions?: BillingTransactionUncheckedCreateNestedManyWithoutUserInput
    creditAccount?: CreditAccountUncheckedCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type BillingTransactionUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: BillingTransactionWhereUniqueInput
    update: XOR<BillingTransactionUpdateWithoutSubscriptionInput, BillingTransactionUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<BillingTransactionCreateWithoutSubscriptionInput, BillingTransactionUncheckedCreateWithoutSubscriptionInput>
  }

  export type BillingTransactionUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: BillingTransactionWhereUniqueInput
    data: XOR<BillingTransactionUpdateWithoutSubscriptionInput, BillingTransactionUncheckedUpdateWithoutSubscriptionInput>
  }

  export type BillingTransactionUpdateManyWithWhereWithoutSubscriptionInput = {
    where: BillingTransactionScalarWhereInput
    data: XOR<BillingTransactionUpdateManyMutationInput, BillingTransactionUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type CreditAllocationUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: CreditAllocationWhereUniqueInput
    update: XOR<CreditAllocationUpdateWithoutSubscriptionInput, CreditAllocationUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<CreditAllocationCreateWithoutSubscriptionInput, CreditAllocationUncheckedCreateWithoutSubscriptionInput>
  }

  export type CreditAllocationUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: CreditAllocationWhereUniqueInput
    data: XOR<CreditAllocationUpdateWithoutSubscriptionInput, CreditAllocationUncheckedUpdateWithoutSubscriptionInput>
  }

  export type CreditAllocationUpdateManyWithWhereWithoutSubscriptionInput = {
    where: CreditAllocationScalarWhereInput
    data: XOR<CreditAllocationUpdateManyMutationInput, CreditAllocationUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type CreditAllocationScalarWhereInput = {
    AND?: CreditAllocationScalarWhereInput | CreditAllocationScalarWhereInput[]
    OR?: CreditAllocationScalarWhereInput[]
    NOT?: CreditAllocationScalarWhereInput | CreditAllocationScalarWhereInput[]
    id?: StringFilter<"CreditAllocation"> | string
    creditAccountId?: StringFilter<"CreditAllocation"> | string
    source?: EnumCreditSourceFilter<"CreditAllocation"> | $Enums.CreditSource
    totalAmount?: IntFilter<"CreditAllocation"> | number
    remainingAmount?: IntFilter<"CreditAllocation"> | number
    expiresAt?: DateTimeNullableFilter<"CreditAllocation"> | Date | string | null
    subscriptionId?: StringNullableFilter<"CreditAllocation"> | string | null
    addonPurchaseId?: StringNullableFilter<"CreditAllocation"> | string | null
    createdAt?: DateTimeFilter<"CreditAllocation"> | Date | string
    updatedAt?: DateTimeFilter<"CreditAllocation"> | Date | string
  }

  export type SubscriptionPriceUpsertWithoutSubscriptionsInput = {
    update: XOR<SubscriptionPriceUpdateWithoutSubscriptionsInput, SubscriptionPriceUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<SubscriptionPriceCreateWithoutSubscriptionsInput, SubscriptionPriceUncheckedCreateWithoutSubscriptionsInput>
    where?: SubscriptionPriceWhereInput
  }

  export type SubscriptionPriceUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: SubscriptionPriceWhereInput
    data: XOR<SubscriptionPriceUpdateWithoutSubscriptionsInput, SubscriptionPriceUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type SubscriptionPriceUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCredits?: IntFieldUpdateOperationsInput | number
    subscriptionPlan?: SubscriptionPlanUpdateOneRequiredWithoutPricesNestedInput
  }

  export type SubscriptionPriceUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionPlanId?: StringFieldUpdateOperationsInput | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCredits?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    addonPurchases?: AddonPurchaseUpdateManyWithoutUserNestedInput
    billingTransactions?: BillingTransactionUpdateManyWithoutUserNestedInput
    creditAccount?: CreditAccountUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    addonPurchases?: AddonPurchaseUncheckedUpdateManyWithoutUserNestedInput
    billingTransactions?: BillingTransactionUncheckedUpdateManyWithoutUserNestedInput
    creditAccount?: CreditAccountUncheckedUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPaymentMethodsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId?: string | null
    password: string
    addonPurchases?: AddonPurchaseCreateNestedManyWithoutUserInput
    billingTransactions?: BillingTransactionCreateNestedManyWithoutUserInput
    creditAccount?: CreditAccountCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentMethodsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId?: string | null
    password: string
    addonPurchases?: AddonPurchaseUncheckedCreateNestedManyWithoutUserInput
    billingTransactions?: BillingTransactionUncheckedCreateNestedManyWithoutUserInput
    creditAccount?: CreditAccountUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentMethodsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentMethodsInput, UserUncheckedCreateWithoutPaymentMethodsInput>
  }

  export type UserUpsertWithoutPaymentMethodsInput = {
    update: XOR<UserUpdateWithoutPaymentMethodsInput, UserUncheckedUpdateWithoutPaymentMethodsInput>
    create: XOR<UserCreateWithoutPaymentMethodsInput, UserUncheckedCreateWithoutPaymentMethodsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentMethodsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentMethodsInput, UserUncheckedUpdateWithoutPaymentMethodsInput>
  }

  export type UserUpdateWithoutPaymentMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    addonPurchases?: AddonPurchaseUpdateManyWithoutUserNestedInput
    billingTransactions?: BillingTransactionUpdateManyWithoutUserNestedInput
    creditAccount?: CreditAccountUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    addonPurchases?: AddonPurchaseUncheckedUpdateManyWithoutUserNestedInput
    billingTransactions?: BillingTransactionUncheckedUpdateManyWithoutUserNestedInput
    creditAccount?: CreditAccountUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AddonPurchaseCreateWithoutCreditAllocationsInput = {
    id?: string
    credits: number
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addon: CreditAddonCreateNestedOneWithoutPurchasesInput
    user: UserCreateNestedOneWithoutAddonPurchasesInput
    billingTransactions?: BillingTransactionCreateNestedManyWithoutAddonPurchaseInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutAddonPurchaseInput
  }

  export type AddonPurchaseUncheckedCreateWithoutCreditAllocationsInput = {
    id?: string
    userId: string
    credits: number
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creditAddonId: string
    billingTransactions?: BillingTransactionUncheckedCreateNestedManyWithoutAddonPurchaseInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutAddonPurchaseInput
  }

  export type AddonPurchaseCreateOrConnectWithoutCreditAllocationsInput = {
    where: AddonPurchaseWhereUniqueInput
    create: XOR<AddonPurchaseCreateWithoutCreditAllocationsInput, AddonPurchaseUncheckedCreateWithoutCreditAllocationsInput>
  }

  export type CreditAccountCreateWithoutAllocationsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addonBalance?: number
    subscriptionBalance?: number
    user: UserCreateNestedOneWithoutCreditAccountInput
    transactions?: CreditTransactionCreateNestedManyWithoutCreditAccountInput
  }

  export type CreditAccountUncheckedCreateWithoutAllocationsInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addonBalance?: number
    subscriptionBalance?: number
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutCreditAccountInput
  }

  export type CreditAccountCreateOrConnectWithoutAllocationsInput = {
    where: CreditAccountWhereUniqueInput
    create: XOR<CreditAccountCreateWithoutAllocationsInput, CreditAccountUncheckedCreateWithoutAllocationsInput>
  }

  export type SubscriptionCreateWithoutCreditAllocationsInput = {
    id?: string
    stripeSubscriptionId?: string | null
    status?: $Enums.SubscriptionStatus
    startedAt: Date | string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    retryCount?: number
    firstFailedAt?: Date | string | null
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nextCreditRefillAt: Date | string
    billingTransactions?: BillingTransactionCreateNestedManyWithoutSubscriptionInput
    subscriptionPrice: SubscriptionPriceCreateNestedOneWithoutSubscriptionsInput
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutCreditAllocationsInput = {
    id?: string
    userId: string
    stripeSubscriptionId?: string | null
    status?: $Enums.SubscriptionStatus
    startedAt: Date | string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    retryCount?: number
    firstFailedAt?: Date | string | null
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionPriceId: string
    nextCreditRefillAt: Date | string
    billingTransactions?: BillingTransactionUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutCreditAllocationsInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutCreditAllocationsInput, SubscriptionUncheckedCreateWithoutCreditAllocationsInput>
  }

  export type CreditTransactionCreateWithoutCreditAllocationInput = {
    id?: string
    amount: number
    type: $Enums.CreditTransactionType
    description?: string | null
    balanceBefore: number
    balanceAfter: number
    referenceId?: string | null
    createdAt?: Date | string
    addonPurchase?: AddonPurchaseCreateNestedOneWithoutCreditTransactionsInput
    creditAccount: CreditAccountCreateNestedOneWithoutTransactionsInput
  }

  export type CreditTransactionUncheckedCreateWithoutCreditAllocationInput = {
    id?: string
    creditAccountId: string
    amount: number
    type: $Enums.CreditTransactionType
    description?: string | null
    balanceBefore: number
    balanceAfter: number
    referenceId?: string | null
    createdAt?: Date | string
    addonPurchaseId?: string | null
  }

  export type CreditTransactionCreateOrConnectWithoutCreditAllocationInput = {
    where: CreditTransactionWhereUniqueInput
    create: XOR<CreditTransactionCreateWithoutCreditAllocationInput, CreditTransactionUncheckedCreateWithoutCreditAllocationInput>
  }

  export type CreditTransactionCreateManyCreditAllocationInputEnvelope = {
    data: CreditTransactionCreateManyCreditAllocationInput | CreditTransactionCreateManyCreditAllocationInput[]
    skipDuplicates?: boolean
  }

  export type AddonPurchaseUpsertWithoutCreditAllocationsInput = {
    update: XOR<AddonPurchaseUpdateWithoutCreditAllocationsInput, AddonPurchaseUncheckedUpdateWithoutCreditAllocationsInput>
    create: XOR<AddonPurchaseCreateWithoutCreditAllocationsInput, AddonPurchaseUncheckedCreateWithoutCreditAllocationsInput>
    where?: AddonPurchaseWhereInput
  }

  export type AddonPurchaseUpdateToOneWithWhereWithoutCreditAllocationsInput = {
    where?: AddonPurchaseWhereInput
    data: XOR<AddonPurchaseUpdateWithoutCreditAllocationsInput, AddonPurchaseUncheckedUpdateWithoutCreditAllocationsInput>
  }

  export type AddonPurchaseUpdateWithoutCreditAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addon?: CreditAddonUpdateOneRequiredWithoutPurchasesNestedInput
    user?: UserUpdateOneRequiredWithoutAddonPurchasesNestedInput
    billingTransactions?: BillingTransactionUpdateManyWithoutAddonPurchaseNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutAddonPurchaseNestedInput
  }

  export type AddonPurchaseUncheckedUpdateWithoutCreditAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditAddonId?: StringFieldUpdateOperationsInput | string
    billingTransactions?: BillingTransactionUncheckedUpdateManyWithoutAddonPurchaseNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutAddonPurchaseNestedInput
  }

  export type CreditAccountUpsertWithoutAllocationsInput = {
    update: XOR<CreditAccountUpdateWithoutAllocationsInput, CreditAccountUncheckedUpdateWithoutAllocationsInput>
    create: XOR<CreditAccountCreateWithoutAllocationsInput, CreditAccountUncheckedCreateWithoutAllocationsInput>
    where?: CreditAccountWhereInput
  }

  export type CreditAccountUpdateToOneWithWhereWithoutAllocationsInput = {
    where?: CreditAccountWhereInput
    data: XOR<CreditAccountUpdateWithoutAllocationsInput, CreditAccountUncheckedUpdateWithoutAllocationsInput>
  }

  export type CreditAccountUpdateWithoutAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonBalance?: IntFieldUpdateOperationsInput | number
    subscriptionBalance?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCreditAccountNestedInput
    transactions?: CreditTransactionUpdateManyWithoutCreditAccountNestedInput
  }

  export type CreditAccountUncheckedUpdateWithoutAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonBalance?: IntFieldUpdateOperationsInput | number
    subscriptionBalance?: IntFieldUpdateOperationsInput | number
    transactions?: CreditTransactionUncheckedUpdateManyWithoutCreditAccountNestedInput
  }

  export type SubscriptionUpsertWithoutCreditAllocationsInput = {
    update: XOR<SubscriptionUpdateWithoutCreditAllocationsInput, SubscriptionUncheckedUpdateWithoutCreditAllocationsInput>
    create: XOR<SubscriptionCreateWithoutCreditAllocationsInput, SubscriptionUncheckedCreateWithoutCreditAllocationsInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutCreditAllocationsInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutCreditAllocationsInput, SubscriptionUncheckedUpdateWithoutCreditAllocationsInput>
  }

  export type SubscriptionUpdateWithoutCreditAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    retryCount?: IntFieldUpdateOperationsInput | number
    firstFailedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextCreditRefillAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billingTransactions?: BillingTransactionUpdateManyWithoutSubscriptionNestedInput
    subscriptionPrice?: SubscriptionPriceUpdateOneRequiredWithoutSubscriptionsNestedInput
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutCreditAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    retryCount?: IntFieldUpdateOperationsInput | number
    firstFailedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionPriceId?: StringFieldUpdateOperationsInput | string
    nextCreditRefillAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billingTransactions?: BillingTransactionUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type CreditTransactionUpsertWithWhereUniqueWithoutCreditAllocationInput = {
    where: CreditTransactionWhereUniqueInput
    update: XOR<CreditTransactionUpdateWithoutCreditAllocationInput, CreditTransactionUncheckedUpdateWithoutCreditAllocationInput>
    create: XOR<CreditTransactionCreateWithoutCreditAllocationInput, CreditTransactionUncheckedCreateWithoutCreditAllocationInput>
  }

  export type CreditTransactionUpdateWithWhereUniqueWithoutCreditAllocationInput = {
    where: CreditTransactionWhereUniqueInput
    data: XOR<CreditTransactionUpdateWithoutCreditAllocationInput, CreditTransactionUncheckedUpdateWithoutCreditAllocationInput>
  }

  export type CreditTransactionUpdateManyWithWhereWithoutCreditAllocationInput = {
    where: CreditTransactionScalarWhereInput
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyWithoutCreditAllocationInput>
  }

  export type CreditTransactionScalarWhereInput = {
    AND?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
    OR?: CreditTransactionScalarWhereInput[]
    NOT?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
    id?: StringFilter<"CreditTransaction"> | string
    creditAccountId?: StringFilter<"CreditTransaction"> | string
    amount?: IntFilter<"CreditTransaction"> | number
    type?: EnumCreditTransactionTypeFilter<"CreditTransaction"> | $Enums.CreditTransactionType
    description?: StringNullableFilter<"CreditTransaction"> | string | null
    balanceBefore?: IntFilter<"CreditTransaction"> | number
    balanceAfter?: IntFilter<"CreditTransaction"> | number
    referenceId?: StringNullableFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    addonPurchaseId?: StringNullableFilter<"CreditTransaction"> | string | null
    creditAllocationId?: StringNullableFilter<"CreditTransaction"> | string | null
  }

  export type UserCreateWithoutCreditAccountInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId?: string | null
    password: string
    addonPurchases?: AddonPurchaseCreateNestedManyWithoutUserInput
    billingTransactions?: BillingTransactionCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreditAccountInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId?: string | null
    password: string
    addonPurchases?: AddonPurchaseUncheckedCreateNestedManyWithoutUserInput
    billingTransactions?: BillingTransactionUncheckedCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreditAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreditAccountInput, UserUncheckedCreateWithoutCreditAccountInput>
  }

  export type CreditAllocationCreateWithoutCreditAccountInput = {
    id?: string
    source: $Enums.CreditSource
    totalAmount: number
    remainingAmount: number
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addonPurchase?: AddonPurchaseCreateNestedOneWithoutCreditAllocationsInput
    subscription?: SubscriptionCreateNestedOneWithoutCreditAllocationsInput
    transactions?: CreditTransactionCreateNestedManyWithoutCreditAllocationInput
  }

  export type CreditAllocationUncheckedCreateWithoutCreditAccountInput = {
    id?: string
    source: $Enums.CreditSource
    totalAmount: number
    remainingAmount: number
    expiresAt?: Date | string | null
    subscriptionId?: string | null
    addonPurchaseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutCreditAllocationInput
  }

  export type CreditAllocationCreateOrConnectWithoutCreditAccountInput = {
    where: CreditAllocationWhereUniqueInput
    create: XOR<CreditAllocationCreateWithoutCreditAccountInput, CreditAllocationUncheckedCreateWithoutCreditAccountInput>
  }

  export type CreditAllocationCreateManyCreditAccountInputEnvelope = {
    data: CreditAllocationCreateManyCreditAccountInput | CreditAllocationCreateManyCreditAccountInput[]
    skipDuplicates?: boolean
  }

  export type CreditTransactionCreateWithoutCreditAccountInput = {
    id?: string
    amount: number
    type: $Enums.CreditTransactionType
    description?: string | null
    balanceBefore: number
    balanceAfter: number
    referenceId?: string | null
    createdAt?: Date | string
    addonPurchase?: AddonPurchaseCreateNestedOneWithoutCreditTransactionsInput
    creditAllocation?: CreditAllocationCreateNestedOneWithoutTransactionsInput
  }

  export type CreditTransactionUncheckedCreateWithoutCreditAccountInput = {
    id?: string
    amount: number
    type: $Enums.CreditTransactionType
    description?: string | null
    balanceBefore: number
    balanceAfter: number
    referenceId?: string | null
    createdAt?: Date | string
    addonPurchaseId?: string | null
    creditAllocationId?: string | null
  }

  export type CreditTransactionCreateOrConnectWithoutCreditAccountInput = {
    where: CreditTransactionWhereUniqueInput
    create: XOR<CreditTransactionCreateWithoutCreditAccountInput, CreditTransactionUncheckedCreateWithoutCreditAccountInput>
  }

  export type CreditTransactionCreateManyCreditAccountInputEnvelope = {
    data: CreditTransactionCreateManyCreditAccountInput | CreditTransactionCreateManyCreditAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreditAccountInput = {
    update: XOR<UserUpdateWithoutCreditAccountInput, UserUncheckedUpdateWithoutCreditAccountInput>
    create: XOR<UserCreateWithoutCreditAccountInput, UserUncheckedCreateWithoutCreditAccountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreditAccountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreditAccountInput, UserUncheckedUpdateWithoutCreditAccountInput>
  }

  export type UserUpdateWithoutCreditAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    addonPurchases?: AddonPurchaseUpdateManyWithoutUserNestedInput
    billingTransactions?: BillingTransactionUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreditAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    addonPurchases?: AddonPurchaseUncheckedUpdateManyWithoutUserNestedInput
    billingTransactions?: BillingTransactionUncheckedUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CreditAllocationUpsertWithWhereUniqueWithoutCreditAccountInput = {
    where: CreditAllocationWhereUniqueInput
    update: XOR<CreditAllocationUpdateWithoutCreditAccountInput, CreditAllocationUncheckedUpdateWithoutCreditAccountInput>
    create: XOR<CreditAllocationCreateWithoutCreditAccountInput, CreditAllocationUncheckedCreateWithoutCreditAccountInput>
  }

  export type CreditAllocationUpdateWithWhereUniqueWithoutCreditAccountInput = {
    where: CreditAllocationWhereUniqueInput
    data: XOR<CreditAllocationUpdateWithoutCreditAccountInput, CreditAllocationUncheckedUpdateWithoutCreditAccountInput>
  }

  export type CreditAllocationUpdateManyWithWhereWithoutCreditAccountInput = {
    where: CreditAllocationScalarWhereInput
    data: XOR<CreditAllocationUpdateManyMutationInput, CreditAllocationUncheckedUpdateManyWithoutCreditAccountInput>
  }

  export type CreditTransactionUpsertWithWhereUniqueWithoutCreditAccountInput = {
    where: CreditTransactionWhereUniqueInput
    update: XOR<CreditTransactionUpdateWithoutCreditAccountInput, CreditTransactionUncheckedUpdateWithoutCreditAccountInput>
    create: XOR<CreditTransactionCreateWithoutCreditAccountInput, CreditTransactionUncheckedCreateWithoutCreditAccountInput>
  }

  export type CreditTransactionUpdateWithWhereUniqueWithoutCreditAccountInput = {
    where: CreditTransactionWhereUniqueInput
    data: XOR<CreditTransactionUpdateWithoutCreditAccountInput, CreditTransactionUncheckedUpdateWithoutCreditAccountInput>
  }

  export type CreditTransactionUpdateManyWithWhereWithoutCreditAccountInput = {
    where: CreditTransactionScalarWhereInput
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyWithoutCreditAccountInput>
  }

  export type AddonPurchaseCreateWithoutCreditTransactionsInput = {
    id?: string
    credits: number
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addon: CreditAddonCreateNestedOneWithoutPurchasesInput
    user: UserCreateNestedOneWithoutAddonPurchasesInput
    billingTransactions?: BillingTransactionCreateNestedManyWithoutAddonPurchaseInput
    creditAllocations?: CreditAllocationCreateNestedManyWithoutAddonPurchaseInput
  }

  export type AddonPurchaseUncheckedCreateWithoutCreditTransactionsInput = {
    id?: string
    userId: string
    credits: number
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creditAddonId: string
    billingTransactions?: BillingTransactionUncheckedCreateNestedManyWithoutAddonPurchaseInput
    creditAllocations?: CreditAllocationUncheckedCreateNestedManyWithoutAddonPurchaseInput
  }

  export type AddonPurchaseCreateOrConnectWithoutCreditTransactionsInput = {
    where: AddonPurchaseWhereUniqueInput
    create: XOR<AddonPurchaseCreateWithoutCreditTransactionsInput, AddonPurchaseUncheckedCreateWithoutCreditTransactionsInput>
  }

  export type CreditAccountCreateWithoutTransactionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addonBalance?: number
    subscriptionBalance?: number
    user: UserCreateNestedOneWithoutCreditAccountInput
    allocations?: CreditAllocationCreateNestedManyWithoutCreditAccountInput
  }

  export type CreditAccountUncheckedCreateWithoutTransactionsInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addonBalance?: number
    subscriptionBalance?: number
    allocations?: CreditAllocationUncheckedCreateNestedManyWithoutCreditAccountInput
  }

  export type CreditAccountCreateOrConnectWithoutTransactionsInput = {
    where: CreditAccountWhereUniqueInput
    create: XOR<CreditAccountCreateWithoutTransactionsInput, CreditAccountUncheckedCreateWithoutTransactionsInput>
  }

  export type CreditAllocationCreateWithoutTransactionsInput = {
    id?: string
    source: $Enums.CreditSource
    totalAmount: number
    remainingAmount: number
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addonPurchase?: AddonPurchaseCreateNestedOneWithoutCreditAllocationsInput
    creditAccount: CreditAccountCreateNestedOneWithoutAllocationsInput
    subscription?: SubscriptionCreateNestedOneWithoutCreditAllocationsInput
  }

  export type CreditAllocationUncheckedCreateWithoutTransactionsInput = {
    id?: string
    creditAccountId: string
    source: $Enums.CreditSource
    totalAmount: number
    remainingAmount: number
    expiresAt?: Date | string | null
    subscriptionId?: string | null
    addonPurchaseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditAllocationCreateOrConnectWithoutTransactionsInput = {
    where: CreditAllocationWhereUniqueInput
    create: XOR<CreditAllocationCreateWithoutTransactionsInput, CreditAllocationUncheckedCreateWithoutTransactionsInput>
  }

  export type AddonPurchaseUpsertWithoutCreditTransactionsInput = {
    update: XOR<AddonPurchaseUpdateWithoutCreditTransactionsInput, AddonPurchaseUncheckedUpdateWithoutCreditTransactionsInput>
    create: XOR<AddonPurchaseCreateWithoutCreditTransactionsInput, AddonPurchaseUncheckedCreateWithoutCreditTransactionsInput>
    where?: AddonPurchaseWhereInput
  }

  export type AddonPurchaseUpdateToOneWithWhereWithoutCreditTransactionsInput = {
    where?: AddonPurchaseWhereInput
    data: XOR<AddonPurchaseUpdateWithoutCreditTransactionsInput, AddonPurchaseUncheckedUpdateWithoutCreditTransactionsInput>
  }

  export type AddonPurchaseUpdateWithoutCreditTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addon?: CreditAddonUpdateOneRequiredWithoutPurchasesNestedInput
    user?: UserUpdateOneRequiredWithoutAddonPurchasesNestedInput
    billingTransactions?: BillingTransactionUpdateManyWithoutAddonPurchaseNestedInput
    creditAllocations?: CreditAllocationUpdateManyWithoutAddonPurchaseNestedInput
  }

  export type AddonPurchaseUncheckedUpdateWithoutCreditTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditAddonId?: StringFieldUpdateOperationsInput | string
    billingTransactions?: BillingTransactionUncheckedUpdateManyWithoutAddonPurchaseNestedInput
    creditAllocations?: CreditAllocationUncheckedUpdateManyWithoutAddonPurchaseNestedInput
  }

  export type CreditAccountUpsertWithoutTransactionsInput = {
    update: XOR<CreditAccountUpdateWithoutTransactionsInput, CreditAccountUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CreditAccountCreateWithoutTransactionsInput, CreditAccountUncheckedCreateWithoutTransactionsInput>
    where?: CreditAccountWhereInput
  }

  export type CreditAccountUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CreditAccountWhereInput
    data: XOR<CreditAccountUpdateWithoutTransactionsInput, CreditAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type CreditAccountUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonBalance?: IntFieldUpdateOperationsInput | number
    subscriptionBalance?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCreditAccountNestedInput
    allocations?: CreditAllocationUpdateManyWithoutCreditAccountNestedInput
  }

  export type CreditAccountUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonBalance?: IntFieldUpdateOperationsInput | number
    subscriptionBalance?: IntFieldUpdateOperationsInput | number
    allocations?: CreditAllocationUncheckedUpdateManyWithoutCreditAccountNestedInput
  }

  export type CreditAllocationUpsertWithoutTransactionsInput = {
    update: XOR<CreditAllocationUpdateWithoutTransactionsInput, CreditAllocationUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CreditAllocationCreateWithoutTransactionsInput, CreditAllocationUncheckedCreateWithoutTransactionsInput>
    where?: CreditAllocationWhereInput
  }

  export type CreditAllocationUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CreditAllocationWhereInput
    data: XOR<CreditAllocationUpdateWithoutTransactionsInput, CreditAllocationUncheckedUpdateWithoutTransactionsInput>
  }

  export type CreditAllocationUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumCreditSourceFieldUpdateOperationsInput | $Enums.CreditSource
    totalAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchase?: AddonPurchaseUpdateOneWithoutCreditAllocationsNestedInput
    creditAccount?: CreditAccountUpdateOneRequiredWithoutAllocationsNestedInput
    subscription?: SubscriptionUpdateOneWithoutCreditAllocationsNestedInput
  }

  export type CreditAllocationUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    source?: EnumCreditSourceFieldUpdateOperationsInput | $Enums.CreditSource
    totalAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    addonPurchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddonPurchaseCreateWithoutBillingTransactionsInput = {
    id?: string
    credits: number
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addon: CreditAddonCreateNestedOneWithoutPurchasesInput
    user: UserCreateNestedOneWithoutAddonPurchasesInput
    creditAllocations?: CreditAllocationCreateNestedManyWithoutAddonPurchaseInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutAddonPurchaseInput
  }

  export type AddonPurchaseUncheckedCreateWithoutBillingTransactionsInput = {
    id?: string
    userId: string
    credits: number
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creditAddonId: string
    creditAllocations?: CreditAllocationUncheckedCreateNestedManyWithoutAddonPurchaseInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutAddonPurchaseInput
  }

  export type AddonPurchaseCreateOrConnectWithoutBillingTransactionsInput = {
    where: AddonPurchaseWhereUniqueInput
    create: XOR<AddonPurchaseCreateWithoutBillingTransactionsInput, AddonPurchaseUncheckedCreateWithoutBillingTransactionsInput>
  }

  export type SubscriptionCreateWithoutBillingTransactionsInput = {
    id?: string
    stripeSubscriptionId?: string | null
    status?: $Enums.SubscriptionStatus
    startedAt: Date | string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    retryCount?: number
    firstFailedAt?: Date | string | null
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nextCreditRefillAt: Date | string
    creditAllocations?: CreditAllocationCreateNestedManyWithoutSubscriptionInput
    subscriptionPrice: SubscriptionPriceCreateNestedOneWithoutSubscriptionsInput
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutBillingTransactionsInput = {
    id?: string
    userId: string
    stripeSubscriptionId?: string | null
    status?: $Enums.SubscriptionStatus
    startedAt: Date | string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    retryCount?: number
    firstFailedAt?: Date | string | null
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionPriceId: string
    nextCreditRefillAt: Date | string
    creditAllocations?: CreditAllocationUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutBillingTransactionsInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutBillingTransactionsInput, SubscriptionUncheckedCreateWithoutBillingTransactionsInput>
  }

  export type UserCreateWithoutBillingTransactionsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId?: string | null
    password: string
    addonPurchases?: AddonPurchaseCreateNestedManyWithoutUserInput
    creditAccount?: CreditAccountCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBillingTransactionsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId?: string | null
    password: string
    addonPurchases?: AddonPurchaseUncheckedCreateNestedManyWithoutUserInput
    creditAccount?: CreditAccountUncheckedCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBillingTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBillingTransactionsInput, UserUncheckedCreateWithoutBillingTransactionsInput>
  }

  export type AddonPurchaseUpsertWithoutBillingTransactionsInput = {
    update: XOR<AddonPurchaseUpdateWithoutBillingTransactionsInput, AddonPurchaseUncheckedUpdateWithoutBillingTransactionsInput>
    create: XOR<AddonPurchaseCreateWithoutBillingTransactionsInput, AddonPurchaseUncheckedCreateWithoutBillingTransactionsInput>
    where?: AddonPurchaseWhereInput
  }

  export type AddonPurchaseUpdateToOneWithWhereWithoutBillingTransactionsInput = {
    where?: AddonPurchaseWhereInput
    data: XOR<AddonPurchaseUpdateWithoutBillingTransactionsInput, AddonPurchaseUncheckedUpdateWithoutBillingTransactionsInput>
  }

  export type AddonPurchaseUpdateWithoutBillingTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addon?: CreditAddonUpdateOneRequiredWithoutPurchasesNestedInput
    user?: UserUpdateOneRequiredWithoutAddonPurchasesNestedInput
    creditAllocations?: CreditAllocationUpdateManyWithoutAddonPurchaseNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutAddonPurchaseNestedInput
  }

  export type AddonPurchaseUncheckedUpdateWithoutBillingTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditAddonId?: StringFieldUpdateOperationsInput | string
    creditAllocations?: CreditAllocationUncheckedUpdateManyWithoutAddonPurchaseNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutAddonPurchaseNestedInput
  }

  export type SubscriptionUpsertWithoutBillingTransactionsInput = {
    update: XOR<SubscriptionUpdateWithoutBillingTransactionsInput, SubscriptionUncheckedUpdateWithoutBillingTransactionsInput>
    create: XOR<SubscriptionCreateWithoutBillingTransactionsInput, SubscriptionUncheckedCreateWithoutBillingTransactionsInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutBillingTransactionsInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutBillingTransactionsInput, SubscriptionUncheckedUpdateWithoutBillingTransactionsInput>
  }

  export type SubscriptionUpdateWithoutBillingTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    retryCount?: IntFieldUpdateOperationsInput | number
    firstFailedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextCreditRefillAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditAllocations?: CreditAllocationUpdateManyWithoutSubscriptionNestedInput
    subscriptionPrice?: SubscriptionPriceUpdateOneRequiredWithoutSubscriptionsNestedInput
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutBillingTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    retryCount?: IntFieldUpdateOperationsInput | number
    firstFailedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionPriceId?: StringFieldUpdateOperationsInput | string
    nextCreditRefillAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditAllocations?: CreditAllocationUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type UserUpsertWithoutBillingTransactionsInput = {
    update: XOR<UserUpdateWithoutBillingTransactionsInput, UserUncheckedUpdateWithoutBillingTransactionsInput>
    create: XOR<UserCreateWithoutBillingTransactionsInput, UserUncheckedCreateWithoutBillingTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBillingTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBillingTransactionsInput, UserUncheckedUpdateWithoutBillingTransactionsInput>
  }

  export type UserUpdateWithoutBillingTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    addonPurchases?: AddonPurchaseUpdateManyWithoutUserNestedInput
    creditAccount?: CreditAccountUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBillingTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    addonPurchases?: AddonPurchaseUncheckedUpdateManyWithoutUserNestedInput
    creditAccount?: CreditAccountUncheckedUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AddonPurchaseCreateWithoutAddonInput = {
    id?: string
    credits: number
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAddonPurchasesInput
    billingTransactions?: BillingTransactionCreateNestedManyWithoutAddonPurchaseInput
    creditAllocations?: CreditAllocationCreateNestedManyWithoutAddonPurchaseInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutAddonPurchaseInput
  }

  export type AddonPurchaseUncheckedCreateWithoutAddonInput = {
    id?: string
    userId: string
    credits: number
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    billingTransactions?: BillingTransactionUncheckedCreateNestedManyWithoutAddonPurchaseInput
    creditAllocations?: CreditAllocationUncheckedCreateNestedManyWithoutAddonPurchaseInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutAddonPurchaseInput
  }

  export type AddonPurchaseCreateOrConnectWithoutAddonInput = {
    where: AddonPurchaseWhereUniqueInput
    create: XOR<AddonPurchaseCreateWithoutAddonInput, AddonPurchaseUncheckedCreateWithoutAddonInput>
  }

  export type AddonPurchaseCreateManyAddonInputEnvelope = {
    data: AddonPurchaseCreateManyAddonInput | AddonPurchaseCreateManyAddonInput[]
    skipDuplicates?: boolean
  }

  export type AddonPurchaseUpsertWithWhereUniqueWithoutAddonInput = {
    where: AddonPurchaseWhereUniqueInput
    update: XOR<AddonPurchaseUpdateWithoutAddonInput, AddonPurchaseUncheckedUpdateWithoutAddonInput>
    create: XOR<AddonPurchaseCreateWithoutAddonInput, AddonPurchaseUncheckedCreateWithoutAddonInput>
  }

  export type AddonPurchaseUpdateWithWhereUniqueWithoutAddonInput = {
    where: AddonPurchaseWhereUniqueInput
    data: XOR<AddonPurchaseUpdateWithoutAddonInput, AddonPurchaseUncheckedUpdateWithoutAddonInput>
  }

  export type AddonPurchaseUpdateManyWithWhereWithoutAddonInput = {
    where: AddonPurchaseScalarWhereInput
    data: XOR<AddonPurchaseUpdateManyMutationInput, AddonPurchaseUncheckedUpdateManyWithoutAddonInput>
  }

  export type CreditAddonCreateWithoutPurchasesInput = {
    id?: string
    name: string
    credits: number
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePriceId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditAddonUncheckedCreateWithoutPurchasesInput = {
    id?: string
    name: string
    credits: number
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePriceId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditAddonCreateOrConnectWithoutPurchasesInput = {
    where: CreditAddonWhereUniqueInput
    create: XOR<CreditAddonCreateWithoutPurchasesInput, CreditAddonUncheckedCreateWithoutPurchasesInput>
  }

  export type UserCreateWithoutAddonPurchasesInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId?: string | null
    password: string
    billingTransactions?: BillingTransactionCreateNestedManyWithoutUserInput
    creditAccount?: CreditAccountCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddonPurchasesInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId?: string | null
    password: string
    billingTransactions?: BillingTransactionUncheckedCreateNestedManyWithoutUserInput
    creditAccount?: CreditAccountUncheckedCreateNestedOneWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddonPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddonPurchasesInput, UserUncheckedCreateWithoutAddonPurchasesInput>
  }

  export type BillingTransactionCreateWithoutAddonPurchaseInput = {
    id?: string
    type: $Enums.BillingTransactionType
    status?: $Enums.PaymentStatus
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePaymentIntentId?: string | null
    stripeInvoiceId?: string | null
    stripeChargeId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutBillingTransactionsInput
    user: UserCreateNestedOneWithoutBillingTransactionsInput
  }

  export type BillingTransactionUncheckedCreateWithoutAddonPurchaseInput = {
    id?: string
    userId: string
    subscriptionId?: string | null
    type: $Enums.BillingTransactionType
    status?: $Enums.PaymentStatus
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePaymentIntentId?: string | null
    stripeInvoiceId?: string | null
    stripeChargeId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillingTransactionCreateOrConnectWithoutAddonPurchaseInput = {
    where: BillingTransactionWhereUniqueInput
    create: XOR<BillingTransactionCreateWithoutAddonPurchaseInput, BillingTransactionUncheckedCreateWithoutAddonPurchaseInput>
  }

  export type BillingTransactionCreateManyAddonPurchaseInputEnvelope = {
    data: BillingTransactionCreateManyAddonPurchaseInput | BillingTransactionCreateManyAddonPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type CreditAllocationCreateWithoutAddonPurchaseInput = {
    id?: string
    source: $Enums.CreditSource
    totalAmount: number
    remainingAmount: number
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creditAccount: CreditAccountCreateNestedOneWithoutAllocationsInput
    subscription?: SubscriptionCreateNestedOneWithoutCreditAllocationsInput
    transactions?: CreditTransactionCreateNestedManyWithoutCreditAllocationInput
  }

  export type CreditAllocationUncheckedCreateWithoutAddonPurchaseInput = {
    id?: string
    creditAccountId: string
    source: $Enums.CreditSource
    totalAmount: number
    remainingAmount: number
    expiresAt?: Date | string | null
    subscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutCreditAllocationInput
  }

  export type CreditAllocationCreateOrConnectWithoutAddonPurchaseInput = {
    where: CreditAllocationWhereUniqueInput
    create: XOR<CreditAllocationCreateWithoutAddonPurchaseInput, CreditAllocationUncheckedCreateWithoutAddonPurchaseInput>
  }

  export type CreditAllocationCreateManyAddonPurchaseInputEnvelope = {
    data: CreditAllocationCreateManyAddonPurchaseInput | CreditAllocationCreateManyAddonPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type CreditTransactionCreateWithoutAddonPurchaseInput = {
    id?: string
    amount: number
    type: $Enums.CreditTransactionType
    description?: string | null
    balanceBefore: number
    balanceAfter: number
    referenceId?: string | null
    createdAt?: Date | string
    creditAccount: CreditAccountCreateNestedOneWithoutTransactionsInput
    creditAllocation?: CreditAllocationCreateNestedOneWithoutTransactionsInput
  }

  export type CreditTransactionUncheckedCreateWithoutAddonPurchaseInput = {
    id?: string
    creditAccountId: string
    amount: number
    type: $Enums.CreditTransactionType
    description?: string | null
    balanceBefore: number
    balanceAfter: number
    referenceId?: string | null
    createdAt?: Date | string
    creditAllocationId?: string | null
  }

  export type CreditTransactionCreateOrConnectWithoutAddonPurchaseInput = {
    where: CreditTransactionWhereUniqueInput
    create: XOR<CreditTransactionCreateWithoutAddonPurchaseInput, CreditTransactionUncheckedCreateWithoutAddonPurchaseInput>
  }

  export type CreditTransactionCreateManyAddonPurchaseInputEnvelope = {
    data: CreditTransactionCreateManyAddonPurchaseInput | CreditTransactionCreateManyAddonPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type CreditAddonUpsertWithoutPurchasesInput = {
    update: XOR<CreditAddonUpdateWithoutPurchasesInput, CreditAddonUncheckedUpdateWithoutPurchasesInput>
    create: XOR<CreditAddonCreateWithoutPurchasesInput, CreditAddonUncheckedCreateWithoutPurchasesInput>
    where?: CreditAddonWhereInput
  }

  export type CreditAddonUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: CreditAddonWhereInput
    data: XOR<CreditAddonUpdateWithoutPurchasesInput, CreditAddonUncheckedUpdateWithoutPurchasesInput>
  }

  export type CreditAddonUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditAddonUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutAddonPurchasesInput = {
    update: XOR<UserUpdateWithoutAddonPurchasesInput, UserUncheckedUpdateWithoutAddonPurchasesInput>
    create: XOR<UserCreateWithoutAddonPurchasesInput, UserUncheckedCreateWithoutAddonPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddonPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddonPurchasesInput, UserUncheckedUpdateWithoutAddonPurchasesInput>
  }

  export type UserUpdateWithoutAddonPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    billingTransactions?: BillingTransactionUpdateManyWithoutUserNestedInput
    creditAccount?: CreditAccountUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddonPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    billingTransactions?: BillingTransactionUncheckedUpdateManyWithoutUserNestedInput
    creditAccount?: CreditAccountUncheckedUpdateOneWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BillingTransactionUpsertWithWhereUniqueWithoutAddonPurchaseInput = {
    where: BillingTransactionWhereUniqueInput
    update: XOR<BillingTransactionUpdateWithoutAddonPurchaseInput, BillingTransactionUncheckedUpdateWithoutAddonPurchaseInput>
    create: XOR<BillingTransactionCreateWithoutAddonPurchaseInput, BillingTransactionUncheckedCreateWithoutAddonPurchaseInput>
  }

  export type BillingTransactionUpdateWithWhereUniqueWithoutAddonPurchaseInput = {
    where: BillingTransactionWhereUniqueInput
    data: XOR<BillingTransactionUpdateWithoutAddonPurchaseInput, BillingTransactionUncheckedUpdateWithoutAddonPurchaseInput>
  }

  export type BillingTransactionUpdateManyWithWhereWithoutAddonPurchaseInput = {
    where: BillingTransactionScalarWhereInput
    data: XOR<BillingTransactionUpdateManyMutationInput, BillingTransactionUncheckedUpdateManyWithoutAddonPurchaseInput>
  }

  export type CreditAllocationUpsertWithWhereUniqueWithoutAddonPurchaseInput = {
    where: CreditAllocationWhereUniqueInput
    update: XOR<CreditAllocationUpdateWithoutAddonPurchaseInput, CreditAllocationUncheckedUpdateWithoutAddonPurchaseInput>
    create: XOR<CreditAllocationCreateWithoutAddonPurchaseInput, CreditAllocationUncheckedCreateWithoutAddonPurchaseInput>
  }

  export type CreditAllocationUpdateWithWhereUniqueWithoutAddonPurchaseInput = {
    where: CreditAllocationWhereUniqueInput
    data: XOR<CreditAllocationUpdateWithoutAddonPurchaseInput, CreditAllocationUncheckedUpdateWithoutAddonPurchaseInput>
  }

  export type CreditAllocationUpdateManyWithWhereWithoutAddonPurchaseInput = {
    where: CreditAllocationScalarWhereInput
    data: XOR<CreditAllocationUpdateManyMutationInput, CreditAllocationUncheckedUpdateManyWithoutAddonPurchaseInput>
  }

  export type CreditTransactionUpsertWithWhereUniqueWithoutAddonPurchaseInput = {
    where: CreditTransactionWhereUniqueInput
    update: XOR<CreditTransactionUpdateWithoutAddonPurchaseInput, CreditTransactionUncheckedUpdateWithoutAddonPurchaseInput>
    create: XOR<CreditTransactionCreateWithoutAddonPurchaseInput, CreditTransactionUncheckedCreateWithoutAddonPurchaseInput>
  }

  export type CreditTransactionUpdateWithWhereUniqueWithoutAddonPurchaseInput = {
    where: CreditTransactionWhereUniqueInput
    data: XOR<CreditTransactionUpdateWithoutAddonPurchaseInput, CreditTransactionUncheckedUpdateWithoutAddonPurchaseInput>
  }

  export type CreditTransactionUpdateManyWithWhereWithoutAddonPurchaseInput = {
    where: CreditTransactionScalarWhereInput
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyWithoutAddonPurchaseInput>
  }

  export type AddonPurchaseCreateManyUserInput = {
    id?: string
    credits: number
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creditAddonId: string
  }

  export type BillingTransactionCreateManyUserInput = {
    id?: string
    subscriptionId?: string | null
    type: $Enums.BillingTransactionType
    status?: $Enums.PaymentStatus
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePaymentIntentId?: string | null
    stripeInvoiceId?: string | null
    stripeChargeId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addonPurchaseId?: string | null
  }

  export type PaymentMethodCreateManyUserInput = {
    id?: string
    stripePaymentMethodId: string
    type: string
    brand?: string | null
    last4?: string | null
    expMonth?: number | null
    expYear?: number | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateManyUserInput = {
    id?: string
    stripeSubscriptionId?: string | null
    status?: $Enums.SubscriptionStatus
    startedAt: Date | string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    retryCount?: number
    firstFailedAt?: Date | string | null
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionPriceId: string
    nextCreditRefillAt: Date | string
  }

  export type AddonPurchaseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addon?: CreditAddonUpdateOneRequiredWithoutPurchasesNestedInput
    billingTransactions?: BillingTransactionUpdateManyWithoutAddonPurchaseNestedInput
    creditAllocations?: CreditAllocationUpdateManyWithoutAddonPurchaseNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutAddonPurchaseNestedInput
  }

  export type AddonPurchaseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditAddonId?: StringFieldUpdateOperationsInput | string
    billingTransactions?: BillingTransactionUncheckedUpdateManyWithoutAddonPurchaseNestedInput
    creditAllocations?: CreditAllocationUncheckedUpdateManyWithoutAddonPurchaseNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutAddonPurchaseNestedInput
  }

  export type AddonPurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditAddonId?: StringFieldUpdateOperationsInput | string
  }

  export type BillingTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBillingTransactionTypeFieldUpdateOperationsInput | $Enums.BillingTransactionType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchase?: AddonPurchaseUpdateOneWithoutBillingTransactionsNestedInput
    subscription?: SubscriptionUpdateOneWithoutBillingTransactionsNestedInput
  }

  export type BillingTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumBillingTransactionTypeFieldUpdateOperationsInput | $Enums.BillingTransactionType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchaseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BillingTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumBillingTransactionTypeFieldUpdateOperationsInput | $Enums.BillingTransactionType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchaseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentMethodUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripePaymentMethodId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    expMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expYear?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripePaymentMethodId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    expMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expYear?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripePaymentMethodId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    expMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expYear?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    retryCount?: IntFieldUpdateOperationsInput | number
    firstFailedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextCreditRefillAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billingTransactions?: BillingTransactionUpdateManyWithoutSubscriptionNestedInput
    creditAllocations?: CreditAllocationUpdateManyWithoutSubscriptionNestedInput
    subscriptionPrice?: SubscriptionPriceUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    retryCount?: IntFieldUpdateOperationsInput | number
    firstFailedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionPriceId?: StringFieldUpdateOperationsInput | string
    nextCreditRefillAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billingTransactions?: BillingTransactionUncheckedUpdateManyWithoutSubscriptionNestedInput
    creditAllocations?: CreditAllocationUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    retryCount?: IntFieldUpdateOperationsInput | number
    firstFailedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionPriceId?: StringFieldUpdateOperationsInput | string
    nextCreditRefillAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPriceCreateManySubscriptionPlanInput = {
    id?: string
    billingCycle: $Enums.BillingCycle
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePriceId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyCredits: number
  }

  export type SubscriptionPriceUpdateWithoutSubscriptionPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCredits?: IntFieldUpdateOperationsInput | number
    subscriptions?: SubscriptionUpdateManyWithoutSubscriptionPriceNestedInput
  }

  export type SubscriptionPriceUncheckedUpdateWithoutSubscriptionPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCredits?: IntFieldUpdateOperationsInput | number
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutSubscriptionPriceNestedInput
  }

  export type SubscriptionPriceUncheckedUpdateManyWithoutSubscriptionPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCredits?: IntFieldUpdateOperationsInput | number
  }

  export type SubscriptionCreateManySubscriptionPriceInput = {
    id?: string
    userId: string
    stripeSubscriptionId?: string | null
    status?: $Enums.SubscriptionStatus
    startedAt: Date | string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    retryCount?: number
    firstFailedAt?: Date | string | null
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nextCreditRefillAt: Date | string
  }

  export type SubscriptionUpdateWithoutSubscriptionPriceInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    retryCount?: IntFieldUpdateOperationsInput | number
    firstFailedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextCreditRefillAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billingTransactions?: BillingTransactionUpdateManyWithoutSubscriptionNestedInput
    creditAllocations?: CreditAllocationUpdateManyWithoutSubscriptionNestedInput
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutSubscriptionPriceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    retryCount?: IntFieldUpdateOperationsInput | number
    firstFailedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextCreditRefillAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billingTransactions?: BillingTransactionUncheckedUpdateManyWithoutSubscriptionNestedInput
    creditAllocations?: CreditAllocationUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutSubscriptionPriceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    retryCount?: IntFieldUpdateOperationsInput | number
    firstFailedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextCreditRefillAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingTransactionCreateManySubscriptionInput = {
    id?: string
    userId: string
    type: $Enums.BillingTransactionType
    status?: $Enums.PaymentStatus
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePaymentIntentId?: string | null
    stripeInvoiceId?: string | null
    stripeChargeId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addonPurchaseId?: string | null
  }

  export type CreditAllocationCreateManySubscriptionInput = {
    id?: string
    creditAccountId: string
    source: $Enums.CreditSource
    totalAmount: number
    remainingAmount: number
    expiresAt?: Date | string | null
    addonPurchaseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillingTransactionUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBillingTransactionTypeFieldUpdateOperationsInput | $Enums.BillingTransactionType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchase?: AddonPurchaseUpdateOneWithoutBillingTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutBillingTransactionsNestedInput
  }

  export type BillingTransactionUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumBillingTransactionTypeFieldUpdateOperationsInput | $Enums.BillingTransactionType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchaseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BillingTransactionUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumBillingTransactionTypeFieldUpdateOperationsInput | $Enums.BillingTransactionType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchaseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreditAllocationUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumCreditSourceFieldUpdateOperationsInput | $Enums.CreditSource
    totalAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchase?: AddonPurchaseUpdateOneWithoutCreditAllocationsNestedInput
    creditAccount?: CreditAccountUpdateOneRequiredWithoutAllocationsNestedInput
    transactions?: CreditTransactionUpdateManyWithoutCreditAllocationNestedInput
  }

  export type CreditAllocationUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    source?: EnumCreditSourceFieldUpdateOperationsInput | $Enums.CreditSource
    totalAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addonPurchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: CreditTransactionUncheckedUpdateManyWithoutCreditAllocationNestedInput
  }

  export type CreditAllocationUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    source?: EnumCreditSourceFieldUpdateOperationsInput | $Enums.CreditSource
    totalAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addonPurchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionCreateManyCreditAllocationInput = {
    id?: string
    creditAccountId: string
    amount: number
    type: $Enums.CreditTransactionType
    description?: string | null
    balanceBefore: number
    balanceAfter: number
    referenceId?: string | null
    createdAt?: Date | string
    addonPurchaseId?: string | null
  }

  export type CreditTransactionUpdateWithoutCreditAllocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    balanceBefore?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchase?: AddonPurchaseUpdateOneWithoutCreditTransactionsNestedInput
    creditAccount?: CreditAccountUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type CreditTransactionUncheckedUpdateWithoutCreditAllocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    balanceBefore?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchaseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreditTransactionUncheckedUpdateManyWithoutCreditAllocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    balanceBefore?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchaseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreditAllocationCreateManyCreditAccountInput = {
    id?: string
    source: $Enums.CreditSource
    totalAmount: number
    remainingAmount: number
    expiresAt?: Date | string | null
    subscriptionId?: string | null
    addonPurchaseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditTransactionCreateManyCreditAccountInput = {
    id?: string
    amount: number
    type: $Enums.CreditTransactionType
    description?: string | null
    balanceBefore: number
    balanceAfter: number
    referenceId?: string | null
    createdAt?: Date | string
    addonPurchaseId?: string | null
    creditAllocationId?: string | null
  }

  export type CreditAllocationUpdateWithoutCreditAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumCreditSourceFieldUpdateOperationsInput | $Enums.CreditSource
    totalAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchase?: AddonPurchaseUpdateOneWithoutCreditAllocationsNestedInput
    subscription?: SubscriptionUpdateOneWithoutCreditAllocationsNestedInput
    transactions?: CreditTransactionUpdateManyWithoutCreditAllocationNestedInput
  }

  export type CreditAllocationUncheckedUpdateWithoutCreditAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumCreditSourceFieldUpdateOperationsInput | $Enums.CreditSource
    totalAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    addonPurchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: CreditTransactionUncheckedUpdateManyWithoutCreditAllocationNestedInput
  }

  export type CreditAllocationUncheckedUpdateManyWithoutCreditAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumCreditSourceFieldUpdateOperationsInput | $Enums.CreditSource
    totalAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    addonPurchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUpdateWithoutCreditAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    balanceBefore?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchase?: AddonPurchaseUpdateOneWithoutCreditTransactionsNestedInput
    creditAllocation?: CreditAllocationUpdateOneWithoutTransactionsNestedInput
  }

  export type CreditTransactionUncheckedUpdateWithoutCreditAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    balanceBefore?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    creditAllocationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreditTransactionUncheckedUpdateManyWithoutCreditAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    balanceBefore?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonPurchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    creditAllocationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddonPurchaseCreateManyAddonInput = {
    id?: string
    userId: string
    credits: number
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    stripePaymentIntentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddonPurchaseUpdateWithoutAddonInput = {
    id?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAddonPurchasesNestedInput
    billingTransactions?: BillingTransactionUpdateManyWithoutAddonPurchaseNestedInput
    creditAllocations?: CreditAllocationUpdateManyWithoutAddonPurchaseNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutAddonPurchaseNestedInput
  }

  export type AddonPurchaseUncheckedUpdateWithoutAddonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billingTransactions?: BillingTransactionUncheckedUpdateManyWithoutAddonPurchaseNestedInput
    creditAllocations?: CreditAllocationUncheckedUpdateManyWithoutAddonPurchaseNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutAddonPurchaseNestedInput
  }

  export type AddonPurchaseUncheckedUpdateManyWithoutAddonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingTransactionCreateManyAddonPurchaseInput = {
    id?: string
    userId: string
    subscriptionId?: string | null
    type: $Enums.BillingTransactionType
    status?: $Enums.PaymentStatus
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    stripePaymentIntentId?: string | null
    stripeInvoiceId?: string | null
    stripeChargeId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditAllocationCreateManyAddonPurchaseInput = {
    id?: string
    creditAccountId: string
    source: $Enums.CreditSource
    totalAmount: number
    remainingAmount: number
    expiresAt?: Date | string | null
    subscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditTransactionCreateManyAddonPurchaseInput = {
    id?: string
    creditAccountId: string
    amount: number
    type: $Enums.CreditTransactionType
    description?: string | null
    balanceBefore: number
    balanceAfter: number
    referenceId?: string | null
    createdAt?: Date | string
    creditAllocationId?: string | null
  }

  export type BillingTransactionUpdateWithoutAddonPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBillingTransactionTypeFieldUpdateOperationsInput | $Enums.BillingTransactionType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutBillingTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutBillingTransactionsNestedInput
  }

  export type BillingTransactionUncheckedUpdateWithoutAddonPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumBillingTransactionTypeFieldUpdateOperationsInput | $Enums.BillingTransactionType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingTransactionUncheckedUpdateManyWithoutAddonPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumBillingTransactionTypeFieldUpdateOperationsInput | $Enums.BillingTransactionType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditAllocationUpdateWithoutAddonPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumCreditSourceFieldUpdateOperationsInput | $Enums.CreditSource
    totalAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditAccount?: CreditAccountUpdateOneRequiredWithoutAllocationsNestedInput
    subscription?: SubscriptionUpdateOneWithoutCreditAllocationsNestedInput
    transactions?: CreditTransactionUpdateManyWithoutCreditAllocationNestedInput
  }

  export type CreditAllocationUncheckedUpdateWithoutAddonPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    source?: EnumCreditSourceFieldUpdateOperationsInput | $Enums.CreditSource
    totalAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: CreditTransactionUncheckedUpdateManyWithoutCreditAllocationNestedInput
  }

  export type CreditAllocationUncheckedUpdateManyWithoutAddonPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    source?: EnumCreditSourceFieldUpdateOperationsInput | $Enums.CreditSource
    totalAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUpdateWithoutAddonPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    balanceBefore?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditAccount?: CreditAccountUpdateOneRequiredWithoutTransactionsNestedInput
    creditAllocation?: CreditAllocationUpdateOneWithoutTransactionsNestedInput
  }

  export type CreditTransactionUncheckedUpdateWithoutAddonPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    balanceBefore?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditAllocationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreditTransactionUncheckedUpdateManyWithoutAddonPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    creditAccountId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    balanceBefore?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditAllocationId?: NullableStringFieldUpdateOperationsInput | string | null
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