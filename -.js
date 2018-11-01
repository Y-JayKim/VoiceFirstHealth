{
    "interactionModel": {
        "languageModel": {
            "invocationName": "health voice",
            "intents": [
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.StopIntent",
                    "samples": []
                },
                {
                    "name": "AnswerIntent",
                    "slots": [
                        {
                            "name": "Answer",
                            "type": "AMAZON.NUMBER"
                        }
                    ],
                    "samples": [
                        "the answer is {Answer}",
                        "my answer is {Answer}",
                        "is it {Answer}",
                        "{Answer} is my answer",
                        "{Answer}"
                    ]
                },
                {
                    "name": "DontKnowIntent",
                    "slots": [],
                    "samples": [
                        "i don't know",
                        "don't know",
                        "i don't know that one",
                        "dunno",
                        "skip",
                        "i don't know that",
                        "who knows",
                        "i don't know this question"
                    ]
                },
                {
                    "name": "AMAZON.StartOverIntent",
                    "samples": [
                        "start game",
                        "new game",
                        "start",
                        "start new game"
                    ]
                },
                {
                    "name": "AMAZON.RepeatIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.YesIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.NoIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.MoreIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.NavigateHomeIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.NavigateSettingsIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.NextIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.PageUpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.PageDownIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.PreviousIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.ScrollRightIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.ScrollDownIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.ScrollLeftIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.ScrollUpIntent",
                    "samples": []
                },
                {
                    "name": "UserNameIntent",
                    "slots": [
                        {
                            "name": "Username",
                            "type": "AMAZON.US_FIRST_NAME"
                        }
                    ],
                    "samples": [
                        "I am {Username}",
                        "My name is {Username}",
                        "{Username}"
                    ]
                },
                {
                    "name": "TopicIntent",
                    "slots": [
                        {
                            "name": "UserTopic",
                            "type": "SkillModule"
                        }
                    ],
                    "samples": [
                        "I want {UserTopic}",
                        "{UserTopic} please",
                        "I want to do {UserTopic}",
                        "{UserTopic}"
                    ]
                },
                {
                    "name": "ConcussionTopicSelectionIntent",
                    "slots": [
                        {
                            "name": "UserConcussionTopic",
                            "type": "ConcussionTopic"
                        }
                    ],
                    "samples": [
                        "Uh {UserConcussionTopic}",
                        "{UserConcussionTopic} please",
                        "{UserConcussionTopic}"
                    ]
                }
            ],
            "types": [
                {
                    "name": "SkillModule",
                    "values": [
                        {
                            "name": {
                                "value": "concussion"
                            }
                        }
                    ]
                },
                {
                    "name": "ConcussionTopic",
                    "values": [
                        {
                            "name": {
                                "value": "Assessment"
                            }
                        },
                        {
                            "name": {
                                "value": "Question"
                            }
                        }
                    ]
                }
            ]
        }
    }
}