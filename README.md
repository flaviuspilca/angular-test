# Welcome to the Poll app

This app allows a user to create a question, visualise it and see the results in real time.


Use cases:
- As the owner, I want to change my poll question;
- As the owner, I want to add, edit or remove the options of my poll;
- As the owner, I want to reset the whole form, including answers;
- As the user, I want to see the UI refresh automatically when something changes;
- As the respondent, I want to send several answers;
- As the respondent, I want to see the changes in real time.

Non-functional requirements:
- All fields have a limit of 80 characters;
- When the limit is reached, fields should be disabled;
- There should be always at least 2 options;
- The user can vote as many times as possible;
- The chart needs to adapt to the changes in the amount of answers or labels without missing
values;
- The reset button should reset the whole UI: question, options and answers.


There are two types of users that can use this app: 

- the 'owner' which is the person that generates the question and has full permissions on it;
- the 'respondent' which can only view the generated question, vote and see the results.

The view switch between these two user roles can be made using the top left two buttons.

### Owner view

As an 'owner' you can first type in a question text and then add answer options until the limit of 10 answers is reached.
The question text and answers must be valid alphanumerical strings. Symbol characters are also accepted.
There is no possibility to provide an empty string as question text or answer.
Once the owner provides a valid question text and at least two valid answer options, the 'Publish' button, once clicked, will show the newly generated question with the option to vote for any of the given responses. Also, in the bottom of the page there will be displayed a statistic view, showing the total votes and how many votes each response got.
The owner has also the possibility to destroy the created question, by clicking 'Reset' button. This button will also clear the other two views: the published question view and the results view. It will also clear all the votes provided until that time.

### Respondent view

As a 'respondent' you can only see the published question view and the results view.
Note that if there is no question published, no relevant information will be shown.
The respondent has only the ability to vote for the given responses.



# Technical info

This project was developed using Angular 10 and Bootstrap.

# Demo link

https://flaviuspilca.github.io/poll-app/
