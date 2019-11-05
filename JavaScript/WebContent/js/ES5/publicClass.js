/**
 * 공용함수 넣을 클래스
 */
function PublicClass(){
	this.Calendar =  new Calendar(); /* 캘린더 함수 선언*/
	
	/**
	 * 캘린더 최초 생성이벤트 
	 */
	PublicClass.prototype.initCalendar = function (id){
		this.Calendar.initCreateDatepicker(id);
	}
}
/**
 * 공용함수 시작 
 */
function fn_publicText(){
	var publicLet = new PublicClass();
	//console.log(publicLet);
	/*캘린더세팅*/
	publicLet.initCalendar('calendarText');
}
