# Billing Service

Billing Service là service chịu trách nhiệm quản lý **subscription, payment, credit và lịch sử giao dịch**, tích hợp với Stripe.

## 1. User — Người dùng

Bảng gốc lưu thông tin tài khoản người dùng.

| Field | Description |
|---|---|
| `id` | UUID định danh User |
| `email` | Email đăng nhập, `unique` |
| `name` | Tên hiển thị, optional |
| `stripeCustomerId` | ID Customer bên Stripe, dùng để liên kết User với Stripe |
| `createdAt` | Thời điểm tạo |
| `updatedAt` | Thời điểm cập nhật |

### Relationships

- `User` **1-N** `Subscription`
- `User` **1-N** `PaymentMethod`
- `User` **1-1** `CreditAccount`
- `User` **1-N** `BillingTransaction`
- `User` **1-N** `AddonPurchase`

---

## 2. SubscriptionPlan — Gói dịch vụ

Định nghĩa các gói subscription mà hệ thống cung cấp.

Ví dụ:

- `FREE`
- `PRO`

| Field | Description |
|---|---|
| `id` | UUID của plan |
| `name` | Tên gói |
| `description` | Mô tả gói, optional |
| `isActive` | Gói còn được bán/áp dụng hay không |
| `createdAt` | Thời điểm tạo |
| `updatedAt` | Thời điểm cập nhật |

### Relationships

- `SubscriptionPlan` **1-N** `SubscriptionPrice`

Một plan có thể có nhiều mức giá, ví dụ `PRO` có giá Monthly và Annually.

---

## 3. SubscriptionPrice — Giá của từng gói

Tách `SubscriptionPlan` và `SubscriptionPrice` để một gói có thể có nhiều mức giá/billing cycle mà không phải lặp lại thông tin của plan.

Ví dụ:

```text
PRO
├── Monthly → 100,000 VND → 100 credits
└── Annually → 1,000,000 VND → 1,200 credits
```

| Field | Description |
|---|---|
| `id` | UUID của price |
| `subscriptionPlanId` | ID của plan chứa price này |
| `billingCycle` | `MONTHLY` hoặc `ANNUALLY` |
| `price` | Giá của gói |
| `currency` | Loại tiền tệ, ví dụ `VND` |
| `credits` | Số credit được cấp khi thanh toán thành công |
| `stripePriceId` | ID Price tương ứng bên Stripe; Free có thể `NULL` nếu không dùng Stripe Price |
| `isActive` | Price còn được áp dụng hay không |
| `createdAt` | Thời điểm tạo |
| `updatedAt` | Thời điểm cập nhật |

### Relationships

- `SubscriptionPrice` **N-1** `SubscriptionPlan`
- `SubscriptionPrice` **1-N** `Subscription`

---

## 4. Subscription — Đăng ký gói của User

Ghi nhận việc một User đang hoặc đã đăng ký một `SubscriptionPrice` cụ thể.

| Field | Description |
|---|---|
| `id` | UUID của subscription |
| `userId` | User sở hữu subscription |
| `subscriptionPriceId` | Price mà User đăng ký |
| `stripeSubscriptionId` | ID Subscription bên Stripe; Free có thể `NULL` |
| `status` | `ACTIVE` / `PAST_DUE` / `CANCELED` / `EXPIRED` |
| `startedAt` | Thời điểm subscription bắt đầu |
| `currentPeriodStart` | Bắt đầu billing period hiện tại |
| `currentPeriodEnd` | Kết thúc billing period hiện tại |
| `cancelAtPeriodEnd` | Nếu `true`, subscription sẽ kết thúc khi period hiện tại kết thúc |
| `retryCount` | Số lần retry khi recurring payment thất bại |
| `firstFailedAt` | Thời điểm payment fail đầu tiên |
| `canceledAt` | Thời điểm yêu cầu/hệ thống hủy subscription |
| `endedAt` | Thời điểm subscription thực sự kết thúc |
| `createdAt` | Thời điểm tạo |
| `updatedAt` | Thời điểm cập nhật |

### Business rules

