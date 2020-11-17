Survey.StylesManager.applyTheme("modern");

var surveyJSON = {
    "title": "Employment Screening",
    "completedHtml": "<h3>Thank you for completing survey in single page</h3>",
    "completedHtmlOnCondition": [
    {},
    {}
    ],
    "pages": [
     {
      "name": "Screening",
      "elements": [
       {
        "type": "comment",
        "name": "tell-me",
        "title": "Tell me about how you and candidate worked together?"
       },
       {
        "type": "radiogroup",
        "name": "accomplishment",
        "title": "Did candidate have any major accomplishments while working for you?",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         }
        ],
        "hasOther": true,
        "otherText": "N/A"
       },
       {
        "type": "rating",
        "name": "problem-solving",
        "title": "For this position, we need someone who can solve the problem. How would you rate candidate on that?",
        "rateMin": 0,
        "rateMax": 10,
        "minRateDescription": "Most unlikely",
        "maxRateDescription": "Most likely"
       },
       {
        "type": "comment",
        "name": "strengths",
        "title": "What are candidate’s greatest strengths?"
       },
       {
        "type": "comment",
        "name": "question1",
        "title": "What are candidate’s biggest weaknesses? Is there any area where she/he would need additional support in her/his first 90 days?"
       },
       {
        "type": "radiogroup",
        "name": "listener",
        "title": "Was candidate a good communicator and listener?",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "NO"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "promotions",
        "title": "Did candidate receive any promotions while at your company?",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         }
        ]
       },
       {
        "type": "rating",
        "name": "comparison",
        "title": "On a scale of 1 to 10, compared to other people you’ve hired, how would you rate the candidate?",
        "rateMax": 10,
        "minRateDescription": "Least",
        "maxRateDescription": "Most "
       },
       {
        "type": "comment",
        "name": "leave",
        "title": "Why did candidate leave your company?"
       },
       {
        "type": "radiogroup",
        "name": "question2",
        "title": "Would you rehire the candidate?",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Maybe"
         }
        ]
       }
      ],
     }
    ]
   }

window.survey = new Survey.Model(surveyJSON);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyContainer").Survey({ model: survey });