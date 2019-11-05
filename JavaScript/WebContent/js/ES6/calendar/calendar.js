/*
 * Class ES6 버전 부터 추가
 * Calendar Class 등록 하는 함수 
 **/
class Calendar {
	/* 캘린터 선언 하는 부분 */
	initCreateDatepicker(id){
		$("#" + id).datepicker({
	          dateFormat:'yy-mm-dd', /* 날짜 표현형식 */
	          monthNamesShort:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], /*컬러피커 나오는 월*/
	          dayNamesMin:['일','월','화','수','목','금','토'], /* 컬러피커 나오는 일*/
	          changeMonth:true, /* 월변경가능 */
	          changeYear:true,  /* 년변경가능 */
	          showMonthAfterYear:true /* 년 뒤에 월표시 */
	      });
	}
	
};