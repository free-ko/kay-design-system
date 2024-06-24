/** 에러 메시지의 일관성을 지키기 위해 에러 메시지를 생성하는 빌더 함수입니다. */
export const errorMessageBuilder = (title: string) => {
  return `${title} 중 오류가 발생하였습니다.`;
};
