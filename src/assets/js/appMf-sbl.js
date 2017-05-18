Foundation.Accordion.defaults.multiExpand = true;
Foundation.Accordion.defaults.allowAllClosed = true;
Foundation.Reveal.deepLink = true;
Foundation.Reveal.fullScreen = true;
Foundation.Reveal.resetOnClose = true;
Foundation.Reveal.vOffset = 0;
Foundation.Dropdown.defaults.vOffset = 11;  
Foundation.Abide.defaults.patterns['digits_dashes'] = /^[0-9-]*$/;
Foundation.Abide.defaults.patterns['tel'] = /^\(?\d{3}\)?[\s+|-]?\d{3}[\s+|-]?\d{4}/;
Foundation.Abide.defaults['validators']['checked_required'] =
  function ($el, required, parent) {
    var group = parent.closest('.checked-group');
    var min = group.attr('data-validator-abide-min') || 1;
    var max = group.attr('data-validator-abide-max') || 9999;
    var checked = group.find(':checked').length;
    if (checked >= min  && checked <= max) {
      group.find('label, legend').filter('.is-invalid-label').removeClass('is-invalid-label');
      group.find('[data-abide-error]').hide();   
      return true;
    } else {
      group.find('label, legend').each(function() { $(this).addClass('is-invalid-label'); });
      group.find('[data-abide-error]').css({ display: 'block' });
      group.find('[data-validator="checked_required"]').siblings('label').addBack().on('click', function(){ 
        group.find('[data-abide-error]').hide().end().find('label, legend').filter('.is-invalid-label').removeClass('is-invalid-label');
      });
      return false;
    }
  };

$(document).foundation();
