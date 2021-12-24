# workday-scheduler

TODO:

When I refresh, I want the calender blocks to retain the text that was previously written.

When I click off a calender block without clicking save, I want the calender block to have a background color of red to indicate that it is not saved.

DESCRIPTION::

This homework includes the use of HTML, CSS, and Javascript. Though the HTML and CSS was written for us, I made some edits primarily in the CSS to add a default style to the textarea. Most of the work was done within Javascript. 

CURRENT DAY FUNCTION

In javascript, I have the current day listed in the jumbotron using moment. I have an interval constantly looping at 100 milliseconds so if the day were to change while on the site, the time will update. 

SAVE FUNCTIONS

I have the save functions set up for each individual hour. the save functions change the background of the textarea when you click the save button, and logs the text within the textarea into the user's local storage. This is done so when the page is reloaded, data is pulled from the local storage and the text you have written within the textarea is still there. 

UNSAVED FUNCTION

The unsaved function simply changes the color of the textarea to red when you do not save. This is to indicate to the user that the text within that specific hour textarea was not saved and will not be there when the website is refreshed.

// I just added an if statement so the box does not turn red if you did not input text when you click on the textarea box.

JAVASCRIPT LINES 109-113 

These lines are what allows the site to maintain the text within the textarea when the page is refreshed. It uses a loop in order to have less code and be more efficient (I could not figure out how to loop the unsaved and save functions without breaking my code). What the code is doing is pulling data from the local storage, and inserting that data into their respective hour textarea. For example, when you type text into the 2PM block and click save, the text written within that 2PM text block will be logged into the user's local storage. When the page is reloaded, the script from lines 109-113 goes through each hour block, which is listed as calender1,calender2, etc., and sees if it has corresponding local storage data. 