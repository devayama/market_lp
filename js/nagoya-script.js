// Nagoya MA - Overlay button handlers for Line redirect and calling a number.
(function(){
    // Standard Google Ads Conversion Reporter
    function gtag_report_conversion(url, conversion_id_label) {
        var callback = function () {
            if (typeof(url) != 'undefined') {
                window.location.href = url;
            }
        };
        
        if(typeof gtag !== 'undefined'){
            gtag('event', 'conversion', {
                'send_to': conversion_id_label,
                'event_callback': callback,
                'event_timeout': 2000
            });
        } else {
            callback();
        }
        return false;
    }

    document.addEventListener('DOMContentLoaded', function(){
        // Disable anchor link clicks on all images to prevent opening
        var allAnchors = document.querySelectorAll('a');
        allAnchors.forEach(function(anchor){
            anchor.addEventListener('click', function(e){
                e.preventDefault();
            });
        });
        
        var clickableAreas = document.querySelectorAll('.clickable-area');
        
        clickableAreas.forEach(function(area){
            area.addEventListener('click', function(e){
                e.preventDefault();
                e.stopPropagation();
                
                var action = this.getAttribute('data-action');
                var clickableId = this.getAttribute('data-clickable-id');
                
                // Get custom location name from parent anchor
                var parentAnchor = this.closest('a');
                var locationName = parentAnchor ? parentAnchor.getAttribute('data-location') : null;
                var sectionName = this.getAttribute('data-section');
                
                // Define event details for Google Analytics
                var eventName = '';
                var eventCategory = 'button_click';
                var eventLabel = '';
                
                // Build label with section if available
                var labelPrefix = locationName;
                if(sectionName){
                    labelPrefix = locationName + '_' + sectionName;
                }
                
                // Map clickable IDs to specific button events
                if(action === 'line'){
                    eventName = 'line_button_click';
                    eventLabel = labelPrefix ? labelPrefix + '_line' : 'line_button_' + clickableId;
                } else if(action === 'call'){
                    eventName = 'call_button_click';
                    eventLabel = labelPrefix ? labelPrefix + '_call' : 'call_button_' + clickableId;
                }
                
                // Console log for debugging
                console.log('Event:', eventName, '| Category:', eventCategory, '| Label:', eventLabel);
                
                // Google Analytics 4 (gtag.js) tracking
                if(typeof gtag !== 'undefined'){
                    gtag('event', eventName, {
                        'event_category': eventCategory,
                        'event_label': eventLabel,
                        'button_id': clickableId,
                        'button_action': action,
                        'location_name': locationName || 'image_' + clickableId
                    });
                }
                
                // Universal Analytics (analytics.js) tracking - for backwards compatibility
                if(typeof ga !== 'undefined'){
                    ga('send', 'event', eventCategory, eventName, eventLabel);
                }
                
                // Execute action - Nagoya specific
                if(action === 'line'){
                    var lineUrl = 'https://liff.line.me/2007384640-yj8nm8g3/landing?follow=%40931ezxtl&lp=dmcDf2&liff_id=2007384640-yj8nm8g3';
                    window.open(lineUrl, '_blank');
                    
                } else if(action === 'call'){
                    var phoneNumber = '052-526-9777'; // Nagoya Phone
                    var telUrl = 'tel:' + phoneNumber;
                    
                    // --- GOOGLE ADS CONVERSION TRACKING (NAGOYA) ---
                    // ID: AW-17075364618, Label: uVJyCIC4l9IbEIrGlc4_
                    var conversionLabel = 'AW-17075364618/uVJyCIC4l9IbEIrGlc4_';
                    
                    gtag_report_conversion(telUrl, conversionLabel);
                }
            });
        });
    });
})();