- Một User chỉ được có **một active subscription tại một thời điểm**.
- User có thể có nhiều subscription trong lịch sử.
- Khi đổi Monthly ↔ Annually trong cùng một plan, hệ thống cập nhật subscription hiện tại thay vì tạo subscription thứ hai.
- `FREE` không yêu cầu PaymentMethod và không cần Stripe Subscription.
- Khi recurring payment thất bại, cho phép tối đa **3 retry trong 3 ngày**. Nếu tất cả đều thất bại, subscription bị cancel và User được downgrade về `FREE`.

### Relationships

- `Subscription` **N-1** `User`
- `Subscription` **N-1** `SubscriptionPrice`
- `Subscription` **1-N** `BillingTransaction`

---

## 5. PaymentMethod — Phương thức thanh toán

Lưu thông tin tham chiếu đến payment method của User trên Stripe.

| Field | Description |
|---|---|
| `id` | UUID |
| `userId` | User sở hữu payment method |
| `stripePaymentMethodId` | ID PaymentMethod bên Stripe, ví dụ `pm_xxx` |
| `type` | Loại payment method, ví dụ `card`, `paypal`, ... |
| `brand` | Thương hiệu card, ví dụ `visa`, `mastercard` |
| `last4` | 4 số cuối của card |
| `expMonth` | Tháng hết hạn |
| `expYear` | Năm hết hạn |
| `isDefault` | Payment method mặc định, dùng cho các lần thanh toán/renewal tiếp theo |
| `createdAt` | Thời điểm tạo |
| `updatedAt` | Thời điểm cập nhật |

> Không lưu số thẻ đầy đủ, CVV/CVC hoặc thông tin nhạy cảm của card trong database. Stripe chịu trách nhiệm lưu và xử lý thông tin thanh toán.

### Relationships

- `User` **1-N** `PaymentMethod`

---

## 6. CreditAccount — Ví Credit

Mỗi User có một ví credit duy nhất.

| Field | Description |
|---|---|
| `id` | UUID của credit account |
| `userId` | User sở hữu ví |
| `balance` | Số credit hiện tại |
| `createdAt` | Thời điểm tạo |
| `updatedAt` | Thời điểm cập nhật |

### Relationships

- `User` **1-1** `CreditAccount`
- `CreditAccount` **1-N** `CreditTransaction`

`balance` là số dư hiện tại để truy vấn nhanh. Mọi thay đổi số dư phải đồng thời tạo một `CreditTransaction` để đảm bảo có lịch sử/audit.

---

## 7. CreditTransaction — Lịch sử biến động Credit

Ghi nhận **mọi thay đổi** của số dư credit.

| Field | Description |
|---|---|
| `id` | UUID |
| `creditAccountId` | Ví credit phát sinh thay đổi |
| `amount` | Số credit thay đổi; dương là cộng, âm là trừ |
| `type` | Loại biến động credit |
| `description` | Mô tả optional |
| `balanceBefore` | Số dư trước giao dịch |
| `balanceAfter` | Số dư sau giao dịch |
| `referenceId` | ID tham chiếu tới nghiệp vụ liên quan |
| `addonPurchaseId` | ID AddonPurchase nếu credit phát sinh từ mua add-on |
| `createdAt` | Thời điểm tạo |

### Credit transaction types

```text
SUBSCRIPTION_ALLOCATION
ADDON_PURCHASE
CONSUMPTION
ADJUSTMENT
REFUND
```

Ví dụ:

```text
25/06/2026 — Subscription renewed  → +100 credits
28/06/2026 — Purchased add-on      → +50 credits
01/07/2026 — Consumed credits      → -10 credits
```

### Relationships

- `CreditTransaction` **N-1** `CreditAccount`
- `CreditTransaction` **N-1** `AddonPurchase` (optional)

---

## 8. CreditAddon — Gói mua thêm Credit

Định nghĩa các gói credit mua thêm, không theo chu kỳ subscription.

Ví dụ:

```text
500 Credits → 50,000 VND
```

