/*
 * 공용함수 처럼 사용하기 위해서 만듬
 */
class PublicClass {
	constructor(){
		this.Calendar =  new Calendar();
	}
	/*갤린터 생성*/
	initCalendar(id){
		this.Calendar.initCreateDatepicker(id);
	}
};

/**
 * 공용함수 테스트
 */
function fn_publicText(){
	let publicLet = new PublicClass();
	console.log(publicLet);
	/*캘린더세팅*/
	publicLet.initCalendar('calendarText');
}

/*함수 태스트*/
$(document).ready(function(){
	fn_publicText();
});