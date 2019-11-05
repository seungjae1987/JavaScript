<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<jsp:useBean id="today" class="java.util.Date" />
<fmt:formatDate value="${today}" pattern="yyyyMMddhhss" var="nowDate"/>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="<c:url value="css/jquery/jquery-ui.css"><c:param name="version" value="${nowDate}"/></c:url>"/>
<script type="text/javascript" src="<c:url value="js/jquery/jquery-2.1.4.min.js"><c:param name="version" value="${nowDate}"/></c:url>"></script>
<script type="text/javascript" src="<c:url value="js/jquery/jquery-ui.js"><c:param name="version" value="${nowDate}"/></c:url>"></script>

<!-- 캘린터 파일 -->
<script type="text/javascript" src="<c:url value="js/ES5/calendar/calendar.js"><c:param name="version" value="${nowDate}"/></c:url>"></script>
<script type="text/javascript" src="<c:url value="js/ES5/publicClass.js"><c:param name="version" value="${nowDate}"/></c:url>"></script>

<body>
	<input type="text" id="calendarText" name = "calendarText">
</body>
	<script type="text/javascript">
		/*함수 태스트*/
		$(document).ready(fn_publicText());
	</script>
</html>

