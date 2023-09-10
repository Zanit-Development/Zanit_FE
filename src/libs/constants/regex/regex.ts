/**
 * 정규식
 */

export const EMAIL_REGEX = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
export const NAME_REGEX = "";

// 하이픈 X
export const PHONE_REGEX = /([0-1]{3})([0-9]{4})([0-9]{4})/g;
// 하이픈 자동 삽입
// (/([0-1]{3})([0-9]{4})([0-9]{4})/, "$1=$2-$3")

// 특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내
export const PASSWORD_REGEX = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
