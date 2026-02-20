const PART_NAMES = { 1: '무역계약', 2: '무역운송 및 적하보험', 3: '외환실무', 4: '대외무역법', 5: '관세법', 6: '대금결제', 7: '무역영어 핵심' };
const SUBJ_NAMES = { 1: '무역규범', 2: '무역실무', 3: '무역영어', 4: '종합' };

const CONCEPTS = [
    // ===== Part 1: 무역계약 =====
    {
        part: 1, title: '1. 무역계약의 특성', content: `<p>무역계약은 당사자 간의 합의를 바탕으로 이루어지며 다음과 같은 <b>4가지 주요 법적 성격</b>을 가집니다.</p>
<ul>
<li><b>쌍무(Bilateral) 계약</b>: 계약의 쌍방이 서로 물품 인도와 대금 지급이라는 계약상의 의무를 부담하는 성격</li>
<li><b>유상(Remunerative) 계약</b>: 계약 당사자가 서로 대가적 의미(급부)가 있는 출연을 하는 것으로, 매도인의 물품 인도에 대해 매수인이 대가를 부담하는 성격</li>
<li><b>낙성(Consensual) 계약</b>: 물품의 인도나 대금 지급 등 구체적 행위가 먼저 이루어지지 않더라도, 특별한 형식 없이 구두, 행위, 서명 등을 통한 '의사의 합치(합의)'만으로 계약이 성립하는 성격</li>
<li><b>불요식(Informal) 계약</b>: 서면이나 일정한 양식을 반드시 필요로 하지 않고 자유로운 형태로 체결할 수 있는 성격</li>
</ul>`, highlight: '법규 적용 순서: <b>강행규정 → 당사자 간 합의 → 준거법 → 국제관습</b> 순서로 적용. 당사자 간의 합의가 아무리 중요하더라도 국가의 \'강행규정\'이 무조건 최우선. 준거법 지정: 제3국의 법뿐만 아니라 일방 당사자가 속한 국가의 국내법도 준거법이 될 수 있음'
    },

    {
        part: 1, title: '2. Incoterms 2020', content: `<p>Incoterms 2020은 <b>법적 조약이 아닌 국제상관습</b>의 성격을 지니며, 무역 거래에서 당사자 간의 의무, 비용, 위험의 분기점을 정하는 규칙입니다. 당사자 간의 합의를 통해 얼마든지 변형(variants)하여 사용할 수 있습니다.</p>
<table><tr><th>조건</th><th>설명</th></tr>
<tr><td><b>EXW</b> (공장인도)</td><td>매도인 최소 의무 조건. 수출통관 의무 없고, 매수인 차량에 적재 의무도 없음</td></tr>
<tr><td><b>FCA</b> (운송인인도)</td><td>매수인이 운송계약 체결. 수취선하증권뿐 아니라 On board B/L도 발행 가능</td></tr>
<tr><td><b>FAS/FOB/CFR/CIF</b></td><td>해상 및 내수로 운송 전용 조건. 본선 적재(On board) 시 위험 이전</td></tr>
<tr><td><b>CPT/CIP</b></td><td>복합운송 조건. 위험분기점과 비용분기점이 서로 다름</td></tr>
<tr><td><b>DPU</b> (도착지양하인도)</td><td><b>유일하게</b> 매도인이 양하(unloaded) 의무 있는 조건</td></tr>
<tr><td><b>DAP</b> (도착장소인도)</td><td>양하 준비된 상태(ready for unloading)로 인도</td></tr>
<tr><td><b>DDP</b> (관세지급인도)</td><td>매도인 최대 의무 조건. 수입통관까지 수행하나 양하 의무는 없음</td></tr></table>
<p><b>보험 부보 조건:</b></p>
<ul><li><b>CIF</b>: 최소 부보 조건 <b>ICC(C)</b></li><li><b>CIP</b>: 최대 부보 조건 <b>ICC(A)</b></li></ul>`},

    {
        part: 1, title: '3. Vienna Convention (비엔나협약 / CISG, 1980)', content: `<p>영업소가 서로 다른 국가에 있는 당사자 간의 물품매매계약에 적용되는 <b>조약 성격의 국제규범</b></p>
<p><b>적용 제외 대상:</b></p>
<ul><li>개인용, 가족용, 가정용으로 구입된 물품 (단, 매도인이 용도를 몰랐던 경우 예외 적용)</li>
<li>선박, 항공기, 호버크라프트 등의 매매</li></ul>
<p><b>매매계약으로 보지 않는 경우:</b></p>
<ul><li>물품 주문자가 제조/생산에 필요한 재료의 중요한 부분을 직접 공급하는 경우 (단순 가공/조립)</li>
<li>물품 공급 측의 주된 의무가 노무(서비스) 공급인 경우</li></ul>
<p><b>청약의 요건 (Article 14):</b></p>
<ul><li>1인 이상의 특정인에게 제안되어야 함</li>
<li><b>물품(Goods), 수량(Quantity), 가격(Price)</b>이 명시되거나 결정 가능해야 확정적 청약</li></ul>
<p><b>손해배상:</b> 이익의 상실을 포함하여 위반 결과 상대방이 입은 손해 총액과 동등해야 하며, <b>계약해제권 등 다른 구제 방법과 병행하여 행사 가능</b></p>
<p><b>계약 해제:</b> 해제의 효력은 소급 적용되지만 자동 발생이 아니며, <b>상대방에게 통지를 해야만</b> 효력 발생</p>`},

    {
        part: 1, title: '4. 청약과 승낙', content: `<ul>
<li><b>청약(Offer)</b>: 1인 또는 다수의 특정인을 상대로 유효기간을 정하여 확정적 의사표시. 불특정 다수에게 하는 제안은 '청약의 유인'</li>
<li><b>도달주의</b>: 청약과 승낙은 상대방에게 <b>도달했을 때</b> 효력 발생</li>
<li><b>반대청약(Counter offer)</b>: 조건부 승낙은 원청약에 대한 거절이자 새로운 청약</li>
<li>Proforma Invoice도 확정적 의사가 있으면 청약으로 간주 가능</li></ul>`},

    {
        part: 1, title: '5. 특수청약 (모두 Free offer 성격)', content: `<table><tr><th>종류</th><th>설명</th></tr>
<tr><td><b>Offer subject to being unsold</b></td><td>재고잔류 조건부 청약 - 재고가 있어야만 계약 성립</td></tr>
<tr><td><b>Offer on sale or return</b></td><td>반품 허용 조건부 청약 - 신간 서적, 판매 부진 물품에 사용</td></tr>
<tr><td><b>Sub-con offer</b></td><td>최종확인 조건부 청약 - 청약자의 최종 확인 필요</td></tr>
<tr><td><b>Offer without engagement</b></td><td>무확약 청약 - 가격이 사전 통보 없이 변경 가능</td></tr></table>`},

    { part: 1, title: '6. 무역계약의 성립', content: `<p>승낙 과정을 생략하고 <b>대금 지급이나 물품 인도 등의 의사실현(Performing an act)</b>만으로도 계약 성립 가능</p>` },

    {
        part: 1, title: '7. 무역계약의 조건', content: `<p><b>품질 조건</b></p>
<table><tr><th>조건</th><th>적합 물품</th></tr>
<tr><td><b>견본매매(Sale by sample)</b></td><td>조화(인조꽃) 등 - "similar to the sample" 표현이 유리</td></tr>
<tr><td><b>USQ (보통품질조건)</b></td><td>원면(raw cotton), 생사(raw silk) 등</td></tr>
<tr><td><b>GMQ (판매적격품질조건)</b></td><td>목재류, 냉동 어류 등</td></tr>
<tr><td><b>FAQ (평균중등품질조건)</b></td><td>곡물류, 과일, 인삼, 오징어 등 농수산물</td></tr></table>
<p><b>수량 조건</b></p>
<ul><li>중량톤은 <b>Metric ton(M/T)</b> = 1,000kg 기준</li>
<li>살물(Bulk cargo)의 경우 과부족 약관 없어도 <b>5%</b> 과부족 허용</li>
<li>'about'이나 'approximately' 붙으면 <b>10%</b> 과부족 인정</li></ul>
<p><b>선적 조건</b></p>
<ul><li>선적일은 <b>서류발행일(선하증권 발행일 등)</b> 기준</li>
<li>"on or about January 20" = 전후 5일씩, <b>총 11일</b> (1/15~1/25)</li>
<li><b>분할선적</b>: 총량만 정하고 여러 번 나눠 보냄 (금지 표시 없으면 허용)</li>
<li><b>할부선적</b>: 각 횟수별/시기별 물량과 날짜가 정확히 지정</li></ul>`},

    {
        part: 1, title: '8. 무역 분쟁 해결 - 중재(Arbitration)', content: `<ul>
<li>법원 재판 대신 민간 전문가(중재인)의 판정에 복종하는 분쟁 해결 방식</li>
<li><b>단심제</b> (1번으로 끝, 불복 소송 불가)</li>
<li>법원의 최종 판결과 <b>동일한 효력</b></li>
<li>반드시 <b>'중재합의(서면)'</b>가 있어야 가능</li></ul>`},

    // ===== Part 2: 무역운송 및 적하보험 =====
    {
        part: 2, title: '9. 정기선과 부정기선', content: `<ul>
<li><b>정기선(Liner)</b>: 정해진 항로/스케줄에 따라 운항. 운임이 공시되어 있으며 개품운송(포장화물) 위주</li>
<li><b>부정기선(Tramper)</b>: 화물 수요에 따라 비정기적 운항. 살물(Bulk cargo) 위주, 용선계약(Charter Party)으로 운항</li></ul>`},

    {
        part: 2, title: '10. 용선 계약의 종류', content: `<table><tr><th>종류</th><th>설명</th></tr>
<tr><td><b>항해용선(Voyage Charter)</b></td><td>특정 항해 단위로 선박 일부/전부를 빌림. 선주가 선원 배치·운항</td></tr>
<tr><td><b>정기용선(Time Charter)</b></td><td>일정 기간 동안 선박을 빌림. 선주가 선원 배치, 용선자가 항해 지시</td></tr>
<tr><td><b>나용선(Bareboat Charter)</b></td><td>선체만 빌리고 선원은 용선자가 직접 고용·운항</td></tr></table>`},

    {
        part: 2, title: '11. 컨테이너 (FCL & LCL)', content: `<ul>
<li><b>FCL (Full Container Load)</b>: 하주 1인이 컨테이너 1개 이상을 가득 채움. CY(Container Yard)에서 인수인도</li>
<li><b>LCL (Less than Container Load)</b>: 여러 하주의 소량 화물을 혼재. CFS(Container Freight Station)에서 분류/인수인도</li></ul>`},

    {
        part: 2, title: '12. 해상 및 항공운임', content: `<ul>
<li><b>해상운임</b>: 정기선은 운임표(Tariff) 기준, 부정기선은 시장 수요·공급에 따라 결정</li>
<li><b>항공운임</b>: 중량(Gross Weight)과 용적(Volume Weight) 중 큰 것을 적용하는 <b>부피중량제</b> 적용</li>
<li><b>종가운임(Ad Valorem Freight)</b>: 고가 화물에 대해 화물가액 기준으로 산정하는 운임</li></ul>`},

    {
        part: 2, title: '13. 선하증권, 해상운송장, Surrendered B/L, 항공운송장', content: `<table><tr><th>서류</th><th>성격</th><th>유통성</th><th>특징</th></tr>
<tr><td><b>선하증권(B/L)</b></td><td>유가증권·권리증권</td><td>✅ 유통 가능</td><td>배서(Endorsement)로 양도 가능, 물품 인도 청구권</td></tr>
<tr><td><b>해상운송장(Sea Waybill)</b></td><td>화물수령증</td><td>❌ 비유통</td><td>수하인 본인 확인만으로 인도, 신속한 화물 인수</td></tr>
<tr><td><b>Surrendered B/L</b></td><td>B/L 원본 회수</td><td>❌ 비유통</td><td>선적지에서 원본 반납, 도착지에서 사본으로 인도</td></tr>
<tr><td><b>항공운송장(AWB)</b></td><td>화물수령증·운송계약서</td><td>❌ 비유통</td><td>권리증권 아님, 기명식만 가능, 비행일자 부기시 선적일</td></tr></table>`},

    {
        part: 2, title: '14. 적하보험 상세', content: `<p><b>ICC 담보 조건 비교</b></p>
<table><tr><th>구분</th><th>ICC(A)</th><th>ICC(B)</th><th>ICC(C)</th></tr>
<tr><td>담보 방식</td><td><b>포괄책임</b> (All Risks)</td><td>열거책임</td><td>열거책임</td></tr>
<tr><td>담보 범위</td><td>가장 넓음</td><td>중간</td><td>가장 좁음</td></tr>
<tr><td>해적(Piracy)</td><td>✅</td><td>✅</td><td>❌</td></tr>
<tr><td>지진/낙뢰/화산</td><td>✅</td><td>✅</td><td>❌</td></tr>
<tr><td>갑판유실</td><td>✅</td><td>✅</td><td>❌</td></tr></table>
<p><b>ICC 공통 면책위험 (A/B/C 모두 면책)</b></p>
<ul><li>피보험자의 <b>고의적 불법행위(Willful Misconduct)</b></li>
<li>통상적인 누손/중량감소/자연소모</li>
<li>포장 또는 준비의 불완전</li>
<li><b>지연(Delay)</b>으로 인한 손해</li>
<li><b>전쟁위험, 동맹파업위험</b> (별도 특약 필요)</li></ul>`},

    {
        part: 2, title: '15. 피보험이익, 보험가액, 보험료 및 보험금', content: `<ul>
<li><b>피보험이익</b>: 보험사고 발생 시 경제적 손실을 입게 되는 이해관계</li>
<li><b>보험가액</b>: 보험 목적물의 실제 가액 (통상 CIF 가액 × 110%)</li>
<li><b>보험금액</b>: 보험계약에서 정한 보상 한도</li>
<li><b>추정전손(Constructive Total Loss)</b>: 수리비/구조비 > 물품 가치 → 전손 처리 가능</li>
<li><b>위부(Abandonment)</b>: 보험 목적물을 보험자에게 양도하고 전손 보험금 청구</li>
<li><b>대위(Subrogation)</b>: 보험자가 보험금 지급 후 피보험자의 손해배상청구권을 대신 행사</li></ul>`},

    // ===== Part 3: 외환실무 =====
    {
        part: 3, title: '16. 외환시장', content: `<ul>
<li><b>장외시장(OTC)</b>, 24시간 거래, Zero-Sum 시장</li>
<li>은행 간 시장: 평일 오전 9시~오후 3시 30분, 주말/공휴일 미개장</li>
<li>투기거래 비중 > 실수요 거래 비중</li>
<li>일반 기업은 직접 참여 불가, 외환브로커 통해 간접 참여만 가능</li></ul>`},

    {
        part: 3, title: '17. 환율', content: `<ul>
<li><b>직접표시환율(유럽식)</b>: 미화 기준으로 자국 화폐 표시</li>
<li><b>간접표시환율(미국식)</b>: 자국통화가 기준, USD가 표시통화
<ul><li>유로화, 영국 파운드, 호주 달러, 뉴질랜드 달러가 사용</li></ul></li>
<li>수입대금 결제 시 은행의 <b>매도율(Offer rate)</b> 적용 → 매도율이 가장 <b>낮은</b> 은행이 유리</li></ul>`},

    {
        part: 3, title: '18. 포지션', content: `<ul>
<li>엔화 수입기업의 엔화 외상매입금/차입금 = <b>Short position</b></li>
<li>JPY/KRW 환율 상승 시: 수입기업 환차손, 수출기업 환차익</li></ul>`},

    { part: 3, title: '19. 환리스크 (환산위험)', content: `<p>결산시점에 외화자산/부채를 자국통화로 환산 평가할 때 환율변동으로 발생하는 위험</p>` },

    {
        part: 3, title: '20. 환리스크 관리기법', content: `<p><b>내부적 관리기법</b></p>
<table><tr><th>기법</th><th>설명</th></tr>
<tr><td><b>매칭(Matching)</b></td><td>동일 시점의 달러 수출대금으로 달러 수입대금 결제하여 상쇄</td></tr>
<tr><td><b>리딩(Leading)</b></td><td>환율 강세 예상 시 결제 시점을 앞당김</td></tr>
<tr><td><b>래깅(Lagging)</b></td><td>환율 변동 전망에 따라 결제 시점을 늦춤</td></tr>
<tr><td><b>네팅(Netting)</b></td><td>채권/채무 상계 후 차액만 결제</td></tr></table>
<p><b>외부적 관리기법 (선물환)</b></p>
<ul><li>은행과 미리 선물환 계약을 맺어 헤지</li>
<li>미래의 기대이익은 포기해야 함</li>
<li>별도 수수료가 아니라 선물환율에 이미 포함</li></ul>`},

    {
        part: 3, title: '21. 선물환율 계산 및 스왑 포인트', content: `<ul>
<li><b>선물환율</b> = 현물환율 + {현물환율 × (상대 통화금리 - 기준통화금리) × 기간/360}</li>
<li><b>스왑 포인트</b> = 선물환율 - 현물환율</li>
<li>1pip = 0.01원</li>
<li>Offer > Bid → 가산 / Bid > Offer → 차감</li></ul>`},

    {
        part: 3, title: '22. 통화선물 vs 선물환', content: `<table><tr><th>구분</th><th>통화선물(Futures)</th><th>선물환(Forward)</th></tr>
<tr><td>거래 장소</td><td>거래소 (불특정 다수)</td><td>장외시장 (1대1)</td></tr>
<tr><td>계약 단위</td><td>표준화</td><td>자유 합의</td></tr>
<tr><td>증거금</td><td>개시증거금 필수</td><td>신용도에 따라</td></tr>
<tr><td>정산</td><td>일일정산 실시</td><td>일일정산 없음</td></tr></table>
<p>한국거래소 1계약: 1만 달러, 100만 엔, 1만 유로, 10만 위안</p>`},

    {
        part: 3, title: '23. 통화옵션', content: `<ul>
<li>수입업체 → <b>콜옵션(Call option)</b> 매입 (외화 살 권리)</li>
<li>수출업체 → <b>풋옵션(Put option)</b> 매입 (외화 팔 권리)</li>
<li>만기일에 현물환율이 유리하면 옵션 포기하고 현물 거래 가능</li>
<li><b>스트래들(Straddle)</b>: 콜+풋 동시 매입, 행사가 동일하게 설정</li></ul>`},

    {
        part: 3, title: '24. 역외선물환(NDF)', content: `<ul>
<li>원금 교환 없이 <b>차액만 달러로 정산</b> (차액정산선물환거래)</li>
<li>세금/규제 회피 가능</li>
<li>뉴욕 NDF 마감가 → 다음날 한국 외환시장에 큰 영향</li>
<li>실질적 인수인도 없어 <b>투기적 거래 비중 높음</b></li></ul>`},

    {
        part: 3, title: '25. 환변동보험', content: `<ul>
<li>한국무역보험공사가 환율 보장, 기업은 현물로 거래</li>
<li>보장환율과 결제환율 차이 → 외환차손은 보험금 수령, 외환차익은 환수금 납부</li>
<li><b>증거금/담보 면제</b> (일반 선물환과의 차이)</li>
<li>수출계약 변경/조기입금 시 <b>조기 정산 가능</b></li></ul>`},

    // ===== Part 4: 대외무역법 =====
    {
        part: 4, title: '26. 무역의 대상', content: `<ul>
<li>물품 + <b>용역(서비스)</b> + <b>전자적 무체물(소프트웨어 등)</b></li>
<li>단순 자본 이동이나 채권 거래는 무역 대상이 <b>아님</b></li>
<li>무체물은 세관 통관 절차를 거치지 않음</li></ul>`},

    {
        part: 4, title: '27. 외화획득(수출실적) 인정 범위', content: `<p><b>✅ 인정:</b></p>
<ul><li>외국인으로부터 외화를 받고 시설기재를 국내 업체에 인도</li>
<li>수입업자로부터 수수료 받고 수출 알선(중개)</li>
<li>보세판매장(면세점)에서 외국인에게 국내 생산 물품 매도</li>
<li>수출물품 포장용 골판지상자 공급</li></ul>
<p><b>❌ 불인정:</b></p>
<ul><li>외국 기업과 계약 후 대금을 원화로 받고 국내 공장에 납품</li>
<li>대가 없이 무상으로 외국에 물품 인도</li>
<li>해외건설사업용 장비를 반출했다가 재반입</li></ul>`},

    {
        part: 4, title: '28. 무역의 정의', content: `<table><tr><th>종류</th><th>설명</th></tr>
<tr><td><b>중계무역</b></td><td>수입 → 국내 통관 없이 보세구역 반입 → 가공 없이 제3국 수출</td></tr>
<tr><td><b>위탁가공무역</b></td><td>원재료 공급 → 해외 파트너 가공 → 완제품을 해당국/제3국 판매</td></tr>
<tr><td><b>외국인수수입</b></td><td>대금은 국내 지급, 물품은 외국 현지에서 인수</td></tr></table>`},

    {
        part: 4, title: '29. 전문무역상사', content: `<ul>
<li>지정 요건: 전년도/최근 3년 평균 수출실적 <b>미화 100만 불 이상</b></li>
<li>타 중소·중견기업 제품 수출 비중 <b>20% 이상</b></li>
<li>독점권 부여 아님, 지위가 영구적이지 않음</li></ul>`},

    {
        part: 4, title: '30. 수출입공고 vs 통합공고', content: `<table><tr><th>구분</th><th>수출입공고</th><th>통합공고</th></tr>
<tr><td>근거법</td><td>대외무역법</td><td>63개 타 개별법령</td></tr>
<tr><td>내용</td><td>수출금지/제한, 수입제한 품목</td><td>타법령 수입 요건/절차 통합</td></tr>
<tr><td>관계</td><td colspan="2">수출입공고 승인 ≠ 통합공고 면제</td></tr></table>`},

    {
        part: 4, title: '31. 원산지 규정', content: `<ul>
<li>원산지 표시는 <b>현품에 직접 표시</b>가 원칙</li>
<li>단순 가공활동만 거쳐 재수출 시 한국을 원산지로 표시 <b>불가</b></li>
<li><b>세번변경기준</b>: HS코드 <b>6단위(소호)</b> 변경 기준</li>
<li>부가가치 비율: <b>FOB 가격</b> 기준</li>
<li>원산지 표시 확인 요청: <b>산업통상자원부장관</b>에게</li></ul>`},

    {
        part: 4, title: '32. 전략물자 수출입', content: `<ul>
<li>대량살상무기 전용 우려 물품 → 철저한 통제</li>
<li>외국인도수출/중계무역이라도 <b>전략물자 수출허가 필수</b> (예외 없음)</li></ul>`},

    {
        part: 4, title: '33. 수입수량제한조치 (세이프가드)', content: `<ul>
<li>수입 급증 → 국내 산업 피해 시 수입량 제한</li>
<li>최대 기간: 기존 조치 + 긴급관세 + 연장 합산 <b>8년 이내</b></li>
<li>기준 수량 이상으로 보장하여 제한하는 것이 원칙</li></ul>`},

    {
        part: 4, title: '34. 구매확인서 vs 내국신용장', content: `<table><tr><th>구분</th><th>구매확인서</th><th>내국신용장</th></tr>
<tr><td><b>대금 지급 보증</b></td><td>❌ 없음</td><td>✅ 은행이 보증</td></tr>
<tr><td>수출실적 인정</td><td>✅</td><td>✅</td></tr>
<tr><td>무역금융 수혜</td><td>✅</td><td>✅</td></tr>
<tr><td>부가세</td><td>영세율(0%)</td><td>영세율(0%)</td></tr>
<tr><td>관세환급 혜택</td><td>✅</td><td>✅</td></tr>
<tr><td>발급 횟수</td><td>유통단계마다 무제한</td><td>유통단계마다 무제한</td></tr></table>`},

    // ===== Part 5: 관세법 =====
    {
        part: 5, title: '35. 품목분류와 HS코드', content: `<ul>
<li>6단위(소호)까지 국제 공통, 우리나라는 <b>10단위(HSK)</b> 사용</li>
<li>류, 호(4단위), 소호(6단위)는 임의 변경 불가, 그 이하 단위는 가능</li>
<li>살아있는 동물: 원칙 제1류, 서커스용/동물원용 → <b>9508호</b></li></ul>`},

    {
        part: 5, title: '36. 내국물품 vs 외국물품', content: `<p><b>내국물품:</b></p>
<ul><li>우리나라에 있는 물품으로서 외국물품이 아닌 것</li>
<li>우리 선박이 공해에서 채집/포획한 수산물</li>
<li>입항 전 수입신고가 <b>'수리된'</b> 물품</li>
<li>수입신고 전 즉시반출신고를 하고 반출된 물품</li></ul>
<p><b>외국물품:</b></p>
<ul><li>수입신고가 <b>수리되기 전</b>의 도착 물품</li>
<li><b>수출신고가 수리된</b> 물품</li></ul>`},

    {
        part: 5, title: '37. 수출입통관', content: `<p><b>수출통관:</b></p>
<ul><li>수출신고: 화주/관세사 명의 (예외: 제조 공급자 명의 가능)</li>
<li>수리일로부터 <b>30일 이내</b> 적재, 1년 범위 내 연장 가능</li></ul>
<p><b>수입통관:</b></p>
<ul><li>원칙: 입항 후 신고</li>
<li>입항 전 수입신고: 선박 출항 <b>5일 전</b>, 항공기 <b>1일 전</b>부터 가능</li>
<li>보세구역 반입 시 장치일로부터 <b>30일 이내</b> 신고</li></ul>`},

    {
        part: 5, title: '38. 관세납부', content: `<ul>
<li><b>보정</b>: 부족 세액 발견 시 납부 후 <b>6개월 이내</b> (가산세 없음)</li>
<li><b>수정신고</b>: 6개월 이후 부과제척기간 내 (가산세 대상)</li>
<li><b>경정청구</b>: 과다 납부 시 최초 납세신고일로부터 <b>5년 이내</b></li></ul>
<p><b>과세가격:</b></p>
<ul><li>구매수수료: 불포함</li>
<li>중개료/수수료: 가산요소</li>
<li>연불이자, 수입 후 건설/설치/조립 비용: 공제비용</li></ul>`},

    {
        part: 5, title: '39. 관세율 우선순위', content: `<ol>
<li><b>1순위 (무조건 최우선)</b>: 덤핑방지관세, 상계관세, 보복관세, 긴급관세 등</li>
<li><b>2순위</b>: FTA 관세, WTO 협정관세, 편익관세</li>
<li><b>3순위</b>: 조정관세, 할당관세, 계절관세</li>
<li><b>4순위</b>: 일반특혜관세</li>
<li><b>5순위</b>: 잠정관세</li>
<li><b>6순위</b>: 기본관세</li></ol>`, highlight: '2순위부터는 하위 순위보다 <b>\'낮은 세율\'</b>일 때만 우선 적용'
    },

    {
        part: 5, title: '40. 상계관세 및 재수출·재수입 면세', content: `<p><b>상계관세:</b> 외국 보조금/장려금 받은 물품 수입 → 국내 산업 피해 우려 시 부과</p>
<p><b>재수출면세:</b></p>
<ul><li>수입신고 수리일로부터 <b>1년 이내</b> 재수출 시 면세</li>
<li>미수출 시: 관세 + 관세액의 <b>20% 가산세</b> (최소 10만 원) + 500만 원 이하 과태료</li></ul>
<p><b>재수입면세:</b></p>
<ul><li>수출신고 수리일로부터 <b>2년 이내</b> 재수입 시 면세</li>
<li>조건: 해외 제조/가공/수리/사용 되지 않아야 함</li></ul>`},

    {
        part: 5, title: '41. 관세징수권 소멸시효와 제척기간', content: `<p><b>제척기간:</b></p>
<ul><li>원칙: <b>5년</b></li>
<li>부정한 방법 관세 포탈/환급/감면: <b>10년</b></li></ul>
<p><b>소멸시효:</b></p>
<ul><li>5억 원 이상: <b>10년</b></li>
<li>그 밖: <b>5년</b></li></ul>
<p><b>시효 중단:</b> 납부고지, 경정처분, 납부독촉, 교부청구</p>
<p><b>시효 정지:</b> 분할납부기간, 징수유예기간, 체납처분유예기간</p>`},

    {
        part: 5, title: '42. 보세구역 및 보세제도', content: `<ul>
<li>부패/손상 물품 폐기 시 <b>세관장 승인</b> 필요</li>
<li>보세창고: 제조/가공 <b>불가</b> → 보세공장에서만 가능</li>
<li>보수작업: 세관장 승인 필요, HS 10단위 변경 불가, 외국물품 재료 사용 불가</li>
<li>수입신고 수리 물품 환급: 수리일로부터 <b>1년 이내</b> 보세구역 재반입</li></ul>`},

    {
        part: 5, title: '43. 관세환급 및 관세환급특례법', content: `<p><b>관세법 환급:</b> 과오납, 위약 환급, 보세구역 멸실/손상 환급</p>
<p><b>관세환급특례법:</b></p>
<ul><li>수출용 원재료 수입 시 납부 관세 환급</li>
<li>간접 소모 물품(기계장치 등)은 대상 아님</li>
<li>원재료 수입수리일로부터 <b>2년 이내</b> 수출</li>
<li>환급청구권: 수출신고 수리일로부터 <b>5년 이내</b></li>
<li><b>기납증</b>: 원재료를 제조/가공하여 공급 시</li>
<li><b>분증</b>: 원상태 그대로 공급 시</li>
<li>덤핑방지관세, 보복관세, 상계관세 부과 물품은 <b>환급 대상 제외</b></li></ul>`},

    {
        part: 5, title: '44. FTA 원산지 규정', content: `<p><b>실질적 변형기준:</b></p>
<ul><li><b>CC</b>: HS 2단위(류) 변경</li>
<li><b>CTH</b>: HS 4단위(호) 변경</li>
<li><b>CTSH</b>: HS 6단위(소호) 변경</li></ul>
<ul><li>단순 가공(조립, 포장 변경)만 거치면 원산지 <b>불인정</b></li>
<li><b>직접운송원칙</b>: 비원산지국 경유 시 환적/일시 장치는 예외 인정</li></ul>`},

    {
        part: 5, title: '45. 원산지 증명서', content: `<ul>
<li><b>원산지 인증수출자</b>: 유효기간 <b>5년</b> (업체별/품목별)</li>
<li>한국-EU FTA: 6,000유로 초과 → <b>인증수출자만</b> 증명서 발급 가능</li>
<li>소액 물품(여행자 휴대품, 우편물, 특송물품): 증명서 <b>제출 면제</b></li>
<li>사후 적용: 수입신고 수리일로부터 <b>1년 이내</b></li></ul>`},

    // ===== Part 6: 대금결제 =====
    {
        part: 6, title: '46. 송금결제방식', content: `<table><tr><th>방식</th><th>설명</th></tr>
<tr><td><b>사전송금(T/T Remittance)</b></td><td>수입자가 물품 수령 전 대금을 먼저 송금. 수출자에게 유리, 수입자에게 불리</td></tr>
<tr><td><b>COD (Cash on Delivery)</b></td><td>물품 도착 후 대금 지급. 수출자가 대금 미회수 위험 부담</td></tr>
<tr><td><b>CAD (Cash against Documents)</b></td><td>서류 인도와 동시에 대금 지급. 추심과 유사하나 은행 개입 없음</td></tr></table>
<ul><li>송금방식은 <b>은행이 대금 지급을 보증하지 않는</b> 당사자 간 직접 거래</li>
<li>환어음이 사용되지 않는 <b>순수 송금(Clean Payment)</b> 방식</li></ul>`},

    {
        part: 6, title: '47. 추심결제방식 (URC 522)', content: `<table><tr><th>구분</th><th>D/P (지급인도조건)</th><th>D/A (인수인도조건)</th></tr>
<tr><td><b>서류 인도 시점</b></td><td>대금 <b>지급 즉시</b> 서류 인도</td><td>환어음 <b>인수(Accept) 즉시</b> 서류 인도</td></tr>
<tr><td><b>대금 지급 시점</b></td><td>서류 인도와 동시</td><td>환어음 만기일에 지급</td></tr>
<tr><td><b>수출자 위험</b></td><td>상대적으로 낮음</td><td>인수 후 만기일에 지급 거절 위험 존재</td></tr>
<tr><td><b>환어음 종류</b></td><td>일람출급 환어음(At sight)</td><td>기한부 환어음(Usance)</td></tr></table>
<ul><li>추심은행은 <b>서류를 전달하는 역할</b>만 하며 대금 지급을 보증하지 <b>않음</b></li>
<li>추심의뢰인(수출자) → 추심의뢰은행(Remitting Bank) → 추심은행(Collecting Bank) → 지급인(수입자)</li></ul>`},

    {
        part: 6, title: '48. 신용장 결제방식 (UCP 600)', content: `<p><b>핵심 원칙</b></p>
<ul><li><b>추상성/독립성</b>: 신용장은 매매계약과 <b>별개의 독립된 거래</b>. 은행은 <b>서류만</b> 심사하고 물품은 확인하지 않음</li>
<li>취소가능/불능 미명시 시 → <b>취소불능 신용장(Irrevocable L/C)</b>으로 간주</li>
<li>물품 불량을 이유로 대금 지급 거절 <b>불가</b></li></ul>
<p><b>관계 당사자</b></p>
<table><tr><th>당사자</th><th>역할</th></tr>
<tr><td><b>개설의뢰인(Applicant)</b></td><td>수입자. 거래은행에 신용장 개설 의뢰</td></tr>
<tr><td><b>개설은행(Issuing Bank)</b></td><td>신용장 발행 및 대금 지급의 최종 책임</td></tr>
<tr><td><b>통지은행(Advising Bank)</b></td><td>수출지에서 신용장을 수익자에게 통지 (지급 의무 없음)</td></tr>
<tr><td><b>확인은행(Confirming Bank)</b></td><td>개설은행의 지급 확약에 <b>추가 확약</b>을 더함 (독립적 지급 의무 부담)</td></tr>
<tr><td><b>매입은행(Negotiating Bank)</b></td><td>수출자가 제시한 환어음/서류를 매입하여 대금 선지급</td></tr>
<tr><td><b>수익자(Beneficiary)</b></td><td>수출자. 신용장 조건에 맞는 서류를 제시하고 대금 수령</td></tr></table>
<p><b>선적서류 심사</b></p>
<ul><li>지정은행/확인은행/개설은행은 서류 수령일 다음 날부터 <b>최대 5영업일</b> 이내에 서류 수리/거절 결정</li>
<li><b>엄밀일치의 원칙(Strict Compliance)</b>: 서류가 신용장 조건과 정확히 일치해야 함</li></ul>`},

    {
        part: 6, title: '49. 화환신용장 조건변경 및 양도', content: `<ul>
<li><b>조건변경(Amendment)</b>: 개설의뢰인의 요청으로 개설은행이 발행. 수익자가 <b>동의해야</b> 효력 발생</li>
<li>수익자가 변경 수락/거절 의사를 통지하지 않으면, 변경된 조건에 일치하는 서류를 제시할 때 <b>수락한 것으로</b> 간주</li>
<li><b>양도(Transfer)</b>: 양도가능 신용장에서만 가능하며 <b>1회에 한해</b> 양도 가능. 제2수익자에서 제3수익자로의 재양도는 불가</li></ul>`},

    {
        part: 6, title: '50. L/G (수입화물선취보증서) & T/R (수입신용장대도)', content: `<table><tr><th>구분</th><th>L/G (Letter of Guarantee)</th><th>T/R (Trust Receipt)</th></tr>
<tr><td><b>정의</b></td><td>선적서류 미도착 시 은행 보증으로 물품 먼저 인수</td><td>수입자가 은행 소유의 화물을 신탁 형태로 인수</td></tr>
<tr><td><b>사용 시점</b></td><td>화물 도착 > 서류 도착 (서류 지연)</td><td>수입자의 자금 부족 시</td></tr>
<tr><td><b>소유권</b></td><td>은행이 보증 부담</td><td>은행이 소유권 보유, 수입자는 보관/판매 위탁</td></tr>
<tr><td><b>위험</b></td><td>개설은행이 선박회사에 보증 책임</td><td>수입자 부도 시 은행 손실 위험</td></tr></table>`},

    {
        part: 6, title: '51. 금융기법 (팩터링 & 포페이팅)', content: `<table><tr><th>구분</th><th>팩터링(Factoring)</th><th>포페이팅(Forfaiting)</th></tr>
<tr><td><b>대상 채권</b></td><td>단기 매출채권 (외상매출금)</td><td>중장기 연불수출 채권 (환어음/약속어음)</td></tr>
<tr><td><b>소구권</b></td><td>무소구(Without Recourse) 원칙</td><td><b>무소구(Without Recourse)</b> 원칙</td></tr>
<tr><td><b>채권 매입자</b></td><td>팩터(Factor) - 금융회사</td><td>포페이터(Forfaiter) - 은행/금융기관</td></tr>
<tr><td><b>특징</b></td><td>소액·다건 위주, 신용조사/회수 대행</td><td>대규모 프로젝트, 은행 보증(Aval) 요구</td></tr></table>`},

    {
        part: 6, title: '52. 보증신용장(Standby L/C) 및 보증서(Guarantee)', content: `<ul>
<li><b>보증신용장</b>: 채무자의 채무불이행 시 은행이 대금을 지급하는 신용장. 본래 목적은 <b>보증</b>이지만 UCP 600 적용</li>
<li><b>독립적 은행보증서</b>: 기초거래와 독립된 보증. 수익자의 청구만으로 지급</li>
<li><b>보증신용장 vs 화환신용장</b>: 화환신용장은 수출자가 의무를 <b>이행</b>하면 지급, 보증신용장은 의무를 <b>불이행</b>하면 지급</li></ul>`},

    {
        part: 6, title: '53. 무역보험제도', content: `<ul>
<li><b>수출보험</b>: 한국무역보험공사(K-SURE)가 운영. 수출 대금 미회수 위험을 담보
<ul><li>단기수출보험: 결제기간 2년 이내</li>
<li>중장기수출보험: 결제기간 2년 초과</li></ul></li>
<li><b>수출신용보증</b>: 수출기업의 금융기관 차입을 보증</li>
<li><b>환변동보험</b>: 환율 변동 위험 헤지 (Part 3에서 상세 설명)</li></ul>`},

    // ===== Part 7: 무역영어 핵심 =====
    {
        part: 7, title: '54. Incoterms 2020 영문 핵심', content: `<ul>
<li><b>"The seller delivers the goods when the goods are placed alongside the vessel"</b> → <b>FAS</b></li>
<li><b>"Risk passes when the goods are on board the vessel"</b> → <b>FOB, CFR, CIF</b></li>
<li><b>"The seller delivers when the goods are unloaded"</b> → <b>DPU</b> (유일한 양하 의무)</li>
<li><b>"Delivered at Place Unloaded"</b> → DPU / <b>"Delivered at Place"</b> → DAP</li>
<li>CIF: <b>"minimum cover under ICC(C)"</b> / CIP: <b>"ICC(A)"</b></li></ul>`},

    {
        part: 7, title: '55. CISG 영문 핵심', content: `<ul>
<li><b>Article 14 (Offer)</b>: "A proposal is sufficiently definite if it indicates the <b>goods</b>, and expressly or implicitly fixes or makes provision for determining the <b>quantity</b> and the <b>price</b>"</li>
<li><b>Article 19 (Counter-offer)</b>: "A reply to an offer which purports to be an acceptance but contains <b>additions, limitations or other modifications</b> is a rejection of the offer and constitutes a <b>counter-offer</b>"</li>
<li><b>Nachfrist</b>: 추가기간 부여 후에도 불이행 시 계약 해제 가능</li></ul>`},

    {
        part: 7, title: '56. 대금결제 영문 핵심', content: `<ul>
<li><b>Bill of Exchange (환어음)</b>: "An unconditional order in writing... requiring the person to whom it is addressed to pay... a certain sum of money"
<ul><li><b>Drawer(발행인)</b> = 수출자 / <b>Drawee(지급인)</b> = 수입자 또는 은행</li>
<li><b>At sight(일람출급)</b> vs <b>Usance(기한부)</b></li></ul></li>
<li><b>D/P</b>: Documents against <b>Payment</b> / <b>D/A</b>: Documents against <b>Acceptance</b></li>
<li><b>UCP 600 Article 14</b>: 서류 심사 기간 = <b>"a maximum of five banking days"</b></li></ul>`},

    {
        part: 7, title: '57. 적하보험 영문 핵심 (MIA / ICC)', content: `<ul>
<li><b>"Where there is a constructive total loss, the assured may either treat the loss as a partial loss, or abandon the subject-matter insured to the insurer"</b> → <b>추정전손 + 위부</b></li>
<li><b>Particular Average(단독해손)</b>: 특정 화물만의 부분손해</li>
<li><b>General Average(공동해손)</b>: 공동 안전을 위한 의도적 희생 → 이해관계자 공동 부담</li>
<li><b>Subrogation(대위)</b>: 보험자가 보험금 지급 후 피보험자의 권리를 대신 행사</li>
<li><b>Insurable Interest(피보험이익)</b>: 보험 대상에 대한 경제적 이해관계</li></ul>`},

    {
        part: 7, title: '58. 무역서신 영문 핵심', content: `<ul>
<li><b>Inquiry(조회)</b> → <b>Offer(청약)</b> → <b>Counter-offer(반대청약)</b> → <b>Acceptance(승낙)</b> → <b>Contract(계약)</b></li>
<li><b>Firm Offer</b>: 확정적 청약 (유효기간 내 철회 불가)</li>
<li><b>"We are pleased to place an order for..."</b> = 주문</li>
<li><b>"We regret to inform you that..."</b> = 클레임/거절</li>
<li><b>"Subject to our final confirmation"</b> = Sub-con offer (최종확인 조건부)</li></ul>`}
];

