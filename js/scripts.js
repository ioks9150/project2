$(function () {








    $('#header').removeClass('on');
    $(window).on('scroll', function () {
        var scr = $(window).scrollTop();
        var width_size = window.outerWidth;

//        if (scr === 0) {
//            $('#header').removeClass('on');
//            $('#header .logo a img').attr('src', 'images/logo.png');
//            $('#header .search a img').attr('src', 'images/search.png');
//            $('#header .menu a img').attr('src', 'images/menu.png');
//        } else {
//            $('#header').addClass('on');
//            $('#header.on .logo a img').attr('src', 'images/logo_blue.png');
//            $('#header.on .search a img').attr('src', 'images/search2.png');
//            $('#header.on .menu a img').attr('src', 'images/menu2.png');
//        }
        if (scr === 0 && width_size<769) {
            $('#header').removeClass('on');
            $('#header .logo a img').attr('src', 'images/logo_blue.png');
            $('#header .search a img').attr('src', 'images/search2.png');
            $('#header .menu a img').attr('src', 'images/menu2.png');
        } else {
            $('#header').addClass('on');
            $('#header.on .logo a img').attr('src', 'images/logo_blue.png');
            $('#header.on .search a img').attr('src', 'images/search2.png');
            $('#header.on .menu a img').attr('src', 'images/menu2.png');
        }
        if (scr === 0 && width_size>768) {
            $('#header').removeClass('on');
            $('#header .logo a img').attr('src', 'images/logo.png');
            $('#header .search a img').attr('src', 'images/search.png');
            $('#header .menu a img').attr('src', 'images/menu.png');
        } else {
            $('#header').addClass('on');
            $('#header.on .logo a img').attr('src', 'images/logo_blue.png');
            $('#header.on .search a img').attr('src', 'images/search2.png');
            $('#header.on .menu a img').attr('src', 'images/menu2.png');
        }
    });


    $(window).resize(function () {

        var width_size = window.outerWidth;

        if (width_size > 1280) {
        }

        if (width_size < 769 ) {
            $('#header .logo a img').attr('src', 'images/logo_blue.png');
            $('#header .search a img').attr('src', 'images/search2.png');
            $('#header .menu a img').attr('src', 'images/menu2.png');
            $('#header.on .logo a img').attr('src', 'images/logo_blue.png');
            $('#header.on .search a img').attr('src', 'images/search2.png');
            $('#header.on .menu a img').attr('src', 'images/menu2.png');
            $('.slider1 img').attr('src', 'images/mmain.jpg');
            $('.slider2 img').attr('src', 'images/mmain2.jpg');
            $('#header.mo').addClass('on');
                $('#header.mo .logo a img').attr('src', 'images/logo_blue.png');
                $('#header.mo .search a img').attr('src', 'images/search2.png');
                $('#header.mo .menu a img').attr('src', 'images/menu2.png');
            
            }
        if (width_size > 770) {
            $('.slider1 img').attr('src', 'images/main980.jpg');
            $('.slider2 img').attr('src', 'images/main2980.jpg');
         

        }









    });











    /*모바일메뉴*/
    $('.search_menu .menu a').click(function () {
        $('#menu_mobile').addClass('on');
        $('.menu_mobilein').animate({
            marginRight: '0px'
        }, 200);
    });
    $('#menu_mobile .closebtn>a').click(function () {
        $('#menu_mobile').removeClass('on');
        $('.menu_mobilein').animate({
            marginRight: '-100%'
        }, 200);
    });

    $('.m_list>li').click(function () {
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        $(this).siblings().find('.m_list_sub').removeClass('on');
        $(this).find('.m_list_sub').addClass('on');
    });
    /*모바일메뉴*/




    $('.mainbox').bxSlider({
        //	mode: 'fade',
        speed: 500,
        auto: true,
        pager: true,
        pagerCustom: '.pager',
        controls: false,
        //	pagerType: 'short',
        //	pagerShortSeparator: '/',
        touchEnabled: false,
    });

    $(document).on('ready', function () {

        $(".lazy").slick({
            lazyLoad: 'ondemand', // ondemand progressive anticipated
            infinite: true
        });

        $('.crsl-items').carousel({
            visible: 3,
            itemMinWidth: 180,
            itemEqualHeight: 370,
            itemMargin: 9,
        });


    });






    /*스크롤표시*/

    $(window).scroll(function () {
        var windscroll = $(window).scrollTop() + $('#header').height();


        if (windscroll >= 100) {
            $('section').each(function (i) {
                if ($(this).position().top <= windscroll) {

                    $('#section_nav a.active').removeClass('active');
                    $('#section_nav a').eq(i).addClass('active');
                }
            });

        } else {
            $('#section_nav a.active').removeClass('active');
            $('#section_nav a:first').addClass('active');
        }

    }).scroll();
    /*스크롤표시*/



    /*아이콘변경 con2*/

    $('.infomenu .left a').hover(function () {
            $(this).find('i').children('img').attr('src', 'images/con3_icon_1_2.png');
            $(this).find('.arrow').children('img').attr('src', 'images/more2.png');
        },
        function () {
            $(this).find('i').children('img').attr('src', 'images/con3_icon_1.png');
            $(this).find('.arrow').children('img').attr('src', 'images/more.png');
        });


    $('.infomenu .bottom li:nth-child(1)>a').hover(function () {
            $(this).find('i').children('img').attr('src', 'images/con3_icon_7_2.png');
            $(this).find('.arrow').children('img').attr('src', 'images/more2.png');
        },
        function () {
            $(this).find('i').children('img').attr('src', 'images/con3_icon_7.png');
            $(this).find('.arrow').children('img').attr('src', 'images/more.png');
        });


    $('.infomenu .bottom li:nth-child(2)>a').hover(function () {
            $(this).find('i').children('img').attr('src', 'images/con3_icon_8_2.png');
            $(this).find('.arrow').children('img').attr('src', 'images/more2.png');
        },
        function () {
            $(this).find('i').children('img').attr('src', 'images/con3_icon_8.png');
            $(this).find('.arrow').children('img').attr('src', 'images/more.png');
        });


    $('.infomenu .bottom li:nth-child(3)>a').hover(function () {
            $(this).find('i').children('img').attr('src', 'images/con3_icon_9_2.png');
            $(this).find('.arrow').children('img').attr('src', 'images/more2.png');
        },
        function () {
            $(this).find('i').children('img').attr('src', 'images/con3_icon_9.png');
            $(this).find('.arrow').children('img').attr('src', 'images/more.png');
        });

    $('.infomenu .right .top li').each(function () {
        if (this.id == 'r1') {
            $(this).children('a').hover(function () {
                    $(this).find('img').attr('src', 'images/con3_icon_2_2.png');
                },
                function () {
                    $(this).find("img").attr("src", "images/con3_icon_2.png");
                });
        } else if (this.id == "r2") {
            $(this).children("a").hover(function () {
                $(this).find("img").attr("src", "images/con3_icon_3_2.png");
            }, function () {
                $(this).find("img").attr("src", "images/con3_icon_3.png");
            });
        } else if (this.id == "r3") {
            $(this).children("a").hover(function () {
                $(this).find("img").attr("src", "images/con3_icon_4_2.png");
            }, function () {
                $(this).find("img").attr("src", "images/con3_icon_4.png");
            });
        } else if (this.id == "r4") {
            $(this).children("a").hover(function () {
                $(this).find("img").attr("src", "images/con3_icon_5_2.png");
            }, function () {
                $(this).find("img").attr("src", "images/con3_icon_5.png");
            });
        } else if (this.id == "r5") {
            $(this).children("a").hover(function () {
                $(this).find("img").attr("src", "images/con3_icon_6_2.png");
            }, function () {
                $(this).find("img").attr("src", "images/con3_icon_6.png");
            });
        }
    });

    /*아이콘변경 con2끝*/



    /*아이콘변경 con4*/
    $('.haenyeo .listbox>ul>li>.btn').hover(function () {
            $(this).find('img').attr('src', 'images/more.png');
        },
        function () {
            $(this).find('img').attr('src', 'images/more2.png');
        });



    //사이트이미지슬라이드
    (function (e) {
        "use strict";
        e.fn.carousel = function (t) {
            var n, r;
            n = {
                infinite: true,
                visible: 1,
                speed: "fast",
                overflow: false,
                autoRotate: false,
                navigation: e(this).data("navigation"),
                itemMinWidth: 0,
                itemEqualHeight: false,
                itemMargin: 0,
                itemClassActive: "crsl-active",
                imageWideClass: "wide-image",
                carousel: true
            };
            return e(this).each(function () {
                r = e(this);
                if (e.isEmptyObject(t) === false) e.extend(n, t);
                if (e.isEmptyObject(e(r).data("crsl")) === false) e.extend(n, e(r).data("crsl"));
                n.isTouch = "ontouchstart" in document.documentElement || navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i) ? true : false;
                r.init = function () {
                    n.total = e(r).find(".crsl-item").length;
                    n.itemWidth = e(r).outerWidth();
                    n.visibleDefault = n.visible;
                    n.swipeDistance = null;
                    n.swipeMinDistance = 100;
                    n.startCoords = {};
                    n.endCoords = {};
                    e(r).css({
                        width: "85%"
                    });
                    e(r).find(".crsl-item").css({
                        position: "relative",
                        "float": "left",
                        overflow: "hidden",
                        height: "auto"
                    });
                    e(r).find("." + n.imageWideClass).each(function () {
                        e(this).css({
                            display: "block",
                            width: "25%",
                            height: "auto"
                        })
                    });
                    e(r).find(".crsl-item").attr({
                        width: "25%"
                    });
                    if (n.carousel) e(r).find(".crsl-item:first-child").addClass(n.itemClassActive);
                    if (n.carousel && n.infinite && n.visible < n.total) e(r).find(".crsl-item:first-child").before(e(".crsl-item:last-child", r));
                    if (n.overflow === false) {
                        e(r).css({
                            overflow: "hidden"
                        })
                    } else {
                        e("html, body").css({
                            "overflow-x": "hidden"
                        })
                    }
                    e(r).trigger("initCarousel", [n, r]);
                    r.testPreload();
                    r.config();
                    r.initRotate();
                    r.triggerNavs()
                };
                r.testPreload = function () {
                    if (e(r).find("img").length > 0) {
                        var t = e(r).find("img").length,
                            i = 1;
                        e(r).find("img").each(function () {
                            r.preloadImage(this, i, t);
                            i++
                        })
                    } else {
                        e(r).trigger("loadedCarousel", [n, r])
                    }
                };
                r.preloadImage = function (t, i, s) {
                    var o = new Image,
                        u = {};
                    u.src = e(t).attr("src") !== undefined ? t.src : "";
                    u.alt = e(t).attr("alt") !== undefined ? t.alt : "";
                    e(o).attr(u);
                    e(o).on("load", function () {
                        if (i === 1) e(r).trigger("loadingImagesCarousel", [n, r]);
                        if (i === s) e(r).trigger("loadedImagesCarousel", [n, r])
                    })
                };
                r.config = function () {
                    n.itemWidth = Math.floor((e(r).outerWidth() - n.itemMargin * (n.visibleDefault - 1)) / n.visibleDefault);
                    if (n.itemWidth <= n.itemMinWidth) {
                        n.visible = Math.floor((e(r).outerWidth() - n.itemMargin * (n.visible - 1)) / n.itemMinWidth) === 1 ? Math.floor(e(r).outerWidth() / n.itemMinWidth) : Math.floor((e(r).outerWidth() - n.itemMargin) / n.itemMinWidth);
                        n.visible = n.visible < 1 ? 1 : n.visible;
                        n.itemWidth = n.visible === 1 ? Math.floor(e(r).outerWidth()) : Math.floor((e(r).outerWidth() - n.itemMargin * (n.visible - 1)) / n.visible)
                    } else {
                        n.visible = n.visibleDefault
                    }
                    if (n.carousel) {
                        r.wrapWidth = Math.floor((n.itemWidth + n.itemMargin) * n.total);
                        //                    r.wrapMargin = r.wrapMarginDefault = n.infinite && n.visible < n.total ? parseInt((n.itemWidth + n.itemMargin) * -1, 10) : 0;
                        if (n.infinite && n.visible < n.total && e(r).find(".crsl-item." + n.itemClassActive).index() === 0) {
                            e(r).find(".crsl-item:first-child").before(e(".crsl-item:last-child", r));
                            r.wrapMargin = r.wrapMarginDefault = parseInt((n.itemWidth + n.itemMargin) * -1, 10)
                        }
                        e(r).find(".crsl-wrap").css({
                            //                        width: r.wrapWidth + "px",
                            width: "100%",
                            //ul사이즈
                            //                        marginLeft: r.wrapMargin
                        })
                    } else {
                        r.wrapWidth = e(r).outerWidth();
                        e(r).find(".crsl-wrap").css({
                            //width: r.wrapWidth + n.itemMargin + "px"
                            width: r.wrapWidth + n.itemMargin + "px"
                        });
                        e("#" + n.navigation).hide()
                    }
                    e(r).find(".crsl-item").css({
                        //                    width: n.itemWidth + "px",
                        width: "20%",
                        //전체 li의 가로값
                        //                    marginRight: n.itemMargin + "px"
                    });
                    r.equalHeights();
                    if (n.carousel) {
                        if (n.visible >= n.total) {
                            n.autoRotate = false;
                            e("#" + n.navigation).hide()
                        } else {
                            e("#" + n.navigation).show()
                        }
                    }
                };
                r.equalHeights = function () {
                    if (n.itemEqualHeight !== false) {
                        var t = 0;
                        e(r).find(".crsl-item").each(function () {
                            e(this).css({
                                height: "auto"
                            });
                            if (e(this).outerHeight() > t) {
                                t = e(this).outerHeight()
                            }
                        });
                        e(r).find(".crsl-item").css({
                            height: t + "px"
                        })
                    }
                    return true
                };
                r.initRotate = function () {
                    if (n.autoRotate !== false) {
                        r.rotateTime = window.setInterval(function () {
                            r.rotate()
                        }, n.autoRotate)
                    }
                };
                r.triggerNavs = function () {
                    e("#" + n.navigation).delegate(".previous, .next", "click", function (t) {
                        t.preventDefault();
                        r.prepareExecute();
                        if (e(this).hasClass("previous") && r.testPrevious(r.itemActive)) {
                            r.previous()
                        } else if (e(this).hasClass("next") && r.testNext()) {
                            r.next()
                        } else {
                            return
                        }
                    })
                };
                r.prepareExecute = function () {
                    if (n.autoRotate) {
                        clearInterval(r.rotateTime)
                    }
                    r.preventAnimateEvent();
                    r.itemActive = e(r).find(".crsl-item." + n.itemClassActive);
                    return true
                };
                r.preventAnimateEvent = function () {
                    if (e(r).find(".crsl-wrap:animated").length > 0) {
                        return false
                    }
                };
                r.rotate = function () {
                    r.preventAnimateEvent();
                    r.itemActive = e(r).find(".crsl-item." + n.itemClassActive);
                    r.next();
                    return true
                };
                r.testPrevious = function (t) {
                    return e(".crsl-wrap", r).find(".crsl-item").index(t) > 0
                };
                r.testNext = function () {
                    return !n.infinite && r.wrapWidth >= (n.itemWidth + n.itemMargin) * (n.visible + 1) - r.wrapMargin || n.infinite
                };
                r.previous = function () {
                    r.wrapMargin = n.infinite ? r.wrapMarginDefault + e(r.itemActive).outerWidth(true) : r.wrapMargin + e(r.itemActive).outerWidth(true);
                    var t = e(r.itemActive).index();
                    var i = e(r.itemActive).prev(".crsl-item");
                    var s = "previous";
                    e(r).trigger("beginCarousel", [n, r, s]);
                    e(r).find(".crsl-wrap").animate({
                        marginLeft: r.wrapMargin + "px"
                        //                    marginLeft: r.wrapMargin + "px"
                    }, n.speed, function () {
                        e(r.itemActive).removeClass(n.itemClassActive);
                        e(i).addClass(n.itemClassActive);
                        if (n.infinite) {
                            e(this).css({
                                marginLeft: r.wrapMarginDefault
                            }).find(".crsl-item:first-child").before(e(".crsl-item:last-child", r))
                        } else {
                            if (r.testPrevious(i) === false) e("#" + n.navigation).find(".previous").addClass("previous-inactive");
                            if (r.testNext()) e("#" + n.navigation).find(".next").removeClass("next-inactive")
                        }
                        e(this).trigger("endCarousel", [n, r, s])
                    })
                };
                r.next = function () {
                    r.wrapMargin = n.infinite ? r.wrapMarginDefault - e(r.itemActive).outerWidth(true) : r.wrapMargin - e(r.itemActive).outerWidth(true);
                    var t = e(r.itemActive).index();
                    var i = e(r.itemActive).next(".crsl-item");
                    var s = "next";
                    e(r).trigger("beginCarousel", [n, r, s]);
                    e(r).find(".crsl-wrap").animate({
                        marginLeft: r.wrapMargin + "px"
                    }, n.speed, function () {
                        e(r.itemActive).removeClass(n.itemClassActive);
                        e(i).addClass(n.itemClassActive);
                        if (n.infinite) {
                            e(this).css({
                                marginLeft: r.wrapMarginDefault
                            }).find(".crsl-item:last-child").after(e(".crsl-item:first-child", r))
                        } else {
                            if (r.testPrevious(i)) e("#" + n.navigation).find(".previous").removeClass("previous-inactive");
                            if (r.testNext() === false) e("#" + n.navigation).find(".next").addClass("next-inactive")
                        }
                        e(this).trigger("endCarousel", [n, r, s])
                    })
                };
                var i = false,
                    s;
                e(window).on("mouseleave", function (t) {
                    if (t.target) s = t.target;
                    else if (t.srcElement) s = t.srcElement;
                    if (e(r).attr("id") && e(s).parents(".crsl-items").attr("id") === e(r).attr("id") || e(s).parents(".crsl-items").data("navigation") === e(r).data("navigation")) {
                        i = true
                    } else {
                        i = false
                    }
                    return false
                });
                e(window).on("keydown", function (e) {
                    if (i === true) {
                        if (e.keyCode === 37) {
                            r.prepareExecute();
                            r.previous()
                        } else if (e.keyCode === 39) {
                            r.prepareExecute();
                            r.next()
                        }
                    }
                    return
                });
                if (n.isTouch) {
                    e(r).on("touchstart", function (t) {
                        e(r).addClass("touching");
                        n.startCoords = t.originalEvent.targetTouches[0];
                        n.endCoords = t.originalEvent.targetTouches[0];
                        e(".touching").on("touchmove", function (e) {
                            n.endCoords = e.originalEvent.targetTouches[0];
                            if (Math.abs(parseInt(n.endCoords.pageX - n.startCoords.pageX, 10)) > Math.abs(parseInt(n.endCoords.pageY - n.startCoords.pageY, 10))) {
                                e.preventDefault();
                                e.stopPropagation()
                            }
                        })
                    }).on("touchend", function (t) {
                        t.preventDefault();
                        t.stopPropagation();
                        n.swipeDistance = n.endCoords.pageX - n.startCoords.pageX;
                        if (n.swipeDistance >= n.swipeMinDistance) {
                            r.previous()
                        } else if (n.swipeDistance <= -n.swipeMinDistance) {
                            r.next()
                        }
                        e(".touching").off("touchmove").removeClass("touching")
                    })
                }
                e(r).on("loadedCarousel loadedImagesCarousel", function () {
                    r.equalHeights()
                });
                e(window).on("carouselResizeEnd", function () {
                    if (n.itemWidth !== e(r).outerWidth()) r.config()
                });
                e(window).ready(function () {
                    e(r).trigger("prepareCarousel", [n, r]);
                    r.init();
                    e(window).on("resize", function () {
                        if (this.carouselResizeTo) clearTimeout(this.carouselResizeTo);
                        this.carouselResizeTo = setTimeout(function () {
                            e(this).trigger("carouselResizeEnd")
                        }, 10)
                    })
                });
                e(window).load(function () {
                    r.testPreload();
                    r.config()
                });



            })
        }





    })(jQuery)

    //사이트이미지슬라이드





});
