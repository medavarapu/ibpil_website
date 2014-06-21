

(function($) {

    function Maps(el, options) {

        options = options || {};

        this.defaults = {
            address: 'film nagar hyderabad, india',
            zoom: 13,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false,
            scrollwheel: true,
            image: '',
            styles: [
                {
                    stylers: [
                        { hue: options.hue },
                        { saturation: options.saturation },
                        { lightness: options.lightness }
                    ]
                }
            ]
        };

        this.options = $.extend({}, this.defaults, options);
        this.$el = $(el);
    }

    Maps.prototype = {

        init: function() {
            var that = this,
                geocoder = new google.maps.Geocoder();

            geocoder.geocode({
                'address': this.options.address
            }, function(results, status) {
                if ( status === google.maps.GeocoderStatus.OK ) {
                    var map = that.drawMap(results),
                        marker = that.placeMarker(map, results);
                }
            });
        },

        drawMap: function(results) {
            var mapDetails = { center: results[0].geometry.location },
                finalOptions = $.extend({}, this.options, mapDetails),
                map = new google.maps.Map(this.$el[0], finalOptions);

            return map;
        },

        placeMarker: function(map, results) {
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                icon: this.options.image,
                animation: google.maps.Animation.DROP
            });
        }
    };

    $.fn.Maps = function(options) {
        if ( this.length ) {
            this.each(function() {
                var rev = new Maps(this, options);
                rev.init();
                $(this).data('Maps', rev);
            });
        }
    };
})(jQuery);