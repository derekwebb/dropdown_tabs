; $Id: README.txt,v 1.1 2009/12/07 02:05:03 collectivecolors Exp $

Overview
--------------------------------------------------------------------------------
Dropdown Tabs does only one thing:  It takes the menu items that are in your 
primary and secondary tabs, and turns them into dropdown select boxes.  The 
reason that we built this module was to help us conserve a bit of space and keep 
the site somewhat tidy.  

Usage
--------------------------------------------------------------------------------
1: Turn on the module at admin/build/modules.
2: Navigate to admin/build/block and configure the Dropdown Tabs block. Note 
   that the Dropdown Tabs block content may float left, right, or not at all.
3: Place the Dropdown Tabs block into a region OR inject the block manually into 
   a template file with the following code: 
   
<?php 
  $block = module_invoke('dropdown_tabs', 'block', 'view'); 
  print $block['content'];
?> 

Additional info
--------------------------------------------------------------------------------
There are several theme functions available to you. The three that will probably 
be most relevant to the everyday Drupal developer are the theme functions named: 
dropdown_tabs_form_right, dropdown_tabs_form_left, and 
dropdown_tabs_form_center.

Note
--------------------------------------------------------------------------------
According to many sources dropdown select boxes are not an optimal choice for 
usability.  On our site most users will not need to use the local tasks so we 
think the benefits outweight the costs.  If your site users rely on the local 
tasks then you may want to either stick with regular tabs or give the users a 
choice.  Some people simply don't like dropdown select boxes...
  