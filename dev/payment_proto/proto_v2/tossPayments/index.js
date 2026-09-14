// 토스페이먼츠 테스트 클라이언트 키
const clientKey = 'test_gck_docs_OvlSQWmO3fZ50epMvkDeFb9U';

// 비회원 결제용 키
const customerKey = TossPayments.ANONYMOUS;

// 위젯 객체 생성
const tossPayments = TossPayments(clientKey);
const widgets = tossPayments.widgets({ customerKey: customerKey });

async function renderPaymentWidgets() {
  try {
    // 1. 결제 금액 설정 (예: 50,000원)
    await widgets.setAmount({
      currency: 'KRW',
      value: 50000,
    });

    // 2. 결제수단 UI 렌더링 (index.html의 #payment-method 영역)
    await widgets.renderPaymentMethods({
      selector: '#payment-method',
      variantKey: 'DEFAULT',
    });

    // 3. 이용약관 UI 렌더링 (index.html의 #agreement 영역)
    await widgets.renderAgreement({
      selector: '#agreement',
      variantKey: 'AGREEMENT',
    });
  } catch (error) {
    console.error('위젯 렌더링 실패:', error);
  }
}

// 위젯 화면 렌더링 실행
renderPaymentWidgets();

// 결제하기 버튼 클릭 이벤트 연동
const paymentButton = document.getElementById('payment-request-button');

if (paymentButton) {
  paymentButton.addEventListener('click', async () => {
    try {
      // 결제창 호출
      await widgets.requestPayment({
        orderId: 'order_' + Date.now(), // 고유 주문번호 (랜덤 생성)
        orderName: '샘플 도서 결제', // 주문명
        successUrl: window.location.origin + '/success.html', // 성공 시 이동할 주소
        failUrl: window.location.origin + '/fail.html', // 실패 시 이동할 주소
      });
    } catch (error) {
      console.error('결제 요청 실패:', error);
    }
  });
}
