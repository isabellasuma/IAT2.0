define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js'], function(APIConstructor, iatExtension){
    let API = new APIConstructor();
    let global = API.getGlobal();

    return iatExtension({
        category1 : {
            name : global.blackLabels, //Will appear in the data.
            title : {
                media : {word : global.blackLabels}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'images/black/CFD-WF-002-004-N.jpg'},
                {image: 'images/black/CFD-WF-010-004-N.jpg'},
                {image: 'images/black/CFD-WF-026-002-N.jpg'},
                {image: 'images/black/CFD-WF-034-006-N.jpg'},
                {image: 'images/black/CFD-WF-204-038-N.jpg'},                 
                {image: 'images/black/CFD-WF-210-086-N.jpg'},
                {image: 'images/black/CFD-WF-224-099-N.jpg'},
                {image: 'images/black/CFD-WF-240-083-N.jpg'},
                {image: 'images/black/CFD-WF-248-129-N.jpg'},
                {image: 'images/black/CFD-WF-250-167-N.jpg'}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 : {
            name : global.whiteLabels, //Will appear in the data.
            title : {
                media : {word : global.whiteLabels}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'images/white/CFD-WF-003-003-N.jpg'},
                {image: 'images/white/CFD-WF-012-002-N.jpg'},
                {image: 'images/white/CFD-WF-022-017-N.jpg'},
                {image: 'images/white/CFD-WF-024-003-N.jpg'},
                {image: 'images/white/CFD-WF-027-003-N.jpg'},
                {image: 'images/white/CFD-WF-205-006-N.jpg'},
                {image: 'images/white/CFD-WF-220-101-N.jpg'},
                {image: 'images/white/CFD-WF-233-112-N.jpg'},
                {image: 'images/white/CFD-WF-238-023-N.jpg'},
                {image: 'images/white/CFD-WF-242-001-N.jpg'}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
        attribute1 : {
            name : 'Bad words',
            title : {
                media : {word : 'Bad words'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.negWords[0]},
                {word: global.negWords[1]},
                {word: global.negWords[2]},
                {word: global.negWords[3]},
                {word: global.negWords[4]},
                {word: global.negWords[5]},
                {word: global.negWords[6]},
                {word: global.negWords[7]}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        attribute2 : {
            name : 'Good words',
            title : {
                media : {word : 'Good words'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.posWords[0]},
                {word: global.posWords[1]},
                {word: global.posWords[2]},
                {word: global.posWords[3]},
                {word: global.posWords[4]},
                {word: global.posWords[5]},
                {word: global.posWords[6]},
                {word: global.posWords[7]}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        base_url : {//Where are your images at?
            image : global.baseURL
        },
        isTouch : global.$isTouch
    });
});