const QUIZ = [
    { id: 1, subj: 1, q: '대외무역법상 "무역"의 대상에 해당하지 않는 것은?', o: ['형태가 있는 물품의 수출', '용역(서비스)의 수출', '전자적 형태의 무체물(소프트웨어)의 수출', '자본의 이동 및 채권의 거래'], a: 3, ex: '자본의 이동 및 채권 거래는 대외무역법상 무역 대상이 아님' },
    { id: 2, subj: 1, q: '대외무역법령상 외화획득(수출실적)으로 인정되는 것은?', o: ['대가 없이 무상으로 외국에 물품을 인도하는 경우', '해외건설사업에 쓰일 장비를 보냈다가 재반입하는 경우', '외국 기업과 계약 후 대금을 원화로 받고 한국 내 공장에 납품하는 경우', '외국인으로부터 외화를 받고 외화획득용 시설기재를 임대차계약을 맺은 국내 업체에 인도하는 경우'], a: 3, ex: '외화를 받고 시설기재를 임대차계약 맺은 국내 업체에 인도하면 수출실적 인정' },
    { id: 3, subj: 1, q: '대외무역법령에 따른 전문무역상사의 지정 요건으로 올바른 것은?', o: ['전년도 수출실적이 미화 200만 달러 이상', '중소·중견기업 제품의 수출 비중이 30% 이상', '전년도 또는 최근 3년간 평균 수출실적이 미화 100만 달러 이상', '산업통상자원부장관이 지정하면 영구히 그 지위가 유지됨'], a: 2, ex: '100만 불 이상이며, 중소·중견기업 수출 비중 20% 이상 (30%❌)' },
    { id: 4, subj: 1, q: '대외무역법상 전략물자의 수출에 관한 설명으로 잘못된 것은?', o: ['전략물자는 대량살상무기 전용 우려가 있는 물품을 말한다', '전략물자 해당 여부의 판정은 전략물자관리원에 요청할 수 있다', '외국인도수출이나 중계무역이라도 반드시 전략물자 수출허가를 받아야 한다', '국내 통관 없이 제3국으로 수출하는 경우에는 전략물자 수출허가가 면제된다'], a: 3, ex: '외국인도수출/중계무역이라도 전략물자 수출허가 필수 (면제 없음)' },
    { id: 5, subj: 1, q: '수출입공고와 통합공고에 대한 설명으로 올바른 것은?', o: ['수출입공고는 식품위생법에 근거하여 발표된다', '통합공고에 따라 승인을 받으면 수출입공고의 승인이 면제된다', '수출입공고에 따라 승인을 받았다고 해서 통합공고의 요건 확인이 면제되지는 않는다', '수출입공고는 수출금지품목, 수출제한품목, 수입제한품목, 수입금지품목을 모두 관리한다'], a: 2, ex: '수출입공고 승인 ≠ 통합공고 면제. 둘은 별개 절차' },
    { id: 6, subj: 1, q: "관세법상 '내국물품'에 해당하는 것은?", o: ['수출신고가 수리된 물품', '수입신고가 수리되기 전의 도착 물품', '외국 선박이 공해에서 채집한 수산물', '입항 전 수입신고가 수리된 물품'], a: 3, ex: "입항 전 수입신고가 '수리된' 물품은 내국물품" },
    { id: 7, subj: 1, q: '관세법상 수출통관에 관한 설명으로 올바른 것은?', o: ['수출신고 수리 후 60일 이내에 운송수단에 적재해야 한다', '적재 기간의 연장은 최대 2년까지 가능하다', '수출신고 수리일로부터 30일 이내에 운송수단에 적재해야 한다', '수출신고는 반드시 화주 본인의 명의로만 해야 한다'], a: 2, ex: '수출신고 수리일로부터 30일 이내 적재 (60일❌)' },
    { id: 8, subj: 1, q: '관세납부에 관한 설명으로 잘못된 것은?', o: ['보정은 납부 후 6개월 이내에 신청하며 가산세가 없다', '수정신고는 보정기간 중에도 할 수 있다', '경정청구는 최초 납세신고일로부터 5년 이내에 할 수 있다', '구매수수료는 과세가격에 포함되지 않는다'], a: 1, ex: '보정기간(6개월) 중에는 수정신고 불가' },
    { id: 9, subj: 1, q: '관세율의 적용 우선순위에 관한 설명으로 올바른 것은?', o: ['FTA 관세는 덤핑방지관세보다 우선 적용된다', '기본관세는 잠정관세보다 우선 적용된다', '덤핑방지관세, 상계관세, 보복관세, 긴급관세는 다른 세율보다 무조건 우선 적용된다', '2순위 세율은 하위 순위보다 높은 세율이라도 우선 적용된다'], a: 2, ex: '덤핑방지관세 등 1순위 세율은 무조건 최우선 적용' },
    { id: 10, subj: 1, q: '재수출면세에 관한 설명으로 잘못된 것은?', o: ['수입신고 수리일로부터 1년 이내에 재수출해야 면세된다', '기한 내 미수출 시 관세와 함께 관세액의 20% 가산세가 부과된다', '수입신고 전에 양도하면 양수인이 납세의무자가 된다', '재수출면세를 받으려면 해외에서 제조·가공된 물품이어야 한다'], a: 3, ex: '재수출면세는 해외 제조·가공 여부와 무관, 1년 내 재수출이 조건' },
    { id: 11, subj: 1, q: '보세구역에 관한 설명으로 올바른 것은?', o: ['보세창고에서 외국물품을 원료로 하는 제조·가공 작업을 할 수 있다', '보수작업으로 HS 10단위 코드가 변경되어도 무방하다', '보수작업의 재료로 외국물품을 사용할 수 있다', '물품의 부패·손상으로 폐기할 때는 세관장의 승인을 받아야 한다'], a: 3, ex: '보세구역 물품 폐기 시 세관장 승인 필요' },
    { id: 12, subj: 1, q: '관세환급특례법에 관한 설명으로 잘못된 것은?', o: ['수출용 원재료 수입 시 납부한 관세를 환급한다', '기계장치 등 간접 소모 물품도 환급 대상이다', '원재료 수입수리일로부터 2년 이내에 수출되어야 한다', '환급청구권은 수출신고 수리일로부터 5년 이내에 행사해야 한다'], a: 1, ex: '기계장치 등 간접 소모 물품은 환급 대상 아님' },
    { id: 13, subj: 1, q: '관세징수권 소멸시효에 관한 설명으로 올바른 것은?', o: ['관세부과 제척기간은 원칙적으로 10년이다', '부정한 방법으로 관세를 포탈한 경우 제척기간은 5년이다', '5억 원 이상 관세의 징수권 소멸시효는 10년이다', '납부독촉은 시효를 정지시킨다'], a: 2, ex: '5억 원 이상은 10년, 그 밖은 5년. 납부독촉은 시효 중단' },
    { id: 14, subj: 1, q: 'FTA 원산지 규정의 세번변경기준에 관한 설명으로 올바른 것은?', o: ['CC는 HS 4단위(호) 변경을 의미한다', 'CTH는 HS 2단위(류) 변경을 의미한다', 'CTSH는 HS 6단위(소호) 변경을 의미한다', '단순 포장 변경만 거쳐도 세번변경으로 인정된다'], a: 2, ex: 'CC=2단위, CTH=4단위, CTSH=6단위' },
    { id: 15, subj: 1, q: '원산지 인증수출자에 관한 설명으로 잘못된 것은?', o: ['업체별 인증과 품목별 인증이 있다', '유효기간은 업체별 5년, 품목별 3년이다', '한국-EU FTA에서 6,000유로 초과 물품은 인증수출자만 증명서 발급이 가능하다', '여행자 휴대품 등 소액물품은 원산지증명서 제출이 면제된다'], a: 1, ex: '업체별/품목별 모두 유효기간 5년 (동일)' },
    { id: 16, subj: 2, q: '송금결제방식에 관한 설명으로 올바른 것은?', o: ['사전송금(T/T)은 수입자에게 유리한 방식이다', 'COD는 물품 도착 전에 대금을 지급하는 방식이다', '송금방식에서는 은행이 대금 지급을 보증한다', 'CAD는 서류 인도와 동시에 대금을 지급하는 방식이다'], a: 3, ex: 'CAD는 서류 인도와 동시에 대금 지급. 송금방식은 은행 보증 없음' },
    { id: 17, subj: 2, q: '추심결제방식(D/P, D/A)에 관한 설명으로 잘못된 것은?', o: ['D/P에서는 대금 지급 즉시 서류가 인도된다', 'D/A에서는 환어음 인수 즉시 서류가 인도된다', '추심은행은 대금 지급을 보증하는 역할을 한다', 'D/P에는 일람출급 환어음, D/A에는 기한부 환어음이 사용된다'], a: 2, ex: '추심은행은 서류 전달 역할만 하며 대금 지급 보증 안 함' },
    { id: 18, subj: 2, q: 'UCP 600에 따른 신용장에 관한 설명으로 올바른 것은?', o: ['신용장에 취소가능/불능 표시가 없으면 취소가능 신용장으로 간주한다', '개설은행은 물품의 품질을 확인한 후 대금을 지급한다', '신용장은 매매계약과 별개의 독립된 거래이며 은행은 서류만 심사한다', '수입자가 물품 불량을 이유로 은행에 지급 거절을 요청할 수 있다'], a: 2, ex: '신용장은 매매계약과 별개(독립성), 은행은 서류만 심사(추상성)' },
    { id: 19, subj: 2, q: '화환신용장의 관계 당사자에 관한 설명으로 잘못된 것은?', o: ['개설은행은 대금 지급의 최종 책임을 진다', '통지은행은 신용장을 수익자에게 통지하며 별도의 지급 의무는 없다', '확인은행은 개설은행의 지급 확약에 추가 확약을 더하여 독립적 지급 의무를 부담한다', '매입은행은 수입자가 제시한 서류를 매입하여 대금을 선지급한다'], a: 3, ex: '매입은행은 수출자(수익자)가 제시한 서류를 매입 (수입자❌)' },
    { id: 20, subj: 2, q: '선적서류 심사에 관한 설명으로 올바른 것은?', o: ['서류 심사 기간은 서류 수령일로부터 최대 7영업일이다', '서류가 신용장 조건과 실질적으로 일치하면 된다(실질일치)', '서류 수령일 다음 날부터 최대 5영업일 이내에 수리/거절을 결정해야 한다', '서류 심사 시 물품의 실제 상태도 함께 확인해야 한다'], a: 2, ex: '서류 수령일 다음 날부터 최대 5영업일 (UCP 600 Art.14)' },
    { id: 21, subj: 2, q: '화환신용장의 조건변경(Amendment)에 관한 설명으로 올바른 것은?', o: ['조건변경은 수익자의 동의 없이도 효력이 발생한다', '수익자가 수락/거절 의사를 통지하지 않으면 자동으로 거절된 것으로 간주한다', '수익자가 변경된 조건에 일치하는 서류를 제시하면 수락한 것으로 간주한다', '조건변경은 통지은행이 단독으로 발행할 수 있다'], a: 2, ex: '변경된 조건에 일치하는 서류 제시 = 수락 간주' },
    { id: 22, subj: 2, q: '신용장의 양도(Transfer)에 관한 설명으로 잘못된 것은?', o: ['양도가능 신용장에서만 양도가 가능하다', '양도는 1회에 한해 가능하다', '제2수익자에서 제3수익자로의 재양도도 가능하다', '양도가능 여부는 신용장에 명시되어야 한다'], a: 2, ex: '양도는 1회만 가능, 제3수익자 재양도 불가' },
    { id: 23, subj: 2, q: 'L/G(수입화물선취보증서)에 관한 설명으로 올바른 것은?', o: ['선적서류가 먼저 도착하고 화물이 늦게 도착할 때 사용한다', '수입자가 은행 소유의 화물을 신탁 형태로 인수하는 방식이다', '화물이 먼저 도착했으나 선적서류가 미도착 시 은행 보증으로 물품을 먼저 인수한다', 'L/G는 수입자의 자금 부족과 관련된 제도이다'], a: 2, ex: 'L/G는 화물 도착 > 서류 도착 시 은행 보증으로 선인수' },
    { id: 24, subj: 2, q: '팩터링(Factoring)과 포페이팅(Forfaiting)의 비교로 올바른 것은?', o: ['팩터링은 중장기 채권, 포페이팅은 단기 채권을 대상으로 한다', '팩터링과 포페이팅 모두 무소구(Without Recourse) 원칙이다', '포페이팅에서는 은행 보증(Aval)이 필요하지 않다', '팩터링은 대규모 프로젝트에 주로 사용된다'], a: 1, ex: '팩터링·포페이팅 모두 무소구 원칙' },
    { id: 25, subj: 2, q: '보증신용장(Standby L/C)에 관한 설명으로 잘못된 것은?', o: ['채무자의 채무불이행 시 은행이 대금을 지급한다', 'UCP 600이 적용된다', '화환신용장은 의무 이행 시 지급, 보증신용장은 의무 불이행 시 지급한다', '보증신용장은 매매계약의 이행을 대신하는 것이므로 독립성이 없다'], a: 3, ex: '보증신용장도 독립성이 있음 (UCP 600 적용)' },
    { id: 26, subj: 2, q: '외환시장에 관한 설명으로 올바른 것은?', o: ['외환시장은 특정 거래소에서 운영되는 장내시장이다', '일반 기업은 은행 간 외환시장에 직접 참여할 수 있다', '외환시장은 장외시장(OTC)이며 투기거래 비중이 실수요 거래보다 크다', '은행 간 외환시장은 주말과 공휴일에도 개장한다'], a: 2, ex: '외환시장은 OTC, 투기거래 > 실수요 거래' },
    { id: 27, subj: 2, q: '다음 중 환리스크 내부적 관리기법에 해당하지 않는 것은?', o: ['매칭(Matching)', '네팅(Netting)', '선물환(Forward) 계약', '리딩(Leading)'], a: 2, ex: '선물환은 외부적(외부헤지) 관리기법' },
    { id: 28, subj: 2, q: '통화선물과 선물환의 비교로 잘못된 것은?', o: ['통화선물은 거래소에서 표준화된 단위로 거래된다', '선물환은 장외시장에서 당사자 간 1대1로 거래된다', '통화선물은 일일정산을 실시하지 않는다', '통화선물의 1계약 단위는 달러 기준 1만 달러이다'], a: 2, ex: '통화선물은 일일정산 실시 (선물환이 안 함)' },
    { id: 29, subj: 2, q: '통화옵션에 관한 설명으로 올바른 것은?', o: ['수입업체는 풋옵션을 매입하여 환위험을 헤지한다', '수출업체는 콜옵션을 매입하여 환위험을 헤지한다', '스트래들은 콜옵션과 풋옵션을 동시에 매입하며 행사가를 같게 설정하는 전략이다', '옵션 매입자는 만기일에 반드시 옵션을 행사해야 한다'], a: 2, ex: '수입업체=콜옵션, 수출업체=풋옵션. 스트래들=콜+풋 동시, 행사가 동일' },
    { id: 30, subj: 2, q: '환변동보험에 관한 설명으로 잘못된 것은?', o: ['한국무역보험공사에서 환율을 보장해 준다', '외환차익이 발생하면 환수금을 납부해야 한다', '일반 선물환과 동일하게 증거금과 담보를 제공해야 한다', '수출계약 변경 시 조기 정산이 가능하다'], a: 2, ex: '환변동보험은 증거금/담보 면제 (일반 선물환과의 차이)' },
    { id: 31, subj: 3, q: '무역계약의 법적 성격에 해당하지 않는 것은?', o: ['쌍무계약', '유상계약', '요식계약', '낙성계약'], a: 2, ex: '무역계약은 불요식계약 (요식계약❌)' },
    { id: 32, subj: 3, q: '무역계약에서 법규의 적용 순서로 올바른 것은?', o: ['당사자 간 합의 → 강행규정 → 준거법 → 국제관습', '강행규정 → 당사자 간 합의 → 준거법 → 국제관습', '국제관습 → 준거법 → 당사자 간 합의 → 강행규정', '준거법 → 강행규정 → 국제관습 → 당사자 간 합의'], a: 1, ex: '강행규정 → 합의 → 준거법 → 국제관습' },
    { id: 33, subj: 3, q: 'Incoterms 2020에 관한 설명으로 잘못된 것은?', o: ['Incoterms 2020은 법적 조약이 아닌 국제상관습이다', 'DPU는 매도인이 양하(unloading) 의무를 지는 유일한 조건이다', 'CIF의 최소 부보 조건은 ICC(A)이다', 'EXW에서 매도인은 수출통관 의무가 없다'], a: 2, ex: 'CIF 최소 부보: ICC(C). CIP가 ICC(A)' },
    { id: 34, subj: 3, q: '비엔나협약(CISG)에 관한 설명으로 올바른 것은?', o: ['선박, 항공기의 매매에도 적용된다', '개인용으로 구입된 물품에도 항상 적용된다', '계약 해제의 효력은 소급 적용되며 상대방에게 통지해야 효력이 발생한다', '손해배상은 계약해제권과 병행하여 행사할 수 없다'], a: 2, ex: '해제는 소급되나 통지 필요. 손해배상은 병행 가능' },
    { id: 35, subj: 3, q: 'CISG Article 14에 따른 확정적 청약의 요건으로 올바른 것은?', o: ['물품, 수량, 인도일이 명시되어야 한다', '물품, 수량, 가격이 명시 또는 결정 가능해야 한다', '물품, 가격, 보험이 명시되어야 한다', '불특정 다수에게 제안하면 확정적 청약이 된다'], a: 1, ex: '물품(Goods), 수량(Quantity), 가격(Price)' },
    { id: 36, subj: 3, q: '다음 중 반대청약(Counter offer)에 해당하는 것은?', o: ['청약 내용을 그대로 수락하는 승낙', '청약 조건에 수정을 가한 조건부 승낙', '청약에 대한 단순한 확인 통지', 'Proforma Invoice 발행'], a: 1, ex: '조건부 승낙 = 원청약 거절 + 새로운 청약(반대청약)' },
    { id: 37, subj: 3, q: 'Offer subject to being unsold에 관한 설명으로 올바른 것은?', o: ['청약자의 최종 확인이 있어야 계약이 성립한다', '재고가 있어야만 계약이 성립하는 조건부 청약이다', '가격이 사전 통보 없이 변경될 수 있는 청약이다', '반품이 허용되는 조건부 청약이다'], a: 1, ex: '재고잔류 조건부 청약 - 재고 있어야 성립' },
    { id: 38, subj: 3, q: '무역계약의 수량 조건에 관한 설명으로 올바른 것은?', o: ['Metric ton(M/T)은 2,000 파운드를 기준으로 한다', '살물(Bulk cargo)은 과부족 약관이 없으면 과부족이 허용되지 않는다', "'about'이나 'approximately'가 붙으면 10% 과부족이 인정된다", '분할선적은 금지 표시가 없어도 불허가 원칙이다'], a: 2, ex: "'about/approximately' 붙으면 10% 과부족 인정" },
    { id: 39, subj: 3, q: '다음 중 해상 및 내수로 운송에만 사용할 수 있는 Incoterms 조건은?', o: ['EXW, FCA, CPT', 'FAS, FOB, CFR, CIF', 'DAP, DPU, DDP', 'CIP, CPT, DPU'], a: 1, ex: 'FAS, FOB, CFR, CIF는 해상/내수로 전용' },
    { id: 40, subj: 3, q: '선하증권(B/L)에 관한 설명으로 잘못된 것은?', o: ['유가증권이자 권리증권이다', '배서(Endorsement)로 양도할 수 있다', '비유통증권으로 수하인 본인 확인만으로 화물이 인도된다', '물품 인도 청구권을 나타낸다'], a: 2, ex: 'B/L은 유통증권. 비유통은 Sea Waybill' },
    { id: 41, subj: 3, q: '적하보험 ICC 약관에 관한 설명으로 올바른 것은?', o: ['ICC(C)는 포괄책임 방식으로 모든 위험을 담보한다', 'ICC(A), (B), (C) 모두 전쟁위험을 담보한다', 'ICC(A)는 포괄책임, ICC(B)와 (C)는 열거책임 방식이다', '지연으로 인한 손해는 ICC(A)에서 담보된다'], a: 2, ex: 'ICC(A)=포괄, ICC(B)/(C)=열거. 전쟁은 별도 특약' },
    { id: 42, subj: 3, q: '추정전손(Constructive Total Loss)에 관한 설명으로 올바른 것은?', o: ['물품이 물리적으로 완전히 소멸된 경우를 말한다', '수리비가 물품 가치보다 적을 때 전손 처리한다', '수리비/구조비가 물품 가치보다 클 때 전손 처리가 가능하다', '위부(Abandonment)를 하지 않아도 전손 보험금을 받을 수 있다'], a: 2, ex: '수리비 > 물품가치 → 전손 처리 가능' },
    { id: 43, subj: 3, q: '용선 계약에 관한 설명으로 잘못된 것은?', o: ['항해용선에서는 선주가 선원 배치와 운항을 담당한다', '정기용선에서는 선주가 선원을 배치하고 용선자가 항해를 지시한다', '나용선에서는 선체만 빌리고 선원은 용선자가 직접 고용한다', '나용선에서는 선주가 선원을 고용하고 용선자가 항해를 지시한다'], a: 3, ex: '나용선은 용선자가 선원 고용·운항' },
    { id: 44, subj: 3, q: '중재(Arbitration)에 관한 설명으로 잘못된 것은?', o: ['단심제로 1번의 판정으로 끝난다', '법원의 최종 판결과 동일한 효력이 있다', '구두 합의만으로도 중재 절차를 개시할 수 있다', '민간 전문가(중재인)의 판정에 복종하는 분쟁 해결 방식이다'], a: 2, ex: '중재합의는 반드시 서면이어야 함 (구두❌)' },
    { id: 45, subj: 3, q: '"on or about January 20"이 선적 조건에 명시된 경우, 허용되는 선적 기간은?', o: ['1월 17일~1월 23일 (전후 3일, 총 7일)', '1월 15일~1월 25일 (전후 5일, 총 11일)', '1월 10일~1월 30일 (전후 10일, 총 21일)', '1월 20일 당일만 허용'], a: 1, ex: 'on or about = 전후 5일씩, 총 11일' },
    { id: 46, subj: 4, q: '다음 영문에서 설명하는 Incoterms 2020 조건은?\n"The seller delivers the goods when the goods are placed alongside the vessel."', o: ['FOB', 'FAS', 'CFR', 'CIF'], a: 1, ex: '"alongside the vessel" = FAS' },
    { id: 47, subj: 4, q: 'CISG Article 14에 관한 다음 영문의 빈칸에 들어갈 것을 순서대로 올바르게 나열한 것은?\n"A proposal is sufficiently definite if it indicates the (  ), and expressly or implicitly fixes or makes provision for determining the (  ) and the (  )."', o: ['goods, quality, price', 'goods, quantity, price', 'goods, delivery, payment', 'goods, quantity, delivery'], a: 1, ex: 'goods, quantity, price (Art.14)' },
    { id: 48, subj: 4, q: '다음 영문이 설명하는 개념은?\n"A reply to an offer which purports to be an acceptance but contains additions, limitations or other modifications is a rejection of the offer and constitutes a ___."', o: ['Firm offer', 'Counter-offer', 'Free offer', 'Acceptance'], a: 1, ex: '조건부 승낙 = counter-offer' },
    { id: 49, subj: 4, q: 'Bill of Exchange에 관한 설명으로 올바른 것은?', o: ['Drawer(발행인)는 수입자를 말한다', 'Drawee(지급인)는 수출자를 말한다', 'At sight는 기한부 환어음을 의미한다', 'Drawer는 수출자이고 Drawee는 수입자 또는 은행이다'], a: 3, ex: 'Drawer=수출자, Drawee=수입자/은행' },
    { id: 50, subj: 4, q: 'UCP 600 Article 14에 따른 서류 심사 기간은?', o: ['a maximum of three banking days', 'a maximum of five banking days', 'a maximum of seven banking days', 'a maximum of ten banking days'], a: 1, ex: 'five banking days (UCP 600 Art.14)' },
    { id: 51, subj: 4, q: 'D/P와 D/A의 영문 풀이로 올바른 것은?', o: ['D/P: Documents against Payment, D/A: Documents against Acceptance', 'D/P: Documents against Promise, D/A: Documents against Agreement', 'D/P: Delivery after Payment, D/A: Delivery after Acceptance', 'D/P: Draft against Payment, D/A: Draft against Acceptance'], a: 0, ex: 'D/P=Documents against Payment' },
    { id: 52, subj: 4, q: '다음 영문이 설명하는 해상보험 개념은?\n"Where there is a constructive total loss, the assured may either treat the loss as a partial loss, or abandon the subject-matter insured to the insurer."', o: ['Particular Average', 'General Average', 'Constructive Total Loss + Abandonment', 'Subrogation'], a: 2, ex: 'constructive total loss + abandon' },
    { id: 53, subj: 4, q: '다음 영문 무역서신의 의미로 적절한 것은?\n"We are pleased to place an order for 500 units of Model X at the price quoted in your offer dated February 1."', o: ['청약(Offer)', '주문(Order)', '클레임(Claim)', '조회(Inquiry)'], a: 1, ex: '"place an order" = 주문' },
    { id: 54, subj: 4, q: '"Subject to our final confirmation"이 포함된 청약의 종류는?', o: ['Firm offer', 'Offer subject to being unsold', 'Sub-con offer (최종확인 조건부 청약)', 'Offer on sale or return'], a: 2, ex: '"subject to our final confirmation" = sub-con offer' },
    { id: 55, subj: 4, q: 'General Average에 관한 설명으로 올바른 것은?', o: ['특정 화물만의 부분손해를 의미한다', '보험자가 보험금 지급 후 피보험자의 권리를 대신 행사하는 것이다', '공동 안전을 위한 의도적 희생으로 이해관계자가 공동 부담한다', '보험 대상에 대한 경제적 이해관계를 말한다'], a: 2, ex: 'General Average = 공동해손' },
    { id: 56, subj: 4, q: '다음 빈칸에 들어갈 용어로 올바른 것은?\nCIF requires the seller to obtain insurance with (  ) cover, while CIP requires (  ) cover.', o: ['ICC(A), ICC(C)', 'ICC(B), ICC(A)', 'ICC(C), ICC(A)', 'ICC(A), ICC(B)'], a: 2, ex: 'CIF=ICC(C), CIP=ICC(A)' },
    { id: 57, subj: 4, q: 'Incoterms 2020에서 매도인의 의무가 가장 큰 조건은?', o: ['EXW', 'FOB', 'CIF', 'DDP'], a: 3, ex: 'DDP = 매도인 최대 의무' },
    { id: 58, subj: 4, q: '"Nachfrist"에 관한 설명으로 올바른 것은?', o: ['Incoterms에서 사용되는 운송 관련 용어이다', 'CISG에서 추가기간을 부여한 후에도 불이행 시 계약 해제가 가능한 제도이다', 'UCP 600의 서류 심사 기간을 말한다', '환어음의 만기일을 의미한다'], a: 1, ex: 'CISG의 추가기간 부여 제도' },
    { id: 59, subj: 4, q: '다음 중 Insurable Interest(피보험이익)의 정의로 올바른 것은?', o: ['보험료를 납부할 의무', '보험 대상에 대한 경제적 이해관계', '보험자의 보상 한도', '보험사고에 대한 증명 의무'], a: 1, ex: '보험 대상에 대한 경제적 이해관계' },
    { id: 60, subj: 4, q: '다음 영문 무역서신의 성격으로 적절한 것은?\n"We regret to inform you that the goods received are not in conformity with the sample submitted."', o: ['주문(Order)', '승낙(Acceptance)', '클레임/거절(Claim)', '청약(Offer)'], a: 2, ex: '"regret to inform" + 물품 부적합 = 클레임' }
];
