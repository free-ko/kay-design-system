/**
 * 객체를 받아 URL 쿼리 스트링으로 변환합니다.
 * @param obj 쿼리 파라미터로 변환할 객체.
 * @returns 변환된 URL 쿼리 스트링
 *
 * // 예시 객체
 *  * const queryObject = {
 *   name: "John Doe",
 *   age: 30,
 *   isActive: true,
 *   nationality: undefined  // 이 값은 쿼리 스트링에서 제외됩니다.
 * };
 *
 * // 변환된 URL 쿼리 스트링
 *  "name=John%20Doe&age=30&isActive=true"
 */
export const getQueryString = (obj: Record<string, unknown>) => {
  const queryParams = new URLSearchParams();

  for (const [key, value] of Object.entries(obj)) {
    value && queryParams.append(key, String(value));
  }

  return queryParams.toString();
};
