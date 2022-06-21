var header_height = 83;
var min_header_height_scroll = 57;
var header_one_scroll_resize = false;
var min_header_height_sticky = 70;
var scroll_amount_for_sticky = 85;
var min_header_height_fixed_hidden = 45;
var header_bottom_border_weight = 1;
var scroll_amount_for_fixed_hiding = 200;
var menu_item_margin = 0;
var large_menu_item_border = 0;
var element_appear_amount = -180;
var paspartu_width_init = 0.02;
var directionNavArrows = 'arrow_carrot-';
var directionNavArrowsTestimonials = 'fa fa-angle-';
var enable_navigation_on_full_screen_section = false;
var add_for_admin_bar = 0;
header_height = 83;
min_header_height_scroll = 80;
header_one_scroll_resize = true;
min_header_height_sticky = 65;
var logo_height = 130;
var logo_width = 280;
logo_width = 446;
logo_height = 166;
menu_item_margin = 1;
header_top_height = 36;
var loading_text;
loading_text = 'Loading new posts...';
var finished_text;
finished_text = 'No more posts';
var piechartcolor;
piechartcolor = "#279eff";
piechartcolor = "#18cfab";
directionNavArrows = 'ion-ios-arrow-';
var no_ajax_pages = [];
var mkd_root = 'https://burst.qodeinteractive.com/burst/';
var theme_root = 'https://burst.qodeinteractive.com/burst/wp-content/themes/burst/';
var header_style_admin = "";
if (typeof no_ajax_obj !== 'undefined') { no_ajax_pages = no_ajax_obj.no_ajax_pages; };
var $j = jQuery.noConflict();
var $scroll = 0;
var $window_width = $j(window).width();
var $window_height = $j(window).height();
var logo_height;
var logo_width;
var menu_dropdown_height_set = false;
var sticky_amount = 0;
var content_menu_position;
var content_menu_top;
var content_menu_top_add = 0;
var src;
var next_image;
var prev_image;
var $top_header_height;
var loadedPageFlag = true;
var header_style;
var min_w = 1800;
var video_width_original = 1280;
var video_height_original = 720;
var vid_ratio = 1280 / 720;
var skrollr_slider;
if ($j('.widget_sticky-sidebar').length) { var widgetTopOffset; var widgetParentOffset; var stickySidebarHeight }
var paspartu_width;
var enable_navigation_on_full_screen_section;
$j(document).ready(function() {
    "use strict";
    if ($j('header').hasClass('regular')) { content_menu_top = 0 }
    if ($j('header').hasClass('fixed_top_header')) { content_menu_top = header_height }
    if ($j('header').hasClass('fixed')) { content_menu_top = min_header_height_scroll }
    if ($j('header').hasClass('fixed_hiding')) { content_menu_top = min_header_height_fixed_hidden + 20 }
    if ($j('header').hasClass('stick')) { content_menu_top = 0 }
    if ((!$j('header.page_header').hasClass('scroll_top')) && ($j('header.page_header').hasClass('has_top')) && ($j('header.page_header').hasClass('fixed') || $j('header.page_header').hasClass('fixed_hiding'))) { content_menu_top_add = header_top_height }
    if ($j('body').hasClass('vertical_menu_enabled')) {
        content_menu_top = 0;
        content_menu_top_add = 0;
        var min_header_height_sticky = 0
    }
    paspartu_width = $window_width < 1024 ? 0.02 : paspartu_width_init;
    initSeparatorWithTextAnimation();
    contentMinHeight();
    contentMinHeightWithPaspartu();
    setDropDownMenuPosition();
    initVerticalMenu();
    initVerticalMobileMenu();
    initMikadoSlider();
    initSideMenu();
    initPopupMenu();
    initMessageHeight();
    initFullScreenTemplate();
    initToCounter();
    initCounter();
    if (!$j('.vertical_split_slider').length) { initCountdown() }
    initProgressBars();
    initListAnimation();
    initPieChart();
    initPieChartWithIcon();
    initParallaxTitle();
    initSideAreaScroll();
    initVerticalAreaMenuScroll();
    loadMore();
    prettyPhoto();
    initMobileMenu();
    initSingleImageShader();
    initSingleImagePopUp();
    alterWPMLSwitcherHeaderBottom();
    animateFormFields();
    if (!$j('.vertical_split_slider').length) { initFlexSlider() }
    initDropDownMenu();
    fitVideo();
    setServiceTableStyles();
    initAccordion();
    initAccordionContentLink();
    initAccordionHoverStyle();
    initMessages();
    initProgressBarsIcon();
    placeholderReplace();
    backButtonShowHide();
    backToTop();
    showGoogleMap();
    initProgressBarsVertical();
    initElementsAnimation();
    initElementsHolderItemAnimation();
    updateShoppingCart();
    initHashClick();
    initImageHover();
    initIconWithTextAnimation();
    initVideoBackground();
    initCheckSafariBrowser();
    initCheckFirefoxMacBrowser();
    initSearchButton();
    initCoverBoxes();
    createContentMenu();
    contentMenuScrollTo();
    initButtonHover();
    initReadMoreButtonHover();
    initSocialIconHover();
    initIconHover();
    initInteractiveBannersShader();
    initInteractiveBannersBorderStyle();
    showHideVerticalMenu();
    initPortfolioBlurEffect();
    setTestimonialsEqualHeight();
    preloadBackgrounds();
    initProcessHeightWidth();
    initCustomFontResize();
    noTypeFont();
    instagramAppear();
    imageStack();
    imageStackResize();
    initSingleImageHover();
    noInteractivePieChart();
    noInteractiveInfoCard();
    createTabIcons();
    initPageTitleAnimation();
    initMasonryGallery();
    parallaxLayers();
    initBlogListIconHover();
    setScrollingRails();
    $j('.widget #searchform').mousedown(function() { $j(this).addClass('form_focus') }).focusout(function() { $j(this).removeClass('form_focus') });
    $scroll = $j(window).scrollTop();
    checkTitleToShowOrHide();
    checkVerticalMenuTransparency();
    titleGraphicsHeight();
    if ($j(window).width() > 982) { headerSize($scroll) } else {
        logoSizeOnSmallScreens();
        searchLineHeightOnMobile()
    }
    $j('header .mkd_logo a').css('visibility', 'visible');
    if ($j(window).width() > 1000) { contentMenuPosition() }
    contentMenuCheckLastSection();
    initBreadcrumbsStyles()
});
$j(window).load(function() {
    "use strict";
    $j('.touch .main_menu li:has(div.second)').doubleTapToGo();
    mkdfAnimateOverlappingContent();
    setDropDownMenuPosition();
    initPortfolio();
    logoWidth();
    initPortfolioZIndex();
    initPortfolioSingleInfo();
    if (!$j('.vertical_split_slider').length) {
        initTestimonials();
        initTestimonialCarousel();
        initPortfolioMasonry()
    }
    magicPanes();
    setTestimonialsEqualHeight();
    initVideoBackgroundSize();
    initPortfolioMasonryFilter();
    initPortfolioSlider();
    initProductSlider();
    initSingleImageShader();
    initSingleImagePopUp();
    initPricingTableOddEvenSections();
    initPricingTableButton();
    initTestimonialImageHolderWidth();
    initElementsHolderBorderAnimation();
    initTabs();
    initVerticalTabsContentHeight();
    initVerticalTabsWidth();
    initTabsStyle();
    initIconTextHover();
    countClientsPerRow();
    initTitleAreaAnimation();
    setContentBottomMargin();
    setVideoHeightAndWidth();
    if ($j(".side_area_uncovered_from_content").length) { $j('.side_area_uncovered_from_content .side_menu').css({ 'right': '0px' }) }
    if ($j('nav.content_menu').length > 0) {
        content_menu_position = $j('nav.content_menu').offset().top;
        contentMenuPosition();
        contentMenuOnScroll();
        contentMenuCheckLastSection();
        createSelectContentMenu()
    }
    initMikadoCarousel();
    setFooterHeight();
    initVerticalSplitSlider();
    initVerticalSplitSectionWidth();
    initVerticalSliderWithTextOver();
    initMoreFacts();
    initSocialIconsSidebarEffect();
    if ($j('.widget_sticky-sidebar').length) {
        widgetTopOffset = $j('.widget_sticky-sidebar').offset().top;
        widgetParentOffset = $j('.widget_sticky-sidebar').position().top;
        stickySidebarHeight = $j('aside.sidebar').height()
    }
    if ($j(window).width() > 600) { stickySidebar($scroll, widgetTopOffset, widgetParentOffset, stickySidebarHeight) }
    stickySidebarWidth();
    removeStickySidebarClass();
    initMikadoElementAnimationSkrollr();
    setTimeout(function() {
        checkAnchorOnScroll();
        checkAnchorOnLoad();
        checkHeaderStyleOnScroll();
        if ($j('.no-touch .carousel').length) { skrollr_slider.refresh() }
        magicPanes()
    }, 700);
    textSlider();
    initIconSlider();
    setImageFusion();
    initParallax()
});
$j(window).scroll(function() {
    "use strict";
    $scroll = $j(window).scrollTop();
    if ($j(window).width() > 1000) {
        headerSize($scroll);
        contentMenuPosition()
    }
    contentMenuCheckLastSection();
    if ($j(window).width() > 600) { stickySidebar($scroll, widgetTopOffset, widgetParentOffset, stickySidebarHeight) }
    checkVerticalMenuTransparency();
    logoWidth();
    $j('.touch .drop_down > ul > li').mouseleave();
    $j('.touch .drop_down > ul > li').blur()
});
$j(window).resize(function() {
    "use strict";
    $window_width = $j(window).width();
    $window_height = $j(window).height();
    paspartu_width = $window_width < 1024 ? 0.02 : paspartu_width_init;
    if ($j(window).width() > 1000) { headerSize($scroll) } else {
        logoSizeOnSmallScreens();
        searchLineHeightOnMobile()
    }
    magicPanes();
    initDropDownMenu();
    initMessageHeight();
    initTestimonials();
    initTestimonialCarousel();
    initTestimonialImageHolderWidth();
    initVideoBackgroundSize();
    setContentBottomMargin();
    setFooterHeight();
    calculateHeights();
    contentMinHeight();
    contentMinHeightWithPaspartu();
    countClientsPerRow();
    logoWidth();
    $j('.vertical_split_slider').height($window_height);
    if ($j('.vertical_slider_with_text_over').length) {
        var headerHeight = $j('header.page_header').height();
        $j('.vertical_slider_with_text_over').height($window_height - headerHeight - 100)
    }
    initMikadoCarousel();
    initParallax();
    setTestimonialsEqualHeight();
    if ($j(window).width() > 600) {
        stickySidebarHeight = $j('aside.sidebar').height();
        stickySidebar($scroll, widgetTopOffset, widgetParentOffset, stickySidebarHeight)
    }
    stickySidebarWidth();
    removeStickySidebarClass();
    initMasonryGallery();
    initCustomFontResize();
    noTypeFont();
    instagramAppear();
    imageStack();
    imageStackResize();
    initSingleImageHover();
    noInteractivePieChart();
    noInteractiveInfoCard();
    initFullScreenTemplateOnPaspartu();
    titleGraphicsHeight()
});
var sticky_animate;

function headerSize($scroll) {
    "use strict";
    if (($j('header.page_header').hasClass('scroll_top')) && ($j('header.page_header').hasClass('has_top')) && ($j('header.page_header').hasClass('fixed') || $j('header.page_header').hasClass('fixed_hiding'))) {
        if ($scroll >= 0 && $scroll <= header_top_height) {
            $j('header.page_header').css('top', -$scroll);
            $j('.fullscreen_search_holder:not(.fullscreen_search_in_header_top) .close_container').css('top', header_top_height - $scroll);
            $j('header.page_header').css('margin-top', 0);
            $j('.header_top').show()
        } else if ($scroll > header_top_height) {
            $j('header.page_header').css('top', -header_top_height);
            $j('.fullscreen_search_holder:not(.fullscreen_search_in_header_top) .close_container').css('top', header_top_height - header_top_height);
            $j('header.page_header').css('margin-top', header_top_height);
            $j('.header_top').hide()
        }
    }
    if (typeof page_scroll_amount_for_sticky !== 'undefined') { sticky_amount = page_scroll_amount_for_sticky } else if ($j('.carousel.full_screen').length) { sticky_amount = $j('.carousel').height() } else { sticky_amount = scroll_amount_for_sticky }
    if ($j('.mkd_slider .carousel').length) {
        if ($j('.carousel').height() < $scroll) { $j('.carousel').addClass('disable_slider_header_style_changing') } else {
            $j('.carousel').removeClass('disable_slider_header_style_changing');
            checkSliderForHeaderStyle($j('.mkd_slider .carousel .active'), $j('.mkd_slider .carousel').hasClass('header_effect'))
        }
    }
    if ($j('header.page_header').hasClass('regular')) {
        if ($j('header.page_header.regular').hasClass('centered_logo')) { $j('.mkd_logo a').height(logo_height / 2) } else { if (header_height - logo_height > 0) { $j('.mkd_logo a').height(logo_height) } else { $j('.mkd_logo a').height(header_height) } }
        $j('.mkd_logo a img').css('height', '100%')
    }
    if ($j('header.page_header').hasClass('fixed')) {
        if ($j('header.page_header').hasClass('scroll_top')) { $top_header_height = header_top_height } else { $top_header_height = 0 }
        if (header_one_scroll_resize) {
            if ($scroll > $top_header_height + 200) {
                $j('header.page_header').addClass('scrolled');
                $j('header nav.main_menu > ul > li > a').css({ 'line-height': min_header_height_scroll + 'px' });
                $j('header .side_menu_button').css({ 'height': min_header_height_scroll + large_menu_item_border + 'px' });
                $j('header .side_menu_button_wrapper .side_menu_button a.search_icon_bckg_full').css({ 'line-height': min_header_height_scroll + large_menu_item_border + 'px' });
                $j('header .header_bottom_right_widget_holder').css({ 'height': min_header_height_scroll + large_menu_item_border + 'px' });
                $j('header .logo_wrapper').css({ 'height': min_header_height_scroll + large_menu_item_border + 'px' });
                $j('.side_menu .close_side_menu_holder').css({ 'height': min_header_height_scroll + large_menu_item_border + 'px' });
                if (min_header_height_scroll - logo_height > 0) { $j('header .mkd_logo a').css({ 'height': logo_height + 'px' }) } else { $j('header .mkd_logo a').css({ 'height': min_header_height_scroll + large_menu_item_border + 'px' }) }
            } else {
                $j('header.page_header').removeClass('scrolled');
                $j('header nav.main_menu > ul > li > a').css({ 'line-height': header_height + 'px' });
                $j('header .side_menu_button').css({ 'height': header_height + large_menu_item_border + 'px' });
                $j('header .side_menu_button_wrapper .side_menu_button a.search_icon_bckg_full').css({ 'line-height': header_height + large_menu_item_border + 'px' });
                $j('header .header_bottom_right_widget_holder').css({ 'height': header_height + large_menu_item_border + 'px' });
                $j('header .logo_wrapper').css({ 'height': header_height + large_menu_item_border + 'px' });
                $j('.side_menu .close_side_menu_holder').css({ 'height': header_height + large_menu_item_border + 'px' });
                if (header_height - logo_height > 0) { $j('header .mkd_logo a').css({ 'height': logo_height + 'px' }) } else { $j('header .mkd_logo a').css({ 'height': header_height + large_menu_item_border + 'px' }) }
            }
        } else {
            if ((header_height - ($scroll - $top_header_height) / 4 >= min_header_height_scroll) && ($scroll >= $top_header_height)) {
                $j('header.page_header').removeClass('scrolled');
                $j('header nav.main_menu > ul > li > a').css('line-height', header_height - ($scroll - $top_header_height) / 4 + 'px');
                $j('header .side_menu_button').css('height', header_height + large_menu_item_border - ($scroll - $top_header_height) / 4 + 'px');
                $j('header .side_menu_button_wrapper .side_menu_button a.search_icon_bckg_full').css('line-height', header_height + large_menu_item_border - ($scroll - $top_header_height) / 4 + 'px');
                $j('header .header_bottom_right_widget_holder').css('height', header_height + large_menu_item_border - ($scroll - $top_header_height) / 4 + 'px');
                $j('header .logo_wrapper').css('height', header_height + large_menu_item_border - ($scroll - $top_header_height) / 4 + 'px');
                $j('.side_menu .close_side_menu_holder').css('height', header_height + large_menu_item_border - ($scroll - $top_header_height) / 4 + 'px');
                if (header_height - logo_height > 0) { $j('header .mkd_logo a').css('height', logo_height + 'px') } else { $j('header .mkd_logo a').css('height', (header_height + large_menu_item_border - ($scroll - $top_header_height) / 4) + 'px') }
            } else if ($scroll < $top_header_height) {
                $j('header.page_header').removeClass('scrolled');
                $j('header nav.main_menu > ul > li > a').css('line-height', header_height + 'px');
                $j('header .side_menu_button').css('height', header_height + large_menu_item_border + 'px');
                $j('header .side_menu_button_wrapper .side_menu_button a.search_icon_bckg_full').css('line-height', header_height + large_menu_item_border + 'px');
                $j('header .header_bottom_right_widget_holder').css('height', header_height + large_menu_item_border + 'px');
                $j('header .logo_wrapper').css('height', header_height + large_menu_item_border + 'px');
                $j('.side_menu .close_side_menu_holder').css('height', header_height + large_menu_item_border + 'px');
                if (header_height - logo_height > 0) { $j('header .mkd_logo a').css('height', logo_height + 'px') } else { $j('header .mkd_logo a').css('height', header_height + large_menu_item_border + 'px') }
            } else if ((header_height - ($scroll - $top_header_height) / 4) < min_header_height_scroll) {
                $j('header.page_header').addClass('scrolled');
                $j('header nav.main_menu > ul > li > a').css('line-height', min_header_height_scroll + 'px');
                $j('header .side_menu_button').css('height', min_header_height_scroll + large_menu_item_border + 'px');
                $j('header .side_menu_button_wrapper .side_menu_button a.search_icon_bckg_full').css('line-height', min_header_height_scroll + large_menu_item_border + 'px');
                $j('header .header_bottom_right_widget_holder').css('height', min_header_height_scroll + large_menu_item_border + 'px');
                $j('header .logo_wrapper').css('height', min_header_height_scroll + large_menu_item_border + 'px');
                $j('.side_menu .close_side_menu_holder').css('height', min_header_height_scroll + large_menu_item_border + 'px');
                if (min_header_height_scroll - logo_height > 0) { $j('header .mkd_logo a').css('height', logo_height + 'px') } else { $j('header .mkd_logo a').css('height', min_header_height_scroll + large_menu_item_border + 'px') }
            }
            if ((header_height - ($scroll - $top_header_height) / 4 < logo_height) && (header_height - ($scroll - $top_header_height) / 4 >= min_header_height_scroll) && (logo_height > min_header_height_scroll) && ($scroll >= $top_header_height)) { $j('.mkd_logo a').height(header_height - ($scroll - $top_header_height) / 4) } else if ((header_height - ($scroll - $top_header_height) / 4 < logo_height) && (header_height - ($scroll - $top_header_height) / 4 >= min_header_height_scroll) && (logo_height > min_header_height_scroll) && ($scroll < $top_header_height)) { $j('.mkd_logo a').height(header_height) } else if ((header_height - ($scroll - $top_header_height) / 4 < logo_height) && (header_height - ($scroll - $top_header_height) / 4 < min_header_height_scroll) && (logo_height > min_header_height_scroll)) { $j('.mkd_logo a').height(min_header_height_scroll) } else if ((header_height - ($scroll - $top_header_height) / 4 < logo_height) && (header_height - ($scroll - $top_header_height) / 4 < min_header_height_scroll) && (logo_height < min_header_height_scroll)) { $j('.mkd_logo a').height(logo_height) } else if ((($scroll - $top_header_height) / 4 === 0) && (logo_height > header_height)) { $j('.mkd_logo a').height(logo_height) } else { $j('.mkd_logo a').height(logo_height) }
        }
    }
    if ($j('header.page_header').hasClass('fixed_hiding')) {
        if ($scroll < scroll_amount_for_fixed_hiding) { $j('header.page_header').removeClass('scrolled') } else { $j('header.page_header').addClass('scrolled') }
        $j('.mkd_logo a').height(logo_height / 2);
        $j('.mkd_logo img').height('100%')
    }
    if ($j('header.page_header').hasClass('stick') || $j('header.page_header').hasClass('stick_with_left_right_menu')) {
        if ($scroll > sticky_amount) {
            if (!$j('header.page_header').hasClass('sticky')) {
                if ($j('header.page_header').hasClass('has_top')) { $top_header_height = 34 } else { $top_header_height = 0 }
                var sticky_expanded_add = $j('header.page_header').hasClass('menu_bottom') ? 60 : 0;
                var padding_top = $j('header.page_header').hasClass('centered_logo') ? $j('header.page_header').height() : header_height + $top_header_height + large_menu_item_border + sticky_expanded_add;
                $j('header.page_header').addClass('sticky');
                $j('.side_menu').addClass('sticky');
                $j('.content').css('padding-top', padding_top);
                window.clearTimeout(sticky_animate);
                sticky_animate = window.setTimeout(function() { $j('header.page_header').addClass('sticky_animate') }, 100);
                if (min_header_height_sticky - logo_height / 2 > 0) { $j('.mkd_logo a').height(logo_height / 2) } else { $j('.mkd_logo a').height(min_header_height_sticky) }
                if ($j('header.page_header').hasClass('stick_with_left_right_menu')) {
                    if ($j('header .mkd_logo a img.sticky').get(0).complete) {
                        var logo_width_sticky_divided_scrolled = $j('header .mkd_logo a img.sticky').width();
                        $j('.logo_wrapper').width(logo_width_sticky_divided_scrolled);
                        $j('nav.main_menu.left_side').attr('style', 'padding-right:' + logo_width_sticky_divided_scrolled / 2 + "px !important;");
                        $j('nav.main_menu.right_side').attr('style', 'padding-left:' + logo_width_sticky_divided_scrolled / 2 + "px !important;")
                    } else {
                        $j('header .mkd_logo a img.sticky').load(function() {
                            var logo_width_sticky_divided_scrolled = $j('header .mkd_logo a img.sticky').width();
                            $j('.logo_wrapper').width(logo_width_sticky_divided_scrolled);
                            $j('nav.main_menu.left_side').attr('style', 'padding-right:' + logo_width_sticky_divided_scrolled / 2 + "px !important;");
                            $j('nav.main_menu.right_side').attr('style', 'padding-left:' + logo_width_sticky_divided_scrolled / 2 + "px !important;")
                        })
                    }
                }
                if ($j('header.page_header').hasClass('menu_bottom')) { initDropDownMenu() }
            }
            if (min_header_height_sticky - logo_height / 2 > 0) { $j('.mkd_logo a').height(logo_height / 2) } else { $j('.mkd_logo a').height(min_header_height_sticky) }
        } else {
            if ($j('header.page_header').hasClass('sticky')) {
                $j('header').removeClass('sticky_animate');
                $j('header').removeClass('sticky');
                $j('.side_menu').removeClass('sticky');
                $j('.content').css('padding-top', '0px');
                if ($j('header.page_header').hasClass('menu_bottom')) { initDropDownMenu() }
            }
            if (!$j('header.page_header').hasClass('centered_logo')) { if (header_height - logo_height / 2 > 0) { $j('.mkd_logo a').height(logo_height / 2) } else { $j('.mkd_logo a').height(header_height) } } else {
                $j('.mkd_logo a').height(logo_height / 2);
                $j('.mkd_logo img').height('auto')
            }
            $j('.mkd_logo a img').css('height', '100%');
            if ($j('header.page_header').hasClass('stick_with_left_right_menu')) {
                var logo_width_sticky_divided_scrolled = logo_width / 2;
                $j('.logo_wrapper').width(logo_width_sticky_divided_scrolled);
                $j('nav.main_menu.left_side').attr('style', 'padding-right:' + logo_width_sticky_divided_scrolled / 2 + "px !important;");
                $j('nav.main_menu.right_side').attr('style', 'padding-left:' + logo_width_sticky_divided_scrolled / 2 + "px !important;")
            }
        }
    }
    if ($j('a.search_icon_bckg_full').length) {
        var line_height_for_icons = $j('nav.main_menu > ul > li > a').css('height');
        $j('header .side_menu_button_wrapper .side_menu_button a.search_icon_bckg_full').css('line-height', line_height_for_icons)
    }
}
var headerHeightOffset = 0;

function stickySidebar($scroll, widgetTopOffset, widgetParentOffset, stickySidebarHeight) {
    "use strict";
    if ($j('.widget_sticky-sidebar').length) {
        if ($j('.content_right_from_sidebar').length) { var sidebarWidth = $j('aside.sidebar').parent().innerWidth() }
        var paspartu_add = $j('body').hasClass('paspartu_on_top_fixed') ? Math.round($window_width * paspartu_width) : 0;
        if ($j('header.page_header').hasClass('regular') || $j(window).width() <= 1000) { headerHeightOffset = 0 } else if ($j('header.page_header').hasClass('fixed_top_header')) { headerHeightOffset = $j('header.page_header .top_header').height() } else if ($j('header.page_header').hasClass('stick') || $j('header.page_header').hasClass('stick_with_left_right_menu')) {
            if (sticky_amount > widgetTopOffset) {
                if (sticky_amount >= $scroll) {
                    headerHeightOffset = 0;
                    setTimeout(function() { $j('.sidebar').removeClass('sticky_sidebar_animate_top') }, 330)
                } else {
                    headerHeightOffset = $j('header.page_header').height();
                    $j('.sidebar').addClass('sticky_sidebar_animate_top')
                }
            } else { headerHeightOffset = $j('header.page_header').height() }
        } else { headerHeightOffset = $j('header.page_header').height() }
        if ($scroll >= widgetTopOffset - headerHeightOffset - paspartu_add) {
            var sidebarPosition = -(widgetParentOffset - headerHeightOffset - paspartu_add);
            $j('.sidebar').addClass('sticky_sidebar');
            $j('.sidebar.sticky_sidebar').css('top', sidebarPosition + 'px');
            if ($j('.content_right_from_sidebar').length) { $j('.column2.content_right_from_sidebar').css('padding-left', sidebarWidth + 'px') }
            var footer_in_viewport = 0;
            var uncover_footer = 0;
            if ($j('.uncover').length && (($j('.no-touch').length && $j(window).width() > 1000) || ($j('.touch').length && $j(window).width() > 1300))) {
                uncover_footer = parseInt($j('.content').css('margin-bottom'));
                if ($j('.content_bottom').length) { uncover_footer += parseInt($j('.content_bottom').height()) }
                footer_in_viewport = $j(document).height() - $window_height - uncover_footer
            } else { if ($j('.content_bottom').length) { footer_in_viewport = $j('.content_bottom').offset().top - $window_height } else { footer_in_viewport = $j('footer').offset().top - $window_height } }
            var sidebar_from_bottom_of_screen = $window_height - (stickySidebarHeight + 40 + sidebarPosition);
            if ($scroll - footer_in_viewport > sidebar_from_bottom_of_screen) { $j('.sidebar.sticky_sidebar').css('margin-top', -($scroll - footer_in_viewport - sidebar_from_bottom_of_screen)) } else { $j('.sidebar.sticky_sidebar').css('margin-top', 0) }
        } else {
            $j('.sidebar').removeClass('sticky_sidebar');
            $j('.sidebar').css('top', '0');
            if ($j('.content_right_from_sidebar').length) { $j('.column2.content_right_from_sidebar').css('padding-left', '0') }
        }
    }
}

function stickySidebarWidth() {
    "use strict";
    if ($j('.widget_sticky-sidebar').length) {
        var sidebarWidth = $j('aside.sidebar').parent().width();
        $j('.sidebar').css('width', sidebarWidth + 'px')
    }
}

function removeStickySidebarClass() {
    "use strict";
    if ($j('.widget_sticky-sidebar').length) {
        if ($j(window).width() <= 600) {
            if ($j('.sidebar').hasClass('sticky_sidebar')) {
                $j('.sidebar').removeClass('sticky_sidebar sticky_sidebar_animate_top');
                $j('.sidebar').css('width', 'auto');
                $j('.sidebar').css('top', 'auto');
                if ($j('.content_right_from_sidebar').length) { $j('.column2.content_right_from_sidebar').css('padding-left', '0') }
            }
        }
    }
}

function logoWidth() {
    "use strict";
    if ($j('.left_menu_position').length) {
        if ($j('header').hasClass('sticky')) {
            var l_width = $j('header .mkd_logo a img.sticky').width();
            $j('header .logo_wrapper').css('width', l_width + 'px')
        } else {
            var l_width = $j('header .mkd_logo a img.normal').width();
            $j('header .logo_wrapper').css('width', l_width + 'px')
        }
    }
}

function logoSizeOnSmallScreens() {
    "use strict";
    $j('.mkd_logo a img').css('height', '100%');
    $j('header.page_header').removeClass('sticky_animate sticky');
    $j('.content').css('padding-top', '0px')
}

function searchLineHeightOnMobile() {
    "use strict";
    if ($j('a.search_icon_bckg_full').length) {
        var line_height_for_icons = $j('header .header_inner_left .mobile_menu_button').css('height');
        $j('header .side_menu_button_wrapper .side_menu_button a.search_icon_bckg_full').css('line-height', line_height_for_icons)
    }
}

function contentMinHeight() {
    "use strict";
    if ($j('header .header_bottom').length || $j('header .bottom_header').length) {
        if ($j('header .header_bottom').length) { var headerColorString = $j('header .header_bottom').css('background-color') }
        if ($j('header .bottom_header').length) { var headerColorString = $j('header .bottom_header').css('background-color') }
        var headerTransparency = headerColorString.substring(headerColorString.indexOf('(') + 1, headerColorString.lastIndexOf(')')).split(/,\s*/)[3];
        var haeder_add = headerTransparency == undefined && !$j('header.page_header').hasClass('transparent') ? $j('header.page_header').height() : 0;
        $j('body .content').css('min-height', $window_height - haeder_add - $j('footer:not(.uncover)').height())
    }
}

function contentMinHeightWithPaspartu() {
    "use strict";
    if ($j('.paspartu_enabled').length) {
        var content_height;
        var paspartu_final_width_px = 0;
        var paspartu_width_px = $window_width * paspartu_width;
        var footer_height = $j('footer').height();
        if ($j('.disable_footer').length) { footer_height = 0 }
        if ($j('.vertical_menu_enabled').length) { if ($j('.paspartu_top').length && $j('.paspartu_middle_inner').length) { paspartu_final_width_px += paspartu_width_px } } else { if ($j('.paspartu_top').length) { paspartu_final_width_px += paspartu_width_px } }
        if ($j('.paspartu_bottom').length || !$j('.disable_bottom_paspartu').length) { paspartu_final_width_px += paspartu_width_px }
        if ($j('.vertical_menu_enabled').length) { content_height = $window_height - paspartu_final_width_px - footer_height } else {
            if ($j('header .header_bottom').length) { var headerColorString = $j('header .header_bottom').css('background-color') }
            if ($j('header .bottom_header').length) { var headerColorString = $j('header .bottom_header').css('background-color') }
            var headerTransparency = headerColorString.substring(headerColorString.indexOf('(') + 1, headerColorString.lastIndexOf(')')).split(/,\s*/)[3];
            var header_height = headerTransparency == undefined && !$j('header.page_header').hasClass('transparent') ? $j('header.page_header').height() : 0;
            content_height = $window_height - header_height - paspartu_final_width_px - footer_height
        }
        if ($j('.content').length) { $j('.content').css('min-height', content_height) }
    }
}(function($) {
    var matrixRE = /\([0-9epx\.\, \t\-]+/gi;
    var parseMatrix = function(val) { return val.match(matrixRE)[0].substr(1).split(",").map(function(s) { return parseFloat(s) }) };
    var transformPropNames = ["transform", "-webkit-transform"];
    var getTransformMatrix = function(el) {
        var matrix = null;
        transformPropNames.some(function(prop) { matrix = el.css(prop); return (matrix !== null && matrix !== "") });
        matrix = (!matrix || matrix === "none") ? "matrix(1,0,0,1,0,0)" : matrix;
        return parseMatrix(matrix)
    };
    var setTransformMatrix = function(el, matrix) { var m = "matrix(" + matrix.join(",") + ")"; for (var i = transformPropNames.length - 1; i >= 0; --i) { el.css(transformPropNames[i], m + ' rotate(0.01deg)') } };
    var interpolate = function(from, to, percent) { return from + ((to - from) * (percent / 100)) };
    $.fn.transformAnimate = function(opt) {
        var options = { transform: "matrix(1,0,0,1,0,0)" };
        $.extend(options, opt);
        this.css("percentAnim", 0);
        var sourceTransform = getTransformMatrix(this);
        var targetTransform = parseMatrix(options.transform);
        options.step = function(percentAnim, fx) {
            var $this = $(this);
            var matrix = sourceTransform.map(function(c, i) { return interpolate(c, targetTransform[i], percentAnim) });
            setTransformMatrix($this, matrix);
            if (opt.step) { opt.step.apply(this, [matrix, fx]) }
        };
        return this.stop().animate({ percentAnim: 100 }, options)
    }
})(jQuery);
var default_header_style = "";

function initMikadoSlider() {
    "use strict";
    var image_regex = /url\(["']?([^'")]+)['"]?\)/;
    if ($j('header.page_header').hasClass('light')) { default_header_style = 'light' }
    if ($j('header.page_header').hasClass('dark')) { default_header_style = 'dark' }
    if ($j('.carousel').length) {
        var matrixArray = { zoom_center: '1.2, 0, 0, 1.2, 0, 0', zoom_top_left: '1.2, 0, 0, 1.2, -180, -180', zoom_top_right: '1.2, 0, 0, 1.2, 180, -180', zoom_bottom_left: '1.2, 0, 0, 1.2, -180, 180', zoom_bottom_right: '1.2, 0, 0, 1.2, 180, 180' };
        $j('.carousel').each(function() {
            var $this = $j(this);
            var mobile_header = $window_width < 1000 ? $j('header.page_header').height() : 0;
            var header_height_add_for_paspartu = $window_width > 1000 && !$j('header.page_header').hasClass('transparent') && $j('body.paspartu_on_top_fixed').length == 0 ? $j('header.page_header').height() : 0;
            var paspartu_amount_with_top = $j('.paspartu_outer:not(.disable_top_paspartu)').length > 0 ? Math.round($window_width * paspartu_width + header_height_add_for_paspartu) : 0;
            var paspartu_amount_with_bottom = $j('.paspartu_outer.paspartu_on_bottom_slider').length > 0 ? Math.round($window_width * paspartu_width) : 0;
            var slider_graphic_coefficient;
            var slider_title_coefficient;
            var slider_subtitle_coefficient;
            var slider_text_coefficient;
            var slider_button_coefficient;
            var responsive_breakpoint_set = [1600, 1200, 900, 680, 800, 320];
            if ($this.data('mkd_responsive_breakpoints')) { if ($this.data('mkd_responsive_breakpoints') == 'set2') { responsive_breakpoint_set = [1600, 1300, 1000, 768, 567, 320] } }
            var coefficients_graphic_array = $this.data('mkd_responsive_graphic_coefficients').split(',');
            var coefficients_title_array = $this.data('mkd_responsive_title_coefficients').split(',');
            var coefficients_subtitle_array = $this.data('mkd_responsive_subtitle_coefficients').split(',');
            var coefficients_text_array = $this.data('mkd_responsive_text_coefficients').split(',');
            var coefficients_button_array = $this.data('mkd_responsive_button_coefficients').split(',');

            function setSliderHeight($this, $def_height) {
                var slider_height = $def_height;
                if ($window_width > responsive_breakpoint_set[0]) { slider_height = $def_height } else if ($window_width > responsive_breakpoint_set[1]) { slider_height = $def_height * 0.75 } else if ($window_width > responsive_breakpoint_set[2]) { slider_height = $def_height * 0.6 } else if ($window_width > responsive_breakpoint_set[3]) { slider_height = $def_height * 0.55 } else if ($window_width <= responsive_breakpoint_set[3]) { slider_height = $def_height * 0.45 }
                $this.css({ 'height': (slider_height) + 'px' });
                $this.find('.mkd_slider_preloader').css({ 'height': (slider_height) + 'px' });
                $this.find('.mkd_slider_preloader .ajax_loader').css({ 'display': 'block' });
                $this.find('.item').css({ 'height': (slider_height) + 'px' })
            }

            function resetSliderHeight($def_height) {
                $this.css({ 'height': ($def_height) + 'px' });
                $this.find('.mkd_slider_preloader').css({ 'height': ($def_height) + 'px' });
                $this.find('.mkd_slider_preloader .ajax_loader').css({ 'display': 'block' });
                $this.find('.item').css({ 'height': ($def_height) + 'px' })
            }

            function setContentPredefinedPosition() {
                $j('.slider_content_outer.content_bottom_left, .slider_content_outer.content_bottom_right').each(function() {
                    if (typeof $j(this).find('.slider_content').data('resize') !== 'undefined') {
                        var slider_content = $j(this).find('.slider_content');
                        var initial_slider_content_width = slider_content.width();
                        var resized_slider_content_width = slider_content.data('resize');
                        if ($j(window).width() < 1380 && $j(window).width() > 1000) { slider_content.css({ "width": resized_slider_content_width + 'px' }) } else { slider_content.css({ "width": initial_slider_content_width + 'px' }) }
                        $j(window).resize(function() { if ($j(window).width() < 1380 && $j(window).width() > 1000) { slider_content.css({ "width": resized_slider_content_width + 'px' }) } else { slider_content.css({ "width": initial_slider_content_width + 'px' }) } })
                    }
                })
            }

            function setSliderInitialElementsSize($item, i) {
                window["slider_graphic_width_" + i] = [];
                window["slider_graphic_height_" + i] = [];
                window["slider_title_" + i] = [];
                window["slider_subtitle_" + i] = [];
                window["slider_text_" + i] = [];
                window["slider_text_separator_" + i] = [];
                window["slider_text_separator_width_" + i] = [];
                window["slider_button1_" + i] = [];
                window["slider_button2_" + i] = [];
                window["slider_top_separator_" + i] = [];
                window["slider_bottom_separator_" + i] = [];
                window["slider_graphic_width_" + i].push(parseFloat($item.find('.thumb img').data("width")));
                window["slider_graphic_height_" + i].push(parseFloat($item.find('.thumb img').data("height")));
                window["slider_title_" + i].push(parseFloat($item.find('.mkd_slide_title').css("font-size")));
                window["slider_subtitle_" + i].push(parseFloat($item.find('.mkd_slide_subtitle').css("font-size")));
                window["slider_text_" + i].push(parseFloat($item.find('.mkd_slide_text').css("font-size")));
                window["slider_button1_" + i].push(parseFloat($item.find('.qbutton:eq(0)').css("font-size")));
                window["slider_button2_" + i].push(parseFloat($item.find('.qbutton:eq(1)').css("font-size")));
                window["slider_text_separator_" + i].push(parseFloat($item.find('.separator_content').css("font-size")));
                window["slider_title_" + i].push(parseFloat($item.find('.mkd_slide_title').css("line-height")));
                window["slider_subtitle_" + i].push(parseFloat($item.find('.mkd_slide_subtitle').css("line-height")));
                window["slider_text_" + i].push(parseFloat($item.find('.mkd_slide_text').css("line-height")));
                window["slider_button1_" + i].push(parseFloat($item.find('.qbutton:eq(0)').css("line-height")));
                window["slider_button2_" + i].push(parseFloat($item.find('.qbutton:eq(1)').css("line-height")));
                window["slider_text_separator_" + i].push(parseFloat($item.find('.separator_content').css("line-height")));
                window["slider_title_" + i].push(parseFloat($item.find('.mkd_slide_title').css("letter-spacing")));
                window["slider_subtitle_" + i].push(parseFloat($item.find('.mkd_slide_subtitle').css("letter-spacing")));
                window["slider_text_" + i].push(parseFloat($item.find('.mkd_slide_text').css("letter-spacing")));
                window["slider_button1_" + i].push(parseFloat($item.find('.qbutton:eq(0)').css("letter-spacing")));
                window["slider_button2_" + i].push(parseFloat($item.find('.qbutton:eq(1)').css("letter-spacing")));
                window["slider_text_separator_" + i].push(parseFloat($item.find('.separator_content').css("letter-spacing")));
                window["slider_title_" + i].push(parseFloat($item.find('.mkd_slide_title').css("margin-bottom")));
                window["slider_subtitle_" + i].push(parseFloat($item.find('.mkd_slide_subtitle').css("margin-bottom")));
                window["slider_button1_" + i].push(parseFloat($item.find('.qbutton:eq(0)').css("height")));
                window["slider_button2_" + i].push(parseFloat($item.find('.qbutton:eq(1)').css("height")));
                if (parseFloat($item.find('.qbutton:eq(0)').css("width")) != 0) { window["slider_button1_" + i].push(parseFloat($item.find('.qbutton:eq(0)').css("width"))) } else { window["slider_button1_" + i].push(0) }
                if (parseFloat($item.find('.qbutton:eq(1)').css("width")) != 0) { window["slider_button2_" + i].push(parseFloat($item.find('.qbutton:eq(1)').css("width"))) } else { window["slider_button2_" + i].push(0) }
                window["slider_button1_" + i].push(parseFloat($item.find('.qbutton:eq(0)').css("padding-left")));
                window["slider_button1_" + i].push(parseFloat($item.find('.qbutton:eq(0)').css("padding-right")));
                window["slider_button2_" + i].push(parseFloat($item.find('.qbutton:eq(1)').css("padding-left")));
                window["slider_button2_" + i].push(parseFloat($item.find('.qbutton:eq(1)').css("padding-right")));
                window["slider_top_separator_" + i].push(parseFloat($item.find('.separator_top').css("margin-top")));
                window["slider_top_separator_" + i].push(parseFloat($item.find('.separator_top').css("margin-bottom")));
                window["slider_bottom_separator_" + i].push(parseFloat($item.find('.separator_bottom').css("margin-top")));
                window["slider_bottom_separator_" + i].push(parseFloat($item.find('.separator_bottom').css("margin-bottom")));
                window["slider_text_separator_width_" + i].push(parseFloat($item.find('.mkd_line_before').css("width")))
            }

            function setSliderElementsSize($item, i) {
                if ($window_width > responsive_breakpoint_set[0]) {
                    slider_graphic_coefficient = coefficients_graphic_array[0];
                    slider_title_coefficient = coefficients_title_array[0];
                    slider_subtitle_coefficient = coefficients_subtitle_array[0];
                    slider_text_coefficient = coefficients_text_array[0];
                    slider_button_coefficient = coefficients_button_array[0]
                } else if ($window_width > responsive_breakpoint_set[1]) {
                    slider_graphic_coefficient = coefficients_graphic_array[1];
                    slider_title_coefficient = coefficients_title_array[1];
                    slider_subtitle_coefficient = coefficients_subtitle_array[1];
                    slider_text_coefficient = coefficients_text_array[1];
                    slider_button_coefficient = coefficients_button_array[1]
                } else if ($window_width > responsive_breakpoint_set[2]) {
                    slider_graphic_coefficient = coefficients_graphic_array[2];
                    slider_title_coefficient = coefficients_title_array[2];
                    slider_subtitle_coefficient = coefficients_subtitle_array[2];
                    slider_text_coefficient = coefficients_text_array[2];
                    slider_button_coefficient = coefficients_button_array[2]
                } else if ($window_width > responsive_breakpoint_set[3]) {
                    slider_graphic_coefficient = coefficients_graphic_array[3];
                    slider_title_coefficient = coefficients_title_array[3];
                    slider_subtitle_coefficient = coefficients_subtitle_array[3];
                    slider_text_coefficient = coefficients_text_array[3];
                    slider_button_coefficient = coefficients_button_array[3]
                } else if ($window_width > responsive_breakpoint_set[4]) {
                    slider_graphic_coefficient = coefficients_graphic_array[4];
                    slider_title_coefficient = coefficients_title_array[4];
                    slider_subtitle_coefficient = coefficients_subtitle_array[4];
                    slider_text_coefficient = coefficients_text_array[4];
                    slider_button_coefficient = coefficients_button_array[4]
                } else if ($window_width > responsive_breakpoint_set[5]) {
                    slider_graphic_coefficient = coefficients_graphic_array[5];
                    slider_title_coefficient = coefficients_title_array[5];
                    slider_subtitle_coefficient = coefficients_subtitle_array[5];
                    slider_text_coefficient = coefficients_text_array[5];
                    slider_button_coefficient = coefficients_button_array[5]
                } else {
                    slider_graphic_coefficient = coefficients_graphic_array[6];
                    slider_title_coefficient = coefficients_title_array[6];
                    slider_subtitle_coefficient = coefficients_subtitle_array[6];
                    slider_text_coefficient = coefficients_text_array[6];
                    slider_button_coefficient = coefficients_button_array[6]
                }
                var slider_title_coefficient_letter_spacing = slider_title_coefficient;
                var slider_subtitle_coefficient_letter_spacing = slider_subtitle_coefficient;
                var slider_text_coefficient_letter_spacing = slider_text_coefficient;
                if ($window_width <= responsive_breakpoint_set[0]) {
                    slider_title_coefficient_letter_spacing = slider_title_coefficient / 2;
                    slider_subtitle_coefficient_letter_spacing = slider_subtitle_coefficient / 2;
                    slider_text_coefficient_letter_spacing = slider_text_coefficient / 2
                }
                $item.find('.thumb').css({ "width": Math.round(window["slider_graphic_width_" + i][0] * slider_graphic_coefficient) + 'px' }).css({ "height": Math.round(window["slider_graphic_height_" + i][0] * slider_graphic_coefficient) + 'px' });
                $item.find('.mkd_slide_title').css({ "font-size": Math.round(window["slider_title_" + i][0] * slider_title_coefficient) + 'px' });
                $item.find('.mkd_slide_title').css({ "line-height": Math.round(window["slider_title_" + i][1] * slider_title_coefficient) + 'px' });
                $item.find('.mkd_slide_title').css({ "letter-spacing": Math.round(window["slider_title_" + i][2] * slider_title_coefficient_letter_spacing) + 'px' });
                $item.find('.mkd_slide_title').css({ "margin-bottom": Math.round(window["slider_title_" + i][3] * slider_title_coefficient) + 'px' });
                $item.find('.mkd_slide_subtitle').css({ "font-size": Math.round(window["slider_subtitle_" + i][0] * slider_subtitle_coefficient) + 'px' });
                $item.find('.mkd_slide_subtitle').css({ "line-height": Math.round(window["slider_subtitle_" + i][1] * slider_subtitle_coefficient) + 'px' });
                $item.find('.mkd_slide_subtitle').css({ "letter-spacing": Math.round(window["slider_subtitle_" + i][2] * slider_subtitle_coefficient_letter_spacing) + 'px' });
                $item.find('.mkd_slide_subtitle').css({ "margin-bottom": Math.round(window["slider_subtitle_" + i][3] * slider_subtitle_coefficient) + 'px' });
                $item.find('.mkd_slide_text').css({ "font-size": Math.round(window["slider_text_" + i][0] * slider_text_coefficient) + 'px' });
                $item.find('.mkd_slide_text').css({ "line-height": Math.round(window["slider_text_" + i][1] * slider_text_coefficient) + 'px' });
                $item.find('.mkd_slide_text').css({ "letter-spacing": Math.round(window["slider_text_" + i][2] * slider_text_coefficient_letter_spacing) + 'px' });
                $item.find('.separator_content').css({ "font-size": Math.round(window["slider_text_separator_" + i][0] * slider_text_coefficient) + 'px' });
                $item.find('.separator_content').css({ "line-height": Math.round(window["slider_text_separator_" + i][1] * slider_text_coefficient) + 'px' });
                $item.find('.separator_content').css({ "letter-spacing": Math.round(window["slider_text_separator_" + i][2] * slider_text_coefficient_letter_spacing) + 'px' });
                $item.find('.mkd_line_before').css({ "width": Math.round(window["slider_text_separator_width_" + i][0] * slider_text_coefficient) + 'px' });
                $item.find('.mkd_line_after').css({ "width": Math.round(window["slider_text_separator_width_" + i][0] * slider_text_coefficient) + 'px' });
                $item.find('.qbutton:eq(0)').css({ "font-size": Math.round(window["slider_button1_" + i][0] * slider_button_coefficient) + 'px' });
                $item.find('.qbutton:eq(1)').css({ "font-size": Math.round(window["slider_button2_" + i][0] * slider_button_coefficient) + 'px' });
                $item.find('.qbutton:eq(0)').css({ "line-height": Math.round(window["slider_button1_" + i][1] * slider_button_coefficient) + 'px' });
                $item.find('.qbutton:eq(1)').css({ "line-height": Math.round(window["slider_button2_" + i][1] * slider_button_coefficient) + 'px' });
                $item.find('.qbutton:eq(0)').css({ "letter-spacing": Math.round(window["slider_button1_" + i][2] * slider_button_coefficient) + 'px' });
                $item.find('.qbutton:eq(1)').css({ "letter-spacing": Math.round(window["slider_button2_" + i][2] * slider_button_coefficient) + 'px' });
                $item.find('.qbutton:eq(0)').css({ "height": Math.round(window["slider_button1_" + i][3] * slider_button_coefficient) + 'px' });
                $item.find('.qbutton:eq(1)').css({ "height": Math.round(window["slider_button2_" + i][3] * slider_button_coefficient) + 'px' });
                if (window["slider_button1_" + i][4] != 0) { $item.find('.qbutton:eq(0)').css({ "width": Math.round(window["slider_button1_" + i][4] * slider_button_coefficient) + 'px' }) } else { $item.find('.qbutton:eq(0)').css({ "width": 'auto' }) }
                if (window["slider_button2_" + i][4] != 0) { $item.find('.qbutton:eq(1)').css({ "width": Math.round(window["slider_button2_" + i][4] * slider_button_coefficient) + 'px' }) } else { $item.find('.qbutton:eq(1)').css({ "width": 'auto' }) }
                $item.find('.qbutton:eq(0)').css({ "padding-left": Math.round(window["slider_button1_" + i][5] * slider_button_coefficient) + 'px' });
                $item.find('.qbutton:eq(1)').css({ "padding-left": Math.round(window["slider_button2_" + i][5] * slider_button_coefficient) + 'px' });
                $item.find('.qbutton:eq(0)').css({ "padding-right": Math.round(window["slider_button1_" + i][6] * slider_button_coefficient) + 'px' });
                $item.find('.qbutton:eq(1)').css({ "padding-right": Math.round(window["slider_button2_" + i][6] * slider_button_coefficient) + 'px' });
                $item.find('.separator_top').css({ "margin-top": Math.round(window["slider_top_separator_" + i][0] * slider_title_coefficient) + 'px' });
                $item.find('.separator_top').css({ "margin-bottom": Math.round(window["slider_top_separator_" + i][1] * slider_title_coefficient) + 'px' });
                $item.find('.separator_bottom').css({ "margin-top": Math.round(window["slider_bottom_separator_" + i][0] * slider_title_coefficient) + 'px' });
                $item.find('.separator_bottom').css({ "margin-bottom": Math.round(window["slider_bottom_separator_" + i][1] * slider_title_coefficient) + 'px' })
            }

            function resetSliderElementsSize($item, i) {
                $item.find('.thumb').css({ "width": Math.round(window["slider_graphic_width_" + i][0]) + 'px' }).css({ "height": Math.round(window["slider_graphic_height_" + i][0]) + 'px' });
                $item.find('.mkd_slide_title').css({ "font-size": Math.round(window["slider_title_" + i][0]) + 'px' });
                $item.find('.mkd_slide_title').css({ "line-height": Math.round(window["slider_title_" + i][1]) + 'px' });
                $item.find('.mkd_slide_title').css({ "letter-spacing": Math.round(window["slider_title_" + i][2]) + 'px' });
                $item.find('.mkd_slide_title').css({ "margin-bottom": Math.round(window["slider_title_" + i][3]) + 'px' });
                $item.find('.mkd_slide_subtitle').css({ "font-size": Math.round(window["slider_subtitle_" + i][0]) + 'px' });
                $item.find('.mkd_slide_subtitle').css({ "line-height": Math.round(window["slider_subtitle_" + i][1]) + 'px' });
                $item.find('.mkd_slide_subtitle').css({ "letter-spacing": Math.round(window["slider_subtitle_" + i][2]) + 'px' });
                $item.find('.mkd_slide_subtitle').css({ "margin-bottom": Math.round(window["slider_subtitle_" + i][3]) + 'px' });
                $item.find('.mkd_slide_text').css({ "font-size": Math.round(window["slider_text_" + i][0]) + 'px' });
                $item.find('.mkd_slide_text').css({ "line-height": Math.round(window["slider_text_" + i][1]) + 'px' });
                $item.find('.mkd_slide_text').css({ "letter-spacing": Math.round(window["slider_text_" + i][2]) + 'px' });
                $item.find('.separator_content').css({ "font-size": Math.round(window["slider_text_separator_" + i][0]) + 'px' });
                $item.find('.separator_content').css({ "line-height": Math.round(window["slider_text_separator_" + i][1]) + 'px' });
                $item.find('.separator_content').css({ "letter-spacing": Math.round(window["slider_text_separator_" + i][2]) + 'px' });
                $item.find('.mkd_line_before').css({ "width": Math.round(window["slider_text_separator_width_" + i][0]) + 'px' });
                $item.find('.mkd_line_after').css({ "width": Math.round(window["slider_text_separator_width_" + i][0]) + 'px' });
                $item.find('.qbutton:eq(0)').css({ "font-size": Math.round(window["slider_button1_" + i][0]) + 'px' });
                $item.find('.qbutton:eq(1)').css({ "font-size": Math.round(window["slider_button2_" + i][0]) + 'px' });
                $item.find('.qbutton:eq(0)').css({ "line-height": Math.round(window["slider_button1_" + i][1]) + 'px' });
                $item.find('.qbutton:eq(1)').css({ "line-height": Math.round(window["slider_button2_" + i][1]) + 'px' });
                $item.find('.qbutton:eq(0)').css({ "letter-spacing": Math.round(window["slider_button1_" + i][2]) + 'px' });
                $item.find('.qbutton:eq(1)').css({ "letter-spacing": Math.round(window["slider_button2_" + i][2]) + 'px' });
                $item.find('.qbutton:eq(0)').css({ "height": Math.round(window["slider_button1_" + i][3]) + 'px' });
                $item.find('.qbutton:eq(1)').css({ "height": Math.round(window["slider_button2_" + i][3]) + 'px' });
                if (window["slider_button1_" + i][4] != 0) { $item.find('.qbutton:eq(0)').css({ "width": Math.round(window["slider_button1_" + i][4]) + 'px' }) } else { $item.find('.qbutton:eq(0)').css({ "width": 'auto' }) }
                if (window["slider_button2_" + i][4] != 0) { $item.find('.qbutton:eq(1)').css({ "width": Math.round(window["slider_button2_" + i][4]) + 'px' }) } else { $item.find('.qbutton:eq(1)').css({ "width": 'auto' }) }
                $item.find('.qbutton:eq(0)').css({ "padding-left": Math.round(window["slider_button1_" + i][5]) + 'px' });
                $item.find('.qbutton:eq(1)').css({ "padding-left": Math.round(window["slider_button2_" + i][5]) + 'px' });
                $item.find('.qbutton:eq(0)').css({ "padding-right": Math.round(window["slider_button1_" + i][5]) + 'px' });
                $item.find('.qbutton:eq(1)').css({ "padding-right": Math.round(window["slider_button2_" + i][5]) + 'px' });
                $item.find('.separator_top').css({ "margin-top": Math.round(window["slider_top_separator_" + i][0]) + 'px' });
                $item.find('.separator_top').css({ "margin-bottom": Math.round(window["slider_top_separator_" + i][1]) + 'px' });
                $item.find('.separator_bottom').css({ "margin-top": Math.round(window["slider_bottom_separator_" + i][0]) + 'px' });
                $item.find('.separator_bottom').css({ "margin-bottom": Math.round(window["slider_bottom_separator_" + i][1]) + 'px' })
            }
            if ($this.hasClass('full_screen')) {
                $this.css({ 'height': ($j(window).height() - mobile_header - paspartu_amount_with_top - paspartu_amount_with_bottom) + 'px' });
                $this.find('.mkd_slider_preloader').css({ 'height': ($j(window).height() - mobile_header - paspartu_amount_with_top - paspartu_amount_with_bottom) + 'px' });
                $this.find('.mkd_slider_preloader .ajax_loader').css({ 'display': 'block' });
                $this.find('.item').css({ 'height': ($j(window).height() - mobile_header - paspartu_amount_with_top - paspartu_amount_with_bottom) + 'px' });
                if ($j('.paspartu_outer:not(.disable_top_paspartu)').length) { if (!$j('body').hasClass('paspartu_on_top_fixed')) { $this.closest('.mkd_slider').css('padding-top', Math.round(header_height_add_for_paspartu + $window_width * paspartu_width)) } }
                if ($j('.paspartu_outer.paspartu_on_bottom_slider').length) { $this.closest('.mkd_slider').css('padding-bottom', Math.round($window_width * paspartu_width)) }
                $j(window).resize(function() {
                    mobile_header = $j(window).width() < 1000 ? $j('header.page_header').height() : 0;
                    header_height_add_for_paspartu = $window_width > 1000 && !$j('header.page_header').hasClass('transparent') && $j('body.paspartu_on_top_fixed').length == 0 ? $j('header.page_header').height() : 0;
                    paspartu_amount_with_top = $j('.paspartu_outer:not(.disable_top_paspartu)').length > 0 ? Math.round($window_width * paspartu_width + header_height_add_for_paspartu) : 0;
                    paspartu_amount_with_bottom = $j('.paspartu_outer.paspartu_on_bottom_slider').length > 0 ? Math.round($window_width * paspartu_width) : 0;
                    $this.css({ 'height': ($j(window).height() - mobile_header - paspartu_amount_with_top - paspartu_amount_with_bottom) + 'px' });
                    $this.find('.mkd_slider_preloader .ajax_loader').css({ 'display': 'block' });
                    $this.find('.item').css({ 'height': ($j(window).height() - mobile_header - paspartu_amount_with_top - paspartu_amount_with_bottom) + 'px' });
                    if ($j('.paspartu_outer:not(.disable_top_paspartu)').length) { if (!$j('body').hasClass('paspartu_on_top_fixed')) { $this.closest('.mkd_slider').css('padding-top', Math.round(header_height_add_for_paspartu + $window_width * paspartu_width)) } }
                    if ($j('.paspartu_outer.paspartu_on_bottom_slider').length) { $this.closest('.mkd_slider').css('padding-bottom', Math.round($window_width * paspartu_width)) }
                    $this.find('.item').each(function(i) { setSliderElementsSize($j(this), i) })
                })
            } else if ($this.hasClass('responsive_height')) {
                var $def_height = $this.data('height');
                $this.find('.mkd_slider_preloader').css({ 'height': ($this.height() - mobile_header - paspartu_amount_with_top - paspartu_amount_with_bottom) + 'px', 'display': 'block' });
                if ($j('.paspartu_outer:not(.disable_top_paspartu)').length) { if (!$j('body').hasClass('paspartu_on_top_fixed')) { $this.closest('.mkd_slider').css('padding-top', Math.round(header_height_add_for_paspartu + $window_width * paspartu_width)) } }
                if ($j('.paspartu_outer.paspartu_on_bottom_slider').length) { $this.closest('.mkd_slider').css('padding-bottom', Math.round($window_width * paspartu_width)) }
                setSliderHeight($this, $def_height);
                $j(window).resize(function() {
                    if ($j('.paspartu_outer:not(.disable_top_paspartu)').length) { header_height_add_for_paspartu = $window_width > 1000 && !$j('header.page_header').hasClass('transparent') ? $j('header.page_header').height() : 0; if (!$j('body').hasClass('paspartu_on_top_fixed')) { $this.closest('.mkd_slider').css('padding-top', Math.round(header_height_add_for_paspartu + $window_width * paspartu_width)) } }
                    if ($j('.paspartu_outer.paspartu_on_bottom_slider').length) { $this.closest('.mkd_slider').css('padding-bottom', Math.round($window_width * paspartu_width)) }
                    setSliderHeight($this, $def_height);
                    $this.find('.item').each(function(i) { setSliderElementsSize($j(this), i) })
                })
            } else {
                var $def_height = $this.data('height');
                $this.find('.mkd_slider_preloader').css({ 'height': ($this.height() - mobile_header) + 'px', 'display': 'block' });
                $this.find('.mkd_slider_preloader .ajax_loader').css({ 'display': 'block' });
                if ($j('.paspartu_outer:not(.disable_top_paspartu)').length) { if (!$j('body').hasClass('paspartu_on_top_fixed')) { $this.closest('.mkd_slider').css('padding-top', Math.round(header_height_add_for_paspartu + $window_width * paspartu_width)) } }
                if ($j('.paspartu_outer.paspartu_on_bottom_slider').length) { $this.closest('.mkd_slider').css('padding-bottom', Math.round($window_width * paspartu_width)) }
                $this.find('.item').each(function(i) {
                    setSliderInitialElementsSize($j(this), i);
                    setSliderElementsSize($j(this), i)
                });
                $window_width < 1000 ? setSliderHeight($this, $def_height) : resetSliderHeight($def_height);
                $j(window).resize(function() {
                    if ($j('.paspartu_outer:not(.disable_top_paspartu)').length) { header_height_add_for_paspartu = $window_width > 1000 && !$j('header.page_header').hasClass('transparent') ? $j('header.page_header').height() : 0; if (!$j('body').hasClass('paspartu_on_top_fixed')) { $this.closest('.mkd_slider').css('padding-top', Math.round(header_height_add_for_paspartu + $window_width * paspartu_width)) } }
                    if ($j('.paspartu_outer.paspartu_on_bottom_slider').length) { $this.closest('.mkd_slider').css('padding-bottom', Math.round($window_width * paspartu_width)) }
                    if ($window_width < 1000) {
                        setSliderHeight($this, $def_height);
                        $this.find('.item').each(function(i) { setSliderElementsSize($j(this), i) })
                    } else {
                        resetSliderHeight($def_height);
                        $this.find('.item').each(function(i) { resetSliderElementsSize($j(this), i) })
                    }
                })
            }
            if ($j('body:not(.boxed):not(.vertical_menu_transparency):not(.vertical_menu_background_opacity):not(.vertical_menu_hidden):not(.page-template-landing_page-php)').hasClass('vertical_menu_enabled') && $window_width > 1000) {
                var vertical_menu_width = 290;
                if ($j('.vertical_menu_width_380').length) { var vertical_menu_width = 380 }
                if ($j('.vertical_menu_width_400').length) { var vertical_menu_width = 400 }
                var paspartu_add = $j('body').hasClass('paspartu_enabled') ? 2 * Math.round($window_width * paspartu_width) : 0;
                $this.find('.carousel-inner').width($window_width - vertical_menu_width - paspartu_add);
                $j(window).resize(function() {
                    if ($j(window).width() > 1000) {
                        paspartu_add = $j('body').hasClass('paspartu_enabled') ? 2 * Math.round($window_width * paspartu_width) : 0;
                        $this.find('.carousel-inner').width($window_width - vertical_menu_width - paspartu_add)
                    } else { $this.find('.carousel-inner').css('width', '100%') }
                })
            }
            if ($j('body:not(.boxed):not(.vertical_menu_transparency):not(.vertical_menu_background_opacity):not(.page-template-landing_page-php)').hasClass('vertical_menu_hidden') && $window_width > 1000) {
                var paspartu_add = $j('body').hasClass('paspartu_enabled') ? 2 * Math.round($window_width * paspartu_width) : 0;
                $this.find('.carousel-inner').width($window_width - 40 - paspartu_add);
                $j(window).resize(function() {
                    if ($j(window).width() > 1000) {
                        paspartu_add = $j('body').hasClass('paspartu_enabled') ? 2 * Math.round($window_width * paspartu_width) : 0;
                        $this.find('.carousel-inner').width($window_width - 40 - paspartu_add)
                    } else { $this.find('.carousel-inner').css('width', '100%') }
                })
            }
            $j(window).scroll(function() { if ($this.hasClass('full_screen') && $scroll > $window_height && $window_width > 1000) { $this.find('.carousel-inner, .carousel-indicators, button').hide() } else if (!$this.hasClass('full_screen') && $scroll > $this.height() && $window_width > 1000) { $this.find('.carousel-inner, .carousel-indicators, button').hide() } else { $this.find('.carousel-inner, .carousel-indicators, button').show() } });
            var $slide_animation = $this.data('slide_animation');
            if ($slide_animation === "") { $slide_animation = 6000 }
            var all_items_count = $j('div.item').length;

            function setPrevNextNumbers(curr_item, all_items_count) {
                if (curr_item == 1) {
                    $this.find('.left.carousel-control .prev').html(all_items_count);
                    $this.find('.right.carousel-control .next').html(curr_item + 1)
                } else if (curr_item == all_items_count) {
                    $this.find('.left.carousel-control .prev').html(curr_item - 1);
                    $this.find('.right.carousel-control .next').html(1)
                } else {
                    $this.find('.left.carousel-control .prev').html(curr_item - 1);
                    $this.find('.right.carousel-control .next').html(curr_item + 1)
                }
            }

            function initSlider() {
                $this.find('.carousel-inner .item:first-child').addClass('active');
                checkSliderForHeaderStyle($j('.carousel .active'), $this.hasClass('header_effect'));
                if ($this.hasClass('slider_numbers')) { setPrevNextNumbers(1, all_items_count) }
                if ($this.hasClass('slider_thumbs')) {
                    setPrevNextNumbers(1, all_items_count);
                    if ($this.find('.active').next('div').find('.image').length) {
                        src = image_regex.exec($this.find('.active').next('div').find('.image').attr('style'));
                        next_image = new Image();
                        next_image.src = src[1]
                    } else {
                        next_image = $this.find('.active').next('div').find('> .video').clone();
                        next_image.find('.video-overlay').remove();
                        next_image.find('.video-wrap').width(170).height(95);
                        next_image.find('.mejs-container').width(170).height(95);
                        next_image.find('video').width(170).height(95)
                    }
                    $this.find('.right.carousel-control .img').html(next_image).find('img, div.video').addClass('old');
                    if ($this.find('.carousel-inner .item:last-child .image').length) {
                        src = image_regex.exec($this.find('.carousel-inner .item:last-child .image').attr('style'));
                        prev_image = new Image();
                        prev_image.src = src[1]
                    } else {
                        prev_image = $this.find('.carousel-inner .item:last-child > .video').clone();
                        prev_image.find('.video-overlay').remove();
                        prev_image.find('.video-wrap').width(170).height(95);
                        prev_image.find('.mejs-container').width(170).height(95);
                        prev_image.find('video').width(170).height(95)
                    }
                    $this.find('.left.carousel-control .img').html(prev_image).find('img, div.video').addClass('old')
                }
                if ($this.hasClass('mkd_auto_start')) {
                    $this.carousel({ interval: $slide_animation, pause: false });
                    $this.find('.slide_buttons_holder .qbutton').mouseenter(function() { $this.carousel('pause') }).mouseleave(function() { $this.carousel('cycle') })
                } else { $this.carousel({ interval: 0, pause: false }) }
                if ($this.find('.item video').length) { initVideoBackgroundSize() }
                if ($this.hasClass('responsive_height') || $this.hasClass('full_screen')) {
                    $this.find('.item').each(function(i) {
                        setSliderInitialElementsSize($j(this), i);
                        setSliderElementsSize($j(this), i)
                    })
                }
                if ($j('.carousel-inner .item:first-child').hasClass('animate_image') && $window_width > 1000) { $this.find('.carousel-inner .item.animate_image:first-child .image').transformAnimate({ transform: "matrix(" + matrixArray[$j('.carousel-inner .item:first-child').data('animate_image')] + ")", duration: 30000 }) }
                setContentPredefinedPosition()
            }
            if ($j('html').hasClass('touch')) {
                if ($this.find('.item:first-child .mobile-video-image').length > 0) {
                    src = image_regex.exec($this.find('.item:first-child .mobile-video-image').attr('style'));
                    if (src) {
                        var backImg = new Image();
                        backImg.src = src[1];
                        $j(backImg).load(function() {
                            $j('.mkd_slider_preloader').fadeOut(800);
                            initSlider()
                        })
                    }
                } else {
                    src = image_regex.exec($this.find('.item:first-child .image').attr('style'));
                    if (src) {
                        var backImg = new Image();
                        backImg.src = src[1];
                        $j(backImg).load(function() {
                            $j('.mkd_slider_preloader').fadeOut(800);
                            initSlider()
                        })
                    }
                }
            } else {
                if ($this.find('.item:first-child video').length > 0) {
                    $this.find('.item:first-child video').get(0).addEventListener('loadeddata', function() {
                        $j('.mkd_slider_preloader').fadeOut(800);
                        initSlider()
                    })
                } else {
                    src = image_regex.exec($this.find('.item:first-child .image').attr('style'));
                    if (src) {
                        var backImg = new Image();
                        backImg.src = src[1];
                        $j(backImg).load(function() {
                            $j('.mkd_slider_preloader').fadeOut(800);
                            initSlider()
                        })
                    }
                }
            }
            $this.on('slide.bs.carousel', function() {
                $this.addClass('in_progress');
                $this.find('.active .slider_content_outer').fadeTo(280, 0)
            });
            $this.on('slid.bs.carousel', function() {
                $this.removeClass('in_progress');
                $this.find('.active .slider_content_outer').fadeTo(0, 1);
                if ($this.hasClass('slider_numbers')) {
                    var curr_item = $j('div.item').index($j('div.item.active')[0]) + 1;
                    setPrevNextNumbers(curr_item, all_items_count)
                }
                $j('div.item.animate_image .image').stop().css({ 'transform': '', '-webkit-transform': '' });
                if ($j('div.item.active').hasClass('animate_image') && $window_width > 1000) { $j('div.item.animate_image.active .image').transformAnimate({ transform: "matrix(" + matrixArray[$j('div.item.animate_image.active').data('animate_image')] + ")", duration: 30000 }) }
                if ($this.hasClass('slider_thumbs')) {
                    var curr_item = $j('div.item').index($j('div.item.active')[0]) + 1;
                    setPrevNextNumbers(curr_item, all_items_count);
                    if ($this.find('.active').prev('div.item').length) {
                        if ($this.find('.active').prev('div').find('.image').length) {
                            src = image_regex.exec($this.find('.active').prev('div').find('.image').attr('style'));
                            prev_image = new Image();
                            prev_image.src = src[1]
                        } else {
                            prev_image = $this.find('.active').prev('div').find('> .video').clone();
                            prev_image.find('.video-overlay').remove();
                            prev_image.find('.video-wrap').width(170).height(95);
                            prev_image.find('.mejs-container').width(170).height(95);
                            prev_image.find('video').width(170).height(95)
                        }
                        $this.find('.left.carousel-control .img .old').fadeOut(300, function() { $j(this).remove() });
                        $this.find('.left.carousel-control .img').append(prev_image).find('img, div.video').fadeIn(300).addClass('old')
                    } else {
                        if ($this.find('.carousel-inner .item:last-child .image').length) {
                            src = image_regex.exec($this.find('.carousel-inner .item:last-child .image').attr('style'));
                            prev_image = new Image();
                            prev_image.src = src[1]
                        } else {
                            prev_image = $this.find('.carousel-inner .item:last-child > .video').clone();
                            prev_image.find('.video-overlay').remove();
                            prev_image.find('.video-wrap').width(170).height(95);
                            prev_image.find('.mejs-container').width(170).height(95);
                            prev_image.find('video').width(170).height(95)
                        }
                        $this.find('.left.carousel-control .img .old').fadeOut(300, function() { $j(this).remove() });
                        $this.find('.left.carousel-control .img').append(prev_image).find('img, div.video').fadeIn(300).addClass('old')
                    }
                    if ($this.find('.active').next('div.item').length) {
                        if ($this.find('.active').next('div').find('.image').length) {
                            src = image_regex.exec($this.find('.active').next('div').find('.image').attr('style'));
                            next_image = new Image();
                            next_image.src = src[1]
                        } else {
                            next_image = $this.find('.active').next('div').find('> .video').clone();
                            next_image.find('.video-overlay').remove();
                            next_image.find('.video-wrap').width(170).height(95);
                            next_image.find('.mejs-container').width(170).height(95);
                            next_image.find('video').width(170).height(95)
                        }
                        $this.find('.right.carousel-control .img .old').fadeOut(300, function() { $j(this).remove() });
                        $this.find('.right.carousel-control .img').append(next_image).find('img, div.video').fadeIn(300).addClass('old')
                    } else {
                        if ($this.find('.carousel-inner .item:first-child .image').length) {
                            src = image_regex.exec($this.find('.carousel-inner .item:first-child .image').attr('style'));
                            next_image = new Image();
                            next_image.src = src[1]
                        } else {
                            next_image = $this.find('.carousel-inner .item:first-child > .video').clone();
                            next_image.find('.video-overlay').remove();
                            next_image.find('.video-wrap').width(170).height(95);
                            next_image.find('.mejs-container').width(170).height(95);
                            next_image.find('video').width(170).height(95)
                        }
                        $this.find('.right.carousel-control .img .old').fadeOut(300, function() { $j(this).remove() });
                        $this.find('.right.carousel-control .img').append(next_image).find('img, div.video').fadeIn(300).addClass('old')
                    }
                }
            });
            $this.swipe({ swipeLeft: function(event, direction, distance, duration, fingerCount) { $this.carousel('next') }, swipeRight: function(event, direction, distance, duration, fingerCount) { $this.carousel('prev') }, threshold: 20 })
        });
        if ($j('.no-touch .carousel').length) {
            skrollr_slider = skrollr.init({ smoothScrolling: false, forceHeight: false });
            skrollr_slider.refresh()
        }
    }
}

function checkSliderForHeaderStyle($this, header_effect) {
    "use strict";
    if ($j('.mkd_slider .carousel').not('.disable_slider_header_style_changing').length > 0) {
        var slide_header_style = "";
        if ($this.hasClass('light')) { slide_header_style = 'light' }
        if ($this.hasClass('dark')) { slide_header_style = 'dark' }
        if (slide_header_style !== "") {
            if (header_effect) {
                $j('header.page_header').removeClass('dark light').addClass(slide_header_style);
                $j('aside.vertical_menu_area').removeClass('dark light').addClass(slide_header_style)
            }
            $j('.carousel .carousel-control, .carousel .carousel-indicators').removeClass('dark light').addClass(slide_header_style)
        } else {
            if (header_effect) {
                $j('header.page_header').removeClass('dark light').addClass(default_header_style);
                $j('aside.vertical_menu_area').removeClass('dark light').addClass(default_header_style)
            }
            $j('.carousel .carousel-control, .carousel .carousel-indicators').removeClass('dark light').addClass(default_header_style)
        }
    }
}

function calculateHeights() {
    "use strict";
    if ($j('.portfolio_slides').length) { $j('.portfolio_slides').each(function() { $j(this).parents('.caroufredsel_wrapper').css({ 'height': ($j(this).find('li.item').outerHeight() - 3) + 'px' }) }) }
    if ($j('.mkd_carousels .slides').length) { $j('.mkd_carousels .slides').each(function() { $j(this).parents('.caroufredsel_wrapper').css({ 'height': ($j(this).find('li.item').outerHeight()) + 'px' }) }) }
    if ($j('.blog_slides').length) { $j('.blog_slides').each(function() { $j(this).parents('.caroufredsel_wrapper').css({ 'height': ($j(this).find('li.item').outerHeight()) + 'px' }) }) }
    if ($j('.product_slider .products').length) { $j('.product_slider .products').each(function() { $j(this).parents('.caroufredsel_wrapper').css({ 'height': ($j(this).find('li').outerHeight() - 3) + 'px' }) }) }
    if ($j('.testimonial_type_carousel .slides').length) {
        $j('.testimonial_type_carousel .slides').each(function() {
            var max = -1;
            $j(this).find('li').each(function() {
                var h = $j(this).outerHeight(true);
                max = h > max ? h : max
            });
            $j(this).parents('.caroufredsel_wrapper').css({ 'height': (max - 3) + 'px' })
        })
    }
}

function responsiveNumberSlidesCarousel(maxItems, number_of_items) { "use strict"; var windowWidth = window.innerWidth; if (windowWidth >= 1200) { return maxItems } else if (windowWidth < 1200 && windowWidth >= 1000) { if (number_of_items == '5') { return 4 } else { return maxItems } } else if (windowWidth < 1000 && windowWidth >= 800) { return 3 } else if (windowWidth < 800 && windowWidth >= 800) { return 2 } else if (windowWidth < 800) { return 1 } }

function initMikadoCarousel() {
    "use strict";
    if ($j('.mkd_carousels').length) {
        $j('.mkd_carousels').each(function() {
            var number_of_items;
            var items_number_set;
            var fullWidth = (!($j(this).parents('.grid_section').length == 1) && ($j(this).parents('.page-template-full_width').length == 1)) ? true : false;
            if (typeof $j(this).data('number_of_items') !== 'undefined') {
                number_of_items = $j(this).data('number_of_items');
                items_number_set = true
            } else {
                number_of_items = 5;
                items_number_set = false
            }
            var itemWidth = ($j(this).parents('.grid_section').length == 1) ? 216 : 380;
            var maxItems = number_of_items;
            var itemWidthTemp;
            if (fullWidth) {
                switch (number_of_items) {
                    case 3:
                        itemWidthTemp = 660;
                        break;
                    case 4:
                        itemWidthTemp = 800;
                        break;
                    case 5:
                        itemWidthTemp = 380;
                        break;
                    default:
                        itemWidthTemp = 380;
                        break
                }
            } else {
                switch (number_of_items) {
                    case 3:
                        itemWidthTemp = 380;
                        break;
                    case 4:
                        itemWidthTemp = 275;
                        break;
                    case 5:
                        itemWidthTemp = 216;
                        break;
                    default:
                        itemWidthTemp = 380;
                        break
                }
            }
            itemWidth = (items_number_set) ? itemWidthTemp : itemWidth;
            var instance = this;
            $j(this).find('.slides').carouFredSel({
                circular: true,
                responsive: true,
                scroll: { items: 1, duration: 1000, pauseOnHover: false },
                prev: { button: function() { return $j(this).parent().siblings('.caroufredsel-direction-nav').find('.mkd_carousel_prev') } },
                next: { button: function() { return $j(this).parent().siblings('.caroufredsel-direction-nav').find('.mkd_carousel_next') } },
                items: { width: itemWidth, visible: { min: responsiveNumberSlidesCarousel(maxItems, number_of_items), max: maxItems } },
                auto: true,
                mousewheel: false,
                swipe: { onMouse: true, onTouch: true },
                onCreate: function() {
                    $j(this).css('display', 'block').animate({ 'opacity': 1 }, 1000, function() {
                        if ($j('.widget_sticky-sidebar').length) {
                            widgetTopOffset = $j('.widget_sticky-sidebar').offset().top;
                            widgetParentOffset = $j('.widget_sticky-sidebar').position().top;
                            stickySidebarHeight = $j('aside.sidebar').height()
                        }
                        if ($j(window).width() > 600) { stickySidebar($scroll, widgetTopOffset, widgetParentOffset, stickySidebarHeight) }
                    })
                }
            })
        });
        calculateHeights()
    }
}

function initPortfolioSlider() {
    "use strict";
    if ($j('.portfolio_slider').length) {
        $j('.portfolio_slider').each(function() {
            var portfolios_shown;
            if (typeof $j(this).data('portfolios_shown') !== 'undefined') { portfolios_shown = $j(this).data('portfolios_shown') } else { portfolios_shown = 'auto' }
            var maxItems = ($j(this).parents('.grid_section').length == 1) ? 3 : portfolios_shown;
            var itemWidthTemp;
            switch (portfolios_shown) {
                case 3:
                    itemWidthTemp = 667;
                    break;
                case 4:
                    itemWidthTemp = 800;
                    break;
                case 5:
                    itemWidthTemp = 400;
                    break;
                case 6:
                    itemWidthTemp = 334;
                    break;
                default:
                    itemWidthTemp = 800;
                    break
            }
            var itemWidth = ($j(this).parents('.grid_section').length == 1) ? 353 : itemWidthTemp;
            $j(this).find('.portfolio_slides').carouFredSel({
                circular: true,
                responsive: true,
                scroll: 1,
                prev: { button: function() { return $j(this).parent().siblings('.caroufredsel-direction-nav').find('.caroufredsel-prev') } },
                next: { button: function() { return $j(this).parent().siblings('.caroufredsel-direction-nav').find('.caroufredsel-next') } },
                items: { width: itemWidth, visible: { min: 1, max: maxItems } },
                auto: false,
                mousewheel: false,
                swipe: { onMouse: true, onTouch: true },
                onCreate: function() {
                    $j(this).css('display', 'block').animate({ 'opacity': 1 }, 1000, function() {
                        if ($j('.widget_sticky-sidebar').length) {
                            widgetTopOffset = $j('.widget_sticky-sidebar').offset().top;
                            widgetParentOffset = $j('.widget_sticky-sidebar').position().top;
                            stickySidebarHeight = $j('aside.sidebar').height()
                        }
                        if ($j(window).width() > 600) { stickySidebar($scroll, widgetTopOffset, widgetParentOffset, stickySidebarHeight) }
                    })
                }
            })
        });
        calculateHeights();
        calcPortfolioSliderArrowsPos();
        $j('.portfolio_slider .flex-direction-nav a').click(function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation()
        })
    }
}

function calcPortfolioSliderArrowsPos() {
    "use strict";
    if ($j('.portfolio_slider_holder').length) {
        $j('.portfolio_slider_holder').each(function() {
            var top_margin = 0;
            if ($j(this).hasClass('standard')) { top_margin = (parseInt($j(this).find('.portfolio_description').outerHeight()) + parseInt($j(this).find('.caroufredsel-direction-nav a').css('height'))) / 2 } else { top_margin = parseInt($j(this).find('.caroufredsel-direction-nav a').css('height')) / 2 }
            $j(this).find('.caroufredsel-direction-nav a').each(function() {
                $j(this).css({ 'margin-top': '-' + top_margin + 'px' });
                $j(this).css({ 'opacity': '1' })
            })
        })
    }
}

function initProductSlider() {
    "use strict";
    if ($j('.product_slider').length) {
        $j('.product_slider').each(function() {
            var products_shown;
            if (typeof $j(this).data('products_shown') !== 'undefined') { products_shown = $j(this).data('products_shown') } else { products_shown = 'auto' }
            var maxItems = ($j(this).parents('.grid_section').length == 1) ? 3 : products_shown;
            var itemWidthTemp;
            switch (products_shown) {
                case 3:
                    itemWidthTemp = 667;
                    break;
                case 4:
                    itemWidthTemp = 800;
                    break;
                case 5:
                    itemWidthTemp = 400;
                    break;
                case 6:
                    itemWidthTemp = 334;
                    break;
                default:
                    itemWidthTemp = 800;
                    break
            }
            var itemWidth = ($j(this).parents('.grid_section').length == 1) ? 353 : itemWidthTemp;
            $j(this).find('ul.products').carouFredSel({ circular: true, responsive: true, scroll: 1, prev: { button: function() { return $j(this).parent().parent().siblings('.caroufredsel-direction-nav').find('.caroufredsel-prev') } }, next: { button: function() { return $j(this).parent().parent().siblings('.caroufredsel-direction-nav').find('.caroufredsel-next') } }, pagination: function() { return $j(this).parent().parent().siblings('.product_slider_pager') }, items: { width: itemWidth, visible: { min: 1, max: maxItems } }, auto: false, mousewheel: false, swipe: { onMouse: true, onTouch: true } }).animate({ 'opacity': 1 }, 1000)
        });
        calculateHeights();
        $j('.product_slider .flex-direction-nav a').click(function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation()
        })
    }
}
var current_scroll;

function initSideMenu() {
    "use strict";
    if ($j('body').hasClass('side_menu_slide_with_content')) {
        $j('.side_menu_button_wrapper a.side_menu_button_link, a.close_side_menu').click(function(e) {
            e.preventDefault();
            if (!$j('.side_menu_button_wrapper a.side_menu_button_link').hasClass('opened')) {
                $j(this).addClass('opened');
                $j('body').addClass('side_menu_open');
                current_scroll = $j(window).scrollTop();
                $j(window).scroll(function() {
                    if (Math.abs($scroll - current_scroll) > 400) {
                        $j('body').removeClass('side_menu_open');
                        $j('.side_menu_button_wrapper a').removeClass('opened')
                    }
                })
            } else {
                $j('body').removeClass('side_menu_open');
                $j('.side_menu_button_wrapper a.side_menu_button_link').removeClass('opened');
                $j('body').removeClass('side_menu_open')
            }
            e.stopPropagation();
            $j('.wrapper').click(function() {
                e.preventDefault();
                $j('body').removeClass('side_menu_open');
                $j('.side_menu_button_wrapper a.side_menu_button_link').removeClass('opened');
                $j('body').removeClass('side_menu_open')
            })
        })
    }
    if ($j('body').hasClass('side_menu_slide_from_right')) {
        $j('.wrapper').prepend('<div class="cover"/>');
        $j('.side_menu_button_wrapper a.side_menu_button_link, a.close_side_menu').click(function(e) {
            e.preventDefault();
            if (!$j('.side_menu_button_wrapper a.side_menu_button_link').hasClass('opened')) {
                $j(this).addClass('opened');
                $j('body').addClass('right_side_menu_opened');
                $j(' .wrapper .cover').click(function() {
                    $j('.side_menu_button_wrapper a.side_menu_button_link').removeClass('opened');
                    $j('body').removeClass('right_side_menu_opened');
                    $j('.side_menu_button_wrapper a').removeClass('opened')
                });
                current_scroll = $j(window).scrollTop();
                $j(window).scroll(function() {
                    if (Math.abs($scroll - current_scroll) > 400) {
                        $j('body').removeClass('right_side_menu_opened');
                        $j('.side_menu_button_wrapper a').removeClass('opened')
                    }
                })
            } else {
                $j('.side_menu_button_wrapper a.side_menu_button_link').removeClass('opened');
                $j('body').removeClass('right_side_menu_opened')
            }
        })
    }
    if ($j('body').hasClass('side_area_uncovered_from_content')) {
        $j('.side_menu_button_wrapper a.side_menu_button_link,  a.close_side_menu').click(function(e) {
            e.preventDefault();
            if (!$j('.side_menu_button_wrapper a.side_menu_button_link').hasClass('opened')) {
                $j('.side_menu').css({ 'visibility': 'visible' });
                $j(this).addClass('opened');
                $j('body').addClass('right_side_menu_opened');
                current_scroll = $j(window).scrollTop();
                $j(window).scroll(function() {
                    if (Math.abs($scroll - current_scroll) > 400) {
                        $j('body').removeClass('right_side_menu_opened');
                        $j('.side_menu_button_wrapper a').removeClass('opened');
                        var hide_side_menu = setTimeout(function() {
                            $j('.side_menu').css({ 'visibility': 'hidden' });
                            clearTimeout(hide_side_menu)
                        }, 400)
                    }
                })
            } else {
                $j('.side_menu_button_wrapper a.side_menu_button_link').removeClass('opened');
                $j('body').removeClass('right_side_menu_opened');
                var hide_side_menu = setTimeout(function() {
                    $j('.side_menu').css({ 'visibility': 'hidden' });
                    clearTimeout(hide_side_menu)
                }, 400)
            }
        })
    }
}

function setDropDownMenuPosition() {
    "use strict";
    var menu_items = $j(".drop_down > ul > li.narrow");
    menu_items.each(function(i) {
        var browser_width = $j(window).width() - 16;
        var boxed_layout = 1180;
        var menu_item_position = $j(menu_items[i]).offset().left;
        var sub_menu_width = $j(menu_items[i]).find('.second .inner ul').width();
        var menu_item_from_left = 0;
        if ($j('body').hasClass('boxed')) { menu_item_from_left = boxed_layout - (menu_item_position - (browser_width - boxed_layout) / 2) + 24 } else { menu_item_from_left = browser_width - menu_item_position + 24 }
        var sub_menu_from_left;
        if ($j(menu_items[i]).find('li.sub').length > 0) { sub_menu_from_left = menu_item_from_left - sub_menu_width }
        if (menu_item_from_left < sub_menu_width || sub_menu_from_left < sub_menu_width) {
            $j(menu_items[i]).find('.second').addClass('right');
            $j(menu_items[i]).find('.second .inner ul').addClass('right')
        }
    })
}

function initDropDownMenu() {
    "use strict";
    var menu_items = $j('.drop_down > ul > li');
    var sub_menu_items = $j('.drop_down .narrow .second .inner ul li');
    menu_items.each(function(i) {
        if ($j(menu_items[i]).find('.second').length > 0) {
            if ($j(menu_items[i]).hasClass('wide')) {
                var dropdown = $j(this).find('.inner > ul');
                var dropdownPadding = parseInt(dropdown.css('padding-left').slice(0, -2)) + parseInt(dropdown.css('padding-right').slice(0, -2));
                if (!$j(this).hasClass('left_position') && !$j(this).hasClass('right_position')) { $j(this).find('.second').css('left', 0) }
                var tallest = 0;
                $j(this).find('.second > .inner > ul > li').each(function() { var thisHeight = $j(this).height(); if (thisHeight > tallest) { tallest = thisHeight } });
                $j(this).find('.second > .inner > ul > li').css("height", "");
                $j(this).find('.second > .inner > ul > li').height(tallest);
                var row_number;
                if ($j(this).find('.second > .inner > ul > li').length > 4) { row_number = 4 } else { row_number = $j(this).find('.second > .inner > ul > li').length }
                if ($j('body').hasClass('header_general_padding') && !$j(this).hasClass('left_position') && !$j(this).hasClass('right_position')) {
                    var drop_width = $j(this).parents('.header_bottom > .container > .container_inner').width();
                    var item_width = drop_width / row_number;
                    var header_containner_inner_offset = $j(this).parents('.header_bottom > .container > .container_inner').offset().left;
                    var header_li_offset = $j(this).offset().left;
                    var header_wide_offset = -(header_li_offset - header_containner_inner_offset);
                    $j(this).find('.second > .inner > ul > li').css('box-sizing', 'border-box');
                    $j(this).find('.second > .inner > ul').width(drop_width);
                    $j(this).find('.second > .inner > ul > li').outerWidth(item_width);
                    $j(this).find('.second').css('left', header_wide_offset)
                } else {
                    var width = ($j(this).find('.second > .inner > ul').outerWidth());
                    if (!$j(this).hasClass('wide_background')) {
                        if (!$j(this).hasClass('left_position') && !$j(this).hasClass('right_position')) {
                            var left_position = ($j(window).width() - 2 * ($j(window).width() - $j(this).find('.second').offset().left)) / 2 + (width + dropdownPadding) / 2;
                            $j(this).find('.second').css('left', -left_position)
                        }
                    } else {
                        if (!$j(this).hasClass('left_position') && !$j(this).hasClass('right_position')) {
                            var paspartuWideMenu = 0;
                            if ($j('body.paspartu_enabled .paspartu_left').length > 0) { paspartuWideMenu = $j('body.paspartu_enabled .paspartu_left').width() }
                            var left_position = $j(this).find('.second').offset().left - paspartuWideMenu;
                            $j(this).find('.second').css('left', -left_position);
                            $j(this).find('.second').css('width', $j(window).width() - 2 * paspartuWideMenu)
                        }
                    }
                }
            }
            if (!menu_dropdown_height_set) {
                $j(menu_items[i]).data('original_height', $j(menu_items[i]).find('.second').height() + 'px');
                $j(menu_items[i]).find('.second').height(0)
            }
            if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
                $j(menu_items[i]).on("touchstart mouseenter", function() {
                    $j(menu_items[i]).find('.second').css({ 'height': $j(menu_items[i]).data('original_height'), 'overflow': 'visible', 'visibility': 'visible', 'opacity': '1' });
                    $j(menu_items[i]).find('.second').addClass('drop_down_start')
                }).on("mouseleave", function() {
                    $j(menu_items[i]).find('.second').css({ 'height': '0px', 'overflow': 'hidden', 'visibility': 'hidden', 'opacity': '0' });
                    $j(menu_items[i]).find('.second').removeClass('drop_down_start')
                })
            } else {
                if ($j('.drop_down.animate_height ').length) {
                    $j(menu_items[i]).mouseenter(function() {
                        $j(menu_items[i]).find('.second').css({ 'visibility': 'visible', 'height': '0px', 'opacity': '0' });
                        $j(menu_items[i]).find('.second').stop().animate({ 'height': $j(menu_items[i]).data('original_height'), opacity: 1 }, 200, function() { $j(menu_items[i]).find('.second').css('overflow', 'visible') })
                    }).mouseleave(function() { $j(menu_items[i]).find('.second').stop().animate({ 'height': '0px' }, 0, function() { $j(menu_items[i]).find('.second').css({ 'overflow': 'hidden', 'visibility': 'hidden' }) }) })
                } else {
                    var config = {
                        interval: 0,
                        over: function() {
                            setTimeout(function() {
                                $j(menu_items[i]).find('.second').addClass('drop_down_start');
                                $j(menu_items[i]).find('.second').stop().css({ 'height': $j(menu_items[i]).data('original_height') })
                            }, 180)
                        },
                        timeout: 180,
                        out: function() {
                            $j(menu_items[i]).find('.second').stop().css({ 'height': '0px' });
                            $j(menu_items[i]).find('.second').removeClass('drop_down_start')
                        }
                    };
                    $j(menu_items[i]).hoverIntent(config)
                }
            }
        }
    });
    sub_menu_items.each(function(i) {
        if (!menu_dropdown_height_set && $j('.drop_down.animate_height ').length) {
            $j(sub_menu_items[i]).data('original_height', $j(sub_menu_items[i]).find('ul').height() + 'px');
            $j(sub_menu_items[i]).find('ul').height(0)
        }
        if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) { $j(sub_menu_items[i]).on("touchstart mouseenter", function() { $j(sub_menu_items[i]).find('ul').css({ 'height': $j(sub_menu_items[i]).data('original_height'), 'overflow': 'visible', 'visibility': 'visible', 'opacity': '1' }) }).on("mouseleave", function() { $j(sub_menu_items[i]).find('ul').css({ 'height': '0px', 'overflow': 'hidden', 'visibility': 'hidden', 'opacity': '0' }) }) } else {
            if ($j('.drop_down.animate_height ').length) {
                $j(sub_menu_items[i]).mouseenter(function() {
                    $j(sub_menu_items[i]).find('ul').css({ 'visibility': 'visible', 'height': '0px', 'opacity': '0' });
                    $j(sub_menu_items[i]).find('ul').stop().animate({ 'height': $j(sub_menu_items[i]).data('original_height'), opacity: 1 }, 200, function() { $j(sub_menu_items[i]).find('ul').css('overflow', 'visible') })
                }).mouseleave(function() { $j(sub_menu_items[i]).find('ul').stop().animate({ 'height': '0px' }, 0, function() { $j(sub_menu_items[i]).find('ul').css({ 'overflow': 'hidden', 'visibility': 'hidden' }) }) })
            } else {
                var config_sub = { interval: 0, over: function() { setTimeout(function() { $j(sub_menu_items[i]).find('ul').addClass('drop_down_start') }, 180) }, timeout: 180, out: function() { $j(sub_menu_items[i]).find('ul').removeClass('drop_down_start') } };
                $j(sub_menu_items[i]).hoverIntent(config_sub)
            }
        }
    });
    $j('.drop_down ul li.wide ul li a').on('click', function(e) {
        if (e.which == 1) {
            var $this = $j(this);
            setTimeout(function() { $this.mouseleave() }, 800)
        }
    });
    menu_dropdown_height_set = true
}

function initVerticalMenu() {
    "use strict";
    if ($j('.no-touch .vertical_menu').hasClass('click')) {
        var menu_items = $j('.no-touch .vertical_menu_toggle > ul > li > a');
        var menu_items_2 = $j('.no-touch .vertical_menu_toggle ul li ul li a');
        menu_items.each(function(i) {
            if ($j(menu_items[i]).parent().hasClass('has_sub')) {
                $j(menu_items[i]).on('click', function(e) {
                    e.preventDefault();
                    if (!$j(this).parent().hasClass('open') && !$j(this).parent().hasClass('current-menu-ancestor')) {
                        $j('.no-touch .vertical_menu_toggle > ul > li').removeClass('open current-menu-ancestor');
                        $j('.no-touch .vertical_menu_toggle > ul > li').find('.second').slideUp('fast');
                        $j(this).parent().addClass('open');
                        $j(this).parent().find('.second').slideDown('slow', function() { $j('.vertical_menu_area.with_scroll').getNiceScroll().resize() })
                    } else {
                        $j(this).parent().removeClass('open');
                        $j(this).parent().find('.second').slideUp('fast', function() {
                            $j(this).parent().removeClass('current-menu-ancestor');
                            $j('.vertical_menu_area.with_scroll').getNiceScroll().resize()
                        })
                    }
                    return false
                })
            }
        });
        menu_items_2.each(function(i) {
            if ($j(menu_items_2[i]).parent().hasClass('menu-item-has-children')) {
                $j(menu_items_2[i]).on('click', function(e) {
                    e.preventDefault();
                    if (!$j(this).parent().hasClass('open') && !$j(this).parent().hasClass('current_page_parent')) {
                        $j('.no-touch .vertical_menu_toggle ul li ul li').removeClass('open current_page_parent');
                        $j('.no-touch .vertical_menu_toggle ul li ul li').find('ul').slideUp('fast');
                        $j(this).parent().addClass('open');
                        $j(this).parent().find('ul').slideDown('slow', function() { $j('.vertical_menu_area.with_scroll').getNiceScroll().resize() })
                    } else {
                        $j(this).parent().removeClass('open');
                        $j(this).parent().find('ul').slideUp('fast', function() {
                            $j(this).parent().removeClass('current_page_parent');
                            $j('.vertical_menu_area.with_scroll').getNiceScroll().resize()
                        })
                    }
                    return false
                })
            }
        })
    } else if ($j('.vertical_menu').hasClass('vertical_menu_side')) {
        if ($j('body').hasClass('vertical_menu_right')) { var animateOpen = { 'right': '0%' }; var animateClose = { 'right': '-180%' } } else { var animateOpen = { 'left': '0%' }; var animateClose = { 'left': '-180%' } }
        var menu_items = $j('.vertical_menu_side > ul > li > a');
        var menu_items_2 = $j('.vertical_menu_side ul li ul li a');
        menu_items.each(function(i) {
            if ($j(menu_items[i]).parent().hasClass('has_sub')) {
                var menu_url = $j(this).attr("href");
                var menu_text = $j(this).text();
                var li = $j("<li />", { "class": 'prev_level' });
                var link = $j("<a />", { "href": menu_url, "html": '<i class="mkd_menu_arrow fa fa-angle-left"></i>' + menu_text }).appendTo(li);
                $j(this).parent().find('.second > div > ul').prepend(li);
                $j(menu_items[i]).on('click', function(e) {
                    e.preventDefault();
                    $j('.vertical_menu_side > ul > li').removeClass('open current-menu-ancestor');
                    $j(this).parent().addClass('open');
                    if (!$j(this).parent().hasClass('prev_level')) { $j(this).parent().find('.second').css('display', 'block').animate(animateOpen, 800, function() { $j('.vertical_menu_area.with_scroll').getNiceScroll().resize() }) }
                    return false
                })
            }
        });
        $j('.vertical_menu_side ul li ul > li.prev_level > a').on('click', function(e) {
            e.preventDefault();
            $j(this).closest('.second').animate(animateClose, 800, function() {
                $j(this).css('display', 'none');
                $j('.vertical_menu_area.with_scroll').getNiceScroll().resize()
            });
            return false
        });
        menu_items_2.each(function(i) {
            if ($j(menu_items_2[i]).parent().hasClass('menu-item-has-children')) {
                var menu_url = $j(this).attr("href");
                var menu_text = $j(this).text();
                var li = $j("<li />", { "class": 'prev_level' });
                var link = $j("<a />", { "href": menu_url, "html": '<i class="mkd_menu_arrow fa fa-angle-left"></i>' + menu_text }).appendTo(li);
                $j(this).next('ul').prepend(li);
                $j(menu_items_2[i]).on('click', function(e) {
                    e.preventDefault();
                    $j('.vertical_menu_toggle ul li ul li').removeClass('open current_page_parent');
                    $j(this).parent().addClass('open');
                    if (!$j(this).parent().hasClass('prev_level')) { $j(this).next('ul').css('display', 'block').animate(animateOpen, 800, function() { $j('.vertical_menu_area.with_scroll').getNiceScroll().resize() }) }
                    return false
                })
            }
        });
        $j('.vertical_menu_side ul li ul li ul li.prev_level a').on('click', function(e) {
            e.preventDefault();
            $j(this).closest('ul').animate(animateClose, 800, function() {
                $j(this).css('display', 'none');
                $j('.vertical_menu_area.with_scroll').getNiceScroll().resize()
            });
            return false
        })
    } else if ($j('.vertical_menu').hasClass('vertical_menu_to_content')) {
        var menu_items = $j('.no-touch .vertical_menu_to_content > ul > li');
        var menu_items_2 = $j('.no-touch .vertical_menu_to_content ul li ul li');
        menu_items.each(function(i) {
            if ($j(menu_items[i]).hasClass('has_sub')) {
                var subitems_number = $j(menu_items[i]).find('.inner > ul > li').length;
                $j(menu_items[i]).hoverIntent({
                    over: function() {
                        $j(menu_items[i]).addClass('open');
                        $j(menu_items[i]).find('.second').addClass('vertical_menu_start')
                    },
                    out: function() {
                        $j(menu_items[i]).removeClass('open');
                        $j(menu_items[i]).find('.second').removeClass('vertical_menu_start')
                    },
                    timeout: 300
                })
            }
        });
        menu_items_2.each(function(i) {
            if ($j(menu_items_2[i]).hasClass('menu-item-has-children')) {
                var subitems_number = $j(menu_items_2[i]).find('ul > li').length;
                $j(menu_items_2[i]).hoverIntent({
                    over: function() {
                        $j(menu_items_2[i]).addClass('open');
                        $j(menu_items_2[i]).find('ul').addClass('vertical_submenu_start')
                    },
                    out: function() {
                        $j(menu_items_2[i]).removeClass('open');
                        $j(menu_items_2[i]).find('ul').removeClass('vertical_submenu_start')
                    },
                    timeout: 300
                })
            }
        })
    } else {
        var menu_items = $j('.no-touch .vertical_menu_toggle > ul > li');
        var menu_items_2 = $j('.no-touch .vertical_menu_toggle ul li ul li');
        menu_items.each(function(i) {
            if ($j(menu_items[i]).hasClass('has_sub')) {
                var subitems_number = $j(menu_items[i]).find('.inner > ul > li').length;
                $j(menu_items[i]).hoverIntent({
                    over: function() {
                        $j(menu_items[i]).addClass('open');
                        $j(menu_items[i]).find('.second').slideDown(subitems_number * 40, 'easeInOutSine', function() { $j('.vertical_menu_area.with_scroll').getNiceScroll().resize() })
                    },
                    out: function() {
                        $j(menu_items[i]).removeClass('open');
                        $j(menu_items[i]).find('.second').slideUp(subitems_number * 40, 'easeInOutSine')
                    },
                    timeout: 1000
                })
            }
        });
        menu_items_2.each(function(i) {
            if ($j(menu_items_2[i]).hasClass('menu-item-has-children')) {
                var subitems_number = $j(menu_items_2[i]).find('ul > li').length;
                $j(menu_items_2[i]).hoverIntent({
                    over: function() {
                        $j(menu_items_2[i]).addClass('open');
                        $j(menu_items_2[i]).find('ul').slideDown(subitems_number * 40, 'easeInOutSine', function() { $j('.vertical_menu_area.with_scroll').getNiceScroll().resize() })
                    },
                    out: function() {
                        $j(menu_items_2[i]).removeClass('open');
                        $j(menu_items_2[i]).find('ul').slideUp(subitems_number * 40, 'easeInOutSine')
                    },
                    timeout: 1000
                })
            }
        })
    }
}

function initVerticalMobileMenu() {
    "use strict";
    if ($j('.touch .vertical_menu').hasClass('vertical_menu_to_content')) {
        var menu_items = $j('.touch .vertical_menu_to_content > ul > li');
        var menu_items_a = $j('.touch .vertical_menu_to_content > ul > li > a');
        var menu_items_2 = $j('.touch .vertical_menu_to_content ul li ul li');
        var menu_items_2_a = $j('.touch .vertical_menu_to_content ul li ul li > a');
        menu_items.each(function(i) {
            if ($j(menu_items[i]).hasClass('has_sub')) {
                var subitems_number = $j(menu_items[i]).find('.inner > ul > li').length;
                $j(menu_items_a[i]).on('tap click', function(e) {
                    if ($j(menu_items[i]).find('.second').hasClass('vertical_menu_start')) {
                        $j(menu_items[i]).removeClass('open');
                        $j(menu_items[i]).find('.second').removeClass('vertical_menu_start')
                    } else {
                        $j(menu_items[i]).addClass('open');
                        $j(menu_items[i]).siblings('.open').find('.vertical_menu_start').removeClass('vertical_menu_start');
                        $j(menu_items[i]).siblings('.open').removeClass('open');
                        $j(menu_items[i]).find('.second').addClass('vertical_menu_start')
                    }
                })
            }
        });
        menu_items_2.each(function(i) {
            if ($j(menu_items_2[i]).hasClass('menu-item-has-children')) {
                var subitems_number = $j(menu_items_2[i]).find('ul > li').length;
                $j(menu_items_2_a[i]).on('tap click', function(e) {
                    if ($j(menu_items_2[i]).find('ul').hasClass('vertical_submenu_start')) {
                        $j(menu_items_2[i]).removeClass('open');
                        $j(menu_items_2[i]).find('ul').removeClass('vertical_submenu_start')
                    } else {
                        $j(menu_items_2[i]).addClass('open');
                        $j(menu_items_2[i]).siblings('.open').find('.vertical_submenu_start').removeClass('vertical_submenu_start');
                        $j(menu_items_2[i]).siblings('.open').removeClass('open');
                        $j(menu_items_2[i]).find('ul').addClass('vertical_submenu_start')
                    }
                })
            }
        })
    } else {
        $j('.touch .vertical_menu_toggle > ul > li.has_sub > a').on('tap click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            if ($j(this).next('div.second').is(":visible")) {
                $j(this).parents('.touch .vertical_menu_toggle > ul > li.has_sub').removeClass('open');
                $j(this).next('div.second').slideUp(200)
            } else {
                $j(this).parents('.touch .vertical_menu_toggle > ul > li.has_sub').addClass('open');
                $j(this).next('div.second').slideDown(200)
            }
        });
        $j('.touch .vertical_menu_toggle ul li ul li.sub > a').on('tap click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            if ($j(this).next('ul').is(":visible")) {
                $j(this).parents('.touch .vertical_menu_toggle ul li ul li').removeClass('open');
                $j(this).next('ul').slideUp(200)
            } else {
                $j(this).parents('.touch .vertical_menu_toggle ul li ul li').addClass('open');
                $j(this).next('ul').slideDown(200)
            }
        })
    }
}

function checkVerticalMenuTransparency() {
    "use strict";
    if ($scroll !== 0) {
        $j('body.vertical_menu_transparency').removeClass('vertical_menu_transparency_on');
        $j('body.vertical_menu_transparency').addClass('vertical_menu_transparency_off');
        $j('body.vertical_menu_background_opacity_over_slider').removeClass('vertical_menu_background_opacity_over_slider_on');
        $j('body.vertical_menu_background_opacity_over_slider').addClass('vertical_menu_background_opacity_over_slider_off')
    } else {
        $j('body.vertical_menu_transparency').addClass('vertical_menu_transparency_on');
        $j('body.vertical_menu_transparency').removeClass('vertical_menu_transparency_off');
        $j('body.vertical_menu_background_opacity_over_slider').addClass('vertical_menu_background_opacity_over_slider_on');
        $j('body.vertical_menu_background_opacity_over_slider').removeClass('vertical_menu_background_opacity_over_slider_off')
    }
    if ($j(".content.has_slider").length == 0) {
        $j('body.vertical_menu_background_opacity_over_slider').removeClass('vertical_menu_background_opacity_over_slider_on');
        $j('body.vertical_menu_background_opacity_over_slider').addClass('vertical_menu_background_opacity_over_slider_off')
    }
}(function() {
    "use strict";
    var Outclick, outclick, _this = this;
    Outclick = (function() {
        OutclickFunction.prototype.name = 'Outclick';

        function OutclickFunction() { this.objects = [] }
        OutclickFunction.prototype.check = function(element, event) { return !element.is(event.target) && element.has(event.target).length === 0 };
        OutclickFunction.prototype.trigger = function(e) {
            var execute, _this = this;
            execute = false;
            return $j.each(this.objects, function(index, el) { if (_this.check(el.container, e)) { if (el.related.length < 1) { execute = true } else { $j.each(el.related, function(index, relation) { if (_this.check(relation, e)) { return execute = true } else { execute = false; return false } }) } if (execute) { return el.callback.call(el.container) } } })
        };
        return OutclickFunction
    })();
    outclick = new Outclick();
    $j.fn.outclick = function(options) {
        var _this = this;
        if (options == null) { options = {} }
        options.related || (options.related = []);
        options.callback || (options.callback = function() { return _this.hide() });
        return outclick.objects.push({ container: this, related: options.related, callback: options.callback })
    };
    $j(document).mouseup(function(e) { return outclick.trigger(e) })
}).call(this);

function showHideVerticalMenu() {
    "use strict";
    if ($j('.vertical_menu_hidden').length) {
        var vertical_menu = $j('aside.vertical_menu_area');
        var vertical_menu_bottom_logo = $j('.vertical_menu_area_bottom_logo');
        var hovered_flag = true;
        $j(document).on('click', ".vertical_menu_hidden_button, .vertical_menu_area_bottom_logo a, .vertical_menu_hidden .active nav.vertical_menu.vertical_menu_side ul li:not(.has_sub):not(.menu-item-has-children):not(.prev_level) a:not([href='#']), .vertical_menu_hidden .active nav.vertical_menu.click ul li:not(.has_sub):not(.menu-item-has-children) a:not([href='#']),  .vertical_menu_hidden .active nav.vertical_menu_toggle:not(.click) ul li a:not([href='#'])", function(e) {
            if (!$j(this).closest('.vertical_menu').length) { e.preventDefault() }
            if (hovered_flag) {
                hovered_flag = false;
                current_scroll = $j(window).scrollTop();
                vertical_menu.addClass('active');
                vertical_menu_bottom_logo.addClass('active');
                vertical_menu.find('.menu_icon_wrapper').width(vertical_menu.find('.menu_icon_wrapper i').width() - 3)
            } else {
                hovered_flag = true;
                vertical_menu.removeClass('active');
                vertical_menu_bottom_logo.removeClass('active');
                vertical_menu.find('.menu_icon_wrapper').width('')
            }
        });
        $j(window).scroll(function() {
            if (Math.abs($scroll - current_scroll) > 400) {
                hovered_flag = true;
                vertical_menu.removeClass('active');
                vertical_menu_bottom_logo.removeClass('active')
            }
        });
        $j(vertical_menu).outclick({
            callback: function() {
                hovered_flag = true;
                vertical_menu.removeClass('active');
                vertical_menu_bottom_logo.removeClass('active');
                vertical_menu.find('.menu_icon_wrapper').width('')
            }
        })
    }
}(function($) {
    "use strict";
    $.fn.countTo = function(options) {
        options = $.extend({}, $.fn.countTo.defaults, options || {});
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;
        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));
                if (typeof(options.onUpdate) === 'function') { options.onUpdate.call(_this, value) }
                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;
                    if (typeof(options.onComplete) === 'function') { options.onComplete.call(_this, value) }
                }
            }
        })
    };
    $.fn.countTo.defaults = { from: 0, to: 100, speed: 1000, refreshInterval: 100, decimals: 0, onUpdate: null, onComplete: null }
})(jQuery);

function initToCounter() {
    "use strict";
    if ($j('.counter.zero').length) {
        $j('.counter.zero').each(function() {
            if (!$j(this).hasClass('executed')) {
                $j(this).addClass('executed');
                if ($j(this).parents('.vertical_split_slider').length) {
                    $j(this).parents('.mkd_counter_holder').css('opacity', '1');
                    var $max = parseFloat($j(this).text());
                    $j(this).countTo({ from: 0, to: $max, speed: 1800, refreshInterval: 100 })
                } else {
                    $j(this).appear(function() {
                        $j(this).parents('.mkd_counter_holder').css('opacity', '1');
                        var $max = parseFloat($j(this).text());
                        $j(this).countTo({ from: 0, to: $max, speed: 1800, refreshInterval: 100 })
                    }, { accX: 0, accY: element_appear_amount })
                }
            }
        })
    }
}

function initCounter() {
    "use strict";
    if ($j('.counter.random').length) {
        $j('.counter.random').each(function() {
            if (!$j(this).hasClass('executed')) {
                $j(this).addClass('executed');
                if ($j(this).parents('.vertical_split_slider').length) {
                    $j(this).parents('.mkd_counter_holder').css('opacity', '1');
                    $j(this).absoluteCounter({ speed: 2000, fadeInDelay: 1000 })
                } else {
                    $j(this).appear(function() {
                        $j(this).parents('.mkd_counter_holder').css('opacity', '1');
                        $j(this).absoluteCounter({ speed: 2000, fadeInDelay: 1000 })
                    }, { accX: 0, accY: element_appear_amount })
                }
            }
        })
    }
}

function initCountdown() {
    "use strict";
    if ($j('.countdown').length) {
        $j('.countdown').each(function() {
            var countdownId = $j(this).attr('id');
            var $this = $j('#' + countdownId);
            var year = 0;
            var month = 0;
            var day = 0;
            var hour = 0;
            var minute = 0;
            var monthsLabel;
            var monthLabel;
            var daysLabel;
            var dayLabel;
            var hoursLabel;
            var hourLabel;
            var minutesLabel;
            var minuteLabel;
            var secondsLabel;
            var secondLabel;
            var tickf;
            var timezone;
            var digitfs;
            var labelfs;
            var color;
            if (typeof $this.data('year') !== 'undefined' && $this.data('year') !== false) { year = $this.data('year') }
            if (typeof $this.data('month') !== 'undefined' && $this.data('month') !== false) { month = $this.data('month') }
            if (typeof $this.data('day') !== 'undefined' && $this.data('day') !== false) { day = $this.data('day') }
            if (typeof $this.data('hour') !== 'undefined' && $this.data('hour') !== false) { hour = $this.data('hour') }
            if (typeof $this.data('minute') !== 'undefined' && $this.data('minute') !== false) { minute = $this.data('minute') }
            if (typeof $this.data('monthslabel') !== 'undefined' && $this.data('monthslabel') !== false) { monthsLabel = $this.data('monthslabel') }
            if (typeof $this.data('monthlabel') !== 'undefined' && $this.data('monthlabel') !== false) { monthLabel = $this.data('monthlabel') }
            if (typeof $this.data('dayslabel') !== 'undefined' && $this.data('dayslabel') !== false) { daysLabel = $this.data('dayslabel') }
            if (typeof $this.data('daylabel') !== 'undefined' && $this.data('daylabel') !== false) { dayLabel = $this.data('daylabel') }
            if (typeof $this.data('hourslabel') !== 'undefined' && $this.data('hourslabel') !== false) { hoursLabel = $this.data('hourslabel') }
            if (typeof $this.data('hourlabel') !== 'undefined' && $this.data('hourlabel') !== false) { hourLabel = $this.data('hourlabel') }
            if (typeof $this.data('minuteslabel') !== 'undefined' && $this.data('minuteslabel') !== false) { minutesLabel = $this.data('minuteslabel') }
            if (typeof $this.data('minutelabel') !== 'undefined' && $this.data('minutelabel') !== false) { minuteLabel = $this.data('minuteLabel') }
            if (typeof $this.data('secondslabel') !== 'undefined' && $this.data('secondslabel') !== false) { secondsLabel = $this.data('secondslabel') }
            if (typeof $this.data('secondlabel') !== 'undefined' && $this.data('secondlabel') !== false) { secondLabel = $this.data('secondlabel') }
            if (typeof $this.data('tickf') !== 'undefined' && $this.data('tickf') !== false) { tickf = $this.data('tickf') }
            if (typeof $this.data('timezone') !== 'undefined' && $this.data('timezone') !== false) { timezone = $this.data('timezone') }
            if (typeof $this.data('digitfs') !== 'undefined' && $this.data('digitfs') !== false) { digitfs = $this.data('digitfs') }
            if (typeof $this.data('labelfs') !== 'undefined' && $this.data('labelfs') !== false) { labelfs = $this.data('labelfs') }
            if (typeof $this.data('color') !== 'undefined' && $this.data('color') !== false) { color = $this.data('color') }
            $this.countdown({ until: new Date(year, month - 1, day, hour, minute, 44), labels: ['Years', monthsLabel, 'Weeks', daysLabel, hoursLabel, minutesLabel, secondsLabel], labels1: ['Year', monthLabel, 'Week', dayLabel, hourLabel, minuteLabel, secondLabel], format: 'ODHMS', timezone: timezone, padZeroes: true, significant: 0, onTick: function() { if ((digitfs !== 'undefined' && digitfs !== '') || (color !== 'undefined' && color !== '')) { $this.find('.countdown-amount').css('font-size', digitfs + 'px').css('line-height', digitfs + 'px').css('color', color) } if ((labelfs !== 'undefined' && labelfs !== '') || (color !== 'undefined' && color !== '')) { $this.find('.countdown-period').css('font-size', labelfs + 'px').css('color', color) } if (color !== 'undefined' && color !== '') { $this.find('.countdown_separator').css('background-color', color) } } })
        })
    }
}

function initProgressBars() {
    "use strict";
    if ($j('.mkd_progress_bar').length) {
        if ($j('.vertical_split_slider').length) { var acc = 0 } else { var acc = element_appear_amount }
        $j('.mkd_progress_bar').each(function() {
            if ($j(this).parents('.vertical_split_slider').length) {
                initToCounterHorizontalProgressBar($j(this));
                var percentage = $j(this).find('.progress_content').data('percentage');
                $j(this).find('.progress_content').css('width', '0%');
                $j(this).find('.progress_content').animate({ 'width': percentage + '%' }, 1800);
                $j(this).find('.progress_number').css('left', '0%');
                $j(this).find('.progress_number').animate({ 'left': percentage + '%' }, 1800)
            } else {
                $j(this).appear(function() {
                    initToCounterHorizontalProgressBar($j(this));
                    if ($j(this).find('.floating.floating_inside') !== 0) {
                        var floatingInsideMargin = $j(this).find('.progress_content_outer').height();
                        floatingInsideMargin += parseFloat($j(this).find('.progress_title_holder').css('padding-bottom'));
                        floatingInsideMargin += parseFloat($j(this).find('.progress_title_holder').css('margin-bottom'));
                        $j(this).find('.floating_inside').css('margin-bottom', -(floatingInsideMargin) + 'px')
                    }
                    var percentage = $j(this).find('.progress_content').data('percentage');
                    $j(this).find('.progress_content').css('width', '0%');
                    $j(this).find('.progress_content').animate({ 'width': percentage + '%' }, 1800);
                    $j(this).find('.progress_number').css('left', '0%');
                    $j(this).find('.progress_number').animate({ 'left': percentage + '%' }, 1800)
                }, { accX: 0, accY: acc })
            }
        })
    }
}

function initToCounterHorizontalProgressBar($this) {
    "use strict";
    var percentage = parseFloat($this.find('.progress_content').data('percentage'));
    if ($this.find('.progress_number span.percent').length) {
        $this.find('.progress_number span.percent').each(function() {
            $j(this).parents('.progress_number_wrapper').css('opacity', '1');
            $j(this).countTo({ from: 0, to: percentage, speed: 1800, refreshInterval: 80 })
        })
    }
}

function initListAnimation() {
    "use strict";
    if ($j('.animate_list').length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.animate_list').each(function() {
            $j(this).appear(function() {
                $j(this).find("li").each(function(l) {
                    var k = $j(this);
                    setTimeout(function() { k.animate({ opacity: 1, left: 0 }, 200) }, 220 * l)
                })
            }, { accX: 0, accY: element_appear_amount })
        })
    }
}

function initPieChart() {
    "use strict";
    if ($j('.mkd_percentage').length) {
        $j('.mkd_percentage').each(function() {
            var $barColor = piechartcolor;
            if ($j(this).data('active') !== "") { $barColor = $j(this).data('active') }
            var $trackColor = '#f6f6f5';
            if ($j(this).data('noactive') !== "") { $trackColor = $j(this).data('noactive') }
            var $line_width = 10;
            if ($j(this).data('linewidth') !== "") { $line_width = $j(this).data('linewidth') }
            var $size = 145;
            if ($j(this).data('size') !== "") { $size = $j(this).data('size') }
            if ($j(this).data('alignment') !== "") { var $alignment = $j(this).data('alignment'); if ($alignment == 'left') { $j(this).css('margin-left', '0') } else if ($alignment == 'right') { $j(this).css('margin-right', '0') } }
            $j(this).appear(function() {
                initToCounterPieChart($j(this));
                $j(this).parent().css('opacity', '1');
                $j(this).easyPieChart({ barColor: $barColor, trackColor: $trackColor, scaleColor: false, lineCap: 'butt', lineWidth: $line_width, animate: 1800, size: $size });
                if ($j(this).hasClass('has_outer_border')) { $j(this).css({ "width": $size + 22 + "px", "height": $size + 22 + "px", "line-height": $size + 22 + "px" }) }
            }, { accX: 0, accY: element_appear_amount })
        })
    }
}

function initPieChartWithIcon(allowInit) {
    "use strict";
    if (typeof(allowInit) === 'undefined') { allowInit = false }
    if ($j('.mkd_percentage_with_icon').length) {
        $j('.mkd_percentage_with_icon').each(function() {
            var $barColor = piechartcolor;
            if ($j(this).data('active') !== "") { $barColor = $j(this).data('active') }
            var $trackColor = '#f6f6f5';
            if ($j(this).data('noactive') !== "") { $trackColor = $j(this).data('noactive') }
            var $line_width = 10;
            if ($j(this).data('linewidth') !== "") { $line_width = $j(this).data('linewidth') }
            var $size = 145;
            if ($j(this).data('size') !== "") { $size = $j(this).data('size') }
            if ((!$j(this).parents('.more_facts_holder').length) || allowInit !== false) {
                $j(this).appear(function() {
                    $j(this).parent().css('opacity', '1');
                    $j(this).css('opacity', '1');
                    $j(this).easyPieChart({ barColor: $barColor, trackColor: $trackColor, scaleColor: false, lineCap: 'butt', lineWidth: $line_width, animate: 1800, size: $size });
                    if ($j(this).hasClass('has_outer_border')) { $j(this).css({ "width": $size + 22 + "px", "height": $size + 22 + "px", "line-height": $size + 22 + "px" }) }
                }, { accX: 0, accY: element_appear_amount })
            }
        })
    }
}

function initToCounterPieChart($this) {
    "use strict";
    $j($this).css('opacity', '1');
    var $max = parseFloat($j($this).find('.tocounter').text());
    $j($this).find('.tocounter').countTo({ from: 0, to: $max, speed: 1800, refreshInterval: 80 })
}

function initPortfolio() {
    "use strict";
    if ($j('.projects_holder_outer:not(.masonry_with_space)').length) {
        $j('.projects_holder_outer').each(function() {
            $j(this).appear(function() {
                $j('.filter_holder .filter').on('click', function() {
                    var $this = $j(this).text();
                    var dropLabels = $j('.filter_holder').find('.label span');
                    dropLabels.each(function() { $j(this).text($this) })
                });
                var currentPortfolio = $j(this).find('.projects_holder');
                var v = 1;
                if (currentPortfolio.hasClass('v1')) { var timeArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25) } else if (currentPortfolio.hasClass('v2')) { var timeArray = new Array(1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20) } else if (currentPortfolio.hasClass('v3')) { var timeArray = new Array(1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6, 5, 6, 7, 6, 7, 8, 7, 8, 9, 8, 9, 10, 9, 10, 11, 10, 11, 12, 11, 12, 13, 12, 13, 14, 13, 14, 15, 14, 15, 16, 15, 16, 17, 16, 17, 18, 17, 18, 19, 18, 19, 20, 19, 20, 21, 20, 21, 22) } else if (currentPortfolio.hasClass('v4')) { var timeArray = new Array(1, 2, 3, 4, 2, 3, 4, 5, 3, 4, 5, 6, 4, 5, 6, 7, 5, 6, 7, 8, 6, 7, 8, 9, 7, 8, 9, 10, 8, 9, 10, 11, 9, 10, 11, 12, 10, 11, 12, 13, 11, 12, 13, 14, 12, 13, 14, 15, 13, 14, 15, 16, 14, 15, 16, 17, 15, 16, 17, 18, 16, 17, 18, 19, 17, 18, 19, 20, 18, 19, 20, 21) } else if (currentPortfolio.hasClass('v5')) { var timeArray = new Array(1, 2, 3, 4, 5, 2, 3, 4, 5, 6, 3, 4, 5, 6, 7, 4, 5, 6, 7, 8, 5, 6, 7, 8, 9, 6, 7, 8, 9, 10, 7, 8, 9, 10, 11, 8, 9, 10, 11, 12, 9, 10, 11, 12, 13, 10, 11, 12, 13, 14, 11, 12, 13, 14, 15, 12, 13, 14, 15, 16, 13, 14, 15, 16, 17, 14, 15, 16, 17, 18, 15, 16, 17, 18, 19, 20, 16, 17, 18, 19, 20, 17, 18, 19, 20, 21, 18, 19, 20, 21, 22, 19, 20, 21, 22, 23) } else if (currentPortfolio.hasClass('v6')) { var timeArray = new Array(1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 7, 3, 4, 5, 6, 7, 8, 4, 5, 6, 7, 8, 9, 5, 6, 7, 8, 9, 10, 6, 7, 8, 9, 10, 11, 7, 8, 9, 10, 11, 12, 8, 9, 10, 11, 12, 13, 9, 10, 11, 12, 13, 14, 10, 11, 12, 13, 14, 15, 11, 12, 13, 14, 15, 16, 12, 13, 14, 15, 16, 17, 13, 14, 15, 16, 17, 18, 14, 15, 16, 17, 18, 19, 15, 16, 17, 18, 19, 20, 16, 17, 18, 19, 20, 21, 17, 18, 19, 20, 21, 22) }
                currentPortfolio.mixitup({
                    showOnLoad: 'all',
                    transitionSpeed: 600,
                    minHeight: 180,
                    onMixLoad: function() {
                        $j('.projects_holder').addClass('hideItems');
                        $j('.projects_holder article').css('visibility', 'visible');
                        if (currentPortfolio.hasClass('portfolio_one_by_one')) {
                            currentPortfolio.find('article').each(function(l) {
                                var currentPortfolioItem = $j(this);
                                if ($j('.vertical_split_slider').length) { var acc = 0 } else { var acc = -180 }
                                setTimeout(function() { currentPortfolioItem.addClass('show') }, 100 * l)
                            })
                        }
                        if (currentPortfolio.hasClass('slide_from_left')) {
                            currentPortfolio.find('article').each(function(i) {
                                var currentPortfolioItem = $j(this);
                                setTimeout(function() { currentPortfolioItem.addClass('show') }, (Math.random() * 200))
                            })
                        }
                        if (currentPortfolio.hasClass('slide_from_top')) {
                            currentPortfolio.find('article').each(function(i) {
                                var currentPortfolioItem = $j(this);
                                setTimeout(function() { currentPortfolioItem.addClass('show') }, timeArray[i] * 80)
                            })
                        }
                        if (currentPortfolio.hasClass('diagonal_fade')) {
                            currentPortfolio.find('article').each(function(i) {
                                var currentPortfolioItem = $j(this);
                                setTimeout(function() { currentPortfolioItem.addClass('show') }, timeArray[i] * 80)
                            })
                        }
                        initParallax()
                    },
                    onMixEnd: function() { initParallax() }
                })
            })
        })
    }
}

function initPortfolioZIndex() { "use strict"; if ($j('.projects_holder_outer.portfolio_no_space').length) { $j('.no_space.hover_text article').each(function(i) { $j(this).css('z-index', i + 10) }) } }(function($) {
    "use strict";
    var $window = $(window);
    $.fn.masonryParallax = function(speedFactor, outerHeight, startPosition) {
        var $this = $(this);
        var getHeight;
        var firstTop;
        var startPositionAdd = 0;
        firstTop = $this.offset().top;
        if (outerHeight) { getHeight = function(jqo) { return jqo.outerHeight(true) } } else { getHeight = function(jqo) { return jqo.height() } }
        if (startPosition != 0) { startPositionAdd = startPosition }
        if (arguments.length < 1 || speedFactor === null) speedFactor = 0.1;
        if (arguments.length < 2 || outerHeight === null) outerHeight = true;
        var top = $this.offset().top;
        var height = getHeight($this);

        function update() {
            if (top + height < $scroll || top > $scroll + $window_height) { return }
            $this.css('transform', 'translate3d(0px, ' + (Math.round((firstTop - height - $scroll) * speedFactor + startPositionAdd)) + 'px, 0px)')
        }
        $window.bind('scroll', update).resize(update);
        update()
    }
})(jQuery);

function initPortfolioMasonry() {
    "use strict";
    if ($j('.projects_masonry_holder, .masonry_with_space').length) {
        $j('.projects_masonry_holder, .masonry_with_space .projects_holder').each(function() {
            var $this = $j(this);
            $this.waitForImages(function() {
                $this.animate({ opacity: 1 });
                if ($j('.projects_masonry_holder').length) { resizeMasonry($j('.portfolio_masonry_grid_sizer').width()) }
                $this.isotope({ itemSelector: '.portfolio_masonry_item, .masonry_with_space .mix', masonry: { columnWidth: '.portfolio_masonry_grid_sizer' } });
                if ($this.hasClass('portfolio_one_by_one')) {
                    $this.find('article').each(function(l) {
                        var $this = $j(this);
                        setTimeout(function() { $this.addClass('show') }, 100 * l)
                    })
                }
                if ($this.hasClass('portfolio_fade_from_bottom')) {
                    $this.find('article').each(function(l) {
                        $j(this).appear(function() {
                            var $this = $j(this);
                            $this.addClass('show')
                        }, { accX: 0, accY: element_appear_amount })
                    })
                }
                $this.find('.portfolio_masonry_item.parallax_item').each(function(i) { $j(this).masonryParallax($this.data('parallax_item_speed'), true, $this.data('parallax_item_offset')) })
            })
        });
        setPortfolioMasZIndex();
        if ($j('.projects_masonry_holder').length) {
            setPortfolioMasZIndex();
            $j(window).resize(function() {
                resizeMasonry($j('.portfolio_masonry_grid_sizer').width());
                $j('.projects_masonry_holder, .masonry_with_space').isotope('reloadItems');
                setPortfolioMasZIndex()
            });
            $j('.portfolio_main_holder.projects_masonry_holder.masonry_with_padding').find('article:not(.large_height)').each(function() {
                var width = Math.floor($j(this)[0].getBoundingClientRect().width - 20);
                $j(this).find('.image_holder span.image').css("max-width", width + "px")
            })
        }
    }
}

function resizeMasonry(size) {
    "use strict";
    var portfolio_masonry_item_default = $j('.portfolio_main_holder .portfolio_masonry_item.default');
    var portfolio_masonry_item_large_width = $j('.portfolio_main_holder .portfolio_masonry_item.large_width');
    var portfolio_masonry_item_large_height = $j('.portfolio_main_holder .portfolio_masonry_item.large_height');
    var portfolio_masonry_item_large_width_height = $j('.portfolio_main_holder .portfolio_masonry_item.large_width_height');
    portfolio_masonry_item_default.css('height', size);
    portfolio_masonry_item_large_height.css('height', 2 * size);
    if ($window_width < 480) {
        portfolio_masonry_item_large_width_height.css('height', size);
        portfolio_masonry_item_large_width.css('height', size / 2)
    } else {
        portfolio_masonry_item_large_width_height.css('height', Math.round(2 * size));
        portfolio_masonry_item_large_width.css('height', size)
    }
}

function setPortfolioMasZIndex() {
    "use strict";
    var $elemXPos = {};
    var $elemZIndex = {};
    $j('.projects_masonry_holder article').each(function() { $elemXPos[$j(this).index()] = getPortfolioXPos($j(this).css('left')) });
    var $elemXPosArray = $j.map($elemXPos, function(value) { return value });
    $elemXPosArray = cleanPortfolioMasXArray($elemXPosArray);
    $elemXPosArray.sort(function(x, y) { return x - y });
    for (var i = 0; i < $elemXPosArray.length; i++) { $elemZIndex[$elemXPosArray[i]] = i * 10 }
    $j.each($elemXPos, function(key, val) {
        var $zi;
        var $bgd = val;
        $j.each($elemZIndex, function(key, val) { if ($bgd == key) { $zi = val + 1 } });
        $j('.projects_masonry_holder article:eq(' + key + ')').css('z-index', $zi)
    })
}

function getPortfolioXPos(css) { "use strict"; return css.substr(0, css.length - 2) }

function cleanPortfolioMasXArray($elemXPosArray) { "use strict"; var i; var length = $elemXPosArray.length; var $elemXPosOutArray = []; var tmp = {}; for (i = 0; i < length; i++) { tmp[$elemXPosArray[i]] = 0 } for (i in tmp) { $elemXPosOutArray.push(i) } return $elemXPosOutArray }

function initPortfolioMasonryFilter() {
    "use strict";
    var portfolioIsotopeAnimation = null;
    $j('.filter:first').addClass('current');
    $j('.filter').click(function() {
        clearTimeout(portfolioIsotopeAnimation);
        $j('.isotope, .isotope .isotope-item').css('transition-duration', '0.8s');
        portfolioIsotopeAnimation = setTimeout(function() { $j('.isotope, .isotope .isotope-item').css('transition-duration', '0s') }, 700);
        var selector = $j(this).attr('data-filter');
        $j('.projects_masonry_holder, .masonry_with_space .projects_holder').isotope({ filter: selector });
        $j(".filter").removeClass("current");
        $j(this).addClass("current");
        setTimeout(setPortfolioMasZIndex(), 700);
        return false
    })
}

function loadMore() {
    "use strict";
    var i = 1;
    $j('.load_more a').on('click', function(e) {
        e.preventDefault();
        var link = $j(this).attr('href');
        var $content = '.projects_holder';
        var $anchor = '.portfolio_paging .load_more a';
        var $elem = '.mix';
        var $next_href = $j($anchor).attr('href');
        var filler_num = $j('.projects_holder .filler').length;
        var load_more_holder = $j('.portfolio_paging');
        var loading_holder = $j('.portfolio_paging_loading');
        load_more_holder.hide();
        loading_holder.show();
        $j.get(link + '', function(data) {
            $j('.projects_holder .filler').slice(-filler_num).remove();
            var $new_content = $j($content, data).wrapInner('').html();
            $next_href = $j($anchor, data).attr('href');
            $j($content, data).waitForImages(function() {
                $j('article.mix:last').after($new_content);
                $j('.projects_holder article').css('visibility', 'visible');
                $j('article:not(.show)').each(function(l) { $j(this).addClass('show') });
                if ($j('.masonry_with_space').length) { $j('.masonry_with_space .projects_holder').isotope('reloadItems').isotope() } else {
                    var min_height = $j('article.mix:first').height();
                    $j('article.mix').css('min-height', min_height);
                    $j('.projects_holder').mixitup('remix', 'all')
                }
                setTimeout(function() {
                    prettyPhoto();
                    initParallax()
                }, 800);
                if ($j('.load_more').data('rel') > i) { $j('.load_more a').attr('href', $next_href) } else { $j('.load_more').remove() }
                $j('.projects_holder .portfolio_paging:last').remove();
                $j('article.mix').css('min-height', 0);
                load_more_holder.show();
                loading_holder.hide()
            })
        });
        i++
    })
}

function initPricingTableOddEvenSections() {
    "use strict";
    if ($j(".mkd_price_table").length) {
        $j(".mkd_price_table").each(function() {
            if (typeof $j(this).find('.pricing_table_content').data('even-background-color') !== 'undefined' && $j(this).find('.pricing_table_content').data('even-background-color') !== false) {
                var even_back_color = $j(this).find('.pricing_table_content').data('even-background-color');
                $j(this).find('.pricing_table_content > ul li:nth-child(even)').css('background-color', even_back_color);
                $j(this).find('.pricing_table_content > ul li:nth-child(even)').css('border-color', even_back_color)
            }
            if (typeof $j(this).find('.pricing_table_content').data('odd-background-color') !== 'undefined' && $j(this).find('.pricing_table_content').data('odd-background-color') !== false) {
                var odd_back_color = $j(this).find('.pricing_table_content').data('odd-background-color');
                $j(this).find('.pricing_table_content > ul li:nth-child(odd)').css('background-color', odd_back_color);
                $j(this).find('.pricing_table_content > ul li:nth-child(odd)').css('border-color', odd_back_color)
            }
        })
    }
}

function initPricingTableButton() {
    "use strict";
    if ($j(".mkd_price_table .price_button").length) {
        $j(".mkd_price_table .price_button").each(function() {
            if (typeof $j(this).data('hover-color') !== 'undefined' && $j(this).data('hover-color') !== false) {
                var hover_color = $j(this).data('hover-color');
                var initial_color = $j(this).find('a').css('color');
                $j(this).find('a').hover(function() { $j(this).css('color', hover_color) }, function() { $j(this).css('color', initial_color) })
            }
        })
    }
}

function prettyPhoto() {
    "use strict";
    var iconClasses = getIconClassesForNavigation(directionNavArrows);
    var markupWhole = '<div class="pp_pic_holder">                         <div class="ppt">&nbsp;</div>                         <div class="pp_top">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                         <div class="pp_content_container">                             <div class="pp_left">                             <div class="pp_right">                                 <div class="pp_content">                                     <div class="pp_loaderIcon"></div>                                     <div class="pp_fade">                                         <a href="#" class="pp_expand" title="Expand the image">Expand</a>                                         <div class="pp_hoverContainer">                                             <a class="pp_next" href="#"><span class="' + iconClasses.rightIconClass + '"></span></a>                                             <a class="pp_previous" href="#"><span class="' + iconClasses.leftIconClass + '"></span></a>                                         </div>                                         <div id="pp_full_res"></div>                                         <div class="pp_details">                                             <div class="pp_nav">                                                 <a href="#" class="pp_arrow_previous">Previous</a>                                                 <p class="currentTextHolder">0/0</p>                                                 <a href="#" class="pp_arrow_next">Next</a>                                             </div>                                             <p class="pp_description"></p>                                             {pp_social}                                             <a class="pp_close" href="#">Close</a>                                         </div>                                     </div>                                 </div>                             </div>                             </div>                         </div>                         <div class="pp_bottom">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                     </div>                     <div class="pp_overlay"></div>';
    $j("a[data-rel^='prettyPhoto']").prettyPhoto({ hook: 'data-rel', animation_speed: 'normal', slideshow: false, autoplay_slideshow: false, opacity: 0.80, show_title: true, allow_resize: true, horizontal_padding: 0, default_width: 960, default_height: 540, counter_separator_label: '/', theme: 'pp_default', hideflash: false, wmode: 'opaque', autoplay: true, modal: false, overlay_gallery: false, keyboard_shortcuts: true, deeplinking: false, custom_markup: '', social_tools: false, markup: markupWhole })
}

function checkTitleToShowOrHide() { "use strict"; if ($j('.title_outer.animate_title_area').length) { var title_area_height = $j('.title_outer').data('height'); if ($scroll > $j('.title').height()) { $j('.title_outer').css({ 'height': title_area_height, 'opacity': '1', 'overflow': 'visible' }) } } }

function initTitleAreaAnimation() {
    "use strict";
    if ($j('.title_outer.animate_title_area').length) {
        var title_area_height = $j('.title_outer').data('height');
        if ($j('.title_outer').hasClass('with_image')) { title_area_height = $j('.image.responsive').height() }
        if ($scroll < $j('.title').height()) {
            $j('.title_outer').animate({ height: title_area_height, opacity: 1 }, 800, function() {
                $j(this).css({ 'overflow': 'visible' });
                initPortfolioSingleInfo();
                if ($j('nav.content_menu').length > 0) {
                    content_menu_position = $j('nav.content_menu').offset().top;
                    contentMenuPosition();
                    contentMenuOnScroll()
                }
            })
        }
    }
}

function initParallaxTitle() {
    "use strict";
    if (($j('.title').length > 0) && ($j('.touch').length === 0)) {
        if ($j('.title.has_fixed_background').length) {
            var $background_size_width = parseInt($j('.title.has_fixed_background').css('background-size').match(/\d+/));
            var title_holder_height = $j('.title.has_fixed_background').height();
            var title_rate = (title_holder_height / 10000) * 7;
            var title_bpos = -($scroll * title_rate);
            $j('.title.has_fixed_background').css({ 'background-position': 'center ' + (title_bpos + add_for_admin_bar) + 'px' });
            if ($j('.title.has_fixed_background').hasClass('zoom_out')) { $j('.title.has_fixed_background').css({ 'background-size': $background_size_width - $scroll + 'px auto' }) }
        }
        $j(window).on('scroll', function() {
            if ($j('.title.has_fixed_background').length) {
                var title_bpos = -($scroll * title_rate);
                $j('.title.has_fixed_background').css({ 'background-position': 'center ' + (title_bpos + add_for_admin_bar) + 'px' });
                if ($j('.title.has_fixed_background').hasClass('zoom_out')) { $j('.title.has_fixed_background').css({ 'background-size': $background_size_width - $scroll + 'px auto' }) }
            }
        })
    }
}

function titleGraphicsHeight() {
    "use strict";
    if ($j('.title_graphics').length && $j('.title').length && $window_width < 768) {
        var graphics_height = $j('.title_holder > .container').css('height');
        $j('.title_graphics img').css('max-height', graphics_height);
        $j('.title_graphics img').css('opacity', 1)
    }
}(function($) {
    "use strict";
    var $window = $(window);
    var windowHeight = $window.height();
    $window.resize(function() { windowHeight = $window.height() });
    $.fn.parallax = function(xpos, speedFactor, outerHeight) {
        var $this = $(this);
        var getHeight;
        var firstTop;
        var paddingTop = 0;
        $this.each(function() { firstTop = $this.offset().top });
        if (outerHeight) { getHeight = function(jqo) { return jqo.outerHeight(true) } } else { getHeight = function(jqo) { return jqo.height() } }
        if (arguments.length < 1 || xpos === null) xpos = "80%";
        if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
        if (arguments.length < 3 || outerHeight === null) outerHeight = true;

        function update() {
            var pos = $window.scrollTop();
            $this.each(function() {
                var $element = $(this);
                var top = $element.offset().top;
                var height = getHeight($element);
                if (top + height < pos || top > pos + windowHeight) { return }
                $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px")
            })
        }
        $window.bind('scroll', update).resize(update);
        update()
    }
})(jQuery);

function initParallax() {
    "use strict";
    if ($j('.parallax_section_holder').length) {
        $j('.parallax_section_holder').each(function() {
            var $this = $j(this);
            var parallaxbackground = $this.find('.parallax_section_holder_background');
            if ($j(this).hasClass('full_screen_height_parallax')) {
                $this.height($window_height);
                $this.find('.parallax_content_outer').css('padding', 0)
            }
            if (parallaxbackground.hasClass('zoom_effect')) { $this.appear(function() { parallaxbackground.transformAnimate({ transform: "matrix(1.4, 0, 0, 1.4, 0, 0)", duration: 30000 }) }, { accX: 0, accY: 0 }) }
            var speed = $j(this).data('speed') * 0.4;
            parallaxbackground.parallax("80%", speed)
        })
    }
}

function initSideAreaScroll() { "use strict"; if ($j('.side_menu').length) { $j(".side_menu").niceScroll({ scrollspeed: 60, mousescrollstep: 40, cursorwidth: 0, cursorborder: 0, cursorborderradius: 0, cursorcolor: "transparent", autohidemode: false, horizrailenabled: false }) } }

function initVerticalAreaMenuScroll() { "use strict"; if ($j('.vertical_menu_area.with_scroll').length) { $j(".vertical_menu_area.with_scroll").niceScroll({ scrollspeed: 60, mousescrollstep: 40, cursorwidth: 0, cursorborder: 0, cursorborderradius: 0, cursorcolor: "transparent", autohidemode: false, horizrailenabled: false }) } }

function initMobileMenu() {
    "use strict";
    $j(".mobile_menu_button > span").on('tap click', function(e) { e.preventDefault(); if ($j(".mobile_menu > ul").is(":visible")) { $j(".mobile_menu > ul").slideUp(200) } else { $j(".mobile_menu > ul").slideDown(200) } });
    $j(".mobile_menu > ul > li.has_sub > span.mobile_arrow, .mobile_menu > ul > li.has_sub > h3, .mobile_menu > ul > li.has_sub > a[href*=#]").on('tap click', function(e) {
        e.preventDefault();
        if ($j(this).closest('li.has_sub').find("> ul.sub_menu").is(":visible")) {
            $j(this).closest('li.has_sub').find("> ul.sub_menu").slideUp(200);
            $j(this).closest('li.has_sub').removeClass('open_sub')
        } else {
            $j(this).closest('li.has_sub').addClass('open_sub');
            $j(this).closest('li.has_sub').find("> ul.sub_menu").slideDown(200)
        }
    });
    $j(".mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > span.mobile_arrow, .mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > h3, .mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > a[href*=#]").on('tap click', function(e) {
        e.preventDefault();
        if ($j(this).parent().find("ul.sub_menu").is(":visible")) {
            $j(this).parent().find("ul.sub_menu").slideUp(200);
            $j(this).parent().removeClass('open_sub')
        } else {
            $j(this).parent().addClass('open_sub');
            $j(this).parent().find("ul.sub_menu").slideDown(200)
        }
    });
    $j(".mobile_menu ul li > a, .mkd_logo a").on('click', function() { if (($j(this).attr('href') !== "http://#") && ($j(this).attr('href') !== "#")) { $j(".mobile_menu > ul").slideUp() } })
}

function initFlexSlider() {
    "use strict";
    $j('.flexslider').each(function() {
        var $this = $j(this);
        var interval = 8000;
        if (typeof $j(this).data('interval') !== 'undefined' && $j(this).data('interval') !== false) { interval = parseFloat($j(this).data('interval')) * 1000 }
        var slideshow = true;
        if (interval === 0) { slideshow = false }
        var animation = 'slide';
        if (typeof $j(this).data('flex_fx') !== 'undefined' && $j(this).data('flex_fx') !== false) { animation = $j(this).data('flex_fx') }
        var directionNav = true;
        if (typeof $j(this).data('disable-navigation-arrows') !== 'undefined') { directionNav = $j(this).data('disable-navigation-arrows') == 'yes' ? false : true }
        var controlNav = false;
        if (typeof $j(this).data('show-navigation-controls') !== 'undefined') { controlNav = $j(this).data('show-navigation-controls') == 'no' ? false : true }
        var bulletsStyle = '';
        var bulletsActiveStyle = '';
        if (typeof $j(this).data('bullet-bckg-color') !== 'undefined' && $j(this).data('bullet-bckg-color') !== false) { bulletsStyle += 'background-color: ' + $j(this).data('bullet-bckg-color') + ';' }
        if (typeof $j(this).data('bullet-active-bckg-color') !== 'undefined' && $j(this).data('bullet-active-bckg-color') !== false) { bulletsActiveStyle += 'background-color: ' + $j(this).data('bullet-active-bckg-color') + ';' }
        if (typeof $j(this).data('bullet-brdr-color') !== 'undefined' && $j(this).data('bullet-brdr-color') !== false) {
            bulletsStyle += 'border-color: ' + $j(this).data('bullet-brdr-color') + ';';
            bulletsStyle += 'border-width: 1px;'
        }
        if (typeof $j(this).data('bullet-active-brdr-color') !== 'undefined' && $j(this).data('bullet-active-brdr-color') !== false) {
            bulletsActiveStyle += 'border-color: ' + $j(this).data('bullet-active-brdr-color') + ';';
            bulletsActiveStyle += 'border-width: 1px;'
        }
        var arrowsColor = '';
        var arrowsHoverColor = '';
        if (typeof $j(this).data('arrows-color') !== 'undefined' && $j(this).data('arrows-color') !== false) { arrowsColor += 'color: ' + $j(this).data('arrows-color') + ';' }
        if (typeof $j(this).data('arrows-hover-color') !== 'undefined' && $j(this).data('arrows-hover-color') !== false) { arrowsHoverColor += 'color: ' + $j(this).data('arrows-hover-color') + ';' }
        var iconClasses = getIconClassesForNavigation(directionNavArrows);
        $j(this).flexslider({
            animationLoop: true,
            controlNav: controlNav,
            directionNav: directionNav,
            useCSS: false,
            pauseOnAction: true,
            pauseOnHover: true,
            slideshow: slideshow,
            animation: animation,
            prevText: '<span class="' + iconClasses.leftIconClass + '"></span>',
            nextText: '<span class="' + iconClasses.rightIconClass + '"></span>',
            animationSpeed: 600,
            slideshowSpeed: interval,
            start: function() {
                setTimeout(function() { $j(".flexslider").fitVids() }, 100);
                if (bulletsStyle !== "") { if ($this.find('.flex-control-paging a').length) { $this.find('.flex-control-paging a').attr('style', function() { return bulletsStyle }) } }
                if (bulletsActiveStyle !== "") { if ($this.find('.flex-control-paging a.flex-active').length) { $this.find('.flex-control-paging a.flex-active').attr('style', function() { return bulletsActiveStyle }) } }
                var top_margin = 0;
                var left_right_margin = 0;
                if ($this.hasClass('show_border')) {
                    top_margin = parseInt($this.find('.flex-direction-nav a').css('height')) / 2;
                    left_right_margin = parseInt($this.css('border-right-width'))
                } else { top_margin = (parseInt($this.find('.image_gallery_title').outerHeight()) + parseInt($this.find('.flex-direction-nav a').css('height'))) / 2; if ($this.find('.flex-control-paging').length) { top_margin += parseInt($this.find('.flex-control-paging').outerHeight(true)) / 2 } }
                $this.find('.flex-direction-nav a').each(function() {
                    $j(this).css({ 'margin-top': '-' + top_margin + 'px' });
                    $j(this).css({ 'margin-left': '-' + left_right_margin + 'px' });
                    $j(this).css({ 'margin-right': '-' + left_right_margin + 'px' });
                    $j(this).css({ 'opacity': '1' })
                })
            },
            before: function() { if (bulletsActiveStyle !== "") { if ($this.find('.flex-control-paging a').length) { $this.find('.flex-control-paging a').attr('style', function() { return bulletsActiveStyle }) } } if (bulletsStyle !== "") { if ($this.find('.flex-control-paging a.flex-active').length) { $this.find('.flex-control-paging a.flex-active').attr('style', function() { return bulletsStyle }) } } }
        });
        if (arrowsColor !== '' || arrowsHoverColor !== '') {
            $this.find('.flex-direction-nav a').css('color', arrowsColor);
            $this.find('.flex-direction-nav a').hover(function() { $j(this).css('color', arrowsHoverColor) }, function() { $j(this).css('color', arrowsColor) })
        }
        $j('.flex-direction-nav a').click(function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation()
        })
    })
}

function fitVideo() {
    "use strict";
    $j(".portfolio_images").fitVids();
    $j(".video_holder").fitVids();
    $j(".format-video .post_image").fitVids();
    $j(".format-video .mkd_masonry_blog_post_image").fitVids()
}
var $scrollHeight;

function initPortfolioSingleInfo() {
    "use strict";
    if ($j(".portfolio_single_follow").length > 0) {
        var $sidebar = $j(".portfolio_single_follow");
        var $left_column_height = $j('.portfolio_single .portfolio_container .column1').height();
        var offset = $sidebar.offset();
        $scrollHeight = $j(".portfolio_container").height();
        var $scrollOffset = $j(".portfolio_container").offset();
        var $window = $j(window);
        var $headerHeight = parseInt($j('header.page_header').css('height'), 10);
        $window.scroll(function() { $headerHeight = parseInt($j('header.page_header').css('height'), 10); if ($window_width > 960 && $left_column_height > $sidebar.height()) { if ($window.scrollTop() + $headerHeight > offset.top) { if ($window.scrollTop() + $headerHeight + $sidebar.height() < $scrollOffset.top + $scrollHeight) { $sidebar.stop().animate({ marginTop: $window.scrollTop() - offset.top + $headerHeight }) } else { $sidebar.stop().animate({ marginTop: $scrollHeight - $sidebar.height() }) } } else { $sidebar.stop().animate({ marginTop: 0 }) } } else { $sidebar.css('margin-top', 0) } })
    }
}

function initTabs() {
    "use strict";
    if ($j('.mkd_tabs').length) {
        $j('.mkd_tabs').appear(function() { $j('.mkd_tabs').css('visibility', 'visible') }, { accX: 0, accY: element_appear_amount });
        var $tabsNav = $j('.tabs-nav');
        var $tabsNavLis = $tabsNav.children('li');
        $tabsNav.each(function() {
            var $this = $j(this);
            $this.next().children('.tab-content').stop(true, true).hide().first().show();
            $this.children('li').first().addClass('active').stop(true, true).show()
        });
        $tabsNavLis.on('click', function(e) {
            var $this = $j(this);
            $this.siblings().removeClass('active').end().addClass('active');
            $this.parent().next().children('.tab-content').stop(true, true).hide().siblings($this.find('a').attr('href')).fadeIn();
            e.preventDefault();
            if ($this.find('.portfolio_slider')) { initPortfolioSlider() }
            if ($this.find('.product_slider')) { initProductSlider() }
            if ($this.find('.blog_slider')) { initBlogSlider() }
        })
    }
}

function initAccordion() {
    "use strict";
    if ($j(".mkd_accordion_holder").length) {
        $j(".mkd_accordion_holder").appear(function() { $j(".mkd_accordion_holder").css('visibility', 'visible') }, { accX: 0, accY: element_appear_amount });
        if ($j(".accordion").length) {
            $j(".accordion").accordion({ animate: "easeInOutSine", collapsible: true, active: false, icons: "", heightStyle: "content" });
            $j(".accordion").each(function() {
                var activeTab = parseInt($j(this).data('active-tab'));
                if (activeTab !== "") {
                    activeTab = activeTab - 1;
                    $j(this).accordion('option', 'active', activeTab)
                }
                var borderRadius = parseInt($j(this).data('border-radius'));
                var sectionBorderRadius = parseInt($j(this).data('section-border-radius'));
                var sectionHeight = ($j(this).data('section-height'));
                if (borderRadius !== "") { $j(this).find('.accordion_mark').css('border-radius', borderRadius + "px") }
                if (sectionBorderRadius !== "") {
                    $j(this).find('.title-holder').css('border-radius', sectionBorderRadius + "px");
                    $j(this).find('.accordion_mark').css('border-radius', sectionBorderRadius + "px")
                }
                if (sectionHeight !== "") {
                    $j(this).find('.title-holder').css('height', sectionHeight + 'px');
                    $j(this).find('.title-holder').css('line-height', sectionHeight + 'px');
                    $j(this).find('.accordion_mark').css('height', (sectionHeight - 2) + 'px');
                    $j(this).find('.accordion_mark').css('line-height', (sectionHeight - 2) + 'px')
                }
                var collapsible = ($j(this).data('collapsible') == 'yes') ? true : false;
                $j(this).accordion('option', 'collapsible', collapsible);
                $j(this).accordion('option', 'collapsible', collapsible)
            })
        }
        $j(".toggle").addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset").find(".title-holder").addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom").hover(function() { $j(this).toggleClass("ui-state-hover") }).click(function() { $j(this).toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom").next().toggleClass("ui-accordion-content-active").slideToggle(400); return false }).next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide();
        $j(".toggle").each(function() {
            var activeTab = parseInt($j(this).data('active-tab'));
            if (activeTab !== "" && activeTab >= 1) {
                activeTab = activeTab - 1;
                $j(this).find('.ui-accordion-content').eq(activeTab).show();
                $j(this).find('.ui-accordion-header').eq(activeTab).addClass('ui-state-active')
            }
        })
    }
}

function initAccordionContentLink() { "use strict"; if ($j(".accordion").length) { $j('.accordion_holder .accordion_inner .accordion_content a').click(function() { if ($j(this).attr('target') === '_blank') { window.open($j(this).attr('href'), '_blank') } else { window.open($j(this).attr('href'), '_self') } return false }) } }

function initAccordionHoverStyle() {
    "use strict";
    if ($j(".mkd_accordion_holder").length) {
        $j(".mkd_accordion_holder .title-holder").each(function() {
            var type = "";
            if ($j(this).parent('.mkd_accordion_holder').hasClass('boxed')) { type = "boxed" }
            if (typeof $j(this).data('title-hover-color') !== 'undefined' && $j(this).data('title-hover-color') !== false) {
                var title_color = $j(this).data('title-color');
                var title_hover_color = $j(this).data('title-hover-color');
                $j(this).hover(function() { $j(this).css('color', title_hover_color) }, function() { $j(this).css('color', title_color) })
            }
            if (typeof $j(this).data('mark-icon-hover-color') !== 'undefined' && $j(this).data('mark-icon-hover-color') !== false) {
                var mark_icon_color = $j(this).data('mark-icon-color');
                var mark_icon_hover_color = $j(this).data('mark-icon-hover-color');
                $j(this).hover(function() { $j(this).find('.accordion_mark_icon').css('color', mark_icon_hover_color) }, function() { $j(this).find('.accordion_mark_icon').css('color', mark_icon_color) })
            }
            if (typeof $j(this).data('background-hover-color') !== 'undefined' && $j(this).data('background-hover-color') !== false && type === "boxed") {
                var background_color = $j(this).data('background-color');
                var background_hover_color = $j(this).data('background-hover-color');
                $j(this).hover(function() { $j(this).css('background-color', background_hover_color) }, function() { $j(this).css('background-color', background_color) })
            }
            if (typeof $j(this).data('border-hover-color') !== 'undefined' && $j(this).data('border-hover-color') !== false && type === "boxed") {
                var border_hover_color = $j(this).data('border-hover-color');
                var border_color = $j(this).data('border-color');
                $j(this).hover(function() { $j(this).css('border-color', border_hover_color) }, function() { $j(this).css('border-color', border_color) })
            }
        })
    }
}

function initTestimonials() {
    "use strict";
    if ($j('.testimonials_carousel:not(.testimonial_type_carousel)').length) {
        $j('.testimonials_carousel:not(.testimonial_type_carousel)').each(function() {
            $j(this).appear(function() { $j(this).css('visibility', 'visible') }, { accX: 0, accY: element_appear_amount });
            var interval = 8000;
            if (typeof $j(this).data('auto-rotate-slides') !== 'undefined' && $j(this).data('auto-rotate-slides') !== false) { interval = parseFloat($j(this).data('auto-rotate-slides')) * 1000 }
            var slideshow = true;
            if (interval === 0) { slideshow = false }
            var controlNav = true;
            if (typeof $j(this).data('show-navigation') !== 'undefined') { controlNav = $j(this).data('show-navigation') == 'no' ? false : true }
            var directionNav = true;
            if (typeof $j(this).data('show-navigation-arrows') !== 'undefined') { directionNav = $j(this).data('show-navigation-arrows') == 'no' ? false : true }
            var animationSpeed = 600;
            if (typeof $j(this).data('animation-speed') !== 'undefined' && $j(this).data('animation-speed') !== false) { animationSpeed = $j(this).data('animation-speed') }
            var iconClasses = getIconClassesForNavigation(directionNavArrowsTestimonials);
            $j(this).flexslider({ animationLoop: true, controlNav: controlNav, directionNav: directionNav, useCSS: false, pauseOnAction: true, pauseOnHover: false, slideshow: slideshow, animation: 'fade', itemMargin: 25, minItems: 1, maxItems: 1, prevText: '<span class="' + iconClasses.leftIconClass + '"></span>', nextText: '<span class="' + iconClasses.rightIconClass + '"></span>', animationSpeed: animationSpeed, slideshowSpeed: interval, start: function(slider) { initParallax() } })
        })
    }
}

function initTestimonialCarousel() {
    "use strict";
    if ($j('.testimonials_carousel.testimonial_type_carousel').length) {
        $j('.testimonials_carousel.testimonial_type_carousel').each(function() {
            var iconClasses = getIconClassesForNavigation(directionNavArrowsTestimonials);
            var maxItems = 3;
            var itemWidthTemp;
            var blogs_shown = 3;
            switch (blogs_shown) {
                case 3:
                    itemWidthTemp = 667;
                    break;
                case 4:
                    itemWidthTemp = 800;
                    break;
                case 5:
                    itemWidthTemp = 400;
                    break;
                case 6:
                    itemWidthTemp = 334;
                    break;
                default:
                    itemWidthTemp = 800;
                    break
            }
            var itemWidth = ($j(this).parents('.grid_section').length == 1) ? 353 : itemWidthTemp;
            var $highlight = function() {
                var $this = $j(this);
                var items = $this.triggerHandler("currentVisible");
                $this.children().removeClass("active");
                items.filter(":eq(0)").addClass("active");
                items.filter(":eq(1)").addClass("active");
                items.filter(":eq(2)").addClass("active")
            };
            $j(this).find('.slides').carouFredSel({
                circular: true,
                responsive: true,
                scroll: { items: 3, fx: "directscroll", easing: "swing", duration: 400, pauseOnHover: true, onAfter: $highlight },
                direction: "right",
                prev: { button: function() { return $j(this).parent().siblings('.caroufredsel-direction-nav').find('.caroufredsel-prev') } },
                next: { button: function() { return $j(this).parent().siblings('.caroufredsel-direction-nav').find('.caroufredsel-next') } },
                pagination: function() { return $j(this).parent().siblings('.testimonial_slider_pager') },
                items: { width: itemWidth, visible: { min: responsiveNumberCarousels(maxItems), max: maxItems } },
                auto: false,
                mousewheel: false,
                swipe: { onMouse: true, onTouch: true },
                onCreate: function() {
                    var $this = $j(this);
                    var items = $this.triggerHandler("currentVisible");
                    $this.children().removeClass("active");
                    items.filter(":eq(0)").addClass("active");
                    items.filter(":eq(1)").addClass("active");
                    items.filter(":eq(2)").addClass("active");
                    $j(this).css('display', 'block').animate({ 'opacity': 1 }, 1000, function() {
                        if ($j('.widget_sticky-sidebar').length) {
                            widgetTopOffset = $j('.widget_sticky-sidebar').offset().top;
                            widgetParentOffset = $j('.widget_sticky-sidebar').position().top;
                            stickySidebarHeight = $j('aside.sidebar').height()
                        }
                        if ($j(window).width() > 600) { stickySidebar($scroll, widgetTopOffset, widgetParentOffset, stickySidebarHeight) }
                    })
                }
            })
        });
        calculateHeights();
        $j('.testimonial_type_carousel .flex-direction-nav a').click(function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation()
        })
    }
}

function responsiveNumberCarousels(maxItems) { "use strict"; var windowWidth = window.innerWidth; if (windowWidth > 1200) { return maxItems } else if (windowWidth < 1200 && windowWidth >= 800) { return 3 } else if (windowWidth < 800 && windowWidth > 800) { return 2 } else if (windowWidth <= 800) { return 1 } }

function initTestimonialImageHolderWidth() {
    "use strict";
    if ($j('.testimonials_carousel.image_left').length) {
        $j('.testimonials_carousel.image_left').each(function() {
            if (typeof $j(this).find('.testimonial_image_left_holder').data('image-holder-width') !== 'undefined' && $j(this).find('.testimonial_image_left_holder').data('image-holder-width') !== false) {
                var image_holder_width = $j(this).find('.testimonial_image_left_holder').data('image-holder-width');
                $j(this).find('.testimonial_image_left_holder .testimonial_image_holder').css('width', image_holder_width + '%');
                if ($j(this).hasClass('show_images')) {
                    $j(this).find('.flex-control-paging').css('left', image_holder_width + '%');
                    $j(this).find('.flex-direction-nav').css('left', image_holder_width + '%')
                }
            }
        })
    }
}

function setTestimonialsEqualHeight() {
    "use strict";
    if ($j('.testimonials:not(.testimonial_type_carousel) .slides li.absolute_position').length) {
        var heights = new Array();
        $j('.testimonials .slides li.absolute_position').each(function() {
            $j(this).css('min-height', '0');
            $j(this).css('max-height', 'none');
            $j(this).css('height', 'auto');
            heights.push($j(this).height())
        });
        var max = Math.max.apply(Math, heights);
        $j('.testimonials .slides li.absolute_position').each(function() { $j(this).css('height', max + 'px') })
    }
}

function initMessages() {
    "use strict";
    if ($j('.mkd_message').length) {
        $j('.mkd_message').each(function() {
            $j(this).find('.close').click(function(e) {
                e.preventDefault();
                $j(this).parent().parent().fadeOut(800)
            });
            if (typeof $j(this).data('close-hover-color') !== 'undefined' && $j(this).data('close-hover-color') !== false) {
                var hover_color = $j(this).data('close-hover-color');
                var initial_color = $j(this).find('.icon_close').css('color');
                $j(this).find('.icon_close').hover(function() { $j(this).attr('style', 'color:' + hover_color + '!important;') }, function() { $j(this).attr('style', 'color:' + initial_color) })
            }
        })
    }
}

function initElementsAnimation() {
    "use strict";
    if ($j(".element_from_fade").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.element_from_fade').each(function() {
            var $this = $j(this);
            $this.appear(function() { $this.addClass('element_from_fade_on') }, { accX: 0, accY: element_appear_amount })
        })
    }
    if ($j(".element_from_left").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.element_from_left').each(function() {
            var $this = $j(this);
            $this.appear(function() { $this.addClass('element_from_left_on') }, { accX: 0, accY: element_appear_amount })
        })
    }
    if ($j(".element_from_right").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.element_from_right').each(function() {
            var $this = $j(this);
            $this.appear(function() { $this.addClass('element_from_right_on') }, { accX: 0, accY: element_appear_amount })
        })
    }
    if ($j(".element_from_top").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.element_from_top').each(function() {
            var $this = $j(this);
            $this.appear(function() { $this.addClass('element_from_top_on') }, { accX: 0, accY: element_appear_amount })
        })
    }
    if ($j(".element_from_bottom").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.element_from_bottom').each(function() {
            var $this = $j(this);
            $this.appear(function() { $this.addClass('element_from_bottom_on') }, { accX: 0, accY: element_appear_amount })
        })
    }
    if ($j(".element_transform").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.element_transform').each(function() {
            var $this = $j(this);
            $this.appear(function() { $this.addClass('element_transform_on') }, { accX: 0, accY: element_appear_amount })
        })
    }
}

function initElementsHolderItemAnimation() {
    "use strict";
    if ($j(".flip_in").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.flip_in').each(function() {
            var $this = $j(this);
            $this.appear(function() { $this.addClass('flip_in_on') }, { accX: 0, accY: element_appear_amount })
        })
    }
    if ($j(".grow_in").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.grow_in').each(function() {
            var $this = $j(this);
            $this.appear(function() { $this.addClass('grow_in_on') }, { accX: 0, accY: element_appear_amount })
        })
    }
    if ($j(".x_rotate").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.x_rotate').each(function() {
            var $this = $j(this);
            $this.appear(function() { $this.addClass('x_rotate_on') }, { accX: 0, accY: element_appear_amount })
        })
    }
    if ($j(".z_rotate").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.z_rotate').each(function() {
            var $this = $j(this);
            $this.appear(function() { $this.addClass('z_rotate_on') }, { accX: 0, accY: element_appear_amount })
        })
    }
    if ($j(".y_translate").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.y_translate').each(function() {
            var $this = $j(this);
            $this.appear(function() { $this.addClass('y_translate_on') }, { accX: 0, accY: element_appear_amount })
        })
    }
    if ($j(".fade_in").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.fade_in').each(function() {
            var $this = $j(this);
            $this.appear(function() { $this.addClass('fade_in_on') }, { accX: 0, accY: element_appear_amount })
        })
    }
    if ($j(".fade_in_down").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.fade_in_down').each(function() {
            var $this = $j(this);
            $this.appear(function() { $this.addClass('fade_in_down_on') }, { accX: 0, accY: element_appear_amount })
        })
    }
    if ($j(".fade_in_left_x_rotate").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.fade_in_left_x_rotate').each(function() {
            var $this = $j(this);
            $this.appear(function() { $this.addClass('fade_in_left_x_rotate_on') }, { accX: 0, accY: element_appear_amount })
        })
    }
}
var timeOuts = [];

function initProgressBarsIcon() {
    "use strict";
    if ($j('.mkd_progress_bars_icons_holder').length) {
        $j('.mkd_progress_bars_icons_holder').each(function() {
            var $this = $j(this);
            $this.appear(function() {
                $this.find('.mkd_progress_bars_icons').css('opacity', '1');
                $this.find('.mkd_progress_bars_icons').each(function() {
                    var number = $j(this).find('.mkd_progress_bars_icons_inner').data('number');
                    var size = $j(this).find('.mkd_progress_bars_icons_inner').data('size');
                    if (size !== "") {
                        $j(this).find('.mkd_progress_bars_icons_inner.custom_size .bar').css({ 'width': size + 'px', 'height': size + 'px' });
                        $j(this).find('.mkd_progress_bars_icons_inner.custom_size .bar .mkd_icon_stack').css({ 'font-size': size / 2 + 'px' })
                    }
                    var bars = $j(this).find('.bar');
                    bars.each(function(i) {
                        if (i < number) {
                            var time = (i + 1) * 180;
                            timeOuts[i] = setTimeout(function() { $j(bars[i]).addClass('active') }, time)
                        }
                    })
                })
            }, { accX: 0, accY: element_appear_amount })
        })
    }
}

function initMoreFacts() {
    "use strict";
    if ($j('.more_facts_holder').length) {
        $j('.more_facts_holder').each(function() {
            var $this = $j(this);
            var $more_label = 'More Facts';
            if ($this.find('.more_facts_button').data('morefacts') !== "") { $more_label = $this.find('.more_facts_button').data('morefacts') }
            var $less_label = 'Less Facts';
            if ($this.find('.more_facts_button').data('lessfacts') !== "") { $less_label = $this.find('.more_facts_button').data('lessfacts') }
            var height = $this.find('.more_facts_inner').height() + 70;
            var speed;
            if (height > 0 && height < 601) { speed = 800 } else if (height > 600 && height < 1201) { speed = 800 } else { speed = 1800 }
            $this.find('.more_facts_outer').css({ 'height': 'auto' });
            $this.find('.more_facts_inner_holder').css({ 'height': '0px', 'display': 'none', 'opacity': '0' });
            $this.find('.more_facts_button').on("mouseenter", function() { $j(this).css('color', $j(this).data('hovercolor')) }).on("mouseleave", function() { $j(this).css('color', $j(this).data('color')) });
            $this.find('.more_facts_button').click(function() {
                if (!$this.find('.more_facts_inner_holder').is(':visible')) {
                    $this.find('.more_facts_fake_arrow').fadeIn(speed);
                    $this.addClass('more_fact_opened');
                    $j(this).parent().parent().find('.more_facts_inner_holder').css({ 'display': 'block', 'opacity': '1' }).stop().animate({ 'height': height + 30 }, speed, function() { if ($j('.parallax_section_holder').length) { initParallax() } });
                    $j(this).find('.more_facts_button_text').text($less_label);
                    $j(this).find('.more_facts_button_arrow').addClass('rotate_arrow');
                    initPieChartWithIcon(true)
                } else {
                    $this.find('.more_facts_fake_arrow').fadeOut(speed);
                    $j(this).parent().parent().find('.more_facts_inner_holder').stop().animate({ 'height': '0px' }, speed, function() {
                        $j(this).css({ 'display': 'none', 'opacity': '0' });
                        if (!$this.find('.more_facts_button').is(":hover")) { $this.find('.more_facts_button').css('color', $this.find('.more_facts_button').data('color')) }
                        $this.removeClass('more_fact_opened');
                        if ($j('.parallax_section_holder').length) { initParallax() }
                    });
                    $j(this).find('.more_facts_button_text').text($more_label);
                    $j(this).find('.more_facts_button_arrow').removeClass('rotate_arrow')
                }
            })
        })
    }
}

function placeholderReplace() {
    "use strict";
    $j('#contact-form [placeholder]').focus(function() {
        var input = $j(this);
        if (input.val() === input.attr('placeholder')) {
            if (this.originalType) {
                this.type = this.originalType;
                delete this.originalType
            }
            input.val('');
            input.removeClass('placeholder')
        }
    }).blur(function() {
        var input = $j(this);
        if (input.val() === '') {
            if (this.type === 'password') {
                this.originalType = this.type;
                this.type = 'text'
            }
            input.addClass('placeholder');
            input.val(input.attr('placeholder'))
        }
    }).blur();
    $j('#contact-form [placeholder]').parents('form').submit(function() { $j(this).find('[placeholder]').each(function() { var input = $j(this); if (input.val() === input.attr('placeholder')) { input.val('') } }) })
}

function totop_button(a) {
    "use strict";
    var b = $j("#back_to_top");
    b.removeClass("off on");
    if (a === "on") { b.addClass("on") } else { b.addClass("off") }
}

function backButtonShowHide() {
    "use strict";
    $j(window).scroll(function() { var b = $j(this).scrollTop(); var c = $j(this).height(); var d; if (b > 0) { d = b + c / 2 } else { d = 1 } if (d < 1e3) { totop_button("off") } else { totop_button("on") } })
}

function backToTop() {
    "use strict";
    $j(document).on('click', '#back_to_top, .back_to_top_icon', function(e) {
        e.preventDefault();
        $j('body,html').animate({ scrollTop: 0 }, $j(window).scrollTop() / 3, 'linear')
    })
}

function initMessageHeight() { "use strict"; if ($j('.mkd_message.with_icon').length) { $j('.mkd_message.with_icon').each(function() { if ($j(this).find('.message_text_holder').height() > $j(this).find('.mkd_message_icon_holder').height()) { $j(this).find('.mkd_message_icon_holder').height($j(this).find('.message_text').height()) } else { $j(this).find('.message_text').height($j(this).find('.mkd_message_icon_holder').height()) } }) } }

function initImageHover() {
    "use strict";
    if ($j('.image_hover').length) {
        $j('.image_hover').each(function() {
            $j(this).appear(function() {
                var default_visible_time = 300;
                var transition_delay = $j(this).attr('data-transition-delay');
                var real_transition_delay = default_visible_time + parseFloat(transition_delay);
                var object = $j(this);
                setTimeout(function() { object.addClass('show') }, parseFloat(transition_delay));
                setTimeout(function() { object.removeClass('show') }, real_transition_delay)
            }, { accX: 0, accY: element_appear_amount })
        })
    }
}

function initProgressBarsVertical() {
    "use strict";
    if ($j('.mkd_progress_bars_vertical').length) {
        $j('.mkd_progress_bars_vertical').each(function() {
            $j(this).appear(function() {
                initToCounterVerticalProgressBar($j(this));
                var percentage = $j(this).find('.progress_content').data('percentage');
                $j(this).find('.progress_content').css('height', '0%');
                $j(this).find('.progress_content').animate({ height: percentage + '%' }, 1800)
            }, { accX: 0, accY: element_appear_amount })
        })
    }
}

function initToCounterVerticalProgressBar($this) {
    "use strict";
    if ($this.find('.progress_number span').length) {
        $this.find('.progress_number span').each(function() {
            var $max = parseFloat($j(this).text());
            $j(this).countTo({ from: 0, to: $max, speed: 1800, refreshInterval: 80 })
        })
    }
}

function checkAnchorOnLoad() {
    "use strict";
    var hash = window.location.hash;
    var paspartuScrollAdd = $j('body').hasClass('paspartu_on_top_fixed') ? $window_width * paspartu_width : 0;
    var scrollToAmount;
    if (hash !== "" && $j('[data-mkd_id="' + hash + '"]').length > 0) {
        if ($j('header.page_header').hasClass('fixed') && !$j('body').hasClass('vertical_menu_enabled')) {
            if ($j('header.page_header').hasClass('scroll_top')) { var top_header_height = header_top_height } else { var top_header_height = 0 }
            if (!$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')) {
                var min_header_height = $j('header.page_header').hasClass('centered_logo') ? min_header_height_scroll * 2 + 20 : min_header_height_scroll;
                if (header_height - ($j('[data-mkd_id="' + hash + '"]').offset().top + top_header_height) / 4 >= min_header_height) {
                    var diff_of_header_and_section = $j('[data-mkd_id="' + hash + '"]').offset().top - header_height - large_menu_item_border - paspartuScrollAdd;
                    scrollToAmount = diff_of_header_and_section + (diff_of_header_and_section / 4) + (diff_of_header_and_section / 16) + (diff_of_header_and_section / 64) + 1
                } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - min_header_height - large_menu_item_border - paspartuScrollAdd }
            } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - paspartuScrollAdd }
        } else if ($j('header.page_header').hasClass('fixed_top_header') && !$j('body').hasClass('vertical_menu_enabled')) { if (!$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')) { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - header_top_height - large_menu_item_border - paspartuScrollAdd } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - paspartuScrollAdd } } else if ($j('header.page_header').hasClass('fixed_hiding') && !$j('body').hasClass('vertical_menu_enabled')) { if (!$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')) { if ($j('[data-mkd_id="' + hash + '"]').offset().top - (header_height + logo_height / 2 + 20) <= scroll_amount_for_fixed_hiding) { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - header_height - logo_height / 2 - 20 - paspartuScrollAdd } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - min_header_height_fixed_hidden - 20 - paspartuScrollAdd } } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - paspartuScrollAdd } } else if ($j('header.page_header').hasClass('stick') || $j('header.page_header').hasClass('stick_with_left_right_menu') && !$j('body').hasClass('vertical_menu_enabled')) { if (!$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')) { if (sticky_amount >= $j('[data-mkd_id="' + hash + '"]').offset().top) { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top + 1 - paspartuScrollAdd } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - min_header_height_sticky - paspartuScrollAdd } } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - paspartuScrollAdd } } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - paspartuScrollAdd }
        $j('html, body').animate({ scrollTop: Math.round(scrollToAmount) }, 1800, function() {})
    }
    $j(".main_menu a, .vertical_menu a, .popup_menu a, .mobile_menu a").each(function() {
        var i = $j(this).prop("hash");
        if (i !== "" && ($j('[data-mkd_id="' + i + '"]').length > 0) && ($j('[data-mkd_id="' + i + '"]').offset().top >= $window_height) && $scroll == 0) {
            $j(this).parent().removeClass('active');
            $j(this).removeClass('current')
        }
    })
}

function changeActiveState(id) {
    "use strict";
    if ($j('.main_menu a[href*=#]').length) { $j('.main_menu a').parent().removeClass('active') }
    $j(".main_menu a").each(function() {
        var i = $j(this).prop("hash");
        if (i === id) {
            if ($j(this).closest('.second').length === 0) { $j(this).parent().addClass('active') } else { $j(this).closest('.second').parent().addClass('active') }
            $j('.main_menu a').removeClass('current');
            $j(this).addClass('current')
        }
    });
    if ($j('.vertical_menu a[href*=#]').length) { $j('.vertical_menu a').parent().removeClass('active') }
    $j(".vertical_menu a").each(function() {
        var i = $j(this).prop("hash");
        if (i === id) {
            if ($j(this).closest('.second').length === 0) { $j(this).parent().addClass('active') } else { $j(this).closest('.second').parent().addClass('active') }
            $j('.vertical_menu a').removeClass('current');
            $j(this).addClass('current')
        }
    });
    if ($j('.popup_menu a[href*=#]').length) { $j('.popup_menu a').parent().removeClass('active') }
    $j(".popup_menu a").each(function() {
        var i = $j(this).prop("hash");
        if (i === id) {
            if ($j(this).closest('.second').length === 0) { $j(this).parent().addClass('active') } else { $j(this).closest('.second').parent().addClass('active') }
            $j('.popup_menu a').removeClass('current');
            $j(this).addClass('current')
        }
    });
    if ($j('.mobile_menu a[href*=#]').length) { $j('.mobile_menu a').parent().removeClass('active') }
    $j(".mobile_menu a").each(function() {
        var i = $j(this).prop("hash");
        if (i === id) {
            if ($j(this).closest('.sub_menu').length === 0) { $j(this).parent().addClass('active') } else { $j(this).closest('.sub_menu').parent().addClass('active') }
            $j('.mobile_menu a').removeClass('current');
            $j(this).addClass('current')
        }
    })
}

function checkAnchorOnScroll() {
    "use strict";
    if ($j('[data-mkd_id]').length) {
        $j('[data-mkd_id]').waypoint(function(direction) {
            if (direction === 'down') {
                changeActiveState($j(this.element).data("mkd_id"));
                magicPanes()
            }
        }, { offset: '80%' });
        $j('[data-mkd_id]').waypoint(function(direction) {
            if (direction === 'up') {
                changeActiveState($j(this.element).data("mkd_id"));
                magicPanes()
            }
        }, { offset: function() { return -($j(this.element).outerHeight() - 180) } })
    }
}

function initHashClick() {
    "use strict";
    var $doc = $j('html, body');
    var paspartuScrollAdd = $j('body').hasClass('paspartu_on_top_fixed') ? $window_width * paspartu_width : 0;
    var scrollToAmount;
    $j(document).on("click", ".main_menu a, .vertical_menu a, .popup_menu a, .qbutton, .anchor, .widget li.anchor a", function() {
        var $this = $j(this);
        var hash = $j(this).prop("hash");
        if (loadedPageFlag == true && ((hash !== "" && $j(this).attr('href').split('#')[0] === "") || (hash !== "" && $j(this).attr('href').split('#')[0] !== "" && hash === window.location.hash) || (hash !== "" && $j(this).attr('href').split('#')[0] == window.location.href.split('#')[0]))) {
            if ($j('header.page_header').hasClass('fixed') && !$j('body').hasClass('vertical_menu_enabled')) {
                if ($j('header.page_header').hasClass('scroll_top')) { var top_header_height = header_top_height } else { var top_header_height = 0 }
                if (!$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')) {
                    var min_header_height = $j('header.page_header').hasClass('centered_logo') ? min_header_height_scroll * 2 + 20 : min_header_height_scroll;
                    if (header_height - ($j('[data-mkd_id="' + hash + '"]').offset().top + top_header_height) / 4 >= min_header_height) {
                        var diff_of_header_and_section = $j('[data-mkd_id="' + hash + '"]').offset().top - header_height - large_menu_item_border - paspartuScrollAdd;
                        scrollToAmount = diff_of_header_and_section + (diff_of_header_and_section / 4) + (diff_of_header_and_section / 16) + (diff_of_header_and_section / 64) + 1
                    } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - min_header_height - large_menu_item_border - paspartuScrollAdd }
                } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - paspartuScrollAdd }
            } else if ($j('header.page_header').hasClass('fixed_top_header') && !$j('body').hasClass('vertical_menu_enabled')) { if (!$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')) { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - header_top_height - large_menu_item_border - paspartuScrollAdd } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - paspartuScrollAdd } } else if ($j('header.page_header').hasClass('fixed_hiding') && !$j('body').hasClass('vertical_menu_enabled')) { if (!$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')) { if ($j('[data-mkd_id="' + hash + '"]').offset().top - (header_height + logo_height / 2 + 20) <= scroll_amount_for_fixed_hiding) { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - header_height - logo_height / 2 - 20 - paspartuScrollAdd } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - min_header_height_fixed_hidden - 20 - paspartuScrollAdd } } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - paspartuScrollAdd } } else if ($j('header.page_header').hasClass('stick') || $j('header.page_header').hasClass('stick_with_left_right_menu') && !$j('body').hasClass('vertical_menu_enabled')) { if (!$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')) { if (sticky_amount >= $j('[data-mkd_id="' + hash + '"]').offset().top) { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top + 1 - paspartuScrollAdd } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - min_header_height_sticky - paspartuScrollAdd } } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - paspartuScrollAdd } } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - paspartuScrollAdd }
            if ($j('[data-mkd_id="' + hash + '"]').length > 0) { $doc.stop().animate({ scrollTop: Math.round(scrollToAmount) }, 1800, function() { anchorActiveState($this) }) }
            if (history.pushState) { history.pushState(null, null, hash) }
            return false
        }
    });
    $j(document).on("click", ".mobile_menu a", function() { var $this = $j(this); var hash = $j(this).prop("hash"); if ((hash !== "" && $j(this).attr('href').split('#')[0] === "") || (hash !== "" && $j(this).attr('href').split('#')[0] !== "" && hash === window.location.hash) || (hash !== "" && $j(this).attr('href').split('#')[0] == window.location.href.split('#')[0])) { if ($j('[data-mkd_id="' + hash + '"]').length > 0) { $doc.animate({ scrollTop: Math.round($j('[data-mkd_id="' + hash + '"]').offset().top - $j('.mobile_menu').height()) }, 800, function() { anchorActiveState($this) }) } if (history.pushState) { history.pushState(null, null, hash) } return false } })
}

function countClientsPerRow() {
    "use strict";
    if ($j('.mkd_clients').length) {
        $j('.mkd_clients').each(function() {
            var $clients = $j(this);
            var mkd_clients_height = $clients.height();
            var mkd_clients_width = $clients.width();
            var maxHeightClient;
            var clientWidth = $clients.find('.mkd_client_holder').width();
            var countClient = $clients.find('.mkd_client_holder').length;
            $clients.find('.mkd_client_holder').each(function() { maxHeightClient = maxHeightClient > $j(this).height() ? maxHeightClient : $j(this).height() });
            maxHeightClient = maxHeightClient + 35;
            var numberOfRows = Math.ceil(mkd_clients_height / maxHeightClient);
            var numberOfClientsPerRow = Math.ceil(mkd_clients_width / clientWidth);
            var numberOffullRows = Math.floor(countClient / numberOfClientsPerRow);
            var numberOfClientsInLastRow = countClient - (numberOfClientsPerRow * numberOffullRows);
            if (numberOfClientsInLastRow === 0) { numberOfClientsInLastRow = numberOfClientsPerRow }
            $clients.find(".mkd_client_holder").removeClass('border-bottom-none');
            var item_start_from = countClient - numberOfClientsInLastRow - 1;
            $clients.find(".mkd_client_holder:gt(" + item_start_from + ")").addClass('border-bottom-none')
        })
    }
}

function anchorActiveState(me) {
    "use strict";
    if (me.closest('.main_menu').length > 0) { $j('.main_menu a').parent().removeClass('active') }
    if (me.closest('.popup_menu').length > 0) { $j('.popup_menu a').parent().removeClass('active') }
    if (me.closest('.vertical_menu').length > 0) { $j('.vertical_menu a').parent().removeClass('active') }
    if (me.closest('.second').length === 0) { me.parent().addClass('active') } else { me.closest('.second').parent().addClass('active') }
    if (me.closest('.mobile_menu').length > 0) {
        $j('.mobile_menu a').parent().removeClass('active');
        me.parent().addClass('active')
    }
    if (me.closest('.widget_nav_menu').length > 0) {
        $j('.widget_nav_menu ul.menu > li').removeClass('current-menu-item');
        me.parent().addClass('current-menu-item')
    }
    $j('.mobile_menu a, .main_menu a, .vertical_menu a, .popup_menu a').removeClass('current');
    me.addClass('current')
}

function initVideoBackground() {
    "use strict";
    $j('.video-wrap .video').mediaelementplayer({ enableKeyboard: false, iPadUseNativeControls: false, pauseOtherPlayers: false, iPhoneUseNativeControls: false, AndroidUseNativeControls: false });
    if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
        initVideoBackgroundSize();
        $j('.mobile-video-image').show();
        $j('.video-wrap').remove()
    }
}

function initVideoBackgroundSize() {
    "use strict";
    $j('.section .video-wrap').each(function(i) {
        var $sectionWidth = $j(this).closest('.section').outerWidth();
        $j(this).width($sectionWidth);
        var $sectionHeight = $j(this).closest('.section').outerHeight();
        min_w = vid_ratio * ($sectionHeight + 20);
        $j(this).height($sectionHeight);
        var scale_h = $sectionWidth / video_width_original;
        var scale_v = ($sectionHeight - header_height) / video_height_original;
        var scale = scale_v;
        if (scale_h > scale_v) scale = scale_h;
        if (scale * video_width_original < min_w) { scale = min_w / video_width_original }
        $j(this).find('video, .mejs-overlay, .mejs-poster').width(Math.ceil(scale * video_width_original + 2));
        $j(this).find('video, .mejs-overlay, .mejs-poster').height(Math.ceil(scale * video_height_original + 2));
        $j(this).scrollLeft(($j(this).find('video').width() - $sectionWidth) / 2);
        $j(this).find('.mejs-overlay, .mejs-poster').scrollTop(($j(this).find('video').height() - ($sectionHeight)) / 2);
        $j(this).scrollTop(($j(this).find('video').height() - ($sectionHeight)) / 2)
    });
    $j('.carousel .item .video .video-wrap').each(function(i) {
        var $slideWidth = $j(window).width();
        $j(this).width($slideWidth);
        var mob_header = $j(window).width() < 1000 ? $j('header.page_header').height() - 6 : 0;
        var $slideHeight = $j(this).closest('.carousel.slide').height() - mob_header;
        min_w = vid_ratio * ($slideHeight + 20);
        $j(this).height($slideHeight);
        var scale_h = $slideWidth / video_width_original;
        var scale_v = ($slideHeight - header_height) / video_height_original;
        var scale = scale_v;
        if (scale_h > scale_v) scale = scale_h;
        if (scale * video_width_original < min_w) { scale = min_w / video_width_original }
        $j(this).find('video, .mejs-overlay, .mejs-poster').width(Math.ceil(scale * video_width_original + 2));
        $j(this).find('video, .mejs-overlay, .mejs-poster').height(Math.ceil(scale * video_height_original + 2));
        $j(this).scrollLeft(($j(this).find('video').width() - $slideWidth) / 2);
        $j(this).find('.mejs-overlay, .mejs-poster').scrollTop(($j(this).find('video').height() - ($slideHeight)) / 2);
        $j(this).scrollTop(($j(this).find('video').height() - ($slideHeight)) / 2)
    });
    $j('.portfolio_single .video .video-wrap, .blog_holder .video .video-wrap').each(function(i) {
        var $this = $j(this);
        var $videoWidth = $j(this).closest('.video').outerWidth();
        $j(this).width($videoWidth);
        var $videoHeight = ($videoWidth * 9) / 16;
        if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
            $this.parent().width($videoWidth);
            $this.parent().height($videoHeight)
        }
        min_w = vid_ratio * ($videoHeight + 20);
        $j(this).height($videoHeight);
        var scale_h = $videoWidth / video_width_original;
        var scale_v = ($videoHeight - header_height) / video_height_original;
        var scale = scale_v;
        if (scale_h > scale_v) scale = scale_h;
        if (scale * video_width_original < min_w) { scale = min_w / video_width_original }
        $j(this).find('video, .mejs-overlay, .mejs-poster').width(Math.ceil(scale * video_width_original + 2));
        $j(this).find('video, .mejs-overlay, .mejs-poster').height(Math.ceil(scale * video_height_original + 2));
        $j(this).scrollLeft(($j(this).find('video').width() - $videoWidth) / 2);
        $j(this).find('.mejs-overlay, .mejs-poster').scrollTop(($j(this).find('video').height() - ($videoHeight)) / 2);
        $j(this).scrollTop(($j(this).find('video').height() - ($videoHeight)) / 2)
    })
}

function initIconWithTextAnimation() { "use strict"; if ($j('.mkd_icon_animation').length > 0 && $j('.no_animation_on_touch').length === 0) { $j('.mkd_icon_animation').each(function() { $j(this).appear(function() { $j(this).addClass('mkd_show_animation') }, { accX: 0, accY: element_appear_amount }) }) } }

function initCheckSafariBrowser() { "use strict"; if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) { $j('body').addClass('safari_browser') } }

function initCheckFirefoxMacBrowser() { "use strict"; var browser = navigator.userAgent.toLowerCase(); var os = navigator.appVersion.toLowerCase(); if (browser.indexOf('firefox') > -1 && os.indexOf("mac") > -1) { $j('body').addClass('firefox_mac_browser') } }

function initSearchButton() {
    "use strict";
    if ($j('.search_slides_from_header_bottom').length) {
        $j('.search_slides_from_header_bottom').click(function(e) {
            e.preventDefault();
            if ($j('html').hasClass('touch')) {
                if ($j('.mkd_search_form_2').height() == "0") {
                    $j('.mkd_search_form_2 input[type="text"]').onfocus = function() {
                        window.scrollTo(0, 0);
                        document.body.scrollTop = 0
                    };
                    $j('.mkd_search_form_2 input[type="text"]').onclick = function() {
                        window.scrollTo(0, 0);
                        document.body.scrollTop = 0
                    };
                    $j('.mkd_search_form_2').css('height', '80px')
                } else { $j('.mkd_search_form_2').css('height', '0') }
                $j(window).scroll(function() { if ($j('.mkd_search_form_2').height() != "0" && $scroll > 80) { $j('.mkd_search_form_2').css('height', '0') } })
            } else {
                if ($j('.mkd_search_form_2').hasClass('animated')) {
                    $j('.mkd_search_form_2').removeClass('animated');
                    $j('.mkd_search_form_2').css('bottom', '0')
                } else {
                    $j('.mkd_search_form input[type="text"]').focus();
                    $j('.mkd_search_form_2').addClass('animated');
                    var search_form_height = $j('.mkd_search_form_2').height();
                    $j('.mkd_search_form_2').css('bottom', -search_form_height)
                }
                $j('.mkd_search_form_2').addClass('disabled');
                $j('.mkd_search_form_2 input[type="submit"]').attr('disabled', 'disabled');
                if (($j('.mkd_search_form_2 .mkd_search_field').val() !== '') && ($j('.mkd_search_form_2 .mkd_search_field').val() !== ' ')) {
                    $j('.mkd_search_form_2 input[type="submit"]').removeAttr('disabled');
                    $j('.mkd_search_form_2').removeClass('disabled')
                } else {
                    $j('.mkd_search_form_2').addClass('disabled');
                    $j('.mkd_search_form_2 input[type="submit"]').attr('disabled', 'disabled')
                }
                $j('.mkd_search_form_2 .mkd_search_field').keyup(function() {
                    if (($j(this).val() !== '') && ($j(this).val() != ' ')) {
                        $j('.mkd_search_form_2 input[type="submit"]').removeAttr('disabled');
                        $j('.mkd_search_form_2').removeClass('disabled')
                    } else {
                        $j('.mkd_search_form_2 input[type="submit"]').attr('disabled', 'disabled');
                        $j('.mkd_search_form_2').addClass('disabled')
                    }
                });
                $j('.content, footer').click(function(e) {
                    e.preventDefault();
                    $j('.mkd_search_form_2').removeClass('animated');
                    $j('.mkd_search_form_2').css('bottom', '0')
                })
            }
        });
        if ($j('.mkd_search_submit').length) {
            $j('.mkd_search_submit').click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                var searchForm = $j(this).parents('form').first();
                searchForm.submit()
            })
        }
    }
    if ($j('.search_covers_header').length) {
        $j('.search_covers_header').click(function(e) {
            e.preventDefault();
            if ($j(".search_covers_only_bottom").length) { var headerHeight = $j('.header_bottom').height() } else { if ($j(".fixed_top_header").length) { var headerHeight = $j('.top_header').height() } else if ($j(".header_top .inner .search_covers_header").length) { var headerHeight = $j('.header_top').height() } else { var headerHeight = $j('.header_top_bottom_holder').height() } }
            $j('.mkd_search_form_3 .form_holder_outer').height(headerHeight);
            if ($j(".search_covers_only_bottom").length) {
                $j('.mkd_search_form_3').css('bottom', 0);
                $j('.mkd_search_form_3').css('top', 'auto')
            }
            $j('.mkd_search_form_3').stop(true).fadeIn(600, 'easeOutExpo');
            $j('.mkd_search_form_3 input[type="text"]').focus();
            $j(window).scroll(function() {
                if ($j(".search_covers_only_bottom").length) { var headerHeight = $j('.header_bottom').height() } else { if ($j(".fixed_top_header").length) { var headerHeight = $j('.top_header').height() } else { var headerHeight = $j('.header_top_bottom_holder').height() } }
                $j('.mkd_search_form_3 .form_holder_outer').height(headerHeight)
            });
            $j('.mkd_search_close, .content, footer').click(function(e) {
                e.preventDefault();
                $j('.mkd_search_form_3').stop(true).fadeOut(480, 'easeOutExpo')
            });
            $j('.mkd_search_form_3').blur(function(e) { $j('.mkd_search_form_3').stop(true).fadeOut(480, 'easeOutExpo') })
        })
    }
    if ($j('.fullscreen_search').length) {
        if ($j(".fullscreen_search_holder.from_circle").length) {
            $j('.fullscreen_search').on('click', function(e) {
                e.preventDefault();
                if ($j('.fullscreen_search_overlay').hasClass('animate')) {
                    $j('.fullscreen_search_overlay').removeClass('animate');
                    $j('.fullscreen_search_holder').css('opacity', '0');
                    $j('.fullscreen_search_close').css('opacity', '0');
                    $j('.fullscreen_search_close').css('visibility', 'hidden');
                    $j('.fullscreen_search').css('opacity', '1');
                    $j('.fullscreen_search_holder').css('display', 'none')
                } else {
                    $j('.fullscreen_search_overlay').addClass('animate');
                    $j('.fullscreen_search_holder').css('display', 'block');
                    setTimeout(function() {
                        $j('.fullscreen_search_holder').css('opacity', '1');
                        $j('.fullscreen_search_close').css('opacity', '1');
                        $j('.fullscreen_search_close').css('visibility', 'visible');
                        $j('.fullscreen_search').css('opacity', '0')
                    }, 200);
                    if (!$j('body').hasClass('page-template-full_screen-php')) { disable_scroll() }
                }
            });
            $j('.fullscreen_search_close').on('click', function(e) {
                e.preventDefault();
                $j('.fullscreen_search_overlay').removeClass('animate');
                $j('.fullscreen_search_holder').css('opacity', '0');
                $j('.fullscreen_search_close').css('opacity', '0');
                $j('.fullscreen_search_close').css('visibility', 'hidden');
                $j('.fullscreen_search').css('opacity', '1');
                $j('.fullscreen_search_holder').css('display', 'none');
                if (!$j('body').hasClass('page-template-full_screen-php')) { enable_scroll() }
            })
        }
        if ($j(".fullscreen_search_holder.fade").length) {
            $j('.fullscreen_search').on('click', function(e) {
                e.preventDefault();
                if ($j('.fullscreen_search_holder').hasClass('animate')) {
                    $j('body').removeClass('fullscreen_search_opened');
                    $j('.fullscreen_search_holder').removeClass('animate');
                    $j('body').removeClass('search_fade_out');
                    $j('body').removeClass('search_fade_in');
                    if (!$j('body').hasClass('page-template-full_screen-php')) { enable_scroll() }
                } else {
                    $j('body').addClass('fullscreen_search_opened');
                    $j('body').removeClass('search_fade_out');
                    $j('body').addClass('search_fade_in');
                    $j('.fullscreen_search_holder').addClass('animate');
                    if (!$j('body').hasClass('page-template-full_screen-php')) { disable_scroll() }
                }
            });
            $j('.fullscreen_search_close').on('click', function(e) {
                e.preventDefault();
                $j('body').removeClass('fullscreen_search_opened');
                $j('.fullscreen_search_holder').removeClass('animate');
                $j('body').removeClass('search_fade_in');
                $j('body').addClass('search_fade_out');
                if (!$j('body').hasClass('page-template-full_screen-php')) { enable_scroll() }
            })
        }
        $j('.fullscreen_search_holder .search_field').focus(function() { $j('.fullscreen_search_holder .field_holder .line').css("width", "100%") });
        $j('.fullscreen_search_holder .search_field').blur(function() { $j('.fullscreen_search_holder .field_holder .line').css("width", "0") });
        $j(window).scroll(function() {
            var bottom_height = $j(".page_header .header_bottom").height();
            if ($j(".page_header").hasClass("sticky")) {
                $j(".fullscreen_search_holder .side_menu_button").css("height", bottom_height);
                $j(".fullscreen_search_holder .close_container").css("top", "0")
            } else if ($j(".page_header").hasClass("fixed")) { $j(".fullscreen_search_holder .side_menu_button").css("height", bottom_height) } else {
                $j(".fullscreen_search_holder .side_menu_button").css("height", "");
                $j(".fullscreen_search_holder .close_container").css("top", "")
            }
        })
    }
    if ($j('.search_slides_from_window_top').length) {
        $j('.search_slides_from_window_top ').click(function(e) {
            e.preventDefault();
            if ($j('html').hasClass('touch')) {
                if ($j('.mkd_search_form').height() == "0") {
                    $j('.mkd_search_form input[type="text"]').onfocus = function() {
                        window.scrollTo(0, 0);
                        document.body.scrollTop = 0
                    };
                    $j('.mkd_search_form input[type="text"]').onclick = function() {
                        window.scrollTo(0, 0);
                        document.body.scrollTop = 0
                    };
                    $j('.header_top_bottom_holder').css('top', '80px');
                    $j('.mkd_search_form').css('height', '80px');
                    $j('.content_inner').css('margin-top', '80px');
                    if ($scroll < 34) { $j('header.page_header').css('top', '0') }
                } else {
                    $j('.mkd_search_form').css('height', '0');
                    $j('.header_top_bottom_holder').css('top', '0');
                    $j('.content_inner').css('margin-top', '0');
                    if ($scroll < 34) { $j('header.page_header').css('top', -$scroll) }
                }
                $j(window).scroll(function() {
                    if ($j('.mkd_search_form').height() != "0" && $scroll > 80) {
                        $j('.mkd_search_form').css('height', '0');
                        $j('.header_top_bottom_holder').css('top', '0');
                        $j('.content_inner').css('margin-top', '0')
                    }
                });
                $j('.mkd_search_close').click(function(e) {
                    e.preventDefault();
                    $j('.mkd_search_form').css('height', '0');
                    $j('.header_top_bottom_holder').css('top', '0');
                    $j('.content_inner').css('margin-top', '0');
                    if ($scroll < 34) { $j('header.page_header').css('top', -$scroll) }
                })
            } else {
                if ($j('.title').hasClass('has_fixed_background')) { var yPos = parseInt($j('.title.has_fixed_background').css('backgroundPosition').split(" ")[1]) } else { var yPos = 0 }
                if ($j('.mkd_search_form').height() == "0") {
                    $j('.mkd_search_form input[type="text"]').focus();
                    $j('.header_top_bottom_holder').stop().animate({ top: "80px" }, 180);
                    $j('.mkd_search_form').stop().animate({ height: "80px" }, 180);
                    $j('.content_inner').stop().animate({ marginTop: "80px" }, 180);
                    if ($scroll < 34) { $j('header.page_header').stop().animate({ top: 0 }, 180) }
                    $j('.title.has_fixed_background').animate({ 'background-position-y': (yPos + 80) + 'px' }, 180)
                } else {
                    $j('.mkd_search_form').stop().animate({ height: "0" }, 180);
                    $j('.header_top_bottom_holder').stop().animate({ top: "0px" }, 180);
                    $j('.content_inner').stop().animate({ marginTop: "0" }, 180);
                    if ($scroll < 34) { $j('header.page_header').stop().animate({ top: -$scroll }, 180) }
                    $j('.title.has_fixed_background').animate({ 'background-position-y': (yPos - 80) + 'px' }, 180)
                }
                $j(window).scroll(function() {
                    if ($j('.mkd_search_form').height() != "0" && $scroll > 80) {
                        $j('.mkd_search_form').stop().animate({ height: "0" }, 180);
                        $j('.header_top_bottom_holder').stop().animate({ top: "0px" }, 180);
                        $j('.content_inner').stop().animate({ marginTop: "0" }, 180);
                        $j('.title.has_fixed_background').css('backgroundPosition', 'center ' + (yPos) + 'px')
                    }
                });
                $j('.mkd_search_close').click(function(e) {
                    e.preventDefault();
                    $j('.mkd_search_form').stop().animate({ height: "0" }, 180);
                    $j('.content_inner').stop().animate({ marginTop: "0" }, 180);
                    $j('.header_top_bottom_holder').stop().animate({ top: "0px" }, 180);
                    if ($scroll < 34) { $j('header.page_header').stop().animate({ top: -$scroll }, 180) }
                    $j('.title.has_fixed_background').animate({ 'background-position-y': (yPos) + 'px' }, 180)
                })
            }
        })
    }
}

function updateShoppingCart() {
    "use strict";
    $j('body').bind('added_to_cart', add_to_cart);

    function add_to_cart(event, parts, hash) {
        var miniCart = $j('.shopping_cart_header');
        if (parts['div.widget_shopping_cart_content']) {
            var $cartContent = jQuery(parts['div.widget_shopping_cart_content']),
                $itemsList = $cartContent.find('.cart_list'),
                $total = $cartContent.find('.total').contents(':not(strong)').text();
            miniCart.find('.shopping_cart_dropdown_inner').html('').append($itemsList);
            miniCart.find('.total span').html('').append($total)
        }
    }
}

function setContentBottomMargin() { "use strict"; if ($j('.uncover').length) { $j('.content').css('margin-bottom', $j('.footer_inner').height()) } }

function setFooterHeight() { "use strict"; if ($window_width > 600) { if ($j('.footer_top > div').hasClass('container')) { $j(".footer_top .mkd_column").css('min-height', 0).css('min-height', $j('.footer_top > .container > .container_inner > div ').innerHeight()) } else { $j(".footer_top .mkd_column").css('min-height', 0).css('min-height', $j('.footer_top > div').innerHeight()) } } }

function showGoogleMap() {
    "use strict";
    if ($j('.mkd_google_map').length) {
        $j('.mkd_google_map').each(function() {
            var custom_map_style;
            if (typeof $j(this).data('custom-map-style') !== 'undefined') { custom_map_style = $j(this).data('custom-map-style') }
            var color_overlay;
            if (typeof $j(this).data('color-overlay') !== 'undefined' && $j(this).data('color-overlay') !== false) { color_overlay = $j(this).data('color-overlay') }
            var saturation;
            if (typeof $j(this).data('saturation') !== 'undefined' && $j(this).data('saturation') !== false) { saturation = $j(this).data('saturation') }
            var lightness;
            if (typeof $j(this).data('lightness') !== 'undefined' && $j(this).data('lightness') !== false) { lightness = $j(this).data('lightness') }
            var zoom;
            if (typeof $j(this).data('zoom') !== 'undefined' && $j(this).data('zoom') !== false) { zoom = $j(this).data('zoom') }
            var pin;
            if (typeof $j(this).data('pin') !== 'undefined' && $j(this).data('pin') !== false) { pin = $j(this).data('pin') }
            var map_height;
            if (typeof $j(this).data('map-height') !== 'undefined' && $j(this).data('map-height') !== false) { map_height = $j(this).data('map-height') }
            if (typeof $j(this).data('map-full') !== 'undefined' && $j(this).data('map-full') == 'fullscreen') { map_height = '100%' }
            var unique_id;
            if (typeof $j(this).data('unique-id') !== 'undefined' && $j(this).data('unique-id') !== false) { unique_id = $j(this).data('unique-id') }
            var google_maps_scroll_wheel;
            if (typeof $j(this).data('google-maps-scroll-wheel') !== 'undefined') { google_maps_scroll_wheel = $j(this).data('google-maps-scroll-wheel') }
            var addresses;
            if (typeof $j(this).data('addresses') !== 'undefined' && $j(this).data('addresses') !== false) { addresses = $j(this).data('addresses') }
            var map = "map_" + unique_id;
            var geocoder = "geocoder_" + unique_id;
            var holderId = "map_canvas_" + unique_id;
            initializeGoogleMap(custom_map_style, color_overlay, saturation, lightness, google_maps_scroll_wheel, zoom, holderId, map_height, pin, map, geocoder, addresses)
        })
    }
}

function initializeGoogleMap(custom_map_style, color, saturation, lightness, wheel, zoom, holderId, height, pin, map, geocoder, data) {
    "use strict";
    var mapStyles = [{ stylers: [{ hue: color }, { saturation: saturation }, { lightness: lightness }, { gamma: 1 }] }];
    var google_map_type_id;
    if (custom_map_style) { google_map_type_id = 'mkd_style' } else { google_map_type_id = google.maps.MapTypeId.ROADMAP }
    var mkdMapType = new google.maps.StyledMapType(mapStyles, { name: "Mikado Google Map" });
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 180.644);
    if (!isNaN(height)) { height = height + 'px' }
    var myOptions = { zoom: zoom, scrollwheel: wheel, center: latlng, zoomControl: true, zoomControlOptions: { style: google.maps.ZoomControlStyle.SMALL, position: google.maps.ControlPosition.RIGHT_CENTER }, scaleControl: false, scaleControlOptions: { position: google.maps.ControlPosition.LEFT_CENTER }, streetViewControl: false, streetViewControlOptions: { position: google.maps.ControlPosition.LEFT_CENTER }, panControl: false, panControlOptions: { position: google.maps.ControlPosition.LEFT_CENTER }, mapTypeControl: false, mapTypeControlOptions: { mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'mkd_style'], style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR, position: google.maps.ControlPosition.LEFT_CENTER }, mapTypeId: google_map_type_id };
    map = new google.maps.Map(document.getElementById(holderId), myOptions);
    map.mapTypes.set('mkd_style', mkdMapType);
    var index;
    for (index = 0; index < data.length; ++index) { initializeGoogleAddress(data[index], pin, map, geocoder) }
    var holder_element = document.getElementById(holderId);
    holder_element.style.height = height
}

function initializeGoogleAddress(data, pin, map, geocoder) {
    "use strict";
    if (data === '') return;
    var contentString = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<div id="bodyContent">' + '<p>' + data + '</p>' + '</div>' + '</div>';
    var infowindow = new google.maps.InfoWindow({ content: contentString });
    geocoder.geocode({ 'address': data }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({ map: map, position: results[0].geometry.location, icon: pin, title: data['store_title'] });
            google.maps.event.addListener(marker, 'click', function() { infowindow.open(map, marker) });
            google.maps.event.addDomListener(window, 'resize', function() { map.setCenter(results[0].geometry.location) })
        }
    })
}

function initCoverBoxes() {
    "use strict";
    if ($j('.cover_boxes').length) {
        $j('.cover_boxes').each(function() {
            var active_element = 0;
            var data_active_element = 1;
            if (typeof $j(this).data('active-element') !== 'undefined' && $j(this).data('active-element') !== false) {
                data_active_element = parseFloat($j(this).data('active-element'));
                active_element = data_active_element - 1
            }
            var number_of_columns = 3;
            if (typeof $j(this).data('active-element') !== 'undefined' && $j(this).data('active-element') == 2) { number_of_columns = 2 }
            active_element = data_active_element > number_of_columns ? 0 : active_element;
            $j(this).find('li').eq(active_element).addClass('act');
            var cover_boxed = $j(this);
            $j(this).find('li').each(function() {
                $j(this).hover(function() {
                    $j(cover_boxed).find('li').removeClass('act');
                    $j(this).addClass('act')
                })
            })
        })
    }
}

function createContentMenu() {
    "use strict";
    var content_menu = $j(".content_menu");
    content_menu.each(function() {
        if ($j(this).css('background-color') !== "") { var background_color = $j(this).css('background-color') }
        var content_menu_ul = $j(this).find("ul.menu");
        var sections = $j(this).siblings('.in_content_menu');
        if (sections.length) {
            sections.each(function() {
                var section_href = $j(this).data("mkd_id");
                var section_title = $j(this).data('mkd_title');
                var section_icon = $j(this).data('icon_html');
                var li = $j("<li />");
                var link = $j("<a />", { "href": section_href, "html": "<span>" + section_title + "</span>" });
                var arrow;
                if (background_color !== "") { arrow = $j("<div />", { "class": 'arrow', "style": 'border-color: ' + background_color + ' transparent transparent transparent' }) } else { arrow = $j("<div />", { "class": 'arrow' }) }
                link.prepend(section_icon);
                li.append(link);
                li.appendTo(content_menu_ul)
            })
        }
    })
}

function createSelectContentMenu() {
    "use strict";
    var content_menu = $j(".content_menu");
    content_menu.each(function() {
        var $this = $j(this);
        var $menu_select = $j("<ul></ul>");
        $menu_select.appendTo($j(this).find('.nav_select_menu'));
        $j(this).find("ul.menu li a").each(function() {
            var menu_url = $j(this).attr("href");
            var menu_text = $j(this).text();
            var menu_icon = $j(this).find('i').clone();
            if ($j(this).parents("li").length === 2) { menu_text = "&nbsp;&nbsp;&nbsp;" + menu_text }
            if ($j(this).parents("li").length === 3) { menu_text = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + menu_text }
            if ($j(this).parents("li").length > 3) { menu_text = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + menu_text }
            var li = $j("<li />");
            var link = $j("<a />", { "href": menu_url, "html": menu_text });
            menu_icon.prependTo(link);
            link.appendTo(li);
            li.appendTo($menu_select)
        });
        $this.find(".nav_select_button").on('click', function() { if ($this.find('.nav_select_menu ul').is(":visible")) { $this.find('.nav_select_menu ul').slideUp() } else { $this.find('.nav_select_menu ul').slideDown() } return false });
        $this.find(".nav_select_menu ul li a").on('click', function() {
            var $link = $j(this);
            var $target = $link.attr("href");
            var targetOffset = $j('[data-mkd_id="' + $target + '"]').offset().top - $j('.nav_select_menu ul').outerHeight();
            $this.find('.nav_select_menu ul').slideUp();
            $j('html,body').stop().animate({ scrollTop: targetOffset }, 1800, function() {
                $j('nav.content_menu ul li').removeClass('active');
                $link.parent().addClass('active')
            });
            return false
        })
    })
}

function contentMenuPosition() {
    "use strict";
    if ($j('nav.content_menu').length) {
        var header_add_sticky = content_menu_position > sticky_amount ? min_header_height_sticky : 0;
        var header_add_fixed_hidden = content_menu_position > scroll_amount_for_fixed_hiding ? min_header_height_fixed_hidden + 20 : header_height + min_header_height_fixed_hidden + 20;
        var content_height = $j('nav.content_menu').height();
        if (content_menu_position - header_add_sticky - content_menu_top_add - $scroll <= 0 && ($j('header').hasClass('stick') || $j('header').hasClass('stick_with_left_right_menu'))) {
            if (content_menu_position < sticky_amount) { if ($scroll > sticky_amount) { $j('nav.content_menu').css({ 'position': 'fixed', 'top': min_header_height_sticky + content_menu_top_add }).addClass('fixed') } else { $j('nav.content_menu').css({ 'position': 'fixed', 'top': 0, transition: 'none' }).addClass('fixed') } } else { $j('nav.content_menu').css({ 'position': 'fixed', 'top': min_header_height_sticky + content_menu_top_add }).addClass('fixed') }
            $j('header.sticky').addClass('no_shadow');
            $j('.content > .content_inner > .container > .container_inner').css('margin-top', content_height);
            $j('.content > .content_inner > .full_width').css('margin-top', content_height)
        } else if (content_menu_position - header_add_fixed_hidden - content_menu_top_add - $scroll <= 0 && $j('header').hasClass('fixed_hiding')) {
            if (content_menu_position < scroll_amount_for_fixed_hiding) { if ($scroll > scroll_amount_for_fixed_hiding) { $j('nav.content_menu').css({ 'position': 'fixed', 'top': min_header_height_fixed_hidden + 20 + content_menu_top_add }).addClass('fixed') } else { $j('nav.content_menu').css({ 'position': 'fixed', 'top': header_height + min_header_height_fixed_hidden + 20 + content_menu_top_add }).addClass('fixed') } } else { $j('nav.content_menu').css({ 'position': 'fixed', 'top': min_header_height_fixed_hidden + 20 + content_menu_top_add }).addClass('fixed') }
            $j('.content > .content_inner > .container > .container_inner').css('margin-top', content_height);
            $j('.content > .content_inner > .full_width').css('margin-top', content_height)
        } else if (content_menu_position - content_menu_top - content_menu_top_add - $scroll <= 0 && !$j('header').hasClass('stick') && !$j('header').hasClass('fixed_hidden')) {
            $j('nav.content_menu').css({ 'position': 'fixed', 'top': content_menu_top + content_menu_top_add }).addClass('fixed');
            $j('.content > .content_inner > .container > .container_inner').css('margin-top', content_height);
            $j('.content > .content_inner > .full_width').css('margin-top', content_height)
        } else {
            $j('nav.content_menu').css({ 'position': 'relative', 'top': '0px' }).removeClass('fixed');
            $j('header.sticky').removeClass('no_shadow');
            $j('.content > .content_inner > .container > .container_inner').css('margin-top', '0px');
            $j('.content > .content_inner > .full_width').css('margin-top', '0px')
        }
    }
}

function contentMenuOnScroll() {
    "use strict";
    if ($j('nav.content_menu').length) {
        $j('.content .in_content_menu').waypoint(function(direction) {
            if (direction === 'down') {
                var id = $j(this.element).data("mkd_id");
                $j("nav.content_menu.fixed li a").each(function() { var i = $j(this).attr("href"); if (i === id) { $j(this).parent().addClass('active') } else { $j(this).parent().removeClass('active') } })
            }
        }, { offset: '80%' });
        $j('.content .in_content_menu').waypoint(function(direction) {
            if (direction === 'up') {
                var id = $j(this.element).data("mkd_id");
                $j("nav.content_menu.fixed li a").each(function() { var i = $j(this).attr("href"); if (i === id) { $j(this).parent().addClass('active') } else { $j(this).parent().removeClass('active') } })
            }
        }, { offset: function() { return -($j(this.element).outerHeight() - 280) } })
    }
}
var scrollPos = 0;

function contentMenuCheckLastSection() {
    "use strict";
    if ($j('.content .in_content_menu').length) {
        var curScrollPos = $scroll;
        var last_from_top = $j('.content .in_content_menu:last').offset().top + $j('.content .in_content_menu:last').height();
        var first_from_top = $j('.content .in_content_menu:first').offset().top - $window_height / 2;
        if (curScrollPos > scrollPos) { if (last_from_top < $scroll) { $j("nav.content_menu.fixed li").removeClass('active') } } else { if (first_from_top > $scroll) { $j('nav.content_menu li:first, nav.content_menu ul.menu li:first').removeClass('active') } }
        scrollPos = curScrollPos
    }
}

function contentMenuScrollTo() {
    "use strict";
    var $doc = $j('html, body');
    var paspartuScrollAdd = $j('body').hasClass('paspartu_on_top_fixed') ? $window_width * paspartu_width : 0;
    var scrollToAmount;
    $j("nav.content_menu ul.menu li a").on('click', function(e) {
        e.preventDefault();
        var $this = $j(this);
        var $target = $this.attr("href");
        if ($j(this).parent().hasClass('active')) { return false }
        if ($j('header.page_header').hasClass('fixed') && !$j('body').hasClass('vertical_menu_enabled')) {
            if (!$j('header.page_header').hasClass('transparent')) {
                if (header_height - ($j('[data-mkd_id="' + $target + '"]').offset().top + content_menu_top_add) / 4 >= min_header_height_scroll) {
                    var diff_of_header_and_section = $j('[data-mkd_id="' + $target + '"]').offset().top - header_height - large_menu_item_border - paspartuScrollAdd;
                    scrollToAmount = diff_of_header_and_section + (diff_of_header_and_section / 4) + (diff_of_header_and_section / 16) + (diff_of_header_and_section / 64) + 1
                } else { scrollToAmount = $j('[data-mkd_id="' + $target + '"]').offset().top - min_header_height_scroll - large_menu_item_border - paspartuScrollAdd }
            } else { scrollToAmount = $j('[data-mkd_id="' + $target + '"]').offset().top - paspartuScrollAdd }
        } else if ($j('header.page_header').hasClass('fixed_top_header') && !$j('body').hasClass('vertical_menu_enabled')) { if (!$j('header.page_header').hasClass('transparent')) { scrollToAmount = $j('[data-mkd_id="' + $target + '"]').offset().top - header_top_height - large_menu_item_border - paspartuScrollAdd } else { scrollToAmount = $j('[data-mkd_id="' + $target + '"]').offset().top - paspartuScrollAdd } } else if ($j('header.page_header').hasClass('fixed_hiding') && !$j('body').hasClass('vertical_menu_enabled')) { if (!$j('header.page_header').hasClass('transparent')) { if ($j('[data-mkd_id="' + $target + '"]').offset().top - (header_height + content_menu_top_add + logo_height / 2 + 20) <= scroll_amount_for_fixed_hiding) { scrollToAmount = $j('[data-mkd_id="' + $target + '"]').offset().top - content_menu_top_add - header_height - logo_height / 2 - 20 - paspartuScrollAdd } else { scrollToAmount = $j('[data-mkd_id="' + $target + '"]').offset().top - content_menu_top_add - min_header_height_fixed_hidden - 20 - paspartuScrollAdd } } else { scrollToAmount = $j('[data-mkd_id="' + $target + '"]').offset().top - paspartuScrollAdd } } else if ($j('header.page_header').hasClass('stick') || $j('header.page_header').hasClass('stick_with_left_right_menu') && !$j('body').hasClass('vertical_menu_enabled')) { if (!$j('header.page_header').hasClass('transparent')) { if (sticky_amount >= $j('[data-mkd_id="' + $target + '"]').offset().top) { scrollToAmount = $j('[data-mkd_id="' + $target + '"]').offset().top + 1 - paspartuScrollAdd } else { scrollToAmount = $j('[data-mkd_id="' + $target + '"]').offset().top - min_header_height_sticky - paspartuScrollAdd } } else { scrollToAmount = $j('[data-mkd_id="' + $target + '"]').offset().top - paspartuScrollAdd } } else { scrollToAmount = $j('[data-mkd_id="' + $target + '"]').offset().top - paspartuScrollAdd }
        if ($j('[data-mkd_id="' + $target + '"]').length > 0) {
            $doc.stop().animate({ scrollTop: Math.round(scrollToAmount - $j('nav.content_menu').height()) }, 1800, function() {
                $j('nav.content_menu ul li').removeClass('active');
                $this.parent().addClass('active')
            })
        }
        return false
    })
}

function initButtonHover() {
    "use strict";
    if ($j('.qbutton').length) {
        $j('.qbutton').each(function() {
            if (typeof $j(this).data('hover-background-color') !== 'undefined' && $j(this).data('hover-background-color') !== false) {
                var hover_background_color = $j(this).data('hover-background-color');
                var initial_background_color = $j(this).css('background-color');
                $j(this).hover(function() { $j(this).css('background-color', hover_background_color) }, function() { $j(this).css('background-color', initial_background_color) })
            }
            if (typeof $j(this).data('hover-animated-background-color') !== 'undefined' && $j(this).data('hover-animated-background-color') !== false) {
                var hover_background_color = $j(this).data('hover-animated-background-color');
                $j(this).children('.a_overlay').css('background-color', hover_background_color)
            }
            if (typeof $j(this).data('hover-border-color') !== 'undefined' && $j(this).data('hover-border-color') !== false) {
                var hover_border_color = $j(this).data('hover-border-color');
                var initial_border_color = $j(this).css('border-top-color');
                $j(this).hover(function() { $j(this).css('border-color', hover_border_color) }, function() { $j(this).css('border-color', initial_border_color) })
            }
            if (typeof $j(this).data('hover-color') !== 'undefined' && $j(this).data('hover-color') !== false) {
                var hover_color = $j(this).data('hover-color');
                var initial_color = $j(this).css('color');
                $j(this).hover(function() { $j(this).css('color', hover_color) }, function() { $j(this).css('color', initial_color) })
            }
            if (typeof $j(this).data('button-icon-hover-color') !== 'undefined' && $j(this).data('button-icon-hover-color') !== false) {
                var icon_hover_color = $j(this).data('button-icon-hover-color');
                var initial_icon_color;
                if ($j(this).find(".call_to_action_button_icon").length) { initial_icon_color = $j(this).find(".call_to_action_button_icon").css('color') }
                $j(this).hover(function() { $j(this).find(".call_to_action_button_icon").css('color', icon_hover_color) }, function() { $j(this).find(".call_to_action_button_icon").css('color', initial_icon_color) })
            }
            if (typeof $j(this).data('icon-background-hover-color') !== 'undefined' && $j(this).data('icon-background-hover-color') !== false) {
                var icon_background_hover_color = $j(this).data('icon-background-hover-color');
                var initial_icon_background_color;
                if ($j(this).find(".button_icon").length) { initial_icon_background_color = $j(this).find(".button_icon").css('background-color') }
                $j(this).hover(function() { $j(this).find(".button_icon").css('background-color', icon_background_hover_color) }, function() { $j(this).find(".button_icon").css('background-color', initial_icon_background_color) })
            }
            if (typeof $j(this).data('icon-hover-color') !== 'undefined' && $j(this).data('icon-hover-color') !== false) {
                var icon_hover_color = $j(this).data('icon-hover-color');
                var initial_icon_color;
                if ($j(this).find(".button_icon").length) { initial_icon_color = $j(this).find(".button_icon").css('color') }
                $j(this).hover(function() { $j(this).find(".button_icon").css('color', icon_hover_color) }, function() { $j(this).find(".button_icon").css('color', initial_icon_color) })
            }
        })
    }
}

function initReadMoreButtonHover() {
    "use strict";
    if ($j('.read_more_btn, .holder_read_more_btn').length) {
        $j('.read_more_btn, .holder_read_more_btn').each(function() {
            if (typeof $j(this).data('hover-background-color') !== 'undefined' && $j(this).data('hover-background-color') !== false) {
                var hover_background_color = $j(this).data('hover-background-color');
                var initial_background_color = $j(this).css('background-color');
                $j(this).hover(function() { $j(this).css('background-color', hover_background_color) }, function() { $j(this).css('background-color', initial_background_color) })
            }
            if (typeof $j(this).data('hover-icon-color') !== 'undefined' && $j(this).data('hover-icon-color') !== false) {
                var $icon = $j(this).find('.read_more_button_icon');
                var hover_color = $j(this).data('hover-icon-color');
                var initial_color = $icon.css('color');
                $j(this).hover(function() { $icon.css('color', hover_color) }, function() { $icon.css('color', initial_color) })
            }
        })
    }
}

function initSocialIconHover() {
    "use strict";
    if ($j('.mkd_social_icon_holder').length) {
        $j('.mkd_social_icon_holder').each(function() {
            var hover_style = '';
            var initial_style = '';
            if (typeof $j(this).data('hover-background-color') !== 'undefined' && $j(this).data('hover-background-color') !== false && $j(this).find('.simple_social').length === 0) {
                var hover_background_color = $j(this).data('hover-background-color');
                hover_style += 'background-color: ' + hover_background_color + '!important;'
            }
            if ($j(this).find('.simple_social').length === 0) {
                var initial_background_color = $j(this).find('.mkd_icon_stack').css('background-color');
                initial_style += 'background-color: ' + initial_background_color + '!important;'
            }
            if (typeof $j(this).data('hover-border-color') !== 'undefined' && $j(this).data('hover-border-color') !== false && $j(this).find('.simple_social').length === 0) {
                var hover_border_color = $j(this).data('hover-border-color');
                hover_style += 'border-color: ' + hover_border_color + '!important;'
            }
            if ($j(this).find('.simple_social').length === 0) {
                var initial_border_color = $j(this).find('.mkd_icon_stack').css('border-color');
                initial_style += 'border-color: ' + initial_border_color + '!important;'
            }
            if (typeof $j(this).data('hover-color') !== 'undefined' && $j(this).data('hover-color') !== false) {
                var hover_color = $j(this).data('hover-color');
                hover_style += 'color: ' + hover_color + '!important;'
            }
            var initial_color = $j(this).css('color');
            if ($j(this).find('.mkd_icon_stack .social_icon').length) { initial_color = $j(this).find('.mkd_icon_stack').css('color') } else if ($j(this).find('.simple_social').length) { initial_color = $j(this).find('.simple_social').css('color') }
            initial_style += 'color: ' + initial_color + '!important;';
            if (hover_style !== "") { if ($j(this).find('.mkd_icon_stack .social_icon').length) { $j(this).find('.mkd_icon_stack').hover(function() { $j(this).attr('style', function() { return hover_style }) }, function() { $j(this).attr('style', function() { return initial_style }) }) } else if ($j(this).find('.simple_social').length) { $j(this).find('.simple_social').hover(function() { $j(this).attr('style', function() { return hover_style }) }, function() { $j(this).attr('style', function() { return initial_style }) }) } }
        })
    }
}

function initIconHover() {
    "use strict";
    if ($j('.mkd_icon_shortcode').length) {
        $j('.mkd_icon_shortcode').each(function() {
            if ((typeof $j(this).data('hover-background-color') !== 'undefined') || (typeof $j(this).data('hover-border-color') !== 'undefined') || (typeof $j(this).find('i, span:not(.animation_overlay)').data('hover-color') !== 'undefined')) {
                var hover_style = '';
                var icon_hover_style = '';
                var initial_style = '';
                var icon_initial_style = '';
                var animation_overlay_hover_style = '';
                var animation_overlay_initial_style = '';
                if (typeof $j(this).data('hover-background-color') !== 'undefined' && $j(this).data('hover-background-color') !== false && $j(this).find('.normal').length === 0) {
                    var hover_background_color = $j(this).data('hover-background-color');
                    hover_style += 'background-color: ' + hover_background_color + '!important;';
                    animation_overlay_hover_style += 'box-shadow: 0 0 0 1px ' + hover_background_color + '!important;'
                }
                if ($j(this).find('.normal').length === 0) {
                    var initial_background_color = $j(this).css('background-color');
                    initial_style += 'background-color: ' + initial_background_color + '!important;'
                }
                if (typeof $j(this).data('hover-border-color') !== 'undefined' && $j(this).data('hover-border-color') !== false && $j(this).find('.normal').length === 0) {
                    var hover_border_color = $j(this).data('hover-border-color');
                    hover_style += 'border-color: ' + hover_border_color + '!important;'
                }
                if ($j(this).find('.normal').length === 0) {
                    var initial_border_color = $j(this).css('border-left-color');
                    initial_style += 'border-color: ' + initial_border_color + '!important;'
                }
                var initial_width = $j(this).css('width');
                if (initial_width !== '') {
                    hover_style += 'width: ' + initial_width + ';';
                    initial_style += 'width: ' + initial_width + ';'
                }
                var initial_height = $j(this).css('height');
                if (initial_height !== '') {
                    hover_style += 'height: ' + initial_height + ';';
                    initial_style += 'height: ' + initial_height + ';'
                }
                var initial_line_height = $j(this).css('line-height');
                if (initial_line_height !== '') {
                    hover_style += 'line-height: ' + initial_line_height + ';';
                    initial_style += 'line-height: ' + initial_line_height + ';'
                }
                var initial_border_style = $j(this).css('border-left-style');
                if (initial_border_style !== '') {
                    hover_style += 'border-style: ' + initial_border_style + ';';
                    initial_style += 'border-style: ' + initial_border_style + ';'
                }
                var initial_border_width = $j(this).css('border-left-width');
                if (initial_border_width !== '') {
                    hover_style += 'border-width: ' + initial_border_width + '!important;';
                    initial_style += 'border-width: ' + initial_border_width + '!important;'
                }
                var initial_border_radius = $j(this).css('border-top-left-radius');
                if (initial_border_radius !== '') {
                    hover_style += 'border-radius: ' + initial_border_radius + '; -moz-border-radius: ' + initial_border_radius + '; -webkit-border-radius: ' + initial_border_radius + ';';
                    initial_style += 'border-radius: ' + initial_border_radius + '; -moz-border-radius: ' + initial_border_radius + '; -webkit-border-radius: ' + initial_border_radius + ';'
                }
                var initial_margin_right = $j(this).css('margin-right');
                if (initial_margin_right !== '') {
                    hover_style += 'margin-right: ' + initial_margin_right + ';';
                    initial_style += 'margin-right: ' + initial_margin_right + ';'
                }
                var initial_margin_left = $j(this).css('margin-left');
                if (initial_margin_left !== '') {
                    hover_style += 'margin-left: ' + initial_margin_left + ';';
                    initial_style += 'margin-left: ' + initial_margin_left + ';'
                }
                var initial_margin_top = $j(this).css('margin-top');
                if (initial_margin_top !== '') {
                    hover_style += 'margin-top: ' + initial_margin_top + ';';
                    initial_style += 'margin-top: ' + initial_margin_top + ';'
                }
                var initial_margin_bottom = $j(this).css('margin-bottom');
                if (initial_margin_bottom !== '') {
                    hover_style += 'margin-bottom: ' + initial_margin_bottom + ';';
                    initial_style += 'margin-bottom: ' + initial_margin_bottom + ';'
                }
                if ($j(this).hasClass("icon_shadow")) {
                    var shadow_color_style = '';
                    if (typeof $j(this).data('shadow-color') !== 'undefined' && $j(this).data('shadow-color') !== false) {
                        var shadow_color = $j(this).data('shadow-color');
                        shadow_color_style = 'text-shadow:1px 1px ' + shadow_color;
                        for (var i = 2; i < 100; i++) { shadow_color_style += ',' + i + 'px ' + i + 'px ' + shadow_color + '' }
                        shadow_color_style += ';';
                        initial_style += shadow_color_style
                    }
                    if (typeof $j(this).data('hover-shadow-color') !== 'undefined' && $j(this).data('hover-shadow-color') !== false) {
                        var hover_shadow_color = $j(this).data('hover-shadow-color');
                        shadow_color_style = 'text-shadow:1px 1px ' + hover_shadow_color;
                        for (var i = 2; i < 100; i++) { shadow_color_style += ',' + i + 'px ' + i + 'px ' + hover_shadow_color + '' }
                        shadow_color_style += ';';
                        hover_style += shadow_color_style
                    }
                }
                if (typeof $j(this).find('i, span').data('hover-color') !== 'undefined' && $j(this).find('i, span').data('hover-color') !== false) {
                    var hover_color = $j(this).find('i, span').data('hover-color');
                    icon_hover_style += 'color: ' + hover_color + '!important;'
                }
                if (typeof $j(this).find('i, span').data('color') !== 'undefined' && $j(this).find('i, span').data('color') !== false) {
                    var initial_color = $j(this).find('i, span').data('color');
                    icon_initial_style += 'color: ' + initial_color + ';'
                }
                var initial_icon_line_height = $j(this).find('i, span').css('line-height');
                if (initial_icon_line_height !== '') {
                    icon_hover_style += 'line-height: ' + initial_icon_line_height + ';';
                    icon_initial_style += 'line-height: ' + initial_icon_line_height + ';'
                }
                if ($j(this).find('.normal').length == 0 && $j(this).find('span').length == 0) {
                    var initial_icon_vertical_align = $j(this).find('i').css('vertical-align');
                    if (initial_icon_vertical_align != 'undefined') {
                        icon_hover_style += 'vertical-align: ' + initial_icon_vertical_align + ';';
                        icon_initial_style += 'vertical-align: ' + initial_icon_vertical_align + ';'
                    }
                }
                if ($j(this).find('.animation_overlay').length) { animation_overlay_initial_style = $j(this).find('.animation_overlay').css('box-shadow').replace(/^.*(rgba?\([^)]+\)).*$/, '$1') }
                var initial_icon_font_size = $j(this).find('i, span').css('font-size');
                if (initial_icon_font_size !== '') {
                    icon_hover_style += 'font-size: ' + initial_icon_font_size + ';';
                    icon_initial_style += 'font-size: ' + initial_icon_font_size + ';'
                }
                var icon_animation_delay = $j(this).css('transition-delay');
                if (icon_animation_delay !== '0s, 0s, 0s') {
                    hover_style += 'transition-delay: ' + icon_animation_delay + '; -webkit-transition-delay: ' + icon_animation_delay + '; -moz-transition-delay: ' + icon_animation_delay + '; -o-transition-delay: ' + icon_animation_delay + ';';
                    initial_style += 'transition-delay: ' + icon_animation_delay + '; -webkit-transition-delay: ' + icon_animation_delay + '; -moz-transition-delay: ' + icon_animation_delay + '; -o-transition-delay: ' + icon_animation_delay + ';';
                    icon_hover_style += 'transition-delay: ' + icon_animation_delay + '; -webkit-transition-delay: ' + icon_animation_delay + '; -moz-transition-delay: ' + icon_animation_delay + '; -o-transition-delay: ' + icon_animation_delay + ';';
                    icon_initial_style += 'transition-delay: ' + icon_animation_delay + '; -webkit-transition-delay: ' + icon_animation_delay + '; -moz-transition-delay: ' + icon_animation_delay + '; -o-transition-delay: ' + icon_animation_delay + ';'
                }
                if (typeof hover_background_color !== 'undefined' || typeof hover_border_color !== 'undefined' || typeof hover_color !== 'undefined') {
                    $j(this).hover(function() {
                        if ($j(this).hasClass('square') || $j(this).hasClass('circle')) {
                            $j(this).attr('style', function() { return hover_style });
                            $j(this).find('.animation_overlay').attr('style', function() { return animation_overlay_hover_style })
                        }
                        if (typeof hover_color !== 'undefined') { $j(this).find('i, span:not(.animation_overlay)').attr('style', function() { return icon_hover_style }) }
                    }, function() {
                        if ($j(this).hasClass('square') || $j(this).hasClass('circle')) {
                            $j(this).attr('style', function() { return initial_style });
                            $j(this).find('.animation_overlay').attr('style', function() { return animation_overlay_initial_style })
                        }
                        $j(this).find('i, span:not(.animation_overlay)').attr('style', function() { return icon_initial_style })
                    })
                }
            }
        })
    }
}

function initIconTextHover() {
    "use strict";
    if ($j('.mkd_icon_with_title').length) {
        $j('.mkd_icon_with_title').each(function() {
            var hover_style = '';
            var initial_style = '';
            if (typeof $j(this).data('icon-hover-color') !== 'undefined' && $j(this).data('icon-hover-color') !== false) {
                var icon_hover_color = $j(this).data('icon-hover-color');
                hover_style += 'color: ' + icon_hover_color + ' !important;'
            }
            if (typeof $j(this).data('icon-hover-background-color') !== 'undefined' && $j(this).data('icon-hover-background-color') !== false) {
                var icon_hover_background_color = $j(this).data('icon-hover-background-color');
                hover_style += 'background-color: ' + icon_hover_background_color + ' !important;'
            }
            var $el;
            if ($j(this).has('.mkd_icon_stack').length) { $el = $j(this).find('.mkd_icon_stack') } else { $el = $j(this).find('.mkd_font_elegant_holder') }
            var initial_icon_color = $el.css('color');
            if (initial_icon_color !== '') { initial_style += 'color: ' + initial_icon_color + ';' }
            var initial_width = $el.css('width');
            if (initial_width !== '') {
                hover_style += 'width: ' + initial_width + ';';
                initial_style += 'width: ' + initial_width + ';'
            }
            var initial_height = $el.css('height');
            if (initial_height !== '') {
                hover_style += 'height: ' + initial_height + ';';
                initial_style += 'height: ' + initial_height + ';'
            }
            var initial_line_height = $el.css('line-height');
            if (initial_line_height !== '') {
                hover_style += 'line-height: ' + initial_line_height + ';';
                initial_style += 'line-height: ' + initial_line_height + ';'
            }
            var initial_border_color = $el.css('border-left-color');
            var initial_border_width = $el.css('border-left-width');
            if (initial_border_color !== '') {
                initial_style += 'border-color: ' + initial_border_color + ';';
                if (initial_border_width !== '') {
                    initial_style += 'border-width: ' + initial_border_width + ';';
                    hover_style += 'border-width: ' + initial_border_width + ';'
                }
            }
            var initial_background_color = $el.css('background-color');
            if (initial_background_color !== '') { initial_style += 'background-color: ' + initial_background_color + ';' }
            var initial_font_size = $el.css('font-size');
            if (initial_font_size !== '') {
                initial_style += 'font-size: ' + initial_font_size + ';';
                hover_style += 'font-size: ' + initial_font_size + ';'
            }
            $j(this).find('.icon_holder_inner').hover(function() { $el.attr('style', function() { return hover_style }) }, function() { $el.attr('style', function() { return initial_style }) })
        })
    }
    if ($j('.mkd_box_holder').length) {
        $j('.mkd_box_holder').each(function() {
            var hover_style = '';
            var initial_style = '';
            if (typeof $j(this).data('icon-hover-color') !== 'undefined' && $j(this).data('icon-hover-color') !== false) {
                var icon_hover_color = $j(this).data('icon-hover-color');
                hover_style += 'color: ' + icon_hover_color + ' !important;'
            }
            if (typeof $j(this).data('icon-hover-background-color') !== 'undefined' && $j(this).data('icon-hover-background-color') !== false) {
                var icon_hover_background_color = $j(this).data('icon-hover-background-color');
                hover_style += 'background-color: ' + icon_hover_background_color + ' !important;'
            }
            var $el;
            if ($j(this).has('.mkd_icon_stack').length) { $el = $j(this).find('.mkd_icon_stack') } else { $el = $j(this).find('.mkd_font_elegant_holder') }
            var initial_icon_color = $el.css('color');
            if (initial_icon_color !== '') { initial_style += 'color: ' + initial_icon_color + ';' }
            var initial_width = $el.css('width');
            if (initial_width !== '') {
                hover_style += 'width: ' + initial_width + ';';
                initial_style += 'width: ' + initial_width + ';'
            }
            var initial_height = $el.css('height');
            if (initial_height !== '') {
                hover_style += 'height: ' + initial_height + ';';
                initial_style += 'height: ' + initial_height + ';'
            }
            var initial_line_height = $el.css('line-height');
            if (initial_line_height !== '') {
                hover_style += 'line-height: ' + initial_line_height + ';';
                initial_style += 'line-height: ' + initial_line_height + ';'
            }
            var initial_border_color = $el.css('border-left-color');
            var initial_border_width = $el.css('border-left-width');
            if (initial_border_color !== '') {
                initial_style += 'border-color: ' + initial_border_color + ';';
                if (initial_border_width !== '') {
                    initial_style += 'border-width: ' + initial_border_width + ';';
                    hover_style += 'border-width: ' + initial_border_width + ';'
                }
            }
            var initial_background_color = $el.css('background-color');
            if (initial_background_color !== '') { initial_style += 'background-color: ' + initial_background_color + ';' }
            var initial_font_size = $el.css('font-size');
            if (initial_font_size !== '') {
                initial_style += 'font-size: ' + initial_font_size + ';';
                hover_style += 'font-size: ' + initial_font_size + ';'
            }
            $j(this).find('.icon_holder_inner').hover(function() { $el.attr('style', function() { return hover_style }) }, function() { $el.attr('style', function() { return initial_style }) })
        })
    }
}

function initInteractiveBannersShader() {
    "use strict";
    if ($j('.mkd_image_with_text_over').length) {
        $j('.mkd_image_with_text_over').each(function() {
            if (typeof $j(this).children('.shader').data('hover-background-color') !== 'undefined' && $j(this).data('hover-background-color') !== false) {
                var hover_background_color = $j(this).children('.shader').data('hover-background-color');
                var initial_background_color = $j(this).children('.shader').css('background-color');
                $j(this).hover(function() { $j(this).children('.shader').css('background-color', hover_background_color) }, function() { $j(this).children('.shader').css('background-color', initial_background_color) })
            }
        })
    }
}

function initInteractiveBannersBorderStyle() {
    "use strict";
    if ($j('.mkd_image_with_text_over').length) {
        $j('.mkd_image_with_text_over').each(function() {
            var hover_border_color = "#969393";
            if (typeof $j(this).find('.front_holder_inner').data('hover-border-color') !== 'undefined' && $j(this).find('.front_holder_inner').data('hover-border-color') !== false) {
                hover_border_color = $j(this).find('.front_holder_inner').data('hover-border-color');
                $j(this).hover(function() {
                    $j(this).find('.front_holder_inner').css('border-width', "1px");
                    $j(this).find('.front_holder_inner').css('border-style', "solid");
                    $j(this).find('.front_holder_inner').css('border-color', hover_border_color)
                }, function() { $j(this).find('.front_holder_inner').css('border-width', "0") })
            }
        })
    }
}
var keys = [37, 38, 39, 40];

function preventDefaultValue(e) {
    "use strict";
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false
}

function keydown(e) { "use strict"; for (var i = keys.length; i--;) { if (e.keyCode === keys[i]) { preventDefaultValue(e); return } } }

function wheel(e) {
    "use strict";
    preventDefaultValue(e)
}

function disable_scroll() {
    "use strict";
    if (window.addEventListener) { window.addEventListener('DOMMouseScroll', wheel, false) }
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
    if ($j('body').hasClass('smooth_scroll')) {
        window.removeEventListener('mousewheel', smoothScrollListener, false);
        window.removeEventListener('DOMMouseScroll', smoothScrollListener, false)
    }
}

function enable_scroll() {
    "use strict";
    if (window.removeEventListener) { window.removeEventListener('DOMMouseScroll', wheel, false) }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
    if ($j('body').hasClass('smooth_scroll')) {
        window.addEventListener('mousewheel', smoothScrollListener, false);
        window.addEventListener('DOMMouseScroll', smoothScrollListener, false)
    }
}

function initPopupMenu() {
    "use strict";
    if ($j('a.popup_menu').length) {
        $j(".popup_menu_holder_outer").height($window_height).niceScroll({ scrollspeed: 30, mousescrollstep: 20, cursorwidth: 0, cursorborder: 0, cursorborderradius: 0, cursorcolor: "transparent", autohidemode: false, horizrailenabled: false });
        $j(window).resize(function() { $j(".popup_menu_holder_outer").height($window_height) });
        if ($j('body').hasClass('fade_push_text_right') || $j('body').hasClass('fade_push_text_top')) {
            if ($j('.fullscreen_above_menu_widget_holder > div').length) {
                $j('.popup_menu_holder_outer nav > ul > li > a').each(function(i) { $j(this).css({ '-webkit-animation-delay': (i + 1) * 70 + 'ms', 'animation-delay': (i + 1) * 70 + 'ms' }) });
                $j('.fullscreen_menu_widget_holder > div').css({ '-webkit-animation-delay': ($j('.popup_menu_holder_outer nav > ul > li > a').length + 1) * 70 + 'ms', 'animation-delay': ($j('.popup_menu_holder_outer nav > ul > li > a').length + 1) * 70 + 'ms' });
                $j('.fullscreen_above_menu_widget_holder > div').css({ '-webkit-animation-delay': 0 + 'ms', 'animation-delay': 0 + 'ms' })
            } else {
                $j('.popup_menu_holder_outer nav > ul > li > a').each(function(i) { $j(this).css({ '-webkit-animation-delay': i * 70 + 'ms', 'animation-delay': i * 70 + 'ms' }) });
                $j('.fullscreen_menu_widget_holder > div').css({ '-webkit-animation-delay': ($j('.popup_menu_holder_outer nav > ul > li > a').length + 1) * 70 + 'ms', 'animation-delay': ($j('.popup_menu_holder_outer nav > ul > li > a').length + 1) * 70 + 'ms' })
            }
        }
        $j('a.popup_menu').on('click', function(e) {
            e.preventDefault();
            if (!$j(this).hasClass('opened')) {
                $j(this).addClass('opened');
                $j('body').addClass('popup_menu_opened');
                if ($j(this).hasClass('fade_push_text_right')) {
                    $j('body').addClass('fade_in').removeClass('fade_out');
                    $j('body').removeClass('push_nav_right')
                } else if ($j(this).hasClass('fade_push_text_top')) {
                    $j('body').addClass('fade_in').removeClass('fade_out');
                    $j('body').removeClass('push_text_top')
                } else if ($j(this).hasClass('fade_text_scaledown')) { $j('body').addClass('fade_in').removeClass('fade_out') }
                if (!$j('body').hasClass('page-template-full_screen-php')) { disable_scroll() }
            } else {
                $j(this).removeClass('opened');
                $j('body').removeClass('popup_menu_opened');
                if ($j(this).hasClass('fade_push_text_right') || $j(this).hasClass('fade_push_text_top') || $j(this).hasClass('fade_text_scaledown')) { $j('body').removeClass('fade_in').addClass('fade_out') }
                if ($j(this).hasClass('fade_push_text_right')) { $j('body').addClass('push_nav_right') } else if ($j(this).hasClass('fade_push_text_top')) { $j('body').addClass('push_text_top') }
                if (!$j('body').hasClass('page-template-full_screen-php')) { enable_scroll() }
                $j("nav.popup_menu ul.sub_menu").slideUp(200, function() { $j('nav.popup_menu').getNiceScroll().resize() })
            }
        });
        $j(".popup_menu > ul > li.has_sub > a, .popup_menu > ul > li.has_sub > h6").on('tap click', function(e) {
            e.preventDefault();
            if ($j(this).closest('li.has_sub').find("> ul.sub_menu").is(":visible")) {
                $j(this).closest('li.has_sub').find("> ul.sub_menu").slideUp(200, function() { $j('.popup_menu_holder_outer').getNiceScroll().resize() });
                $j(this).closest('li.has_sub').removeClass('open_sub')
            } else {
                $j(this).closest('li.has_sub').addClass('open_sub');
                $j(this).closest('li.has_sub').find("> ul.sub_menu").slideDown(200, function() { $j('.popup_menu_holder_outer').getNiceScroll().resize() })
            }
            return false
        });
        $j(".popup_menu ul li:not(.has_sub) a").click(function(e) {
            if (($j(this).attr('href') !== "http://#") && ($j(this).attr('href') !== "#")) {
                if (e.which == 1) {
                    $j('a.popup_menu').removeClass('opened  ');
                    $j('body').removeClass('popup_menu_opened');
                    if ($j('a.popup_menu').hasClass('fade_push_text_right') || $j('a.popup_menu').hasClass('fade_push_text_top') || $j('a.popup_menu').hasClass('fade_text_scaledown')) { $j('body').removeClass('fade_in').addClass('fade_out') }
                    if ($j('a.popup_menu').hasClass('fade_push_text_right')) { $j('body').addClass('push_nav_right') } else if ($j('a.popup_menu').hasClass('fade_push_text_top')) { $j('body').addClass('push_text_top') }
                    $j("nav.popup_menu ul.sub_menu").slideUp(200, function() { $j('nav.popup_menu').getNiceScroll().resize() });
                    enable_scroll()
                }
            } else { return false }
        })
    }
}

function initFullScreenTemplate() {
    "use strict";
    if ($j('.full_screen_section_slide').length) { $j('.full_screen_section_slide').closest('.full_screen_section').addClass('full_screen_section_slides') }
    if ($j('.full_screen_holder').length && ($j('body').hasClass('enable_full_screen_sections_on_small_screens') || $window_width > 1000)) {
        var default_header_style = '';
        if ($j('header.page_header').hasClass('light')) { default_header_style = 'light' } else if ($j('header.page_header').hasClass('dark')) { default_header_style = 'dark' } else { default_header_style = header_style_admin }
        $j('#up_fs_button').on('click', function() { $j.fn.fullpage.moveSectionUp(); return false });
        $j('#down_fs_button').on('click', function() { $j.fn.fullpage.moveSectionDown(); return false });
        var section_number = $j('.full_screen_inner > .full_screen_section').length;
        $j('.full_screen_inner').fullpage({
            sectionSelector: '.full_screen_section',
            slideSelector: '.full_screen_section_slide',
            scrollOverflow: true,
            navigation: enable_navigation_on_full_screen_section,
            navigationPosition: 'right',
            afterLoad: function(anchorLink, index) {
                checkActiveArrowsOnFullScrrenTemplate(section_number, index);
                checkFullScreenSectionsForHeaderStyle(index, default_header_style)
            },
            afterRender: function() {
                $j('html').addClass('full_screen_initalized');
                checkActiveArrowsOnFullScrrenTemplate(section_number, 1);
                checkFullScreenSectionsForHeaderStyle(1, default_header_style);
                if (section_number !== 1) { $j('.full_screen_holder').find('.full_screen_navigation_holder').css('visibility', 'visible') }
                $j('.full_screen_holder').find('.full_screen_inner').css('visibility', 'visible');
                $j('.full_screen_preloader').hide();
                if ($j('.full_screen_holder video.full_screen_sections_video').length) { $j('.full_screen_holder video.full_screen_sections_video').each(function() { $j(this).get(0).play() }) }
            }
        });
        initFullScreenTemplateOnPaspartu()
    }
}

function initFullScreenTemplateOnPaspartu() {
    "use strict";
    if ($j('.content.content_top_margin_vm_paspartu').length) {
        $j('.paspartu_inner').css("top", -parseInt($j('.paspartu_top').css('padding-top')));
        $j('.paspartu_inner').css("position", "relative")
    }
}

function checkActiveArrowsOnFullScrrenTemplate(section_number, index) {
    "use strict";
    if (index === 1) { $j('.full_screen_navigation_holder #up_fs_button').hide(); if (index != section_number) { $j('.full_screen_navigation_holder #down_fs_button').show() } } else if (index === section_number) {
        if (section_number === 2) { $j('.full_screen_navigation_holder #up_fs_button').show() }
        $j('.full_screen_navigation_holder #down_fs_button').hide()
    } else {
        $j('.full_screen_navigation_holder #up_fs_button').show();
        $j('.full_screen_navigation_holder #down_fs_button').show()
    }
}

function checkFullScreenSectionsForHeaderStyle(index, default_header_style) {
    "use strict";
    if ($j('[data-mkd_header_style]').length > 0 && $j('header').hasClass('header_style_on_scroll')) {
        if ($j($j('.full_screen_holder .full_screen_inner .full_screen_section')[index - 1]).data("mkd_header_style") !== undefined) {
            var header_style = $j($j('.full_screen_holder .full_screen_inner .full_screen_section')[index - 1]).data("mkd_header_style");
            $j('header, #fp-nav').removeClass('dark light').addClass(header_style)
        } else { $j('header, #fp-nav').removeClass('dark light').addClass(default_header_style) }
    }
}

function initPortfolioBlurEffect() {
    "use strict";
    var $projectItemHolder = $j('.prominent_blur_hover');
    $projectItemHolder.on('mouseenter', function(event) {
        $projectItemHolder.addClass('active');
        $projectItemHolder.not($j(this)).removeClass('active').addClass('blur')
    });
    $projectItemHolder.on('mouseleave', function(event) {
        $projectItemHolder.removeClass('blur');
        $projectItemHolder.removeClass('active')
    })
}

function initSocialIconsSidebarEffect() {
    "use strict";
    var $social_icons_widget = $j('#social_icons_widget');
    $social_icons_widget.addClass('loaded')
}

function initVerticalSplitSlider() {
    "use strict";
    if ($j('html').hasClass('vertical_split_screen_initalized')) {
        $j('html').removeClass('vertical_split_screen_initalized');
        $j.fn.multiscroll.destroy()
    }
    if ($j('.vertical_split_slider').length) {
        var default_header_style = '';
        if ($j('header.page_header').hasClass('light')) { default_header_style = 'light' } else if ($j('header.page_header').hasClass('dark')) { default_header_style = 'dark' } else { default_header_style = header_style_admin }
        var data_disable_header_skin_change = $j('.vertical_split_slider').data('disable-header-skin-change');
        $j('.vertical_split_slider_preloader').fadeOut(800);
        $j('.vertical_split_slider').height($window_height).animate({ opacity: 1 }, 300);
        $j('.vertical_split_slider').multiscroll({
            scrollingSpeed: 800,
            navigation: true,
            useAnchorsOnLoad: false,
            afterRender: function() {
                checkVerticalSplitSectionsForHeaderStyle($j('.ms-right .ms-section:last-child').data('header_style'), default_header_style, data_disable_header_skin_change);
                $j('html').addClass('vertical_split_screen_initalized');
                initButtonHover();
                initSocialIconHover();
                initIconHover();
                if ($j('div.wpcf7 > form').length) {
                    _wpcf7.supportHtml5 = $j.wpcf7SupportHtml5();
                    $j('div.wpcf7 > form').wpcf7InitForm()
                }
                initTestimonials();
                initTestimonialCarousel();
                prettyPhoto();
                initCountdown();
                var vertical_split_slider_responsive = $j("<div class='vertical_split_slider_responsive' />");
                $j(".vertical_split_slider").after(vertical_split_slider_responsive);
                var left_side = $j('.vertical_split_slider .ms-left > div');
                var right_side = $j('.vertical_split_slider .ms-right > div');
                for (var i = 0; i < left_side.length; i++) {
                    vertical_split_slider_responsive.append($j(left_side[i]).clone(true));
                    vertical_split_slider_responsive.append($j(right_side[left_side.length - 1 - i]).clone(true))
                }
                initPortfolio();
                initPortfolioMasonry();
                initFlexSlider();
                if ($j('.vertical_split_slider_responsive .mkd_google_map').length) {
                    $j('.vertical_split_slider_responsive .mkd_google_map').each(function() {
                        $j(this).empty();
                        var num = Math.floor((Math.random() * 100000) + 1);
                        $j(this).attr('id', 'map_canvas_' + num);
                        $j(this).data('unique-id', num)
                    })
                }
                showGoogleMap()
            },
            onLeave: function(index, nextIndex, direction) { checkVerticalSplitSectionsForHeaderStyle($j($j('.ms-right .ms-section')[$j(".ms-right .ms-section").length - nextIndex]).data('header_style'), default_header_style, data_disable_header_skin_change) }
        });
        if ($window_width <= 1000) { $j.fn.multiscroll.destroy() } else { $j.fn.multiscroll.build() }
        $j(window).resize(function() { if ($window_width <= 1000) { $j.fn.multiscroll.destroy() } else { $j.fn.multiscroll.build() } })
    } else { if (!$j('.full_screen_holder').length) { $j('html,body').css('height', 'auto') } }
}

function checkVerticalSplitSectionsForHeaderStyle(section_header_style, default_header_style, data_disable_header_skin_change) {
    "use strict";
    if (section_header_style != "") {
        if (data_disable_header_skin_change == 'no') { $j('header.page_header').removeClass('dark light').addClass(section_header_style) }
        $j('#multiscroll-nav').removeClass('dark light').addClass(section_header_style)
    } else {
        if (data_disable_header_skin_change == 'no') { $j('header.page_header').removeClass('dark light').addClass(default_header_style) }
        $j('#multiscroll-nav').removeClass('dark light').addClass(default_header_style)
    }
}

function initVerticalSplitSectionWidth() {
    "use strict";
    if ($j('.vertical_split_slider').length) {
        $j('.vertical_split_slider').each(function() {
            if (typeof $j(this).data('left-slide-panel-size') !== 'undefined' && $j(this).data('left-slide-panel-size') !== false) {
                var left_panel_slide_size = $j(this).data('left-slide-panel-size');
                $j(this).find('.ms-left').css("width", left_panel_slide_size + "%")
            }
            if (typeof $j(this).data('right-slide-panel-size') !== 'undefined' && $j(this).data('right-slide-panel-size') !== false) {
                var right_panel_slide_size = $j(this).data('right-slide-panel-size');
                $j(this).find('.ms-right').css("width", right_panel_slide_size + "%")
            }
        })
    }
}

function checkHeaderStyleOnScroll() {
    "use strict";
    if ($j('[data-mkd_header_style]').length > 0 && $j('header').hasClass('header_style_on_scroll')) {
        var default_header_style = '';
        if ($j('header.page_header').hasClass('light')) { default_header_style = 'light' } else if ($j('header.page_header').hasClass('dark')) { default_header_style = 'dark' } else { default_header_style = header_style_admin }
        var paspartu_top_add = $j('body').hasClass('paspartu_on_top_fixed') ? Math.round($window_width * paspartu_width) : 0;
        var paspartu_bottom_add = $j('body').hasClass('paspartu_on_bottom_fixed') ? Math.round($window_width * paspartu_width) : 0;
        $j('.full_width_inner > .wpb_row.section, .full_width_inner > .parallax_section_holder, .container_inner > .wpb_row.section, .container_inner > .parallax_section_holder, .portfolio_single > .wpb_row.section').waypoint(function(direction) {
            if (direction === 'down') {
                if ($j(this.element).data("mkd_header_style") !== undefined) {
                    var header_style = $j(this.element).data("mkd_header_style");
                    $j('header').removeClass('dark light').addClass(header_style)
                } else { $j('header').removeClass('dark light').addClass(default_header_style) }
            }
        }, { offset: 0 + paspartu_top_add });
        $j('.title, .full_width_inner > .wpb_row.section, .full_width_inner > .parallax_section_holder, .container_inner > .wpb_row.section, .container_inner > .parallax_section_holder, .portfolio_single > .wpb_row.section, .mkd_slider').waypoint(function(direction) {
            if (direction === 'up') {
                if ($j(this.element).data("mkd_header_style") !== undefined) {
                    var header_style = $j(this.element).data("mkd_header_style");
                    $j('header').removeClass('dark light').addClass(header_style)
                } else { $j('header').removeClass('dark light').addClass(default_header_style) }
            }
        }, { offset: function() { return -$j(this.element).outerHeight() + paspartu_bottom_add } })
    }
}

function checkHolderWidth() {
    "use strict";
    if ($j('.full_width').length) {
        if ($j('.mkd_elements_holder').length && !$j('.mkd_elements_holder').parents('.grid_section').length) {
            $j('.mkd_elements_holder').each(function() {
                var element_holder_width = $j(this).width();
                var number_of_items_inside = $j(this).find('.mkd_elements_item').length;
                if ((element_holder_width % number_of_items_inside) !== 0) {
                    var new_element_width = element_holder_width + (number_of_items_inside - (element_holder_width % number_of_items_inside));
                    $j(this).width(new_element_width)
                } else { $j(this).removeStyle('width') }
            })
        }
    }
}

function setServiceTableStyles() {
    "use strict";
    if ($j('.service_table_holder').length) {
        $j('.service_table_holder').each(function() {
            var icon_image_padding_top;
            var icon_image_padding_bottom;
            if (typeof $j(this).find('.service_table_inner').data('icon-back-color') !== 'undefined' && $j(this).find('.service_table_inner').data('icon-back-color') !== false) {
                var icon_back_color = $j(this).find('.service_table_inner').data('icon-back-color');
                $j(this).find('.service_icon').css('background-color', icon_back_color)
            }
            if (typeof $j(this).find('.service_table_inner').data('icon-padding-top') !== 'undefined' && $j(this).find('.service_table_inner').data('icon-padding-top') !== false) { icon_image_padding_top = $j(this).find('.service_table_inner').data('icon-padding-top'); if ($j(this).find('.service_table_inner .service_icon').length) { $j(this).find('.service_table_icon').css('padding-top', icon_image_padding_top + 'px') } else if ($j(this).find('.service_table_inner .service_image').length) { $j(this).find('.service_image').css('padding-top', icon_image_padding_top + 'px') } }
            if (typeof $j(this).find('.service_table_inner').data('icon-padding-bottom') !== 'undefined' && $j(this).find('.service_table_inner').data('icon-padding-bottom') !== false) { icon_image_padding_bottom = $j(this).find('.service_table_inner').data('icon-padding-bottom'); if ($j(this).find('.service_table_inner .service_icon').length) { $j(this).find('.service_table_icon').css('padding-bottom', icon_image_padding_bottom + 'px') } else if ($j(this).find('.service_table_inner .service_image').length) { $j(this).find('.service_image').css('padding-bottom', icon_image_padding_bottom + 'px') } }
        })
    }
}

function initProcessHeightWidth() {
    "use strict";
    if ($j('.mkd_circles_shortcode').length) {
        $j('.mkd_circles_shortcode').each(function() {
            var proces_height;
            var proces_width;
            var top_position;
            var li_process_width;
            if (typeof $j(this).find('.mkd_circles_holder').data('proces-height') !== 'undefined' && $j(this).find('.mkd_circles_holder').data('proces-height') !== false) { proces_height = $j(this).find('.mkd_circles_holder').data('proces-height') }
            if (typeof $j(this).find('.mkd_circles_holder').data('proces-width') !== 'undefined' && $j(this).find('.mkd_circles_holder').data('proces-width') !== false) { proces_width = $j(this).find('.mkd_circles_holder').data('proces-width') }
            if (proces_width == proces_height) { li_process_width = $j('.mkd_circle_outer').width(); if (li_process_width < proces_height) { proces_height = li_process_width } }
            if (proces_width) {
                proces_width += 'px';
                $j(this).find('.mkd_circles_holder .mkd_circle_inner').css('width', proces_width)
            }
            if (proces_height) {
                top_position = proces_height / 2;
                proces_height += 'px';
                top_position += 'px';
                $j(this).find('.circle_line_holder').css('top', top_position);
                $j(this).find('.mkd_circles_holder .mkd_circle_inner').css('height', proces_height)
            }
            $j(this).css('visibility', 'visible')
        })
    }
}

function initCustomFontResize() {
    "use strict";
    if ($j('.custom_font_holder').length) {
        $j('.custom_font_holder').each(function() {
            var font_size;
            var line_height;
            var coef1 = 1;
            var coef2 = 1;
            if ($window_width < 1200) { coef1 = 0.8 }
            if ($window_width < 1000) { coef1 = 0.7 }
            if ($window_width < 768) {
                coef1 = 0.6;
                coef2 = 0.7
            }
            if ($window_width < 600) {
                coef1 = 0.5;
                coef2 = 0.5
            }
            if ($window_width < 480) {
                coef1 = 0.4;
                coef2 = 0.4
            }
            if (typeof $j(this).data('font-size') !== 'undefined' && $j(this).data('font-size') !== false) {
                font_size = $j(this).data('font-size');
                if (font_size > 35) { font_size = Math.round(font_size * coef2) }
                if (font_size > 70) { font_size = Math.round(font_size * coef1) }
                $j(this).css('font-size', font_size + 'px')
            }
            if (typeof $j(this).data('line-height') !== 'undefined' && $j(this).data('line-height') !== false) { line_height = $j(this).data('line-height'); if (line_height > 35 && $window_width < 1200) { $j(this).css('line-height', '1.3em') } }
        })
    }
}

function initVerticalTabsContentHeight() {
    "use strict";
    $j('.mkd_tabs.vertical').each(function() { $j(this).find('.tabs-container').css('min-height', $j(this).find('.tabs-nav').height()) })
}

function initVerticalTabsWidth() {
    "use strict";
    $j('.mkd_tabs.vertical:not(.default)').each(function() {
        var $this = $j(this);
        var $tabs_nav_width = $this.find('.tabs-nav').width();
        $this.find('.tabs-nav li a').css('min-width', $tabs_nav_width)
    })
}

function initTabsStyle() {
    "use strict";
    if ($j('.mkd_tabs').length) {
        $j('.mkd_tabs').each(function() {
            var tab_border_radius;
            if (typeof $j(this).data('tab-border-radius') !== 'undefined' && $j(this).data('tab-border-radius') !== false) {
                tab_border_radius = $j(this).data('tab-border-radius');
                $j(this).find('.tabs-nav li a').css('border-radius', tab_border_radius + 'px');
                $j(this).find('.tabs-nav li').css('border-radius', tab_border_radius + 'px')
            }
        })
    }
}

function preloadBackgrounds() {
    "use strict";
    $j(".preload_background ").each(function() {
        var $this = $j(this);
        if ($this.css("background-image") != "" && $this.css("background-image") != "none") {
            var bg_url = $this.attr('style');
            bg_url = bg_url.match(/url\(["']?([^'")]+)['"]?\)/);
            bg_url = bg_url ? bg_url[1] : "";
            if (bg_url) {
                var backImg = new Image();
                backImg.src = bg_url;
                $j(backImg).load(function() {
                    $this.removeClass('preload_background');
                    initParallaxTitle()
                })
            }
        } else { $j(window).load(function() { $this.removeClass('preload_background') }) }
    })
}

function setVideoHeightAndWidth() {
    "use strict";
    $j('div.wp-video .wp-video-shortcode video').each(function() {
        var $this = $j(this);
        var vidWidth = $this.attr('width');
        var vidHeight = $this.attr('height');
        var id = $this.attr('id');
        $this.parent('.wp-video-shortcode').css('height', vidHeight);
        $this.parent('.wp-video-shortcode').css('width', vidWidth)
    })
}

function createTabIcons() {
    "use strict";
    var tabContent = $j('.tabs-container > .tab-content');
    tabContent.each(function() { var id = $j(this).attr('id'); var icon = ''; if (typeof($j(this).data('icon-html')) !== 'undefined') { icon = $j(this).data('icon-html') } var tabNav = $j(this).parents('.mkd_tabs').find('ul.tabs-nav > li > a[href=#' + id + ']'); if (typeof(tabNav) !== 'undefined') { tabNav.children('.icon_frame').append(icon) } })
}

function initMikadoElementAnimationSkrollr() {
    "use strict";
    if ($j('.no-touch .carousel').length == 0) {
        var elementItemAnimation = $j('.no-touch .mkd_elements_holder > .mkd_elements_item');
        elementItemAnimation.each(function() {
            if ((typeof($j(this).data('animation')) !== 'undefined' || typeof($j('.title_outer').data('animation')) !== 'undefined') && $j(this).data('animation') == 'yes') {
                var skr = skrollr.init({ smoothScrolling: false, forceHeight: false });
                skr.refresh();
                return false
            }
        })
    }
}

function initElementsHolderBorderAnimation() {
    "use strict";
    var elementsHolder = $j('.mkd_animated_elements_holder');
    elementsHolder.append('<div class="mkd_borderline_content"></div>');
    var borderlineContent = $j('.mkd_borderline_content');
    borderlineContent.append('<div class="mkd_borderline_drawing"><div></div><div></div><div></div><div></div></div>');
    var borderlineDrawing = $j('.mkd_borderline_drawing');

    function contentSize() {
        borderlineDrawing.each(function() {
            var borderlineContentWidth = $j(this).parent().width();
            var borderlineContentHeight = $j(this).parent().height();
            $j(this).width(borderlineContentWidth);
            $j(this).height(borderlineContentHeight)
        })
    }
    $j(window).resize(function() { contentSize() });
    contentSize();
    elementsHolder.each(function() {
        var timeAllBorderAnim = $j(this).data('animation-time');
        var timePerSide = timeAllBorderAnim / 4;
        var animation = $j(this).data('animation');
        var elementBorderline = $j(this).find('.mkd_borderline_drawing');
        var height = $j(this).data('border-width');
        if (height == '') { height = '2' }
        var color = $j(this).data('border-color');
        if (color == '') { color = '#000' }
        $j(this).find('.mkd_borderline_drawing div:nth-child(odd)').css({ 'background-color': color, 'height': height + 'px' });
        $j(this).find('.mkd_borderline_drawing div:nth-child(even)').css({ 'background-color': color, 'width': height + 'px' });
        $j(this).appear(function() {
            switch (animation) {
                case 'mkd_box_continue_line':
                    for (var i = 1; i < 5; i++) { elementBorderline.find(':nth-child(' + i + ')').addClass('animate').css({ '-webkit-transition': timePerSide + 's ' + timePerSide * (i - 1) + 's', 'transition': timePerSide + 's ' + timePerSide * (i - 1) + 's' }) }
                    break;
                case 'mkd_box_corner_line':
                    for (var i = 1; i < 5; i++) { if (i % 2 != 0) { elementBorderline.find(':nth-child(' + i + ')').addClass('animate').css({ '-webkit-transition': 2 * timePerSide + 's ', 'transition': 2 * timePerSide + 's ' }) } else { elementBorderline.find(':nth-child(' + i + ')').addClass('animate').css({ '-webkit-transition': 2 * timePerSide + 's ' + 2 * timePerSide + 's', 'transition': 2 * timePerSide + 's ' + 2 * timePerSide + 's' }) } }
                    break;
                case 'mkd_box_simultaneous_line':
                    elementBorderline.find('div').addClass('animate').css({ '-webkit-transition': 4 * timePerSide + 's ', 'transition': 4 * timePerSide + 's ' });
                    break
            }
        }, { accX: 0, accY: element_appear_amount })
    })
}

function getIconClassesForNavigation(iconClass) {
    "use strict";
    var leftIconClass = '';
    var rightIconClass = '';
    switch (iconClass) {
        case 'arrow_carrot-left_alt2':
            leftIconClass = 'arrow_carrot-left_alt2';
            rightIconClass = 'arrow_carrot-right_alt2';
            break;
        case 'arrow_carrot-2left_alt2':
            leftIconClass = 'arrow_carrot-2left_alt2';
            rightIconClass = 'arrow_carrot-2right_alt2';
            break;
        case 'arrow_triangle-left_alt2':
            leftIconClass = 'arrow_triangle-left_alt2';
            rightIconClass = 'arrow_triangle-right_alt2';
            break;
        case 'icon-arrows-drag-left-dashed':
            leftIconClass = 'icon-arrows-drag-left-dashed';
            rightIconClass = 'icon-arrows-drag-right-dashed';
            break;
        case 'icon-arrows-drag-left-dashed':
            leftIconClass = 'icon-arrows-drag-left-dashed';
            rightIconClass = 'icon-arrows-drag-right-dashed';
            break;
        case 'icon-arrows-left-double-32':
            leftIconClass = 'icon-arrows-left-double-32';
            rightIconClass = 'icon-arrows-right-double';
            break;
        case 'icon-arrows-slide-left1':
            leftIconClass = 'icon-arrows-slide-left1';
            rightIconClass = 'icon-arrows-slide-right1';
            break;
        case 'icon-arrows-slide-left2':
            leftIconClass = 'icon-arrows-slide-left2';
            rightIconClass = 'icon-arrows-slide-right2';
            break;
        case 'icon-arrows-slim-left-dashed':
            leftIconClass = 'icon-arrows-slim-left-dashed';
            rightIconClass = 'icon-arrows-slim-right-dashed';
            break;
        case 'ion-arrow-left-a':
            leftIconClass = 'ion-arrow-left-a';
            rightIconClass = 'ion-arrow-right-a';
            break;
        case 'ion-arrow-left-b':
            leftIconClass = 'ion-arrow-left-b';
            rightIconClass = 'ion-arrow-right-b';
            break;
        case 'ion-arrow-left-c':
            leftIconClass = 'ion-arrow-left-c';
            rightIconClass = 'ion-arrow-right-c';
            break;
        case 'ion-ios-arrow-':
            leftIconClass = iconClass + 'left';
            rightIconClass = iconClass + 'right';
            break;
        case 'ion-ios-forward':
            leftIconClass = 'ion-ios-arrow-back';
            rightIconClass = 'ion-ios-arrow-forward';
            break;
        case 'ion-ios-fastforward':
            leftIconClass = 'ion-ios-rewind';
            rightIconClass = 'ion-ios-fastforward';
            break;
        case 'ion-ios-fastforward-outline':
            leftIconClass = 'ion-ios-rewind-outline';
            rightIconClass = 'ion-ios-fastforward-outline';
            break;
        case 'ion-ios-skipbackward':
            leftIconClass = 'ion-ios-skipbackward';
            rightIconClass = 'ion-ios-skipforward';
            break;
        case 'ion-ios-skipbackward-outline':
            leftIconClass = 'ion-ios-skipbackward-outline';
            rightIconClass = 'ion-ios-skipforward-outline';
            break;
        case 'ion-android-arrow-':
            leftIconClass = iconClass + 'back';
            rightIconClass = iconClass + 'forward';
            break;
        case 'ion-android-arrow-dropleft-circle':
            leftIconClass = 'ion-android-arrow-dropleft-circle';
            rightIconClass = 'ion-android-arrow-dropright-circle';
            break;
        default:
            leftIconClass = iconClass + 'left';
            rightIconClass = iconClass + 'right'
    }
    var iconClasses = { leftIconClass: leftIconClass, rightIconClass: rightIconClass };
    return iconClasses
}

function initPageTitleAnimation() {
    "use strict";
    if ($j('.title_outer').data('animation') == 'yes' && $j('.no-touch .title_outer').length > 0) {
        var skrollr_title = skrollr.init({ smoothScrolling: false, forceHeight: false });
        skrollr_title.refresh()
    }
}

function initMasonryGallery() {
    "use strict";
    resizeMasonryGallery($j('.grid-sizer').width());
    if ($j('.masonry_gallery_holder').length) {
        $j('.masonry_gallery_holder').each(function() {
            var $this = $j(this);
            $this.waitForImages(function() {
                $this.animate({ opacity: 1 });
                $this.isotope({ itemSelector: '.masonry_gallery_item', masonry: { columnWidth: '.grid-sizer' } });
                $this.find('.masonry_gallery_item.parallax_item').each(function(i) { $j(this).masonryParallax($this.data('parallax_item_speed'), true, $this.data('parallax_item_offset')) })
            })
        });
        $j(window).resize(function() {
            resizeMasonryGallery($j('.grid-sizer').width());
            $j('.masonry_gallery_holder').isotope('reloadItems')
        })
    }
}

function resizeMasonryGallery(size) {
    "use strict";
    var rectangle_portrait = $j('.masonry_gallery_holder .rectangle_portrait');
    var rectangle_landscape = $j('.masonry_gallery_holder .rectangle_landscape');
    var square_big = $j('.masonry_gallery_holder .square_big');
    var square_small = $j('.masonry_gallery_holder .square_small');
    rectangle_portrait.css('height', 2 * size);
    if (window.innerWidth < 600) { rectangle_landscape.css('height', size / 2) } else { rectangle_landscape.css('height', size) }
    square_big.css('height', 2 * size);
    if (window.innerWidth < 600) { square_big.css('height', square_big.width()) }
    square_small.css('height', size)
}(function($) {
    "use strict";
    $.fn.extend({
        mouseParallax: function(options) {
            var defaults = { moveFactor: 1.5, targetContainer: this };
            var options = $.extend(defaults, options);
            return this.each(function() {
                var o = options;
                var layer_elements = $(o.targetContainer).find('.image, .paralax_layers_content_holder');
                layer_elements.each(function(i) { $(this).css('z-index', i) });
                var mouseXStart;
                var mouseYStart;
                mouseXStart = $(o.targetContainer).offset().left;
                mouseYStart = $(o.targetContainer).offset().top;
                $(o.targetContainer).on('mouseenter', function(e) {
                    mouseXStart = e.pageX - $(this).offset().left;
                    mouseYStart = e.pageY - $(this).offset().top
                });
                $(o.targetContainer).on('mousemove', function(e) {
                    var mouseX0 = $(this).offset().left + mouseXStart;
                    var mouseY0 = $(this).offset().top + mouseYStart;
                    var mouseX = e.pageX - mouseX0;
                    var mouseY = e.pageY - mouseY0;
                    layer_elements.each(function(i) { $(this).css({ marginLeft: -mouseX / 100 * o.moveFactor * (i + 1), marginTop: -mouseY / 100 * o.moveFactor * (i + 1) }, 100) })
                });
                var config = { interval: 0, over: function() {}, timeout: 800, out: function() { layer_elements.each(function(i) { $(this).stop().animate({ marginLeft: 0, marginTop: 0 }, 300) }) } };
                $(o.targetContainer).hoverIntent(config)
            })
        }
    })
}(jQuery));

function setParallaxLayersHeight($this, $def_height) {
    "use strict";
    var parallax_layers_height = $def_height;
    var responsive_breakpoint_set = [1600, 1300, 1000, 768, 567, 320];
    if ($window_width > responsive_breakpoint_set[0]) { parallax_layers_height = $def_height } else if ($window_width > responsive_breakpoint_set[1]) { parallax_layers_height = $def_height * 0.75 } else if ($window_width > responsive_breakpoint_set[2]) { parallax_layers_height = $def_height * 0.6 } else if ($window_width > responsive_breakpoint_set[3]) { parallax_layers_height = $def_height * 0.55 } else if ($window_width <= responsive_breakpoint_set[3]) { parallax_layers_height = $def_height * 0.45 }
    $this.css({ 'height': (parallax_layers_height) + 'px' })
}

function parallaxLayers() {
    "use strict";
    if ($j('.mkd_parallax_layers').length) {
        $j(".mkd_parallax_layers").each(function() {
            var $this = $j(this);
            if ($j(this).hasClass('full_screen_height')) {
                $this.height($window_height);
                $j(window).resize(function() { $this.height($window_height) })
            } else {
                var $def_height = $j(this).data('height');
                setParallaxLayersHeight($this, $def_height);
                $j(window).resize(function() { setParallaxLayersHeight($this, $def_height) })
            }
            var $parallax_layers_holder = $this.find('.mkd_parallax_layers_holder');
            var counter = 0;
            var limit = $this.find(".image").length;
            $this.find(".image").each(function() {
                var $this = $j(this);
                if ($this.css("background-image") != "" && $this.css("background-image") != "none") {
                    var bg_url = $this.attr('style');
                    bg_url = bg_url.match(/url\(["']?([^'")]+)['"]?\)/);
                    bg_url = bg_url ? bg_url[1] : "";
                    if (bg_url) {
                        var backImg = new Image();
                        backImg.src = bg_url;
                        $j(backImg).load(function() { counter++; if (counter == limit) { $parallax_layers_holder.removeClass('preload_parallax_layers'); if ($j('html').hasClass('no-touch')) { $parallax_layers_holder.mouseParallax() } } })
                    }
                }
            })
        })
    }
}

function textSlider() {
    "use strict";
    var showControlNav = true;
    if ($j('.text_slider_container').length) {
        if ($j('.text_slider_container').hasClass('no-navigation')) { showControlNav = false }
        var $textslider = $j('.text_slider_container');
        $textslider.flexslider({ animation: "slide", selector: ".text_slider_container_inner > li", directionNav: false, controlNav: showControlNav })
    }
}

function initVerticalSliderWithTextOver() {
    "use strict";
    if ($j('html').hasClass('vertical_slider_with_text_over_initalized')) {
        $j('html').removeClass('vertical_slider_with_text_over_initalized');
        $j.fn.multiscroll.destroy()
    }
    if ($j('.vertical_slider_with_text_over').length) {
        $j('.vertical_slider_with_text_over_preloader').fadeOut(800);
        var headerHeight = $j('header.page_header').height();
        $j('.vertical_slider_with_text_over').height($window_height - headerHeight - 100).animate({ opacity: 1 }, 300);
        $j('.vertical_slider_with_text_over').multiscroll({ scrollingSpeed: 800, navigation: true, useAnchorsOnLoad: false, afterRender: function() { $j('html').addClass('vertical_slider_with_text_over_initalized') } })
    } else { if (!$j('.full_screen_holder').length) { $j('html,body').css('height', 'auto') } }
}

function alterWPMLSwitcherHeaderBottom() {
    "use strict";
    if ($j('.header_bottom li.menu-item-language').length) {
        var langDropdown = $j('.header_bottom .menu-item-language').find('.submenu-languages');
        if (typeof langDropdown !== 'undefined') {
            langDropdown.parent('li').addClass('narrow');
            langDropdown.wrap('<div class="second"><div class="inner"></div></div>');
            langDropdown.show()
        }
        $j('.header_bottom .menu-item-language').each(function() { $j(this).find('> a').first().wrapInner('<span class="item_inner"><span class="item_text"></span></span>') })
    }
}

function initSeparatorWithTextAnimation() {
    "use strict";
    if ($j('.vc_text_separator.animate_width').length) {
        $j('.vc_text_separator.animate_width').each(function() {
            $j(this).find(".mkd_line_before").css("width", 0);
            $j(this).find(".mkd_line_after").css("width", 0);
            if (typeof $j(this).data('line-width') !== 'undefined' && $j(this).data('line-width') !== false) {
                var line_width = $j(this).data('line-width');
                $j(this).appear(function() {
                    $j(this).find('.mkd_line_before, .mkd_line_after').css('opacity', '1');
                    $j(this).find('.mkd_line_before, .mkd_line_after').css('width', line_width)
                }, { accX: 0, accY: element_appear_amount })
            }
        })
    }
}

function mkdfAnimateOverlappingContent() { "use strict"; if ($j('.animate_overlapping_content').length) { $j('.animate_overlapping_content .overlapping_content, .animate_overlapping_content .full_width').addClass('start_animation') } }

function animateFormFields() {
    "use strict";
    if ($j('.animate_input_holder').length) {
        $j('.animate_input_holder').each(function() {
            $j(this).find('input, textarea').focus(function() { $j(this).parents('.animate_input_holder').addClass('filled') });
            $j(this).find('input, textarea').blur(function() { if ($j(this).val() == '') { $j(this).parents('.animate_input_holder').removeClass('filled') } })
        })
    }
}

function magicPanes() {
    "use strict";
    if ($j('.main_menu.underline_follow').length) {
        var $magicLine = $j(".magic_follow");
        var $menulinks = $j(".main_menu.underline_follow > ul > li");
        var itemPadding = $j('nav.main_menu > ul > li > a > span.item_inner');
        if ($j(".main_menu.underline_follow .active").length > 0) {
            var itemPadding = parseInt($j('nav.main_menu > ul > li > a > span.item_inner').css('padding-left'));
            $j('body').removeClass('menuHoverOn');
            $magicLine.width($j(".active").outerWidth(true)).css("left", $j(".active").position().left);
            $magicLine.width($j(".active").outerWidth(true) - (2 * itemPadding)).css("left", $j(".active").position().left + itemPadding).data("origLeft", $magicLine.position().left).data("origWidth", $magicLine.width());
            var $el;
            var $leftPos;
            var $newWidth;
            $menulinks.mouseenter(function() {
                $el = $j(this);
                $leftPos = $el.position().left;
                $newWidth = $el.outerWidth(true);
                return $magicLine.stop().animate({ left: $leftPos, width: $newWidth }, 200)
            }).mouseleave(function() { return $magicLine.stop().animate({ left: $magicLine.data("origLeft"), width: $magicLine.data("origWidth") }, 200) });
            $j('.main_menu.underline_follow > ul > li a').each(function() {
                $j(this).click(function() {
                    if ($j(this).attr('href') !== "http://#" && $j(this).attr('href') !== "#") {
                        $j('a').parent().removeClass('active');
                        if ($j(this).closest('.second').length === 0) { $j(this).parent().addClass('active') } else { $j(this).closest('.second').parent().addClass('active') }
                        $magicLine.data("origLeft", $leftPos + itemPadding).data("origWidth", $newWidth - (2 * itemPadding));
                        $magicLine.stop().animate({ left: $magicLine.data("origLeft"), width: $magicLine.data("origWidth") })
                    } else { return false }
                })
            })
        } else { $j('body').addClass('menuHoverOn') }
    }
}

function initBlogListIconHover() {
    "use strict";
    if ($j('.post_list').length) {
        $j('.post_list').each(function() {
            var hover_color = $j(this).data('hover-icon-color');
            if ($j(this).find('li').length) {
                $j(this).find('li').each(function() {
                    var initial_color;
                    if ($j(this).find('i').length) { initial_color = $j(this).find('a.qbutton_with_icon i').css('color') }
                    if ($j(this).find('span').length) { initial_color = $j(this).find('a.qbutton_with_icon span').css('color') }
                    $j(this).find('a.qbutton_with_icon').hover(function() { if ($j(this).find('i').length) { $j(this).find('i').css('color', hover_color) } if ($j(this).find('span').length) { $j(this).find('span').css('color', hover_color) } }, function() { if ($j(this).find('i').length) { $j(this).find('i').css('color', initial_color) } if ($j(this).find('span').length) { $j(this).find('span').css('color', initial_color) } })
                })
            }
        })
    }
}

function initIconSlider() {
    "use strict";
    if ($j('.icon_slider_container').length) {
        $j('.icon_slider_container').each(function() {
            $j(this).flexslider({ animation: "slide", manualControls: ".icon_slider_controls_holder span .icon_slider_icon", selector: ".icon_slider_container_inner li", directionNav: false });
            $j('.icon_slider_prev').on('click', function() { $j(this).parent().siblings('.icon_slider_container').flexslider('prev'); return false });
            $j('.icon_slider_next').on('click', function() { $j(this).parent().siblings('.icon_slider_container').flexslider('next'); return false })
        })
    }
}

function initBreadcrumbsStyles() {
    "use strict";
    if ($j(".breadcrumb .breadcrumbs").length) {
        $j(".breadcrumb .breadcrumbs").each(function() {
            if (typeof $j(this).data('hover-color') !== 'undefined' && $j(this).data('hover-color') !== false) {
                var hover_color = $j(this).data('hover-color');
                var initial_color = $j(this).find('a').css('color');
                $j(this).find('a').hover(function() { $j(this).css('color', hover_color) }, function() { $j(this).css('color', initial_color) })
            }
        })
    }
}

function initSingleImageHover() { "use strict"; if ($j(".link_animation").length) { $j(".link_animation").each(function() { $j(this).parents('div[class$="on"]').find('div').addClass('backface-remove') }) } }

function initSingleImageShader() {
    "use strict";
    if ($j(".single_image_shader").length) {
        $j(".single_image_shader").each(function() {
            var $this = $j(this);
            $j(this).parents('.vc_single_image-wrapper').appear(function() { $this.addClass('appeared') }, { accX: 0, accY: element_appear_amount })
        })
    }
}

function initSingleImagePopUp() { "use strict"; if ($j(".image_w_popup").length) { $j(".image_w_popup").each(function() { $j(this).find('.single_image_popup_message').appear(function() { $j(this).addClass('appeared') }, { accX: 0, accY: element_appear_amount }) }) } }

function noTypeFont() {
    "use strict";
    if ($j('.typed').length > 0) {
        $j('.typed').each(function() {
            var string_1 = $j(this).find('span:first-child').text();
            var string_2 = $j(this).find('span:nth-child(2)').text();
            var string_3 = $j(this).find('span:nth-child(3)').text();
            var str = '';
            var $this = $j(this);
            if (!string_2.trim() || !string_3.trim()) { str = [string_1] }
            if (!string_3.trim() && string_2.length) { str = [string_1, string_2] }
            if (string_1.length && string_2.length && string_3.length) { str = [string_1, string_2, string_3] }
            var speed = $this.data('speed');
            var back_delay = $this.data('back_delay');
            var loop = $this.data('loop');
            $this.parent().addClass('hidden_typed_holder');
            $this.appear(function() {
                setTimeout(function() { $this.parent().removeClass('hidden_typed_holder') }, 300);
                $this.typed({
                    strings: str,
                    typeSpeed: speed,
                    backSpeed: 0,
                    backDelay: back_delay,
                    cursorChar: "_",
                    loop: loop,
                    contentType: 'text',
                    loopCount: false,
                    callback: function() {
                        $this.addClass('done');
                        $this.siblings('.typed-cursor').css('display', 'none')
                    }
                })
            }, { accX: 0, accY: element_appear_amount })
        })
    }
}

function imageStack() {
    "use strict";
    if ($j('.image_stack').length > 0) {
        $j('.image_stack').each(function() {
            var offset = Math.round($j(window).height() / 3.3);
            $j(this).find('.image').css({ 'height': ($j(this).outerHeight()) + 'px' });
            $j(this).find('.image.inner').css({ 'height': ($j(this).outerHeight() - 40) + 'px' });
            $j(this).find('.image.outer').css({ 'height': ($j(this).outerHeight() - 90) + 'px' });
            $j(this).appear(function() { $j(this).addClass('stacked') }, { accX: 0, accY: -offset })
        })
    }
}

function imageStackResize() { "use strict"; if ($j('.image_stack').length) { $j('.image_stack').each(function() { $j(this).addClass('resized') }) } }

function noInteractivePieChart() {
    "use strict";
    if ($j('.interactive-pie-chart').length > 0) {
        $j('.interactive-pie-chart').each(function() {
            var $this = $j(this);
            $this.appear(function() { $this.addClass('appeared') }, { accX: 0, accY: element_appear_amount });
            if (typeof $this.data('hover-color') !== 'undefined' && $this.data('hover-color') !== false) {
                var hover_color = $this.data('hover-color');
                var initial_color = $this.find('figcaption').css('color');
                $this.find('a').hover(function() { $this.find('figcaption').css('color', hover_color) }, function() { $this.find('figcaption').css('color', initial_color) })
            }
        })
    }
}

function noInteractiveInfoCard() {
    "use strict";
    if ($j('.no_interactive_info_card').length) {
        $j('.no_interactive_info_card').each(function() {
            var $this = $j(this);
            var swap = $this.find('.no_interactive_info_card_swap');
            var text = $this.find('.no_interactive_info_card_text');
            var button = $this.find('.no_interactive_info_card_button');
            var maxHeight = '';
            maxHeight = (text).outerHeight(true) > (button).outerHeight(true) ? (text).outerHeight(true) : (button).outerHeight(true);
            swap.css('height', (maxHeight) + 'px');
            if (typeof $this.data('background-hover-color') !== 'undefined' && $this.data('background-hover-color') !== false) {
                var hover_background_color = $j(this).data('background-hover-color');
                var initial_background_color = $j(this).css('background-color');
                $this.hover(function() { $this.css('background-color', hover_background_color) }, function() { $this.css('background-color', initial_background_color) })
            }
            if (typeof $this.data('title-hover-color') !== 'undefined' && $this.data('title-hover-color') !== false) {
                var title_hover_color = $j(this).data('title-hover-color');
                var initial_title_color = $j(this).find('.no_interactive_info_card_title h3').css('color');
                $this.hover(function() { $this.find('.no_interactive_info_card_title h3').css('color', title_hover_color) }, function() { $this.find('.no_interactive_info_card_title h3').css('color', initial_title_color) })
            }
            if (typeof $this.data('separator-hover-color') !== 'undefined' && $this.data('separator-hover-color') !== false) {
                var separator_hover_color = $j(this).data('separator-hover-color');
                var initial_separator_color = $j(this).find('.separator.small.center').css('border-color');
                $this.hover(function() { $this.find('.separator.small.center').css('border-color', separator_hover_color) }, function() { $this.find('.separator.small.center').css('border-color', initial_separator_color) })
            }
            if (typeof button.find('.qbutton').data('hover-text-color') !== 'undefined' && button.find('.qbutton').data('hover-text-color') !== false) {
                var text_hover_color = button.find('.qbutton').data('hover-text-color');
                var text_initial_color = button.find('.qbutton').css('color');
                button.hover(function() { $j(this).find('.text_wrap').attr('style', 'color:' + text_hover_color + '!important') }, function() { $j(this).find('.text_wrap').attr('style', 'color:' + text_initial_color + '!important') })
            }
        })
    }
}

function instagramAppear() { "use strict"; if ($j('.mkd_instagram_feed').length) { $j('.mkd_instagram_feed').each(function() { $j(this).find('li').each(function(i) { $j(this).delay(i * 120).animate({ opacity: 1 }, 1000) }) }) } }

function setScrollingRails() {
    "use strict";
    if ($j('.mkd-scrolling-rails').length) {
        window.mkdSR = {};
        mkdSR.container = $j('.mkd-scrolling-rails');
        mkdSR.bgnd = mkdSR.container.find('.mkd-sr-bgnd');
        mkdSR.fade_bgnd = mkdSR.bgnd.data('fade-bgnd') == 'yes';
        mkdSR.rail_holder = mkdSR.container.find('.mkd-sr-rail-holder');
        mkdSR.items = mkdSR.rail_holder.find('.mkd-sr-rail-item');
        mkdSR.handle_resize = function() { mkdSR.container.height($j(window).height()) };
        mkdSR.init = function() {
            mkdSR.container.height($j(window).height());
            mkdSR.items.each(function() { $j(this).css('top', $j(this).data('top') + '%').css('left', $j(this).data('left') + '%').css('width', $j(this).data('width') + '%') });
            mkdSR.cur_scroll = $j(window).scrollTop();
            $j(window).scroll(mkdSR.position);
            $j(window).resize(mkdSR.handle_resize);
            mkdSR.position()
        };
        mkdSR.position = function() {
            var win_scroll = $j(window).scrollTop();
            var offset = mkdSR.container.offset().top;
            if (win_scroll > offset && mkdSR.cur_scroll < offset || win_scroll < offset && mkdSR.cur_scroll > offset) { $j(window).scrollTop(offset) } else {
                var scroll = win_scroll - offset;
                var cont_h = mkdSR.container.height(),
                    cont_w = Math.max(mkdSR.container.width(), $j(window).width());
                mkdSR.bgnd.addClass(scroll > 0 && mkdSR.fade_bgnd ? 'hidden' : '').removeClass(scroll <= 0 && mkdSR.fade_bgnd ? 'hidden' : '');
                mkdSR.items.each(function() {
                    if (scroll >= 0 && scroll <= cont_h) {
                        mkdSR.container.css('overflow', 'visible');
                        $j(this).css('transform', 'translate(-80%,-80%) rotate(45deg) translateY(' + ($j(this).data('leaving') == 'right' ? '-' : '') + scroll / cont_h * cont_w * Math.pow(2, 0.5) + 'px)')
                    } else if (scroll < 0) {
                        mkdSR.container.css('overflow', '');
                        $j(this).css('transform', '')
                    } else if (scroll > cont_h) {
                        mkdSR.container.css('overflow', '');
                        $j(this).css('transform', 'translate(-80%,-80%) rotate(45deg) translateY(' + ($j(this).data('leaving') == 'right' ? '-' : '') + cont_w * Math.pow(2, 0.5) + 'px)')
                    }
                })
            }
            mkdSR.cur_scroll = $j(window).scrollTop()
        };
        mkdSR.init()
    }
}

function setImageFusion() {
    "use strict";
    if ($j('.mkd-image-fusion').length) {
        window.mkdIF = {};
        mkdIF.container = $j('.mkd-image-fusion');
        mkdIF.side_images = [];
        mkdIF.main_image = [];
        mkdIF.container.each(function(i) {
            var container = $j(this);
            mkdIF.side_images.push(container.find('.mkd-if-side-image'));
            mkdIF.main_image.push(container.find('.mkd-if-main-image'))
        });
        mkdIF.handle_resize = function() {
            mkdIF.container.each(function(i) {
                var holder = mkdIF.main_image[i].parents('.mkd-if-main-holder');
                holder.css({ 'margin-left': 0, 'margin-right': 0 });
                var margin_hor = holder.data('margin-side') / mkdIF.main_image[i].data('original-width') * mkdIF.main_image[i].find('img').width();
                var margin_top = holder.data('margin-top') / mkdIF.main_image[i].data('original-height') * mkdIF.main_image[i].find('img').height();
                var margin_bottom = holder.data('margin-bottom') / mkdIF.main_image[i].data('original-height') * mkdIF.main_image[i].find('img').height();
                holder.css({ 'display': 'inline-block', 'margin': margin_top + 'px ' + (margin_hor * mkdIF.main_image[i].find('img').width() / (mkdIF.main_image[i].find('img').width() + 2 * margin_hor)) + 'px ' + margin_bottom + 'px' })
            })
        };
        mkdIF.init = function() {
            mkdIF.container.each(function(i) {
                var container = $j(this);
                var main_h = mkdIF.main_image[i].find('img').height();
                var main_w = mkdIF.main_image[i].find('img').width();
                mkdIF.side_images[i].each(function() {
                    var img = $j(this);
                    img.css({ 'top': img.data('top') / main_h * 100 + '%', 'left': img.data('left') / main_w * 100 + '%', 'width': img.width() / main_w * 100 + '%', 'height': img.height() / main_h * 100 + '%' })
                });
                mkdIF.main_image[i].data('original-width', main_w).data('original-height', main_h).css({ 'position': 'relative' });
                container.find('img').css('max-width', '100%');
                container.css('opacity', 1)
            });
            mkdIF.handle_resize();
            mkdIF.position();
            $j(window).resize(mkdIF.handle_resize);
            $j(window).scroll(mkdIF.position)
        };
        mkdIF.position = function() {
            mkdIF.container.each(function(k) {
                var scroll = $j(window).scrollTop();
                var main_w = mkdIF.main_image[k].width();
                var main_h = mkdIF.main_image[k].height();
                var main_orig_w = mkdIF.main_image[k].data('original-width');
                var main_orig_h = mkdIF.main_image[k].data('original-height');
                var main_top = mkdIF.main_image[k].offset().top;
                var win_w = $j(window).width();
                var win_h = $j(window).height();
                mkdIF.side_images[k].each(function(i) {
                    var img = $j(this);
                    var left = img.data('left') / main_orig_w * main_w;
                    var top_pos = main_top + img.data('top') / main_orig_h * main_h;
                    var left_item = (left + img.width() / 2) < main_w / 2;
                    var pos = '';
                    var entrance = top_pos - win_h + 4 * win_h / 7 * Math.abs(left + img.width() / 2 - main_w / 2) / (win_w / 2);
                    var exit = top_pos - 2 * win_h / 3 + 4 * win_h / 7 * Math.abs(left + img.width() / 2 - main_w / 2) / (win_w / 2);
                    if (scroll < entrance) { pos = 'above' } else if (scroll >= entrance && scroll <= exit) { pos = 'in' } else if (scroll > exit) { pos = 'below' }
                    img.attr('data-pos', pos);
                    img.css({ 'transform': 'translate(' + (0 + (left_item ? -1 : 1) * (win_w / 2) * (pos == 'above' || pos == 'in') + (pos == 'in') * (scroll - entrance) / (exit - entrance) * (0 - (left_item ? -1 : 1) * (win_w / 2))) + 'px, ' + (0 + (200) * (pos == 'above' || pos == 'in') + (pos == 'in') * (scroll - entrance) / (exit - entrance) * (0 - (200))) + 'px)' })
                })
            })
        };
        mkdIF.init()
    }
};
var $j = jQuery.noConflict();
$j(document).ready(function() {
    "use strict";
    fitAudio()
});
$j(window).load(function() {
    "use strict";
    initBlog();
    initBlogMasonryFullWidth();
    initBlogSlider();
    initBlogSimpleSlider();
    printBlog();
    singleTitleAnimation()
});
$j(window).resize(function() {
    "use strict";
    fitAudio();
    initBlog();
    initBlogMasonryFullWidth();
    initBlogSlider()
});

function fitAudio() {
    "use strict";
    $j('audio.blog_audio').mediaelementplayer({ audioWidth: '100%' })
}

function initBlog() {
    "use strict";
    if ($j('.blog_holder.masonry').length) {
        var $container = $j('.blog_holder.masonry');
        $container.isotope({ itemSelector: 'article', resizable: false, masonry: { columnWidth: '.blog_holder_grid_sizer', gutter: '.blog_holder_grid_gutter' } });
        $j('.filter').click(function() {
            var selector = $j(this).attr('data-filter');
            $container.isotope({ filter: selector });
            return false
        });
        if ($container.hasClass('masonry_infinite_scroll')) {
            $container.infinitescroll({ navSelector: '.blog_infinite_scroll_button span', nextSelector: '.blog_infinite_scroll_button span a', itemSelector: 'article', loading: { finishedMsg: finished_text, msgText: loading_text } }, function(newElements) {
                $container.append(newElements).isotope('appended', $j(newElements));
                fitVideo();
                fitAudio();
                initFlexSlider();
                setTimeout(function() { $j('.blog_holder.masonry').isotope('layout') }, 400)
            })
        } else if ($container.hasClass('masonry_load_more')) {
            var i = 1;
            $j('.blog_load_more_button a').off('click tap').on('click tap', function(e) {
                e.preventDefault();
                var link = $j(this).attr('href');
                var $content = '.masonry_load_more';
                var $anchor = '.blog_load_more_button a';
                var $next_href = $j($anchor).attr('href');
                $j.get(link + '', function(data) {
                    var $new_content = $j($content, data).wrapInner('').html();
                    $next_href = $j($anchor, data).attr('href');
                    $container.append($j($new_content)).isotope('reloadItems').isotope({ sortBy: 'original-order' });
                    fitVideo();
                    fitAudio();
                    initFlexSlider();
                    setTimeout(function() { $j('.blog_holder.masonry').isotope('layout') }, 400);
                    if ($j('.blog_load_more_button span').data('rel') > i) { $j('.blog_load_more_button a').attr('href', $next_href) } else { $j('.blog_load_more_button').remove() }
                });
                i++
            })
        }
        $j('.blog_holder.masonry, .blog_load_more_button_holder').animate({ opacity: "1" }, 400, function() { $j('.blog_holder.masonry').isotope('layout') })
    }
}

function initBlogMasonryFullWidth() {
    "use strict";
    if ($j('.masonry_full_width').length) {
        var $container = $j('.masonry_full_width');
        $j('.filter').click(function() {
            var selector = $j(this).attr('data-filter');
            $container.isotope({ filter: selector });
            return false
        });
        if ($container.hasClass('masonry_infinite_scroll')) {
            $container.infinitescroll({ navSelector: '.blog_infinite_scroll_button span', nextSelector: '.blog_infinite_scroll_button span a', itemSelector: 'article', loading: { finishedMsg: finished_text, msgText: loading_text } }, function(newElements) {
                $container.isotope('appended', $j(newElements));
                fitVideo();
                fitAudio();
                initFlexSlider();
                setTimeout(function() { $j('.blog_holder.masonry_full_width').isotope('layout') }, 400)
            })
        } else if ($container.hasClass('masonry_load_more')) {
            var i = 1;
            $j('.blog_load_more_button a').off('click tap').on('click tap', function(e) {
                e.preventDefault();
                var link = $j(this).attr('href');
                var $content = '.masonry_load_more';
                var $anchor = '.blog_load_more_button a';
                var $next_href = $j($anchor).attr('href');
                $j.get(link + '', function(data) {
                    var $new_content = $j($content, data).wrapInner('').html();
                    $next_href = $j($anchor, data).attr('href');
                    $container.append($j($new_content)).isotope('reloadItems').isotope({ sortBy: 'original-order' });
                    fitVideo();
                    fitAudio();
                    initFlexSlider();
                    setTimeout(function() { $j('.blog_holder.masonry_full_width').isotope('layout') }, 400);
                    if ($j('.blog_load_more_button span').data('rel') > i) { $j('.blog_load_more_button a').attr('href', $next_href) } else { $j('.blog_load_more_button').remove() }
                });
                i++
            })
        }
        $container.isotope({ itemSelector: 'article', resizable: false, masonry: { columnWidth: '.blog_holder_grid_sizer', gutter: '.blog_holder_grid_gutter' } });
        $j('.masonry_full_width, .blog_load_more_button_holder').animate({ opacity: "1" }, 400, function() { $j('.blog_holder.masonry_full_width').isotope('layout') })
    }
}

function initBlogSlider() {
    "use strict";
    if ($j('.blog_slider').length) {
        $j('.blog_slider').each(function() {
            var blogs_shown;
            if (typeof $j(this).data('blogs_shown') !== 'undefined') { blogs_shown = $j(this).data('blogs_shown') } else { blogs_shown = 'auto' }
            var maxItems = ($j(this).parents('.grid_section').length == 1) ? 3 : blogs_shown;
            var itemWidthTemp;
            switch (blogs_shown) {
                case 3:
                    itemWidthTemp = 667;
                    break;
                case 4:
                    itemWidthTemp = 800;
                    break;
                case 5:
                    itemWidthTemp = 400;
                    break;
                case 6:
                    itemWidthTemp = 334;
                    break;
                default:
                    itemWidthTemp = 800;
                    break
            }
            var itemWidth = ($j(this).parents('.grid_section').length == 1) ? 353 : itemWidthTemp;
            $j(this).find('.blog_slides').carouFredSel({
                circular: true,
                responsive: true,
                scroll: 1,
                prev: { button: function() { return $j(this).parent().siblings('.caroufredsel-direction-nav').find('.caroufredsel-prev') } },
                next: { button: function() { return $j(this).parent().siblings('.caroufredsel-direction-nav').find('.caroufredsel-next') } },
                pagination: function() { return $j(this).parent().siblings('.blog_slider_pager') },
                items: { width: itemWidth, visible: { min: responsiveNumberSlides(maxItems), max: maxItems } },
                auto: false,
                mousewheel: false,
                swipe: { onMouse: true, onTouch: true },
                onCreate: function() {
                    $j(this).css('display', 'block').animate({ 'opacity': 1 }, 1000, function() {
                        if ($j('.widget_sticky-sidebar').length) {
                            widgetTopOffset = $j('.widget_sticky-sidebar').offset().top;
                            widgetParentOffset = $j('.widget_sticky-sidebar').position().top;
                            stickySidebarHeight = $j('aside.sidebar').height()
                        }
                        if ($j(window).width() > 600) { stickySidebar($scroll, widgetTopOffset, widgetParentOffset, stickySidebarHeight) }
                    })
                }
            })
        });
        calculateHeights();
        initParallax();
        $j('.blog_slider .flex-direction-nav a').click(function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation()
        })
    }
}

function responsiveNumberSlides(maxItems) { "use strict"; var windowWidth = window.innerWidth; if (windowWidth > 1300) { return maxItems } else if (windowWidth < 1300 && windowWidth >= 800) { return 3 } else if (windowWidth < 800 && windowWidth > 800) { return 2 } else if (windowWidth <= 800) { return 1 } }

function initBlogSimpleSlider() {
    "use strict";
    $j('.blog_slider_simple_holder').each(function() {
        var interval = 8000;
        var iconClasses = getIconClassesForNavigation(directionNavArrows);
        $j(this).flexslider({ animationLoop: true, controlNav: true, directionNav: false, useCSS: false, pauseOnAction: true, pauseOnHover: true, slideshow: true, animation: 'fade', prevText: '<span class="' + iconClasses.leftIconClass + '"></span>', nextText: '<span class="' + iconClasses.rightIconClass + '"></span>', animationSpeed: 600, slideshowSpeed: interval, start: function() { setTimeout(function() { $j(".blog_slider_simple_holder").fitVids() }, 100) } });
        $j('.blog_slider_simple_holder .flex-direction-nav a').click(function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation()
        })
    })
}

function printBlog() {
    "use strict";
    if ($j('.blog_print').length) {
        $j('.blog_print').each(function() {
            $j(this).click(function(e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                e.stopPropagation();
                window.print()
            })
        })
    }
}

function singleTitleAnimation() {
    "use strict";
    if ($j('.single-post .blog_holder article.format-quote ').length) {
        $j('.single-post .blog_holder article.format-quote ').each(function() {
            $j(this).find('.post_text .quote_author').addClass('load-animation');
            $j(this).find('.post_title.quote h3').addClass('load-animation')
        })
    }
    if ($j('.single-post .blog_holder article.format-link').length) { $j('.single-post .blog_holder article.format-link').each(function() { $j(this).find('.post_title.link h3').addClass('load-animation') }) }
};
var $j = jQuery.noConflict();
$j(document).ready(function() { "use strict"; });;
/*!
 * VERSION: 1.13.2
 * DATE: 2014-08-23
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var s, n, r, a, o, l = function(t) {
                var e, s = t.split("."),
                    n = i;
                for (e = 0; s.length > e; e++) n[s[e]] = n = n[s[e]] || {};
                return n
            },
            h = l("com.greensock"),
            _ = 1e-10,
            u = function(t) {
                var e, i = [],
                    s = t.length;
                for (e = 0; e !== s; i.push(t[e++]));
                return i
            },
            m = function() {},
            f = function() {
                var t = Object.prototype.toString,
                    e = t.call([]);
                return function(i) { return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e) }
            }(),
            p = {},
            c = function(s, n, r, a) {
                this.sc = p[s] ? p[s].sc : [], p[s] = this, this.gsClass = null, this.func = r;
                var o = [];
                this.check = function(h) {
                    for (var _, u, m, f, d = n.length, v = d; --d > -1;)(_ = p[n[d]] || new c(n[d], [])).gsClass ? (o[d] = _.gsClass, v--) : h && _.sc.push(this);
                    if (0 === v && r)
                        for (u = ("com.greensock." + s).split("."), m = u.pop(), f = l(u.join("."))[m] = this.gsClass = r.apply(r, o), a && (i[m] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() { return f }) : s === e && "undefined" != typeof module && module.exports && (module.exports = f)), d = 0; this.sc.length > d; d++) this.sc[d].check()
                }, this.check(!0)
            },
            d = t._gsDefine = function(t, e, i, s) { return new c(t, e, i, s) },
            v = h._class = function(t, e, i) { return e = e || function() {}, d(t, [], function() { return e }, i), e };
        d.globals = i;
        var g = [0, 0, 1, 1],
            T = [],
            y = v("easing.Ease", function(t, e, i, s) { this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? g.concat(e) : g }, !0),
            w = y.map = {},
            P = y.register = function(t, e, i, s) {
                for (var n, r, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                    for (r = l[_], n = s ? v("easing." + r, null, !0) : h.easing[r] || {}, a = u.length; --a > -1;) o = u[a], w[r + "." + o] = w[o + r] = n[o] = t.getRatio ? t : t[o] || new t
            };
        for (r = y.prototype, r._calcEnd = !1, r.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
            }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], n = s.length; --n > -1;) r = s[n] + ",Power" + n, P(new y(null, null, 1, n), r, "easeOut", !0), P(new y(null, null, 2, n), r, "easeIn" + (0 === n ? ",easeNone" : "")), P(new y(null, null, 3, n), r, "easeInOut");
        w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut;
        var b = v("events.EventDispatcher", function(t) { this._listeners = {}, this._eventTarget = t || this });
        r = b.prototype, r.addEventListener = function(t, e, i, s, n) {
            n = n || 0;
            var r, l, h = this._listeners[t],
                _ = 0;
            for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) r = h[l], r.c === e && r.s === i ? h.splice(l, 1) : 0 === _ && n > r.pr && (_ = l + 1);
            h.splice(_, 0, { c: e, s: i, up: s, pr: n }), this !== a || o || a.wake()
        }, r.removeEventListener = function(t, e) {
            var i, s = this._listeners[t];
            if (s)
                for (i = s.length; --i > -1;)
                    if (s[i].c === e) return s.splice(i, 1), void 0
        }, r.dispatchEvent = function(t) {
            var e, i, s, n = this._listeners[t];
            if (n)
                for (e = n.length, i = this._eventTarget; --e > -1;) s = n[e], s.up ? s.c.call(s.s || i, { type: t, target: i }) : s.c.call(s.s || i)
        };
        var k = t.requestAnimationFrame,
            A = t.cancelAnimationFrame,
            S = Date.now || function() { return (new Date).getTime() },
            x = S();
        for (s = ["ms", "moz", "webkit", "o"], n = s.length; --n > -1 && !k;) k = t[s[n] + "RequestAnimationFrame"], A = t[s[n] + "CancelAnimationFrame"] || t[s[n] + "CancelRequestAnimationFrame"];
        v("Ticker", function(t, e) {
            var i, s, n, r, l, h = this,
                u = S(),
                f = e !== !1 && k,
                p = 800,
                c = 33,
                d = function(t) {
                    var e, a, o = S() - x;
                    o > p && (u += o - c), x += o, h.time = (x - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= r ? .004 : r - e), a = !0), t !== !0 && (n = s(d)), a && h.dispatchEvent("tick")
                };
            b.call(h), h.time = h.frame = 0, h.tick = function() { d(!0) }, h.lagSmoothing = function(t, e) { p = t || 1 / _, c = Math.min(e, p, 0) }, h.sleep = function() { null != n && (f && A ? A(n) : clearTimeout(n), s = m, n = null, h === a && (o = !1)) }, h.wake = function() { null !== n ? h.sleep() : h.frame > 10 && (x = S() - p + 5), s = 0 === i ? m : f && k ? k : function(t) { return setTimeout(t, 0 | 1e3 * (l - h.time) + 1) }, h === a && (o = !0), d(2) }, h.fps = function(t) { return arguments.length ? (i = t, r = 1 / (i || 60), l = this.time + r, h.wake(), void 0) : i }, h.useRAF = function(t) { return arguments.length ? (h.sleep(), f = t, h.fps(i), void 0) : f }, h.fps(t), setTimeout(function() { f && (!n || 5 > h.frame) && h.useRAF(!1) }, 1800)
        }), r = h.Ticker.prototype = new h.events.EventDispatcher, r.constructor = h.Ticker;
        var R = v("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, B) {
                o || a.wake();
                var i = this.vars.useFrames ? q : B;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        a = R.ticker = new h.Ticker, r = R.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
        var C = function() { o && S() - x > 2e3 && a.wake(), setTimeout(C, 2e3) };
        C(), r.play = function(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, r.pause = function(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, r.resume = function(t, e) { return null != t && this.seek(t, e), this.paused(!1) }, r.seek = function(t, e) { return this.totalTime(Number(t), e !== !1) }, r.restart = function(t, e) { return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0) }, r.reverse = function(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, r.render = function() {}, r.invalidate = function() { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this }, r.isActive = function() {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, r._enabled = function(t, e) { return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1 }, r._kill = function() { return this._enabled(!1, !1) }, r.kill = function(t, e) { return this._kill(t, e), this }, r._uncache = function(t) { for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline; return this }, r._swapSelfInParams = function(t) { for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this); return i }, r.eventCallback = function(t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var n = this.vars;
                if (1 === arguments.length) return n[t];
                null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, r.delay = function(t) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay }, r.duration = function(t) { return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration) }, r.totalDuration = function(t) { return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration }, r.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time }, r.totalTime = function(t, e, i) {
            if (o || a.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration,
                        n = this._timeline;
                    if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? s - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                        for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), O.length && M())
            }
            return this
        }, r.progress = r.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration() }, r.startTime = function(t) { return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime }, r.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, r.reversed = function(t) { return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, r.paused = function(t) {
            if (!arguments.length) return this._paused;
            if (t != this._paused && this._timeline) {
                o || t || a.wake();
                var e = this._timeline,
                    i = e.rawTime(),
                    s = i - this._pauseTime;
                !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1), this
        };
        var D = v("core.SimpleTimeline", function(t) { R.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0 });
        r = D.prototype = new R, r.constructor = D, r.kill()._gc = !1, r._first = r._last = null, r._sortChildren = !1, r.add = r.insert = function(t, e) {
            var i, s;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                for (s = t._startTime; i && i._startTime > s;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
        }, r._remove = function(t, e) { return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, this._timeline && this._uncache(!0)), this }, r.render = function(t, e, i) { var s, n = this._first; for (this._totalTime = this._time = this._rawPrevTime = t; n;) s = n._next, (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s }, r.rawTime = function() { return o || a.wake(), this._totalTime };
        var I = v("TweenLite", function(e, i, s) {
                if (R.call(this, i, s), this.render = I.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : I.selector(e) || e;
                var n, r, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? Q[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : Q[l], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                    for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], n = 0; a.length > n; n++) r = a[n], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(n--, 1), this._targets = a = a.concat(u(r))) : (this._siblings[n] = $(r, this, !1), 1 === l && this._siblings[n].length > 1 && K(r, this, null, 1, this._siblings[n])) : (r = a[n--] = I.selector(r), "string" == typeof r && a.splice(n + 1, 1)) : a.splice(n--, 1);
                else this._propLookup = {}, this._siblings = $(e, this, !1), 1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay))
            }, !0),
            E = function(e) { return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType) },
            z = function(t, e) {
                var i, s = {};
                for (i in t) G[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!U[i] || U[i] && U[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                t.css = s
            };
        r = I.prototype = new R, r.constructor = I, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, I.version = "1.13.2", I.defaultEase = r._ease = new y(null, null, 1, 1), I.defaultOverwrite = "auto", I.ticker = a, I.autoSleep = !0, I.lagSmoothing = function(t, e) { a.lagSmoothing(t, e) }, I.selector = t.$ || t.jQuery || function(e) { var i = t.$ || t.jQuery; return i ? (I.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) };
        var O = [],
            L = {},
            N = I._internals = { isArray: f, isSelector: E, lazyTweens: O },
            U = I._plugins = {},
            F = N.tweenLookup = {},
            j = 0,
            G = N.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1 },
            Q = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 },
            q = R._rootFramesTimeline = new D,
            B = R._rootTimeline = new D,
            M = N.lazyRender = function() {
                var t = O.length;
                for (L = {}; --t > -1;) s = O[t], s && s._lazy !== !1 && (s.render(s._lazy[0], s._lazy[1], !0), s._lazy = !1);
                O.length = 0
            };
        B._startTime = a.time, q._startTime = a.frame, B._active = q._active = !0, setTimeout(M, 1), R._updateRoot = I.render = function() {
            var t, e, i;
            if (O.length && M(), B.render((a.time - B._startTime) * B._timeScale, !1, !1), q.render((a.frame - q._startTime) * q._timeScale, !1, !1), O.length && M(), !(a.frame % 120)) {
                for (i in F) {
                    for (e = F[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete F[i]
                }
                if (i = B._first, (!i || i._paused) && I.autoSleep && !q._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || a.sleep()
                }
            }
        }, a.addEventListener("tick", R._updateRoot);
        var $ = function(t, e, i) {
                var s, n, r = t._gsTweenID;
                if (F[r || (t._gsTweenID = r = "t" + j++)] || (F[r] = { target: t, tweens: [] }), e && (s = F[r].tweens, s[n = s.length] = e, i))
                    for (; --n > -1;) s[n] === e && s.splice(n, 1);
                return F[r].tweens
            },
            K = function(t, e, i, s, n) {
                var r, a, o, l;
                if (1 === s || s >= 4) {
                    for (l = n.length, r = 0; l > r; r++)
                        if ((o = n[r]) !== e) o._gc || o._enabled(!1, !1) && (a = !0);
                        else if (5 === s) break;
                    return a
                }
                var h, u = e._startTime + _,
                    m = [],
                    f = 0,
                    p = 0 === e._duration;
                for (r = n.length; --r > -1;)(o = n[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || H(e, 0, p), 0 === H(o, h, p) && (m[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && 2e-10 >= u - o._startTime || (m[f++] = o)));
                for (r = f; --r > -1;) o = m[r], 2 === s && o._kill(i, t) && (a = !0), (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
                return a
            },
            H = function(t, e, i) {
                for (var s = t._timeline, n = s._timeScale, r = t._startTime; s._timeline;) {
                    if (r += s._startTime, n *= s._timeScale, s._paused) return -100;
                    s = s._timeline
                }
                return r /= n, r > e ? r - e : i && r === e || !t._initted && 2 * _ > r - e ? _ : (r += t.totalDuration() / t._timeScale / n) > e + _ ? 0 : r - e - _
            };
        r._init = function() {
            var t, e, i, s, n, r = this.vars,
                a = this._overwrittenProps,
                o = this._duration,
                l = !!r.immediateRender,
                h = r.ease;
            if (r.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
                for (s in r.startAt) n[s] = r.startAt[s];
                if (n.overwrite = !1, n.immediateRender = !0, n.lazy = l && r.lazy !== !1, n.startAt = n.delay = null, this._startAt = I.to(this.target, 0, n), l)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== o) return
            } else if (r.runBackwards && 0 !== o)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else { 0 !== this._time && (l = !1), i = {}; for (s in r) G[s] && "autoCSS" !== s || (i[s] = r[s]); if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && r.lazy !== !1, i.immediateRender = l, this._startAt = I.to(this.target, 0, i), l) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) }
            if (this._ease = h = h ? h instanceof y ? h : "function" == typeof h ? new y(h, r.easeParams) : w[h] || I.defaultEase : I.defaultEase, r.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a);
            if (e && I._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = r.onUpdate, this._initted = !0
        }, r._initProps = function(e, i, s, n) {
            var r, a, o, l, h, _;
            if (null == e) return !1;
            L[e._gsTweenID] && M(), this.vars.css || e.style && e !== t && e.nodeType && U.css && this.vars.autoCSS !== !1 && z(this.vars, e);
            for (r in this.vars) {
                if (_ = this.vars[r], G[r]) _ && (_ instanceof Array || _.push && f(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[r] = _ = this._swapSelfInParams(_, this));
                else if (U[r] && (l = new U[r])._onInitTween(e, this.vars[r], this)) {
                    for (this._firstPT = h = { _next: this._firstPT, t: l, p: "setRatio", s: 0, c: 1, f: !0, n: r, pg: !0, pr: l._priority }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[r] = h = { _next: this._firstPT, t: e, p: r, f: "function" == typeof e[r], n: r, pg: !1, pr: 0 }, h.s = h.f ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), h.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - h.s || 0;
                h && h._next && (h._next._prev = h)
            }
            return n && this._kill(n, e) ? this._initProps(e, i, s, n) : this._overwrite > 1 && this._firstPT && s.length > 1 && K(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, n)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), o)
        }, r.render = function(t, e, i) {
            var s, n, r, a, o = this._time,
                l = this._duration,
                h = this._rawPrevTime;
            if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, n = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === _) && h !== t && (i = !0, h > _ && (n = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : _);
            else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0 && h !== _) && (n = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : _)), this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var u = t / l,
                    m = this._easeType,
                    f = this._easePower;
                (1 === m || 3 === m && u >= .5) && (u = 1 - u), 3 === m && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === m ? 1 - u : 2 === m ? u : .5 > t / l ? u / 2 : 1 - u / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, O.push(this), this._lazy = [t, e], void 0;
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || T))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || T)), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this.vars[n].apply(this.vars[n + "Scope"] || this, this.vars[n + "Params"] || T), 0 === l && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
            }
        }, r._kill = function(t, e) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
            var i, s, n, r, a, o, l, h;
            if ((f(e) || E(e)) && "number" != typeof e[0])
                for (i = e.length; --i > -1;) this._kill(t, e[i]) && (o = !0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; --i > -1;)
                        if (e === this._targets[i]) { a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all"; break }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) { l = t || a, h = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill); for (n in l)(r = a[n]) && (r.pg && r.t._kill(l) && (o = !0), r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next), r._next && (r._next._prev = r._prev), r._next = r._prev = null), delete a[n]), h && (s[n] = 1);!this._firstPT && this._initted && this._enabled(!1, !1) }
            }
            return o
        }, r.invalidate = function() { return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], R.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this }, r._enabled = function(t, e) {
            if (o || a.wake(), t && this._gc) {
                var i, s = this._targets;
                if (s)
                    for (i = s.length; --i > -1;) this._siblings[i] = $(s[i], this, !0);
                else this._siblings = $(this.target, this, !0)
            }
            return R.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? I._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }, I.to = function(t, e, i) { return new I(t, e, i) }, I.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new I(t, e, i) }, I.fromTo = function(t, e, i, s) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new I(t, e, s) }, I.delayedCall = function(t, e, i, s, n) { return new I(e, 0, { delay: t, onComplete: e, onCompleteParams: i, onCompleteScope: s, onReverseComplete: e, onReverseCompleteParams: i, onReverseCompleteScope: s, immediateRender: !1, useFrames: n, overwrite: 0 }) }, I.set = function(t, e) { return new I(t, 0, e) }, I.getTweensOf = function(t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : I.selector(t) || t;
            var i, s, n, r;
            if ((f(t) || E(t)) && "number" != typeof t[0]) {
                for (i = t.length, s = []; --i > -1;) s = s.concat(I.getTweensOf(t[i], e));
                for (i = s.length; --i > -1;)
                    for (r = s[i], n = i; --n > -1;) r === s[n] && s.splice(i, 1)
            } else
                for (s = $(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
            return s
        }, I.killTweensOf = I.killDelayedCallsTo = function(t, e, i) { "object" == typeof e && (i = e, e = !1); for (var s = I.getTweensOf(t, e), n = s.length; --n > -1;) s[n]._kill(i, t) };
        var J = v("plugins.TweenPlugin", function(t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = J.prototype }, !0);
        if (r = J.prototype, J.version = "1.10.1", J.API = 2, r._firstPT = null, r._addTween = function(t, e, i, s, n, r) { var a, o; return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = { _next: this._firstPT, t: t, p: e, s: i, c: a, f: "function" == typeof t[e], n: n || e, r: r }, o._next && (o._next._prev = o), o) : void 0 }, r.setRatio = function(t) { for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next }, r._kill = function(t) {
                var e, i = this._overwriteProps,
                    s = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                return !1
            }, r._roundProps = function(t, e) { for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next }, I._onPluginEvent = function(t, e) {
                var i, s, n, r, a, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (a = o._next, s = n; s && s.pr > o.pr;) s = s._next;
                        (o._prev = s ? s._prev : r) ? o._prev._next = o: n = o, (o._next = s) ? s._prev = o : r = o, o = a
                    }
                    o = e._firstPT = n
                }
                for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                return i
            }, J.activate = function(t) { for (var e = t.length; --e > -1;) t[e].API === J.API && (U[(new t[e])._propName] = t[e]); return !0 }, d.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    s = t.priority || 0,
                    n = t.overwriteProps,
                    r = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps" },
                    a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() { J.call(this, i, s), this._overwriteProps = n || [] }, t.global === !0),
                    o = a.prototype = new J(i);
                o.constructor = a, a.API = t.API;
                for (e in r) "function" == typeof t[e] && (o[r[e]] = t[e]);
                return a.version = t.version, J.activate([a]), a
            }, s = t._gsQueue) { for (n = 0; s.length > n; n++) s[n](); for (r in p) p[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r) }
        o = !1
    }
})("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");;
/*!
 * VERSION: 1.7.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var t = document.documentElement,
        e = window,
        i = function(i, s) {
            var r = "x" === s ? "Width" : "Height",
                n = "scroll" + r,
                a = "client" + r,
                o = document.body;
            return i === e || i === t || i === o ? Math.max(t[n], o[n]) - (e["inner" + r] || Math.max(t[a], o[a])) : i[n] - i["offset" + r]
        },
        s = _gsScope._gsDefine.plugin({
            propName: "scrollTo",
            API: 2,
            version: "1.7.4",
            init: function(t, s, r) { return this._wdw = t === e, this._target = t, this._tween = r, "object" != typeof s && (s = { y: s }), this.vars = s, this._autoKill = s.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != s.x ? (this._addTween(this, "x", this.x, "max" === s.x ? i(t, "x") : s.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != s.y ? (this._addTween(this, "y", this.y, "max" === s.y ? i(t, "y") : s.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0 },
            set: function(t) {
                this._super.setRatio.call(this, t);
                var s = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                    r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                    n = r - this.yPrev,
                    a = s - this.xPrev;
                this._autoKill && (!this.skipX && (a > 7 || -7 > a) && i(this._target, "x") > s && (this.skipX = !0), !this.skipY && (n > 7 || -7 > n) && i(this._target, "y") > r && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? e.scrollTo(this.skipX ? s : this.x, this.skipY ? r : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
            }
        }),
        r = s.prototype;
    s.max = i, r.getX = function() { return this._wdw ? null != e.pageXOffset ? e.pageXOffset : null != t.scrollLeft ? t.scrollLeft : document.body.scrollLeft : this._target.scrollLeft }, r.getY = function() { return this._wdw ? null != e.pageYOffset ? e.pageYOffset : null != t.scrollTop ? t.scrollTop : document.body.scrollTop : this._target.scrollTop }, r._kill = function(t) { return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t) }
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();;
var $window = $j(window);
var scrollTime = 0.5;
var scrollDistance = 180;
mobile_ie = -1 !== navigator.userAgent.indexOf("IEMobile");

function smoothScrollListener(event) {
    event.preventDefault();
    var delta = event.wheelDelta / 120 || -event.detail / 3;
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta * scrollDistance);
    TweenLite.to($window, scrollTime, { scrollTo: { y: finalScroll, autoKill: !0 }, ease: Power1.easeOut, autoKill: !0, overwrite: 5 });
}
if (!$j('html').hasClass('touch') && !mobile_ie) { if (window.addEventListener) { window.addEventListener('mousewheel', smoothScrollListener, { passive: false }); } };
window.addComment = function(a) {
    function b() { c(), g() }

    function c(a) { if (t && (m = j(r.cancelReplyId), n = j(r.commentFormId), m)) { m.addEventListener("touchstart", e), m.addEventListener("click", e); for (var b, c = d(a), g = 0, h = c.length; g < h; g++) b = c[g], b.addEventListener("touchstart", f), b.addEventListener("click", f) } }

    function d(a) { var b, c = r.commentReplyClass; return a && a.childNodes || (a = q), b = q.getElementsByClassName ? a.getElementsByClassName(c) : a.querySelectorAll("." + c) }

    function e(a) {
        var b = this,
            c = r.temporaryFormId,
            d = j(c);
        d && o && (j(r.parentIdFieldId).value = "0", d.parentNode.replaceChild(o, d), b.style.display = "none", a.preventDefault())
    }

    function f(b) {
        var c, d = this,
            e = i(d, "belowelement"),
            f = i(d, "commentid"),
            g = i(d, "respondelement"),
            h = i(d, "postid");
        e && f && g && h && (c = a.addComment.moveForm(e, f, g, h), !1 === c && b.preventDefault())
    }

    function g() {
        if (s) {
            var a = { childList: !0, subTree: !0 };
            p = new s(h), p.observe(q.body, a)
        }
    }

    function h(a) {
        for (var b = a.length; b--;)
            if (a[b].addedNodes.length) return void c()
    }

    function i(a, b) { return u ? a.dataset[b] : a.getAttribute("data-" + b) }

    function j(a) { return q.getElementById(a) }

    function k(b, c, d, e) {
        var f = j(b);
        o = j(d);
        var g, h, i, k = j(r.parentIdFieldId),
            p = j(r.postIdFieldId);
        if (f && o && k) {
            l(o), e && p && (p.value = e), k.value = c, m.style.display = "", f.parentNode.insertBefore(o, f.nextSibling), m.onclick = function() { return !1 };
            try {
                for (var s = 0; s < n.elements.length; s++)
                    if (g = n.elements[s], h = !1, "getComputedStyle" in a ? i = a.getComputedStyle(g) : q.documentElement.currentStyle && (i = g.currentStyle), (g.offsetWidth <= 0 && g.offsetHeight <= 0 || "hidden" === i.visibility) && (h = !0), "hidden" !== g.type && !g.disabled && !h) { g.focus(); break }
            } catch (t) {}
            return !1
        }
    }

    function l(a) {
        var b = r.temporaryFormId,
            c = j(b);
        c || (c = q.createElement("div"), c.id = b, c.style.display = "none", a.parentNode.insertBefore(c, a))
    }
    var m, n, o, p, q = a.document,
        r = { commentReplyClass: "comment-reply-link", cancelReplyId: "cancel-comment-reply-link", commentFormId: "commentform", temporaryFormId: "wp-temp-form-div", parentIdFieldId: "comment_parent", postIdFieldId: "comment_post_ID" },
        s = a.MutationObserver || a.WebKitMutationObserver || a.MozMutationObserver,
        t = "querySelector" in q && "addEventListener" in a,
        u = !!q.documentElement.dataset;
    return t && "loading" !== q.readyState ? b() : t && a.addEventListener("DOMContentLoaded", b, !1), { init: c, moveForm: k }
}(window);;
var $j = jQuery.noConflict();
var firstLoad = true;
var image_src_regex = /url\(["']?([^'")]+)['"]?\)/;
var background_color_regex = /\s*background-color:\s*([\w(),#]+)/;
var opacity_regex = /\s*opacity:\s*([\w().]+)/;

function perPageBindings() {
    "use strict";
    $j('.mkd_slider_preloader .ajax_loader').hide();
    content = $j('.content');
    checkVerticalMenuTransparency();
    contentMinHeight();
    contentMinHeightWithPaspartu();
    initMikadoSlider();
    initMikadoCarousel();
    initMessageHeight();
    initListAnimation();
    initPieChart();
    initPieChartWithIcon();
    initParallaxTitle();
    initPricingTableOddEvenSections();
    initPricingTableButton();
    loadMore();
    singleTitleAnimation();
    prettyPhoto();
    if (!$j('.vertical_split_slider').length) { initFlexSlider() }
    fitVideo();
    initSingleImageShader();
    initSingleImagePopUp();
    initAccordion();
    initAccordionContentLink();
    initAccordionHoverStyle();
    initMessages();
    fitAudio();
    initProgressBarsIcon();
    initMoreFacts();
    placeholderReplace();
    initPortfolio();
    initPortfolioZIndex();
    initPortfolioMasonry();
    initPortfolioMasonryFilter();
    initPortfolioSlider();
    initProductSlider();
    initTabs();
    initTabsStyle();
    initVerticalTabsContentHeight();
    initVerticalTabsWidth();
    if (!$j('.vertical_split_slider').length) {
        initTestimonials();
        initTestimonialCarousel()
    }
    animateFormFields();
    initSeparatorWithTextAnimation();
    initTestimonialImageHolderWidth();
    backButtonShowHide();
    backToTop();
    updateShoppingCart();
    initProgressBarsVertical();
    initImageHover();
    checkAnchorOnScroll();
    checkHeaderStyleOnScroll();
    initVideoBackground();
    initVideoBackgroundSize();
    initIconWithTextAnimation();
    initCoverBoxes();
    createContentMenu();
    contentMenuScrollTo();
    contentMenuCheckLastSection();
    createSelectContentMenu();
    initButtonHover();
    initReadMoreButtonHover();
    initSocialIconHover();
    initIconSlider();
    initIconHover();
    initIconTextHover();
    initInteractiveBannersShader();
    initInteractiveBannersBorderStyle();
    setFooterHeight();
    initPortfolioBlurEffect();
    initSocialIconsSidebarEffect();
    initVerticalSplitSlider();
    initVerticalSplitSectionWidth();
    initVerticalSliderWithTextOver();
    setVideoHeightAndWidth();
    initToCounter();
    initCounter();
    initCountdown();
    initProgressBars();
    initProcessHeightWidth();
    initCustomFontResize();
    noTypeFont();
    instagramAppear();
    imageStack();
    imageStackResize();
    initSingleImageHover();
    noInteractivePieChart();
    noInteractiveInfoCard();
    countClientsPerRow();
    setContentBottomMargin();
    setServiceTableStyles();
    createTabIcons();
    initMikadoElementAnimationSkrollr();
    initElementsHolderBorderAnimation();
    initPageTitleAnimation();
    initMasonryGallery();
    parallaxLayers();
    initBlogListIconHover();
    initBreadcrumbsStyles();
    stickySidebarWidth();
    setScrollingRails();
    setImageFusion();
    if ($j('body').hasClass('blog_installed')) {
        initBlog();
        initBlogMasonryFullWidth();
        initBlogSimpleSlider();
        initBlogSlider()
    }
    if ($j('.landing_holder').length) {
        initFancybox();
        initExamplesFilter()
    }
    textSlider();
    initSeparatorWithTextAnimation()
}

function ajaxSetActiveState(me) {
    "use strict";
    $j('.main_menu a, .mobile_menu a, .mobile_menu h4, .vertical_menu a, .popup_menu a').parent().removeClass('active');
    if (me.closest('.second').length === 0) { me.parent().addClass('active') } else { me.closest('.second').parent().addClass('active') }
    if (me.closest('.mobile_menu').length > 0) {
        me.closest('.level0').addClass('active');
        me.closest('.level1').addClass('active');
        me.closest('.level2').addClass('active')
    }
    if (me.closest('.widget_nav_menu').length > 0) {
        $j('.widget_nav_menu ul.menu > li').removeClass('current-menu-item');
        me.closest('.widget_nav_menu').find('.menu-item').addClass('current-menu-item')
    }
    $j('.main_menu a, .mobile_menu a, .vertical_menu a, .popup_menu a').removeClass('current');
    me.addClass('current')
}

function setPageMeta(meta_data) {
    "use strict";
    var newTitle = meta_data.find(".seo_title").text();
    var newDescription = meta_data.find(".seo_description").text();
    var newKeywords = meta_data.find(".seo_keywords").text();
    $j('head meta[name=description]').attr('content', newDescription);
    $j('head meta[name=keywords]').attr('content', newKeywords);
    document.title = newTitle;
    var newBodyClasses = meta_data.find(".body_classes").text();
    var myArray = newBodyClasses.split(',');
    $j("body").removeClass();
    for (var i = 0; i < myArray.length; i++) { if (myArray[i] !== "page_not_loaded") { $j("body").addClass(myArray[i]) } }
}

function setToolBarEditLink(pageId) {
    "use strict";
    if ($j("#wp-admin-bar-edit").length > 0) {
        var old_link = $j('#wp-admin-bar-edit a').attr("href");
        var new_link = old_link.replace(/(post=).*?(&)/, '$1' + pageId + '$2');
        $j('#wp-admin-bar-edit a').attr("href", new_link)
    }
}

function removeAjaxLoader() { "use strict"; if ($j('.ajax_loader').length) { $j('.ajax_loader').fadeOut(400) } }

function balanceNavArrows() {
    "use strict";
    var navLinks;
    if ($j('.vertical_menu a').length > 0) { navLinks = $j('.vertical_menu a') } else { navLinks = $j('.main_menu a') }
    var seenCurrent = false;
    navLinks.each(function(link) {
        var me = $j(this);
        if (me.hasClass('current')) { seenCurrent = true; return }
        if (seenCurrent) {
            me.removeClass('up');
            me.removeClass('right');
            me.addClass('down');
            me.addClass('left')
        } else {
            me.removeClass('down');
            me.removeClass('left');
            me.addClass('up');
            me.addClass('right')
        }
    })
}

function slideInNewPage(content, text, direction, direction2, animationTime, callbacks, url) {
    "use strict";
    var newHTML = $j(text);
    var animation;
    var pageId = newHTML.find('#mkd_page_id').text();
    if (newHTML.find('.content_inner').hasClass('updown')) { animation = 'ajax_updown' } else if (newHTML.find('.content_inner').hasClass('fade')) { animation = 'ajax_fade' } else if (newHTML.find('.content_inner').hasClass('updown_fade')) { animation = 'ajax_updown_fade' } else if (newHTML.find('.content_inner').hasClass('leftright')) { animation = 'ajax_leftright' } else if (newHTML.find('.content_inner').hasClass('no_animation')) { animation = 'ajax_no_animation' } else if ($j('body').hasClass('ajax_updown')) { animation = 'ajax_updown' } else if ($j('body').hasClass('ajax_fade')) { animation = 'ajax_fade' } else if ($j('body').hasClass('ajax_updown_fade')) { animation = 'ajax_updown_fade' } else if ($j('body').hasClass('ajax_leftright')) { animation = 'ajax_leftright' }
    if (newHTML.find('header.page_header').hasClass('light')) { header_style = 'light' } else if (newHTML.find('header.page_header').hasClass('dark')) { header_style = 'dark' } else { header_style = header_style_admin }
    default_header_style = header_style;
    var header_color;
    if (newHTML.find('.header_bottom').attr('style')) { header_color = newHTML.find('.header_bottom').attr('style') } else { header_color = "" }
    var header_color_top;
    if (newHTML.find('.header_top').attr('style')) { header_color_top = newHTML.find('.header_top').attr('style') } else { header_color_top = "" }
    var transparent = newHTML.find('header').hasClass('transparent') ? ' transparent' : '';
    var header_style_on_scroll = newHTML.find('header').hasClass('header_style_on_scroll') ? ' header_style_on_scroll' : '';
    var vertical_menu_background;
    var vertical_menu_background_image_changed = true;
    if (newHTML.find('aside.vertical_menu_area .vertical_area_background').attr('style')) { vertical_menu_background = newHTML.find('aside.vertical_menu_area .vertical_area_background').attr('style'); if (image_src_regex.exec($j('aside.vertical_menu_area .vertical_area_background').css('background-image')) !== null) { if (image_src_regex.exec(vertical_menu_background) !== null && image_src_regex.exec(vertical_menu_background)[1] === image_src_regex.exec($j('aside.vertical_menu_area .vertical_area_background').css('background-image'))[1]) { vertical_menu_background_image_changed = false } } else if (image_src_regex.exec(vertical_menu_background) == null) { vertical_menu_background_image_changed = false } } else { vertical_menu_background = "" }
    var footer_hide;
    if (newHTML.find('footer').hasClass('disable_footer')) { footer_hide = true } else { footer_hide = false }
    var header_bottom_border;
    var header_bottom_border_color;
    if (newHTML.find('.header_bottom .container_inner, bottom_header .container_inner').css('border-bottom') !== '') {
        header_bottom_border = true;
        header_bottom_border_color = newHTML.find('.header_bottom .container_inner, bottom_header .container_inner').css('border-bottom-color')
    } else { header_bottom_border = false }
    var meta_data = newHTML.find('.meta');
    var newContent = newHTML.find('.content').css({ position: 'relative' });
    newContent.find('.animate_title_text .title h1, .animate_title_text .title .subtitle span, .animate_title_text .breadcrumbs_title .breadcrumb').css({ visibility: 'hidden' });
    content.after("<div class='content_wrapper'></div>");
    newContent.appendTo('.content_wrapper');
    if ($j('header').hasClass('fixed_top_header')) {
        var margin_top_fixed_top_header = parseInt($j('header.fixed_top_header').outerHeight());
        if ($j('.space_around_content').length) { margin_top_fixed_top_header += parseInt(($j('.space_around_content').css('margin-top')).replace('px', '')); if ($j('.frame_around_content').length) { margin_top_fixed_top_header += parseInt(($j('.frame_around_content').css('border-top-width')).replace('px', '')) } }
        $j('.content_wrapper').css('margin-top', margin_top_fixed_top_header)
    }
    $j('.side_menu_button a').removeClass('opened');
    newHTML.filter('script').each(function() { $j.globalEval(this.text || this.textContent || this.innerHTML || '') });
    if ($j('.carousel').length) { $j('.carousel').carousel('pause') }
    if ($j('#multiscroll-nav').length) { $j('#multiscroll-nav').remove() }
    $j('footer').css('padding-top', $j(window).height());
    $j('footer.uncover').css('top', 0);
    if (animation === "ajax_fade" || animation === "ajax_updown_fade") {
        $j('header.page_header.ajax_header_animation .drop_down > ul > li').mouseout();
        $j('header.page_header.ajax_header_animation').stop().fadeTo(animationTime, 0);
        content.stop().fadeTo(animationTime, 0)
    }
    $j('.touch .vertical_menu_to_content > ul li.open > a').click();
    newContent.waitForImages(function() {
        $j('.flexslider, .slider_small, .portfolio_outer').css('visibility', 'visible');
        $j('.vertical_area_background, .title, .parallax_section_holder_background').removeClass('preload_background');
        var contentHeight = content.height();
        var targetHeight = Math.max(contentHeight, $j(window).height());
        content.css({ position: 'relative', height: contentHeight });
        var newHeight = newContent.height();
        $j('.paspartu_outer, .space_around_content_inner').css('min-height', newHeight);
        var windowWidth = $j(window).width();
        var hash = '#' + url.split('#')[1];
        if (footer_hide) { $j('footer').addClass('disable_footer') } else { $j('footer').removeClass('disable_footer') }
        if (header_bottom_border) { $j('.header_bottom .container_inner, bottom_header .container_inner').css('border-bottom', '1px solid ' + header_bottom_border_color) } else { $j('.header_bottom .container_inner, bottom_header .container_inner').css('border-bottom', '') }
        if (header_color !== "") { $j('.header_bottom').attr('style', header_color) } else { $j('.header_bottom').removeAttr("style") }
        if (header_color_top !== "") { $j('.header_top').attr('style', header_color_top) } else { $j('.header_top').removeAttr("style") }
        if (transparent !== "") { $j('header').addClass(transparent) } else { $j('header').removeClass('transparent') }
        if (header_style_on_scroll !== "") { $j('header').addClass(header_style_on_scroll) } else { $j('header').removeClass('header_style_on_scroll') }
        if (vertical_menu_background !== "" && background_color_regex.exec(vertical_menu_background) != null) { $j('aside.vertical_menu_area .vertical_area_background').css('background-color', background_color_regex.exec(vertical_menu_background)[1]) } else { $j('aside.vertical_menu_area .vertical_area_background').css('background-color', 'inherit') }
        if (vertical_menu_background !== "" && opacity_regex.exec(vertical_menu_background) != null) { $j('aside.vertical_menu_area .vertical_area_background').css('opacity', opacity_regex.exec(vertical_menu_background)[1]) }
        if (vertical_menu_background !== "" && image_src_regex.exec(vertical_menu_background) != null) {
            if (vertical_menu_background_image_changed) {
                $j('aside.vertical_menu_area .vertical_area_background').fadeOut(800);
                var src = image_src_regex.exec(vertical_menu_background);
                var backImg = new Image();
                backImg.src = src[1];
                $j(backImg).load(function() { $j('aside.vertical_menu_area .vertical_area_background').css('background-image', 'url(' + src[1] + ')').fadeIn(800) })
            }
        } else { if (!$j('aside.vertical_menu_area .vertical_area_background').hasClass('preload_background')) { $j('aside.vertical_menu_area .vertical_area_background').css('background-image', 'none') } }
        Waypoint.destroyAll();
        if ($j('html').hasClass('full_screen_initalized')) {
            $j('html').removeClass('full_screen_initalized');
            $j.fn.fullpage.destroy('all')
        }
        $j('html, body').animate({ scrollTop: 0 }, 400, function() {
            if (animation === "ajax_updown" || animation === "ajax_updown_fade") {
                var targetTop;
                if ('down' === direction) { targetTop = 0 - contentHeight } else { targetTop = targetHeight }
                if ('down' === direction) { $j('.content_wrapper').css({ top: viewport.height() }) } else { $j('.content_wrapper').css({ top: -newHeight }) }
                if (animation === "ajax_updown_fade") {
                    $j('header.page_header.ajax_header_animation .drop_down > ul > li').mouseout();
                    $j('header.page_header.ajax_header_animation').stop().fadeTo(animationTime, 0, function() { $j('header.page_header.ajax_header_animation').stop().fadeTo(animationTime, 1) });
                    content.stop().fadeTo(animationTime, 0, function() {
                        $j(this).hide().remove();
                        removeAjaxLoader();
                        setHeightPaspartuForSlider();
                        setPageMeta(meta_data);
                        $j('.content_wrapper').css({ visibility: 'visible', opacity: 1 }).stop().animate({ top: 0 }, animationTime, function() {
                            $j('.content_wrapper').find('.content').unwrap();
                            perPageBindings();
                            callCallback(callbacks, "oncomplete", null, [], { hash: hash })
                        })
                    })
                } else {
                    content.stop().animate({ top: targetTop }, animationTime, function() {
                        $j(this).hide().remove();
                        removeAjaxLoader();
                        setHeightPaspartuForSlider();
                        setPageMeta(meta_data);
                        $j('.content_wrapper').css({ visibility: 'visible', opacity: 1 }).stop().animate({ top: 0 }, animationTime, function() {
                            $j('.content_wrapper').find('.content').unwrap();
                            perPageBindings();
                            callCallback(callbacks, "oncomplete", null, [], { hash: hash })
                        })
                    })
                }
            } else if (animation === "ajax_fade") {
                $j('header.page_header.ajax_header_animation .drop_down > ul > li').mouseout();
                $j('header.page_header.ajax_header_animation').stop().fadeTo(animationTime, 0, function() { $j('header.page_header.ajax_header_animation').stop().fadeTo(animationTime, 1) });
                content.stop().fadeTo(animationTime, 0, function() {
                    $j(this).hide().remove();
                    removeAjaxLoader();
                    setHeightPaspartuForSlider();
                    setPageMeta(meta_data);
                    $j('.content_wrapper').css({ visibility: 'visible', opacity: 1, display: 'none' }).stop().fadeIn(animationTime, function() {
                        $j('.content_wrapper').find('.content').unwrap();
                        perPageBindings();
                        callCallback(callbacks, "oncomplete", null, [], { hash: hash })
                    })
                })
            } else if (animation === "ajax_no_animation") {
                removeAjaxLoader();
                setHeightPaspartuForSlider();
                setPageMeta(meta_data);
                $j('.content_wrapper').css({ visibility: 'visible', opacity: 1, display: 'none' }).stop().fadeIn(0, function() {
                    $j('.content_wrapper').find('.content').unwrap();
                    perPageBindings();
                    callCallback(callbacks, "oncomplete", null, [], { hash: hash })
                })
            } else if (animation === "ajax_leftright") {
                setPageMeta(meta_data);
                var targetLeft;
                if ('left' === direction2) { targetLeft = 0 - windowWidth } else { targetLeft = windowWidth }
                content.stop().animate({ left: targetLeft }, animationTime, function() {
                    $j(this).hide().remove();
                    removeAjaxLoader();
                    setHeightPaspartuForSlider()
                });
                if (content.find('.carousel-inner:not(.relative_position)').length) { content.find('.carousel-inner').animate({ marginLeft: targetLeft }, animationTime) }
                if ('left' === direction2) { $j('.content_wrapper').css({ left: windowWidth }); if ($j('.content_wrapper').find('.carousel-inner:not(.relative_position)').length) { $j('.content_wrapper').find('.carousel-inner').css({ left: windowWidth }) } } else { $j('.content_wrapper').css({ left: -windowWidth }); if ($j('.content_wrapper').find('.carousel-inner:not(.relative_position)').length) { $j('.content_wrapper').find('.carousel-inner').css({ left: windowWidth }) } }
                $j('.content_wrapper').css({ visibility: 'visible', opacity: 1 }).stop().animate({ left: 0 }, animationTime, function() {
                    $j('.content_wrapper').find('.content').unwrap();
                    perPageBindings();
                    callCallback(callbacks, "oncomplete", null, [], { hash: hash })
                });
                if ($j('.content_wrapper').find('.carousel-inner:not(.relative_position)').length) { $j('.content_wrapper').find('.carousel-inner').animate({ left: 0 }, animationTime) }
            }
        })
    });
    setToolBarEditLink(pageId)
}

function callCallback(callbacks, name, self, args, variables) {
    "use strict";
    if (callbacks[name]) { callbacks[name].apply(self, args) }
    anchorAjaxScroll(variables.hash);
    initElementsAnimation();
    initElementsHolderItemAnimation();
    initPortfolioSingleInfo();
    initTitleAreaAnimation();
    initFullScreenTemplate();
    showGoogleMap();
    $j('.animate_title_text .title h1, .animate_title_text .title .subtitle span, .animate_title_text .breadcrumbs_title .breadcrumb').css({ visibility: 'visible' });
    $j('.blog_holder.masonry').isotope('layout');
    $j('.blog_holder.masonry_full_width').isotope('layout');
    $j('footer').css('padding-top', 0).css('top', 'auto');
    if ($j('nav.content_menu').length > 0) {
        content_menu_position = $j('nav.content_menu').offset().top;
        contentMenuPosition();
        contentMenuOnScroll()
    }
    initParallax();
    if ($j('header.page_header').hasClass('light')) {
        if (header_style === "dark" || header_style === "") {
            $j('header').removeClass('light').addClass(header_style);
            $j('aside.vertical_menu_area').removeClass('light').addClass(header_style)
        }
    } else if ($j('header.page_header').hasClass('dark')) {
        if (header_style === "light" || header_style === "") {
            $j('header').removeClass('dark').addClass(header_style);
            $j('aside.vertical_menu_area').removeClass('dark').addClass(header_style)
        }
    } else if (header_style === "light" || header_style === "dark" || header_style === "") {
        $j('header.page_header').addClass(header_style);
        $j('aside.vertical_menu_area').addClass(header_style)
    } else {
        $j('header.page_header').removeClass("left right").addClass(header_style);
        $j('aside.vertical_menu_area').removeClass("left right").addClass(header_style)
    }
    if ($j('.carousel').length) { checkSliderForHeaderStyle($j('.carousel .active')) }
    $j('.paspartu_outer, .space_around_content_inner').removeAttr('style');
    if ($j('.no-touch .carousel').length) { skrollr_slider.refresh() }
    mkdfAnimateOverlappingContent()
}

function anchorAjaxScroll(hash) {
    "use strict";
    var scrollToAmount;
    var paspartuScrollAdd = $j('body').hasClass('paspartu_on_top_fixed') ? $window_width * paspartu_width : 0;
    if (hash !== undefined && $j('[data-mkd_id="' + hash + '"]').length > 0) {
        if ($window_width > 1000) {
            if ($j('header.page_header').hasClass('fixed') && !$j('body').hasClass('vertical_menu_enabled')) {
                if ($j('header.page_header').hasClass('scroll_top')) { var top_header_height = header_top_height } else { var top_header_height = 0 }
                if (!$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')) {
                    var min_header_height = $j('header.page_header').hasClass('centered_logo') ? min_header_height_scroll * 2 + 20 : min_header_height_scroll;
                    if (header_height - ($j('[data-mkd_id="' + hash + '"]').offset().top + top_header_height) / 4 >= min_header_height) {
                        var diff_of_header_and_section = $j('[data-mkd_id="' + hash + '"]').offset().top - header_height - large_menu_item_border - paspartuScrollAdd;
                        scrollToAmount = diff_of_header_and_section + (diff_of_header_and_section / 4) + (diff_of_header_and_section / 16) + (diff_of_header_and_section / 64) + 1
                    } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - min_header_height - large_menu_item_border - paspartuScrollAdd }
                } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - paspartuScrollAdd }
            } else if ($j('header.page_header').hasClass('fixed_top_header') && !$j('body').hasClass('vertical_menu_enabled')) { if (!$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')) { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - header_top_height - large_menu_item_border - paspartuScrollAdd } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - paspartuScrollAdd } } else if ($j('header.page_header').hasClass('fixed_hiding') && !$j('body').hasClass('vertical_menu_enabled')) { if (!$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')) { if ($j('[data-mkd_id="' + hash + '"]').offset().top - (header_height + logo_height / 2 + 20) <= scroll_amount_for_fixed_hiding) { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - header_height - logo_height / 2 - 20 - paspartuScrollAdd } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - min_header_height_fixed_hidden - 20 - paspartuScrollAdd } } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - paspartuScrollAdd } } else if ($j('header.page_header').hasClass('stick') || $j('header.page_header').hasClass('stick_with_left_right_menu') && !$j('body').hasClass('vertical_menu_enabled')) { if (!$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')) { if (sticky_amount >= $j('[data-mkd_id="' + hash + '"]').offset().top) { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top + 1 - paspartuScrollAdd } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - min_header_height_sticky - paspartuScrollAdd } } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - paspartuScrollAdd } } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - paspartuScrollAdd }
        } else { scrollToAmount = $j('[data-mkd_id="' + hash + '"]').offset().top - paspartuScrollAdd }
        $j('html, body').animate({ scrollTop: Math.round(scrollToAmount) }, 1800, function() {})
    }
}

function setHeightPaspartuForSlider() {
    "use strict";
    if ($j('.carousel').length) {
        var $this = $j('.carousel');
        var mobile_header = $j(window).width() < 1000 ? $j('header.page_header').height() : 0;
        var header_height_add_for_paspartu = $window_width > 1000 && !$j('header.page_header').hasClass('transparent') && $j('body.paspartu_on_top_fixed').length == 0 ? $j('header.page_header').height() : 0;
        var paspartu_amount_with_top = $j('.paspartu_outer:not(.disable_top_paspartu)').length > 0 ? Math.round($window_width * paspartu_width + header_height_add_for_paspartu) : 0;
        var paspartu_amount_with_bottom = $j('.paspartu_outer.paspartu_on_bottom_slider').length > 0 ? Math.round($window_width * paspartu_width) : 0;
        $this.css({ 'height': ($j(window).height() - mobile_header - paspartu_amount_with_top - paspartu_amount_with_bottom) + 'px' });
        $this.find('.mkd_slider_preloader').css({ 'height': ($j(window).height() - mobile_header - paspartu_amount_with_top - paspartu_amount_with_bottom) + 'px' });
        $this.find('.mkd_slider_preloader .ajax_loader').css({ 'display': 'block' });
        $this.find('.item').css({ 'height': ($j(window).height() - mobile_header - paspartu_amount_with_top - paspartu_amount_with_bottom) + 'px' });
        if ($j('.paspartu_outer:not(.disable_top_paspartu):not(.paspartu_on_bottom_slider)').length) { if (!$j('body').hasClass('paspartu_on_top_fixed')) { $this.closest('.mkd_slider').css('padding-top', Math.round(header_height_add_for_paspartu + $window_width * paspartu_width)) } }
        if ($j('.paspartu_outer.paspartu_on_bottom_slider').length) { $this.closest('.mkd_slider').css('padding-bottom', Math.round($window_width * paspartu_width)) }
    }
}

function onLinkClicked(me) { "use strict"; var url; if (me.attr('href') === undefined) { url = me.attr('value').split(mkd_root)[1] } else { url = me.attr('href').split(mkd_root)[1] } if (!me.hasClass('current')) { loadedPageFlag = false; return loadResource(url) } }

function loadResource(url) {
    "use strict";
    var me = $j("nav a[href='" + mkd_root + url + "'], .widget_nav_menu a[href='" + mkd_root + url + "']");
    var direction = me.hasClass('up') ? 'up' : 'down';
    var direction2 = me.hasClass('left') ? 'left' : 'right';
    $j('.ajax_loader').fadeIn();
    $j.ajax({
        url: mkd_root + url,
        dataType: 'html',
        async: true,
        success: function(text, status, request) {
            function insertNewPage() {
                slideInNewPage(content, text, direction, direction2, animationTime, {
                    oncomplete: function() {
                        ajaxSetActiveState(me);
                        balanceNavArrows();
                        loadedPageFlag = true
                    }
                }, url)
            }
            insertNewPage();
            firstLoad = false;
            if (window.history.pushState) { var pageurl = mkd_root + url; if (pageurl !== window.location) { window.history.pushState({ path: pageurl }, '', pageurl) } if (typeof _gaq !== 'undefined') { _gaq.push(['_trackPageview', mkd_root + url]) } } else { document.location.href = mkd_root + '#/' + url }
        },
        error: function() {},
        statusCode: {
            404: function() {
                alert('Page not found!');
                window.location.href = mkd_root + url
            }
        }
    });
    if ($j('body').hasClass('page_not_loaded')) { $j('body').removeClass('page_not_loaded') }
}
if (window.history.pushState) {
    $j(window).bind('popstate', function() {
        "use strict";
        var url = location.href;
        url = url.split(mkd_root)[1];
        if (!firstLoad && loadedPageFlag) {
            loadedPageFlag = false;
            loadResource(url)
        }
    })
}
var content;
var viewport;
var animationTime = 1000;
var disableHashChange = true;
$j(document).ready(function() {
    "use strict";
    viewport = $j('.content');
    content = $j('.content');
    balanceNavArrows();
    $j("body").removeClass("page_not_loaded");
    if ($j('body').hasClass('woocommerce') || $j('body').hasClass('woocommerce-page')) { return false } else {
        $j(document).on('click', 'a[target!="_blank"]:not(.no_ajax):not(.no_link)', function(click) {
            if (click.ctrlKey == 1) { window.open($j(this).attr('href'), '_blank'); return false }
            if ($j(this).parent().hasClass('load_more')) { return false }
            if ($j(this).parent().parent().hasClass('blog_load_more_button')) { return false }
            if ($j(this).parent().hasClass('comments_number')) {
                var hash = $j(this).attr('href').split("#")[1];
                $j('html, body').scrollTop($j("#" + hash).offset().top);
                return false
            }
            if (window.location.href.split('#')[0] == $j(this).attr('href').split('#')[0]) { return false }
            if ($j(this).closest('.no_animation').length === 0) {
                if (document.location.href.indexOf("?s=") >= 0) { return true }
                if ($j(this).attr('href').indexOf("wp-admin") >= 0) { return true }
                if ($j(this).attr('href').indexOf("wp-content") >= 0) { return true }
                if (jQuery.inArray($j(this).attr('href'), no_ajax_pages) !== -1) { document.location.href = $j(this).attr('href'); return false }
                if (($j(this).attr('href') !== "http://#") && ($j(this).attr('href') !== "#")) {
                    disableHashChange = true;
                    var url = $j(this).attr('href');
                    var start = url.indexOf(mkd_root);
                    if (start === 0) {
                        if (!loadedPageFlag) { return false }
                        click.preventDefault();
                        click.stopImmediatePropagation();
                        click.stopPropagation();
                        onLinkClicked($j(this))
                    }
                } else { return false }
            }
        })
    }
});;
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */
document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function() { for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ") }(),
    function($) {
        "function" != typeof window.vc_js && (window.vc_js = function() {
            "use strict";
            vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_gridBehaviour(), vc_rowBehaviour(), vc_prepareHoverBox(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 800)
        }), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function($parent) {
            ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function() {
                var this_element = jQuery(this),
                    sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval"), 10),
                    sliderFx = this_element.attr("data-flex_fx"),
                    slideshow = !0;
                0 === sliderTimeout && (slideshow = !1), this_element.is(":visible") && this_element.flexslider({ animation: sliderFx, slideshow: slideshow, slideshowSpeed: sliderTimeout, sliderSpeed: 800, smoothHeight: !0 })
            })
        }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function() {
            0 < jQuery(".wpb_googleplus").length && function() {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://apis.google.com/js/plusone.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function() {
            0 < jQuery(".wpb_pinterest").length && function() {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://assets.pinterest.com/js/pinit.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".vc_progress_bar").each(function() {
                var $el = jQuery(this);
                $el.vcwaypoint(function() {
                    $el.find(".vc_single_bar").each(function(index) {
                        var bar = jQuery(this).find(".vc_bar"),
                            val = bar.data("percentage-value");
                        setTimeout(function() { bar.css({ width: val + "%" }) }, 200 * index)
                    })
                }, { offset: "85%" })
            })
        }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function() {
                var $el = jQuery(this);
                $el.vcwaypoint(function() { $el.addClass("wpb_start_animation animated") }, { offset: "85%" })
            })
        }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function($el) {
            function event(e) {
                e && e.preventDefault && e.preventDefault();
                var element = jQuery(this).closest(".vc_toggle"),
                    content = element.find(".vc_toggle_content");
                element.hasClass("vc_toggle_active") ? content.slideUp({ duration: 300, complete: function() { element.removeClass("vc_toggle_active") } }) : content.slideDown({ duration: 300, complete: function() { element.addClass("vc_toggle_active") } })
            }
            $el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click").on("click", event) : $el.find(".vc_toggle_title").off("click").on("click", event) : jQuery(".vc_toggle_title").off("click").on("click", event)
        }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function($tab) {
            if (jQuery.ui) {
                var $call = $tab || jQuery(".wpb_tabs, .wpb_tour"),
                    ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10",
                    old_version = 1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9;
                $call.each(function(index) {
                    var $tabs, interval = jQuery(this).attr("data-interval"),
                        tabs_array = [];
                    if ($tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({ show: function(event, ui) { wpb_prepare_tab_content(event, ui) }, activate: function(event, ui) { wpb_prepare_tab_content(event, ui) } }), interval && 0 < interval) try { $tabs.tabs("rotate", 1e3 * interval) } catch (err) { window.console && window.console.warn && console.warn("tabs behaviours error", err) }
                    jQuery(this).find(".wpb_tab").each(function() { tabs_array.push(this.id) }), jQuery(this).find(".wpb_tabs_nav li").on("click", function(e) { return e && e.preventDefault && e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1 }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click", function(e) {
                        var index, length;
                        e && e.preventDefault && e.preventDefault(), old_version ? (index = $tabs.tabs("option", "selected"), jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)) : (index = $tabs.tabs("option", "active"), length = $tabs.find(".wpb_tab").length, index = jQuery(this).parent().hasClass("wpb_next_slide") ? length <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? length - 1 : index - 1, $tabs.tabs("option", "active", index))
                    })
                })
            }
        }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function() {
            jQuery(".wpb_accordion").each(function(index) {
                var $tabs, active_tab, collapsible, $this = jQuery(this);
                $this.attr("data-interval"), collapsible = !1 === (active_tab = !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab"), 10) && parseInt($this.data("active-tab"), 10) - 1) || "yes" === $this.data("collapsible"), $tabs = $this.find(".wpb_accordion_wrapper").accordion({ header: "> div > h3", autoHeight: !1, heightStyle: "content", active: active_tab, collapsible: collapsible, navigation: !0, activate: vc_accordionActivate, change: function(event, ui) { void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel) } }), !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function() {})
            })
        }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function() {
            var layout_modes = { fitrows: "fitRows", masonry: "masonry" };
            jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function() {
                var $container = jQuery(this),
                    $thumbs = $container.find(".wpb_thumbnails"),
                    layout_mode = $thumbs.attr("data-layout-mode");
                $thumbs.isotope({ itemSelector: ".isotope-item", layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode] }), $container.find(".categories_filter a").data("isotope", $thumbs).on("click", function(e) {
                    e && e.preventDefault && e.preventDefault();
                    var $thumbs = jQuery(this).data("isotope");
                    jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({ filter: jQuery(this).attr("data-filter") })
                }), jQuery(window).bind("load resize", function() { $thumbs.isotope("layout") })
            })
        }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function($parent) {
            ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function() {
                var $this = jQuery(this);
                if (!0 !== $this.data("carousel_enabled") && $this.is(":visible")) {
                    $this.data("carousel_enabled", !0);
                    getColumnsCount(jQuery(this));
                    jQuery(this).hasClass("columns_count_1") && 900;
                    var carousel_li = jQuery(this).find(".wpb_thumbnails-fluid li");
                    carousel_li.css({ "margin-right": carousel_li.css("margin-left"), "margin-left": 0 });
                    var fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid");
                    fluid_ul.width(fluid_ul.width() + 300), jQuery(window).on("resize", function() { screen_size != (screen_size = getSizeName()) && window.setTimeout(function() { location.reload() }, 20) })
                }
            })
        }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function() {
            jQuery(".wpb_gallery_slides").each(function(index) {
                var $imagesGrid, this_element = jQuery(this);
                if (this_element.hasClass("wpb_slider_nivo")) {
                    var sliderTimeout = 1e3 * this_element.attr("data-interval");
                    0 === sliderTimeout && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({ effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse", slices: 15, boxCols: 8, boxRows: 4, animSpeed: 800, pauseTime: sliderTimeout, startSlide: 0, directionNav: !0, directionNavHide: !0, controlNav: !0, keyboardNav: !1, pauseOnHover: !0, manualAdvance: !1, prevText: "Prev", nextText: "Next" })
                } else this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function() { $imagesGrid.isotope({ itemSelector: ".isotope-item", layoutMode: "fitRows" }) }) : this_element.find(".wpb_image_grid_ul").isotope({ itemSelector: ".isotope-item", layoutMode: "fitRows" }))
            })
        }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function() { try { jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({ animationSpeed: "normal", hook: "data-rel", padding: 15, opacity: .7, showTitle: !0, allowresize: !0, counter_separator_label: "/", hideflash: !1, deeplinking: !1, modal: !1, callback: function() {-1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "") }, social_tools: "" }) } catch (err) { window.console && window.console.warn && window.console.warn("vc_prettyPhoto initialize error", err) } }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function() { return window.console && window.console.warn && window.console.warn("function vc_google_fonts is deprecated, no need to use it"), !1 }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function() {
            var vcSkrollrOptions, callSkrollInit, $ = window.jQuery;

            function fullWidthRow() {
                var $elements = $('[data-vc-full-width="true"]');
                $.each($elements, function(key, item) {
                    var $el = $(this);
                    $el.addClass("vc_hidden");
                    var $el_full = $el.next(".vc_row-full-width");
                    if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) {
                        var padding, paddingRight, el_margin_left = parseInt($el.css("margin-left"), 10),
                            el_margin_right = parseInt($el.css("margin-right"), 10),
                            offset = 0 - $el_full.offset().left - el_margin_left,
                            width = $(window).width();
                        if ("rtl" === $el.css("direction") && (offset -= $el_full.width(), offset += width, offset += el_margin_left, offset += el_margin_right), $el.css({ position: "relative", left: offset, "box-sizing": "border-box", width: width }), !$el.data("vcStretchContent")) "rtl" === $el.css("direction") ? ((padding = offset) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0)) : ((padding = -1 * offset) < 0 && (padding = 0), (paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0)), $el.css({ "padding-left": padding + "px", "padding-right": paddingRight + "px" });
                        $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", { el: $el, offset: offset, marginLeft: el_margin_left, marginRight: el_margin_right, elFull: $el_full, width: width })
                    }
                }), $(document).trigger("vc-full-width-row", $elements)
            }

            function fullHeightRow() {
                var windowHeight, offsetTop, fullHeight, $element = $(".vc_row-o-full-height:first");
                $element.length && (windowHeight = $(window).height(), (offsetTop = $element.offset().top) < windowHeight && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("min-height", fullHeight + "vh")));
                $(document).trigger("vc-full-height-row", $element)
            }
            $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function() { "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>') }), vc_initVideoBackgrounds(), callSkrollInit = !1, window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function() {
                var skrollrSize, skrollrStart, $parallaxElement, parallaxImage, youtubeId;
                callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize + "%"), parallaxImage = $(this).data("vcParallaxImage"), (youtubeId = vcExtractYoutubeId(parallaxImage)) ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrStart = -(skrollrSize - 100), $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: 0%;")
            }), callSkrollInit && window.skrollr && (vcSkrollrOptions = { forceHeight: !1, smoothScrolling: !1, mobileCheck: function() { return !1 } }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll)
        }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function() { jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid() }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function(el) {
            for (var find = !1, i = 1; !1 === find;) {
                if (el.hasClass("columns_count_" + i)) return find = !0, i;
                i++
            }
        });
        var screen_size = getSizeName();

        function getSizeName() { var screen_w = jQuery(window).width(); return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && screen_w < 1169 ? "desktop" : 768 < screen_w && screen_w < 959 ? "tablet" : 300 < screen_w && screen_w < 767 ? "mobile" : screen_w < 300 ? "mobile_portrait" : "" }
        "function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function(event, ui) {
            var $ui_panel, $google_maps, panel = ui.panel || ui.newPanel,
                $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
                $round_charts = panel.find(".vc_round-chart"),
                $line_charts = panel.find(".vc_line-chart"),
                $carousel = panel.find('[data-ride="vc_carousel"]');
            if (vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                    var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
                }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                    var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
                }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({ reload: !1 }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({ reload: !1 }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $ui_panel.length && $ui_panel.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready")) {
                var $frame = $google_maps.find("iframe");
                $frame.attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")
            }
            panel.parents(".isotope").length && panel.parents(".isotope").each(function() { jQuery(this).isotope("layout") })
        }), "function" != typeof window.vc_ttaActivation && (window.vc_ttaActivation = function() {
            jQuery("[data-vc-accordion]").on("show.vc.accordion", function(e) {
                var $ = window.jQuery,
                    ui = {};
                ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
            })
        }), "function" != typeof window.vc_accordionActivate && (window.vc_accordionActivate = function(event, ui) {
            if (ui.newPanel.length && ui.newHeader.length) {
                var $pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),
                    $round_charts = ui.newPanel.find(".vc_round-chart"),
                    $line_charts = ui.newPanel.find(".vc_line-chart"),
                    $carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
                void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                    var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
                }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({ reload: !1 }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({ reload: !1 }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function() { jQuery(this).isotope("layout") })
            }
        }), "function" != typeof window.initVideoBackgrounds && (window.initVideoBackgrounds = function() { return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds() }), "function" != typeof window.vc_initVideoBackgrounds && (window.vc_initVideoBackgrounds = function() {
            jQuery("[data-vc-video-bg]").each(function() {
                var youtubeUrl, youtubeId, $element = jQuery(this);
                $element.data("vcVideoBg") ? (youtubeUrl = $element.data("vcVideoBg"), (youtubeId = vcExtractYoutubeId(youtubeUrl)) && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function(event, $grid) { $element.has($grid).length && vcResizeVideoBackground($element) })) : $element.find(".vc_video-bg").remove()
            })
        }), "function" != typeof window.insertYoutubeVideoAsBackground && (window.insertYoutubeVideoAsBackground = function($element, youtubeId, counter) {
            if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() { insertYoutubeVideoAsBackground($element, youtubeId, counter++) }, 100);
            var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
            new YT.Player($container[0], { width: "100%", height: "100%", videoId: youtubeId, playerVars: { playlist: youtubeId, iv_load_policy: 3, enablejsapi: 1, disablekb: 1, autoplay: 1, controls: 0, showinfo: 0, rel: 0, loop: 1, wmode: "transparent" }, events: { onReady: function(event) { event.target.mute().setLoop(!0) } } }), vcResizeVideoBackground($element), jQuery(window).bind("resize", function() { vcResizeVideoBackground($element) })
        }), "function" != typeof window.vcResizeVideoBackground && (window.vcResizeVideoBackground = function($element) {
            var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
                containerH = $element.innerHeight();
            containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px") : (iframeH = (iframeW = containerW) * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px"), iframeW += "px", iframeH += "px", $element.find(".vc_video-bg iframe").css({ maxWidth: "1000%", marginLeft: marginLeft, marginTop: marginTop, width: iframeW, height: iframeH })
        }), "function" != typeof window.vcExtractYoutubeId && (window.vcExtractYoutubeId = function(url) { if (void 0 === url) return !1; var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/); return null !== id && id[1] }), "function" != typeof window.vc_googleMapsPointer && (window.vc_googleMapsPointer = function() {
            var $ = window.jQuery,
                $wpbGmapsWidget = $(".wpb_gmaps_widget");
            $wpbGmapsWidget.on("click", function() { $("iframe", this).css("pointer-events", "auto") }), $wpbGmapsWidget.on("mouseleave", function() { $("iframe", this).css("pointer-events", "none") }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
        }), "function" != typeof window.vc_setHoverBoxPerspective && (window.vc_setHoverBoxPerspective = function(hoverBox) {
            hoverBox.each(function() {
                var $this = jQuery(this),
                    perspective = 4 * $this.width() + "px";
                $this.css("perspective", perspective)
            })
        }), "function" != typeof window.vc_setHoverBoxHeight && (window.vc_setHoverBoxHeight = function(hoverBox) {
            hoverBox.each(function() {
                var $this = jQuery(this),
                    hoverBoxInner = $this.find(".vc-hoverbox-inner");
                hoverBoxInner.css("min-height", 0);
                var frontHeight = $this.find(".vc-hoverbox-front-inner").outerHeight(),
                    backHeight = $this.find(".vc-hoverbox-back-inner").outerHeight(),
                    hoverBoxHeight = backHeight < frontHeight ? frontHeight : backHeight;
                hoverBoxHeight < 280 && (hoverBoxHeight = 280), hoverBoxInner.css("min-height", hoverBoxHeight + "px")
            })
        }), "function" != typeof window.vc_prepareHoverBox && (window.vc_prepareHoverBox = function() {
            var hoverBox = jQuery(".vc-hoverbox");
            vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox)
        }), jQuery(document).ready(window.vc_prepareHoverBox), jQuery(window).resize(window.vc_prepareHoverBox), jQuery(document).ready(function($) { window.vc_js() })
    }(window.jQuery);;
$j(document).ready(function() {
    "use strict";
    $j('.price_slider_wrapper').parents('.widget').addClass('widget_price_filter');
    initSelect2();
    initAddToCartPlusMinus();
    initSingleProductImageSlider()
});
$j(window).on('resize', function() { calculateProductSliderHeight() });

function initSelect2() {
    "use strict";
    $j('.woocommerce-ordering .orderby, #calc_shipping_country, #dropdown_product_cat').select2({ minimumResultsForSearch: -1 });
    $j('.woocommerce-account .country_select').select2()
}

function initAddToCartPlusMinus() {
    "use strict";
    $j(document).on('click', '.quantity .plus, .quantity .minus', function() {
        var $qty = $j(this).closest('.quantity').find('.qty'),
            currentVal = parseFloat($qty.val()),
            max = parseFloat($qty.attr('max')),
            min = parseFloat($qty.attr('min')),
            step = $qty.attr('step');
        if (!currentVal || currentVal === '' || currentVal === 'NaN') currentVal = 0;
        if (max === '' || max === 'NaN') max = '';
        if (min === '' || min === 'NaN') min = 0;
        if (step === 'any' || step === '' || step === undefined || parseFloat(step) === 'NaN') step = 1;
        if ($j(this).is('.plus')) { if (max && (max == currentVal || currentVal > max)) { $qty.val(max) } else { $qty.val(currentVal + parseFloat(step)) } } else { if (min && (min == currentVal || currentVal < min)) { $qty.val(min) } else if (currentVal > 0) { $qty.val(currentVal - parseFloat(step)) } }
        $qty.trigger('change')
    })
}

function initSingleProductImageSlider() {
    'use strict';
    var slider = $j('#single-product-slider');
    if (slider.length) {
        slider.carouFredSel({
            responsive: true,
            items: { visible: 1 },
            scroll: { fx: "crossfade" },
            prev: { button: function() { return $j(this).parent().siblings('.caroufredsel-direction-nav').find('.single-product-gallery-prev') } },
            next: { button: function() { return $j(this).parent().siblings('.caroufredsel-direction-nav').find('.single-product-gallery-next') } },
            pagination: { container: ".single-product-slider-thumbs", anchorBuilder: false },
            onCreate: function() {
                slider.animate({ 'opacity': 1 }, '300');
                slider.parents('.single_product_image_wrapper').find('.caroufredsel-direction-nav a').each(function() {
                    var navArrow = $j(this);
                    var navArrowHeight = parseInt(navArrow.height());
                    var thumbHeight = parseInt(slider.parents('.single_product_image_wrapper').find('.thumbnails').outerHeight());
                    var marginTop = (navArrowHeight + thumbHeight) / 2;
                    navArrow.css('margin-top', '-' + marginTop + 'px')
                })
            }
        })
    }
    calculateProductSliderHeight()
}

function calculateProductSliderHeight() {
    'use strict';
    var slider = $j('#single-product-slider');
    slider.waitForImages(function() {
        var height = slider.find('img').height();
        slider.parent().css({ 'height': height })
    })
};
! function(a) { "undefined" == typeof a.fn.each2 && a.extend(a.fn, { each2: function(b) { for (var c = a([0]), d = -1, e = this.length; ++d < e && (c.context = c[0] = this[d]) && b.call(c[0], d, c) !== !1;); return this } }) }(jQuery),
function(a, b) {
    "use strict";

    function n(a) { var b, c, d, e; if (!a || a.length < 1) return a; for (b = "", c = 0, d = a.length; d > c; c++) e = a.charAt(c), b += m[e] || e; return b }

    function o(a, b) {
        for (var c = 0, d = b.length; d > c; c += 1)
            if (q(a, b[c])) return c;
        return -1
    }

    function p() {
        var b = a(l);
        b.appendTo("body");
        var c = { width: b.width() - b[0].clientWidth, height: b.height() - b[0].clientHeight };
        return b.remove(), c
    }

    function q(a, c) { return a === c ? !0 : a === b || c === b ? !1 : null === a || null === c ? !1 : a.constructor === String ? a + "" == c + "" : c.constructor === String ? c + "" == a + "" : !1 }

    function r(b, c) { var d, e, f; if (null === b || b.length < 1) return []; for (d = b.split(c), e = 0, f = d.length; f > e; e += 1) d[e] = a.trim(d[e]); return d }

    function s(a) { return a.outerWidth(!1) - a.width() }

    function t(c) {
        var d = "keyup-change-value";
        c.on("keydown", function() { a.data(c, d) === b && a.data(c, d, c.val()) }), c.on("keyup", function() {
            var e = a.data(c, d);
            e !== b && c.val() !== e && (a.removeData(c, d), c.trigger("keyup-change"))
        })
    }

    function u(c) {
        c.on("mousemove", function(c) {
            var d = i;
            (d === b || d.x !== c.pageX || d.y !== c.pageY) && a(c.target).trigger("mousemove-filtered", c)
        })
    }

    function v(a, c, d) {
        d = d || b;
        var e;
        return function() {
            var b = arguments;
            window.clearTimeout(e), e = window.setTimeout(function() { c.apply(d, b) }, a)
        }
    }

    function w(a) { var c, b = !1; return function() { return b === !1 && (c = a(), b = !0), c } }

    function x(a, b) {
        var c = v(a, function(a) { b.trigger("scroll-debounced", a) });
        b.on("scroll", function(a) { o(a.target, b.get()) >= 0 && c(a) })
    }

    function y(a) {
        a[0] !== document.activeElement && window.setTimeout(function() {
            var d, b = a[0],
                c = a.val().length;
            a.focus(), a.is(":visible") && b === document.activeElement && (b.setSelectionRange ? b.setSelectionRange(c, c) : b.createTextRange && (d = b.createTextRange(), d.collapse(!1), d.select()))
        }, 0)
    }

    function z(b) {
        b = a(b)[0];
        var c = 0,
            d = 0;
        if ("selectionStart" in b) c = b.selectionStart, d = b.selectionEnd - c;
        else if ("selection" in document) {
            b.focus();
            var e = document.selection.createRange();
            d = document.selection.createRange().text.length, e.moveStart("character", -b.value.length), c = e.text.length - d
        }
        return { offset: c, length: d }
    }

    function A(a) { a.preventDefault(), a.stopPropagation() }

    function B(a) { a.preventDefault(), a.stopImmediatePropagation() }

    function C(b) {
        if (!h) {
            var c = b[0].currentStyle || window.getComputedStyle(b[0], null);
            h = a(document.createElement("div")).css({ position: "absolute", left: "-10000px", top: "-10000px", display: "none", fontSize: c.fontSize, fontFamily: c.fontFamily, fontStyle: c.fontStyle, fontWeight: c.fontWeight, letterSpacing: c.letterSpacing, textTransform: c.textTransform, whiteSpace: "nowrap" }), h.attr("class", "select2-sizer"), a("body").append(h)
        }
        return h.text(b.val()), h.width()
    }

    function D(b, c, d) {
        var e, g, f = [];
        e = b.attr("class"), e && (e = "" + e, a(e.split(" ")).each2(function() { 0 === this.indexOf("select2-") && f.push(this) })), e = c.attr("class"), e && (e = "" + e, a(e.split(" ")).each2(function() { 0 !== this.indexOf("select2-") && (g = d(this), g && f.push(this)) })), b.attr("class", f.join(" "))
    }

    function E(a, b, c, d) {
        var e = n(a.toUpperCase()).indexOf(n(b.toUpperCase())),
            f = b.length;
        return 0 > e ? (c.push(d(a)), void 0) : (c.push(d(a.substring(0, e))), c.push("<span class='select2-match'>"), c.push(d(a.substring(e, e + f))), c.push("</span>"), c.push(d(a.substring(e + f, a.length))), void 0)
    }

    function F(a) { var b = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" }; return String(a).replace(/[&<>"'\/\\]/g, function(a) { return b[a] }) }

    function G(c) {
        var d, e = null,
            f = c.quietMillis || 100,
            g = c.url,
            h = this;
        return function(i) {
            window.clearTimeout(d), d = window.setTimeout(function() {
                var d = c.data,
                    f = g,
                    j = c.transport || a.fn.select2.ajaxDefaults.transport,
                    k = { type: c.type || "GET", cache: c.cache || !1, jsonpCallback: c.jsonpCallback || b, dataType: c.dataType || "json" },
                    l = a.extend({}, a.fn.select2.ajaxDefaults.params, k);
                d = d ? d.call(h, i.term, i.page, i.context) : null, f = "function" == typeof f ? f.call(h, i.term, i.page, i.context) : f, e && e.abort(), c.params && (a.isFunction(c.params) ? a.extend(l, c.params.call(h)) : a.extend(l, c.params)), a.extend(l, {
                    url: f,
                    dataType: c.dataType,
                    data: d,
                    success: function(a) {
                        var b = c.results(a, i.page);
                        i.callback(b)
                    }
                }), e = j.call(h, l)
            }, f)
        }
    }

    function H(b) {
        var d, e, c = b,
            f = function(a) { return "" + a.text };
        a.isArray(c) && (e = c, c = { results: e }), a.isFunction(c) === !1 && (e = c, c = function() { return e });
        var g = c();
        return g.text && (f = g.text, a.isFunction(f) || (d = g.text, f = function(a) { return a[d] })),
            function(b) {
                var g, d = b.term,
                    e = { results: [] };
                return "" === d ? (b.callback(c()), void 0) : (g = function(c, e) {
                    var h, i;
                    if (c = c[0], c.children) {
                        h = {};
                        for (i in c) c.hasOwnProperty(i) && (h[i] = c[i]);
                        h.children = [], a(c.children).each2(function(a, b) { g(b, h.children) }), (h.children.length || b.matcher(d, f(h), c)) && e.push(h)
                    } else b.matcher(d, f(c), c) && e.push(c)
                }, a(c().results).each2(function(a, b) { g(b, e.results) }), b.callback(e), void 0)
            }
    }

    function I(c) {
        var d = a.isFunction(c);
        return function(e) {
            var f = e.term,
                g = { results: [] };
            a(d ? c() : c).each(function() {
                var a = this.text !== b,
                    c = a ? this.text : this;
                ("" === f || e.matcher(f, c)) && g.results.push(a ? this : { id: this, text: this })
            }), e.callback(g)
        }
    }

    function J(b, c) { if (a.isFunction(b)) return !0; if (!b) return !1; throw new Error(c + " must be a function or a falsy value") }

    function K(b) { return a.isFunction(b) ? b() : b }

    function L(b) { var c = 0; return a.each(b, function(a, b) { b.children ? c += L(b.children) : c++ }), c }

    function M(a, c, d, e) {
        var h, i, j, k, l, f = a,
            g = !1;
        if (!e.createSearchChoice || !e.tokenSeparators || e.tokenSeparators.length < 1) return b;
        for (;;) {
            for (i = -1, j = 0, k = e.tokenSeparators.length; k > j && (l = e.tokenSeparators[j], i = a.indexOf(l), !(i >= 0)); j++);
            if (0 > i) break;
            if (h = a.substring(0, i), a = a.substring(i + l.length), h.length > 0 && (h = e.createSearchChoice.call(this, h, c), h !== b && null !== h && e.id(h) !== b && null !== e.id(h))) {
                for (g = !1, j = 0, k = c.length; k > j; j++)
                    if (q(e.id(h), e.id(c[j]))) { g = !0; break }
                g || d(h)
            }
        }
        return f !== a ? a : void 0
    }

    function N(b, c) { var d = function() {}; return d.prototype = new b, d.prototype.constructor = d, d.prototype.parent = b.prototype, d.prototype = a.extend(d.prototype, c), d }
    if (window.Select2 === b) {
        var c, d, e, f, g, h, j, k, i = { x: 0, y: 0 },
            c = {
                TAB: 9,
                ENTER: 13,
                ESC: 27,
                SPACE: 32,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                HOME: 36,
                END: 35,
                BACKSPACE: 8,
                DELETE: 46,
                isArrow: function(a) {
                    switch (a = a.which ? a.which : a) {
                        case c.LEFT:
                        case c.RIGHT:
                        case c.UP:
                        case c.DOWN:
                            return !0
                    }
                    return !1
                },
                isControl: function(a) {
                    var b = a.which;
                    switch (b) {
                        case c.SHIFT:
                        case c.CTRL:
                        case c.ALT:
                            return !0
                    }
                    return a.metaKey ? !0 : !1
                },
                isFunctionKey: function(a) { return a = a.which ? a.which : a, a >= 112 && 123 >= a }
            },
            l = "<div class='select2-measure-scrollbar'></div>",
            m = { "\u24b6": "A", "\uff21": "A", "\xc0": "A", "\xc1": "A", "\xc2": "A", "\u1ea6": "A", "\u1ea4": "A", "\u1eaa": "A", "\u1ea8": "A", "\xc3": "A", "\u0100": "A", "\u0102": "A", "\u1eb0": "A", "\u1eae": "A", "\u1eb4": "A", "\u1eb2": "A", "\u0226": "A", "\u01e0": "A", "\xc4": "A", "\u01de": "A", "\u1ea2": "A", "\xc5": "A", "\u01fa": "A", "\u01cd": "A", "\u0200": "A", "\u0202": "A", "\u1ea0": "A", "\u1eac": "A", "\u1eb6": "A", "\u1e00": "A", "\u0104": "A", "\u023a": "A", "\u2c6f": "A", "\ua732": "AA", "\xc6": "AE", "\u01fc": "AE", "\u01e2": "AE", "\ua734": "AO", "\ua736": "AU", "\ua738": "AV", "\ua73a": "AV", "\ua73c": "AY", "\u24b7": "B", "\uff22": "B", "\u1e02": "B", "\u1e04": "B", "\u1e06": "B", "\u0243": "B", "\u0182": "B", "\u0181": "B", "\u24b8": "C", "\uff23": "C", "\u0106": "C", "\u0108": "C", "\u010a": "C", "\u010c": "C", "\xc7": "C", "\u1e08": "C", "\u0187": "C", "\u023b": "C", "\ua73e": "C", "\u24b9": "D", "\uff24": "D", "\u1e0a": "D", "\u010e": "D", "\u1e0c": "D", "\u1e10": "D", "\u1e12": "D", "\u1e0e": "D", "\u0110": "D", "\u018b": "D", "\u018a": "D", "\u0189": "D", "\ua779": "D", "\u01f1": "DZ", "\u01c4": "DZ", "\u01f2": "Dz", "\u01c5": "Dz", "\u24ba": "E", "\uff25": "E", "\xc8": "E", "\xc9": "E", "\xca": "E", "\u1ec0": "E", "\u1ebe": "E", "\u1ec4": "E", "\u1ec2": "E", "\u1ebc": "E", "\u0112": "E", "\u1e14": "E", "\u1e16": "E", "\u0114": "E", "\u0116": "E", "\xcb": "E", "\u1eba": "E", "\u011a": "E", "\u0204": "E", "\u0206": "E", "\u1eb8": "E", "\u1ec6": "E", "\u0228": "E", "\u1e1c": "E", "\u0118": "E", "\u1e18": "E", "\u1e1a": "E", "\u0190": "E", "\u018e": "E", "\u24bb": "F", "\uff26": "F", "\u1e1e": "F", "\u0191": "F", "\ua77b": "F", "\u24bc": "G", "\uff27": "G", "\u01f4": "G", "\u011c": "G", "\u1e20": "G", "\u011e": "G", "\u0120": "G", "\u01e6": "G", "\u0122": "G", "\u01e4": "G", "\u0193": "G", "\ua7a0": "G", "\ua77d": "G", "\ua77e": "G", "\u24bd": "H", "\uff28": "H", "\u0124": "H", "\u1e22": "H", "\u1e26": "H", "\u021e": "H", "\u1e24": "H", "\u1e28": "H", "\u1e2a": "H", "\u0126": "H", "\u2c67": "H", "\u2c75": "H", "\ua78d": "H", "\u24be": "I", "\uff29": "I", "\xcc": "I", "\xcd": "I", "\xce": "I", "\u0128": "I", "\u012a": "I", "\u012c": "I", "\u0130": "I", "\xcf": "I", "\u1e2e": "I", "\u1ec8": "I", "\u01cf": "I", "\u0208": "I", "\u020a": "I", "\u1eca": "I", "\u012e": "I", "\u1e2c": "I", "\u0197": "I", "\u24bf": "J", "\uff2a": "J", "\u0134": "J", "\u0248": "J", "\u24c0": "K", "\uff2b": "K", "\u1e30": "K", "\u01e8": "K", "\u1e32": "K", "\u0136": "K", "\u1e34": "K", "\u0198": "K", "\u2c69": "K", "\ua740": "K", "\ua742": "K", "\ua744": "K", "\ua7a2": "K", "\u24c1": "L", "\uff2c": "L", "\u013f": "L", "\u0139": "L", "\u013d": "L", "\u1e36": "L", "\u1e38": "L", "\u013b": "L", "\u1e3c": "L", "\u1e3a": "L", "\u0141": "L", "\u023d": "L", "\u2c62": "L", "\u2c60": "L", "\ua748": "L", "\ua746": "L", "\ua780": "L", "\u01c7": "LJ", "\u01c8": "Lj", "\u24c2": "M", "\uff2d": "M", "\u1e3e": "M", "\u1e40": "M", "\u1e42": "M", "\u2c6e": "M", "\u019c": "M", "\u24c3": "N", "\uff2e": "N", "\u01f8": "N", "\u0143": "N", "\xd1": "N", "\u1e44": "N", "\u0147": "N", "\u1e46": "N", "\u0145": "N", "\u1e4a": "N", "\u1e48": "N", "\u0220": "N", "\u019d": "N", "\ua790": "N", "\ua7a4": "N", "\u01ca": "NJ", "\u01cb": "Nj", "\u24c4": "O", "\uff2f": "O", "\xd2": "O", "\xd3": "O", "\xd4": "O", "\u1ed2": "O", "\u1ed0": "O", "\u1ed6": "O", "\u1ed4": "O", "\xd5": "O", "\u1e4c": "O", "\u022c": "O", "\u1e4e": "O", "\u014c": "O", "\u1e80": "O", "\u1e52": "O", "\u014e": "O", "\u022e": "O", "\u0230": "O", "\xd6": "O", "\u022a": "O", "\u1ece": "O", "\u0180": "O", "\u01d1": "O", "\u020c": "O", "\u020e": "O", "\u01a0": "O", "\u1edc": "O", "\u1eda": "O", "\u1ee0": "O", "\u1ede": "O", "\u1ee2": "O", "\u1ecc": "O", "\u1ed8": "O", "\u01ea": "O", "\u01ec": "O", "\xd8": "O", "\u01fe": "O", "\u0186": "O", "\u019f": "O", "\ua74a": "O", "\ua74c": "O", "\u01a2": "OI", "\ua74e": "OO", "\u0222": "OU", "\u24c5": "P", "\uff30": "P", "\u1e54": "P", "\u1e56": "P", "\u01a4": "P", "\u2c63": "P", "\ua780": "P", "\ua752": "P", "\ua754": "P", "\u24c6": "Q", "\uff31": "Q", "\ua756": "Q", "\ua758": "Q", "\u024a": "Q", "\u24c7": "R", "\uff32": "R", "\u0154": "R", "\u1e58": "R", "\u0158": "R", "\u0210": "R", "\u0212": "R", "\u1e5a": "R", "\u1e5c": "R", "\u0156": "R", "\u1e5e": "R", "\u024c": "R", "\u2c64": "R", "\ua75a": "R", "\ua7a6": "R", "\ua782": "R", "\u24c8": "S", "\uff33": "S", "\u1e9e": "S", "\u015a": "S", "\u1e64": "S", "\u015c": "S", "\u1e60": "S", "\u0160": "S", "\u1e66": "S", "\u1e62": "S", "\u1e68": "S", "\u0218": "S", "\u015e": "S", "\u2c7e": "S", "\ua7a8": "S", "\ua784": "S", "\u24c9": "T", "\uff34": "T", "\u1e6a": "T", "\u0164": "T", "\u1e6c": "T", "\u021a": "T", "\u0162": "T", "\u1e70": "T", "\u1e6e": "T", "\u0166": "T", "\u01ac": "T", "\u01ae": "T", "\u023e": "T", "\ua786": "T", "\ua728": "TZ", "\u24ca": "U", "\uff35": "U", "\xd9": "U", "\xda": "U", "\xdb": "U", "\u0168": "U", "\u1e78": "U", "\u016a": "U", "\u1e7a": "U", "\u016c": "U", "\xdc": "U", "\u01db": "U", "\u01d7": "U", "\u01d5": "U", "\u01d9": "U", "\u1ee6": "U", "\u016e": "U", "\u0170": "U", "\u01d3": "U", "\u0214": "U", "\u0216": "U", "\u01af": "U", "\u1eea": "U", "\u1ee8": "U", "\u1eee": "U", "\u1eec": "U", "\u1ef0": "U", "\u1ee4": "U", "\u1e72": "U", "\u0172": "U", "\u1e76": "U", "\u1e74": "U", "\u0244": "U", "\u24cb": "V", "\uff36": "V", "\u1e7c": "V", "\u1e7e": "V", "\u01b2": "V", "\ua75e": "V", "\u0245": "V", "\ua760": "VY", "\u24cc": "W", "\uff37": "W", "\u1e80": "W", "\u1e82": "W", "\u0174": "W", "\u1e86": "W", "\u1e84": "W", "\u1e88": "W", "\u2c72": "W", "\u24cd": "X", "\uff38": "X", "\u1e8a": "X", "\u1e8c": "X", "\u24ce": "Y", "\uff39": "Y", "\u1ef2": "Y", "\xdd": "Y", "\u0176": "Y", "\u1ef8": "Y", "\u0232": "Y", "\u1e8e": "Y", "\u0178": "Y", "\u1ef6": "Y", "\u1ef4": "Y", "\u01b3": "Y", "\u024e": "Y", "\u1efe": "Y", "\u24cf": "Z", "\uff3a": "Z", "\u0179": "Z", "\u1e90": "Z", "\u017b": "Z", "\u017d": "Z", "\u1e92": "Z", "\u1e94": "Z", "\u01b5": "Z", "\u0224": "Z", "\u2c7f": "Z", "\u2c6b": "Z", "\ua762": "Z", "\u24d0": "a", "\uff41": "a", "\u1e9a": "a", "\xe0": "a", "\xe1": "a", "\xe2": "a", "\u1ea7": "a", "\u1ea5": "a", "\u1eab": "a", "\u1ea9": "a", "\xe3": "a", "\u0101": "a", "\u0103": "a", "\u1eb1": "a", "\u1eaf": "a", "\u1eb5": "a", "\u1eb3": "a", "\u0227": "a", "\u01e1": "a", "\xe4": "a", "\u01df": "a", "\u1ea3": "a", "\xe5": "a", "\u01fb": "a", "\u01ce": "a", "\u0201": "a", "\u0203": "a", "\u1ea1": "a", "\u1ead": "a", "\u1eb7": "a", "\u1e01": "a", "\u0105": "a", "\u2c65": "a", "\u0280": "a", "\ua733": "aa", "\xe6": "ae", "\u01fd": "ae", "\u01e3": "ae", "\ua735": "ao", "\ua737": "au", "\ua739": "av", "\ua73b": "av", "\ua73d": "ay", "\u24d1": "b", "\uff42": "b", "\u1e03": "b", "\u1e05": "b", "\u1e07": "b", "\u0180": "b", "\u0183": "b", "\u0253": "b", "\u24d2": "c", "\uff43": "c", "\u0107": "c", "\u0109": "c", "\u010b": "c", "\u010d": "c", "\xe7": "c", "\u1e09": "c", "\u0188": "c", "\u023c": "c", "\ua73f": "c", "\u2184": "c", "\u24d3": "d", "\uff44": "d", "\u1e0b": "d", "\u010f": "d", "\u1e0d": "d", "\u1e11": "d", "\u1e13": "d", "\u1e0f": "d", "\u0111": "d", "\u018c": "d", "\u0256": "d", "\u0257": "d", "\ua77a": "d", "\u01f3": "dz", "\u01c6": "dz", "\u24d4": "e", "\uff45": "e", "\xe8": "e", "\xe9": "e", "\xea": "e", "\u1ec1": "e", "\u1ebf": "e", "\u1ec5": "e", "\u1ec3": "e", "\u1ebd": "e", "\u0113": "e", "\u1e15": "e", "\u1e17": "e", "\u0115": "e", "\u0117": "e", "\xeb": "e", "\u1ebb": "e", "\u011b": "e", "\u0205": "e", "\u0207": "e", "\u1eb9": "e", "\u1ec7": "e", "\u0229": "e", "\u1e1d": "e", "\u0119": "e", "\u1e19": "e", "\u1e1b": "e", "\u0247": "e", "\u025b": "e", "\u01dd": "e", "\u24d5": "f", "\uff46": "f", "\u1e1f": "f", "\u0192": "f", "\ua77c": "f", "\u24d6": "g", "\uff47": "g", "\u01f5": "g", "\u011d": "g", "\u1e21": "g", "\u011f": "g", "\u0121": "g", "\u01e7": "g", "\u0123": "g", "\u01e5": "g", "\u0260": "g", "\ua7a1": "g", "\u1d79": "g", "\ua77f": "g", "\u24d7": "h", "\uff48": "h", "\u0125": "h", "\u1e23": "h", "\u1e27": "h", "\u021f": "h", "\u1e25": "h", "\u1e29": "h", "\u1e2b": "h", "\u1e96": "h", "\u0127": "h", "\u2c68": "h", "\u2c76": "h", "\u0265": "h", "\u0195": "hv", "\u24d8": "i", "\uff49": "i", "\xec": "i", "\xed": "i", "\xee": "i", "\u0129": "i", "\u012b": "i", "\u012d": "i", "\xef": "i", "\u1e2f": "i", "\u1ec9": "i", "\u01d0": "i", "\u0209": "i", "\u020b": "i", "\u1ecb": "i", "\u012f": "i", "\u1e2d": "i", "\u0268": "i", "\u0131": "i", "\u24d9": "j", "\uff4a": "j", "\u0135": "j", "\u01f0": "j", "\u0249": "j", "\u24da": "k", "\uff4b": "k", "\u1e31": "k", "\u01e9": "k", "\u1e33": "k", "\u0137": "k", "\u1e35": "k", "\u0199": "k", "\u2c6a": "k", "\ua741": "k", "\ua743": "k", "\ua745": "k", "\ua7a3": "k", "\u24db": "l", "\uff4c": "l", "\u0140": "l", "\u013a": "l", "\u013e": "l", "\u1e37": "l", "\u1e39": "l", "\u013c": "l", "\u1e3d": "l", "\u1e3b": "l", "\u017f": "l", "\u0142": "l", "\u019a": "l", "\u026b": "l", "\u2c61": "l", "\ua749": "l", "\ua781": "l", "\ua747": "l", "\u01c9": "lj", "\u24dc": "m", "\uff4d": "m", "\u1e3f": "m", "\u1e41": "m", "\u1e43": "m", "\u0271": "m", "\u026f": "m", "\u24dd": "n", "\uff4e": "n", "\u01f9": "n", "\u0144": "n", "\xf1": "n", "\u1e45": "n", "\u0148": "n", "\u1e47": "n", "\u0146": "n", "\u1e4b": "n", "\u1e49": "n", "\u019e": "n", "\u0272": "n", "\u0149": "n", "\ua791": "n", "\ua7a5": "n", "\u01cc": "nj", "\u24de": "o", "\uff4f": "o", "\xf2": "o", "\xf3": "o", "\xf4": "o", "\u1ed3": "o", "\u1ed1": "o", "\u1ed7": "o", "\u1ed5": "o", "\xf5": "o", "\u1e4d": "o", "\u022d": "o", "\u1e4f": "o", "\u014d": "o", "\u1e51": "o", "\u1e53": "o", "\u014f": "o", "\u022f": "o", "\u0231": "o", "\xf6": "o", "\u022b": "o", "\u1ecf": "o", "\u0151": "o", "\u01d2": "o", "\u020d": "o", "\u020f": "o", "\u01a1": "o", "\u1edd": "o", "\u1edb": "o", "\u1ee1": "o", "\u1edf": "o", "\u1ee3": "o", "\u1ecd": "o", "\u1ed9": "o", "\u01eb": "o", "\u01ed": "o", "\xf8": "o", "\u01ff": "o", "\u0254": "o", "\ua74b": "o", "\ua74d": "o", "\u0275": "o", "\u01a3": "oi", "\u0223": "ou", "\ua74f": "oo", "\u24df": "p", "\uff80": "p", "\u1e55": "p", "\u1e57": "p", "\u01a5": "p", "\u1d7d": "p", "\ua751": "p", "\ua753": "p", "\ua755": "p", "\u24e0": "q", "\uff51": "q", "\u024b": "q", "\ua757": "q", "\ua759": "q", "\u24e1": "r", "\uff52": "r", "\u0155": "r", "\u1e59": "r", "\u0159": "r", "\u0211": "r", "\u0213": "r", "\u1e5b": "r", "\u1e5d": "r", "\u0157": "r", "\u1e5f": "r", "\u024d": "r", "\u027d": "r", "\ua75b": "r", "\ua7a7": "r", "\ua783": "r", "\u24e2": "s", "\uff53": "s", "\xdf": "s", "\u015b": "s", "\u1e65": "s", "\u015d": "s", "\u1e61": "s", "\u0161": "s", "\u1e67": "s", "\u1e63": "s", "\u1e69": "s", "\u0219": "s", "\u015f": "s", "\u023f": "s", "\ua7a9": "s", "\ua785": "s", "\u1e9b": "s", "\u24e3": "t", "\uff54": "t", "\u1e6b": "t", "\u1e97": "t", "\u0165": "t", "\u1e6d": "t", "\u021b": "t", "\u0163": "t", "\u1e71": "t", "\u1e6f": "t", "\u0167": "t", "\u01ad": "t", "\u0288": "t", "\u2c66": "t", "\ua787": "t", "\ua729": "tz", "\u24e4": "u", "\uff55": "u", "\xf9": "u", "\xfa": "u", "\xfb": "u", "\u0169": "u", "\u1e79": "u", "\u016b": "u", "\u1e7b": "u", "\u016d": "u", "\xfc": "u", "\u01dc": "u", "\u01d8": "u", "\u01d6": "u", "\u01da": "u", "\u1ee7": "u", "\u016f": "u", "\u0171": "u", "\u01d4": "u", "\u0215": "u", "\u0217": "u", "\u01b0": "u", "\u1eeb": "u", "\u1ee9": "u", "\u1eef": "u", "\u1eed": "u", "\u1ef1": "u", "\u1ee5": "u", "\u1e73": "u", "\u0173": "u", "\u1e77": "u", "\u1e75": "u", "\u0289": "u", "\u24e5": "v", "\uff56": "v", "\u1e7d": "v", "\u1e7f": "v", "\u028b": "v", "\ua75f": "v", "\u028c": "v", "\ua761": "vy", "\u24e6": "w", "\uff57": "w", "\u1e81": "w", "\u1e83": "w", "\u0175": "w", "\u1e87": "w", "\u1e85": "w", "\u1e98": "w", "\u1e89": "w", "\u2c73": "w", "\u24e7": "x", "\uff58": "x", "\u1e8b": "x", "\u1e8d": "x", "\u24e8": "y", "\uff59": "y", "\u1ef3": "y", "\xfd": "y", "\u0177": "y", "\u1ef9": "y", "\u0233": "y", "\u1e8f": "y", "\xff": "y", "\u1ef7": "y", "\u1e99": "y", "\u1ef5": "y", "\u01b4": "y", "\u024f": "y", "\u1eff": "y", "\u24e9": "z", "\uff5a": "z", "\u017a": "z", "\u1e91": "z", "\u017c": "z", "\u017e": "z", "\u1e93": "z", "\u1e95": "z", "\u01b6": "z", "\u0225": "z", "\u0240": "z", "\u2c6c": "z", "\ua763": "z" };
        j = a(document), g = function() { var a = 1; return function() { return a++ } }(), j.on("mousemove", function(a) { i.x = a.pageX, i.y = a.pageY }), d = N(Object, {
            bind: function(a) { var b = this; return function() { a.apply(b, arguments) } },
            init: function(c) {
                var d, e, h, i, f = ".select2-results";
                this.opts = c = this.prepareOpts(c), this.id = c.id, c.element.data("select2") !== b && null !== c.element.data("select2") && c.element.data("select2").destroy(), this.container = this.createContainer(), this.containerId = "s2id_" + (c.element.attr("id") || "autogen" + g()), this.containerSelector = "#" + this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.body = w(function() { return c.element.closest("body") }), D(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", c.element.attr("style")), this.container.css(K(c.containerCss)), this.container.addClass(K(c.containerCssClass)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", A), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), D(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(K(c.dropdownCssClass)), this.dropdown.data("select2", this), this.dropdown.on("click", A), this.results = d = this.container.find(f), this.search = e = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", A), u(this.results), this.dropdown.on("mousemove-filtered touchstart touchmove touchend", f, this.bind(this.highlightUnderEvent)), x(80, this.results), this.dropdown.on("scroll-debounced", f, this.bind(this.loadMoreIfNeeded)), a(this.container).on("change", ".select2-input", function(a) { a.stopPropagation() }), a(this.dropdown).on("change", ".select2-input", function(a) { a.stopPropagation() }), a.fn.mousewheel && d.mousewheel(function(a, b, c, e) {
                    var f = d.scrollTop();
                    e > 0 && 0 >= f - e ? (d.scrollTop(0), A(a)) : 0 > e && d.get(0).scrollHeight - d.scrollTop() + e <= d.height() && (d.scrollTop(d.get(0).scrollHeight - d.height()), A(a))
                }), t(e), e.on("keyup-change input paste", this.bind(this.updateResults)), e.on("focus", function() { e.addClass("select2-focused") }), e.on("blur", function() { e.removeClass("select2-focused") }), this.dropdown.on("mouseup", f, this.bind(function(b) { a(b.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(b), this.selectHighlighted(b)) })), this.dropdown.on("click mouseup mousedown", function(a) { a.stopPropagation() }), a.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== c.maximumInputLength && this.search.attr("maxlength", c.maximumInputLength);
                var h = c.element.prop("disabled");
                h === b && (h = !1), this.enable(!h);
                var i = c.element.prop("readonly");
                i === b && (i = !1), this.readonly(i), k = k || p(), this.autofocus = c.element.prop("autofocus"), c.element.prop("autofocus", !1), this.autofocus && this.focus(), this.nextSearchTerm = b
            },
            destroy: function() {
                var a = this.opts.element,
                    c = a.data("select2");
                this.close(), this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), c !== b && (c.container.remove(), c.dropdown.remove(), a.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1), this.elementTabIndex ? a.attr({ tabindex: this.elementTabIndex }) : a.removeAttr("tabindex"), a.show())
            },
            optionToData: function(a) { return a.is("option") ? { id: a.prop("value"), text: a.text(), element: a.get(), css: a.attr("class"), disabled: a.prop("disabled"), locked: q(a.attr("locked"), "locked") || q(a.data("locked"), !0) } : a.is("optgroup") ? { text: a.attr("label"), children: [], element: a.get(), css: a.attr("class") } : void 0 },
            prepareOpts: function(c) {
                var d, e, f, g, h = this;
                if (d = c.element, "select" === d.get(0).tagName.toLowerCase() && (this.select = e = c.element), e && a.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() { if (this in c) throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.") }), c = a.extend({}, {
                        populateResults: function(d, e, f) {
                            var g, l = this.opts.id;
                            g = function(d, e, i) { var j, k, m, n, o, p, q, r, s, t; for (d = c.sortResults(d, e, f), j = 0, k = d.length; k > j; j += 1) m = d[j], o = m.disabled === !0, n = !o && l(m) !== b, p = m.children && m.children.length > 0, q = a("<li></li>"), q.addClass("select2-results-dept-" + i), q.addClass("select2-result"), q.addClass(n ? "select2-result-selectable" : "select2-result-unselectable"), o && q.addClass("select2-disabled"), p && q.addClass("select2-result-with-children"), q.addClass(h.opts.formatResultCssClass(m)), r = a(document.createElement("div")), r.addClass("select2-result-label"), t = c.formatResult(m, r, f, h.opts.escapeMarkup), t !== b && r.html(t), q.append(r), p && (s = a("<ul></ul>"), s.addClass("select2-result-sub"), g(m.children, s, i + 1), q.append(s)), q.data("select2-data", m), e.append(q) }, g(e, d, 0)
                        }
                    }, a.fn.select2.defaults, c), "function" != typeof c.id && (f = c.id, c.id = function(a) { return a[f] }), a.isArray(c.element.data("select2Tags"))) {
                    if ("tags" in c) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + c.element.attr("id");
                    c.tags = c.element.data("select2Tags")
                }
                if (e ? (c.query = this.bind(function(a) {
                        var f, g, i, c = { results: [], more: !1 },
                            e = a.term;
                        i = function(b, c) {
                            var d;
                            b.is("option") ? a.matcher(e, b.text(), b) && c.push(h.optionToData(b)) : b.is("optgroup") && (d = h.optionToData(b), b.children().each2(function(a, b) { i(b, d.children) }), d.children.length > 0 && c.push(d))
                        }, f = d.children(), this.getPlaceholder() !== b && f.length > 0 && (g = this.getPlaceholderOption(), g && (f = f.not(g))), f.each2(function(a, b) { i(b, c.results) }), a.callback(c)
                    }), c.id = function(a) { return a.id }, c.formatResultCssClass = function(a) { return a.css }) : "query" in c || ("ajax" in c ? (g = c.element.data("ajax-url"), g && g.length > 0 && (c.ajax.url = g), c.query = G.call(c.element, c.ajax)) : "data" in c ? c.query = H(c.data) : "tags" in c && (c.query = I(c.tags), c.createSearchChoice === b && (c.createSearchChoice = function(b) { return { id: a.trim(b), text: a.trim(b) } }), c.initSelection === b && (c.initSelection = function(b, d) {
                        var e = [];
                        a(r(b.val(), c.separator)).each(function() {
                            var b = { id: this, text: this },
                                d = c.tags;
                            a.isFunction(d) && (d = d()), a(d).each(function() { return q(this.id, b.id) ? (b = this, !1) : void 0 }), e.push(b)
                        }), d(e)
                    }))), "function" != typeof c.query) throw "query function not defined for Select2 " + c.element.attr("id");
                return c
            },
            monitorSource: function() {
                var c, a = this.opts.element;
                a.on("change.select2", this.bind(function() { this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection() })), c = this.bind(function() {
                    var d, f = a.prop("disabled");
                    f === b && (f = !1), this.enable(!f);
                    var d = a.prop("readonly");
                    d === b && (d = !1), this.readonly(d), D(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(K(this.opts.containerCssClass)), D(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(K(this.opts.dropdownCssClass))
                }), a.on("propertychange.select2 DOMAttrModified.select2", c), this.mutationCallback === b && (this.mutationCallback = function(a) { a.forEach(c) }), "undefined" != typeof WebKitMutationObserver && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new WebKitMutationObserver(this.mutationCallback), this.propertyObserver.observe(a.get(0), { attributes: !0, subtree: !1 }))
            },
            triggerSelect: function(b) { var c = a.Event("select2-selecting", { val: this.id(b), object: b }); return this.opts.element.trigger(c), !c.isDefaultPrevented() },
            triggerChange: function(b) { b = b || {}, b = a.extend({}, b, { type: "change", val: this.val() }), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(b), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur() },
            isInterfaceEnabled: function() { return this.enabledInterface === !0 },
            enableInterface: function() {
                var a = this._enabled && !this._readonly,
                    b = !a;
                return a === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", b), this.close(), this.enabledInterface = a, !0)
            },
            enable: function(a) { a === b && (a = !0), this._enabled !== a && (this._enabled = a, this.opts.element.prop("disabled", !a), this.enableInterface()) },
            disable: function() { this.enable(!1) },
            readonly: function(a) { return a === b && (a = !1), this._readonly === a ? !1 : (this._readonly = a, this.opts.element.prop("readonly", a), this.enableInterface(), !0) },
            opened: function() { return this.container.hasClass("select2-dropdown-open") },
            positionDropdown: function() {
                var q, r, s, t, b = this.dropdown,
                    c = this.container.offset(),
                    d = this.container.outerHeight(!1),
                    e = this.container.outerWidth(!1),
                    f = b.outerHeight(!1),
                    g = a(window).scrollLeft() + a(window).width(),
                    h = a(window).scrollTop() + a(window).height(),
                    i = c.top + d,
                    j = c.left,
                    l = h >= i + f,
                    m = c.top - f >= this.body().scrollTop(),
                    n = b.outerWidth(!1),
                    o = g >= j + n,
                    p = b.hasClass("select2-drop-above");
                this.opts.dropdownAutoWidth ? (t = a(".select2-results", b)[0], b.addClass("select2-drop-auto-width"), b.css("width", ""), n = b.outerWidth(!1) + (t.scrollHeight === t.clientHeight ? 0 : k.width), n > e ? e = n : n = e, o = g >= j + n) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body().css("position") && (q = this.body().offset(), i -= q.top, j -= q.left), p ? (r = !0, !m && l && (r = !1)) : (r = !1, !l && m && (r = !0)), o || (j = c.left + e - n), r ? (i = c.top - f, this.container.addClass("select2-drop-above"), b.addClass("select2-drop-above")) : (this.container.removeClass("select2-drop-above"), b.removeClass("select2-drop-above")), s = a.extend({ top: i, left: j, width: e }, K(this.opts.dropdownCss)), b.css(s)
            },
            shouldOpen: function() { var b; return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (b = a.Event("select2-opening"), this.opts.element.trigger(b), !b.isDefaultPrevented()) },
            clearDropdownAlignmentPreference: function() { this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above") },
            open: function() { return this.shouldOpen() ? (this.opening(), !0) : !1 },
            opening: function() {
                var f, b = this.containerId,
                    c = "scroll." + b,
                    d = "resize." + b,
                    e = "orientationchange." + b;
                this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body().children().last()[0] && this.dropdown.detach().appendTo(this.body()), f = a("#select2-drop-mask"), 0 == f.length && (f = a(document.createElement("div")), f.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), f.hide(), f.appendTo(this.body()), f.on("mousedown touchstart click", function(b) {
                    var d, c = a("#select2-drop");
                    c.length > 0 && (d = c.data("select2"), d.opts.selectOnBlur && d.selectHighlighted({ noFocus: !0 }), d.close({ focus: !1 }), b.preventDefault(), b.stopPropagation())
                })), this.dropdown.prev()[0] !== f[0] && this.dropdown.before(f), a("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), f.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
                var h = this;
                this.container.parents().add(window).each(function() { a(this).on(d + " " + c + " " + e, function() { h.positionDropdown() }) })
            },
            close: function() {
                if (this.opened()) {
                    var b = this.containerId,
                        c = "scroll." + b,
                        d = "resize." + b,
                        e = "orientationchange." + b;
                    this.container.parents().add(window).each(function() { a(this).off(c).off(d).off(e) }), this.clearDropdownAlignmentPreference(), a("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), this.clearSearch(), this.search.removeClass("select2-active"), this.opts.element.trigger(a.Event("select2-close"))
                }
            },
            externalSearch: function(a) { this.open(), this.search.val(a), this.updateResults(!1) },
            clearSearch: function() {},
            getMaximumSelectionSize: function() { return K(this.opts.maximumSelectionSize) },
            ensureHighlightVisible: function() {
                var c, d, e, f, g, h, i, b = this.results;
                if (d = this.highlight(), !(0 > d)) {
                    if (0 == d) return b.scrollTop(0), void 0;
                    c = this.findHighlightableChoices().find(".select2-result-label"), e = a(c[d]), f = e.offset().top + e.outerHeight(!0), d === c.length - 1 && (i = b.find("li.select2-more-results"), i.length > 0 && (f = i.offset().top + i.outerHeight(!0))), g = b.offset().top + b.outerHeight(!0), f > g && b.scrollTop(b.scrollTop() + (f - g)), h = e.offset().top - b.offset().top, 0 > h && "none" != e.css("display") && b.scrollTop(b.scrollTop() + h)
                }
            },
            findHighlightableChoices: function() { return this.results.find(".select2-result-selectable:not(.select2-disabled)") },
            moveHighlight: function(b) { for (var c = this.findHighlightableChoices(), d = this.highlight(); d > -1 && d < c.length;) { d += b; var e = a(c[d]); if (e.hasClass("select2-result-selectable") && !e.hasClass("select2-disabled") && !e.hasClass("select2-selected")) { this.highlight(d); break } } },
            highlight: function(b) { var d, e, c = this.findHighlightableChoices(); return 0 === arguments.length ? o(c.filter(".select2-highlighted")[0], c.get()) : (b >= c.length && (b = c.length - 1), 0 > b && (b = 0), this.removeHighlight(), d = a(c[b]), d.addClass("select2-highlighted"), this.ensureHighlightVisible(), e = d.data("select2-data"), e && this.opts.element.trigger({ type: "select2-highlight", val: this.id(e), choice: e }), void 0) },
            removeHighlight: function() { this.results.find(".select2-highlighted").removeClass("select2-highlighted") },
            countSelectableResults: function() { return this.findHighlightableChoices().length },
            highlightUnderEvent: function(b) {
                var c = a(b.target).closest(".select2-result-selectable");
                if (c.length > 0 && !c.is(".select2-highlighted")) {
                    var d = this.findHighlightableChoices();
                    this.highlight(d.index(c))
                } else 0 == c.length && this.removeHighlight()
            },
            loadMoreIfNeeded: function() {
                var c, a = this.results,
                    b = a.find("li.select2-more-results"),
                    e = this.resultsPage + 1,
                    f = this,
                    g = this.search.val(),
                    h = this.context;
                0 !== b.length && (c = b.offset().top - a.offset().top - a.height(), c <= this.opts.loadMorePadding && (b.addClass("select2-active"), this.opts.query({ element: this.opts.element, term: g, page: e, context: h, matcher: this.opts.matcher, callback: this.bind(function(c) { f.opened() && (f.opts.populateResults.call(this, a, c.results, { term: g, page: e, context: h }), f.postprocessResults(c, !1, !1), c.more === !0 ? (b.detach().appendTo(a).text(f.opts.formatLoadMore(e + 1)), window.setTimeout(function() { f.loadMoreIfNeeded() }, 10)) : b.remove(), f.positionDropdown(), f.resultsPage = e, f.context = c.context, this.opts.element.trigger({ type: "select2-loaded", items: c })) }) })))
            },
            tokenize: function() {},
            updateResults: function(c) {
                function m() { d.removeClass("select2-active"), h.positionDropdown() }

                function n(a) { e.html(a), m() }
                var g, i, l, d = this.search,
                    e = this.results,
                    f = this.opts,
                    h = this,
                    j = d.val(),
                    k = a.data(this.container, "select2-last-term");
                if ((c === !0 || !k || !q(j, k)) && (a.data(this.container, "select2-last-term", j), c === !0 || this.showSearchInput !== !1 && this.opened())) {
                    l = ++this.queryCount;
                    var o = this.getMaximumSelectionSize();
                    if (o >= 1 && (g = this.data(), a.isArray(g) && g.length >= o && J(f.formatSelectionTooBig, "formatSelectionTooBig"))) return n("<li class='select2-selection-limit'>" + f.formatSelectionTooBig(o) + "</li>"), void 0;
                    if (d.val().length < f.minimumInputLength) return J(f.formatInputTooShort, "formatInputTooShort") ? n("<li class='select2-no-results'>" + f.formatInputTooShort(d.val(), f.minimumInputLength) + "</li>") : n(""), c && this.showSearch && this.showSearch(!0), void 0;
                    if (f.maximumInputLength && d.val().length > f.maximumInputLength) return J(f.formatInputTooLong, "formatInputTooLong") ? n("<li class='select2-no-results'>" + f.formatInputTooLong(d.val(), f.maximumInputLength) + "</li>") : n(""), void 0;
                    f.formatSearching && 0 === this.findHighlightableChoices().length && n("<li class='select2-searching'>" + f.formatSearching() + "</li>"), d.addClass("select2-active"), this.removeHighlight(), i = this.tokenize(), i != b && null != i && d.val(i), this.resultsPage = 1, f.query({
                        element: f.element,
                        term: d.val(),
                        page: this.resultsPage,
                        context: null,
                        matcher: f.matcher,
                        callback: this.bind(function(g) {
                            var i;
                            if (l == this.queryCount) {
                                if (!this.opened()) return this.search.removeClass("select2-active"), void 0;
                                if (this.context = g.context === b ? null : g.context, this.opts.createSearchChoice && "" !== d.val() && (i = this.opts.createSearchChoice.call(h, d.val(), g.results), i !== b && null !== i && h.id(i) !== b && null !== h.id(i) && 0 === a(g.results).filter(function() { return q(h.id(this), h.id(i)) }).length && g.results.unshift(i)), 0 === g.results.length && J(f.formatNoMatches, "formatNoMatches")) return n("<li class='select2-no-results'>" + f.formatNoMatches(d.val()) + "</li>"), void 0;
                                e.empty(), h.opts.populateResults.call(this, e, g.results, { term: d.val(), page: this.resultsPage, context: null }), g.more === !0 && J(f.formatLoadMore, "formatLoadMore") && (e.append("<li class='select2-more-results'>" + h.opts.escapeMarkup(f.formatLoadMore(this.resultsPage)) + "</li>"), window.setTimeout(function() { h.loadMoreIfNeeded() }, 10)), this.postprocessResults(g, c), m(), this.opts.element.trigger({ type: "select2-loaded", items: g })
                            }
                        })
                    })
                }
            },
            cancel: function() { this.close() },
            blur: function() { this.opts.selectOnBlur && this.selectHighlighted({ noFocus: !0 }), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus") },
            focusSearch: function() { y(this.search) },
            selectHighlighted: function(a) {
                var b = this.highlight(),
                    c = this.results.find(".select2-highlighted"),
                    d = c.closest(".select2-result").data("select2-data");
                d ? (this.highlight(b), this.onSelect(d, a)) : a && a.noFocus && this.close()
            },
            getPlaceholder: function() { var a; return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((a = this.getPlaceholderOption()) !== b ? a.text() : b) },
            getPlaceholderOption: function() { if (this.select) { var a = this.select.children().first(); if (this.opts.placeholderOption !== b) return "first" === this.opts.placeholderOption && a || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select); if ("" === a.text() && "" === a.val()) return a } },
            initContainerWidth: function() {
                function c() {
                    var c, d, e, f, g;
                    if ("off" === this.opts.width) return null;
                    if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
                    if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                        if (c = this.opts.element.attr("style"), c !== b)
                            for (d = c.split(";"), f = 0, g = d.length; g > f; f += 1)
                                if (e = d[f].replace(/\s/g, "").match(/[^-]width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== e && e.length >= 1) return e[1];
                        return "resolve" === this.opts.width ? (c = this.opts.element.css("width"), c.indexOf("%") > 0 ? c : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
                    }
                    return a.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                }
                var d = c.call(this);
                null !== d && this.container.css("width", d)
            }
        }), e = N(d, {
            createContainer: function() { var b = a(document.createElement("div")).attr({ "class": "select2-container" }).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow'><b></b></span>", "</a>", "<input class='select2-focusser select2-offscreen' type='text'/>", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>", "   </div>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join("")); return b },
            enableInterface: function() { this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled()) },
            opening: function() {
                var c, d, e;
                this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.search.focus(), c = this.search.get(0), c.createTextRange ? (d = c.createTextRange(), d.collapse(!1), d.select()) : c.setSelectionRange && (e = this.search.val().length, c.setSelectionRange(e, e)), "" === this.search.val() && this.nextSearchTerm != b && (this.search.val(this.nextSearchTerm), this.search.select()), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(a.Event("select2-open"))
            },
            close: function(a) { this.opened() && (this.parent.close.apply(this, arguments), a = a || { focus: !0 }, this.focusser.removeAttr("disabled"), a.focus && this.focusser.focus()) },
            focus: function() { this.opened() ? this.close() : (this.focusser.removeAttr("disabled"), this.focusser.focus()) },
            isFocused: function() { return this.container.hasClass("select2-container-active") },
            cancel: function() { this.parent.cancel.apply(this, arguments), this.focusser.removeAttr("disabled"), this.focusser.focus() },
            destroy: function() { a("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments) },
            initContainer: function() {
                var b, d = this.container,
                    e = this.dropdown;
                this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0), this.selection = b = d.find(".select2-choice"), this.focusser = d.find(".select2-focusser"), this.focusser.attr("id", "s2id_autogen" + g()), a("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.focusser.attr("id")), this.focusser.attr("tabindex", this.elementTabIndex), this.search.on("keydown", this.bind(function(a) {
                    if (this.isInterfaceEnabled()) {
                        if (a.which === c.PAGE_UP || a.which === c.PAGE_DOWN) return A(a), void 0;
                        switch (a.which) {
                            case c.UP:
                            case c.DOWN:
                                return this.moveHighlight(a.which === c.UP ? -1 : 1), A(a), void 0;
                            case c.ENTER:
                                return this.selectHighlighted(), A(a), void 0;
                            case c.TAB:
                                return this.selectHighlighted({ noFocus: !0 }), void 0;
                            case c.ESC:
                                return this.cancel(a), A(a), void 0
                        }
                    }
                })), this.search.on("blur", this.bind(function() { document.activeElement === this.body().get(0) && window.setTimeout(this.bind(function() { this.search.focus() }), 0) })), this.focusser.on("keydown", this.bind(function(a) { if (this.isInterfaceEnabled() && a.which !== c.TAB && !c.isControl(a) && !c.isFunctionKey(a) && a.which !== c.ESC) { if (this.opts.openOnEnter === !1 && a.which === c.ENTER) return A(a), void 0; if (a.which == c.DOWN || a.which == c.UP || a.which == c.ENTER && this.opts.openOnEnter) { if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey) return; return this.open(), A(a), void 0 } return a.which == c.DELETE || a.which == c.BACKSPACE ? (this.opts.allowClear && this.clear(), A(a), void 0) : void 0 } })), t(this.focusser), this.focusser.on("keyup-change input", this.bind(function(a) {
                    if (this.opts.minimumResultsForSearch >= 0) {
                        if (a.stopPropagation(), this.opened()) return;
                        this.open()
                    }
                })), b.on("mousedown", "abbr", this.bind(function(a) { this.isInterfaceEnabled() && (this.clear(), B(a), this.close(), this.selection.focus()) })), b.on("mousedown", this.bind(function(b) { this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), A(b) })), e.on("mousedown", this.bind(function() { this.search.focus() })), b.on("focus", this.bind(function(a) { A(a) })), this.focusser.on("focus", this.bind(function() { this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active") })).on("blur", this.bind(function() { this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(a.Event("select2-blur"))) })), this.search.on("focus", this.bind(function() { this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active") })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.setPlaceholder()
            },
            clear: function(b) {
                var c = this.selection.data("select2-data");
                if (c) {
                    var d = a.Event("select2-clearing");
                    if (this.opts.element.trigger(d), d.isDefaultPrevented()) return;
                    var e = this.getPlaceholderOption();
                    this.opts.element.val(e ? e.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), b !== !1 && (this.opts.element.trigger({ type: "select2-removed", val: this.id(c), choice: c }), this.triggerChange({ removed: c }))
                }
            },
            initSelection: function() {
                if (this.isPlaceholderOptionSelected()) this.updateSelection(null), this.close(), this.setPlaceholder();
                else {
                    var c = this;
                    this.opts.initSelection.call(null, this.opts.element, function(a) { a !== b && null !== a && (c.updateSelection(a), c.close(), c.setPlaceholder()) })
                }
            },
            isPlaceholderOptionSelected: function() { var a; return this.getPlaceholder() ? (a = this.getPlaceholderOption()) !== b && a.is(":selected") || "" === this.opts.element.val() || this.opts.element.val() === b || null === this.opts.element.val() : !1 },
            prepareOpts: function() {
                var b = this.parent.prepareOpts.apply(this, arguments),
                    c = this;
                return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function(a, b) {
                    var d = a.find(":selected");
                    b(c.optionToData(d))
                } : "data" in b && (b.initSelection = b.initSelection || function(c, d) {
                    var e = c.val(),
                        f = null;
                    b.query({ matcher: function(a, c, d) { var g = q(e, b.id(d)); return g && (f = d), g }, callback: a.isFunction(d) ? function() { d(f) } : a.noop })
                }), b
            },
            getPlaceholder: function() { return this.select && this.getPlaceholderOption() === b ? b : this.parent.getPlaceholder.apply(this, arguments) },
            setPlaceholder: function() {
                var a = this.getPlaceholder();
                if (this.isPlaceholderOptionSelected() && a !== b) {
                    if (this.select && this.getPlaceholderOption() === b) return;
                    this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
                }
            },
            postprocessResults: function(a, b, c) {
                var d = 0,
                    e = this;
                if (this.findHighlightableChoices().each2(function(a, b) { return q(e.id(b.data("select2-data")), e.opts.element.val()) ? (d = a, !1) : void 0 }), c !== !1 && (b === !0 && d >= 0 ? this.highlight(d) : this.highlight(0)), b === !0) {
                    var g = this.opts.minimumResultsForSearch;
                    g >= 0 && this.showSearch(L(a.results) >= g)
                }
            },
            showSearch: function(b) { this.showSearchInput !== b && (this.showSearchInput = b, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !b), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !b), a(this.dropdown, this.container).toggleClass("select2-with-searchbox", b)) },
            onSelect: function(a, b) {
                if (this.triggerSelect(a)) {
                    var c = this.opts.element.val(),
                        d = this.data();
                    this.opts.element.val(this.id(a)), this.updateSelection(a), this.opts.element.trigger({ type: "select2-selected", val: this.id(a), choice: a }), this.nextSearchTerm = this.opts.nextSearchTerm(a, this.search.val()), this.close(), b && b.noFocus || this.focusser.focus(), q(c, this.id(a)) || this.triggerChange({ added: a, removed: d })
                }
            },
            updateSelection: function(a) {
                var d, e, c = this.selection.find(".select2-chosen");
                this.selection.data("select2-data", a), c.empty(), null !== a && (d = this.opts.formatSelection(a, c, this.opts.escapeMarkup)), d !== b && c.append(d), e = this.opts.formatSelectionCssClass(a, c), e !== b && c.addClass(e), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== b && this.container.addClass("select2-allowclear")
            },
            val: function() {
                var a, c = !1,
                    d = null,
                    e = this,
                    f = this.data();
                if (0 === arguments.length) return this.opts.element.val();
                if (a = arguments[0], arguments.length > 1 && (c = arguments[1]), this.select) this.select.val(a).find(":selected").each2(function(a, b) { return d = e.optionToData(b), !1 }), this.updateSelection(d), this.setPlaceholder(), c && this.triggerChange({ added: d, removed: f });
                else {
                    if (!a && 0 !== a) return this.clear(c), void 0;
                    if (this.opts.initSelection === b) throw new Error("cannot call val() if initSelection() is not defined");
                    this.opts.element.val(a), this.opts.initSelection(this.opts.element, function(a) { e.opts.element.val(a ? e.id(a) : ""), e.updateSelection(a), e.setPlaceholder(), c && e.triggerChange({ added: a, removed: f }) })
                }
            },
            clearSearch: function() { this.search.val(""), this.focusser.val("") },
            data: function(a) { var c, d = !1; return 0 === arguments.length ? (c = this.selection.data("select2-data"), c == b && (c = null), c) : (arguments.length > 1 && (d = arguments[1]), a ? (c = this.data(), this.opts.element.val(a ? this.id(a) : ""), this.updateSelection(a), d && this.triggerChange({ added: a, removed: c })) : this.clear(d), void 0) }
        }), f = N(d, {
            createContainer: function() { var b = a(document.createElement("div")).attr({ "class": "select2-container select2-container-multi" }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join("")); return b },
            prepareOpts: function() {
                var b = this.parent.prepareOpts.apply(this, arguments),
                    c = this;
                return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function(a, b) {
                    var d = [];
                    a.find(":selected").each2(function(a, b) { d.push(c.optionToData(b)) }), b(d)
                } : "data" in b && (b.initSelection = b.initSelection || function(c, d) {
                    var e = r(c.val(), b.separator),
                        f = [];
                    b.query({
                        matcher: function(c, d, g) { var h = a.grep(e, function(a) { return q(a, b.id(g)) }).length; return h && f.push(g), h },
                        callback: a.isFunction(d) ? function() {
                            for (var a = [], c = 0; c < e.length; c++)
                                for (var g = e[c], h = 0; h < f.length; h++) { var i = f[h]; if (q(g, b.id(i))) { a.push(i), f.splice(h, 1); break } }
                            d(a)
                        } : a.noop
                    })
                }), b
            },
            selectChoice: function(a) {
                var b = this.container.find(".select2-search-choice-focus");
                b.length && a && a[0] == b[0] || (b.length && this.opts.element.trigger("choice-deselected", b), b.removeClass("select2-search-choice-focus"), a && a.length && (this.close(), a.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", a)))
            },
            destroy: function() { a("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments) },
            initContainer: function() {
                var d, b = ".select2-choices";
                this.searchContainer = this.container.find(".select2-search-field"), this.selection = d = this.container.find(b);
                var e = this;
                this.selection.on("click", ".select2-search-choice:not(.select2-locked)", function() { e.search[0].focus(), e.selectChoice(a(this)) }), this.search.attr("id", "s2id_autogen" + g()), a("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.search.attr("id")), this.search.on("input paste", this.bind(function() { this.isInterfaceEnabled() && (this.opened() || this.open()) })), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function(a) {
                    if (this.isInterfaceEnabled()) {
                        ++this.keydowns;
                        var b = d.find(".select2-search-choice-focus"),
                            e = b.prev(".select2-search-choice:not(.select2-locked)"),
                            f = b.next(".select2-search-choice:not(.select2-locked)"),
                            g = z(this.search);
                        if (b.length && (a.which == c.LEFT || a.which == c.RIGHT || a.which == c.BACKSPACE || a.which == c.DELETE || a.which == c.ENTER)) { var h = b; return a.which == c.LEFT && e.length ? h = e : a.which == c.RIGHT ? h = f.length ? f : null : a.which === c.BACKSPACE ? (this.unselect(b.first()), this.search.width(10), h = e.length ? e : f) : a.which == c.DELETE ? (this.unselect(b.first()), this.search.width(10), h = f.length ? f : null) : a.which == c.ENTER && (h = null), this.selectChoice(h), A(a), h && h.length || this.open(), void 0 }
                        if ((a.which === c.BACKSPACE && 1 == this.keydowns || a.which == c.LEFT) && 0 == g.offset && !g.length) return this.selectChoice(d.find(".select2-search-choice:not(.select2-locked)").last()), A(a), void 0;
                        if (this.selectChoice(null), this.opened()) switch (a.which) {
                            case c.UP:
                            case c.DOWN:
                                return this.moveHighlight(a.which === c.UP ? -1 : 1), A(a), void 0;
                            case c.ENTER:
                                return this.selectHighlighted(), A(a), void 0;
                            case c.TAB:
                                return this.selectHighlighted({ noFocus: !0 }), this.close(), void 0;
                            case c.ESC:
                                return this.cancel(a), A(a), void 0
                        }
                        if (a.which !== c.TAB && !c.isControl(a) && !c.isFunctionKey(a) && a.which !== c.BACKSPACE && a.which !== c.ESC) {
                            if (a.which === c.ENTER) { if (this.opts.openOnEnter === !1) return; if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey) return }
                            this.open(), (a.which === c.PAGE_UP || a.which === c.PAGE_DOWN) && A(a), a.which === c.ENTER && A(a)
                        }
                    }
                })), this.search.on("keyup", this.bind(function() { this.keydowns = 0, this.resizeSearch() })), this.search.on("blur", this.bind(function(b) { this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), b.stopImmediatePropagation(), this.opts.element.trigger(a.Event("select2-blur")) })), this.container.on("click", b, this.bind(function(b) { this.isInterfaceEnabled() && (a(b.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.open(), this.focusSearch(), b.preventDefault())) })), this.container.on("focus", b, this.bind(function() { this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder()) })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.clearSearch()
            },
            enableInterface: function() { this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled()) },
            initSelection: function() {
                if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
                    var c = this;
                    this.opts.initSelection.call(null, this.opts.element, function(a) { a !== b && null !== a && (c.updateSelection(a), c.close(), c.clearSearch()) })
                }
            },
            clearSearch: function() {
                var a = this.getPlaceholder(),
                    c = this.getMaxSearchWidth();
                a !== b && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(a).addClass("select2-default"), this.search.width(c > 0 ? c : this.container.css("width"))) : this.search.val("").width(10)
            },
            clearPlaceholder: function() { this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default") },
            opening: function() { this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), this.updateResults(!0), this.search.focus(), this.opts.element.trigger(a.Event("select2-open")) },
            close: function() { this.opened() && this.parent.close.apply(this, arguments) },
            focus: function() { this.close(), this.search.focus() },
            isFocused: function() { return this.search.hasClass("select2-focused") },
            updateSelection: function(b) {
                var c = [],
                    d = [],
                    e = this;
                a(b).each(function() { o(e.id(this), c) < 0 && (c.push(e.id(this)), d.push(this)) }), b = d, this.selection.find(".select2-search-choice").remove(), a(b).each(function() { e.addSelectedChoice(this) }), e.postprocessResults()
            },
            tokenize: function() {
                var a = this.search.val();
                a = this.opts.tokenizer.call(this, a, this.data(), this.bind(this.onSelect), this.opts), null != a && a != b && (this.search.val(a), a.length > 0 && this.open())
            },
            onSelect: function(a, b) { this.triggerSelect(a) && (this.addSelectedChoice(a), this.opts.element.trigger({ type: "selected", val: this.id(a), choice: a }), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(a, !1, this.opts.closeOnSelect === !0), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() && this.updateResults(!0), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({ added: a }), b && b.noFocus || this.focusSearch()) },
            cancel: function() { this.close(), this.focusSearch() },
            addSelectedChoice: function(c) {
                var j, k, d = !c.locked,
                    e = a("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),
                    f = a("<li class='select2-search-choice select2-locked'><div></div></li>"),
                    g = d ? e : f,
                    h = this.id(c),
                    i = this.getVal();
                j = this.opts.formatSelection(c, g.find("div"), this.opts.escapeMarkup), j != b && g.find("div").replaceWith("<div>" + j + "</div>"), k = this.opts.formatSelectionCssClass(c, g.find("div")), k != b && g.addClass(k), d && g.find(".select2-search-choice-close").on("mousedown", A).on("click dblclick", this.bind(function(b) { this.isInterfaceEnabled() && (a(b.target).closest(".select2-search-choice").fadeOut("fast", this.bind(function() { this.unselect(a(b.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), this.close(), this.focusSearch() })).dequeue(), A(b)) })).on("focus", this.bind(function() { this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active")) })), g.data("select2-data", c), g.insertBefore(this.searchContainer), i.push(h), this.setVal(i)
            },
            unselect: function(a) {
                var c, d, b = this.getVal();
                if (a = a.closest(".select2-search-choice"), 0 === a.length) throw "Invalid argument: " + a + ". Must be .select2-search-choice";
                if (c = a.data("select2-data")) {
                    for (;
                        (d = o(this.id(c), b)) >= 0;) b.splice(d, 1), this.setVal(b), this.select && this.postprocessResults();
                    a.remove(), this.opts.element.trigger({ type: "removed", val: this.id(c), choice: c }), this.triggerChange({ removed: c })
                }
            },
            postprocessResults: function(a, b, c) {
                var d = this.getVal(),
                    e = this.results.find(".select2-result"),
                    f = this.results.find(".select2-result-with-children"),
                    g = this;
                e.each2(function(a, b) {
                    var c = g.id(b.data("select2-data"));
                    o(c, d) >= 0 && (b.addClass("select2-selected"), b.find(".select2-result-selectable").addClass("select2-selected"))
                }), f.each2(function(a, b) { b.is(".select2-result-selectable") || 0 !== b.find(".select2-result-selectable:not(.select2-selected)").length || b.addClass("select2-selected") }), -1 == this.highlight() && c !== !1 && g.highlight(0), !this.opts.createSearchChoice && !e.filter(".select2-result:not(.select2-selected)").length > 0 && (!a || a && !a.more && 0 === this.results.find(".select2-no-results").length) && J(g.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + g.opts.formatNoMatches(g.search.val()) + "</li>")
            },
            getMaxSearchWidth: function() { return this.selection.width() - s(this.search) },
            resizeSearch: function() {
                var a, b, c, d, e, f = s(this.search);
                a = C(this.search) + 10, b = this.search.offset().left, c = this.selection.width(), d = this.selection.offset().left, e = c - (b - d) - f, a > e && (e = c - f), 40 > e && (e = c - f), 0 >= e && (e = a), this.search.width(Math.floor(e))
            },
            getVal: function() { var a; return this.select ? (a = this.select.val(), null === a ? [] : a) : (a = this.opts.element.val(), r(a, this.opts.separator)) },
            setVal: function(b) {
                var c;
                this.select ? this.select.val(b) : (c = [], a(b).each(function() { o(this, c) < 0 && c.push(this) }), this.opts.element.val(0 === c.length ? "" : c.join(this.opts.separator)))
            },
            buildChangeDetails: function(a, b) {
                for (var b = b.slice(0), a = a.slice(0), c = 0; c < b.length; c++)
                    for (var d = 0; d < a.length; d++) q(this.opts.id(b[c]), this.opts.id(a[d])) && (b.splice(c, 1), c--, a.splice(d, 1), d--);
                return { added: b, removed: a }
            },
            val: function(c, d) {
                var e, f = this;
                if (0 === arguments.length) return this.getVal();
                if (e = this.data(), e.length || (e = []), !c && 0 !== c) return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), d && this.triggerChange({ added: this.data(), removed: e }), void 0;
                if (this.setVal(c), this.select) this.opts.initSelection(this.select, this.bind(this.updateSelection)), d && this.triggerChange(this.buildChangeDetails(e, this.data()));
                else {
                    if (this.opts.initSelection === b) throw new Error("val() cannot be called if initSelection() is not defined");
                    this.opts.initSelection(this.opts.element, function(b) {
                        var c = a.map(b, f.id);
                        f.setVal(c), f.updateSelection(b), f.clearSearch(), d && f.triggerChange(f.buildChangeDetails(e, this.data()))
                    })
                }
                this.clearSearch()
            },
            onSortStart: function() {
                if (this.select) throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                this.search.width(0), this.searchContainer.hide()
            },
            onSortEnd: function() {
                var b = [],
                    c = this;
                this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function() { b.push(c.opts.id(a(this).data("select2-data"))) }), this.setVal(b), this.triggerChange()
            },
            data: function(b, c) { var e, f, d = this; return 0 === arguments.length ? this.selection.find(".select2-search-choice").map(function() { return a(this).data("select2-data") }).get() : (f = this.data(), b || (b = []), e = a.map(b, function(a) { return d.opts.id(a) }), this.setVal(e), this.updateSelection(b), this.clearSearch(), c && this.triggerChange(this.buildChangeDetails(f, this.data())), void 0) }
        }), a.fn.select2 = function() {
            var d, g, h, i, j, c = Array.prototype.slice.call(arguments, 0),
                k = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
                l = ["opened", "isFocused", "container", "dropdown"],
                m = ["val", "data"],
                n = { search: "externalSearch" };
            return this.each(function() {
                if (0 === c.length || "object" == typeof c[0]) d = 0 === c.length ? {} : a.extend({}, c[0]), d.element = a(this), "select" === d.element.get(0).tagName.toLowerCase() ? j = d.element.prop("multiple") : (j = d.multiple || !1, "tags" in d && (d.multiple = j = !0)), g = j ? new f : new e, g.init(d);
                else { if ("string" != typeof c[0]) throw "Invalid arguments to select2 plugin: " + c; if (o(c[0], k) < 0) throw "Unknown method: " + c[0]; if (i = b, g = a(this).data("select2"), g === b) return; if (h = c[0], "container" === h ? i = g.container : "dropdown" === h ? i = g.dropdown : (n[h] && (h = n[h]), i = g[h].apply(g, c.slice(1))), o(c[0], l) >= 0 || o(c[0], m) && 1 == c.length) return !1 }
            }), i === b ? this : i
        }, a.fn.select2.defaults = { width: "copy", loadMorePadding: 0, closeOnSelect: !0, openOnEnter: !0, containerCss: {}, dropdownCss: {}, containerCssClass: "", dropdownCssClass: "", formatResult: function(a, b, c, d) { var e = []; return E(a.text, c.term, e, d), e.join("") }, formatSelection: function(a, c, d) { return a ? d(a.text) : b }, sortResults: function(a) { return a }, formatResultCssClass: function() { return b }, formatSelectionCssClass: function() { return b }, formatNoMatches: function() { return "No matches found" }, formatInputTooShort: function(a, b) { var c = b - a.length; return "Please enter " + c + " more character" + (1 == c ? "" : "s") }, formatInputTooLong: function(a, b) { var c = a.length - b; return "Please delete " + c + " character" + (1 == c ? "" : "s") }, formatSelectionTooBig: function(a) { return "You can only select " + a + " item" + (1 == a ? "" : "s") }, formatLoadMore: function() { return "Loading more results..." }, formatSearching: function() { return "Searching..." }, minimumResultsForSearch: 0, minimumInputLength: 0, maximumInputLength: null, maximumSelectionSize: 0, id: function(a) { return a.id }, matcher: function(a, b) { return n("" + b).toUpperCase().indexOf(n("" + a).toUpperCase()) >= 0 }, separator: ",", tokenSeparators: [], tokenizer: M, escapeMarkup: F, blurOnChange: !1, selectOnBlur: !1, adaptContainerCssClass: function(a) { return a }, adaptDropdownCssClass: function() { return null }, nextSearchTerm: function() { return b } }, a.fn.select2.ajaxDefaults = { transport: a.ajax, params: { type: "GET", cache: !1, dataType: "json" } }, window.Select2 = { query: { ajax: G, local: H, tags: I }, util: { debounce: v, markMatch: E, escapeMarkup: F, stripDiacritics: n }, "class": { "abstract": d, single: e, multi: f } }
    }
}(jQuery);