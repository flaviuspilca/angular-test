# Welcome to the Poll app

This app allows a user to create a question, visualise it and see the results in real time.

There are two types of users that can use this app: 

- the 'owner' which is the person that generates the question and has full permissions on it;
- the 'respondent' which can only view the generated question, vote and see the results.

The view switch between these two user roles can be made using the top left two buttons.

### Owner view

As an 'owner' you can first type in a question text and then add answer options until the limit of 10 answers is reached.
The question text and answers must be valid alphanumerical strings. Symbol characters are also accepted.
There is no possibility to provide an empty string as question text or answer.
Once the owner provides a valid question text and at least two valid answer options the 'Publish' button, once clicked, will show the newly generated question with the option to vote for any of the given responses. Also, in the bottom of the page there will be displayed a statistic view, showing the total votes and how many votes each response got.
The owner has also the possibility to destroy the created question, by clicking 'Reset' button. This button will also clear the other two views: the published question view and the results view.

### Respondent view

As a 'respondent' you can only see the published question view and the results view.
Note that if there is no question published, no relevant information will be shown.
The respondent has only the ability to vote for the given responses.



# Technical info

This small project was developed using Angular 10 and Bootstrap.


