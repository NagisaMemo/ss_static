$("body").addClass("container-fluid");
$("body").prepend(`
    <div class="container-fluid common-navbar">
        <nav class="row heading" role="navigation" id="mybar">
            <div class="navbar-header" >
                <a href="/" class="col-sm-4">
                    <img src="/starsea.png" class="navimg"></img>
                </a>
                <span class="col-sm-4">
                    </span>
                <button class="navbar-toggle col-sm-4" data-toggle="collapse"
                        data-target="#shownav" id="btnnav">
                    <span class="glyphicon glyphicon-menu-hamburger"></span>
                </button>
            </div>

            <div class="collapse navbar-collapse navbar-right" id="shownav">
                <ul class="nav navbar-nav mynavul">
                    <li class="myli"><a href="/work" class="anav">作品阅览</a></li>
                    <li class="myli"><a href="/activity" class="anav">活动众筹</a></li>
                    <li class="myli"><a href="/intro.html" class="anav">组织介绍</a></li>
                </ul>
            </div>
        </nav>
    </div>
`);
$("body").append(`
    <div class="footbar text-center">
    <hr>
		<p class="footbarpara">互联网ICP备案：鲁ICP备17053445号</p>
	</div>
`);
