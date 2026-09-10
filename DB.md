1. User — Người dùng

Bảng gốc, lưu thông tin tài khoản.

id: UUID định danh user
email: Email đăng nhập (unique)
name: Tên hiển thị (optional)
stripeCustomerId: ID khách hàng bên Stripe, dùng để liên kết với hệ thống thanh toán Stripe
createdAt,updatedAt: thời gian tạo và update
2. SubscriptionPlan — Gói dịch vụ 
name, description: tên và mô tả gói
isActive: gói còn được bán hay đã ngừng
createdAt,updatedAt: thời gian tạo và update
3. SubscriptionPrice — Giá cụ thể của từng gói
Tách Plan và Price ra để 1 gói có thể có nhiều mức giá khác nhau (tháng/năm) mà không phải lặp lại thông tin gói.
subscriptionPlanId: liên kết tới gói cha
billingCycle: MONTHLY hoặc ANNUALLY
price, currency: giá tiền và loại tiền tệ
credits: số credit user nhận được khi mua gói này
stripePriceId: ID giá tương ứng bên Stripe
isActive: mức giá này còn áp dụng không
4. Subscription 
Ghi nhận việc 1 user đang/đã đăng ký 1 gói giá cụ thể.
userId, subscriptionPriceId: user nào đăng ký gói giá nào
stripeSubscriptionId: ID subscription bên Stripe
status: ACTIVE / PAST_DUE / CANCELED / EXPIRED
startedAt: ngày bắt đầu
currentPeriodStart/End: chu kỳ thanh toán hiện tại
retryCount, firstFailedAt: đếm số lần retry khi thanh toán thất bại, thời điểm fail đầu tiên 
canceledAt, endedAt: thời điểm hủy / kết thúc thực sự
5. PaymentMethod — Phương thức thanh toán
Thẻ/phương thức thanh toán đã lưu của user.

stripePaymentMethodId: ID bên Stripe
type, brand, last4, expMonth/Year: loại thẻ, hãng, 4 số cuối, hạn thẻ
isDefault: có phải phương thức mặc định không , để tự động gia hạn vào mỗi tháng nếu không hỏi 
6. CreditAccount — Ví credit của user

Mỗi user có 1 ví credit duy nhất (1-1 với User).

balance: số dư credit hiện tại
7. CreditTransaction — Lịch sử biến động credit

Mọi thay đổi số dư credit đều ghi log ở đây (không sửa trực tiếp balance).

creditAccountId: thuộc ví nào
amount: số credit thay đổi 
type: SUBSCRIPTION_ALLOCATION (cấp từ gói sub) / ADDON_PURCHASE (mua thêm) / CONSUMPTION (dùng credit) / ADJUSTMENT (điều chỉnh thủ công) / REFUND (hoàn)
balanceBefore, balanceAfter: số dư trước và sau — giúp audit, tránh sai lệch
referenceId: ID tham chiếu tới nghiệp vụ gây ra biến động 
addonPurchaseId: nếu transaction này phát sinh từ 1 lần mua addon thì liên kết tới đó
8. CreditAddon — Gói mua thêm credit 
Giống SubscriptionPlan nhưng cho việc mua credit lẻ, không theo chu kỳ.

name: tên gói addon (unique)
credits: số credit nhận được
price, currency: giá bán
stripePriceId: ID giá bên Stripe
isActive: còn bán không
9. AddonPurchase — Lượt mua addon

Ghi nhận 1 lần user mua 1 CreditAddon.

userId, creditAddonId: ai mua gói addon nào
credits, amount, currency: snapshot lại số credit/giá tại thời điểm mua (phòng khi CreditAddon đổi giá sau này)
status: PENDING / SUCCEEDED / FAILED / REFUNDED
stripePaymentIntentId: ID payment intent bên Stripe
Quan hệ 1-nhiều với CreditTransaction và BillingTransaction (vì 1 lần mua có thể phát sinh nhiều giao dịch: retry, hoàn tiền.)
10. BillingTransaction — Giao dịch thanh toán (tiền thật)

Bảng trung tâm ghi nhận tiền ra vào (khác với CreditTransaction ghi credit).

userId: user thanh toán
subscriptionId: nếu là thanh toán cho subscription
addonPurchaseId: nếu là thanh toán cho addon
type: SUBSCRIPTION_PAYMENT / ADDON_PAYMENT
status: PENDING / SUCCEEDED / FAILED / REFUNDED
amount, currency: số tiền, loại tiền
stripePaymentIntentId: Theo dõi trạng thái thanh toán, stripeInvoiceId:hóa đơn, stripeChargeId: đã trả xong
failureReason: lý do fail (nếu có)
11. StripeWebhookEvent — Log sự kiện webhook từ Stripe
Đảm bảo xử lý webhook idempotent (không xử lý trùng 1 event 2 lần).
stripeEventId: ID event từ Stripe (unique — dùng để check đã xử lý chưa)
eventType: loại event (vd: invoice.paid, customer.subscription.deleted...)
status: PENDING / PROCESSED / FAILED
processedAt, errorMessage: thời điểm xử lý xong, lỗi nếu có