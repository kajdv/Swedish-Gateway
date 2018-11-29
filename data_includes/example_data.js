var shuffleSequence = seq("consent","setcounter","intro");
var practiceItemTypes = ["practice"];




var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: false,
        saveReactionTime: true,
    }
];

// NB needs edit as indicated below! 

var items = [

    ["setcounter", "__SetCounter__", { } ] 
    ,    
    ["consent", "PennController", PennController(
        newHtml("consent", "ProlificConsent.html")
            .settings.log()
            .print()
        ,
        newButton("consent btn", "Jag g&aring;r med p&aring; att delta i denna studie.")
            .print()
            .wait( getHtml("consent").test.complete().failure( getHtml("consent").warn() ) )
    )]
    ,
//    template
//    [["intro", 1], "Form", {
//        continueMessage: null,
//        html:  "<a id='link'> Click here to begin the experiment!</a>"+
//               "<script>document.getElementById('link').setAttribute('href', 'LINK TO EXPT 1 (without url-parameters; ends with experiment.html)?source='+PennController.GetURLParameter("source"));</script>"} ,
//              "__SendResults__", {
//      manualSendResults: true,      
//    }]
//    ,
    [["intro", 1], "Form", {
        continueMessage: null,
        html:  "<a id='link'> Click here to begin the experiment!</a>"+
               "<script>document.getElementById('link').setAttribute('href', 'http://spellout.net/ibexexps/KD/Sw_MCP_V2/experiment.html?source='+PennController.GetURLParameter("source"));</script>"} ,
              "__SendResults__", {
      manualSendResults: true,  
    }]
    ,    
    [["intro", 1], "Form", {
        continueMessage: null,
        html:  "<a id='link'> Click here to begin the experiment!</a>"+
               "<script>document.getElementById('link').setAttribute('href', 'http://spellout.net/ibexexps/KD/Sw_MCP_SpAct/experiment.html?source='+PennController.GetURLParameter("source"));</script>"} ,
              "__SendResults__", {
      manualSendResults: true,  
    }]
    ,     
    [["intro", 1], "Form", {
        continueMessage: null,
        html:  "<a id='link'> Click here to begin the experiment!</a>"+
               "<script>document.getElementById('link').setAttribute('href', 'http://spellout.net/ibexexps/KD/Sw_MCP_unm/experiment.html?source='+PennController.GetURLParameter("source"));</script>"} ,
              "__SendResults__", {
      manualSendResults: true,  
    }]
    ,     
    [["intro", 1], "Form", {
        continueMessage: null,
        html:  "<a id='link'> Click here to begin the experiment!</a>"+
               "<script>document.getElementById('link').setAttribute('href', 'spellout.net/ibexexps/KD/Sw_DF_AHbel/experiment.html?source='+PennController.GetURLParameter("source"));</script>"} ,
              "__SendResults__", {
      manualSendResults: true,  
    }]
    , 
    [["intro", 1], "Form", {
        continueMessage: null,
        html:  "<a id='link'> Click here to begin the experiment!</a>"+
               "<script>document.getElementById('link').setAttribute('href', 'http://spellout.net/ibexexps/KD/Sw_DF_SpBel/experiment.html?source='+PennController.GetURLParameter("source"));</script>"} ,
              "__SendResults__", {
      manualSendResults: true,  
    }]
    ,      
    [["intro", 1], "Form", {
        continueMessage: null,
        html:  "<a id='link'> Click here to begin the experiment!</a>"+
               "<script>document.getElementById('link').setAttribute('href', 'http://spellout.net/ibexexps/KD/Sw_DF_DiscFam/experiment.html?source='+PennController.GetURLParameter("source"));</script>"} ,
              "__SendResults__", {
      manualSendResults: true,  
    }]
    ,     
];