| Field | Description |
|---|---|
| `id` | UUID |
| `name` | Tên add-on, `unique` |
| `credits` | Số credit được cấp |
| `price` | Giá bán |
| `currency` | Loại tiền tệ |
| `stripePriceId` | ID Price bên Stripe |
| `isActive` | Add-on còn được bán hay không |
| `createdAt` | Thời điểm tạo |
| `updatedAt` | Thời điểm cập nhật |

### Relationships

- `CreditAddon` **1-N** `AddonPurchase`

---

## 9. AddonPurchase — Lượt mua Add-on

Ghi nhận một lần User mua một `CreditAddon`.

| Field | Description |
|---|---|
| `id` | UUID |
| `userId` | User mua add-on |
| `creditAddonId` | Add-on được mua |
| `credits` | Snapshot số credit tại thời điểm mua |
| `amount` | Snapshot giá tại thời điểm mua |
| `currency` | Snapshot currency tại thời điểm mua |
| `status` | `PENDING` / `SUCCEEDED` / `FAILED` / `REFUNDED` |
| `stripePaymentIntentId` | ID PaymentIntent bên Stripe |
| `createdAt` | Thời điểm tạo |
| `updatedAt` | Thời điểm cập nhật |

Snapshot `credits`, `amount`, `currency` giúp giữ nguyên thông tin của giao dịch ngay cả khi `CreditAddon` thay đổi giá hoặc số credit về sau.

### Relationships

- `User` **1-N** `AddonPurchase`
- `CreditAddon` **1-N** `AddonPurchase`
- `AddonPurchase` **1-N** `CreditTransaction`
- `AddonPurchase` **1-N** `BillingTransaction`

---

## 10. BillingTransaction — Lịch sử giao dịch tiền

Bảng ghi nhận các giao dịch liên quan đến **tiền thật**.

> `BillingTransaction` quản lý tiền. `CreditTransaction` quản lý credit. Hai bảng phục vụ hai mục đích khác nhau.

| Field | Description |
|---|---|
| `id` | UUID |
| `userId` | User thực hiện giao dịch |
| `subscriptionId` | Subscription liên quan, optional |
| `addonPurchaseId` | AddonPurchase liên quan, optional |
| `type` | `SUBSCRIPTION_PAYMENT` / `ADDON_PAYMENT` |
| `status` | `PENDING` / `SUCCEEDED` / `FAILED` / `REFUNDED` |
| `amount` | Số tiền giao dịch |
| `currency` | Loại tiền tệ |
| `stripePaymentIntentId` | ID PaymentIntent, dùng để theo dõi payment |
| `stripeInvoiceId` | ID Invoice của Stripe nếu giao dịch liên quan đến subscription invoice |
| `stripeChargeId` | ID Charge của Stripe nếu có |
| `failureReason` | Lý do thanh toán thất bại, optional |
| `createdAt` | Thời điểm tạo |
| `updatedAt` | Thời điểm cập nhật |

### Relationships

- `User` **1-N** `BillingTransaction`
- `Subscription` **1-N** `BillingTransaction`
- `AddonPurchase` **1-N** `BillingTransaction`

Ví dụ:

```text
Subscription payment
100,000 VND
SUBSCRIPTION_PAYMENT
SUCCEEDED
```

hoặc:

```text
Add-on payment
50,000 VND
ADDON_PAYMENT
SUCCEEDED
```

---

## 11. StripeWebhookEvent — Lịch sử Webhook

Lưu các event nhận được từ Stripe để đảm bảo webhook được xử lý **idempotent**, tránh xử lý cùng một event nhiều lần.

| Field | Description |
|---|---|
| `id` | UUID nội bộ |
| `stripeEventId` | ID Event bên Stripe, `unique` |
| `eventType` | Loại event, ví dụ `invoice.paid`, `customer.subscription.deleted` |
| `status` | `PENDING` / `PROCESSED` / `FAILED` |
| `processedAt` | Thời điểm xử lý thành công |
| `errorMessage` | Lỗi nếu xử lý thất bại |
| `createdAt` | Thời điểm nhận event |

### Ví dụ webhook

```text
invoice.paid
invoice.payment_failed
customer.subscription.deleted
checkout.session.completed
```

