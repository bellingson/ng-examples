<div class="top-bar">
    <div class="container">
        <div class="pull-left home">
            <span class="glyphicon glyphicon-shopping-cart"></span>
            <a class="home" href="/">Stuff Mart</a>
        </div>

        <nav class="pull-right">
            <ul>
                <c:if test="${user == null}">
                    <li><a href="/login/view">Sign In</a></li>
                </c:if>
                <c:if test="${user != null}">
                    <li><a id="logout" href="/logout">Sign Out</a>

                        <form id="logout-form" action="/logout"  method="post">
                            <input type="hidden"
                                   name="${_csrf.parameterName}"
                                   value="${_csrf.token}"/>
                        </form>

                    </li>
                </c:if>
            </ul>
        </nav>

    </div>
</div>
