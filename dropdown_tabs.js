// $Id: dropdown_tabs.js,v 1.1 2009/12/07 02:05:03 collectivecolors Exp $ 
Drupal.behaviors.dropdownTabsInitialize = function(context) {
	/* For the tabs submit button */
	$('#dropdown-tabs-form .form-submit').css('display', 'none');
	$('.dropdown-tabs-select-box').change(function(){
		$('#dropdown-tabs-form').submit();		
	});
};