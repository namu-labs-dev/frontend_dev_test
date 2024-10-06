export const HomeDescriptionModule = () => {
  return (
    <div className="absolute left-0 right-0 mt-5 max-w-[500px] w-full h-[58.8vh] bg-[#2C2D30]  m-auto rounded-t-3xl p-5 overflow-y-auto">
      {/* 
        우리가 해외 개발자에게 원하는 최소 능력
          1. 우리의 페이지 구성 규칙을 이해하고, 이 규칙을 따라 요청 페이지를 제작하는 것
          2. 페이지 내부의 구성 요소들 중 변동성이 있는 요소 혹은 비즈니스 로직이 들어가는 요소를 Container에서 핸들링 할 수 있게 하는 것
          3. 각 코드파일 별 convention을 지키는 것
          4. Sample Link를 통해 보여준 기초 컴포넌트들을 이해하고 사용할 수 있는 것
        우리가 해외 개발자에게 원하는 최대 능력
          1. 우리의 페이지 구성 규칙의 미흡함을 발견하고, 이를 개선하여 결과물에 반영하는 것(이 경우 주석을 통한 설명을 작성해야 함)
          2. Sample 코드에서 제공하는 기초 컴포넌트의 미흡함을 발견하고, 이를 개선하여 결과물에 반영하는 것(이 경우 주석을 통한 설명을 작성해야 함)
        예시 페이지들의 역할 간단 설명 
          1. Empty: 페이지 구성 규칙, props 사용 규칙, 기초 layout을 확인할 수 있는 페이지
          2. PageWithModal: 기초 컴포넌트인 Modal 컴포넌트의 사용법을 확인할 수 있는 페이지
          3. PageWithForm: 기초 컴포넌트인 Form 컴포넌트의 사용법을 확인할 수 있는 페이지
        
          translate korean description to English and make markdown
        */}
  

      
        <div className="flex gap-4 p-4">
          <div>
            <img src="/images/eth.png" alt="eth" className="w-[44px] h-[44px]"/>
          </div>
          <div className="flex justify-between gap-2">
            <div>
              <p className="text-[16px] text-white font-bold">ETH</p>
              <p className="text-[16px] text-[#CACACA]">User: namulabs is fantasic company...</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-[14px] text-white">8:50pm</p>
              <p><img src="/images/Count.png"/></p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 p-4">
          <div>
            <img src="/images/nv.png" alt="nv" className="w-[44px] h-[44px] object-cover"/>
          </div>
          <div className="flex justify-between gap-2">
            <div>
              <p className="text-[16px] text-white font-bold">Nvir</p>
              <p className="text-[16px] text-[#CACACA]">User: namulabs is fantasic company...</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-[14px] text-white">8:50pm</p>
            </div>
          </div>
        </div>
      </div>
    
  );
};
