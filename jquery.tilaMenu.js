/*
 * Metadata - jQuery plugin for creating menu from h1, h2, ... of your content
 *
 * Copyright (c) 2015 Nicolas Matheu
 *
 * Licensed under the GNU GENERAL PUBLIC LICENSE Version 2
 *
 */
(function($) {
    /**
     * Create menu from content's headings
     *
     * @name tilaMenu
     * @descr Create menu from content's headings
     * @param options An object contianing settings to override the defaults
     * @type jQuery
     */
    $.fn.tilaMenu=function(options){
        /* Default params */
        var defauts=
        {
            idPrefix: 'tilaMenu',
            menu: '#tilaMenu',
            title: 'h2',
            beforeItem: '<li>',
            afterItem: '</li>'
        };
        var config=$.extend(defauts, options);
        return this.each(function(){
            $(this).find(config.title).each(function(){
                var h2content = $(this).html();
                if(h2content.match(/:\s?$/g)){
                    h2content=h2content.replace(':','');
                }
                var h2id = Math.floor((Math.random() * 999999) + 100000);
                $(this).attr('id','autoH2-'+h2id);
                $(config.menu).append(config.beforeItem+'<a href="#'+config.idPrefix+'-'+h2id+'">'+h2content+'</a>'+config.afterItem);
            });
        });
    };
})(jQuery);