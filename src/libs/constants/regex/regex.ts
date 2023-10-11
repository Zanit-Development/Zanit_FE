/**
 * 정규식
 */

export const EMAIL_REGEX = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
export const NAME_REGEX = "";

// 하이픈 X
export const PHONE_REGEX = /([0-1]{3})([0-9]{4})([0-9]{4})/g;
// 하이픈 자동 삽입
// (/([0-1]{3})([0-9]{4})([0-9]{4})/, "$1=$2-$3")

// 영문 숫자 조합 6자리 이상
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
